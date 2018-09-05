<template>
  <vf2-chart :data="data">
    <vf2-interval position="a*b"
      color="c"
      adjust="stack"/>
      <vf2-coord type="polar" :transposed="true" inner-radius="0.5" radius="0.85"/>
      <vf2-axis disabled/>
      <vf2-tooltip link-legend/>
  </vf2-chart>
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
