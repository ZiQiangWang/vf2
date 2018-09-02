<script>
import { geometry } from '../mixin';

export default {
  name: 'vf-interval',
  mixins: [geometry],
  props: {
    shape: {
      type: [String, Array],
      default: 'rect',
    },
  },
  data() {
    return {
      name: 'interval',
    };
  },
};
</script>
