<script>
import { base } from './mixin';

export default {
  name: 'vf2-tooltip',
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
