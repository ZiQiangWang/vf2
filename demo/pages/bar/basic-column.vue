<template>
  <vf2-chart :data="data">
    <vf2-interval position="year*sales"/>
    <vf2-scale field="sales" tick-count="5"/>
    <vf2-tooltip :show-item-marker="false" @show="handleShow"/>
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
    handleShow(ev) {
      const items = ev.items;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = `¥ ${items[0].value}`;
    },
  },
};
</script>
