<script>
export default {
    data() {
        return {
            title: "title",
            isBlue: false,
            isLarge: false,
            styleArr: [],
            imgText: "",
            arrText:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            test: "",
        }
    }
}
</script>

<template>
    <!-- v-model 標籤的值 <== 雙向綁定 ==> 變數 -->
    <!-- v-bind 標籤的屬性 單向綁定 => 變數 -->
    <h1 class="title">Title</h1>
    <h1 v-bind:class="title">Head</h1>

    <h3>class{}</h3>
    <label for="">isBlue</label>
    <input type="checkbox" value="true" v-model="isBlue">
    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">

    <input type="text"> value="xxx" :disable="isBlue"
    <!-- 一開始的 h2 標籤是沒有 class 名稱的 -->
    <h2 :class="{
        blue: isBlue,
        large: isLarge
    }">永新銀行</h2>
    <!-- 當 isBlue/isLarge 變為 true時，便會賦予 h2 blue/large 的 class 名稱 -->

    <h3>class[]</h3>
    <label for="">Blue</label>
    <input type="checkbox" value="blue" v-model="styleArr" name="test">
    <label for="">large</label>
    <input type="checkbox" value="large" v-model="styleArr" name="test">
    <label for="">italic</label>
    <input type="checkbox" value="italic" v-model="styleArr" name="test">

    <h2 :class="styleArr">志偉烘培方</h2>

    <label for="">星川1</label>
    <input type="radio" value="../【ざつだん】ソロライブまで1週間ってマジ？【にじさんじ_星川サラ】 - YouTube - Google Chrome 2023_6_2 下午 11_40_00.png" v-model="imgText" name="imgs">
    <label for="">星川2</label>
    <input type="radio"
        value="../媒體播放器 2023_4_26 下午 11_32_40.png"
        v-model="imgText" name="imgs">
    <label for="">星川3</label>
    <input type="radio"
        value="../text123.png"
        v-model="imgText" name="imgs">

    <img :src="imgText" alt="">

        <p>{{ this.test }}</p>
    <select name="" id="" v-model="this.test">
        <option value="">請選擇</option>
        <option :value="index" v-for="(item, index) in arrText">{{ item }}</option>
    </select>

    <child :xxx="this.title"/>
</template>


<style scoped lang="scss">
.title {
    color: red;
}

.blue {
    color: blue;
}

.large {
    font-size: 100pt;
}

.italic {
    font-style: italic;
}

</style>