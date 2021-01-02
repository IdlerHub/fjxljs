<template>
  <div class="navtitle">
    当前位置：
    <span @click="goHome">首页</span>
    <span v-if="navtitle">&nbsp;></span>
    <span>&nbsp;{{navtitle}}&nbsp;</span>
    <span v-if="navTitleChild">></span>
    <span>&nbsp;{{navTitleChild}}</span>
  </div>
</template>
<script>
export default {
  props: ['navtitle','navTitleChild'],
  methods:{
    goHome(){
      this.$router.push({name: 'Home'})
    }
  }
};
</script>
<style lang="scss" scoped>
%mgto {
  margin: 0 auto;
}

@mixin displayflex($row, $column, $direction, $wrap) {
  display: flex;

  @if $direction==column {
    flex-direction: column;
  } @else {
    flex-direction: row;
  }

  @if $wrap==wrap {
    flex-wrap: wrap;
  } @else {
    flex-wrap: nowrap;
  }

  justify-content: $row;
  align-items: $column;
}

.navtitle {
  width: 1200px;
  height: 66px;
  @include displayflex(flex-start, center, row, nowrap);
  font-family: "PingFangSC-Regular";
  color: #888888;
  font-size: 18px;
  @extend %mgto;
  span:hover {
    cursor: pointer !important;
    color: #409eff;
  }
}
</style>
