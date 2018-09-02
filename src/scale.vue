<script>
import { base } from './mixin';

export default {
  name: 'vf-scale',
  mixins: [base],
  props: {
    field: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: 'scale',
    };
  },
};
</script>
