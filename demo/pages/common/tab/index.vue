<template>
  <div class="vf-tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vf-tab',
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
  .vf-tab {
    display: flex;
  }
</style>
