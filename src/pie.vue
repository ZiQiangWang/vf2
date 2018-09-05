<template>
  <vf2-chart :data="pieData">
    <vf2-interval :position="`a*${field}`" :color="catField" adjust="stack" :chart-style="{
      lineWidth: 1,
      stroke: '#FFFFFF',
      lineJoin: 'round',
      lineCap: 'round'
    }"/>
    <vf2-coord type="polar" :transposed="true" :radius="radius" :inner-radius="innerRadius" />
    <vf2-legend position="right" :item-formatter="val => val + '   ' + percentMap[val]"/>
    <vf2-axis disabled />
    <vf2-tooltip disabled />
    <vf2-interaction type="pie-select"
      startEvent="tap"
      :onEnd="handleOnEnd"
      :animate="{
        duration: 300,
        easing: 'backOut'
      }"/>
    <slot></slot>
  </vf2-chart>
</template>

<script>
export default {
  name: 'vf2-pie',
  props: {
    data: Array,
    radius: {
      type: [Number, String],
      default: 0.85,
    },
    innerRadius: {
      type: [Number, String],
      default: 0,
    },
    field: {
      type: String,
      required: true,
    },
    catField: {
      type: String,
      required: true,
    },
  },
  computed: {
    pieData() {
      return this.data.map(item => ({
        ...item,
        a: '1',
      }));
    },
    percentMap() {
      const map = {};
      let sum = 0;
      this.data.forEach((item) => {
        sum += item[this.field];
      });
      this.data.forEach((item) => {
        map[item[this.catField]] = `${(item[this.field] * 100 / sum).toFixed(2)}%`;
      });
      return map;
    },
  },
  methods: {
    handleOnEnd(ev) {
      const shape = ev.shape;
      if (shape) {
        const data = ev.data;
        const cat = data[this.catField];
        ev.percent = this.percentMap[cat];
        this.$emit('select', ev);
      }
    },
  },
};
</script>
