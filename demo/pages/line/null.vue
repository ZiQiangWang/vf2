<template>
  <vf2-chart :data="data">
    <vf2-line position="year*count" adjust="stack" :color="['medalType', ['#f3ac32', '#b8b8b8', '#bb6e36']]"/>
    <vf2-point position="year*count" adjust="stack"
      :color="['medalType', ['#f3ac32', '#b8b8b8', '#bb6e36']]"
      :chart-style="{
        lineWidth: 1,
        fill: '#fff',
      }"/>
    <vf2-axis field="year"
      :tick-line="{
        length: 4,
        stroke: '#e8e8e8',
        lineWidth: 1
      }"
      :label="{
        textAlign: 'start',
        textBaseline: 'middle',
        rotate: Math.PI / 2
      }"/>
    <vf2-tooltip :show-crosshairs="true" link-legend/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{ medalType: 'Gold Medals', count: 40, year: '1952' }, { medalType: 'Gold Medals', count: 32, year: '1956' }, { medalType: 'Gold Medals', count: 34, year: '1960' }, { medalType: 'Gold Medals', count: 36, year: '1964' }, { medalType: 'Gold Medals', count: 45, year: '1968' }, { medalType: 'Gold Medals', count: 33, year: '1972' }, { medalType: 'Gold Medals', count: 34, year: '1976' }, { medalType: 'Gold Medals', count: null, year: '1980' }, { medalType: 'Gold Medals', count: 83, year: '1984' }, { medalType: 'Gold Medals', count: 36, year: '1988' }, { medalType: 'Gold Medals', count: 37, year: '1992' }, { medalType: 'Gold Medals', count: 44, year: '1996' }, { medalType: 'Gold Medals', count: 37, year: '2000' }, { medalType: 'Gold Medals', count: 35, year: '2004' }, { medalType: 'Gold Medals', count: 36, year: '2008' }, { medalType: 'Gold Medals', count: 46, year: '2012' }, { medalType: 'Silver Medals', count: 19, year: '1952' }, { medalType: 'Silver Medals', count: 25, year: '1956' }, { medalType: 'Silver Medals', count: 21, year: '1960' }, { medalType: 'Silver Medals', count: 26, year: '1964' }, { medalType: 'Silver Medals', count: 28, year: '1968' }, { medalType: 'Silver Medals', count: 31, year: '1972' }, { medalType: 'Silver Medals', count: 35, year: '1976' }, { medalType: 'Silver Medals', count: null, year: '1980' }, { medalType: 'Silver Medals', count: 60, year: '1984' }, { medalType: 'Silver Medals', count: 31, year: '1988' }, { medalType: 'Silver Medals', count: 34, year: '1992' }, { medalType: 'Silver Medals', count: 32, year: '1996' }, { medalType: 'Silver Medals', count: 24, year: '2000' }, { medalType: 'Silver Medals', count: 40, year: '2004' }, { medalType: 'Silver Medals', count: 38, year: '2008' }, { medalType: 'Silver Medals', count: 29, year: '2012' }, { medalType: 'Bronze Medals', count: 17, year: '1952' }, { medalType: 'Bronze Medals', count: 17, year: '1956' }, { medalType: 'Bronze Medals', count: 16, year: '1960' }, { medalType: 'Bronze Medals', count: 28, year: '1964' }, { medalType: 'Bronze Medals', count: 34, year: '1968' }, { medalType: 'Bronze Medals', count: 30, year: '1972' }, { medalType: 'Bronze Medals', count: 25, year: '1976' }, { medalType: 'Bronze Medals', count: null, year: '1980' }, { medalType: 'Bronze Medals', count: 30, year: '1984' }, { medalType: 'Bronze Medals', count: 27, year: '1988' }, { medalType: 'Bronze Medals', count: 37, year: '1992' }, { medalType: 'Bronze Medals', count: 25, year: '1996' }, { medalType: 'Bronze Medals', count: 33, year: '2000' }, { medalType: 'Bronze Medals', count: 26, year: '2004' }, { medalType: 'Bronze Medals', count: 36, year: '2008' }, { medalType: 'Bronze Medals', count: 29, year: '2012' }],
    };
  },
};
</script>
