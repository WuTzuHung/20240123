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
            <h1 class="animate__animated animate__backInLeft h1get">Getting to know </h1>
            <h1 class="animate__animated animate__backInLeft h1hoshi ">Hoshikawa</h1>
            <p class="tex1">For those curious about Hoshikawa, exploring in </p>
            <p class="tex2">a fun and enjoyable way</p>
            <!-- <router-link to="/introduce"> -->
            <button class="a" @click="handleClick">
                <img src="../picture/01.png" alt="Your Image" style="   ">
            </button>
            <!-- </router-link> -->

            <button class="b" @click="this.handle()">
                <img src="../picture/FITjkdEakAE1PHV.png" alt="Your Image" style="  ">
            </button>


            <button class="c" @click="this.hand()">
                <img src="../picture/8888888888888.png" alt="Your Image" style=" width: 100px; height: 100px;">
            </button>
            <img src="../picture/hoshikawaseefuku.png" class="animate__animated animate__fadeInRight"
                style="width: 475px; height: 700px;" alt="...">
        </div>
    </div>
</template>

<style scoped lang="scss">

body{
    overflow: hidden;
}

.a{
    margin-top: 10px;
}
.b{
    margin-left: 145px;
}

.c{
    margin-left: 320px;
    margin-top: 10px;
}
button {
    position: absolute;
    // left: 220px;
    // top: 455px;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;

    float: right;
    position: absolute;
    top: 425px;
    left: 210px;
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
    width: 99.5vw;
    height: 82vh;
    margin-left: 3px;
    background-color: rgb(251, 200, 105);
    border-radius: 10px;
    // z-index: 1;
    margin-top: 100px;

    &::before {
        content: '';
        position: absolute;
        top: -16%;
        /* 調整這個值，控制 .back 向上延伸的高度 */
        left: 0;
        width: 100%;
        height: 80%;
        /* 額外向上延伸的高度 */
        // background-color: inherit;
        background-color: rgb(251, 200, 105);
        border-radius: 10px;

        // z-index: -1;
    }
}

.boxHoshi {
    position: relative;
    width: 97vw;
    height: 91vh;
    bottom: 40px;
    // margin-left: 0px;
    background: linear-gradient(to bottom, #fab80d 70%, #ffd134 100%);
    border-radius: 10px;

    // z-index: 2;
    .animate__animated.animate__fadeInRight {
        position: absolute;
        left: 850px;
        bottom: 0px;
    }

    .h1get {
        position: absolute;
        left: 220px;
        top: 150px;
        font-size: 40pt;

    }

    .h1hoshi {
        position: absolute;
        left: 285px;
        top: 250px;
        font-size: 40pt;
    }

    .tex1 {
        position: absolute;
        left: 235px;
        top: 360px;
    }

    .tex2 {
        position: absolute;
        left: 235px;
        top: 395px;
    }
    
}
</style>
