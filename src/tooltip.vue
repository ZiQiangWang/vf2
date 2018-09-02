<script>
import { base } from './mixin';

export default {
  name: 'vf-tooltip',
  mixins: [base],
  props: {
    linkLegend: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      name: 'tooltip',
    };
  },
};
</script>
