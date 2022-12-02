<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>URUFATANAMENDE</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
          <div>
            <Produit
              v-for="produit in produits"
              :item="produit"/>
          </div>
        </ion-content>
    </ion-page>
</template>
<script>
import axios from 'axios'
import Produit  from '../components/produit'

export default {
  components: {
    Produit
  },
  data(){
    return {
      produits:[]
    }
  },
  methods:{
    fetchProduits(){
      let headers = {
        headers: {
          'Authorization': `Bearer ${this.$store.state.user.access}`
        }
      }
      axios.get('http://127.0.0.1:8000/produits/', headers)
      .then((response) => {
        this.produits = response.data
      }).catch((error) => {
        this.produits = []
        console.error(error);
      })
    },
  },
  mounted(){
    this.fetchProduits()
  }
}
</script>
<style scoped>
</style>