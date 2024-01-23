<script>
export default{
    data(){
        return{
            title:""
        }
    },
    methods:{
        print(){
            console.log("btn")
            this.title = "btn";
        },
        sky(){
            console.log("sky")
        },
        write(){
            console.log("this.text")
            alert("xxxx")
        },
        goOtherWay(){
            this.$router.push('/Vfor')
        }
    }
}
</script>

<template>
    <h1>V-on</h1>
    <!-- <button type="button" v-on:click="print()">btn</button> -->
    <button type="button" @click="print()">btn</button>
    <p>{{ this.title }}</p>

    <select name="" id="" @change="sky()">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

    <input type="text" v-model="this.text" @keydown.enter="write()">

    <button @click="goOtherWay()">
        <i class="fa-solid fa-jar"></i>
    </button>

</template>

<style scoped lange="scss">


</style>