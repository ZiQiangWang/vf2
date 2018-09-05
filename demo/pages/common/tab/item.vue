<template>
  <label class="vf2-tab-item" :class="{
    'is-selected': $parent.model === value
  }" @click="handleClick">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'vf2-tab-item',
  props: {
    value: String,
  },
  methods: {
    handleClick() {
      if (this.$parent.model !== this.value) {
        this.$parent.model = this.value;
      }
    },
  },
};
</script>

<style lang="less">
  .vf2-tab-item {
    flex: 1;
    text-align: center;
    background: #F2F2F2;
    height: 40px;
    line-height: 40px;

    &.is-selected {
      background: white;
    }
  }
</style>
