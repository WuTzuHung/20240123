<script>
import { mapState, mapActions } from 'pinia';
import counter from '../stores/counter';

export default {
    data() {

    },
    methods: {
        ...mapActions(counter, ["getLocation", "setLocation", "setLocation", "getData"]),
        handleClick() {
            // 在这里添加按钮被点击后的操作
            this.$router.push({
                path: "/hoshikawa1"//要跳转的页面的路由
            });
        },
        handle() {
            // 在这里添加按钮被点击后的操作
            // this.$router.push({
            //     path: "/Vbind"//要跳转的页面的路由
            // });
            this.$router.push('/introduce')
        },
        hand() {
            // 在这里添加按钮被点击后的操作
            // this.$router.push({
            //     path: "/Vbind"//要跳转的页面的路由
            // });
            this.$router.push('/hoshikawa2')
        },
    },
    created() {
        this.getData()
    },
    mounted() {
        this.setLocation(1)
        console.log(this.getLocation)
    }
}
</script>

<template>
    <div class="back">
        <div class="boxHoshi" style="">
            <h1 class="animate__animated animate__backInLeft h1get wordsH">Getting to know </h1>
            <h1 class="animate__animated animate__backInLeft h1hoshi wordsH">Hoshikawa</h1>
            <p class="tex1 wordsH">For those curious about Hoshikawa, exploring in </p>
            <p class="tex2 wordsH">a fun and enjoyable way</p>
            <!-- <router-link to="/introduce"> -->
                <div class="BoxButton">
            <button class="a PictureAbc" @click="handleClick">
                <img src="../picture/FITjkdEakAE1PHV.png" alt="Your Image" style="   ">
            </button>
            <!-- </router-link> -->

            <button class="b PictureAbc" @click="this.handle()">
                <img src="../picture/FITjkdEakAE1PHV.png" alt="Your Image" style="  ">
            </button>


            <button class="c PictureAbc" @click="this.hand()">
                <img src="../picture/FITjkdEakAE1PHV.png" alt="Your Image" style="">
            </button>
            <img src="../picture/hoshikawaseefuku.png" class="animate__animated animate__fadeInRight"
                style="" alt="...">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100dvh;
}

// .BoxButton{
//     margin-top: 19%;
//     margin-right: 57%;

//     .PictureAbc{
//         margin-right: 18%;
//         width: 5%;
//         height: 5%;
//     }


// }

button {
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;

    float: right;
    -webkit-animation: baloon_1 3s infinite;
    -moz-animation: baloon_1 3s infinite;
    -ms-animation: baloon_1 3s infinite;
    -o-animation: baloon_1 3s infinite;
    animation: baloon_1 3s infinite;
    -webkit-animation-direction: alternate;
    -moz-animation-direction: alternate;
    -ms-animation-direction: alternate;
    -o-animation-direction: alternate;
    animation-direction: alternate;

    
}

@-webkit-keyframes baloon_1{
0% { transform:translateY(20px);}
50% {transform:translateY(50px);}
100% {transform:translateY(20px);}
}

@-moz-keyframes baloon_1{
0% { transform:translateY(20px);}
50% {transform:translateY(50px);}
100% {transform:translateY(20px);}
}

@-ms-keyframes baloon_1{
0% { transform:translateY(20px);}
50% {transform:translateY(50px);}
100% {transform:translateY(20px);}
}

@-o-keyframes baloon_1{
0% { transform:translateY(20px);}
50% {transform:translateY(50px);}
100% {transform:translateY(20px);}
}

@keyframes baloon_1{
0% { transform:translateY(20px);}
50% {transform:translateY(50px);}
100% {transform:translateY(20px);}
}

.back {
    position: relative;
    width: 100%;
    height: 95vh;
    background-color: rgb(251, 200, 105);
    border-radius: 10px;

}

.boxHoshi {
    // padding-top: 10%;
    position: relative;
    width: 98%;
    height: 94vh;
    top:6vh;
    background: linear-gradient(to bottom, #fab80d 70%, #ffd134 100%);
    border-radius: 10px;

    // z-index: 2;
    .animate__animated.animate__fadeInRight {
        position: absolute;
        left: 60%;
        bottom: 0%;
        width: 32%; 
        height: 100vh;
    }

    .h1get {
        position: absolute;
        left: 14.5%;
        top: 25%;
        font-size: 3.5rem;

    }

    .h1hoshi {
        position: absolute;
        left: 19%;
        top: 40%;
        font-size: 3.5rem;
    }

    .tex1 {
        position: absolute;
        left: 16%;
        top: 56%;
        font-size:1rem;
    }

    .tex2 {
        position: absolute;
        left: 16%;
        top: 63%;
        font-size:1rem;
    }
    
}

@media (max-width: 450px) {
    
    .back{
        height: 100vh;
        border-radius: 0px;
    }

    .boxHoshi{
        width: 95%;
        height: 95vh;
        top:5vh;

        .animate__animated.animate__fadeInRight {
        position: absolute;
        left: 9%;
        bottom: 0%;
        width: 95%; 
        height: 80vh;
    }

    .wordsH{
        display: none;
    }

    }
}
</style>
