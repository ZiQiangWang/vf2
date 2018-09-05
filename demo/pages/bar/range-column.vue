<template>
  <vf2-chart :data="data">
    <vf2-interval position="x*y" :animate="{
      appear: {
        animation: 'shapesScaleInY'
      }
    }"/>
    <vf2-scale field="y" tick-count="5"/>
    <vf2-tooltip :show-item-marker="false" @show="handleShow"/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        x: '分类一',
        y: [76, 100],
      }, {
        x: '分类二',
        y: [56, 108],
      }, {
        x: '分类三',
        y: [38, 129],
      }, {
        x: '分类四',
        y: [58, 155],
      }, {
        x: '分类五',
        y: [45, 120],
      }, {
        x: '分类六',
        y: [23, 99],
      }, {
        x: '分类七',
        y: [18, 56],
      }, {
        x: '分类八',
        y: [18, 34],
      }],
    };
  },
  methods: {
    handleShow(ev) {
      const items = ev.items;
      items[0].name = '范围';
      const value = items[0].value;
      items[0].value = `${value[0]} 至 ${value[1]}`;
    },
  },
};
</script>
