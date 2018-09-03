<template>
  <vf-chart :data="data">
    <vf-interval position="x*y"
      size="20"
      :animate="{
        appear: {
          duration: 1200,
          easing: 'cubicIn'
        }
      }"/>
      <vf-scale max="100" min="0"/>
      <vf-coord type="polar" :transposed="true" inner-radius="0.8" radius="0.85"/>
      <vf-axis disabled/>
      <vf-tooltip disabled/>
      <vf-guide type="arc" :options="{
        start: [0, 0],
        end: [1, 99.98],
        top: false,
        style: {
          lineWidth: 20,
          stroke: '#ccc'
        }
      }"/>

      <vf-guide type="text" :options="{
        position: ['50%', '50%'],
        content: '85%',
        style: {
          fontSize, // 字体适配不同屏幕,
          fill: '#1890FF'
        }
      }"/>
  </vf-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        x: '1',
        y: 85,
      }],
      fontSize: 24 * (window.innerWidth / 375),
    };
  },
};
</script>
