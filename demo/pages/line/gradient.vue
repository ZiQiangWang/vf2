<template>
  <vf2-chart :data="data">
    <vf2-line position="year*age" shape="smooth" color="l(0) 0:#F2C587 0.5:#ED7973 1:#8659AF"/>
    <vf2-area position="year*age" shape="smooth" color="l(0) 0:#F2C587 0.5:#ED7973 1:#8659AF"/>
    <vf2-scale field="year" :range="[0, 1]" max="2020"/>
    <vf2-scale field="age" tick-count="5"/>
    <vf2-tooltip :show-crosshairs="true"/>
    <vf2-axis field="year" justify-label-x/>

    <vf2-guide type="tag"
      :position="[2017, 30.12]"
      content="30.12"
      direct="tl"
      offset-y="-5"
      :background="{
        fill: '#8659AF'
      }"
      :pointStyle="{
        fill: '#8659AF'
      }"/>
  </vf2-chart>
</template>

<script>

export default {
  data() {
    return {
      data: [{
        year: 2000,
        age: 27.2,
      }, {
        year: 2001,
        age: 27.5,
      }, {
        year: 2002,
        age: 27.8,
      }, {
        year: 2003,
        age: 28,
      }, {
        year: 2004,
        age: 28.2,
      }, {
        year: 2005,
        age: 28.4,
      }, {
        year: 2006,
        age: 28.8,
      }, {
        year: 2007,
        age: 28.8,
      }, {
        year: 2008,
        age: 28.8,
      }, {
        year: 2009,
        age: 28.8,
      }, {
        year: 2010,
        age: 28.9,
      }, {
        year: 2011,
        age: 29,
      }, {
        year: 2012,
        age: 29.3,
      }, {
        year: 2013,
        age: 29.4,
      }, {
        year: 2014,
        age: 29.5,
      }, {
        year: 2015,
        age: 29.7,
      }, {
        year: 2016,
        age: 30,
      }, {
        year: 2017,
        age: 30.12,
      }],
    };
  },
};
</script>
