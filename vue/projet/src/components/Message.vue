<template>
    <div class="maPage">
        <navigation-vue></navigation-vue>
        <div class="izyrehetra">
            <div class="col-md-10 box1">
                <div class="row misyMess">
                <div class="col-md-4 content1">
                    <div class="entete">
                        <div class="message">    
                            <p><img src="../assets/images/message-regular.svg" alt="" class="teste">Messages</p>
                        </div>
                        <div class="icons">
                            <img src="../assets/images/pen-to-square-regular.svg" alt="">
                            <img src="../assets/images/star-regular.svg" alt="">
                        </div>
                    </div>
                    <div class="search">
                        <img src="../assets/images/magnifying-glass-solid.svg" alt="">
                        <input type="text">
                    </div>
                    <div class="contenuMessage">
                        <div class="unMessage">
                            <img src="../assets/images/1680001704059.jpg" alt="" class="pdp">
                            <div class="nomEtMess">
                                <p class="nom">Valisoa</p>
                                <p class="mess">Coucou</p>
                            </div>
                            <div class="heure">
                                <p>11:02AM</p>
                            </div>
                        </div>
                        <div class="unMessage">
                            <img src="../assets/images/1680001704059.jpg" alt="" class="pdp">
                            <div class="nomEtMess">
                                <p class="nom">Valisoa</p>
                                <p class="mess">Coucou</p>
                            </div>
                            <div class="heure">
                                <p>11:02AM</p>
                            </div>
                        </div>
                        <div class="unMessage">
                            <img src="../assets/images/1680001704059.jpg" alt="" class="pdp">
                            <div class="nomEtMess">
                                <p class="nom">Valisoa</p>
                                <p class="mess">Coucou</p>
                            </div>
                            <div class="heure">
                                <p>11:02AM</p>
                            </div>
                        </div>
                    </div>
                    
                    

                </div>
                <div class="col-md-8 content2">
                    <div class="head">
                        <img src="../assets/images/1680001704059.jpg" alt="" class="pdp">
                    
                        <div class="info">
                            <p class="nom">Valisoa</p>
                            <p class="offre">Offre:developper</p>
                        </div>
                        <div class="icon">
                            <img src="../assets/images/ellipsis-solid.svg" alt="">

                        </div>
                    </div>
                    <div class="corps">
                        <!-- <div class="messageRecu">
                            <img src="../assets/images/1680001704059.jpg" alt="" class="pdp">
                            <div class="recu">
                                <p>{{ meassageEnvoyer }}</p>
                            </div>                        
                        </div> -->
                        

                            <div class="messageEnvoyer" v-for="message in messages" :key="message.id">
                                <div class="envoie">
                                    
                                        <p >
                                            {{ message.text }}
                                        </p>
                                    
                                
                                </div>
                                <img src="../assets/images/1680001704059.jpg" alt="" class="pdp">
                            </div>
                            <!-- <br> -->
                    
                                          
                    
                </div>
                <form @submit.prevent="sendMessage">
                <div class="envoyerUnMessage">

                        <div class="inpMessage">
                            <input type="text" placeholder="Ecrire un message" v-model="newMessage">
                            <img src="../assets/images/camera-solid.svg" alt="">
                        </div>
                        <button type="submit">
                            
                            <img src="../assets/images/paper-plane-solid.svg" alt="">
                        </button>
                    </div>
                </form>


                        

                </div>
            </div>

            </div>
            <div class="col-md-2 box2">
                <menu-vue></menu-vue>

            </div>

            
        </div>


    </div>
</template>

<script>
import NavigationVue from './Navigation.vue'
import MenuVue from './Menu.vue'

export default {
    name:'MessageVue',
    components:{
        NavigationVue,
        MenuVue
    },
    data (){
        return{
            newMessage:'',
            messages:[]

        };
    },
    methods: {
        sendMessage(){
            if(this.newMessage.trim()!==''){
                const newMessage = {
                    id: this.messages.length + 1,
                    text: this.newMessage
                };
                this.messages.push(newMessage);
                this.newMessage='';
            }

        }
    }
}
</script>

