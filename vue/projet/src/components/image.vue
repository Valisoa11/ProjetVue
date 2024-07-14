<template>
     <div class="imgContainer">
        <img src="../assets/img1.jpg" alt="" class="sari1">
        <img src="../assets/img2.jpg" alt="" class="sari2">
        <img src="../assets/img3.jpg" alt="" class="sari3">
        <img src="../assets/img4.jpg" alt="" class="sari4">
    </div>
</template>

<script>
    export default {
        name:'imageVue',
    }
</script>

<style scoped>
.imgContainer{
                    width: 100%;
                    
                    height: 100%;
                    /* background-color: blueviolet; */
                    position: relative;
                }
                    .imgContainer img{
                        position: absolute;
                        border-radius: 250px;
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
            
            
            
            

</style>