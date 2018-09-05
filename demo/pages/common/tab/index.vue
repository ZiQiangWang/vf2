<template>
  <div class="vf2-tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vf2-tab',
  props: {
    value: {},
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      },
    },
  },
};
</script>

<style lang="less">
  .vf2-tab {
    display: flex;
  }
</style>
