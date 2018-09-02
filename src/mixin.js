import { camelAttrs, upperFirst } from './util';

export const geometry = {
  props: {
    position: {
      type: String,
      required: true,
    },
    color: [String, Array],
    size: [Number, String, Array],
    adjust: [String, Object, Array],
    animate: [Boolean, Object],
    chartStyle: [Object, Array],
  },
  created() {
    let parent = this.$parent;
    while (parent.$options.name !== 'vf-chart') {
      parent = parent.$parent;
    }
    parent.addGeometryOption({
      type: this.name,
      shape: this.shape,
      ...this.$props,
      ...camelAttrs(this.$attrs),
    });
  },
  render() {},
};


export const base = {
  created() {
    this.$parent.setOption(upperFirst(this.name), {
      ...this.$props,
      ...camelAttrs(this.$attrs),
      ref: this,
    });
  },
  render() {},
};
