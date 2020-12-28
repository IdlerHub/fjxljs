<template>
  <div>
    <div class="content">
      <div class="container">
        <h1
          class="title"
          v-html="headerTitle.title"
          @click="goHeaderTitle(headerTitle.id, headerTitle.live_url)"
        ></h1>
        <!-- <section class="region1">
          <div
            class="swipes1"
            @mouseenter="swtichBt(true)"
            @mouseleave="swtichBt(false)"
          >
            <div>
              <swiper
                :options="swiperOption1"
                v-if="swiperSlides.head"
                ref="mySwiper1"
              >
                <swiper-slide
                  v-for="(slide, index) in swiperSlides.head"
                  :key="index"
                >
                  <img
                    :src="slide.image"
                    @click="
                      getArticleInfo(
                        slide.id,
                        1,
                        slide.jump_type,
                        slide.clickurl
                      )
                    "
                  />
                  <div
                    class="Carousel-title"
                    @click="
                      getArticleInfo(
                        slide.id,
                        1,
                        slide.jump_type,
                        slide.clickurl
                      )
                    "
                  >
                    <h3>{{ slide.title }}</h3>
                  </div>
                </swiper-slide>
                <div
                  v-show="btSwitch"
                  class="swiper-button-prev"
                  slot="button-prev"
                ></div>
                <div
                  v-show="btSwitch"
                  class="swiper-button-next"
                  slot="button-next"
                ></div>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </div>
          <span class="division-line"></span>
          <div class="words">
            <div v-if="articles.block1">
              <Announcement
                :an-msg="articles.block1"
                custom="true"
              ></Announcement>
            </div>
          </div>
        </section>
        <section class="region2">
          <span
            v-for="(item, index) in exhibitions"
            :key="index"
            @click="getArticleInfo(item.id, 1, item.jump_type, item.clickurl)"
          >
            <img :src="item.image" />
          </span>
        </section>
        <section class="region3">
          <div class="about-us">
            <header>关于我们</header>
            <div>
              <article>
                中国老年大学协会是中华人民共和国民政部部属社团，业务由全国老龄工作委员会办公室主管，成立于1988年12月。中国老年大学协会英文译名China
                Association of the Universities For The Aged ( CAUA
                )，是组织全国各地老年大学（含地方老年大学协会和老年学校）开展协作与交流的全国性非营利社会组织，联系着全国7万多所老年大学和老年学校，
                800多万在校学员，以及参加远程教育的数百万学员
              </article>
            </div>
            <footer>
              <span class="word" @click="goAbout(0)">协会简介</span>
              <span class="divide-line">|</span>
              <span class="word" @click="goAbout(1)">协会领导</span>
              <span class="divide-line">|</span>
              <span class="word" @click="goAbout(2)">组织机构</span>
              <span class="divide-line">|</span>
              <span class="word" @click="goAbout(3)">协会章程</span>
            </footer>
          </div>
          <span class="division-line"></span>
          <div class="Carousel2">
            <section>
              <swiper :options="swiperOption1" v-if="swiperSlides.mid">
                <swiper-slide>
                  <img :src="swiperSlides.mid[1].image" @click="goAbout(0)" />
                </swiper-slide>
                <swiper-slide v-for="item in swiperSlides.mid" :key="item.id">
                  <img
                    :src="item.image"
                    @click="
                      getArticleInfo(item.id, 1, item.jump_type, item.clickurl)
                    "
                  />
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </section>
          </div>
          <span class="division-line"></span>
          <div class="entrance">
            <div class="buttons">
              <button
                class="register"
                @click="nav('https://hyxt.caua1988.com')"
              >
                会员申请
              </button>
              <button
                class="login"
                @click="nav('https://hyxt.caua1988.com/#/login')"
              >
                会员登录
              </button>
              <button @click="handleGoMenu('information_open', 0)">
                国际交流
              </button>
              <button @click="handleGoMenu('information_open', 1)">
                校长访谈
              </button>
              <button @click="handleGoMenu('old_age_education', 3)">
                学术研究
              </button>
              <button @click="handleGoMenu('information_open', 2)">
                谏言献策
              </button>
            </div>
          </div>
        </section>
        <section class="region4">
          <Announcement
            v-if="articles.block2"
            :an-msg="articles.block2"
          ></Announcement>
          <span class="division-line"></span>
          <Announcement
            v-if="articles.block3"
            :an-msg="articles.block3"
          ></Announcement>
          <span class="division-line"></span>
          <div class="swipes-qrCode">
            <header>
              <p :class="{ active: !qrShow }" @mouseenter="showQR(false)">
                图片新闻
              </p>
              <span>|</span>
              <p :class="{ active: qrShow }" @mouseenter="showQR(true)">
                期刊杂志
              </p>
            </header>
            <div>
              <div v-show="!qrShow">
                <swiper :options="swiperOption1" v-if="swiperSlides.foot">
                  <swiper-slide
                    v-for="(slide, index) in swiperSlides.foot"
                    :key="index"
                  >
                    <img
                      :src="slide.image"
                      @click="
                        getArticleInfo(
                          slide.id,
                          1,
                          slide.jump_type,
                          slide.clickurl
                        )
                      "
                    />
                    <div
                      class="Carousel-title"
                      @click="
                        getArticleInfo(
                          slide.id,
                          1,
                          slide.jump_type,
                          slide.clickurl
                        )
                      "
                    ></div>
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </div>
              <div v-show="qrShow" class="qrcode">
                <p>扫码关注 老年早报</p>
                <p>每日为您提供最新资讯</p>
              </div>
            </div>
          </div>
        </section> -->
        <!-- <section class="region5">
          <div class="icon-title">
            <span>省</span>
            <span>级</span>
            <span>示</span>
            <span>范</span>
            <span>校</span>
          </div>
          <vue-seamless-scroll
            class="seamless-warp"
            :data="members"
            :class-option="swiperOption2"
          >
            <div class="icon-list">
              <div
                class="icon-item"
                v-for="(item, index) in members"
                :key="index"
              >
                <img :src="item.avatar" />
                <div>{{ item.nickname }}</div>
              </div>
            </div>
          </vue-seamless-scroll>
        </section>
        <section class="region6">
          <template v-for="(active, index) in activityData">
            <span v-if="index" class="division-line" :key="index"></span>
            <Activity :ac-data="active" :key="active.id"></Activity>
          </template>
        </section>
        <section class="region7" v-if="links">
          <span>会员单位链接</span>
          <related-links
            v-for="link in links"
            :key="link.title"
            :re-links="link"
          ></related-links>
        </section> -->
      </div>
    </div>
  </div>
