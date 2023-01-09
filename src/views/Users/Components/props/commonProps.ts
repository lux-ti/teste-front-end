import type { PropType } from "vue";

export default {
  users: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
};
