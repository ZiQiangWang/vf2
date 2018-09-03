<template>
  <div class="home">
    <div v-for="(page, index) in pages" :key="index">
      <div class="title" >{{page.title}}</div>
      <div class="cell" :key="ind" v-for="(route, ind) in page.routes" @click="to(route.path)">{{route.meta.name}}</div>
    </div>

  </div>
</template>

<script>
import pages from './pages';

export default {
  data() {
    return {
      pages,
    };
  },
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
    overflow-y: auto;
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
