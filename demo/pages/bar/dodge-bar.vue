<template>
  <vf2-chart :data="data">
    <vf2-interval position="label*value" color="type" :adjust="{
      type: 'dodge',
      marginRatio: 1 / 32
    }"/>
    <vf2-scale field="value" tick-interval="750"/>
    <vf2-coord :transposed="true"/>
    <vf2-axis field="label" :grid="null" :line="F2.Global._defaultAxis.line"/>
    <vf2-axis field="value"
      :line="null"
      :grid="F2.Global._defaultAxis.grid"
      justify-label-x/>
    <vf2-tooltip link-legend/>
  </vf2-chart>
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
