<template>
  <div>
    <button @click=loginUser1>버튼</button>
    <li v-for="item in items" :key="item">
      <p>{{ item }}</p>
    </li>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      items : []
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
          if(res.data.id === 1) {
              axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(res => this.items = res.data)
          }
        })
        .catch(err => console.log(err))
    },
    async loginUser1() {
      try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        if (response.data.id == 1) {
          console.log('인증')
          let list = await axios.get('https://jsonplaceholder.typicode.com/todos')
          this.items = list.data;
        }
      } catch(err) {
        console.log(err)
      }
    },

  }
}
</script>

<style>

</style>