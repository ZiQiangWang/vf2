<template>
  <vf2-chart :data="data">
    <vf2-area position="item*score" :style="{
      fill: 'r(0.45,0.55,0.15) 0:#fff 0.35:#DEF5F5 0.75:#C8EEEF 1:#A8E5E6',
      fillOpacity: 100
    }"/>
    <vf2-coord type="polar" radius="0.8"/>
    <vf2-scale field="score" min="0" max="100" />
    <vf2-axis
      field="score"
      :label="null"
      :line="null"
      :grid="(text) => {
        if (text === '100') {
          return {
            lineDash: null
          };
        }
        return {
          lineWidth: 0
        };
      }"/>
    <vf2-axis field="item"
      :label="null"
      :grid="{
        lineDash: null,
        top: true
      }"/>
    <vf2-tooltip disabled/>
    <vf2-guide type="html"
      v-for="(obj, index) in data" :key="index"
      :options="{
        position: [obj.item, 130],
        html:
          `<div style='width: 80px;height: 24px;text-align: center'>
            <img src='${obj.img}' style='width: 24px;height: 24px;' />
            <div style='color: #808080;transform:scale(0.8, 0.8);font-size:12px;'>${obj.item}</div>
          </div>`,
        offsetY:  -10
      }"/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        item: '投资经验',
        score: 90,
        img: 'https://gw.alipayobjects.com/zos/rmsportal/txPVjdlnLANzxmwZcchu.png',
      }, {
        item: '财务状况',
        score: 80,
        img: 'https://gw.alipayobjects.com/zos/rmsportal/UMqgEqZdEcPhRekNGAdc.png',
      }, {
        item: '风险承受能力',
        score: 70,
        img: 'https://gw.alipayobjects.com/zos/rmsportal/eBXrRufzPGlOisYGZwnv.png',
      }, {
        item: '风险偏好',
        score: 75,
        img: 'https://gw.alipayobjects.com/zos/rmsportal/zqqWMLXrFwnqhySFHVjZ.png',
      }, {
        item: '投资规划',
        score: 60,
        img: 'https://gw.alipayobjects.com/zos/rmsportal/DxcRoUZXpYOzAWKrlRvv.png',
      }],
    };
  },
};
</script>
