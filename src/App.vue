<template>
  <ion-app>
    <Login v-if="!$store.state.user"/>
    <div v-else>
      <ion-router-outlet/>
    </div>
  </ion-app>
</template>
<script>
import Login from './views/Login'

export default {
  components :{
    Login,
  }
}
</script>
<style src="./style.css">
</style>