<template>
  <vf2-chart :data="data">
    <vf2-interval position="cate*value" color="gender" adjust="stack"/>
    <vf2-coord :transposed="true"/>
    <vf2-legend align="right" item-width="80"/>
    <vf2-axis field="cate" :grid="null" :line="F2.Global._defaultAxis.line"/>
    <vf2-axis field="value"
      :line="null"
      :grid="F2.Global._defaultAxis.grid"
      justify-label-x/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        gender: 'Male',
        value: -4.4,
        cate: '0-10',
      }, {
        gender: 'Male',
        value: -4.8,
        cate: '10-19',
      }, {
        gender: 'Male',
        value: -5.8,
        cate: '20-29',
      }, {
        gender: 'Male',
        value: -6.2,
        cate: '30-39',
      }, {
        gender: 'Male',
        value: -7.5,
        cate: '40-49',
      }, {
        gender: 'Male',
        value: -8.0,
        cate: '50-59',
      }, {
        gender: 'Male',
        value: -5.5,
        cate: '60-69',
      }, {
        gender: 'Male',
        value: -4.8,
        cate: '70-79',
      }, {
        gender: 'Male',
        value: -1.8,
        cate: '80-89',
      }, {
        gender: 'Male',
        value: -0.3,
        cate: '90-99',
      }, {
        gender: 'Male',
        value: -0.1,
        cate: '100 +',
      }, {
        gender: 'Female',
        value: 4.1,
        cate: '0-10',
      }, {
        gender: 'Female',
        value: 4.6,
        cate: '10-19',
      }, {
        gender: 'Female',
        value: 5.6,
        cate: '20-29',
      }, {
        gender: 'Female',
        value: 6.0,
        cate: '30-39',
      }, {
        gender: 'Female',
        value: 7.2,
        cate: '40-49',
      }, {
        gender: 'Female',
        value: 7.9,
        cate: '50-59',
      }, {
        gender: 'Female',
        value: 6.0,
        cate: '60-69',
      }, {
        gender: 'Female',
        value: 5.8,
        cate: '70-79',
      }, {
        gender: 'Female',
        value: 3.0,
        cate: '80-89',
      }, {
        gender: 'Female',
        value: 0.7,
        cate: '90-99',
      }, {
        gender: 'Female',
        value: 0.1,
        cate: '100 +',
      }],
    };
  },
};
</script>
