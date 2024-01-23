<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import flowChild1 from '../components/flowChild1.vue';
import flowChild2 from '../components/flowChild2.vue';
export default {
    data() {
        return {
            objInfo: {},
            change: false,
        }
    },
    methods: {
        ...mapActions(counter, ["setLocation"]),
        getInfo(x) {
            console.log(x)
            this.objInfo = x
            this.change = !this.change

        },
        chanPage(){
            this.change = !this.change
        }
    },
    components: {
        flowChild1,
        flowChild2
    },
    mounted() {
        this.setLocation(10)
    },
}
</script>

<template>
    <h1>DataFlow</h1>
    <h3>資料需求:姓名、手機、性別[radio]、地址、年齡</h3>
    <h3>change:{{ this.change }}</h3>
    <h3>text:{{ this.text }}</h3>
    <h3>text:{{ this.objInfo }}</h3>
    <div class="showArea">
        <flowChild1 @get="getInfo" v-show="this.change == 
        false" v-model:text="this.text"/>
        <!-- <flowChild2
        :name="this.objInfo.name"
        :phone="this.objInfo.phone"
        :sex="this.objInfo.sex"
        :address="this.objInfo.address"
        :age="this.objInfo.age" -->
        <flowChild2 v-bind="this.objInfo"  v-if="this.change == 
        true"  @back="chanPage()"/>
    </div>
</template>

<style scoped lang="scss">
.showArea {
    width: 100vw;
    height: 500px;

}
</style>

