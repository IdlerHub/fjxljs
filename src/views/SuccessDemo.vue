<template>
  <div class="successDemo">
    <!-- 头部导航栏 -->
    <detail-nav
      :navtitle="title"
      :navTitleChild="successDemoList[demoId]"
    ></detail-nav>
    <div class="success-demo-box">
      <!-- 左边侧边栏 -->
      <left-tab
        :leftTitle="title"
        :LeftList="successDemoList"
        :showLeft="demoId"
        @handleClickLeft="handleClickLeft"
      ></left-tab>
      <div class="success-demo-right">
        <div class="newscontent" v-if="demoId != 0 && showList">
          <div>
            <nav>
              <span>{{ successDemoList[demoId] }}</span>
            </nav>
            <ul class="demo-list">
              <li
                class="demo-item"
                @click="toSuccessDetail(item)"
                v-for="(item, index) in successList[demoId]['totalList'][
                  currentPage - 1
                ].list"
                :key="index"
              >
                <span class="item-title">{{ item.title }}</span>
                <span class="item-createtime">{{ item.createtime }}</span>
              </li>
            </ul>
          </div>
          <div class="news-footer">
            <el-pagination
              background
              layout="prev, pager, next"
              :current-page="currentPage"
              :total="totalNum"
              @current-change="currentPageClick"
            ></el-pagination>
          </div>
        </div>
        <!-- 经营范围 -->
        <div class="content" v-else-if="demoId == 0">
          <nav>
            <span>{{ successDemoList[demoId] }}</span>
          </nav>
          <div class="only-img">
            <div
              class="img-box"
              v-for="(item, index) in successList[demoId].contentList"
              :key="index"
              @click="watchImg(item)"
            >
              <img :src="item.img" alt />
              <!-- <div>{{ item.text }}</div> -->
            </div>
          </div>
        </div>
        <!-- 项目工程展示 -->
        <div class="content-detail" v-else>
          <nav>
            <span>{{ demoDetail.title }}</span>
          </nav>
          <img :src="demoDetail.image" alt="">
          <!-- <p><span>项目名称:</span> {{demoDetail.title}}</p> -->
          <p v-show="demoDetail.subtitle"><span>项目说明: </span></p>
          <p v-show="demoDetail.subtitle">{{demoDetail.subtitle}}</p>
        </div>
      </div>
    </div>
    <mask-img :image="showImage" v-show="showImage != ''" @changeImg='changeImg'></mask-img>
  </div>
</template>

