<template>
  <div class="an">
    <div class="an-title">
      <p
        class="title"
        :class="{ active: !aim }"
        @mouseenter="changeAn(0)"
        @click="navTo(msg[0].href)"
      >
        {{ msg[0].title }}
      </p>
      <span class="division-line" v-if="msg.length > 1">|</span>
      <p
        class="title"
        v-if="msg.length > 1"
        :class="{ active: aim }"
        @mouseenter="changeAn(1)"
      >
        {{ msg[1].title }}
      </p>
    </div>
    <ul class="an-list" :class="{ custom: custom }">
      <li
        v-for="(item, index) in currentList['totalList'][0].list"
        :key="index"
        @click="toArticleDetail(item)"
      >
        <span
          class="number"
          v-if="custom"
          :style="{ background: colors[index] }"
          >{{ index + 1 }}</span
        >
        <div class="word">{{ item.title }}</div>
        <span class="time">{{ item.createtime }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Announcement",
  props: ["anMsg", "custom"],
  data() {
    return {
      msg: this.anMsg || [],
      colors: ["#C52E0F", "rgba(197,46,15,0.80)", "rgba(197,46,15,0.50)"],
      aim: 0,
    };
  },
  computed: {
    currentList: function () {
      return this.msg ? this.msg[this.aim] : {};
    },
  },
  methods: {
    changeAn: function (i) {
      this.aim = i;
    },
    navTo(href) {
      console.log("顶部标题", href);
    },
    // 查看文章详情
    toArticleDetail(item) {
      console.log("去详情", item);
      let routeData = this.$router.resolve({
        name: "NewsContent",
        query: {
          id: item.id
        }
      });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.an {
  background: white;
  height: 100%;
  overflow: hidden;

  .an-title {
    display: flex;
    padding-left: 16px;
    border-bottom: 1px solid #dbdbdb;
    min-height: 26px;
    font-size: 20px;

    .division-line {
      margin: 0 14px -1px 16px;
      vertical-align: text-bottom;
      color: #bdbdbd;
    }

    .title {
      color: #888888;
      letter-spacing: 0.57px;
      text-align: center;
      margin: 0 0 -1.5px;
      padding-bottom: 15px;
      cursor: pointer !important;
    }

    .title.active {
      font-size: 20px;
      color: #104c8b;
      letter-spacing: 0.57px;
      text-align: center;
      border-bottom: 2px solid #104c8b;
    }
  }

  .an-list {
    padding-left: 18px;
    color: #d8d8d8;

    &.custom {
      list-style: none;
      padding-left: 28px;
    }

    li {
      border-bottom: 1px dashed #f3f3f3;
      height: 41px;
      line-height: 41px;
      cursor: pointer !important;
      display: flex;
      justify-content: center;
      align-items: center;
      .number {
        width: 18px;
        height: 18px;
        background: #cacaca;
        margin-right: 10px;
        border-radius: 3px;
        font-size: 16px;
        color: #ffffff;
        text-align: center;
        line-height: 18px;
      }

      .word {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        // margin-right: 20px;
        font-size: 16px;
        color: #3a3a3a;
        letter-spacing: 0.46px;
        text-align: left;
        &:hover {
          color: #104c8b;
        }
      }

      .time {
        width: 140px;
        text-align: right;
        margin-right: 3px;
        font-size: 15px;
        color: #bdbdbd;
        letter-spacing: 0.43px;
      }
    }
  }
}
</style>
