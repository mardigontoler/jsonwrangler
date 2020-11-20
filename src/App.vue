<template>
  <div id="app">
    <div id="nav">
      <h1>JSON Wrangler</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/base64renderer">Base 64 Renderer</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
  background: #f9f9f9;

}

#html {
  max-height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #4b7baf;

    &.router-link-exact-active {
      color: #b97a42;
    }
  }
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  background-color: #f5f5f5;
}

</style>
<script>

</script>