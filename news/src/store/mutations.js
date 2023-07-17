export default {
  SET_NEWS(state, news) {
    state.news = news;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_ITEM(state, item) {
    state.item = item
  },
  START_SPINNER(state) {
    state.loadingStatus = true
  },
  END_SPINNER(state) {
    state.loadingStatus = false
  },
  // HighOrderComponent
  SET_LIST(state, list) {
    state.list = list
  }
}