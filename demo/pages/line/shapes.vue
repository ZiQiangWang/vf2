<template>
  <vf2-chart :data="data">
    <vf2-line position="time*value" color="type" :shape="['type', type => {
      if (type === '预期收益率') {
        return 'line';
      }
      if (type === '实际收益率') {
        return 'dash';
      }}]"/>
    <vf2-scale field="time"
      type="timeCat"
      tick-Count="3"
      mask="hh:mm"
      :range="[0, 1]"/>
    <vf2-scale field="value" tick-count="3" :formatter="val => val + '%'"/>
    <vf2-axis field="time" :line="null" justify-label-x />
    <vf2-legend position="bottom" offset="-5"/>
  </vf2-chart>
</template>

<script>

export default {
  data() {
    return {
      data: [{
        time: '2016-08-08 00:00:00',
        value: 10,
        type: '预期收益率',
      }, {
        time: '2016-08-08 00:10:00',
        value: 22,
        type: '预期收益率',
      }, {
        time: '2016-08-08 00:30:00',
        value: 16,
        type: '预期收益率',
      }, {
        time: '2016-08-09 00:35:00',
        value: 26,
        type: '预期收益率',
      }, {
        time: '2016-08-09 01:00:00',
        value: 12,
        type: '预期收益率',
      }, {
        time: '2016-08-09 01:20:00',
        value: 26,
        type: '预期收益率',
      }, {
        time: '2016-08-10 01:40:00',
        value: 18,
        type: '预期收益率',
      }, {
        time: '2016-08-10 02:00:00',
        value: 26,
        type: '预期收益率',
      }, {
        time: '2016-08-10 02:20:00',
        value: 12,
        type: '预期收益率',
      }, {
        time: '2016-08-08 00:00:00',
        value: 4,
        type: '实际收益率',
      }, {
        time: '2016-08-08 00:10:00',
        value: 3,
        type: '实际收益率',
      }, {
        time: '2016-08-08 00:30:00',
        value: 6,
        type: '实际收益率',
      }, {
        time: '2016-08-09 00:35:00',
        value: -12,
        type: '实际收益率',
      }, {
        time: '2016-08-09 01:00:00',
        value: 1,
        type: '实际收益率',
      }, {
        time: '2016-08-09 01:20:00',
        value: 9,
        type: '实际收益率',
      }, {
        time: '2016-08-10 01:40:00',
        value: 13,
        type: '实际收益率',
      }, {
        time: '2016-08-10 02:00:00',
        value: -3,
        type: '实际收益率',
      }, {
        time: '2016-08-10 02:20:00',
        value: 11,
        type: '实际收益率',
      }],
    };
  },
};
</script>
