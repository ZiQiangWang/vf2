<script>
import { base } from './mixin';

export default {
  name: 'vf-legend',
  mixins: [base],
  props: {
    field: String,
    disabled: Boolean,
  },
  data() {
    return {
      name: 'legend',
    };
  },
};
</script>
