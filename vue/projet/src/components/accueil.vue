<template>
    <div class="mapage">

        <header class="nav">
            <div class="row">
                    <div class="col-sm-8 lesNav">
                        <ul class="navBar">

                            <li><a href="#" class="home-active">Accueil</a></li>
                            <li><a href="#">Fonctionnalités</a></li>
                            <li><a href="#">A propos</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3 lesBoutons">
                                
                            <button class="btn" @click="execuction(1)" >Connexion</button>
                            <button class="btn "  @click="execuction(2)" > Inscription</button>
                            
                    </div>
                    <div class="col-sm-1"><img class="ispm" src="../assets/images/ISPM.jpeg"><a href="#"></a></div>
                <!-- </div> -->
            </div>
        </header>
        <section>
            <div  class="mapage1">
               
                <div class="row">

                    <div class="col-sm-7 box1">
                        

                        <div class="col-sm-12 box3">
                                
                            <div class="titre">
                                <div class="bienvenu">
                                    <p class="motBienvenu">
                                        <span>
                                            Bienvenue à
                                        </span>
                                    </p>
                                    <p class="motBienvenu">
                                        <span class="pg" >
                                            e-ty sy n'day
                                        </span>
                                    </p>
                                </div>
                                <p class="littleDescri">
                                    où les compétences se rejoignent pour créer des opportunités infinies.
                                </p>
                                <button class="btn enSavoirPlus" @click="execuction(1)" >En savoir plus</button>
                            
                            </div>
                            
                        </div>
                        

                        <div class="col-sm-12 haingony ">
                            <div class="row">

                                <div class="col-sm-6">
                                    
                                
                                
                                    <div class="soratra">
                                        <img class="sary" src="../assets/images/connectivite.png" >
                                        <p class="descri">Connectivité professionnelle</p>
                                        
                                    </div>
                                    
                                    
                                    <div class="soratra">
                                        <img class="sary" src="../assets/images/opportunite.png" >
                                        <p class="descri">Opportunité sur mésure</p>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="soratra">
                                        <img class="sary" src="../assets/images/evolution.png" >
                                        <p class="descri">Evolution de carrière simplifié</p>
                                    </div> 
                                    <div class="soratra">
                                        <img class="sary" src="../assets/images/talent.png" >
                                        <p class="descri">Matching parfait des talents</p>
                                    </div>
                                    
                                
                                </div>
                            
                                                        
                            
                            </div>
                        </div>
                        
                    </div>
                        
                    
                    <div class="col-sm-5 box2" >
                        <div class="imgContainer" :class="imgClass">
                            <img src="../assets/images/img1.jpg" alt="" class="sari1">
                            <img src="../assets/images/img2.jpg" alt="" class="sari2">
                            <img src="../assets/images/img3.jpg" alt="" class="sari3">
                            <img src="../assets/images/img4.jpg" alt="" class="sari4">
                        </div>

                        
                        <div  class="contentPageToShow" :class="classDonner" >

                            <component :is='activePage' ></component>
                        </div>

                    </div>
                    
                    
                </div>
                
            </div>
            
        </section>
        


    </div>
</template>

<script>
    import connexion from './connexion.vue';

    import inscription from './inscription.vue';
    import { IS_USER_AUTHENTICATE_GETTER } from '@/store/storeconstants'
    import { mapGetters } from 'vuex'
    export default {
        name:'accueilVue',
        computed :{
            ...mapGetters('auth',{
            isAuthenticated: IS_USER_AUTHENTICATE_GETTER,
            })  
        },
        components:{
            connexion, inscription
        },
        data(){
            return{
                activePage:'',

                inscriClicked:false,
                connexClicked:false,
                noBtnClicked:true,
                classDonner:'',
                showDiv:false,
                imgClass:'',
            }

        },
        methods:{
            
            execuction(a)
            {
                this.changementEtatVariable(a);
                this.choosePage(this.connexClicked, this.inscriClicked);
                
            },
            changementEtatVariable(a)
            {
                switch(a)
                {
                    case 1:
                        this.connexClicked = !this.connexClicked;
                        if(this.inscriClicked) this.inscriClicked = false;
                        break;
                    case 2:
                        this.inscriClicked = !this.inscriClicked;
                        if(this.connexClicked) this.connexClicked = false;
                        break;
                }
            },
            choosePage(varUser, varNotUser)
            {
                if(!varUser && !varNotUser)
                {
                    this.classDonner='btnClicked';
                    this.noBtnClicked=true;
                    this.imgClass="noBtnClicked"
                    

                }
                else
                {
                    switch(varUser)
                    {
                        case true:
                            this.instructionFactoriser('connexion');
                            break;
                        case false:
                            this.instructionFactoriser('inscription');
                            break;
                    }
                }
            },
            instructionFactoriser(tabName)
            {
                this.activePage= tabName;
                this.classDonner ='nobtnclicked';
                this.noBtnClicked=false;
                this.imgClass='withBtnClicked';
                
            }
        }
         
            
    }
    
