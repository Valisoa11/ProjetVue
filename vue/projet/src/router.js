import {createRouter, createWebHistory } from 'vue-router';

import Navigation from './components/Navigation.vue';
import Message from './components/Message.vue';
import Profil from './components/Profil.vue';
import Publication from './components/Publication.vue';
import accueil from './components/accueil.vue';
import ModifProfil from './components/ModifProfil.vue';
import ProfilUt from './components/ProfilUt.vue';
import CreationPub from './components/CreationPub';

import store from './store/store';
import {IS_USER_AUTHENTICATE_GETTER} from './store/storeconstants';
const routes = [
    // {path:'', component: Home},
    
    {path: '/accueil', component: accueil},
    {path: '/navigations', component: Navigation, meta: {auth: false} },
    {path: '/message', component: Message},
    {path: '/modifProfil', component: ModifProfil},
    {path: '/profilUt', component: ProfilUt},
    {path: '/creationPub', component: CreationPub},
    {path: '/publication', component: Publication},
    {path: '/profil', component: Profil}

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to,from, next)=>{
    if(to.meta.auth && !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]){
        next('/accueil');
    }else if(!to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]){
        next('/navigations');
    }else{
        next();
    }

})
export default router; 