<template>
  <div class="mask" @click="changeImg">
    <img :src="image" alt>
  </div>
</template>

<script>
export default {
  props:['image'],
  methods:{
    changeImg() {
      this.$emit('changeImg')
    }
  }
}
</script>

<style lang="scss" scoped>
  .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(#000000, .6);
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 800px;
      height: 500px;
    }
  }
</style>