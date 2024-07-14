import Validations from "./Validations";

export default class SignupValidation{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    checkValidation(){
        let errors = [];
        if (!Validations.checkEmail(this.email)){
            errors['email'] = 'Invalid Email'
        }
        if( !Validations.minLength(this.password, 6)){
            errors['password'] = 'Mot de passe court 6'
        }
        return errors;
        
    }
    // static getErrorMessagefromCode(errorCode){
    //     switch(errorCode){
    //         case 'EMAIL_EXISTS':
    //         return 'Email already exists';
    //     }
    // }
}