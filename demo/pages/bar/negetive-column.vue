<template>
  <vf2-chart :data="data" :padding="[45, 'auto', 'auto']">
    <vf2-interval position="season*value"
      :color="['value', val => val > 0 ? '#FC674D' : '#9AC2AB']"
      size="80"/>
    <vf2-axis field="value" disabled/>
    <vf2-tooltip disabled/>
    <vf2-legend :custom="true" :items="[{
      name: '净申购',
      marker: 'circle',
      fill: '#FC674D'
    }, {
      name: '净赎回',
      marker: 'circle',
      fill: '#9AC2AB'
    }]"
    align="right"
    :itemWidth="null"/>
    <vf2-guide v-for="(obj, index) in data"  :key="`text-${index}`"
      type="text"
      :position="[obj.season, obj.value > 0 ? obj.value : 0]"
      :content="numberToMoney(obj.value)"
      :chart-style="{
        fill: obj.value > 0 ? '#FC674D' : '#9AC2AB',
        textBaseline: 'bottom'
      }"
    offset-y="-5"/>
    <vf2-guide v-for="(obj, index) in data" :key="`rect-${index}`"
      type="rect"
      :start="[index - 0.46, 'max']"
      :end="[index + 0.46, 'min']"
      :chart-style="{
        fill: '#f8f8f8'
      }"/>
    <vf2-guide type="text" :options="{
      position: ['min', 'max'],
      content: '单位（万元）',
      style: {
        textBaseline: 'middle',
        textAlign: 'start'
      },
      offsetY: -23
    }"/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        value: -139255.5,
        season: '第四季',
      }, {
        value: 51926.5,
        season: '第三季',
      }, {
        value: -49959.4,
        season: '第二季',
      }, {
        value: -37099.9,
        season: '第一季',
      }],
    };
  },
  methods: {
    numberToMoney(n) {
      return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>
