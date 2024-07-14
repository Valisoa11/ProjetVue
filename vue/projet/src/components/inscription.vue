<template>
    <div class="ity" >

            <div class="inscriContent">
                

                            <p class="motBienv">
                                Inscrivez-vous pour débloquer un monde d'opportunités professionnelles
                            </p>
                            <form action="" @submit.prevent="onSignup()">
                                <transition name="slide">
                                
                                    <div v-if="!choice">
                                 
                                        
                                        <p class="soratra">QU'EST CE QUE VOUS VOULEZ FAIRE?</p>
                                        <input type="radio" name="choix" value="rechercher emploi" id="emploi" v-model="leChoix" class="inpchoice"/>
                                        <label for="emploi" class="lab"><span></span> Rechercher des emplois</label>
                                        
                                        <input type="radio" name="choix" value="rechercher employeur" id="employeur" v-model="leChoix" class="inpchoice" />
                                        <label for="employeur" class="lab"><span></span>Rechercher des employeurs</label>
                                        <div class="placeErreur">

                                            <p class="erreur">{{ messages }}</p>
                                        </div>
                        
                                        <button class="btn next " @click="etapeSuivant">Suivant</button>
                                    </div>
                                </transition>
                                <transition name="slide">
                                
                                    <div v-if="choice">
                                        
                                            
                                            <div class="container">
                                                <div v-if="!rempli">
                                                    
                                                    <div class="Area">
                                                        <input type="text" required v-model="name" class="inp">
                                                        <div class="label-survole" v-if="leChoix==='rechercher emploi'">Votre nom</div>
                                                        <div class="label-survole" v-else>Nom de votre entreprise</div>
                                                    </div>
                                                    
                                                    <div class="Area">
                                                        <input type="email" required v-model="email" class="inp">
                                                        <div class="label-survole">Email</div>
                                                    </div>
                                                    <div class="placeErreur">

                                                        <p class="erreur">{{ message }}</p>
                                                    </div>

                                                    <div class="lesbtn">

                                                        <button class="btn prev" @click="etapeprec">Précedent</button>
                                                        <button class="btn next1" @click="etapeSuiv">Suivant</button>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    
                                                    
                                                    <div class="Area">
                                                        <input type="password" required v-model="password" class="inp">
                                                        <div class="label-survole">Mot de passe</div>
                                                        
                                                    </div>
                                                    <div class="Area">
                                                        <input type="password" required v-model="confmdp" class="inp">
                                                        <div class="label-survole">Confirmer votre mot de passe</div>
                                                    </div>
                                                    <div class="placeErreur">

                                                        <p class="erreur">{{ message }}</p>
                                                    </div>

                                                    <div class="lesbtn">

                                                        <button class="btn prev" @click="etapeprecedent">Précedent</button>
                                                        <button type="submit" class="btn btn-success next1" >S'inscrire</button>
                                                    </div>
                                                    
                                                </div>
                                                
                                                
                                                
                                                
                                            </div>
                                            
                                    
                                    
                                </div>
                            </transition>
                        </form>
                        <a href="connexion.vue" class="lien">Vous avez déja un compte</a>
                        
                        
            </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    import { mapActions } from 'vuex';
    import{mapMutations, mapState} from 'vuex';
    import {SIGNUP_ACTION} from '../store/storeconstants'
    import SignupValidations from '../services/SignupValidations';
    import {LOADING_SPINNER_SHOW_MUTATION} from '../store/storeconstants'
    export default {
        name:'signUp',
        data(){
            return{
                choice:false,
                rempli:false,
                leChoix:'',
                mdp:'',
                message:'',
                messages:'',
                confmdp:'',
                name:'',
                email:'',
                password:'',

            }
        },
        computed:{
        ...mapState('auth',{
            firstName: (state) =>state.name,

        }),

    },
        methods:{
            etapeSuivant(){
                
                    
                if(this.leChoix){
                    this.choice=true;
                     this.messages='';
                     console.log(this.leChoix)
                }else{
                     this.messages='Veuillez choisir votre option'
                }
                
            },
            etapeprec(){
                    this.choice=false;
                    this.message=''
                
            },
            etapeSuiv(){
                if(this.name && this.email){
                    this.rempli=true;
                    this.message='';

                }else{
                    this.message='Veuillez remplir le formulaire'
                }
                    
                
            },
            etapeprecedent(){
                    this.rempli=false;
                    this.message="";
                
            },
            ...mapActions('auth',{
            signup: SIGNUP_ACTION

            }),

            // ...mapActions('auth',{
            // login: LOGIN_ACTION

        // }),
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION
        }),
        onSignup(){
            let validations = new SignupValidations(this.email, this.password);
            this.errors = validations.checkValidation();
            if('email' in this.errors || 'password' in this.errors){
                return false
            }
            this.signup({email:this.email, password: this.password, statut:this.lesChoix, name:this.name})
            // .catch(error =>{
            //     console.log(error)
            // });
            this.$router.push('/publication');

            // let validations = new SignupValidations(this.email, this.password);
            // this.errors = validations.checkValidation();
            // if(this.errors.length){
            //     return false
            // }
            // this.showLoading(true);
            // setTimeout(()=>{
            //     this.showLoading(false);
            // },3000)
            // this.login({email:this.email, password: this.password, name: this.name, statut: this.leChoix})
            // if (this.leChoix === "rechercher emploi"){
            //     this.$router.push('/publication');

            // }
            // else{
            //     this.$router.push('/profil');

            // }
            
            

        }
            
        }
    }
