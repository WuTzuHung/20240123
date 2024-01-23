<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{
            car:false,
            cars:2,
            car2:false,
            house:0,
            house2:0,
        }
    },
    methods:{
        ...mapActions(counter, ["setLocation"]),
        test(){

            }
        },
        showCard(){
            this.show = !this.show
        },
        mounted(){
            this.setLocation(6)

        },
        components:{
            // card,
        }
}

</script>

<template>
    <h1>V-if</h1>
    <label for="">小名有車</label>
    <input type="checkbox" value="true" v-model="car">
    <p v-if="car">確實有車子</p>
    <p v-if="cars == 3">確實有車子呢</p>
    <!-- <card v-if="car"/> -->
    <p>-------------------</p>


    <h1>V-show</h1>
    <label for="">小盒有車</label>
    <input type="checkbox" value="true" v-model="car2">
    <p v-show="car2">小盒真的有車</p>
    <p>------------------------</p>
    
    

    <h1>v-if & v-else</h1>
    <label for="">小名有房</label>
    <select name="" id="" v-model="house">
        <option value="0">請選擇</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

    <p v-if="house == 1">普通的房子</p>
    <!-- <p v-else>真的有房子?</p> -->
    <p v-if="house == 2">好大的房子</p>
    <p v-else>真的有房子?</p>

    <h1>v-if & v-else-if  & v-else</h1>
    <label for="">大名有房</label>
    <select name="" id="" v-model="house2">
        <option value="0">請選擇</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

    <p v-if="house2 == 1">普通的房子</p>
    <p v-else-if="house2 == 2">好大的房子</p>
    <p v-else>真的有房子?</p>



    <button type="button" @click="showCard">show</button>
</template>

<style scoped lang="scss"></style>