import { createRouter, createWebHashHistory } from 'vue-router'
import Produits from "../views/Produits"

const routes = [
  {path:'/ibintu', name:"ibintu", component:Produits}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
