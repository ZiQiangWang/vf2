<template>
  <vf2-chart :data="data">
    <vf2-line position="day*value" :connect-nulls="true"/>
    <vf2-point position="day*value"/>
    <vf2-scale field="day" :range="[0,1]"/>
    <vf2-scale field="value" tick-count="5" min="0"/>
    <vf2-axis field="day" justify-label-x/>
    <vf2-tooltip :show-crosshairs="true"/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        day: '周一',
        value: 300,
      }, {
        day: '周二',
        value: 400,
      }, {
        day: '周三',
        value: null,
      }, {
        day: '周四',
        value: 500,
      }, {
        day: '周五',
        value: 490,
      }, {
        day: '周六',
        value: 600,
      }, {
        day: '周日',
        value: 900,
      }],
    };
  },
};
</script>
