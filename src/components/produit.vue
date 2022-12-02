<template>
  <div class="parent" v-if="item">
    <div class="descr">
      <div class="title">{{ item.nom }}</div>
      <div>
        Dispo: <b>{{ item.quantite }}</b>
      </div>
      <div>
        Prix: <b>{{ item.prix_vente }}</b>
      </div>
    </div>
    <div class="buttons">
      <ion-button
        size=small
        @click="qtt++">
        +
      </ion-button>
      <div class="input">
        {{ qtt }}
      </div>
      <ion-button
        size=small
        @click="qtt--">
        -
      </ion-button>
    </div>
  </div>
</template>

<script>
export default {
  props:[ "item" ],
  data(){
    return {
      qtt:0
    }
  },
  watch:{
    qtt(val){
      if(val<0){
        this.qtt = 0
      }
      if(val>this.item.quantite){
        this.qtt = this.item.quantite
      }
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 1.2em;
}
.parent{
  margin: 10px 10px 0 10px;
  box-shadow: 2px 2px 5px #095;
  padding: 10px;
  display: flex;
}
.descr{
  flex-grow: 1;
}
.buttons{
  width: 50px;
}
.buttons>*{
  display: block;
  width: 100%;
}
.input{
  height: 30px;
  padding: 7px;
  text-align: center;
}
</style>
