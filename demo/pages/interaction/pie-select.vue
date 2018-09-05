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
      }"/>
      <vf2-scale field="percent" :formatter="val => val * 100 + '%'"/>
      <vf2-coord type="polar" :transposed="true" radius="0.85" inner-radius="0.618"/>
      <vf2-axis disabled/>
      <vf2-tooltip disabled/>
      <vf2-legend position="right" marker='square'/>
       <vf2-guide
        type="html"
        :position="['50%', '50%']"
        :html="pieText"/>
      <vf2-interaction type="pie-select"
      :default-selected="{
        name: '机器之血',
        percent: 0.18,
        a: '1'
      }"
      :animate="{
        duration: 300,
        easing: 'backOut'
      }"
      @end="handleSelected"/>
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
      selected: {
        name: '',
        percent: '',
        color: 'black',
      },
    };
  },
  computed: {
    pieText() {
      const selected = this.selected;
      return `
        <div style='text-align: center;width: 100px;height: 72px;vertical-align: middle;'>
          <p style='color: ${selected.color};font-size: 28px;margin: 10px 0 5px;font-weight: bold;'>${selected.percent}</p>
          <p style='font-size: 12px;margin: 0;'>${selected.name}</p>
        </div>
      `;
    },
  },
  methods: {
    handleSelected(e) {
      const {
        shapeInfo, data, shape, selected,
      } = e;
      if (shape) {
        if (selected) {
          this.selected = {
            color: shapeInfo.color,
            name: data.name,
            percent: `${data.percent * 100}%`,
          };
        } else {
          this.selected = {
            name: '',
            percent: '',
          };
        }
      }
    },
  },
};
</script>
