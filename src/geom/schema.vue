<script>
import { geometry } from '../mixin';

export default {
  name: 'vf-schema',
  mixins: [geometry],
  props: {
    shape: {
      type: [String, Array],
      default: 'candle',
    },
  },
  data() {
    return {
      name: 'schema',
    };
  },
};
</script>
