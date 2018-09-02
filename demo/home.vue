<template>
  <div class="home">
    <div class="title">折线</div>
    <div class="cell" @click="to('line/basic')">基本折线图</div>
  </div>
</template>

<script>
export default {
  methods: {
    to(path) {
      this.$router.push({
        path: `/c/${path}`,
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .home {
    height: 100%;
    width: 100%;

    .title {
      background: #F6F6F6;
      font-size: 12px;
      padding: 6px 10px;
    }

    .cell {
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      border-bottom: 1px solid #E3E3E3;
    }
  }
</style>
