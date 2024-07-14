<template>
    <div class="maPage">
        <navigation-vue></navigation-vue>
        <div class="izyrehetra">
            <div class="col-md-9 box">
                
                <div class="box1">
                    <div class="logo">
                        <div><q>Innovons pour un avenir vert.</q></div>
                        <div><img src="../assets/images/pdp.jpg" alt="Photo de profil" class="pdp"></div>
                    </div>
                    <div class="lesBoutons">
                        <router-link to="/modifProfil"><button class="button1">Modifier le profil</button></router-link>
                        <router-link to="/creationPub"><button class="button2">Créer une publication</button></router-link>
                    </div>
                </div>
                <div class="box2">
                    <h1 class="nomCompany">ecoterra</h1>
                    <div class="descriCompany"><p> Ecoterre est une entreprise dédiée à la promition de solutions durables et écologiques. 
                        Spécialisée dans les techonologies renouvelables et les produits respectueux de l'environnement, Ecoterra propose une 
                        gamme de services allant de la consultation en éco-conception à la production d'énergie solaire et éolienne. En collaborant 
                        avec des experts et des communautés locales, l'entreprise s'efforce de réduire  l'empreinte carbone et de promouvoir  des 
                        pratiques durables pour un avenir meilleur.</p></div>

                    <div class="contactCompany">
                        <span><img class="icone" src="../assets/images/email.png" alt="mail"> ecoterra@gmail.com </span>
                        <span><img class="icone" src="../assets/images/call.png" alt="call"> +261 34 44 554 54</span>
                        <!-- <span><img class="icone" src="../assets/images/siege-social (1).png" alt="siege"> Nanisana Tana101 </span> -->
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import NavigationVue from './Navigation.vue'
export default {
    name:'ProfilVue',
    components:{
        NavigationVue,
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'fonts1';
    src: url(../assets/font/Bluetea.otf);
    
}
/* @font-face {
    font-family: 'font2';
    src: url(../assets/font/BRUSHSCI.TTF);
    
} */
 .maPage{
    width: 100%;
    height: 100vh;
    position: relative;
}
    .izyrehetra{
        width: 100%;
        height: 91%;
        background-image: url('../assets/images/1720016447833.jpg'); 
        background-size:cover ;
        display: flex;
        
        
        
    }
        .box{
            display: flex;
            width: 100%;
            border: none;
        }
        .box1{
            height: 100%;
            width: 60%;
            text-align: center;
            padding: 10px;
            border: none;
        }
        .box2{    
            width: 40%;        
            border: none;
        }
        .contactCompany{
            margin: 16% 0% 0% 74% ;
            font-size: 1em;
            color: gray;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: default;
            font-family: 'QuickSand3';
        }
        .logo{
            display: block;
        }
        q{
            font-family:"font2";
            font-size: 3.5rem;
            color: grey;
        }
.pdp{
    margin-top:3% ;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    object-fit: cover;
}

.nomCompany{
    font-size: 3em;
    margin: 5% 9rem;
    font-family: 'fonts1';
}

.descriCompany{
    /* width: 70%; */
    text-align: center;
    /* height: 51%; */
    border: none;
    /* margin-top: 65px; */
    margin:5% 10%;
    border-top-left-radius: 80px;
    font-size: 20px;
    font-family: 'QuickSand2';
    background-color: rgba(237, 237, 239, 0.427);
    padding: 5% ;
}

.lesBoutons{
            display: flex;
            margin: 15% 0% 0% 23%;   
            }
            .button1{
                width: 170%;
                height: 40px;
                background: rgba(95, 95, 95, 0.877);
                border: solid 1px grey;
                outline: none;
                border-radius: 6px;
                box-shadow: 0 0 10px rgba(56, 56, 56, 0.551);
                cursor: pointer;
                font-size: 17px;
                color: #ffffff;
                font-weight: 550;
                transition: transform 0.5s;
                padding: 0% 5%;
                margin-left: 9%;
                font-family: 'QuickSand4';

            }
            .button2{
                width: 100%;
                height: 40px;
                background: rgba(95, 95, 95, 0.877);
                border: solid 1px grey;
                outline: none;
                border-radius: 6px;
                box-shadow: 0 0 10px rgba(56, 56, 56, 0.551);
                cursor: pointer;
                font-size: 17px;
                color: #ffffff;
                font-weight: 550;
                transition: transform 0.5s;
                padding: 0% 5%;
                font-family: 'QuickSand4';
                margin-left: 120px;
            }


.button:hover {
    background-color: #0e022d;
}

.publications {
    padding: 20px;
    background-color: rgb(236, 244, 248);
    margin: 20px auto;
    width: 80%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

.publication {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
}

.publication:last-child {
    border-bottom: none;
}

.publications h2{
    text-align: center;
    font-family: 'QuickSand';
    color: #0e022d;
    top: 0;
    /* margin */
    background: rgba(61, 82, 176, 0.737);
}
.publication h3 {
    margin: 0;
    font-size: 1.5em;
    font-family: 'QuickSand2';
    color: rgb(9, 67, 134);
}
.publication ul{
    font-family: 'QuickSand';
}
.publication li{
    font-family: 'QuickSand2';
}
.publication p {
    font-family: 'QuickSand3';
    color: #555;
}
.icone{
    width: 30px;
    height: 30px;
    object-fit: cover;
}

.interactions {
    display: flex;
    background: whitesmoke;
    justify-content: space-around;
    margin-top: 10px;
    padding: 10px;
}
.interactions button{
    border: none;
    border-radius: 10px;
    cursor: default;
}
.interactions button:hover {
    background-color: rgb(64, 164, 227);
}
</style>