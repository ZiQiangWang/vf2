<template>
  <vf-chart :data="data" :padding="[20, 'auto']">
    <vf-interval position="a*percent"
      :color="['name', ['#FE5D4D', '#3BA4FF', '#737DDE']]"
      adjust="stack"/>
      <vf-scale field="percent" :formatter="val => val + '%'"/>
      <vf-coord type="polar" :transposed="true" inner-radius="0.7" radius="0.85"/>
      <vf-axis disabled/>
      <vf-tooltip disabled/>
      <vf-legend position="right" :item-formatter="val => val + '  ' + map[val]"/>
      <vf-guide type="html"
        :position="['50%', '45%']"
        html='<div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">总资产</div>
            <div style="font-size: 24px">133.08 亿</div>
          </div>'/>
  </vf-chart>
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
