<template>
  <vf2-chart :data="data">
    <vf2-interval position="a*percent"
      :color="['name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']]"
      adjust="stack"
      :chart-style="{
        lineWidth: 1,
        stroke: '#fff',
        lineJoin: 'round',
        lineCap: 'round'
      }"
      :animate="{
        appear: {
          duration: 1200,
          easing: 'bounceOut'
        }
      }"/>
      <vf2-scale field="percent" :formatter="val => val * 100 + '%'"/>
      <!-- <vf2-coord type="polar" :transposed="true" radius="0.85"/> -->
      <vf2-coord type="polar" :options="{
        transposed: true,
        radius: 0.85
      }"/>
      <vf2-axis disabled/>
      <vf2-tooltip disabled/>
      <vf2-legend position="right" :item-formatter="val => val + '  ' + map[val]"/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        name: '芳华',
        percent: 0.4,
        a: '1',
      }, {
        name: '妖猫传',
        percent: 0.2,
        a: '1',
      }, {
        name: '机器之血',
        percent: 0.18,
        a: '1',
      }, {
        name: '心理罪',
        percent: 0.15,
        a: '1',
      }, {
        name: '寻梦环游记',
        percent: 0.05,
        a: '1',
      }, {
        name: '其他',
        percent: 0.02,
        a: '1',
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
