<template>
  <vf-chart :data="data">
    <vf-line position="date*value"/>
    <vf-scale field="date" tick-count="3"/>
    <vf-tooltip
      :show-item-marker="false"
      :onShow="(ev) => {
        var items = ev.items;
        items[0].name = items[0].title;
      }"/>
    <vf-axis field="date" justify-label-x/>
  </vf-chart>
</template>

<script>
import LineData from '../../data/lineData';

export default {
  data() {
    return {
      data: LineData,
    };
  },
};
</script>
