<template>
    <div>
        <the-loader v-if="showLoading"></the-loader>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
            
            <div class="container-fluid" >
                <span class="pg" >
                    e-'ty sy 'nday
                </span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" >
                    <search-bar></search-bar>
                </ul>
                </div>
            </div>
        </nav>


    </div>
</template>

<script>
import TheLoader from './TheLoader.vue';
import { mapState} from 'vuex';
// import Notifications from './Notifications.vue';
import SearchBar from './searchBar.vue';
// import { IS_USER_AUTHENTICATE_GETTER } from '@/store/storeconstants'
// import { mapGetters } from 'vuex';
export default {
    name:'NavigationVue',
    components:{
        TheLoader,
        // Notifications,
        SearchBar,

    },
    computed:{
        ...mapState({
            showLoading: (state) => state.showLoading,
           
    

        })
        
        
    }
}
</script>

<style scoped>
    @font-face {
        font-family: "font-1";
        src: url(../assets/font/Bluetea.otf );
    }
    .navbar{
        /* henpmight: 58px; */
    }
    .navbar-nav{
        margin-left:78.99% ;
    }
    #navy{
        background: rgb(70, 63, 167);
    }
    .pg{
        font-family: "font-1";
        color:white;
        font-size: 1.8rem;
    }
    img{
        width: 36px;
    }
    
</style>