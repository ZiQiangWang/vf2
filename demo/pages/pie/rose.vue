<template>
  <vf-chart :data="data">
    <vf-interval position="year*population"
      color="year"
      :chart-style="{
        lineWidth: 1,
        stroke: '#fff'
      }"/>
      <vf-scale field="percent" :formatter="val => val * 100 + '%'"/>
      <vf-coord type="polar"/>
      <vf-axis disabled/>
      <vf-legend position="right" />
  </vf-chart>
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
      map: {
        芳华: '40%',
        妖猫传: '20%',
        机器之血: '18%',
        心理罪: '15%',
        寻梦环游记: '5%',
        其他: '2%',
      },
    };
  },
};
</script>