</script>

<style scoped>
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



.mapage{
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-image: url('../assets/images/fond3.png'); 
    background-size: cover;
}
.nav{
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    /* background-color:red; */
    padding: 3px 10px;
    transition: 0.5s;
    
}
/* .navContent{
    display: flex;
    background: blue;
} */
.navBar{
    display: flex;
    column-gap: 1rem;
    flex-wrap: wrap;
    margin-top: 5px;
    /* background-color: red; */
    width: 100%;
    /* height: 20px; */
    /* margin-right: 1000px; */

}
.navBar li{
    position: relative;
    list-style: none;
    
}
.navBar a {
    font-size: 1rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
}
.navBar a::after{
    content: "";
    width: 0;
    height: 2px;
    background-color: rgb(255, 255, 254);
    position: absolute;
    bottom: -4px;
    left: 0;
    transition: 0.4s all linear;
}
.navBar a:hover::after, .navBar .home-active::after{
    width: 100%;
}
.navContent{
    opacity: 0;
    transform: translateY(-30px);
}
.nav > .navContent:nth-child(1){
    animation: apparition 0.8s 0.4s ease-out forwards;
}
    .ispm{
        width: 55px;
        border-radius: 5%;
        margin-left: 68%;
    }
    .lesBoutons{
        display: flex;
        /* width: 100%; */
        height: 50px;
        /* background: blueviolet; */

        
        /* margin-left: 54.5%; */
        /* margin: 0 2px; */
        /* margin-left: 2px; */
        padding-left: 215px;
        

    }
    .lesBoutons .btn{
        /* margin: 0 2px 0 80px; */
        margin: 0 10px;
        background: #0e022d;
        color: white;

    }
