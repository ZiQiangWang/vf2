<template>
  <vf2-chart :data="data">
    <vf2-line position="year*value" color="country" shape="smooth"/>
    <vf2-area position="year*value" color="country" shape="smooth"/>
    <vf2-scale field="year" tick-count="5"/>
    <vf2-axis field="year" justify-label-x/>
    <vf2-axis field="value" :label="text => {
      return {
        text: text / 1000 + 'k'
      }
    }"/>
    <vf2-tooltip :show-crosshairs="true" link-legend/>
  </vf2-chart>
</template>

<script>
import SeriesData from '../../data/seriesData2';

export default {
  data() {
    return {
      data: SeriesData,
    };
  },
};
</script>
