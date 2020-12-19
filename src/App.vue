<template>
  <div id="app">
    <div id="nav">
      <b-button-group class="buttonGroup">
        <b-button variant="success">
          <router-link to="/about">一週天氣預報</router-link>
        </b-button>
        <b-button variant="success">
          <router-link to="/about2">縣市預報</router-link>
        </b-button>
        <b-button variant="success">
          <router-link to="/about3">鄉鎮天氣預報</router-link>
        </b-button>
      </b-button-group>
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
  background-color: #fafafa;
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
