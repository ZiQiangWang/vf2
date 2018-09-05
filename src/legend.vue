<script>
import { base } from './mixin';

export default {
  name: 'vf2-legend',
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
