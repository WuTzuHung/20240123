<script>
export default{
    //語法糖
    data(){ // data = function()}
    return{
            arr:[1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    }
}
</script>

<template>

<div class="header">

</div>



<div class="bigbox">
    <div class="second"></div>
    <div class="box">
            <div class="cool" v-for="item in arr"></div>
    </div>
</div>

<div class="button"></div>

</template>

<style>
.bigbox{
    width: 100vw;
    height: 762px;
    /* border: 1px solid black; */
    display: flex;
}

.box{
    width: 491px;
    height: 491px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* border: 1px solid black; */
    margin-left: 30%;
    margin-top: 10%;
    justify-content: space-between;
}



.header{
    width: 100vw;
    height: 264px;
    border: 1px solid black;
}

.second{
    width: 202px;
    height: 762px;
    border: 1px solid black;
    margin-top: 20px;
}


.cool{
    width: 135px;
    height: 135px;
    border: 1px solid black;
    
}

.button{
    width: 100hw;
    height: 86px;
    border: 1px solid black;
    margin-top: 40px;
}
</style>