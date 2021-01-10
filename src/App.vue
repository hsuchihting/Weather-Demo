<template>
  <div id="app">
    <div id="nav">
      <div class="btn-group mr-2" role="group">
        <button type="button" class="btn btn-info">
          <router-link to="/about">一週天氣預報</router-link>
        </button>
        <button type="button" class="btn btn-info">
          <router-link to="/about2">縣市預報</router-link>
        </button>
        <button type="button" class="btn btn-info">
          <router-link to="/about3">鄉鎮天氣預報</router-link>
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
}

#nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-size: 18px;
    color: #fff;

    &.router-link-exact-active {
      font-weight: bold;
    }
  }
}
</style>
