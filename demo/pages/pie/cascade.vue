<template>
  <vf-chart :data="data">
    <vf-interval position="a*b"
      color="c"
      adjust="stack"/>
      <vf-coord type="polar" :transposed="true" inner-radius="0.5" radius="0.85"/>
      <vf-axis disabled/>
      <vf-tooltip link-legend/>
  </vf-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        a: '1',
        b: 0.2,
        c: '1',
      }, {
        a: '2',
        b: 0.5,
        c: '1',
      }, {
        a: '3',
        b: 0.4,
        c: '1',
      }, {
        a: '1',
        b: 0.8,
        c: '2',
      }, {
        a: '2',
        b: 0.5,
        c: '2',
      }, {
        a: '3',
        b: 0.6,
        c: '2',
      }],
    };
  },
};
</script>
