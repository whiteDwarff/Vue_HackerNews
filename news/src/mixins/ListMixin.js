import { inject } from 'vue';

export default {

  
  // 재사용할 컴포넌트 옵션
  created() {
    const store = inject('store')
    setTimeout(() => {
      // this.$route.name으로 ajax를 요청함.
      store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => store.dispatch('END_SPINNER'))
      .catch(err => console.log(err));
    }, 500);
    store.dispatch('START_SPINNER');
  }
}