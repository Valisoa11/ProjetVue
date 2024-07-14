<template>
        <div class="content">
            <router-link class="nav-link" to="/publication">
                <img class="icons" src="../assets/images/domicile.png" alt="">
                <button class="menu">Publication</button>
            </router-link>
            
        </div>
        <div class="content">
            <router-link class="nav-link" to="/profilUt">
                <img class="icons" src="../assets/images/profil-de-lutilisateur.png" alt="">
                <button class="menu">Profil</button>
            </router-link>
            
            
            
        </div>
        <div class="content">
            <router-link class="nav-link" to="/message">
                <img class="icons" src="../assets/images/discuter.png" alt="">
                <button class="menu">Boîte de reception</button>
            </router-link>
            
        </div>
        <div class="content">
            <img class="icons" src="../assets/images/1720361407474.png" alt="">
            <button class="menu">Alertes et notifications</button>
        </div>
        <div class="content">
            <img class="icons" src="../assets/images/1720361407464.png" alt="">
            <button class="menu">Postes enregistrées</button>
        </div>
        <div class="content">
            <img class="icons" src="../assets/images/historique-des-recherches.png" alt="">
            <button class="menu">Historique des recherches</button>
        </div>
        <div class="content">
            <img class="icons" src="../assets/images/1720361407460.png" alt="">
            <button class="menu">Historique des candidatures</button>
        </div>
        <div class="content">
            <img class="icons" src="../assets/images/suivi.png" alt="">
            <button class="menu">Suivi(s)</button>
        </div>
        <div class="content">
            <img class="icons" src="../assets/images/1720361407479.png" alt="">
            <button class="menu">Créateur de cv en ligne</button>
        </div>
        <div class="content">
            <img class="icons" src="../assets/images/entretien.png" alt="">
            <button class="menu">Rappels d'entretien</button>
        </div>
        <div class="content">
            <img class="icons" src="../assets/images/1720361407469.png" alt="">
            <button class="menu">Paramètres</button>
        </div>
        <div class="content">
            <router-link class="nav-link" to="/accueil">
                <img class="icons" src="../assets/images/se-deconnecter (1).png" alt="">
                <button class="menu">Déconnecter</button>
            </router-link>
            
        </div>
</template>

<script>
    export default {
        name:'MenuVue'
    }
</script>

<style  scoped>
@font-face {
  font-family: "font-1";
  src: url(../assets/font/Bluetea.otf );

}

@font-face {
  font-family: "font-2";
  src: url(../assets/font/Joynoted.ttf );

}

@font-face {
  font-family: "font-3";
  src: url(../assets/font/Comfortaa-Bold.ttf );

}

@font-face {
  font-family: "font-4";
  src: url(../assets/font/Comfortaa-Regular.ttf );

}
.maPage{
    background: #0e022d0c;
    /* background: black; */
    /* width: 100%; */
    position:absolute ;
    /* height: 50%; */
}
.content{
    display: flex;
    width: 100%;
    /* height: 20px; */
    
    padding: 8% 0 0 5%;
    /* flex-wrap: nowrap; */
    

}
    .icons{
        width: 35px;
        height: 35px;
        /* background: red; */
    }
    .menu{
        border: none;
        background: transparent;
        /* font-size: 25px; */
        /* font-family: "font-5"; */
    }


</style>