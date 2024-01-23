<script>
import {mapState, mapActions} from 'pinia'
import count from "../stores/counter"
export default{
    data(){ //
        return{
            point:0,
            ntd:0,
            xxx:0
        }
    },
    wstch:{
        point(){ // 對變數做監聽 point: function(){}  // 實際存
            this.ntd = this.point * 10;
            console.log(this.ntd)
        }
    },
    computed:{ //暫存的，類似偽元素概念，是假的
        jyp(){
            return this.ntd * 4.5;
        }
    },
    methods:{
        ...mapActions(count, ["setLocation"]),
        clickPoint(){
            this.point += 1;
            console.log(this.jyp * 200)
            this.xxx = this.jyp
        }
    },
    beforeCreate(){ // vue檔建立，但事件,變數,屬性等等尚未建立
        console.log("bedoreCreate")
    },
    created(){ // vue檔建立 且事件,變數,屬性等等已建立
        console.log("created")
    },
    beforeMount(){ // DOM Tree 尚未連接
        console.log("beforeMount")
    },
    mounted(){  // DOM Tree 已連接
        console.log("mounted")
        this.setLocation(7)
    },
    beforeUpdate(){  //變數已更動，但畫面未更新
        console.log("beforeUpdate")
    },
    updated(){  //變數已更動 且畫面也同步更新完成
        console.log("updated")
    },
    beforeUnmount(){ // vue被銷毀前，銷毀的時候印出console.log
        console.log("beforeUnmount")
    },
    unmounted(){ // vue裡面全部東西被銷毀時觸發
        console.log("unmounted")
    },
}

</script>

<template>
    <p>this.pont:{{ this.point }}</p>
    <p>this.ntd:{{ this.ntd }}</p>
    <p>this.jyp:{{ this.jyp }}</p>
<div class="circle" @click="this.clickPoint()"></div>
</template>

<style scoped lang="scss">

.circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 auto;
    background: rgb(212, 133, 130);
    transition: 0.5s;

    &:active{
        scale: 1.08;
    }
}
</style>