<script>
import { base } from './mixin';

export default {
  name: 'vf2-scale',
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
