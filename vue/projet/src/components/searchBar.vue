<template>
    <div class="rechercher">
        <form action="">
            <div class="container">

                <input type="text" class="barSearch" placeholder="Rechercher...">
                <button class="searchBtn">
                    <img src="../assets/images/loupe.png" alt="Rechercher">
                </button>
                
                
            </div>
            
            
        </form>
        
    </div>
</template>

<script>
    export default {
        name:'SearchBarVue'
    }
</script>

<style  scoped>
.container{
    display: flex;
    align-items: center;
    width: 260px;
    padding: 0;
    /* margin: 50px auto ; */
    margin: 3px 15px ;
    border: 2px solid #ccc;
    border-radius: 25px;
    overflow: hidden;

}
.barSearch {
    flex: 1;
    padding:10px 20px ;
    border: none;
    outline: none;
    font-size: 16px;
}

.searchBtn {
    background-color: #0e022d;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.searchBtn img {
    width: 20px;
    height: 20px;
    /* margin-left: 100%; */
}





</style>