import { h, inject } from 'vue';
import ListView from "./ListView"

export default function createListView(name) {
  return {
    name,
    created() {
      const store = inject('store');
      setTimeout(() => {
        // this.$route.name으로 ajax를 요청함.
        store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => store.dispatch('END_SPINNER'))
        .catch(err => console.log(err));
      }, 500);
      store.dispatch('START_SPINNER');
    },
    // render()는 현재 구성 요소가 렌더링될 때 ListView 구성 요소를 하위 요소로 포함하도록 Vue에 지시
    render() {
      const store = inject('store');
      // loadingStatus가 true이면 ListView를 반환
      return store.state.loadingStatus ? null : h(ListView);
    }
  };
}
