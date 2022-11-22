<template>
  <div>
    <h1>Produit</h1>
    <button @click="fetchData">
      Gukwega
    </button>
    <div>
      {{ ivyo_twakweze }}
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      ivyo_twakweze:null
    }
  },
  methods:{
    fetchData(){
      axios.get('http://127.0.0.1:8000/produits/')
      .then((response) => {
        this.ivyo_twakweze = response.data
      }).catch((error) => {
        console.error(error);
      })
    }
  },
  // mounted(){
  //   this.fetchData()
  // }
}
</script>

<style scoped>
</style>
