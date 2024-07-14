<template>
    <div class="maPage">
        <navigation-vue></navigation-vue>
        <div class="izyrehetra">
            <div class="col-md-10 box1">
                <div class="titre">
                        <h1>Créer votre publication</h1>
                </div>
                <div class="form">
                    <form>
                        
                    <div class="corps-formulaire">
                        <div class="gauche">
                        <div class="groupe">
                          <label class="la">Domaine de travail</label>
                          <input type="text" autocomplete="off" />
                          <img src="../assets/images/briefcase-solid.svg" id="pareil" alt="">
                        </div>
                        <div class="groupe">
                          <label class="la">Ajouter un image</label>
                          <div class="camera">
                            <label for="uploadBtn" class="autre">
                              <img src="../assets/images/camera-solid.svg" id="autre" alt="">
                              <!-- Upload File -->
                            </label>
                            <input type="file" id="uploadBtn" accept="image/*" autocomplete="off" />
                          </div>
                        </div>
                        <div class="groupe">
                          <label class="la">Votre mot de passe</label>
                          <input type="text" autocomplete="off" />
                          <img src="../assets/images/lock-solid.svg" id="pareil" alt="">
                        </div>
                        </div>

                        <div class="droite">
                        <div class="groupe">
                            <label>Déscription</label>
                            <!-- <input type="text" placeholder="Saisissez ici ..." autocomplete="off"> -->
                            <textarea class="texte" placeholder="Saisissez ici..."></textarea>
                        </div>
                        </div>
                    </div>

                    <div class="pied-formulaire" align="center">
                        <button>Publier</button>
                    </div>

                    
                </form>
            </div>

            </div>
            <div class="col-md-2" box2>
              <menu-vue></menu-vue>

            </div>
        </div>


    </div>
</template>

<script>
import NavigationVue from './Navigation.vue'
import MenuVue from './Menu.vue';
export default {
    name:'CreationPubVue',
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
}
.form .corps-formulaire .groupe {
  position: relative; 
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.form .corps-formulaire .gauche .groupe input {
  margin-top: 5px;
  margin-left: 70px;
  padding: 10px 5px 10px 30px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 5px;
}
.form .corps-formulaire .gauche .groupe img#pareil {
  position: absolute; 
  width:35px;
  left: 70px;
  top: 30px;
  padding: 9px 8px;
  color: #fff;
}
.form .corps-formulaire .gauche .groupe img#autre {
  position: absolute; 
  width:35px;
  left: 70px;
  top: 30px;
  padding: 9px 8px;
  color: #fff;
}
.form .corps-formulaire .gauche .groupe .camera input {
  margin-top: 5px;
  margin-left: 70px;
  padding: 10px 5px 10px 30px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 5px;
}
 label.autre {
  /* margin-top: 2px; */
  margin-left: 70px;
  padding: 20px 5px 25px 250px;
  
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 5px;
} 
input[type="file"]{
  display: none;
}
input[type="file"]::webkit-file-upload-button {
  cursor: pointer;
}
.form .corps-formulaire .droite {
  margin-left: 180px;
}
.form .corps-formulaire .droite .groupe {
  height: 100%;
  /* width: 100%; */
  /* background: #333; */
}
.form .corps-formulaire .droite .groupe textarea {
  margin-top: 5px;
  padding: 10px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  outline: none;
  border-radius: 5px;
  resize: none;
  height: 72%;
}
.la {
    font-size: 16px;
    margin-left: 70px;
}
.form .pied-formulaire button {
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
.form .pied-formulaire button:hover {
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
            
            position: relative;
            background: #0e022d0c;

        }


</style>