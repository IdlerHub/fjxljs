<template>
  <div>
    <!-- 头部导航栏 -->
    <detail-nav :navtitle="title" :navTitleChild="subTitle"></detail-nav>
    <div class="artstyle">
      <div id="articlecont">
        <h1 class="articletitle">{{ articlecont.title }}</h1>
        <div class="setarticle">
          <div>
            <span>发布时间：{{ articlecont.createtime }}</span>
            <span>来源：{{ articlecont.author }}</span>
          </div>
          <div class="choicesize" v-if="showFont">
            <span>字号</span>
            <el-radio-group
              v-model="radio4"
              size="mini"
              @change="changeartsize()"
            >
              <el-radio-button label="大"></el-radio-button>
              <el-radio-button label="中"></el-radio-button>
              <el-radio-button label="小"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <!-- 正常文章 -->
        <article
          :class="[
            { contentsizeBig: size == 20 },
            { contentsizeNormal: size == 18 },
            { contentsizeSmall: size == 16 },
          ]"
        >
          <div
            class="acticle-content"
            v-for="(content, index) in articlecont.content"
            :key="index"
          >
            <div class="content-info">
              <div class="acticle-img">
                <img v-if="content.type == 'img'" :src="content.img" alt />
              </div>
              <div class="acticle-text" v-if="content.type == 'text'">
                {{ content.text }}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { INDUSTRY_CONTENT } from "../assets/data/newsData";
import DetailNav from "../components/detail/detail-nav";

export default {
  name: "NewsContent",
  data() {
    return {
      title: "新闻资讯",
      subTitle: "行业动态",
      showFont: true, //展示字体选择
      radio4: "大",
      articlecont: {}, //文章内容
      size: 18,
    };
  },
  components: {
    DetailNav,
  },
  mounted() {
    this.setSubtitle(this.$route.query.nav)
    this.setArticle();
  },
  methods: {
    //设置副标题
    setSubtitle(nav){
      switch(nav) {
        case '0': 
          this.subTitle = "行业动态"
          break;
        case '1': 
          this.subTitle = '公司新闻'
          break;
        default:
          　this.subTitle = '文章详情'
        break;
      }
    },
    // 根据id获取对应文章
    setArticle() {
      this.articlecont = INDUSTRY_CONTENT[0];
    },
    changeartsize() {
      let size = 18;
      if (this.radio4 == "大") {
        size = 20;
      } else if (this.radio4 == "中") {
        size = 18;
      } else if (this.radio4 == "小") {
        size = 16;
      }
      this.$set(this, "size", size);
    },
  },
};
</script>

<style lang="scss" scoped>
%mgto {
  margin: 0 auto;
}
%ulst {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin displayflex($row, $column, $direction, $wrap) {
  display: flex;
  @if $direction == column {
    flex-direction: column;
  } @else {
    flex-direction: row;
  }
  @if $wrap == wrap {
    flex-wrap: wrap;
  } @else {
    flex-wrap: nowrap;
  }
  justify-content: $row;
  align-items: $column;
}
.box-border {
  box-sizing: border-box;
}
@mixin font-style($family, $size, $color, $weight) {
  font-family: $family;
  font-size: $size;
  color: $color;
  font-weight: $weight;
}

$pd-lf: padding-left;

.artstyle {
  @extend %mgto;
  width: 1200px;
  background: #ffffff;
  margin-bottom: 40px;
  position: relative;
  @extend .box-border;
  padding: 80px;
  &:nth-child(1) {
    width: 100%;
    @include displayflex(flex-start, center, column, nowrap);
  }
}

%down_print {
  width: 70px;
  height: 70px;
  background: #ffffff;
  @include font-style("PingFangSC-Regular", 14px, #000000, 400);
  & > img {
    width: 26px;
    height: 26px;
  }
  border-radius: 4px;
  @include displayflex(center, center, column, nowrap);
  & > span {
    margin-top: 6px;
  }
  &:hover {
    background: #c52e0f !important;
    color: #ffffff !important;
    cursor: pointer !important;
  }
}

.articletitle {
  @include font-style("PingFangSC-Medium", 30px, #3a3a3a, 500);
  width: 1040px;
  text-align: center;
}

.setarticle {
  width: 100%;
  @include displayflex(space-between, center, row, nowrap);
  @include font-style("PingFangSC-Regular", 14px, #7a7a7a, 400);
  border-bottom: 1px dashed #dbdbdb;
  margin-bottom: 50px;
  & > div {
    margin: 40px 30px;
    &:nth-child(1) {
      & > span:nth-child(1) {
        margin-right: 40px;
      }
    }
  }
}
a {
  text-decoration: none;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
.file_url:hover {
  cursor: pointer !important;
  .font-box {
    color: #1974e7 !important;
  }
}

.choicesize {
  span {
    margin-right: 10px;
    display: inline-block;
    height: 12px;
    line-height: 12px;
  }
}

.el-radio-group {
  & > label {
    & > span {
      padding: 7px 7px !important;
      border-radius: 2px !important;
      margin-left: 6px;
      background: #f4f4f4;
      border: 0 !important;
      box-shadow: none !important;
      @include font-style("PingFangSC-Regular", 18px!important, #3a3a3a, 400);
      &:hover {
        color: #3a3a3a;
      }
    }
    & > input:checked + span {
      background: #c52e0f !important;
    }
  }
}
.contentsizeBig {
  * {
    font-family: "PingFangSC-Regular" !important;
    font-size: 20px !important;
    color: #3a3a3a !important;
    font-weight: 400 !important;
  }
}
.contentsizeNormal {
  * {
    font-family: "PingFangSC-Regular" !important;
    font-size: 18px !important;
    color: #3a3a3a !important;
    font-weight: 400 !important;
  }
}
.contentsizeSmall {
  * {
    font-family: "PingFangSC-Regular" !important;
    font-size: 16px !important;
    color: #3a3a3a !important;
    font-weight: 400 !important;
  }
}

.acticle-content {
  .content-info {
    text-indent: 2em;
    margin-bottom: 20px;
    font-family: "PingFangSC-Regular";
    font-size: 20px;
    color: rgba(58, 58, 58, 1);
    line-height: 40px;
    letter-spacing: 1px;
    .acticle-img {
      text-align: center;
    }
    .acticle-text {
      text-align: left;
    }
  }
}
</style>
