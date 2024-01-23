<script>
export default {
        return:{
            
    },
    props:[
                "name",
                "phone",
                "sex",
                "adress",
                "age"
            ],
    methods: {
        back(){
            this.$emit('back')
        }
    },
}
</script>

<template>
<div class="child2">
<h2>Child2這邊確認資料</h2>
{{this.name}} 
{{this.phone}} 
{{this.sex}} 
{{this.adress}} 
{{this.age}} 
</div>
<button type="button" @click="back">123</button>
</template>

<style scoped lang="scss">
.child2{
    width: 50vw;
    height: 500px;
    margin: 0 auto;
    border: 1px solid black;
}
</style>