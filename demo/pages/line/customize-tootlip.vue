<template>
  <vf2-chart :data="data" ref="chart" :padding="[45, 'auto', 'auto']">
    <vf2-line position="date*value" color="#518DFE"/>
    <vf2-point position="date*value"
      :size="[
        'tag',
        val => val ? 3 : 0
      ]"
      :chart-style="['tag', {
        fill(val) {
          if (val === 2) {
            return '#518DFE';
          } else if (val === 1) {
            return '#F35833';
          }
        },
        stroke: '#fff',
        lineWidth: 1
      }]"/>
    <vf2-scale field="date" tick-count="3" type="timeCat" :range="[0, 1]"/>
    <vf2-scale field="value" tick-count="5" min="0" :formatter="val => val.toFixed(2) + '%'"/>
    <vf2-axis field="date" justify-label-x/>
    <vf2-axis field="value" justify-label-y/>
    <vf2-legend
      :custom="true"
      :item-width="null"
      :items="[{
        name: '买入点',
        marker: 'circle',
        fill: '#F35833'
      }, {
        name: '卖出点',
        marker: 'circle',
        fill: '#518DFE'
      }]"/>
    <vf2-tooltip
      :show-item-marker="false"
      :onShow="(ev) => {
        var items = ev.items;
        items[0].name = items[0].title;
      }"/>
    <vf2-guide type="html"
      offset-y="-22.5"
      :position="['min', 'max']"
      :html="html"/>
    <vf2-tooltip
      :show-crosshairs="true"
      :custom="true"
      @change="handleChange"
      @hide="handleHide"/>
  </vf2-chart>
</template>

<script>
export default {
  data() {
    return {
      currentName: '',
      currentValue: '',
      show: false,
      pos: 0,
      width: 0,
      data: [{
        date: '2017-06-05',
        value: 11.6,
        tag: 0,
      }, {
        date: '2017-06-06',
        value: 12.9,
        tag: 0,
      }, {
        date: '2017-06-07',
        value: 13.5,
        tag: 0,
      }, {
        date: '2017-06-08',
        value: 8.6,
        tag: 2,
      }, {
        date: '2017-06-09',
        value: 7.3,
        tag: 2,
      }, {
        date: '2017-06-10',
        value: 8.5,
        tag: 0,
      }, {
        date: '2017-06-11',
        value: 7.3,
        tag: 0,
      }, {
        date: '2017-06-12',
        value: 6.8,
        tag: 0,
      }, {
        date: '2017-06-13',
        value: 9.2,
        tag: 0,
      }, {
        date: '2017-06-14',
        value: 13.0,
        tag: 1,
      }, {
        date: '2017-06-15',
        value: 24.5,
        tag: 0,
      }, {
        date: '2017-06-16',
        value: 13,
        tag: 0,
      }, {
        date: '2017-06-17',
        value: 11.5,
        tag: 1,
      }, {
        date: '2017-06-18',
        value: 11.1,
        tag: 0,
      }, {
        date: '2017-06-19',
        value: 30.9,
        tag: 0,
      }, {
        date: '2017-06-20',
        value: 20.6,
        tag: 1,
      }, {
        date: '2017-06-21',
        value: 13.7,
        tag: 1,
      }, {
        date: '2017-06-22',
        value: 12.8,
        tag: 1,
      }, {
        date: '2017-06-23',
        value: 8.5,
        tag: 0,
      }, {
        date: '2017-06-24',
        value: 9.4,
        tag: 1,
      }, {
        date: '2017-06-25',
        value: 7.1,
        tag: 0,
      }, {
        date: '2017-06-26',
        value: 10.6,
        tag: 0,
      }, {
        date: '2017-06-27',
        value: 8.4,
        tag: 0,
      }, {
        date: '2017-06-28',
        value: 9.3,
        tag: 0,
      }, {
        date: '2017-06-29',
        value: 8.5,
        tag: 0,
      }, {
        date: '2017-06-30',
        value: 7.3,
        tag: 0,
      }],
    };
  },
  computed: {
    html() {
      if (!this.show) {
        return '<div></div>';
      }
      return `<div id="tooltip-wrapper" style="height: 45px;background-color:#E9F1FF;line-height: 45px;width: ${this.width}px">
        <div style="float:left;font-size:12px;color:#2E2E2E;margin-left:15px;">${this.currentName}</div>
        <div style="float:right;font-size:12px;color:#2E2E2E;margin-right:15px;">${this.currentValue}</div>
      </div>`;
    },
  },
  methods: {
    handleChange(obj) {
      const items = obj.items;
      const originData = items[0].origin;
      const date = originData.date;
      const value = originData.value;
      const tag = originData.tag;

      if (tag === 1) {
        this.currentName = `${date}<img style="width:27.5px;vertical-align:middle;margin-left:3px;" src="https://gw.alipayobjects.com/zos/rmsportal/RcgYrLNGIUfTytjjijER.png">`;
      } else if (tag === 2) {
        this.currentName = `${date}<img style="width:27.5px;vertical-align:middle;margin-left:3px;" src="https://gw.alipayobjects.com/zos/rmsportal/XzNFpOkuSLlmEWUSZErB.png">`;
      } else {
        this.currentName = date;
      }

      const color = value >= 0 ? '#FA541C' : '#1CAA3D';

      this.currentValue = `涨幅：<span style="color:${color}">${items[0].value}</span>`;
      this.pos = 0;

      this.width = this.$refs.chart.instance().get('width');
      this.show = true;
    },
    handleHide() {
      this.show = false;
    },
  },
};
</script>

<style lang="less">
  #tooltip-wrapper {
    left: 0 !important;
  }
</style>
