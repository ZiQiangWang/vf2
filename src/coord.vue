<script>
import { base } from './mixin';

export default {
  name: 'vf-coord',
  mixins: [base],
  props: {
    type: {
      type: String,
      default: 'rect',
    },
  },
  data() {
    return {
      name: 'coord',
    };
  },
};
</script>
