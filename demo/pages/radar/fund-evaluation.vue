<template>
  <div>
    <vf2-chart :data="currentData">
      <vf2-area position="name*value" color="#FE5C5B" :chart-style="{
        fillOpacity: 0.2
      }"
      :animate="{
        appear: {
          animation: 'groupWaveIn'
        }
      }"/>
      <vf2-line position="name*value" color="#FE5C5B"
      :animate="{
        appear: {
          animation: 'groupWaveIn'
        }
      }"/>
      <vf2-point position="name*value" color="#FE5C5B"
      :animate="{
        appear: {
          delay: 300
        }
      }"/>

      <vf2-coord type="polar"/>
      <vf2-scale field="value" min="0" max="10" />
      <vf2-tooltip disabled />
      <vf2-axis
        field="value"
        :label="null"
        :line="null"
        :grid="{
          lineDash: null
        }"/>
      <vf2-axis field="name" :grid="{lineDash: null}"/>
      <vf2-guide type="html"
        :position="['50%', '50%']"
        :html="html"
      />
    </vf2-chart>

    <vf2-tab v-model="current">
      <vf2-tab-item value="one">近一月</vf2-tab-item>
      <vf2-tab-item value="three">近三月</vf2-tab-item>
      <vf2-tab-item value="six">近六月</vf2-tab-item>
    </vf2-tab>
  </div>

</template>

<script>
export default {
  data() {
    return {
      current: 'one',
      data: {
        one: [{
          name: '超大盘能力',
          value: 6.5,
        }, {
          name: '抗跌能力',
          value: 9.5,
        }, {
          name: '稳定能力',
          value: 9,
        }, {
          name: '绝对收益能力',
          value: 6,
        }, {
          name: '选证择时能力',
          value: 6,
        }, {
          name: '风险回报能力',
          value: 8,
        }],
        three: [{
          name: '超大盘能力',
          value: 6,
        }, {
          name: '抗跌能力',
          value: 8.5,
        }, {
          name: '稳定能力',
          value: 7.5,
        }, {
          name: '绝对收益能力',
          value: 5.5,
        }, {
          name: '选证择时能力',
          value: 6,
        }, {
          name: '风险回报能力',
          value: 6,
        }],
        six: [{
          name: '超大盘能力',
          value: 6,
        }, {
          name: '抗跌能力',
          value: 7,
        }, {
          name: '稳定能力',
          value: 7,
        }, {
          name: '绝对收益能力',
          value: 5.5,
        }, {
          name: '选证择时能力',
          value: 5.65,
        }, {
          name: '风险回报能力',
          value: 6,
        }],
      },
      scores: {
        one: 73,
        three: 64,
        six: 61,
      },
    };
  },
  computed: {
    currentData() {
      return this.data[this.current];
    },
    html() {
      const score = this.scores[this.current];
      return `<div style="color: #FE5C5B;white-space: nowrap;text-align:center;">
      <p style="font-size: 12px;margin:0;">诊断分</p>
      <p style="font-size: 32px;margin:0;font-weight: bold;">${score}</p>
      </div>`;
    },
  },
};
</script>
