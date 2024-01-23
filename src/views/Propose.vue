<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import child from '../components/child.vue';
import { main } from '@popperjs/core';
export default {
    data() {
        return {
            title: "father to son",
            name:"",
            pwd:"",
            phone:"",
            openchild: false,
            warmText:"",
            num:"",
            person:{
                name:"可口可樂",
                age:58,
                sex:"man",
            }
        }
    },
    methods: {
        ...mapActions(counter, ["setLocation"]),
        checkInfo() {
            const allIn = document.querySelectorAll("input")
            this.num = 0;
            allIn.forEach(item => {
                if (item.value.length == 0) {
                    this.warmText = "尚未完成資訊"
                    return
                }
                this.num++
            })
            if (this.num == allIn.length){

                this.openchild = !this.openchild
            }
            
        }

    },
    components: {
        child
    },
    mounted() {
        this.setLocation(8)
    },
}
</script>

<template>
    <div class="area">
        <h2>{{ this.title }}</h2>
        
        <!-- < child  
        <h2>{{ this.title }}</h2>
        <child v-bind:parentMsg="this.title" 
        :inputName="this.name" 
        :inputPwd="this.pwd" 
        :inputPhone="this.phone"
        v-show="this.openchild == true" /> -->

        <!-- 註冊頁面 -->
        <!-- 三個欄位，名字，密碼，手機 -->
        <!-- props 輸入, child 確認 -->
        <h1 v-show="this.num !== 3" style="color: red;">{{ this.warmText }}</h1>
        <!-- <div class="coolform" v-show="this.openchild == false">
            <label for="">名字</label>
            <input type="text" v-model="this.name">
            <label for="">密碼</label>
            <input type="text" v-model="pwd">
            <label for="">手機</label>
            <input type="number" v-model="this.phone">
            <button type="button" @click="checkInfo">check</button>
        </div> -->
        {{ this.person }}
        <child :personName="this.person.name"/>
        <!-- 讓 v-bind 自動幫我拆解這個物件 -->
        <child v-bind="this.person"/>

        <!-- 下方程式碼會傳送整個物件至子元件並使子元件可修改該元件屬性資料
        ，這是Bug!!! 絕對要禁止這操作， -->
        <!-- <child :person = "this.person"/> -->
    </div>
</template>


<style scoped lang="scss">
.area {
    width: 80%;
    height: 80%;
    border: 1px solid black;
}
</style>