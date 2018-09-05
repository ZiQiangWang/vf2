<template>
  <vf2-chart :data="data">
    <vf2-interval position="profession*range"/>
    <vf2-scale field="range" tick-count="5"/>
    <vf2-coord :transposed="true"/>
    <vf2-axis field="profession" :grid="null" :line="F2.Global._defaultAxis.line"/>
    <vf2-axis field="range"
      :line="null"
      :grid="F2.Global._defaultAxis.grid"
      :label="text => {
        return {
          text: text / 1000 + ' k'
        }
      }"
      justify-label-x/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        profession: '两年制副学士学位',
        highest: 110000,
        minimum: 23000,
        mean: 56636,
        range: [23000, 110000],
      }, {
        profession: '执法与救火',
        highest: 120000,
        minimum: 18000,
        mean: 66625,
        range: [18000, 120000],
      }, {
        profession: '教育学',
        highest: 125000,
        minimum: 24000,
        mean: 72536,
        range: [24000, 125000],
      }, {
        profession: '心理学',
        highest: 130000,
        minimum: 22500,
        mean: 75256,
        range: [22500, 130000],
      }, {
        profession: '计算机科学',
        highest: 131000,
        minimum: 23000,
        mean: 77031,
        range: [23000, 131000],
      }],
    };
  },
};
</script>
