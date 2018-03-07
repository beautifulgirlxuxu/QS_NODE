<template>
  <div id="app">
    <ul>
      <li v-for="(user, index) in users" :key="index">{{user}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      users: []
    }
  },  
  mounted() {
    this.$http.get('gp/api')
      .then(data => {
        console.log(data.data.data)
        this.users = data.data.data;
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
