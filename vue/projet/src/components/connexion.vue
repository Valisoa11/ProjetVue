<template>
    <div class="ity">  
        <div class="connexContent">

            <p class="motBienv">
                Connectez-vous et explorez un univers d'opportunités professionnelles
            </p>  
            <form v-on:submit.prevent="onLogin()">
                <div class="container">
                    <div class="Area">
                        <input type="email" required v-model="email" class="inp">
                        <div class="label-survole">Email</div>
                    </div>
                    <div class="error" v-if="errors.email">{{ errors.email }}</div>
                    <div class="Area">
                        <input type="password" required v-model="password" class="inp">
                        <div class="label-survole">Mot de passe</div>
                        
                    </div>
                    <div class="error" v-if="errors.password">{{ errors.password }}</div>
                    <button type="submit" class="btn btn-success testee" >Se connecter</button>
                </div>
        
            </form>
            <div class="liens">
                <a href="#">S'inscrire</a>
                <a href="#"> mot de passe oublié</a>
            </div>
            
    </div>
  </div>
</template>

<script>
   import{mapMutations, mapState} from 'vuex';
import { mapActions } from 'vuex';
import {LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION} from '../store/storeconstants'
import SignupValidations from '../services/SignupValidations';

export default {
    name:'LogIn',
    data (){
        return{
            email:'',
            password:'',
            errors:[]
        };
    },
    computed:{
        ...mapState('auth',{
            firstName: (state) =>state.name,

        }),

    },
    methods : {
        ...mapActions('auth',{
            login: LOGIN_ACTION

        }),
        ...mapMutations({
            showLoading: LOADING_SPINNER_SHOW_MUTATION
        }),
        async onLogin(){
            let validations = new SignupValidations(this.email, this.password);
            this.errors = validations.checkValidation();
            if(this.errors.length){
                return false
            }
            this.showLoading(true);
            setTimeout(()=>{
                this.showLoading(false);
            },3000);
            let response = await this.login({email:this.email, password: this.password});
            if (response === this.email){

                this.$router.push('/publication');
            }else {
                alert('Cet email est invalide')
            }
            
        }

    }
    
}
</script>

<style scoped>
.liens{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 20px 15px;
}
.liens a{
    color:#0e022dfe;
    
}
.testee{
    width: 100%;
    background: #0e022dfe;
}
.ity{
    background-color: #0e022dfe;
    width: 70%;
    height: 70%;
    border-radius: 10px;
    margin-top: 15%;
    transition: 0.2s;
    box-shadow: 1px 3px 20px 2px rgb(12, 12, 12);
    

}
    .connexContent{
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

</style>