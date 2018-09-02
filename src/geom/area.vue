<script>
import { geometry } from '../mixin';

export default {
  name: 'vf-area',
  mixins: [geometry],
  props: {
    shape: {
      type: [String, Array],
      default: 'area',
    },
  },
  data() {
    return {
      name: 'area',
    };
  },
};
</script>
