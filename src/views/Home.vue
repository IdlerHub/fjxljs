<template>
  <div>
    <div class="content">
      <div class="container">
        <!-- 关于我们 -->
        <div class="home-img-list">
          <section>
            <swiper :options="swiperOptions" v-if="swiperSlides.mid">
              <swiper-slide v-for="item in swiperSlides.mid" :key="item.id">
                <img :src="item.image" />
              </swiper-slide>
              <template v-if="swiperSlides.mid.length > 1">
                <div class="swiper-pagination" slot="pagination"></div>
              </template>
            </swiper>
          </section>
        </div>
        <section class="aboutus">
          <div class="about-us-img">
            <img
              src="../assets/images/about.jpg"
              alt
            />
          </div>
          <span class="division-line"></span>
          <div class="about-us">
            <header>公司简介</header>
            <div class="about-us-content">
              <article>
                福建新朗建设有限公司是一家集公路、水利、房建、市政于一体的大型综合性建筑企业。公司创建于2012年09月，公司现有公路工程施工总承包二级、公路交通工程（公路安全设施分项）专业承包二级、水利水电施工总承包叁级、房屋建筑工程施工总承包叁级、市政公用工程施工总承包叁级及钢结构工程专业承包叁级、古建筑工程专业承包叁级、环保工程专业承包叁级、城市及道路照明工程专业承包叁级等经营资质。
              </article>
            </div>
            <div class="footer">
              <div class="more" @click="toAboutDetail">了解更多</div>
            </div>
          </div>
        </section>

        <!-- 轮播 | 新闻 -->
        <section class="news">
          <div class="words">
            <div v-if="articles">
              <Announcement
                :an-msg="articles"
                custom="true"
              ></Announcement>
            </div>
          </div>
          <span class="division-line"></span>
          <!-- 轮播 -->
          <div
            class="swipes1"
            @mouseenter="swtichBt(true)"
            @mouseleave="swtichBt(false)"
          >
            <div>
              <swiper
                :options="swiperOptions"
                v-if="swiperSlides.head"
                ref="mySwiper1"
              >
                <swiper-slide
                  v-for="(slide, index) in swiperSlides.head"
                  :key="index"
                >
                  <img :src="slide.image" @click.stop="toSwiperDetial(slide)" />
                  <div class="Carousel-title">
                    <h3>{{ slide.title }}</h3>
                  </div>
                </swiper-slide>
                <!-- 左右按钮展示 -->
                <template v-show="btSwitch">
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </template>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </div>
        </section>

        <!-- 服务范围  -->
        <!-- <div class="service_list_met_11_1_55 text-xs-center" m-id="55">
          <div class="service-container">
            <div class="head">
              <h2 class="title">
                服务范围
              </h2>
            </div>
            <section class="service">
              <vue-seamless-scroll
                class="seamless-warp"
                :data="servicesList"
                :class-option="serviceSwiperOption"
              >
                <div class="icon-list">
                  <div
                    class="icon-item"
                    v-for="(item, index) in servicesList"
                    :key="index"
                  >
                    <img :src="item.avatar" />
                    <div>{{ item.nickname }}</div>
                  </div>
                </div>
              </vue-seamless-scroll>
            </section>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { carousel, servicesList } from "@/assets/data/homeData";
import {NEWS_LIST} from '@/assets/data/newsData'
import store from "../store";
import Announcement from "@/components/home/announcement";

