<script>
import { base } from './mixin';

export default {
  name: 'vf2-axis',
  mixins: [base],
  props: {
    field: String,
    justifyLabelX: Boolean,
    justifyLabelY: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      name: 'axis',
    };
  },
};
</script>
