import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  IonApp, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonicVue,
  IonRouterOutlet, IonCol, IonButton, IonItem, IonInput, IonLabel
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
app.component("IonCol", IonCol)
app.component("IonButton", IonButton)
app.component("IonItem", IonItem)
app.component("IonInput", IonInput)
app.component("IonLabel", IonLabel)

app.mount('#app');