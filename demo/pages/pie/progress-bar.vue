<template>
  <vf2-chart :data="data">
    <vf2-interval position="x*y"
      size="20"
      :animate="{
        appear: {
          duration: 1200,
          easing: 'cubicIn'
        }
      }"/>
      <vf2-scale max="100" min="0"/>
      <vf2-coord type="polar" :transposed="true" inner-radius="0.8" radius="0.85"/>
      <vf2-axis disabled/>
      <vf2-tooltip disabled/>
      <vf2-guide type="arc" :options="{
        start: [0, 0],
        end: [1, 99.98],
        top: false,
        style: {
          lineWidth: 20,
          stroke: '#ccc'
        }
      }"/>

      <vf2-guide type="text" :options="{
        position: ['50%', '50%'],
        content: '85%',
        style: {
          fontSize, // 字体适配不同屏幕,
          fill: '#1890FF'
        }
      }"/>
  </vf2-chart>
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
