<template>
  <vf-chart :data="data">
    <vf-line position="month*value"/>
    <vf-area position="month*value"/>
    <vf-scale field="month" :range="[0,1]"/>
    <vf-scale field="value" tick-count="5" min="-100" max="100" :nice="false"/>
    <vf-tooltip :show-crosshairs="true"/>
    <vf-axis field="value" :grid="text => {
      if (text === '0') {
        return {
          lineDash: null,
          lineWidth: 1
        };
      }
    }"/>
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
