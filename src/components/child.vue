<script>
export default{
    data(){
    return{

    }
},
props:[
        "parentMsg",
        "inputName",
        "inputPwd",
        "inputPhone",
        // "xxxxx",
        "personName",
        "name",
        "sex"
    ]
}
</script>

<template>
<div class="childArea">
    <h3>childArea</h3>
    <!-- <h3>{{ this.parentMsg }}</h3> -->
    <!-- <h3>{{ this.inputName }}</h3>
    <h3>{{ this.inputPwd }}</h3>
    <h3>{{ this.inputPhone }}</h3> -->
    <input type="text" v-model="this.personName">
    <h3>{{ this.name }}</h3>
    <h3>{{ this.sex }}</h3>
    </div>
</template>


<style scoped lang="scss">
.childArea{
    width: 300px;
    height: 200px;
    margin: 0 auto;
    border: 1px solid red;
}

</style>