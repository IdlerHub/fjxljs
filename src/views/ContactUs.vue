<template>
  <div class="contact-page">
    <!-- 头部导航栏 -->
    <detail-nav
      :navtitle="title"
      :navTitleChild="contanctList[contanctId]"
    ></detail-nav>
    <div class="content-box">
      <!-- 左边侧边栏 -->
      <left-tab
        :leftTitle="title"
        :LeftList="contanctList"
        :showLeft="contanctId"
        @handleClickLeft="handleClickLeft"
      ></left-tab>
      <div class="contact-right">
        <div class="contact-content">
          <div class="contact-title">
            <nav>
              <span>{{ contanctList[contanctId] }}</span>
            </nav>
          </div>
          <div class="contact-address">
            <p>地 址：{{ companyInfo.address }}</p>
            <p>邮政编码：{{ companyInfo.postaCode }}</p>
            <p>官网地址: {{ companyInfo.webUrl }}</p>

            <!-- <p>电话: {{ companyInfo.phone }}</p>
            <p>传真：{{ companyInfo.faxNumber }}</p>
            <p>电子邮箱：{{ companyInfo.email }}</p> -->
          </div>
          <div id="container" class="contact-map">
            <baidu-map
            map-type="BMAP_HYBRID_MAP"
              class="bm-view"
              :center="center"
              :zoom="zoom"
              ak="9Wy9bqP6PY2imiMZtp50Aiwf6OOKXigL"
            >
             <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
              <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
              <bm-marker
                :position="center"
                :dragging="true"
                animation="BMAP_ANIMATION_BOUNCE"
              >
                <bm-label content="福建新朗建设有限公司" :labelStyle="{color: 'red', fontSize : '16px'}" :offset="{width: -35, height: -50}"/>
              </bm-marker>
            </baidu-map>
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
import { NAVIGATORList } from "../assets/data/appData";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmNavigation from "vue-baidu-map/components/controls/Navigation.vue";
import BmScale from "vue-baidu-map/components/controls/Scale.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker.vue";
import BmLabel from "vue-baidu-map/components/overlays/Label.vue";
export default {
  name: "ContanctUs",
  data() {
    return {
      title: "",
      contanctList: [],
      contanctId: 0,
      showLeft: 6,
      companyInfo: COMPANY_INFO,
      center: { lng: 116.805015, lat: 26.173564 },
      zoom: 15,
    };
  },
  components: {
    DetailNav,
    LeftTab,
    BaiduMap,
    BmNavigation,
    BmScale,
    BmMarker,
    BmLabel,
  },
  mounted() {
    this.contanctId = this.$route.query.id;
    this.title = NAVIGATORList[this.showLeft].label;
    NAVIGATORList[this.showLeft].subNav.forEach((item) => {
      this.contanctList.push(item.label);
    });
    // var map = new BMapGL.Map("container");
    // var point = new BMapGL.Point(116.404, 39.915);
  },
  methods: {
    handleClickLeft(index) {
      this.$router.push(`/${this.$route.path.split("/")[1]}?id=${index}`);
      this.contanctId = index;
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
  .contact-map {
    width: 100%;
    height: 400px;
    .bm-view {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