export default {
  name: "HomePage",
  data() {
    return {
      swiperSlides: carousel, //轮播数组
      articles: NEWS_LIST, //左右切换型文章
      btSwitch: true, //轮播左右切换箭头展示
      swiperOptions: {
        //轮播配置
        updateOnImagesReady: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      serviceSwiperOption: {
        //服务轮播
        direction: 2,
        limitMoveNum: 2,
      },
      servicesList: servicesList, //服务内容
    };
  },
  methods: {
    swtichBt: function(bl) {
      this.btSwitch = bl;
    },
    // 轮播详情
    toSwiperDetial(slide) {
      this.$router.push({name: 'SuccessDemo', query: {id: slide.id}})
    },
    // 去公司简章
    toAboutDetail() {
      this.$router.push({name: 'Detail',query:{
        id: 0
      }})
    }
  },
  components: {
    Announcement,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  .container {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 17px;
    box-sizing: border-box;
    background: #ededed;

    .home-img-list {
      & > section {
        width: 100%;
        height: 100%;

        img {
          height: 300px;
          width: 100%;
        }
      }
    }

    // 新闻轮播
    .news {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      height: 360px;

      .swipes1 {
        flex: 1;
        position: relative;
        background: white;
        :hover {
          cursor: pointer !important;
        }
        & > div {
          position: absolute;
          width: 100%;

          .Carousel-title {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 70px;
            padding-top: 30px;
            padding-left: 20px;
            padding-bottom: 15px;
            background: rgba(#000000, 0.3);
            // background-image: url("../assets/images/home/Mask.png");
            background-size: 100% 100%;
            box-sizing: border-box;
            text-align: left;
            & > h3 {
              margin: 0;
              width: 70%;
              font-size: 18px;
              color: white;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }

          img {
            width: 100%;
            height: 360px;
          }
        }

        .swiper-pagination {
          text-align: right;
          width: 97%;
        }
      }

      .words {
        background: white;
        flex: 1;
        overflow: hidden;

        & > div {
          padding: 30px 20px;
          height: 300px;
        }
      }

      .division-line {
        width: 20px;
      }
    }

    // 关于我们
    .aboutus {
      display: flex;
      justify-content: space-between;
      background: white;
      height: 300px;
      padding: 30px 20px;
      margin-bottom: 20px;
      .about-us-img {
        width: 500px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .division-line {
        width: 30px;
      }

      .about-us {
        flex: 1;
        position: relative;
        border-width: 0;
        height: 100%;
        box-sizing: border-box;
        header {
          font-size: 20px;
          color: #000000;
          letter-spacing: 0.57px;
          text-align: left;
        }

        .about-us-content {
          border-top: 1px solid #dbdbdb;
          padding: 15px;
          margin-top: 15px;
          overflow: hidden;

          & > article {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 7;
            overflow: hidden;
            font-size: 16px;
            color: #3a3a3a;
            text-align: justify;
            line-height: 29px;
            text-indent: 32px;
          }
        }
        .footer {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100%;
          font-size: 16px;
          color: #3a3a3a;
          letter-spacing: 0.46px;
          text-align: right;
          .more {
            height: 30px;
            line-height: 30px;
            padding: 6px 30px;
            display: inline-block;
            -webkit-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
            transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
            border: #999999 1px solid;
            border: 1px solid;
            color: #999999;
            &:hover {
              border: #000000 1px solid;
              border: 1px solid;
              background-color: rgba(#104c8b, 0.7);
              color: #fff;
              text-decoration: none;
              cursor: pointer;
            }
          }
        }
      }

      .entrance {
        border: 1px solid #e9e9e9;

        & > .buttons {
          height: 260px;
          margin: 20px;
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;

          button {
            width: 150px;
            background: #e9e9e9;
            height: 54px;
            font-size: 18px;
            color: #3a3a3a;
            letter-spacing: 0.51px;
            border: 0;

            &:hover {
              background: #104c8b;
              color: white;
              cursor: pointer !important;
            }
          }

          .register {
            width: 100%;
            background: #104c8b;
            font-family: PingFangSC-Semibold;
            font-size: 20px;
            color: #ffffff;
            letter-spacing: 0.57px;

            &:hover {
              background: #a6280e;
            }
          }

          .login {
            width: 100%;
            background: #f95f17;
            font-family: PingFangSC-Medium;
            font-size: 20px;
            color: #ffffff;
            letter-spacing: 0.57px;

            &:hover {
              background: #db5415;
            }
          }
        }
      }
    }

    // 服务范围
    .service_list_met_11_1_55 {
      padding-top: 50px;
      .service-container {
        max-width: 100%;
        padding-right: 13px;
        padding-left: 13px;
        overflow: hidden;
        .head {
          margin-bottom: 30px;
          .title {
            visibility: inherit;
            opacity: 1;
            transform: matrix(1, 0, 0, 1, 0, 0);
          }
        }
        .service {
          position: relative;
          width: 100%;
          height: 190px;
          margin-bottom: 20px;

          .seamless-warp {
            position: relative;
            overflow: hidden;
            height: 190px;
            // width: 1130px;
            .icon-list {
              width: 1350px;
              height: 170px;
              display: flex;
              position: relative;
              padding: 10px 0;
              justify-content: space-around;
              align-items: center;
              overflow: hidden;

              .icon-item {
                width: 20%;
                text-align: center;
                margin: 0 20px;
                :hover {
                  cursor: pointer !important;
                }
                img {
                  width: 175px;
                  height: 66px;
                  // width: 60%;
                }

                & > div {
                  letter-spacing: 0.37px;
                  margin-top: 10px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: warp;
                  // text-overflow: -o-ellipsis-lastline;
                  // display: -webkit-box;
                  // -webkit-line-clamp: 2;
                  // line-clamp: 2;
                  // -webkit-box-orient: vertical;

                  color: rgb(153, 153, 153);
                  font-size: 13px;
                  line-height: 24px;
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
    .text-xs-center {
      text-align: center !important;
    }
  }
}

// 轮播样式
.content .swiper-pagination-bullet {
  background: #d8d8d8;
  opacity: 1;
}

.content .swiper-pagination-bullet-active {
  background: #104c8b !important;
}

.swiper-container-horizontal:hover {
  cursor: pointer !important;
}

.content .swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 12px;
  padding-right: 10px;
}
</style>
