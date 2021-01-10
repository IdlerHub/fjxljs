<template>
  <div id="app">
    <header class="header">
      <div class="logo-img">
        <!--背景图片-->
        <!-- <img src="./assets/logo.png" /> -->
      </div>
      <!-- <p class="dialog-search">
        <el-input placeholder="请输入要查询的内容" v-model="searchKey" @keyup.enter.native="handleSearch">
          <i slot="suffix" class="el-input__icon el-icon-search" @click="handleSearch"></i>
        </el-input>
      </p> -->
    </header>

    <el-menu
      ref="el-menu"
      default-active="1"
      class="nav"
      background-color="#033f80"
      text-color="#EFEFEF"
      active-text-color="#fff"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        class="level-one"
        index="0"
        :class="{ _active: nav == 0 }"
        @click="selectedNav('Home', 1)"
        >首页</el-menu-item
      >

      <el-submenu
        v-for="(item, index) in navigatorList"
        :key="index"
        :index="index + ''"
      >
        <template slot="title">
          <span
            class="level-one"
            :class="{ _active: nav == index + 1 }"
            @click="selectedNav(item.href, index)"
            >{{ item.label }}</span
          >
        </template>
        <!-- 二级目录 -->
        <template v-if="item.subNav">
          <el-menu-item
            v-for="(child, cIndex) in item.subNav"
            :key="cIndex"
            :index="cIndex + ''"
            >{{ child.label }}</el-menu-item
          >
        </template>
      </el-submenu>
    </el-menu>
    <!-- 内容页面 -->
    <router-view />

    <!-- 底部友情链接 -->
    <footer class="fjxl-description">
      <p>友情链接</p>
      <div class="friendly-link">
        <span v-for="(fLink, fIndex) in friendlyLink" :key="fIndex">
          <a :href="fLink.link" target="_blank">{{ fLink.linkName }}</a>
          <span v-if="fIndex != friendlyLink.length - 1"> | </span>
        </span>
      </div>
      <div>
        地址：{{companyInfo.address}}，邮政编码：{{companyInfo.postaCode}} 办公室电话：{{companyInfo.phone}}
        传真：{{companyInfo.faxNumber}} 电子邮箱：{{companyInfo.email}}
      </div>
      <div>
        本站最佳浏览效果：1024*768分辨率/建议使用Chrome浏览器或微软公司浏览器IE11以上
      </div>
    </footer>
  </div>
</template>

<script>
import { FRIENDLY_LINK, NAVIGATORList, COMPANY_INFO } from "../src/assets/data/appData";
import Filter from "./utils/filters";

export default {
  name: "App",
  data() {
    return {
      navigatorList: NAVIGATORList, //nav栏
      friendlyLink: FRIENDLY_LINK, //友情链接
      oldSelected: [],
      companyInfo: COMPANY_INFO //企业信息
    };
  },
  methods: {
    // 二级菜单跳转
    handleSelect(index, indexPath) {
      console.log("二级菜单跳转", index, indexPath);
      if (this.oldSelected == indexPath) {
        return;
      } else {
        this.oldSelected = indexPath;
        this.$router.push({
          name: this.navigatorList[indexPath[0]].href,
          query: {
            id: index,
          },
        });
      }
    },
    // 选择标签跳转
    selectedNav(name, n) {
      console.log(name, n);
      if (this.$route.name != name) {
        if (name == "Home") {
          this.$router.push({ name: name });
        } else {
          this.$router.push({ name: name, query: { id: 0 } });
        }
      }
    },
  },
  computed: {
    nav: function() {
        const name = this.$route.name;
        return Filter.HomeNavFilter(name);
    },
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// 头部
.header {
  width: 1200px;
  height: 200px;
  padding: 0 calc((100% - 1200px) / 2);
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #104c8b url("./assets/images/header-bg.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;

  .logo-img {
    width: 100%;
    height: 150px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  img {
    position: absolute;
    left: calc((100% - 1200px) / 2);
    top: 30px;
    width: 420px;
  }

  .dialog-search {
    width: 300px;
    border-radius: 20px;
    overflow: hidden;
    .el-input__inner:focus {
      border: 1px solid #dcdfe6 !important;
    }
    .el-icon-search {
      font-size: 18px;
      color: #4a4a4a;
    }
  }

  .translation-font {
    padding-left: 24px;
    list-style: none;
    font-size: 18px;
    line-height: 40px;
    color: #f1f1f1;
    letter-spacing: 0.51px;

    & > li {
      display: inline-block;
    }

    span {
      font-size: 14px;
      margin: 0 5px;
      vertical-align: bottom;
    }
  }
}

//nav标题
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc((100% - 1200px) / 2) !important;
  background: #409eff;
  min-width: 1200px;
  height: 60px;
  margin-top: -1px;
  margin-bottom: 0;
}

@keyframes bgScale {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}

// 底部
.fjxl-description {
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // right: 0;
  text-align: center;
  background: #104c8b;
  min-width: 1200px;
  height: 230px;
  padding-top: 45px;

  p {
    font-size: 16px;
    color: #e0e0e0;
    letter-spacing: 0.34px;
  }

  div {
    &:nth-child(2) {
      height: 60px;
      line-height: 60px;
      font-size: 14px;
      color: #c3c3c3;
      letter-spacing: 0.34px;
      margin-bottom: 15px;

      a {
        text-decoration: none;
      }

      a:link {
        color: #c3c3c3;
      }

      a:visited {
        color: #c3c3c3;
      }
    }

    &:nth-child(3) {
      font-size: 12px;
      color: #8f8f8f;
      letter-spacing: 0;
      line-height: 21px;
    }

    &:nth-child(4) {
      font-size: 12px;
      color: #8f8f8f;
      letter-spacing: 0;
      line-height: 21px;
    }
  }
}

//element菜单栏
.el-menu::after,
.el-menu::before {
  display: none !important;
}

.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom-width: 0 !important;
}

.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  font-size: 0;
  display: none !important;
}

.el-menu-item {
  font-size: 18px !important;
}

.el-submenu__title {
  text-align: center;
  padding: 0 40px !important;
}

.level-one {
  display: block;
  height: 60px;
  line-height: 60px;
  opacity: 0.8;
  font-size: 18px;
  color: #efefef;
  letter-spacing: 0.51px;
  text-align: center;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom-width: 0 !important;
}

.el-menu--popup {
  background-color: #fff !important;
  width: 154px !important;
  min-width: 154px !important;
  margin: 0;

  .el-menu-item {
    background-color: #fff !important;
    color: #3a3a3a !important;
    text-align: center;
    &:hover {
      background-color: #eaeaea !important;
      color: #409eff !important;
    }
  }
}

// 当前激活样式
._active {
  opacity: 1;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0.51px;
}
</style>
