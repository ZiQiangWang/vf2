<script>
import { geometry } from '../mixin';

export default {
  name: 'vf2-schema',
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
