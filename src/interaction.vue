<script>
import { base } from './mixin';

export default {
  name: 'vf-interaction',
  mixins: [base],
  props: {
    type: String,
  },
  data() {
    return {
      name: 'interaction',
    };
  },
};
</script>
