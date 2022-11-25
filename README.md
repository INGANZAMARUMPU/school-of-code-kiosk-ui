pour utiliser ionic-vue dans un projet Vue

1) on install les package requis avec ```yarn add``` ou ```npm install -g --save```

```
yarn add @ionic/vue
yarn add @ionic/vue-router
yarn add @vue/compat
yarn add core-js
```

ou  en une ligne
```
yarn add @ionic/vue @ionic/vue-router @vue/compat core-js
```
2) dans le fichier package.json on ajoute dans l'objet json

```json
  "jest": {
    "transformIgnorePatterns": ["/node_modules/(?!@ionic/vue|@ionic/vue-router|@ionic/core|@stencil/core|ionicons)"]
  }
```

3) Le router/index.js resemblera à ça
```js
import Vue from 'vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
```

4) la main.js resemblera à ça
```js
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonicVue,
  IonRouterOutlet 
} from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css'

const app = createApp(App).use(IonicVue).use(router);

app.component("IonRouterOutlet", IonRouterOutlet)
app.component("IonApp", IonApp)
app.component("IonPage", IonPage)
app.component("IonHeader", IonHeader)
app.component("IonToolbar", IonToolbar)
app.component("IonTitle", IonTitle)
app.component("IonContent", IonContent)

app.mount('#app');
```

5) le template principale (ex: Home.vue) resemblera à ça
```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>URUFATANAMENDE</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
	Kaze m'URUFATANAMENDE
    </ion-content>
  </ion-page>
</template>

<script>

export default {
}
</script>
```

6) App.vue

```html
<template>
  <ion-app>
    <ion-router-outlet/>
  </ion-app>
</template>

<style>
</style>
```
