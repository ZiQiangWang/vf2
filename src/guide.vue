<script>
import { base } from './mixin';
import { camelAttrs } from './util';

export default {
  name: 'vf2-guide',
  mixins: [base],
  props: {
    type: String,
  },
  data() {
    return {
      name: 'guide',
    };
  },
  watch: {
    $attrs(val) {
      const { chartStyle, ...rest } = camelAttrs(val);
      const { options } = this.$props;
      const config = { ...rest, ...options };
      if (chartStyle) {
        config.style = chartStyle;
      }
      if (this.guide) {
        Object.assign(this.guide, config);
        this.guide.repaint();
      }
    },
  },
  methods: {
    setInstance(inst) {
      this.guide = inst;
    },
  },
};
</script>
