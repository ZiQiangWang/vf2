<script>
import { base } from './mixin';

export default {
  name: 'vf2-scrollbar',
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
