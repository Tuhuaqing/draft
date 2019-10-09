<template>
  <div id="app">
    <div id="nav">
      <span v-for="(item,index) in list" :key="index">
        <router-link :to="item.path">
          {{item.name}}
          <span v-if="index<list.length-1">|</span>
        </router-link>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list.push(...this.$router.options.routes)
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
