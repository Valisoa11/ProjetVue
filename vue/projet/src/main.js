import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'
import router from './router';
import store from './store/store';

const app = createApp(App);
// Axios.interceptors.request.use(config =>{
//    console.log(config)  
// })
app.use(router);
app.mount('#app');
app.use(bootstrap);
app.use(store);

