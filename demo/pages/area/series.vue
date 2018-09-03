<template>
  <vf-chart :data="data">
    <vf-line position="year*value" color="country" shape="smooth"/>
    <vf-area position="year*value" color="country" shape="smooth"/>
    <vf-scale field="year" tick-count="5"/>
    <vf-axis field="year" justify-label-x/>
    <vf-axis field="value" :label="text => {
      return {
        text: text / 1000 + 'k'
      }
    }"/>
    <vf-tooltip :show-crosshairs="true" link-legend/>
  </vf-chart>
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
