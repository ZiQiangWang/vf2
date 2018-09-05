<script>
import { geometry } from '../mixin';

export default {
  name: 'vf2-line',
  mixins: [geometry],
  props: {
    shape: {
      type: [String, Array],
      default: 'line',
    },
  },
  data() {
    return {
      name: 'line',
    };
  },
};
</script>
