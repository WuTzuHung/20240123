<script>
export default {
    data() {
        return {
            obj:{
            name:"",
            phone:"",
            sex:"",
            adress:"",
            age:""
            }
        }
    },
    methods: {
        get() {
            console.log(this.obj)
            this.$emit('get', this.obj)
        }
    },
    mounted() {
        //
    },
}
</script>

<template>
<div class="child1">
<h2>Child1這邊輸入資料</h2>
<label for="">姓名</label>
<input type="text"  v-model="this.obj.name" >
<label for="">手機</label>
<input type="number"  v-model="this.obj.phone" >
<label for="">性別</label>

<div class="sexArea">
<span>男:</span>
</div>
<label for="">地址</label>
<input type="text" v-model="this.obj.address">
<label for="">年齡</label>
<input type="number" v-model="this.obj.age">
<button type="button" @click="this.get()">送出</button>

<input type="text" @input="$emit(`update:text`, $event.target.value)">

<button type="button" @click="console.log($event)">event</button>
<input type="text" @input="console.log($event)">
</div>
</template>

<style scoped lang="scss">
.child1{
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid black;

}

</style>