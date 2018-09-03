<template>
  <vf-chart :data="data">
    <vf-line position="time*tem" color="l(90) 0:#1890FF 1:#f7f7f7" shape="smooth"/>
    <vf-area position="time*tem" color="l(90) 0:#1890FF 1:#f7f7f7" shape="smooth"/>
    <vf-scale field="time" type="timeCat" tick-count="3" :range="[0,1]"/>
    <vf-scale field="tem" tick-count="5" min="0"/>
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
        tem: 16,
      }, {
        time: '2016-08-09 00:35:00',
        tem: 26,
      }, {
        time: '2016-08-09 01:00:00',
        tem: 12,
      }, {
        time: '2016-08-09 01:20:00',
        tem: 26,
      }, {
        time: '2016-08-10 01:40:00',
        tem: 18,
      }, {
        time: '2016-08-10 02:00:00',
        tem: 26,
      }, {
        time: '2016-08-10 02:20:00',
        tem: 12,
      }],
    };
  },
};
</script>
