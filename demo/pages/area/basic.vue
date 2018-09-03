<template>
  <vf-chart :data="data">
    <vf-line position="time*tem"/>
    <vf-area position="time*tem"/>
    <vf-scale field="time" :range="[0,1]"/>
    <vf-scale field="tem" tick-count="5" min="5"/>
    <vf-tooltip :show-crosshairs="true"/>
  </vf-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        time: 'Jan.',
        tem: 1000,
      }, {
        time: 'Feb.',
        tem: 2200,
      }, {
        time: 'Mar.',
        tem: 2000,
      }, {
        time: 'Apr.',
        tem: 2600,
      }, {
        time: 'May.',
        tem: 2000,
      }, {
        time: 'Jun.',
        tem: 2600,
      }, {
        time: 'Jul.',
        tem: 2800,
      }, {
        time: 'Aug.',
        tem: 2000,
      }],
    };
  },
};
</script>
