<script>
import { base } from './mixin';

export default {
  name: 'vf-scrollbar',
  mixins: [base],
  props: {
    field: String,
  },
  data() {
    return {
      name: 'scrollbar',
    };
  },
};
</script>
