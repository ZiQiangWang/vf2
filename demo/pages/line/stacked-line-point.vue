<template>
  <vf2-chart :data="data">
    <vf2-line position="year*value" color="country" size="2" adjust="stack"/>
    <vf2-area position="year*value" color="country" adjust="stack"/>
    <vf2-point position="year*value" color="country" adjust="stack"/>
    <vf2-scale field="year" :range="[0,1]"/>
    <vf2-tooltip :show-crosshairs="true" link-legend/>
  </vf2-chart>
</template>

<script>

export default {
  data() {
    return {
      data: [{
        country: 'Asia',
        year: '1750',
        value: 1502,
      }, {
        country: 'Asia',
        year: '1800',
        value: 1635,
      }, {
        country: 'Asia',
        year: '1850',
        value: 1809,
      }, {
        country: 'Asia',
        year: '1900',
        value: 5268,
      }, {
        country: 'Asia',
        year: '1950',
        value: 2400,
      }, {
        country: 'Asia',
        year: '1999',
        value: 3634,
      }, {
        country: 'Asia',
        year: '2050',
        value: 1947,
      }, {
        country: 'Africa',
        year: '1750',
        value: 1106,
      }, {
        country: 'Africa',
        year: '1800',
        value: 1107,
      }, {
        country: 'Africa',
        year: '1850',
        value: 1011,
      }, {
        country: 'Africa',
        year: '1900',
        value: 1266,
      }, {
        country: 'Africa',
        year: '1950',
        value: 1221,
      }, {
        country: 'Africa',
        year: '1999',
        value: 767,
      }, {
        country: 'Africa',
        year: '2050',
        value: 1330,
      }, {
        country: 'Oceania',
        year: '1750',
        value: 1200,
      }, {
        country: 'Oceania',
        year: '1800',
        value: 1200,
      }, {
        country: 'Oceania',
        year: '1850',
        value: 2000,
      }, {
        country: 'Oceania',
        year: '1900',
        value: 460,
      }, {
        country: 'Oceania',
        year: '1950',
        value: 530,
      }, {
        country: 'Oceania',
        year: '1999',
        value: 300,
      }, {
        country: 'Oceania',
        year: '2050',
        value: 800,
      }],
    };
  },
};
</script>
