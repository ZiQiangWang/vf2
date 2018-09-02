<script>
import { geometry } from '../mixin';

export default {
  name: 'vf-schema',
  mixins: [geometry],
  props: {
    shape: {
      type: String,
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