</script>

<style scoped>
.ity{
    background-color: #0e022dfe;
    width: 70%;
    height: 70%;
    border-radius: 10px;
    margin-top: 15%;
    transition: 0.2s;
    box-shadow: 1px 3px 20px 2px rgb(12, 12, 12);

}


    .inscriContent{
        width: 95%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding:1px 20px;
    }
        .motBienv{
            text-align: center;
            margin-top: 20px;
            font-size: 25px;
            
        }
    
            .name{
                position: relative;
                
            }
            .soratra{
                text-align: center;
            }
            .inpchoice[type="radio"] {
                display: none; /* hide the default check boxes and radios */
            }
            /* style the label elements */
            .lab{
            display: block;
            width: 100%;
            padding: 15px;
            border: 1px solid #0e022dfe;
            margin: 20px 0;
            border-radius: 10px;
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3), 0 7px 21px 0 rgba(0, 0, 0, 0.20);
            }
            /* create our custom checkbox and radio */
            .lab > span {
            display: inline-block;
            width: 15px;
            height: 15px;
            border: 3px solid #0e022dfe;
            border-radius: 50%;
            margin-right: 15px;
            }
            /* style the labels when their corresponding inputs are checked */
            .inpchoice[type="radio"]:checked + .lab {
            background: #0e022dfe;
            color: white;
            }
            /* style the custom check boxes and radios when their corresponding inputs are checked */
            .inpchoice[type="radio"]:checked + .lab > span {
            background: #ffffff;
            }
            .btn{
                background: #0e022dfe;
                color: #ffffff;
            }
                
            .container{
                margin-top: 10%;
            }

        
            .Area{
                position: relative;
                height: 80px;
                line-height: 50px;
                
                /* margin-bottom: 10px; */
            }
                .inp{
                    background-color: transparent;
                    width: 100%;
                    
                    position: absolute;

                    font-size: 1em;
                    line-height: 50px;
                    outline: none;
                    padding: 0 15px;
                    border-radius: 15px;
                    border: #0e022dfe 1px solid;
                    z-index: 1111;
                    transition: 0.1 ease;
                }
                .label-survole{
                    color:#0e022dfe ;
                    transition: 0.2s ease;
                    font-size: 1em;
                    position: absolute;
                    padding: 0 20px;
                    margin: 0 20px;
                    

                }
                
                .inp:focus+.label-survole,
                .inp:valid+ .label-survole{
                   color:black;
                   background: white;
                    height: 30px;
                    line-height: 30px;
                    padding: 0 12px;
                    transform: translate(-15px, -16px) scale(0.88);
                    z-index: 1111;
        
                }
                .next{
                    margin-left: 78%;
                    margin-top: 0%;
                    margin-bottom: 2%;
                    padding: 10px 20px;
                }
                .prev{
                
                    margin-top: 4%;
                    margin-bottom: 2%;
                    padding: 10px 20px;
                }
                .lesbtn{
                    display: flex;
                    margin: 5%;
                    justify-content: space-between;
                }
                .lesbtn .next1{
                    padding: 10px 20px;
                    margin-top: 4%;
                    margin-bottom: 2%;
                    

                }
                .erreur{
                    color: red;
                }
                .placeErreur{
            
                    width: 100%;
                    /* padding: 2%; */
                    /* background: black; */
                }
                
                /* .slide-enter-active, .slide-leave-active{
                    transition: transform 0.5s;
                }
                .slide-enter, .slide-leave-to{
                    transition: translateX(100%);
                }
                .slide-enter-to, .slide-leave{
                    transition: translateX(0);
                } */
                .lien{
                    color: #0e022dfe;
                    margin-left: 25%;
                }
</style>