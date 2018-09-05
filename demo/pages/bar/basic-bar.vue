<template>
  <vf2-chart :data="data">
    <vf2-interval position="country*population"/>
    <vf2-scale field="population" tick-count="5"/>
    <vf2-coord :transposed="true"/>
    <vf2-axis field="country" :grid="null" :line="F2.Global._defaultAxis.line"/>
    <vf2-axis field="population"
      :line="null"
      :grid="F2.Global._defaultAxis.grid"
      justify-label-x/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        country: '巴西',
        population: 18203,
      }, {
        country: '印尼',
        population: 23489,
      }, {
        country: '美国',
        population: 29034,
      }, {
        country: '印度',
        population: 104970,
      }, {
        country: '中国',
        population: 131744,
      }],
    };
  },
};
</script>
