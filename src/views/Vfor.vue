<script>
export default{
    //語法糖
    data(){ // data = function()}
    return{
            arr:[1, 2, 3],
            arr2:[
                {
                    name:"可口可樂",
                    type:"臘腸",
                    age:"2"
                },
                {
                    name:"百事可樂",
                    type:"博美",
                    age:"3"
                },
                {
                    name:"零卡可樂",
                    type:"馬爾濟斯",
                    age:"1"
                },
            ]
        }
    }
}
</script>

<template>
    <h3>V-for</h3>
    <!-- arr -->
    <p v-for="item in arr">{{ item }}</p>
    <p v-for="(item, index) in arr">{{ index }}</p>

<!-- arr2 -->
    <ol v-for="element in arr2">
        <li>{{ element.name }}</li>
        <li>{{ element.type }}</li>
        <li>{{ element.age }}</li>
        <p>----------------</p>
    </ol>
<!-- ol 是 有序列表 -->

    </template>

<style>

</style>