<template>
  <vf2-chart :data="data">
    <vf2-line position="date*value" color="type"/>
    <vf2-scale field="date" type="timeCat" tick-count="3"/>
    <vf2-scale field="value" tick-count="5"/>
    <vf2-tooltip link-legend/>
    <vf2-axis field="date" justify-label-x/>
  </vf2-chart>
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
