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
                  @ionChange="e => nom = e.target.value"
                  />
              </ion-item>
              <ion-item>
                <ion-label position="floating">Password</ion-label>
                <ion-input
                  type="password"
                  :clear-input="true"
                  placeholder="Votre mot de passe SVP"
                  @ionChange="e => nom = e.target.value"
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
export default {
  data(){
    return {

    }
  },
  methods:{
    seConnecter(){
      this.$store.state.user = "ikintu"
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