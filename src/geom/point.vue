<script>
import { geometry } from '../mixin';

export default {
  name: 'vf-point',
  mixins: [geometry],
  props: {
    shape: {
      type: [String, Array],
      default: 'circle',
    },
  },
  data() {
    return {
      name: 'point',
    };
  },
};
</script>
