<script>
import { base } from './mixin';
import { camelAttrs } from './util';

export default {
  name: 'vf-guide',
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
      if (this.guide) {
        Object.assign(this.guide, {
          ...rest,
          style: chartStyle,
        });
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
