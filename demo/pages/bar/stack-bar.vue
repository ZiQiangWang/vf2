<template>
  <vf2-chart :data="data">
    <vf2-interval position="State*人口数量" color="年龄段" adjust="stack"/>
    <vf2-scale field="tickCount" tick-count="5"/>
    <vf2-coord :transposed="true"/>
    <vf2-axis field="State" :grid="null" :line="F2.Global._defaultAxis.line"/>
    <vf2-axis field="人口数量"
      :line="null"
      :grid="F2.Global._defaultAxis.grid"
      justify-label-x/>
    <vf2-tooltip link-legend/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        State: 'WY',
        年龄段: '小于5岁',
        人口数量: 25635,
      }, {
        State: 'WY',
        年龄段: '5至13岁',
        人口数量: 1890,
      }, {
        State: 'WY',
        年龄段: '14至17岁',
        人口数量: 9314,
      }, {
        State: 'DC',
        年龄段: '小于5岁',
        人口数量: 30352,
      }, {
        State: 'DC',
        年龄段: '5至13岁',
        人口数量: 20439,
      }, {
        State: 'DC',
        年龄段: '14至17岁',
        人口数量: 10225,
      }, {
        State: 'VT',
        年龄段: '小于5岁',
        人口数量: 38253,
      }, {
        State: 'VT',
        年龄段: '5至13岁',
        人口数量: 42538,
      }, {
        State: 'VT',
        年龄段: '14至17岁',
        人口数量: 15757,
      }, {
        State: 'ND',
        年龄段: '小于5岁',
        人口数量: 51896,
      }, {
        State: 'ND',
        年龄段: '5至13岁',
        人口数量: 67358,
      }, {
        State: 'ND',
        年龄段: '14至17岁',
        人口数量: 18794,
      }, {
        State: 'AK',
        年龄段: '小于5岁',
        人口数量: 72083,
      }, {
        State: 'AK',
        年龄段: '5至13岁',
        人口数量: 85640,
      }, {
        State: 'AK',
        年龄段: '14至17岁',
        人口数量: 22153,
      }],
    };
  },
};
</script>
