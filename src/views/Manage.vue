<template>
  <div>
    <!-- 头部导航栏 -->
    <detail-nav
      :navtitle="title"
      :navTitleChild="manageLeftList[manageId]"
    ></detail-nav>
    <div class="content-box">
      <!-- 左边侧边栏 -->
      <left-tab
        :leftTitle="title"
        :LeftList="manageLeftList"
        :showLeft="manageId"
        @handleClickLeft="handleClickLeft"
      ></left-tab>
      <div class="detail-right">
        <h1 class="title">{{ manageDetail[manageId].title }}</h1>
        <!-- 加粗标题 -->
        <div class="content" v-if="manageDetail[manageId].type == 'title'">
          <div
            class="b-title"
            v-for="(title, index) in manageDetail[manageId].content"
            :key="index"
          >
            <p class="b-title-bold">{{ title.title }}</p>
            <p v-for="(text, tIndex) in title.text" :key="tIndex">{{ text }}</p>
          </div>
        </div>

        <!-- 普通文本段落 -->
        <div
          class="content"
          v-else-if="manageDetail[manageId].type == 'img-text'"
        >
          <div class="manage-list">
            <div
              class="manage-box"
              v-for="(item, index) in manageDetail[manageId].content"
              :key="index"
            >
              <img :src="item.img" alt />
              <div>{{ item.text }}</div>
            </div>
          </div>
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
import { MANAGE_DETAIL } from "../assets/data/manageData";
import { NAVIGATORList } from "../assets/data/appData";
export default {
  name: "Manage",
  data() {
    return {
      title: "",
      manageLeftList: [],
      showLeft: 1,
      manageId: 0,
      manageDetail: MANAGE_DETAIL,
      showImage: ''
    };
  },
  components: {
    DetailNav,
    LeftTab,
    MaskImg
  },
  mounted() {
    this.manageId = this.$route.query.id;
    this.title = NAVIGATORList[this.showLeft].label;
    NAVIGATORList[this.showLeft].subNav.forEach((item) => {
      this.manageLeftList.push(item.label);
    });
  },
  methods: {
    handleClickLeft(index) {
      this.$router.push(`/${this.$route.path.split("/")[1]}?id=${index}`);
      this.manageId = index;
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
      if (this.$route.query.id != this.manageId) {
        this.manageId = this.$route.query.id;
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
        height: 400px;
        margin-bottom: 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .manage-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .manage-box {
          width: 250px;
          margin-right: 30px;
          margin-bottom: 10px;
          cursor: pointer;
          img {
            width: 250px;
            height: 164px;
          }
          div{
            height: 30px;
            line-height: 30px;
            font-size: 16px;
          }
        }
        .manage-box:nth-child(3n){
          margin-right: 0;
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
