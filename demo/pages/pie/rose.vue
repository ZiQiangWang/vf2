<template>
  <vf2-chart :data="data">
    <vf2-interval position="year*population"
      color="year"
      :chart-style="{
        lineWidth: 1,
        stroke: '#fff'
      }"/>
      <vf2-scale field="percent" :formatter="val => val * 100 + '%'"/>
      <vf2-coord type="polar"/>
      <vf2-axis disabled/>
      <vf2-legend position="right" />
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        year: '2001',
        population: 41.8,
      }, {
        year: '2002',
        population: 25.8,
      }, {
        year: '2003',
        population: 31.7,
      }, {
        year: '2004',
        population: 46,
      }, {
        year: '2005',
        population: 28,
      }],
    };
  },
};
</script>
