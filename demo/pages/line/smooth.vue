<template>
  <vf-chart :data="data">
    <vf-line position="time*tem" shape="smooth"/>
    <vf-point position="time*tem"  shape="smooth" :chart-style="{
      stroke: '#fff',
      lineWidth: 1
    }"/>
    <vf-scale field="time" type="timeCat" mask="MM/DD" tick-count="3" :range="[0, 1]"/>
    <vf-scale field="tem" tick-count="5" min="0" alias='日均温度'/>
    <vf-tooltip :show-crosshairs="true"/>
    <vf-axis field="time" justify-label-x/>
  </vf-chart>
</template>

<script>

export default {
  data() {
    return {
      data: [{
        time: '2016-08-08 00:00:00',
        tem: 10,
      }, {
        time: '2016-08-08 00:10:00',
        tem: 22,
      }, {
        time: '2016-08-08 00:30:00',
        tem: 20,
      }, {
        time: '2016-08-09 00:35:00',
        tem: 26,
      }, {
        time: '2016-08-09 01:00:00',
        tem: 20,
      }, {
        time: '2016-08-09 01:20:00',
        tem: 26,
      }, {
        time: '2016-08-10 01:40:00',
        tem: 28,
      }, {
        time: '2016-08-10 02:00:00',
        tem: 20,
      }, {
        time: '2016-08-10 02:20:00',
        tem: 18,
      }],
    };
  },
};
</script>
