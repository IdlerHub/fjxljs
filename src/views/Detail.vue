<template>
  <div>
    <!-- 头部导航栏 -->
    <detail-nav :navtitle="title" :navTitleChild="detailLeftList[showLeft]"></detail-nav>
    <div class="content-box">
      <!-- 左边侧边栏 -->
      <left-tab :leftTitle="title" :LeftList="detailLeftList" :showLeft="showLeft" @handleClickLeft="handleClickLeft"></left-tab>
      <div class="detail-right">
        <h1 class="title">{{ aboutUsDetail[showLeft].title }}</h1>
        <div class="content">
          <p
            v-for="(text, index) in aboutUsDetail[showLeft].content"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
        <p class="footer">{{ aboutUsDetail[showLeft].footer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNav from "../components/detail/detail-nav";
import LeftTab from "../components/left-tab";
import { ABOUT_US_DETAIL } from "../assets/data/detailData";
export default {
  name: "Detail",
  data() {
    return {
      title: '公司概况',
      detailLeftList: ["公司简介", "公司文化", "企业资质"],
      showLeft: 0,
      aboutUsDetail: ABOUT_US_DETAIL,
    };
  },
  components: {
    DetailNav,
    LeftTab
  },
  created(){
    this.showLeft = this.$route.query.id
  },
  methods: {
    handleClickLeft(index) {
      this.showLeft = index;
    },
  },
  watch:{
    $route() {
      if(this.$route.query.id != this.showLeft) {
        this.showLeft = this.$route.query.id
      }
    }
  }
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
  color:  #104c8b !important;
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
