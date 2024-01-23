<script>
import { mapActions } from 'pinia';
import counter from '../stores/counter';
import child2 from '../components/child2.vue';
export default {
    data() {
        return {
            childText:""
        }
    },
    methods: {
        ...mapActions(counter, ["setLocation"]),
        emitObj(xxx){
            console.log(xxx)
            this.childText = xxx
        }
    },
    components: {
        child2
    },
    mounted() {
      this.setLocation(9)
    },
}

</script>

<template>
    <div class="showArea">
    <h3>Emit</h3>
    <h3>{{ this.childText }}</h3>
    <!-- 變數命名要注意, 方法與變數名稱不要相衝 -->
    <child2 @orange="emitObj"/>
    <!-- <child2 :orange="emitObj"/> -->
    </div>
</template>

<style scoped lang="scss">

.showArea{
    width: 800px;
    height: 600px;
    margin: 0 auto;
}
</style>