<template>
  <vf2-chart :data="data">
    <vf2-point position="x*y" color="#1890ff" :size="['z', [10, 40]]"
      shape="circle"
      :chart-style="{
        lineWidth: 1,
        stroke: '#1890ff',
        opacity: 0.3
      }"/>
    <vf2-scale field="x" min="62" max="96" :nice="false" tick-interval="5" alias="Daily fat intake"/>
    <vf2-scale field="y" min="0" max="165" :nice="false" tick-interval="50" alias="Daily sugar intake"/>
    <vf2-scale field="z" alias="Obesity(adults) %"/>
    <vf2-axis field="x"
      :label="text => {
        return {
          text: text + ' gr' // 格式化坐标轴显示文本
        };
      }"
      :grid="{
        stroke: '#d9d9d9',
        lineWidth: 1,
        lineDash: [2, 2]
      }"/>
    <vf2-axis field="y"
      :label="text => {
        if (text > 0) {
          return {
            text: text + ' gr'
          };
        }
      }"
      :line="F2.Util.mix({}, F2.Global._defaultAxis.line, {
        top: false
      })"/>
    <vf2-guide type="text"
      v-for="(item, index) in data" :key="index"
      :position="[item.x, item.y]"
      :content="item.name"
      :chart-style="{
        textAlign: 'center',
        textBaseline: 'middle',
        fill: '#1890FF'
      }"
    />
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        x: 95,
        y: 95,
        z: 13.8,
        name: 'BE',
        country: 'Belgium',
      }, {
        x: 86.5,
        y: 102.9,
        z: 14.7,
        name: 'DE',
        country: 'Germany',
      }, {
        x: 80.8,
        y: 91.5,
        z: 15.8,
        name: 'FI',
        country: 'Finland',
      }, {
        x: 80.4,
        y: 102.5,
        z: 12,
        name: 'NL',
        country: 'Netherlands',
      }, {
        x: 80.3,
        y: 86.1,
        z: 11.8,
        name: 'SE',
        country: 'Sweden',
      }, {
        x: 78.4,
        y: 70.1,
        z: 16.6,
        name: 'ES',
        country: 'Spain',
      }, {
        x: 74.2,
        y: 68.5,
        z: 14.5,
        name: 'FR',
        country: 'France',
      }, {
        x: 73.5,
        y: 83.1,
        z: 10,
        name: 'NO',
        country: 'Norway',
      }, {
        x: 71,
        y: 93.2,
        z: 24.7,
        name: 'UK',
        country: 'United Kingdom',
      }, {
        x: 69.2,
        y: 57.6,
        z: 10.4,
        name: 'IT',
        country: 'Italy',
      }, {
        x: 68.6,
        y: 20,
        z: 16,
        name: 'RU',
        country: 'Russia',
      }, {
        x: 65.5,
        y: 126.4,
        z: 35.3,
        name: 'US',
        country: 'United States',
      }, {
        x: 65.4,
        y: 50.8,
        z: 28.5,
        name: 'HU',
        country: 'Hungary',
      }, {
        x: 63.4,
        y: 51.8,
        z: 15.4,
        name: 'PT',
        country: 'Portugal',
      }, {
        x: 64,
        y: 82.9,
        z: 31.3,
        name: 'NZ',
        country: 'New Zealand',
      }],
    };
  },
};
</script>
