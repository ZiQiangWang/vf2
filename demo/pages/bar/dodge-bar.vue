<template>
  <vf-chart :data="data">
    <vf-interval position="label*value" color="type" :adjust="{
      type: 'dodge',
      marginRatio: 1 / 32
    }"/>
    <vf-scale field="value" tick-interval="750"/>
    <vf-coord :transposed="true"/>
    <vf-axis field="label" :grid="null" :line="F2.Global._defaultAxis.line"/>
    <vf-axis field="value"
      :line="null"
      :grid="F2.Global._defaultAxis.grid"
      justify-label-x/>
    <vf-tooltip link-legend/>
  </vf-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        label: 'Mon.',
        type: 'series1',
        value: 2800,
      }, {
        label: 'Mon.',
        type: 'series2',
        value: 2260,
      }, {
        label: 'Tue.',
        type: 'series1',
        value: 1800,
      }, {
        label: 'Tue.',
        type: 'series2',
        value: 1300,
      }, {
        label: 'Wed.',
        type: 'series1',
        value: 950,
      }, {
        label: 'Wed.',
        type: 'series2',
        value: 900,
      }, {
        label: 'Thu.',
        type: 'series1',
        value: 500,
      }, {
        label: 'Thu.',
        type: 'series2',
        value: 390,
      }, {
        label: 'Fri.',
        type: 'series1',
        value: 170,
      }, {
        label: 'Fri.',
        type: 'series2',
        value: 100,
      }],
    };
  },
};
</script>
