<template>
  <div class="contact-page">
    <!-- 头部导航栏 -->
    <detail-nav
      :navtitle="title"
      :navTitleChild="contanctList[showLeft]"
    ></detail-nav>
    <div class="content-box">
      <!-- 左边侧边栏 -->
      <left-tab
        :leftTitle="title"
        :LeftList="contanctList"
        :showLeft="showLeft"
        @handleClickLeft="handleClickLeft"
      ></left-tab>
      <div class="contact-right">
        <div class="contact-content">
          <div class="contact-title">
            <nav>
              <span>{{ contanctList[showLeft] }}</span>
            </nav>
          </div>
          <div class="contact-address">
            <p>地址：{{ companyInfo.address }}，</p>
            <p>电话: {{ companyInfo.phone }}</p>
            <p>传真：{{ companyInfo.faxNumber }}</p>
            <p>电子邮箱：{{ companyInfo.email }}</p>
          </div>
          <div class="contact-map">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNav from "../components/detail/detail-nav";
import LeftTab from "../components/left-tab";
import { COMPANY_INFO } from "../../src/assets/data/appData";

export default {
  name: "ContanctUs",
  data() {
    return {
      title: "联系我们",
      contanctList: ["联系方式"],
      showLeft: 0,
      companyInfo: COMPANY_INFO,
    };
  },
  components: {
    DetailNav,
    LeftTab,
  },
  methods: {
    handleClickLeft(index) {
      this.showLeft = index;
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
.content-box {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .contact-right {
    flex: 1;
    background: #ffffff;
    min-height: 100vh;
    margin-bottom: 40px;
  }
}

.contact-content {
  width: 934px;
  max-height: 820px;
  background: #ffffff;
  margin-left: 17px;
  margin-bottom: 40px;
  @include displayflex(space-between, center, column, nowrap);
  @extend .box-border;
  padding: 0 40px;
  .contact-title {
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
  }
  .contact-address {
    width: 100%;
    margin-top: 20px;
    text-align: left;
    p {
      margin-bottom: 20px;
      font-family: "PingFangSC-Regular";
      font-size: 20px;
      color: rgba(58, 58, 58, 1);
      line-height: 40px;
      letter-spacing: 1px;
    }
  }
}
</style>
