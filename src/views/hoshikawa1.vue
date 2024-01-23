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
    <div class="back2">
    <div class="boxH3">
        <!-- <img class="multi_ani" src="燒.png" alt=""> -->
        <h1 class="animate__animated animate__backInRight h1get">Clothing</h1>
        <p class="tex1">The following content demonstrates various fashionable </p>
        <p class="tex2">outfits of Hoshikawasara using special features</p> 
        <p class="tex3">along with her different adorable expressions</p>
        <button class="b" @click="this.handle()">
                <img src="FITjkdEakAE1PHV.png" alt="Your Image" style="  ">
            </button>
        <img src="20.png" class="animate__animated animate__fadeInLeft"
                style="width: 380px; height: 675px;" alt="...">
    </div>
</div>
<div class="boxH">
    <section id="marquee">
	<div class="view">
		<div class="pic-container">
			<div class="pic">
				<img src="image-proxy.webp" alt="" />
			</div>
			<div class="pic">
				<img src="liver-full-body_Sara_Hoshikawa_costume2.webp" alt="" />
			</div>
			<div class="pic">
				<img src="10.png" alt="" />
			</div>
			<div class="pic">
				<img src="006.png" alt="" />
			</div>
			<div class="pic">
				<img src="100.png" alt="" />
			</div>
			<div class="pic">
				<img src="20.png" alt="" />
			</div>
			<div class="pic">
				<img src="tsuinteruhoshi.png" alt="" />
			</div>
			<div class="pic">
				<img src="18.png" alt="" />
			</div>
            <div class="pic">
				<img src="101.png" alt="" />
			</div>
			<div class="pic">
				<img src="002.png" alt="" />
			</div>
		</div>
	</div>
</section>
</div>
</template>

<style scoped lang="scss">

.back2 {
    position: relative;
    width: 99vw;
    height: 90vh;
    left: 6px;
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

	.animate__animated.animate__fadeInLeft {
        position: absolute;
        // left: 30px;
        // top: 100px;

        float: right;
    position: absolute;
    top: -75px;
    left: 230px;
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
    .boxH {
    position: relative;
    width: 100vw;
    height: 95vh;
    top: 50px;
    // bottom: 40px;
    // left: 0px;
    background: linear-gradient(to bottom, #FFB6C1 70%, #FF69B4 100%);
    border-radius: 10px;

    
    }

    *,
*::before,
*::after {
    box-sizing: border-box;
    color: inherit;
    list-style: none;
}
html,
body {
    margin: 0;
    padding: 0;
		background-color: #e8e8e8;
}

@mixin media($max) {
    @media (max-width: $max + px) {
        @content;
    }
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-(20% * 5));
    }
}

@include media(1024) {
    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-(25% * 5));
        }
    }
}
@include media(768) {
    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-(33.33% * 5));
        }
    }
}

#marquee {
    padding: 50px 0;
    width: 100%;
    .view {
        overflow: hidden;
        width: 100%;
    }
    .pic-container {
        display: flex;
        animation: marquee 25s infinite linear;
        .pic {
            flex-basis: 20%;
            flex-shrink: 0;
            @include media(1024) {
                flex-basis: 25%;
            }
            @include media(768) {
                flex-basis: 33.33%;
            }
            margin-top: 40px;
        }
    }
    img {
        width: 85%;
        height: 85%;
        vertical-align: middle;
    }
}

.h1get {
        position: absolute;
        left: 930px;
        top: 120px;
        font-size: 40pt;

    }

.tex1 {
        position: absolute;
        left: 830px;
        top: 250px;
    }

    .tex2 {
        position: absolute;
        left: 830px;
        top: 290px;
    }

    .tex3 {
        position: absolute;
        left: 830px;
        top: 330px;
    }

    button {
    position: absolute;
    left: 980px;
    top: 425px;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
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
</style>