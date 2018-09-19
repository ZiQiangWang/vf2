<template>
  <vf2-chart :data="data">
    <vf2-line position="date*value" test/>
    <vf2-scale field="date" tick-count="3"/>
    <vf2-tooltip
      :show-item-marker="false"
      @show="(ev) => {
        var items = ev.items;
        items[0].name = items[0].title;
      }"/>
    <vf2-axis field="date" justify-label-x/>
  </vf2-chart>
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
