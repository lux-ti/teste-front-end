import type { PropType } from "vue";

export default {
  repositories: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
};
