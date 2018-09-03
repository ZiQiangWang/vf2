<template>
  <vf-chart :data="data">
    <vf-line position="month*value"/>
    <vf-area position="month*value" :start-on-zero="false"/>
    <vf-scale :options="{
      month: {
        range: [0, 1]
      },
      value: {
        tickCount: 5
      }
    }"/>
    <vf-tooltip :show-crosshairs="true"/>
    <vf-axis field="value" :label="text =>{
      const textCfg = {};
      if (text <= 0) {
        textCfg.fill = '#1CAA3D';
        textCfg.fontWeight = 'bold';
      }
      return textCfg;
    }"/>
    <vf-axis field="month" justify-label-x/>
  </vf-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        month: 'Jan.',
        value: 6.06,
      }, {
        month: 'Feb.',
        value: 82.2,
      }, {
        month: 'Mar.',
        value: -22.11,
      }, {
        month: 'Apr.',
        value: 21.53,
      }, {
        month: 'May.',
        value: -21.74,
      }, {
        month: 'Jun.',
        value: 73.61,
      }, {
        month: 'Jul.',
        value: 53.75,
      }, {
        month: 'Aug.',
        value: 60.32,
      }],
    };
  },
};
</script>
