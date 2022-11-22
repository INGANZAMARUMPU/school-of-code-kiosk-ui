<template>
  <div class="parent">
    <div class="body">
      <h3>Connectez-vous</h3>
      <div class="field">
        <label for="username">Username</label>
        <input  id="username" type="text" placeholder="Username">
      </div>
      <div class="field">
        <label for=password>Password</label>
        <input id=password type="text" placeholder="password">
      </div>
      <button @click="koraUmuti">
        se connecter
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    koraUmuti(){
      window.location = "https://hogi.bi"
    }
  }
}
</script>

<style scoped>
.parent{
  background: lightgray;
  width: 100%;
  height: 100vh;
  padding-top: 30%;
}
.body{
  border: 1px solid black;
  width: 300px;
  padding: 20px;
  background-color: #9ff5;
  margin: auto;
  position: relative;
}
h3{
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.5em;
}
button{
  display: block;
  margin-left: auto;
}
</style>
