import { store } from "@/store/index"

export default {
  // 재사용할 컴포넌트 옵션
  mounted() {
    store.dispatch('END_SPINNER');
  },
}