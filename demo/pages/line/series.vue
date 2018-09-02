<template>
  <vf-chart :data="data">
    <vf-line position="date*value" color="type"/>
    <vf-scale field="date" type="timeCat" tick-count="3"/>
    <vf-scale field="value" tick-count="5"/>
    <vf-tooltip link-legend/>
    <vf-axis field="date" justify-label-x/>
  </vf-chart>
</template>

<script>
import SeriesData from '../../data/seriesData';

export default {
  data() {
    return {
      data: SeriesData,
    };
  },
};
</script>
