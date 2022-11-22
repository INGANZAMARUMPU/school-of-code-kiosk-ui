<template>
  <Menu/>
  <br>
  <Menu/>
  <router-view/>
  <Menu/>
</template>

<script>
import Login from "./components/login"
import Menu from "./components/menu"

export default {
  components:{
    Login,
    Menu
  }
}
</script>

<style src="./style.css">
</style>
