<template>
  <div class="wrapper">
   <vf-chart :data="data">
      <vf-line position="date*value" color="city" adjust="stack"/>
      <vf-area position="date*value" color="city" adjust="stack"/>
      <vf-scale field="date" :range="[0,1]" type="timeCat" mask="MM-DD"/>
      <vf-scale field="value" tick-count="4" max="300"/>
      <vf-tooltip :show-crosshairs="true"
        link-legend
        @change="handleChange"
        @hide="handleHide"/>
      <vf-axis field="date" justify-label-x/>
    </vf-chart>
    <div id="date" ref="date">{{currentDate}}</div>
  </div>

</template>

<script>
import StackedData from '../../data/stackedData';

export default {
  data() {
    return {
      currentDate: '',
      data: StackedData,
    };
  },

  methods: {
    handleChange(obj, chart) {
      const items = obj.items;
      this.currentDate = items[0].title;
      const coord = chart.get('coord');
      Object.assign(this.$refs.date.style, {
        visibility: 'visible',
        left: `${obj.x}px`,
        top: `${coord.start.y}px`,
      });
    },
    handleHide() {
      this.$refs.date.style.visibility = 'hidden';
    },
  },
};
</script>

<style lang="less" scoped>
  .wrapper {
    position: relative;
    #date {
      visibility: hidden;
      position: absolute;
      width: 10vw;
      font-size: 3.2vw;
      color: #fff;
      margin-left: -5vw;
      margin-top: 1vw;
      background-color: #808080;
      padding: 0 2px;
    }

  }
</style>
