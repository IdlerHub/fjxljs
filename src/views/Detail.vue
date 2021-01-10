<template>
  <div>
    <!-- 头部导航栏 -->
    <detail-nav
      :navtitle="title"
      :navTitleChild="detailLeftList[detailId]"
    ></detail-nav>
    <div class="content-box">
      <!-- 左边侧边栏 -->
      <left-tab
        :leftTitle="title"
        :LeftList="detailLeftList"
        :showLeft="detailId"
        @handleClickLeft="handleClickLeft"
      ></left-tab>
      <div class="detail-right">
        <h1 class="title">{{ aboutUsDetail[detailId].title }}</h1>
        <!-- 加粗标题 -->
        <div class="content" v-if="aboutUsDetail[detailId].type == 'title'">
          <div
            class="b-title"
            v-for="(text, index) in aboutUsDetail[detailId].content"
            :key="index"
          >
            <p class="b-title-bold" v-if="index % 2 == 0">{{ text }}</p>
            <p v-else>{{ text }}</p>
          </div>
        </div>
        <!-- 纯图片形式 -->
        <div class="content" v-else-if="aboutUsDetail[detailId].type == 'img'">
          <div class="content-img">
            <img
              :src="img"
              v-for="(img, index) in aboutUsDetail[detailId].content"
              :key="index"
            />
          </div>
        </div>
        <div class="content" v-else-if="aboutUsDetail[detailId].type == 'oneImg'" >
          <!-- 大图 -->
          <div class="content-img-big">
            <img
              :src="img"
              v-for="(img, index) in aboutUsDetail[detailId].content"
              :key="index"
            />
          </div>
        </div>
        <!-- 普通文本段落 -->
        <div class="content" v-else>
          <p
            v-for="(text, index) in aboutUsDetail[detailId].content"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
        <p class="user-name" v-if="aboutUsDetail[detailId].userName">
          <img :src="aboutUsDetail[detailId].userName" alt="黄金钟" />
        </p>
        <p class="footer">{{ aboutUsDetail[detailId].footer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNav from "../components/detail/detail-nav";
import LeftTab from "../components/left-tab";
import { ABOUT_US_DETAIL } from "../assets/data/detailData";
import { NAVIGATORList } from "../assets/data/appData";
export default {
  name: "Detail",
  data() {
    return {
      title: "",
      detailLeftList: [],
      showLeft: 0,
      detailId: 0,
      aboutUsDetail: ABOUT_US_DETAIL,
    };
  },
  components: {
    DetailNav,
    LeftTab,
  },
  mounted() {
    this.detailId = this.$route.query.id;
    this.title = NAVIGATORList[this.showLeft].label;
    NAVIGATORList[this.showLeft].subNav.forEach((item) => {
      this.detailLeftList.push(item.label);
    });
  },
  methods: {
    handleClickLeft(index) {
      this.$router.push(`/${this.$route.path.split("/")[1]}?id=${index}`);
      this.detailId = index;
    },
  },
  watch: {
    $route() {
      if (this.$route.query.id != this.detailId) {
        this.detailId = this.$route.query.id;
      }
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

._activeli {
  color: #104c8b !important;
  cursor: pointer !important;
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

.content-box {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .detail-right {
    flex: 1;
    background: #ffffff;
    min-height: 100vh;
    margin-bottom: 40px;
    .title {
      margin-top: 60px;
      @include font-style("PingFangSC-Medium", 30px, rgba(58, 58, 58, 1), 500);
      line-height: 44px;
      text-align: center;
    }
    .content {
      margin: 30px 60px 80px 60px;
      @include font-style("PingFangSC-Regular", 20px, rgba(58, 58, 58, 1), 400);
      line-height: 40px;
      letter-spacing: 1px;
      // 标题文字
      .b-title {
        .b-title-bold {
          text-indent: 0;
          font-weight: 600;
        }
      }
      // 纯图片
      .content-img {
        width: 100%;
        margin-bottom: 50px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        img {
          width: 260px;
          height: 200px;
          margin-bottom: 20px;
        }
      }
      //唯一大图
      .content-img-big {
        width: 100%;
        height: 400px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    //作者名字
    .user-name {
      margin: 0 60px 60px 60px;
      text-align: right;
      img {
        width: 200px;
      }
    }
    .footer {
      margin: 0 60px 60px 60px;
      @include font-style("PingFangSC-Regular", 20px, rgba(58, 58, 58, 1), 400);
      line-height: 40px;
      letter-spacing: 1px;
      text-align: right;
    }
    p {
      text-indent: 2em;
      text-align: left;
    }
  }
}
</style>
