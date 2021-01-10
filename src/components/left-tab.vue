<template>
  <div class="detail-left">
    <div>
      <div class="navlefttitle">{{leftTitle}}</div>
      <ul class="leftList">
        <li
          @click="handleClickLeft(index)"
          :class="{ _activeli: showLeft == index }"
          v-for="(text, index) in LeftList"
          :key="index"
        >
          {{ text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['leftTitle','LeftList','showLeft'],
  methods:{
    handleClickLeft(index) {
      this.$emit('handleClickLeft',index)
    }
  }
}
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
.detail-left {
  margin-right: 20px;
  @extend %mgto;
  @include displayflex(space-between, flex-start, row, nowrap);
  & > div:nth-child(1) {
    width: 250px;
    height: 820px;
  }
  $pd-lf: padding-left;
  .navlefttitle {
    background: url("../assets/images/newsnav_img1.png");
    background-size: 100% 100%;
    width: 100%;
    height: 80px;
    @include font-style("PingFangSC-Semibold", 24px, #ffffff, 600);
    @include displayflex(flex-start, center, row, nowrap);
    padding-left: 31px;
    box-sizing: border-box;
  }
  .leftList {
    @extend %ulst;
    margin-top: 10px;
    border-bottom: 4px solid #104c8b;
    padding-bottom: 24px;
    width: 100%;
    background: #ffffff;
    & > li {
      width: 100%;
      height: 53px;
      @extend .box-border;
      #{$pd-lf}: 31px;
      @include displayflex(flex-start, center, row, nowrap);
      @include font-style("PingFangSC-Semibold", 18px, #3a3a3a, 600);
      border-bottom: 1px solid #dbdbdb;
      cursor: pointer !important;
      &:hover {
        background-color: #104c8b !important;
        color: #ffffff !important;
        cursor: pointer !important;
      }
    }
  }
}
</style>
