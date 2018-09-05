<template>
  <vf2-chart :data="data">
    <vf2-line position="time*value" :animate="{
      update: {
        animation: 'lineUpdate'
      }
    }"/>
    <vf2-scale field="time" type="timeCat" :range="[0,1]" mask="HH:mm:ss"/>
    <vf2-scale field="value" tick-count="5" min="8"/>
    <vf2-axis field="time" :label="(text, index, total) => {
      const textCfg = {
        text: ''
      };
      if (index === 0) {
        textCfg.textAlign = 'left';
        textCfg.text = text;
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
        textCfg.text = text;
      }
      return textCfg;
    }"/>
  </vf2-chart>
</template>
time: {
    type: 'timeCat',
    mask: 'HH:mm:ss',
    range: [0, 1]
  },
  value: {
    tickCount: 5,
    min: 8
  }

<script>
import F2 from '@antv/f2/lib/core';

F2.Animate.registerAnimation('lineUpdate', (updateShape, animateCfg) => {
  const cacheShape = updateShape.get('cacheShape'); // 该动画 shape 的前一个状态
  const cacheAttrs = cacheShape.attrs; // 上一个 shape 属性
  const oldPoints = cacheAttrs.points; // 上一个状态的关键点
  const newPoints = updateShape.attr('points'); // 当前 shape 的关键点

  const oldLength = oldPoints.length;
  const newLength = newPoints.length;
  const deltaLength = newLength - oldLength;

  const lastPoint = newPoints[newPoints.length - 1];
  for (let i = 0; i < deltaLength; i++) {
    oldPoints.push(lastPoint);
  }

  updateShape.attr(cacheAttrs);
  updateShape.animate().to({
    attrs: {
      points: newPoints,
    },
    duration: 800,
    easing: animateCfg.easing,
  });
});
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.data.push(this.getRecord(-2));
    this.data.push(this.getRecord(-1));
    this.data.push(this.getRecord());

    this.timer = setInterval(() => {
      this.data.push(this.getRecord());
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    getRecord(offset) {
      offset = offset || 0;
      return {
        time: new Date().getTime() + offset * 1000,
        value: Math.random() + 10,
      };
    },
  },
};
</script>
