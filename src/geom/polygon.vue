<script>
import { geometry } from '../mixin';

export default {
  name: 'vf-polygon',
  mixins: [geometry],
  props: {
    shape: {
      type: [String, Array],
      default: 'polygon',
    },
  },
  data() {
    return {
      name: 'polygon',
    };
  },
};
</script>
