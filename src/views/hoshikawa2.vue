<script>
export default {
    data() {

    },
    methods: {
        handle() {
            // 在这里添加按钮被点击后的操作
            // this.$router.push({
            //     path: "/Vbind"//要跳转的页面的路由
            // });
            this.$router.push('/')
        },
    },
}
</script>
<template>

    
    <div class="back">
    <div class="boxH2">
        <!-- <img class="multi_ani" src="燒.png" alt=""> -->
        <h1 class="animate__animated animate__backInLeft h1get">Quirky Effects</h1>
        <p class="tex1">The following content features a quirky effects combination</p>
        <p class="tex2">showcasing a variety of Hoshikawa Sara in different styles</p> 
        <button class="b" @click="this.handle()">
                <img src="FITjkdEakAE1PHV.png" alt="Your Image" style="  ">
            </button>
            
        <img src="hoshikawa_sara.png" class="animate__animated animate__fadeInRight"
                style="width: 540px; height: 680px;" alt="...">
              
    </div>
</div>

<div class="back2 ">
    <div class="boxH3">
      <div class="image-container imgx" style="width: 400px;">
      <img class="img520 imgx" src="520.png" alt="Original Image">
      </div>
      <div class="image-container2 imgy" style="width: 400px;">
      <img class="img522 imgy" src="520.png" alt="Original Image">
      </div>
      <img class="hoshiU1" src="03.gif" alt="">
      
    </div>
</div>

<div class="back3 ">
    <div class="boxH4">
      <div class="card-container">
  <div class="card">
    <div class="front">
      <img class="kawaii01" src="kawaii01.png" alt="">
    </div>
    <div class="back1">
      <img class="kawaii02" src="kawaii02.png" alt="">
    </div>
  </div>
</div>
<!-- <div class="card-container2"> -->
<div class="card2">
    <div class="front2">
      <img class="hoshiU2" src="11.gif" alt="">
      <img class="hoshiU4" src="11.gif" alt="">
    </div>
    <div class="back5">
      <img class="hoshiU3" src="06.gif" alt="">
      <img class="hoshiU5" src="06.gif" alt="">
    </div>
  </div>
</div>
  </div>
<!-- </div> -->


</template>

<style scoped lang="scss">

