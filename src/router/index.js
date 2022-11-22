import { createRouter, createWebHashHistory } from 'vue-router'
import Produits from "../views/Produits"
import Achats from "../views/Achats"
import Ventes from "../views/Ventes"

const routes = [
  {path:'/produits', name:"produits", component:Produits},
  {path:'/achats', name:"achats", component:Achats},
  {path:'/ventes', name:"ventes", component:Ventes},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