section{
    height: 91.6%;
    width: 200%;
    /* background-color: aqua; */
    margin-top: 4%;
 
}

    
    .mapage1{
        /* background-color: blueviolet; */
        width: 50%;
        height: 100%;
    }
    .row{
        width: 100%;
        height: 100%;
    }
        .box1{
            height: 100%;
            /* background-color: rgb(49, 226, 43); */
        }
            .box3{
                height: 55%;
                /* background-color: aqua; */
                /* width: 100px; */
                position: relative;
            }
            /* pour mot bienvenue  */
            .bienvenu{
            text-align: center;
            }
             .bienvenu .motBienvenu {
            text-align: center;
            color: #292727;
            color: transparent;
            font-size: 1em;
            
            }
            .pg{
                font-family: "font-1";
                color:#0e022d;
            }
            .bienvenu .motBienvenu span{
            display: inline-block;
            position: relative;
            overflow: hidden; 
            font-size: clamp(65px, 2vw,20px);
            }
            .bienvenu .motBienvenu span::after{
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transform: translateX(-100%);
            } 
            .bienvenu .motBienvenu:nth-child(1) {
            font-weight: 30;
            animation: txt-appearance 0s 1s forwards;
            }

            .bienvenu .motBienvenu:nth-child(2){
            animation: txt-appearance 0s 1.25s forwards;
            }
            .bienvenu .motBienvenu:nth-child(1) span::after{
            background: #0e022d;
                    padding: 2%;;
            animation: slide-in 0.75 ease-out forwards,
            slide-out 0.75s 0.75s ease-out forwards;
            }
            .bienvenu .motBienvenu:nth-child(2) span::after{
            background: #0e022d;
                    padding: 2%;;
            animation: slide-in 0.75 1s ease-out forwards,
            slide-out 0.75s 1s ease-out forwards; 
            }
            @keyframes slide-in {
            100%{
                transform: translateX(0%);
            }
            }
            @keyframes slide-out {
            100%{
                transform: translateX(100%);
            }
            }

            @keyframes txt-appearance{
            100%{
                color: #222;
            }
            }
            .littleDescri{
                text-align: center;
                /* font-family: "font-"; */
                font-size: 1.5em;
            }
            .enSavoirPlus{
                margin: 10px 40%;
                background-color: #0e022d;
                color: white;
            }


            /* fin pour bienvenue  */
            
                .titre{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                h4{
                    margin: 0;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                }
            
                .haingony{
                    /* display:flex; */
                    /* flex-wrap: wrap; */
                    width: 100%;
                    height: 45%;
                    /* background: red; */
                
                }
                
                .soratra{
                    display: flex;
                    color: #0e022d;
                    background-color:rgba(13, 16, 56, 0.271);
                    padding: 2%;
                    border-radius: 20px;
                    margin:7% 3%;  
                    /* width: 40%; */
                    /* height: 45%; */
                    opacity: 0;
                    transform: translateY(-30px);
                    flex-flow: "font-3";
                }
                .col-sm-6 > .soratra:nth-child(1){
                    animation: apparition 0.8s 0.4s ease-out forwards;
                }
                .col-sm-6 > .soratra:nth-child(2){
                    animation: apparition 0.8s 0.4s ease-out forwards;
                }
                .col-sm-6 > .soratra:nth-child(3){
                    animation: apparition 0.8s 0.6s ease-out forwards;
                }
                .col-sm-6 > .soratra:nth-child(4){
                    animation: apparition 0.8s 0.6s ease-out forwards;
                }
                
                .sary{
                    width: 90px;
                    height: 90px;
                }
                .descri{
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    font-size: 1.3em;
                    margin: 5%;
                    text-align: center;
                    
                }


            
            .box2{

                height: 100%;
                position: relative;
            }
            /* pour les deux pages  */
            .contentPageToShow{
                position: absolute;
                height: 100%;
                width: 100%;
                margin-left: 100%;
                top: 0;

            }
            .btnClicked{
                margin-left: 100%;
                transition: all 2s ease;
                
            }
            
            .nobtnclicked{
                 margin-left: 15%;
                 transition: all 2s ease;
            }
              
              /* fin pour les deux pages  */
            /* ilay sary  */
            .imgContainer{
                    width: 100%;
                    height: 100%;
                    position: relative;
                    
                }
                    .imgContainer img{
                        position: absolute;
                        border-radius: 250px;
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    .imgContainer > img:nth-child(1){
                    animation: apparition 0.8s 0.6s ease-out forwards;
                    }
                    .imgContainer > img:nth-child(2){
                    animation: apparition 0.8s 0.6s ease-out forwards;
                    }
                    .imgContainer > img:nth-child(3){
                    animation: apparition 0.8s 0.6s ease-out forwards;
                    }
                    .imgContainer > img:nth-child(4){
                    animation: apparition 0.8s 0.6s ease-out forwards;
                    }
                    
                        .sari1{
                            top: 2%;
                            left: 2%;
                            width: 350px;
                            height: auto;
                        }
                        .sari2{
                            top: 35%;
                            left: 60%;
                            width: 200px;
                            height: auto;
                        }
            
            
                        .sari3{
                            top: 50%;
                            left: 3%;
                            width: 350px;
                            height: auto;
                        }
            
            
                        .sari4{
                            top: 80%;
                            left: 65%;
                            width: 200px;
                            height: auto;
                        }
                        .withBtnClicked{
                            opacity: 0;
                            transition: all 1s ease;
                        }
                        .noBtnClicked{
                            opacity: 1;
                            transition: all 3sn ease;
                        }

        /* farany css ny sary  */
        @keyframes apparition{
                    100%{
                        opacity: 1;
                        transform: none;
                    }
                }

                        
                        
            
            

                
</style>