<script>
import DetailNav from "../components/detail/detail-nav";
import LeftTab from "../components/left-tab";
import MaskImg from '../components/mask-img'
import { SUCCESS_LIST } from "../assets/data/successData";
import { NAVIGATORList } from "../assets/data/appData";
export default {
  name: "SuccessDemo",
  data() {
    return {
      title: "",
      successDemoList: [],
      showLeft: 3,
      demoId: 0,
      successList: SUCCESS_LIST,
      currentPage: 1, //当前页码
      totalNum: 5, //文章总数量
      showList: true, //展示列表
      showImage: '',  //图片放大连接
      demoDetail: {}
    };
  },
  components: {
    DetailNav,
    LeftTab,
    MaskImg
  },
  mounted() {
    this.demoId = this.$route.query.id;
    this.title = NAVIGATORList[this.showLeft].label;
    NAVIGATORList[this.showLeft].subNav.forEach((item) => {
      this.successDemoList.push(item.label);
    });
  },
  methods: {
    // 左侧点击
    handleClickLeft(index) {
      this.$router.push(`/${this.$route.path.split("/")[1]}?id=${index}`);
      this.demoId = index;
      this.showList = true
    },
    // 切换下标
    currentPageClick(currentPage) {
      console.log(currentPage);
      this.currentPage = currentPage;
    },
    toSuccessDetail(item) {
      console.log("项目详情");
      this.showList = false
      this.demoDetail = item
    },
    watchImg(item) {
      this.showImage = item.img
    },
    changeImg() {
      this.showImage = ''
    }
  },
  watch: {
    $route() {
      if (this.$route.query.id != this.demoId) {
        this.demoId = this.$route.query.id;
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
.success-demo-box {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .success-demo-right {
    flex: 1;
    background: #ffffff;
    min-height: 100vh;
    margin-bottom: 40px;
    .content-detail,
    .content {
      width: 934px;
      max-height: 820px;
      background: #ffffff;
      margin-left: 17px;
      margin-bottom: 40px;
      @include displayflex(space-between, center, column, nowrap);
      @extend .box-border;
      padding: 0 40px;
      & > nav {
        width: 100%;
        height: 73px;
        @include font-style(PingFangSC-Semibold, 20px, #104c8b, 600);
        border-bottom: 2px solid #dbdbdb;
        @include displayflex(flex-end, flex-start, column, nowrap);
        & > span {
          padding-bottom: 15px;
          border-bottom: 2px solid #104c8b;
          margin-bottom: -2px;
        }
      }
    }
    .content-detail{
      img{
        margin-top: 10px;
        width: 100%;
        height: 400px;
      }
      p{
        margin-top: 10px;
        width: 100%;
        text-align: left;
        font-size: 18px;
        span{
          font-weight: 600;
        }
      }
      p:nth-child(2n) {
        margin-top: 20px;
      }
      p:last-child{
        text-indent: 2em;
      }
    }
    .only-img {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .img-box {
        width: 250px;
        margin-right: 30px;
        margin-bottom: 10px;
        cursor: pointer;
        img {
          width: 250px;
          height: 164px;
        }
        div {
          height: 30px;
          line-height: 30px;
          font-size: 16px;
        }
      }
      .img-box:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}

.newscontent {
  width: 934px;
  max-height: 820px;
  background: #ffffff;
  margin-left: 17px;
  margin-bottom: 40px;
  @include displayflex(space-between, center, column, nowrap);
  @extend .box-border;
  padding: 0 40px;
  & > div:nth-child(1) {
    width: 100%;
    height: 100%;
    @include displayflex(flex-start, center, column, nowrap);
    & > nav {
      width: 100%;
      height: 73px;
      @include font-style(PingFangSC-Semibold, 20px, #104c8b, 600);
      border-bottom: 2px solid #dbdbdb;
      @include displayflex(flex-end, flex-start, column, nowrap);
      & > span {
        padding-bottom: 15px;
        border-bottom: 2px solid #104c8b;
        margin-bottom: -2px;
      }
    }
    & > ul {
      @extend %ulst;
      width: 100%;
      @include displayflex(flex-start, center, column, nowrap);
      box-sizing: border-box;
      & > li {
        width: 100%;
        height: 53px;
        line-height: 28px;
        padding-top: 14px;
        padding-bottom: 14px;
        @include displayflex(space-between, center, row, nowrap);
        border-bottom: 1px dashed #dbdbdb;
        cursor: pointer !important;
        text-align: left;
        .item-title {
          flex: 1;
          @include font-style(PingFangSC-Regular, 17px, #3a3a3a, 400);
          margin-right: 30px;
          &:hover {
            cursor: pointer !important;
            color: #104c8b !important;
          }
        }
        .item-createtime {
          @include font-style(PingFangSC-Regular, 14px, #7a7a7a, 400);
        }
      }
    }
  }

  & > div:nth-child(2) {
    margin-bottom: 51px;
  }
}
.adviceContent {
  width: 934px;
  margin-left: 17px;
  margin-bottom: 40px;
  padding: 17px 40px 60px 40px;
  background: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  header {
    height: 56px;
    @include font-style(PingFangSC-Semibold, 20px, #104c8b, 600);
    line-height: 56px;
    margin-bottom: 60px;
    div {
      height: 2px;
      background-color: #dbdbdb;
      border-left: 80px solid #104c8b;
    }
  }
  .form-box {
    letter-spacing: 0.5px;
    .inp-box {
      width: 100%;
      @include displayflex(flex-start, center, row, nowrap);
      height: 50px;
      margin-bottom: 20px;
      .inp-title {
        width: 123px;
        @include font-style(PingFangSC-Regular, 18px, rgba(58, 58, 58, 1), 400);
        line-height: 25px;
      }
      .inp-wrapper {
        flex: 1;
        input {
          width: 100%;
          padding: 0;
          padding-left: 20px;
          height: 50px;
          background: rgba(251, 251, 251, 1);
          box-sizing: border-box;
          border-radius: 4px;
          border: 1px solid rgba(233, 233, 233, 1);
          @include font-style(
            PingFangSC-Regular,
            18px,
            rgba(58, 58, 58, 1),
            400
          );
          line-height: 25px;
        }
      }
      .code-box {
        flex: 0 0 auto;
        width: 244px;
      }
      .img-wrapper {
        width: 120px;
        height: 50px;
        margin-left: 21px;
        margin-right: 20px;
        img {
          width: 100%;
          height: 50px;
          overflow: hidden;
        }
      }
      .font-wrapper {
        u {
          @include font-style(
            PingFangSC-Regular,
            18px,
            rgba(58, 58, 58, 1),
            400
          );
          line-height: 25px;
        }
        :hover {
          cursor: pointer !important;
        }
      }
    }
    .textarea-box {
      width: 100%;
      @include displayflex(flex-start, center, row, nowrap);
      // height: 100px;
      margin-bottom: 20px;
      .textarea-title {
        width: 123px;
        align-self: flex-start;
        @include font-style(PingFangSC-Regular, 18px, rgba(58, 58, 58, 1), 400);
        line-height: 25px;
      }
      .textarea-wrapper {
        flex: 1;
        position: relative;
        // height: 100%;
        textarea {
          resize: none;
          overflow-y: auto;
          width: 100%;
          padding: 13px 20px 18px 20px;
          height: 100px;
          background: rgba(251, 251, 251, 1);
          box-sizing: border-box;
          border-radius: 4px;
          border: 1px solid rgba(233, 233, 233, 1);
          @include font-style(
            PingFangSC-Regular,
            18px,
            rgba(58, 58, 58, 1),
            400
          );
          line-height: 25px;
        }
        .textarea1 {
          min-height: 100px;
        }
        .textarea2 {
          min-height: 200px;
        }
        .astrict-desc {
          position: absolute;
          right: 10px;
          bottom: 10px;
          // text-align: right;
          @include font-style(PingFangSC-Regular, 14px, #8f8e8e, 400);
        }
      }
    }
    .btn {
      margin-top: 40px;
      margin-left: 123px;
      box-sizing: border-box;
      width: 244px;
      height: 50px;
      background: #104c8b;
      border-radius: 4px;
      @include font-style(
        PingFangSC-Regular,
        20px,
        rgba(255, 255, 255, 1),
        400
      );
      line-height: 50px;
      text-align: center;
    }
    .btn:hover {
      cursor: pointer !important;
    }
  }
}

.news-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 32px;
  .el-pagination {
    & > .el-pager {
      & > li {
        min-width: 40px !important;
        height: 40px !important;
        line-height: 40px !important;
        border-radius: 6px !important;
        font-size: 14px !important;
        @include font-style(PingFangSC-Regular, 14px, #3a3a3a, 400);
        &:hover {
          background: #104c8b !important;
          color: #fff !important;
        }
      }
      & > .active {
        background: #104c8b !important;
        color: #fff;
      }
    }
    .btn-next {
      min-width: 40px !important;
      height: 40px !important;
      line-height: 40px !important;
      border-radius: 6px !important;
      font-size: 14px !important;
    }
  }
}
</style>