<style  scoped>
.maPage{
    width: 100%;
    height: 100vh;
    position: relative;
    
    
}
    .izyrehetra{
        width: 100%;
        height: 90%;
        display: flex;
        /* position: absolute; */
        /* background: paleturquoise; */
        /* overflow-y: scroll; */
        
    }
    .box1{
            border-right: 2px solid grey;
            
            height: 100%;
            /* width: 70%; */
            position: relative;
            /* background-color: rgb(157, 42, 138); */
            /* overflow-y: scroll; */
            /* display: flex; */
            
            
    }
    .misyMess{
        /* width: 100%; */
        height: 100%;
        /* background: red; */
        /* position: relative; */
    }
    
    
    .content1{
        /* background-color:rgb(240, 231, 231); */
        /* height: 100%; */
        border-right: 1px solid #0e022d ;
        /* background: peru; */
    }
    .entete{
        padding: 8px;
        display: flex;
    }
    .message p{
        font-size: 16px;
        
    }
    .message{
        float: left;
        margin-right: 50%;
    }
    .teste{
        float: left;
        margin: 4px;
    }
    .icons{
        /* margin-left: 53%; */
        float: right;
    }
    .icons img{
        margin: 2px;
    }
    img{
        width: 20px;
        height: auto;
    }

    .search{
        border: 1px solid #0e022d;
        border-radius: 20px;
        padding: 4px 12px;
        margin: 2px 10px;
    }
    input{
        outline: none;
        border: none;
        background: transparent;
    }
                .contenuMessage{
                    margin-top: 5%;
                    width: 100%;
                    height: 84.5%;
                    /* background-color: blueviolet; */
                    overflow-y: scroll;
                    
                }
                .contenuMessage::-webkit-scrollbar{
                    background-color: transparent;
                    border-radius: 6px;
                    width: 8px;
                    transition: 0.5s linear;
                    
                }
                .unMessage{
                    display: flex;
                    padding: 10px;
                    margin: 15px;
                    border-bottom: 1px solid #0e022d;
                }
                .nomEtMess{
                    margin:0 12px;
                    
                }
                    .nom{
                        font-weight: 500;
                        
                    }
                    .mess{
                        margin-top: 0;
                    }
                .heure{
                    font-size: 15px;
                    margin-left: 39%;
                }
                .pdp{
                    width: 60px;
                    height: 60px;
                    border-radius: 50px;
                }
                .content2{
            background-color: #ffff ;
            height: 100%;
        }
        .head{
            display: flex;
            padding: 15px 25px;
            width: 100%;
            height: 15%;
            background-color: #ffff;
            border-bottom: 1px solid#0e022d ;
        }
        .icon{
            float: right;
        }
        
        .info{
            margin:0 70% 0 10px;

        }
        .corps{
            width: 100%;
            height: 75%;
            background-color: #ffff;
            padding: 25px;
            overflow-y: scroll;
            border-bottom: 1px solid#0e022d ;
            /* display: block; */
        }
        .corps::-webkit-scrollbar{
            background-color: transparent;
        }
            .messageRecu{
                display: flex;
                margin-right: 20%;
                float: left;
            }
            .recu{
                margin: 10px;
                padding: 10px;
                background-color: #0e022d;
                border-radius: 25px;
                border-top-left-radius: 0;
                color:#ffff;


            }
            .envoie{
                margin: 10px;
                padding: 10px;
                background-color: #0e022d;
                border-radius: 25px;
                border-bottom-right-radius: 0;
                color:#ffff;

            }
            .messageEnvoyer{
                margin-left: 20%;
                /* width: 50%; */
                float: right;
                /* background: red; */
                display: flex;
                /* flex-wrap: wrap; */
            }
            .envoie p{

            }
            .messageEnvoyer img{
                float: right;
            }
            .envoyerUnMessage{
                display: flex;
                margin: 8px;
            }
                .inpMessage{
                    border: 1px solid #0e022d;
                    border-radius: 20px;
                    padding: 15px;
                    width: 93%;
                    margin-right: 3%;
                    /* background-color: #0e022d ; */
                }
                    .inpMessage img{
                        float: right;
                    }
                    .box2{
            border-left: 2px solid grey;
            height: 100%;
            /* width: 30%; */
            position: relative;
        }
        
       
        @media only screen and (max-width:1344px) {
            .entete{
                padding: 2px;
                display: flex;
            }
            img{
                width: 15px;
                height: auto;
            }
            .unMessage{
                padding: 0px;
                margin: 15px;
            }
            .heure{
                font-size: 15px;
                margin-left: 32%;
            }
            .message{
                margin-right: 48%;
            }
            .head{
                width: 95%;
                padding: 6px;
            }
            .corps{
                height: 72%;
            }
            .inpMessage{
                margin: 2px 10px;
                padding: 10px;
            }
        }
        @media only screen and (max-width:1304px) {
            .message{
                margin-right: 45%;
            }
            img{
                width: 15px;
                height: auto;
            }
        }
        @media only screen and (max-width:1287px) {
            .heure{
                font-size: 15px;
                margin-left: 30%;
            }
            img{
                width: 15px;
                height: auto;
            }
        }
        @media only screen and (max-width:1240px) {
            .heure{
                font-size: 15px;
                margin-left: 26%;
            }
            .message{
                margin-right: 43%;
            }
            img{
                width: 15px;
                height: auto;
            }
        }
        @media only screen and (max-width:1200px) {
            .head{
                width: 90%;
                padding: 6px;
            }
            img{
                width: 15px;
                height: auto;
            }
            .heure{
                font-size: 15px;
                margin-left: 24%;
            }
            .message{
                margin-right: 40%;
            }
        }
        @media only screen and (max-width:1148px) {
            .unMessage{
                padding: 0px;
                margin: 3px;
            }
            .pdp{
                width: 45px;
                height: 60px;
                border-radius: 50px;
            }
            img{
                width: 15px;
                height: auto;
            }
            .heure{
                font-size: 13px;
                margin-left: 24%;
            }
            .message{
                margin-right: 38%;
            }
        }
        @media only screen and (max-width:1138px) {
            img{
                width: 15px;
                height: auto;
            }
        } 
        @media only screen and (max-width:1119px) {
            img{
                width: 13px;
                height: auto;
            }
        } 
        @media only screen and (max-width:1111px) {
            img{
                width: 12px;
                height: auto;
            }
        } 
        @media only screen and (max-width:1107px) {
            img{
                width: 12px;
                height: auto;
            }
        } 
        @media only screen and (max-width:1088px) {
            .pdp{
                width: 40px;
                height: 55px;
                border-radius: 50px;
            }
        } 
        @media only screen and (max-width:1033px) {
            .head{
                width: 80%;
                padding: 6px;
            }
            .pdp{
                width: 40px;
                height: 55px;
                border-radius: 50px;
            }
            .heure{
                font-size: 13px;
                margin-left: 23%;
            }
        } 
        @media only screen and (max-width:988px) {
            .heure{
                font-size: 12px;
                margin-left: 15%;
            }
        } 
        @media only screen and (max-width:888px) {
            .head{
                width: 73%;
                padding: 6px;
            }
            .heure{
                font-size: 12px;
                margin-left: 6%;
            }
        } 
        @media only screen and (max-width:768px) {
            .heure{
                font-size: 15px;
                margin-left: 70%;
            }
            img{
                width: 20px;
                height: auto;
            }
            .message{
                margin-right: 75%;
            }
            .unMessage{
                padding: 10px;
                margin: 10px;
            }
            .pdp{
                width: 55px;
                height: 65px;
                border-radius: 50px;
            }
            .head{
                width: 100%;
                padding: 6px;
            }
        } 
        @media only screen and (max-width:640px) {
            .heure{
                font-size: 15px;
                margin-left: 65%;
            }
            .head{
                width: 90%;
                padding: 6px;
            }
        } 

</style>