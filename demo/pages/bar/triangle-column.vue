<template>
  <vf2-chart :data="data" :padding="['auto', 40]">
    <vf2-interval position="name*height" color="name" shape="triangle"/>
    <vf2-legend disabled />
    <vf2-axis field="height" disabled/>
    <vf2-axis field="name" :line="null"/>
    <vf2-guide v-for="(obj, index) in data" :key="index"
      type="text" :options="{
      position: [obj.name, obj.height],
      content: obj.height + '米',
      style: {
        textAlign: 'center',
        textBaseline: 'bottom'
      },
      offsetY: -10
      }"/>
  </vf2-chart>
</template>

<script>
import * as d3 from 'd3-color';

import F2 from '@antv/f2/lib/core';

F2.Shape.registerShape('interval', 'triangle', {
  getPoints: function getPoints(cfg) {
    const x = cfg.x;
    const y = cfg.y;
    const y0 = cfg.y0;
    const width = cfg.size;
    return [{
      x: x - width / 2,
      y: y0,
    }, {
      x,
      y,
    }, {
      x: x + width / 2,
      y: y0,
    }];
  },
  draw: function draw(cfg, group) {
    const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
    const leftPoints = [{
      x: points[0].x,
      y: points[0].y,
    }, {
      x: points[1].x,
      y: points[1].y,
    }, {
      x: points[1].x,
      y: points[0].y,
    }];
    const rightPoints = [{
      x: points[1].x,
      y: points[1].y,
    }, {
      x: points[2].x,
      y: points[2].y,
    }, {
      x: points[1].x,
      y: points[0].y,
    }];
    const left = group.addShape('polygon', {
      attrs: {
        points: leftPoints,
        fill: cfg.color,
      },
    });
    const hsl = d3.hsl(cfg.color); // 右侧颜色降低亮度
    hsl.l -= 0.15;
    const right = group.addShape('polygon', {
      attrs: {
        points: rightPoints,
        fill: hsl,
      },
    });
    return [left, right]; // 将自定义Shape返回
  },
});
export default {
  data() {
    return {
      data: [{
        name: '珠穆朗玛峰',
        height: 8844.43,
      }, {
        name: '乔戈里峰',
        height: 8611,
      }, {
        name: '贡嘎雪山',
        height: 7556,
      }, {
        name: '布喀达坂峰',
        height: 6860,
      }, {
        name: '梅里雪山',
        height: 6710,
      }],
    };
  },
  methods: {
    handleShow(ev) {
      const items = ev.items;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = `¥ ${items[0].value}`;
    },
  },
};
</script>
