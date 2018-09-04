<template>
  <vf-chart :data="data">
    <vf-line position="item*score" color="user"/>
    <vf-area position="item*score" color="user"/>
    <vf-point position="item*score" color="user" :chart-style="{
      stroke: '#fff',
      lineWidth: 1
    }"/>
    <vf-coord type="polar"/>
    <vf-scale field="score" min="0" max="120" tick-count="4" :nice="false"/>
    <vf-axis
      field="score"
      :label="(text, index, total) => {
        if (index === total - 1) return null;
        return {
          top: true
        };
      }"
      :grid="{
        lineDash: null,
        type: 'arc' // 弧线网格
      }"/>
    <vf-axis field="item" :grid="{lineDash: null}"/>
    <vf-tooltip link-legend/>
  </vf-chart>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        item: 'Design',
        user: '用户 A',
        score: 70,
      }, {
        item: 'Design',
        user: '用户 B',
        score: 30,
      }, {
        item: 'Development',
        user: '用户 A',
        score: 60,
      }, {
        item: 'Development',
        user: '用户 B',
        score: 70,
      }, {
        item: 'Marketing',
        user: '用户 A',
        score: 50,
      }, {
        item: 'Marketing',
        user: '用户 B',
        score: 60,
      }, {
        item: 'Users',
        user: '用户 A',
        score: 40,
      }, {
        item: 'Users',
        user: '用户 B',
        score: 50,
      }, {
        item: 'Test',
        user: '用户 A',
        score: 60,
      }, {
        item: 'Test',
        user: '用户 B',
        score: 70,
      }, {
        item: 'Language',
        user: '用户 A',
        score: 70,
      }, {
        item: 'Language',
        user: '用户 B',
        score: 50,
      }, {
        item: 'Technology',
        user: '用户 A',
        score: 70,
      }, {
        item: 'Technology',
        user: '用户 B',
        score: 40,
      }, {
        item: 'Support',
        user: '用户 A',
        score: 60,
      }, {
        item: 'Support',
        user: '用户 B',
        score: 40,
      }],
    };
  },
};
</script>
