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
        <h1 class="animate__animated animate__backInRight h1get">Introduce</h1>
        <p class="tex1">The following content includes a self-introduction </p>
        <p class="tex2">motivation for wanting to go to Japan and my</p> 
        <p class="tex3">experience in learning programming</p>
        <button class="b" @click="this.handle()">
                <img src="../picture/FITjkdEakAE1PHV.png" alt="Your Image" style="  ">
            </button>
        <img src="../picture/11.png" class="animate__animated animate__fadeInLeft"
                style="width: 520px; height: 690px;" alt="...">
                
    </div>
</div>

<div class="back ">
    <div class="boxH2">
      <div class="wrap">
		<div class="item">
			<img src="../picture/02.gif">
			<div class="txt">
				<h2>自己紹介</h2>
				<p>初めまして、私は呉梓宏と申します。一昨年は世新大学の日本語学科から卒業して、去年は無事に義務兵役終わりました。普段の趣味は日本の漫画を読むこととライバーさんの配信を聞くことです。漫画を読むことで日本の文化やストーリーに没頭するのが好きで、配信を聞くことはリラックスや気分転換になります。</p>
			</div>
		</div>
		<div class="item">
			<img src="../picture/10.gif">
			<div class="txt">
				<h2>自習の経験</h2>
				<p>私は自分が情熱を持つことを全力で頑張る人だと思います。例えば、自分が好きなライバーさんの話をもっと理解したくて、ユーチューブの翻訳チャンネルを立ち上げ、日本語から中国語を翻訳する切り抜き動画を作りました。切り抜く動画を作るため、フォトショップとアドビプレミアを自学しました。</p>
			</div>
		</div>
		<div class="item">
			<img src="../picture/05.gif">
			<div class="txt">
				<h2>コーディングの経験</h2>
				<p>最初は日本語能力だけでは足りないと感じたため、友達からWebコーディングが学べる学校があると聞いたので、去年から台南応用科技大学で半年ほどのWebコーディング授業を受け、毎日プログラミング言語の知識を勉強し、コーディングを練習しています。</p>
			</div>
		</div>
	</div>
    </div>
</div>
</template>

<style scoped lang="scss">
.back {
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
.boxH2 {
    position: relative;
    width: 96vw;
    height: 100vh;
    bottom: 40px;
    left: 0px;
    background: linear-gradient(to bottom, #fab80d 70%, #ffd134 100%);
    border-radius: 10px;

    
    }

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
        left: 200px;
        // bottom: 70000px;

        float: right;
    position: absolute;
    top: -95px;
    left: 200px;
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
}

	

    @import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
*{
	margin: 0;
	padding: 0;
	list-style: none;
	font-family: 'Noto Sans TC', sans-serif;
}
// html,body{
// 	height: 100%;
// }
body{
	display: flex;
	align-items: center;
	background-color: #003;
}
.wrap{
	width: 1200px;
	display: flex;
	margin: auto;
  
}
.item{
	width: 368px;
	margin: 15px;
  margin-top: 90px;
	text-align: center;
	background-color: #fff;
	border: 1px solid #ccc;
	transform: translateY(0px);
	transition: .5s;
  border-radius: 7px;
}
.item img{
	width: 100%;
	vertical-align: middle;
  border-radius: 7px;

}
.item h2{
	font-family: 'Noto Sans TC', sans-serif;
	border-bottom: 1px solid #888;
	padding-bottom: .3em;
	margin-bottom: .4em;
	font-weight: 900;
	transition: .25s;
}
.item p{
	font-family: 'Noto Sans TC', sans-serif;
	line-height: 1.6;
	font-weight: 300;
	transition: .25s;
}
.item .txt{
	padding: 20px;
	position: relative;
}
.item .txt:before{
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	left: 0;
	top: 0;
	border-top: 50px solid transparent;
	// border-left: 184px solid #fff;
	// border-right: 184px solid #fff;
	transform: translateY(-100%);
}
.item:hover{
	transform: translateY(-50px);
}
.item:hover {
	background-image: linear-gradient(0deg,#FB8076, #FEB85D);
}
.item:hover .txt:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    
	border-left: 184px solid #FB8076;
	border-right: 184px solid #FB8076;
}
.item:hover h2{
	color: #fff;
	border-bottom-color: #fff;
}
.item:hover p{
	color: #fff;
	
}

.h1get {
        position: absolute;
        left: 900px;
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
    left: 950px;
    top: 455px;
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