<script>
import { geometry } from '../mixin';

export default {
  name: 'vf-area',
  mixins: [geometry],
  props: {
    shape: {
      type: String,
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
