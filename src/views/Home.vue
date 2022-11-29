<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>URUFATANAMENDE</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-item>
                <ion-label position="floating">Witwa nde?</ion-label>
                <ion-input
                  :clear-input="true"
                  placeholder="Votre nom SVP"
                  @ionChange="e => nom = e.target.value"
                  />
            </ion-item>
            <br>
            <ion-button @click="saluer">
              Saluer
            </ion-button>
            <br>
            <br>
            <ion-col>
              {{ salutation }}
            </ion-col>
        </ion-content>
    </ion-page>
</template>
<script>
export default {
  data(){
    return {
      salutation:'',
      nom:''
    }
  },
  methods:{
    saluer(){
      this.salutation = `BONJOUR ${this.nom}`
    }
  }
}
</script>
<style scoped>
</style>