<template>
  <div class="home">
    <h1 class="text-center">天氣預報</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home {
  background-image: url("https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80");
  background-position: center center;
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  position: relative;
}
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 100px;
  font-weight: bold;
  color: #fff;
  filter: drop-shadow(0 0 5px #333);
}
</style>
