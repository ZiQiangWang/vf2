<script>
import { base } from './mixin';

export default {
  name: 'vf-scale',
  mixins: [base],
  props: {
    field: String,
  },
  data() {
    return {
      name: 'scale',
    };
  },
};
</script>