</template>

<script>
import { carousel, artiles } from "@/assets/data/homeData";
// import Announcement from "@/components/home/Announcement";
// import Activity from "@/components/home/Activity";
// import RelatedLinks from "@/components/home/RelatedLinks";
import store from "../store";

export default {
  name: "HomePage",
  components: { RelatedLinks, Activity, Announcement },
  data() {
    return {
      searchKey: "",
      headerTitle: {
        id: 2642,
        live_url: "",
        title:
          "习近平致电代表党中央、国务院和中央军委 祝贺探月工程嫦娥五号任务取得圆满成功",
      },
      articles: {},
      exhibitions: [],
      btSwitch: false,
      swiperOption1: {
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
      swiperOption2: {
        direction: 2,
        limitMoveNum: 2,
      },
      swiperSlides: {},
      qrShow: false,
      activityData: [],
      members: [],
      links: [],
    };
  },
  created: function () {
   
  },
  methods: {
    showQR: function (bl) {
      this.qrShow = bl;
    },
    swtichBt: function (bl) {
      this.btSwitch = bl;
    },
    goAbout(index) {
      store.commit("About/fromHome", true);
      let { href } = this.$router.resolve({ path: `/about/${index}` });
      window.open(href, "_blank");
    },
    // 点击头条
    goHeaderTitle(id, url) {
      if (url) {
        window.open(url);
      } else {
        let { href } = this.$router.resolve({ path: `/info/3/${id}` });
        window.open(href, "_blank");
      }
    },
    // 查看文章详情
    getArticleInfo(id, type, jump_type, clickurl) {
      // 1 是外链  2 是轮播图 3 是献礼70周年
      if (jump_type == 0) {
        console.log(clickurl);
        window.open(clickurl);
      } else {
        const pathList = [`/info/${type}/${id}`, "/special_report/1"];
        let { href } = this.$router.resolve({ path: pathList[jump_type - 1] });
        window.open(href, "_blank");
      }
    },
    // 首页右侧按钮导航栏
    handleGoMenu(current1, current2) {
      let { href } = this.$router.resolve({ path: `/${current1}/${current2}` });
      window.open(href, "_blank");
    },
    nav(url) {
      window.open(url);
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  .container {
    width: 1200px;
    margin: 0 auto;
    padding-top: 17px;
    padding-bottom: 17px;
    box-sizing: border-box;

    .title {
      background: white;
      margin-bottom: 20px;
      margin-top: 0;
      font-size: 36px;
      color: #c52e0f;
      letter-spacing: 1px;
      text-align: center;
      line-height: 52px;
      padding: 30px 70px;
      &:hover {
        cursor: pointer !important;
      }
    }

    .region1 {
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
            background: #000000;
            // background-image: url("../assets/images/home/Mask.png");
            background-size: 100% 100%;
            box-sizing: border-box;
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

    .region2 {
      display: flex;
      height: 120px;
      justify-content: space-between;
      margin-bottom: 20px;

      & > span {
        width: 24%;
        :hover {
          cursor: pointer !important;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .region3 {
      display: flex;
      justify-content: space-between;
      background: white;
      height: 300px;
      padding: 30px 20px;
      margin-bottom: 20px;

      .division-line {
        width: 30px;
      }

      & > div {
        flex: 1;
      }

      .about-us {
        position: relative;
        border-width: 0;

        header {
          font-size: 20px;
          color: #c52e0f;
          letter-spacing: 0.57px;
        }

        div {
          height: 190px;
          border-top: 1px solid #dbdbdb;
          border-bottom: 1px dashed #e9e9e9;
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

        footer {
          position: absolute;
          bottom: 5px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #3a3a3a;
          letter-spacing: 0.46px;

          & > .word {
            &:hover {
              color: #c52e0f;
              cursor: pointer !important;
            }
          }

          & > .divide-line {
            color: #dbdbdb;
          }
        }
      }

      .Carousel2 {
        position: relative;

        & > section {
          position: absolute;
          width: 100%;
          height: 100%;

          img {
            height: 300px;
            width: 100%;
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
              background: #c52e0f;
              color: white;
              cursor: pointer !important;
            }
          }

          .register {
            width: 100%;
            background: #c52e0f;
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

    .region4 {
      height: 350px;
      padding: 30px 20px;
      margin-bottom: 20px;
      background: white;
      display: flex;
      justify-content: space-between;

      .division-line {
        width: 30px;
      }

      & > div {
        flex: 1;
      }

      .swipes-qrCode {
        position: relative;
        header {
          display: flex;
          font-size: 20px;
          color: #888888;
          letter-spacing: 0.57px;
          margin-bottom: 20px;
          padding-left: 16px;
          border-bottom: 1px solid #dbdbdb;

          p {
            margin: 0 0 -1.5px;
            padding-bottom: 15px;

            &.active {
              color: #c52e0f;
              border-bottom: 2px solid #c52e0f;
              cursor: pointer !important;
            }
          }

          & > span {
            color: #bdbdbd;
            margin: 0 14px 0 16px;
            vertical-align: text-bottom;
          }
        }

        & > div {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;

          & > :nth-child(1) {
            img {
              width: 100%;
              height: 285px;
            }

            .Carousel-title {
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 24px;
              padding: 10px 0;
            }
          }

          .qrcode {
            text-align: center;
            p {
              margin: 5px;
              color: #3a3a3a;
              font-size: 14px;
            }
          }
        }
      }
    }

    .region5 {
      position: relative;
      width: 1200px;
      height: 190px;
      margin-bottom: 20px;

      .icon-title {
        position: absolute;
        background: #dcdcdc;
        left: 0;
        width: 70px;
        height: 100%;
        margin-right: 20px;
        font-size: 20px;
        color: #d23838;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .seamless-warp {
        position: relative;
        margin-left: 70px;
        overflow: hidden;
        height: 190px;
        width: 1130px;
        .icon-list {
          width: 1350px;
          height: 170px;
          display: flex;
          position: relative;
          padding: 10px 0;
          background: white;
          justify-content: space-around;
          align-items: center;
          overflow: hidden;

          .icon-item {
            width: 20%;
            text-align: center;
            :hover {
              cursor: pointer !important;
            }
            img {
              width: 60%;
            }

            & > div {
              font-size: 13px;
              color: #3a3a3a;
              letter-spacing: 0.37px;
              margin-top: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }

    .region6 {
      height: 330px;
      background: white;
      padding: 30px 20px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;

      .division-line {
        width: 20px;
      }

      div {
        flex: 1;
      }
    }

    .region7 {
      position: relative;
      padding-left: 150px;
      display: flex;
      align-items: center;
      height: 44px;
      margin-bottom: 20px;
      justify-content: space-between;

      & > span {
        position: absolute;
        top: 9px;
        left: 0;
        font-size: 20px;
        color: #616161;
        letter-spacing: 0.34px;
        text-align: center;
      }
    }
  }
}
</style>

<style>
.content .swiper-pagination-bullet {
  background: #d8d8d8;
  opacity: 1;
}

.content .swiper-pagination-bullet-active {
  background: #860202 !important;
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

/* .content .swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("../assets/leftarrow.png");
  width: 50px !important;
  height: 50px !important;
}

.content .swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("../assets/rightarrow.png");
  width: 50px !important;
  height: 50px !important;
} */
</style>
