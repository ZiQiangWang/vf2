<template>
  <vf2-chart :data="data" @ready="handleReady">
    <vf2-interval position="year*sales"/>
    <vf2-scale field="sales" tick-count="5"/>
    <vf2-tooltip disabled/>
    <vf2-interaction type="interval-select"
      :select-axis-style="{
        fill: '#000',
        fontWeight: 'bold'
      }"
      :default-selected="{
        year: '1962 年',
        sales: 38
      }"
      mode="range"
      @end="handleEnd"
      />
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        year: '1951 年',
        sales: 38,
      }, {
        year: '1952 年',
        sales: 52,
      }, {
        year: '1956 年',
        sales: 61,
      }, {
        year: '1957 年',
        sales: 145,
      }, {
        year: '1958 年',
        sales: 48,
      }, {
        year: '1959 年',
        sales: 38,
      }, {
        year: '1960 年',
        sales: 38,
      }, {
        year: '1962 年',
        sales: 38,
      }],
    };
  },
  methods: {
    handleReady(chart) {
      this.canvas = chart.get('canvas');
      const group = this.canvas.addGroup();
      this.shapes = {};
      this.data.forEach((obj) => {
        const point = chart.getPosition(obj);
        const text = group.addShape('text', {
          attrs: {
            x: point.x,
            y: point.y - 5,
            text: obj.sales,
            textAlign: 'center',
            textBaseline: 'bottom',
            fill: '#808080',
          },
        });
        this.shapes[obj.year] = text;
      });
    },
    handleEnd(e) {
      const { data, selected } = e;
      this.lastTextShape && this.lastTextShape.attr({
        fill: '#808080',
        fontWeight: 'normal',
      });
      if (selected) {
        const textShape = this.shapes[data.year];
        textShape.attr({
          fill: '#000',
          fontWeight: 'bold',
        });
        this.lastTextShape = textShape;
      }
      this.canvas.draw();
    },
  },
};
</script>
