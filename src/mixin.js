import { camelAttrs, upperFirst } from './util';

export const geometry = {
  props: {
    position: {
      type: [String, Array],
      required: true,
    },
    color: [String, Array],
    size: [Number, String, Array],
    adjust: [String, Object],
    animate: [Boolean, Object],
    chartStyle: [Object, Array],
  },
  created() {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== 'vf2-chart') {
        parent = parent.$parent;
      } else {
        break;
      }
    }
    if (!parent) {
      throw new Error('Component should be wrapped in vf2-chart');
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
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {
    const { options, ...rest } = this.$props;
    this.$parent.setOption(upperFirst(this.name), {
      ...options,
      ...rest,
      ...camelAttrs(this.$attrs),
      ref: this,
    });
  },
  render() {},
};
