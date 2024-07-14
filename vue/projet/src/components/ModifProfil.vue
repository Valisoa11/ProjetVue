<template>
    <div class="maPage">
        <navigation-vue></navigation-vue>
        <div class="izyrehetra">
            <div class="col-md-10 box1">
                <div class="titre">
                        <h1>Modifier votre profil</h1>
                </div>
                <div class="form">
                    <form>
                        
                    <div class="corps-formulaire">
                        <div class="gauche">
                        <div class="groupe">
                            <label class="la">Nom de votre entreprise</label>
                            <input type="text" autocomplete="off" />
                            <img src="../assets/images/briefcase-solid.svg" alt="" class="petit">
                        </div>
                        <div class="groupe">
                            <label class="la">Description de votre entreprise</label>
                            <input type="text" autocomplete="off" />
                            <img src="../assets/images/pen-to-square-solid.svg" alt="" class="petit">
                        </div>
                        <div class="groupe">
                            <label class="la">Contact</label>
                            <input type="number" autocomplete="off" />
                            <img src="../assets/images/phone-solid.svg" alt="" class="petit">
                        </div>
          
                        
                        <div class="groupe">
                          <label class="la">Votre mot de passe</label>
                          <input type="text" autocomplete="off" />
                          <img src="../assets/images/lock-solid.svg" class="petit" alt="">
                        </div>
                        </div>

                        <div class="droite">
                            <div class="groupe">
                                <img src="../assets/images/circle-user-solid (1).svg" alt="" class="grand">
                                <div class="camera">
                                    <input type="file" accept="image/*" autocomplete="off" />
                                    <img src="../assets/images/camera-solid.svg" alt="" class="petit">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pied-formulaire" align="center">
                        <button>Modifier</button>
                    </div>

                    
                </form>
            </div>
            </div>
            <div class="col-md-2 box2">
                <menu-vue></menu-vue>
            </div>
        </div>


    </div>
</template>

<script>
import NavigationVue from './Navigation.vue';
import MenuVue from './Menu.vue';
export default {
    name:'ModifProfilVue',
    components:{
        NavigationVue,
        MenuVue,
    }
}
</script>

<style scoped>
.maPage{
    width: 100%;
    height: 100vh;
    position: relative;
    /* background-image: url('../assets/images/fond6.jpg');  */
    /* background-size:cover ; */

    /* background-color: aqua; */
}
    .izyrehetra{
        width: 100%;
        height: 91%;
        /* background-color: rgb(190, 7, 7); */
        display: flex;
        
        
        
    }
        .box1{
            border-right: 2px solid grey;
            height: 100%;
            /* width: 70%; */
            /* background-color: black; */
        }
        .titre{
                margin: 15px 0 0 0;
                background: #0e022d;
                padding: 5px;
                color: white;
            }
            
        
.form {
  width: 850px;
  background: #0e022d; 
  border: 2px solid rgba(255, 255, 255, .2);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  backdrop-filter: blur(50px);
  border-radius: 10px;
  color: #ffffff;
  padding: 40px 35px 55px;
  margin: 5% 10%;
}
.form .corps-formulaire {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-left: 30px;
}
.form .corps-formulaire .groupe {
  position: relative; 
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.form .corps-formulaire .gauche .groupe input {
  margin-top: 5px;
  margin-left: 10px;
  padding: 10px 5px 10px 100px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 5px;
}
form .corps-formulaire .gauche .groupe img.petit {
  position: absolute; 
  width: 35px;
  left: 10px;
  top: 30px;
  padding: 9px 8px;
  color: #fff;
}
form .corps-formulaire .droite {
  margin-top: 50px;
  margin-left: 135px;
}
form .corps-formulaire .droite .camera {
  margin-top: -35px;
  margin-left: 110px;
  background: rgb(23, 154, 194);
  width: 40px;
  padding: 10px 10px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
}
form .corps-formulaire .droite .camera input[type="file"]{
  position: absolute;
  transform: scale(2);
  opacity: 0;
}
input[type="file"]::webkit-file-upload-button {
  cursor: pointer;
}
.la {
    font-size: 16px;
    margin-left: 10px;
}
form .pied-formulaire button {
  width: 100%;
  height: 45%;
  padding: 10px 0;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
  transition: transform 0.5s;
}
form .pied-formulaire button:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 920px) {
  form .corps-formulaire .droite {
    margin-left: 0px;
  }
}
.box2{
            border-left: 2px solid grey;
            height: 100%;
            /* width: 30%; */
            position: relative;
            background: #0e022d0c;
}
</style>