<template>
  <vf2-chart :data="data">
    <vf2-line position="time*tem"/>
    <vf2-area position="time*tem"/>
    <vf2-scale field="time" :range="[0,1]"/>
    <vf2-scale field="tem" tick-count="5" min="5"/>
    <vf2-tooltip :show-crosshairs="true"/>
  </vf2-chart>
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
