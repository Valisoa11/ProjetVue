<template>
    <div class="center">
        <div class="ring">

        </div>
        <span>e-'ty sy 'nday </span>
    </div>
</template>

<script>

export default {
    name:'TheLoader',
    props :{
        text: {
            required: false,
            type: String,
            default:'Loading'
        }
    }
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    font-family: serif;
    background: black;
}

.center{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    background: #0e022d;
    z-index: 1000;
}
.ring{
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: ring 2s linear infinite;
}
@keyframes ring{
    0%{
        transform: rotate(0deg);
        box-shadow: 1px 5px 2px #e65c00;
    }
    50%{
        transform: rotate(180deg);
        box-shadow: 1px 5px 2px #18b201;
    }
    100%{
        transform: rotate(360deg);
        box-shadow: 1px 5px 2px #0456c8;
    }
}
.ring::before{
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(255,255,255,.3);
}
span{
    color: #737373;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 200px;
    animation: text 3s ease-in-out infinite;
}
@keyframes text {
    50%{
        color: black;
    }
}
</style>