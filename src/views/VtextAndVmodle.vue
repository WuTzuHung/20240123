<script>
import { mapState,mapActions } from 'pinia'
import counter from '../stores/counter'

export default{
    data(){ // data function(){}
        return{
            title:"title",
            info:{
                name:"可口可樂",
                age:2,
                type:"臘腸"
            },
            cool:"",
            selectText:"",
            lazyText:"",
            numberText:"",
            trimText:"",
            checkboxText:[],
            radioText:""
        }
    },
    methods:{
        ...mapActions(counter, ["getLocation", "setLocation", "getData"]),
    },
    created(){
            this.getData()
        },
    mounted(){
            this.setLocation(2)
        }
}
</script>

<template>
    <!-- <button type="button" @click="getLocation()">BTN1</button>
    <button type="button" @click="setLocation(2)">BTN2</button> -->
    <h1>{{ this.title }}</h1>
    <!-- V--text -->
    <h2>V-text</h2>
    <p v-text="'this is a page'"></p>
    <p v-text="title"></p>
    <p v-text="info"></p>
    <p v-text="`info ${title}`"></p>
    <p v-text="'info'+info"></p>
    <p>info{{ this,info }}</p>

    <br />
    <!-- v-model -->
    <h2>V-model</h2>
    <input type="text" v-model="cool">
    <p>{{ this.cool }}</p>
    <select name="" id="" v-model="selectText" >
    <option value="1">請選擇</option>
    <option value="2">1</option>
    <option value="2">2</option>
    </select>

    <!-- lazy,number,trim  -->
    <h2>lazy</h2>
    <input type="text" v-model.lazy="lazyText">
    <p>{{ this.lazyText }}</p>
    <h2>Number</h2>
    <input type="number" v-model.number="numberText">
    <p>{{ this.numberText }}</p>
    <h2>trim</h2>
    <input type="text" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>

    <!-- checkbox 複選  -->
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkboxText" name="meal" value="breakfast">
    <label for="">午餐</label>
    <input type="checkbox" v-model="checkboxText" name="meal" value="lunch">
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkboxText" name="meal" value="dinner">
    <h3>{{ this.checkboxText }}</h3>
    <!-- 複選綁定的變數需要微陣列，單選綁定的變數需要為一般空字串就行 -->
    <!-- radio 單選  -->
    <label for="">早餐</label>
    <input type="radio" value="早餐" v-modle="radioText" name="food">
    <label for="">中餐</label>
    <input type="radio" value="中餐" v-modle="radioText" name="food">
    <label for="">晚餐</label>
    <input type="radio" value="晚餐" v-modle="radioText" name="food">

</template>

<style scoped lang="scss"></style>
