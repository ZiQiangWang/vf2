<template>
  <div class="component">
    <div class="header">
      <div class="back" @click="back">返回</div>
      {{$route.meta.name}}
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>


<style lang="less">
  .component {
    height: 100%;
    width: 100%;
    position: relative;
    .header {
      height: 44px;
      line-height: 44px;
      width: 100%;
      text-align: center;
      position: relative;
      .back {
        position: absolute;
        left: 10px;
        top: 0;
        bottom: 0;
        margin: auto;
        font-size: 14px;
        color: #666666;
      }
    }

    .body {
      position: absolute;
      top: 44px;
      bottom: 0;
      width: 100%;
      overflow-y: auto;
    }
  }
</style>
