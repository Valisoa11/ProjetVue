import { SIGNUP_ACTION } from "../../storeconstants";
import { LOGIN_ACTION } from "../../storeconstants";
import{ SET_USER_TOKEN_DATA_MUTATION} from '../../storeconstants';

import Axios from 'axios';
import SignupValidation from "@/services/SignupValidations";
export default{
    async [SIGNUP_ACTION](context, payload){
        
        let postData = {
            name:payload.name,
            email : payload.email,

            password : payload.password,
            statut: payload.leChoix

        };
        
        // let response = await Axios.get('http://localhost:7507/Tous', postData);
        // console.log(response)
        let response = "";
        try{
            
            response = await Axios.post('http://localhost:7507/TySyNday/inscription/', postData);
        }catch(err){
            let ErrorMessage = SignupValidation.getErrorMessagefromode(err.response.data.error.errors[0].message)
            throw ErrorMessage;
        }
      if (response.status === 200) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION,{
            email : response.data.email,
            password : response.data.password,
        })
        
      }
    },
    async [LOGIN_ACTION](_, payload){
        
        let postData = {
            email : payload.email,
            password : payload.password,
        };
        let response = await Axios.post('http://localhost:7507/TySyNday/connexion/', postData);
        console.log(response.data.email);
        return response.data.email;
        
    },
};