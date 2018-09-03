<template>
  <div>
    <vf-chart :data="data">
      <vf-line
        position="reportDateTimestamp*value"
        :sortable="false"
        shape="smooth"
        :animate="{
          update: {
            animation: 'lineUpdate'
          }
        }"/>
      <vf-area
        position="reportDateTimestamp*value"
        :sortable="false"
        shape="smooth"
        :animate="{
          update: {
            animation: 'lineUpdate'
          }
        }"/>
        <vf-tooltip :show-crosshairs="true"/>
      <vf-scale field="reportDateTimestamp" tick-count="3" type="timeCat" :range="[0, 1]"/>
      <vf-scale field="value" tick-count="5" alias="涨幅" :formatter="val => val.toFixed(2) + '%'"/>
      <vf-axis field="reportDateTimestamp" justify-label-x/>
    </vf-chart>
    <vf-tab v-model="duration" @change="handleSelect">
      <vf-tab-item value="1">近1月</vf-tab-item>
      <vf-tab-item value="3">近3月</vf-tab-item>
      <vf-tab-item value="6">近6月</vf-tab-item>
      <vf-tab-item value="12">近1年</vf-tab-item>
    </vf-tab>
  </div>

</template>

<script>
import F2 from '@antv/f2/lib/core';
import Data from '../../data/animatedData';

F2.Animate.registerAnimation('lineUpdate', (updateShape, animateCfg) => {
  const cacheShape = updateShape.get('cacheShape'); // 该动画 shape 的前一个状态
  const cacheAttrs = cacheShape.attrs; // 上一个 shape 属性
  const geomType = cacheShape.geomType; // 图形类型

  const oldPoints = cacheAttrs.points; // 上一个状态的关键点
  const newPoints = updateShape.attr('points'); // 当前 shape 的关键点

  const oldLength = oldPoints.length;
  const newLength = newPoints.length;
  let deltaLength = geomType === 'area' ? (oldLength - newLength) / 2 : oldLength - newLength;

  if (deltaLength > 0) {
    const firstPoint = newPoints[0];
    const lastPoint = newPoints[newPoints.length - 1];

    for (let i = 0; i < deltaLength; i++) {
      newPoints.splice(0, 0, firstPoint);
    }

    if (geomType === 'area') {
      for (let j = 0; j < deltaLength; j++) {
        newPoints.push(lastPoint);
      }
    }
  } else {
    deltaLength = Math.abs(deltaLength);
    const firstPoint1 = oldPoints[0];
    const lastPoint1 = oldPoints[oldPoints.length - 1];

    for (let k = 0; k < deltaLength; k++) {
      oldPoints.splice(0, 0, firstPoint1);
    }

    if (geomType === 'area') {
      for (let p = 0; p < deltaLength; p++) {
        oldPoints.push(lastPoint1);
      }
    }

    cacheAttrs.points = oldPoints;
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
      source: Data,
      data: [],
      duration: '1',
    };
  },
  mounted() {
    this.source.forEach((obj, index) => {
      if (obj.reportDate === '2018-01-02') {
        this.oneMonth = index;
      } else if (obj.reportDate === '2017-11-01') {
        this.threeMonth = index;
      } else if (obj.reportDate === '2017-08-01') {
        this.sixMonth = index;
      } else if (obj.reportDate === '2017-01-03') {
        this.oneYear = index;
      }
      obj.value *= 1;
      // source.push(obj);
    });

    this.data = this.source.slice(this.oneMonth);
  },
  methods: {
    handleSelect(val) {
      if (val === '1') {
        this.data = this.source.slice(this.oneMonth);
      } else if (val === '3') {
        this.data = this.source.slice(this.threeMonth);
      } else if (val === '6') {
        this.data = this.source.slice(this.sixMonth);
      } else if (val === '12') {
        this.data = this.source.slice(this.oneYear);
      }
    },
  },
};
</script>
