<template>
  <vf2-chart :data="data" :padding="[20, 'auto']">
    <vf2-interval position="a*percent"
      :color="['name', ['#FE5D4D', '#3BA4FF', '#737DDE']]"
      adjust="stack"/>
      <vf2-scale field="percent" :formatter="val => val + '%'"/>
      <vf2-coord type="polar" :transposed="true" inner-radius="0.7" radius="0.85"/>
      <vf2-axis disabled/>
      <vf2-tooltip disabled/>
      <vf2-legend position="right" :item-formatter="val => val + '  ' + map[val]"/>
      <vf2-guide type="html"
        :position="['50%', '45%']"
        html='<div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">总资产</div>
            <div style="font-size: 24px">133.08 亿</div>
          </div>'/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        name: '股票类',
        percent: 83.59,
        a: '1',
      }, {
        name: '债券类',
        percent: 2.17,
        a: '1',
      }, {
        name: '现金类',
        percent: 14.24,
        a: '1',
      }],
      map: {},
    };
  },
  mounted() {
    this.data.forEach((obj) => {
      this.map[obj.name] = `${obj.percent}%`;
    });
  },
};
</script>
