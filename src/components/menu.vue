<template>
  <div class="parent">
    <router-link to="/produits" v-slot="{ href, navigate, isExactActive }">
      <div class="menu" @click="navigate" :class="{'active':isExactActive}">
        Produits
      </div>
    </router-link>
    <router-link to="/ventes" v-slot="{ href, navigate, isExactActive }">
      <div class="menu" @click="navigate" :class="{'active':isExactActive}">
        Ventes
      </div>
    </router-link>
    <router-link to="/achats" v-slot="{ href, navigate, isExactActive }">
      <div class="menu" @click="navigate" :class="{'active':isExactActive}">
        Achats
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  methods:{
  }
}
</script>

<style scoped>
.parent{
  background-color: cadetblue;
  display: flex;
  justify-content: flex-end;
}
.parent *{
  color: white;
  text-decoration: none;
}
.parent>*{
  padding: 10px 30px;
}
.parent>*:hover{
  background-color: #377;
}
</style>
