<template>
    <ion-page>
        <ion-content>
          <ion-col>
            <div class="centered">
              <ion-item>
                <ion-label position="floating">Username</ion-label>
                <ion-input
                  :clear-input="true"
                  placeholder="Votre nom d'utilisateur SVP"
                  @ionChange="e => username = e.target.value"
                  />
              </ion-item>
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input
                  type="password"
                  :clear-input="true"
                  placeholder="Votre mot de passe SVP"
                  @ionChange="e => password = e.target.value"
                  />
              </ion-item>
              <ion-button
                expand="block"
                @click="seConnecter">
                Connexion
              </ion-button>
            </div>
          </ion-col>
        </ion-content>
    </ion-page>
</template>
<script>
import axios from 'axios'

export default {
  data(){
    return {
      username: "",
      password: ""
    }
  },
  methods:{
    seConnecter(){
      let data = {
        "username": this.username,
        "password": this.password
      }
      axios.post('http://127.0.0.1:8000/login/', data)
      .then((response) => {
        this.$store.state.user = response.data
      }).catch((error) => {
        console.error(error);
      })
    }
  }
}
</script>
<style scoped>
.centered{
  margin-top: 30%;
  padding: 20px;
}
ion-button{
  margin-top: 20px;
}
</style>