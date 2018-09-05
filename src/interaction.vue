<script>
import { base } from './mixin';

export default {
  name: 'vf2-interaction',
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