.back {
    position: relative;
    width: 99vw;
    height: 80vh;
    left: 6px;
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
.boxH2 {
    position: relative;
    width: 96vw;
    height: 90vh;
    bottom: 40px;
    left: 0px;
    background: linear-gradient(to bottom, #fab80d 70%, #ffd134 100%);
    border-radius: 10px;

    .animate__animated.animate__fadeInRight {
        position: absolute;
        // left: 850px;
        // bottom: 0px;

        float: right;
    position: absolute;
    top: -92px;
    left: 800px;
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
    }

    
    
    
    @keyframes rotation {
  50% {
    transform: rotate(360deg);
  }
}
@keyframes stretch {
  50% {
    margin-left: 300px;
  }
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

.h1get {
        position: absolute;
        left: 230px;
        top: 140px;
        font-size: 40pt;

    }

.tex1 {
        position: absolute;
        left: 200px;
        top: 270px;
    }

    .tex2 {
        position: absolute;
        left: 200px;
        top: 320px;
    }

button {
    position: absolute;
    left: 345px;
    top: 410px;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
}
// .multi_ani{
//   display: inline-block;
//   width: 150px;
//   height: 150px;
//   margin-right: 1000px;
//   margin-top: 440px;
//   animation-name: rotation, stretch;
//   animation-duration: 3s, 3s;
// }

.back2 {
    position: relative;
    width: 99vw;
    height: 90vh;
    left: 6px;
	top: 40px;
    background-color: rgb(251, 200, 105);
    border-radius: 10px;
    // z-index: 1;
    margin-top: 100px;

    &::before {
        content: '';
        position: absolute;
        top: -14%;
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
.boxH3 {
    position: relative;
    width: 96vw;
    height: 100vh;
    bottom: 40px;
    left: 0px;
    background: linear-gradient(to bottom, #fab80d 70%, #ffd134 100%);
    border-radius: 10px;
    }

    .image-container:hover img {
  /* 新的圖片路徑 */
  content: url('521.png');
  /* 或者使用 background-image 屬性 */
  /* background-image: url('new-image.jpg'); */
  /* 設定適當的寬度和高度 */
  width: 100%; /* 調整為合適的寬度 */
  height: auto; /* 讓高度按比例自動調整 */
  /* 其他樣式設定，例如過渡效果等 */
  transition: all 0.3s ease;
  border: 4px solid black;
  border-radius: 5px;
  
}

.imgx {
  position: absolute;
  top: 160px; /* 你可以根據需要調整這個值 */
  left: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 使用陰影模擬立體效果 */
}
.img520{
  width: 100%;
  // position: absolute;
  // top: 150px;
  // margin-top: 80%;
  border: 4px solid black;
  border-radius: 5px;
}

.image-container2:hover img {
  /* 新的圖片路徑 */
  content: url('522.png');
  /* 或者使用 background-image 屬性 */
  /* background-image: url('new-image.jpg'); */
  /* 設定適當的寬度和高度 */
  width: 100%; /* 調整為合適的寬度 */
  height: auto; /* 讓高度按比例自動調整 */
  /* 其他樣式設定，例如過渡效果等 */
  transition: all 0.3s ease;
  border: 4px solid black;
  border-radius: 5px;
  
}

.imgy {
  position: absolute;
  top: 160px; /* 你可以根據需要調整這個值 */
  left: 480px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 使用陰影模擬立體效果 */
}
.img522{
  width: 100%;
  // position: absolute;
  // top: 150px;
  // margin-top: 80%;
  border: 4px solid black;
  border-radius: 5px;
}

.card-container {
  perspective:700;
}
.card {
  position: relative;
  color:#fff;
  // text-align: center;
  // line-height:50px;
  // margin:20px;
  width: 400px;
  height:400px;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
  left: 150px;
  top: 180px;
}
.front, .back1{
  position: absolute;
  background: linear-gradient(to bottom, #fab80d 70%, #ffd134 100%);
  // border: 4px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 使用陰影模擬立體效果 */
  border-radius: 5px;
  width: 400px;
  height:400px;
  backface-visibility: hidden;
}
.back1{
  transform: rotateY(180deg);
}
.card:hover {
  transform: rotateY(180deg);
}

.kawaii01{
      width: 100%;
      height: 100%;
    }

    .kawaii02{
      width: 100%;
      height: 100%;
    }

.back3 {
    position: relative;
    width: 99vw;
    height: 90vh;
    left: 6px;
	top: 80px;
    background-color: rgb(251, 200, 105);
    border-radius: 10px;
    // z-index: 1;
    margin-top: 100px;

    &::before {
        content: '';
        position: absolute;
        top: -14%;
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
.boxH4 {
    position: relative;
    width: 96vw;
    height: 100vh;
    bottom: 40px;
    left: 0px;
    background: linear-gradient(to bottom, #fab80d 70%, #ffd134 100%);
    border-radius: 10px;

    .hoshiU2{
    width: 100%;
    height: 50%;
}

.hoshiU3{
  width: 100%;
    height: 50%;
}

.hoshiU4{
    width: 100%;
    height: 50%;
}

.hoshiU5{
    width: 100%;
    height: 50%;
}
    
    }
    .kawaii01{
    width: 100%;
    height: 100%;
    }

.hoshiU1{
  width: 100%;
    height: 100%;
}

.card-container2 {
  perspective:700;
}
.card2 {
  position: relative;
  color:#fff;
  // text-align: center;
  // line-height:50px;
  // margin:20px;
  width: 600px;
  height:600px;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
  left: 700px;
  bottom: 320px;
}
.front2, .back5{
  position: absolute;
  background: linear-gradient(to bottom, #fab80d 70%, #ffd134 100%);
  // border: 4px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 使用陰影模擬立體效果 */
  border-radius: 5px;
  width: 600px;
  height:600px;
  backface-visibility: hidden;
}
.back5{
  transform: rotateY(180deg);
}
.card2:hover {
  transform: rotateY(180deg);
}
    </style>