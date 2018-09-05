<template>
  <vf2-chart :data="data">
    <vf2-interval position="time*tem" color="city"
    :chart-style="['tem', {
      radius(val) {
        return val > 0 ? [4, 4, 0, 0] : [0, 0, 4, 4];
      }
    }]"
    adjust="dodge"/>
    <vf2-scale field="tem" tick-count="5"/>
    <vf2-tooltip link-legend/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        time: '周一',
        tem: 6.9,
        city: 'tokyo',
      }, {
        time: '周二',
        tem: 9.5,
        city: 'tokyo',
      }, {
        time: '周三',
        tem: 14.5,
        city: 'tokyo',
      }, {
        time: '周四',
        tem: 18.2,
        city: 'tokyo',
      }, {
        time: '周五',
        tem: 21.5,
        city: 'tokyo',
      }, {
        time: '周六',
        tem: 25.2,
        city: 'tokyo',
      }, {
        time: '周日',
        tem: 26.5,
        city: 'tokyo',
      }, {
        time: '周一',
        tem: -10.8,
        city: 'newYork',
      }, {
        time: '周二',
        tem: -5.7,
        city: 'newYork',
      }, {
        time: '周三',
        tem: -11.3,
        city: 'newYork',
      }, {
        time: '周四',
        tem: -17,
        city: 'newYork',
      }, {
        time: '周五',
        tem: -22,
        city: 'newYork',
      }, {
        time: '周六',
        tem: -24.8,
        city: 'newYork',
      }, {
        time: '周日',
        tem: -24.1,
        city: 'newYork',
      }, {
        time: '周一',
        tem: 2.6,
        city: 'berlin',
      }, {
        time: '周二',
        tem: 3.5,
        city: 'berlin',
      }, {
        time: '周三',
        tem: 8.4,
        city: 'berlin',
      }, {
        time: '周四',
        tem: 13.5,
        city: 'berlin',
      }, {
        time: '周五',
        tem: 17,
        city: 'berlin',
      }, {
        time: '周六',
        tem: -18.6,
        city: 'berlin',
      }, {
        time: '周日',
        tem: 17.9,
        city: 'berlin',
      }],
    };
  },
};
</script>
