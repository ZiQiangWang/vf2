<template>
  <div class="wrapper">
   <vf2-chart :data="data">
      <vf2-line position="date*value" color="city" adjust="stack"/>
      <vf2-area position="date*value" color="city" adjust="stack"/>
      <vf2-scale field="date" :range="[0,1]" type="timeCat" mask="MM-DD"/>
      <vf2-scale field="value" tick-count="4" max="300"/>
      <vf2-tooltip :show-crosshairs="true"
        link-legend
        @change="handleChange"
        @hide="handleHide"/>
      <vf2-axis field="date" justify-label-x/>
    </vf2-chart>
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
