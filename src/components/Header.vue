<script>
import { RouterLink, RouterView } from 'vue-router'
import {mapState, mapActions} from 'pinia'
import counter from '../stores/counter'
export default{
    data(){
        return{

        }
    },
    components:{
        RouterLink,
    },
    computed:{
        ...mapState(counter, ["location", "locationInfo"])
    },
}
</script>

<template>
    <div class="headerShow">
        <!-- <button>56565</button> -->
        <RouterLink to="/" class="routerItem" :class="{'cass' :this.location === 1}">Home</RouterLink>
        <RouterLink to="/VtextAndVmodle" class="routerItem" :class="{'cass' :this.location === 2}" >VtextAndVmodle</RouterLink>
        <RouterLink to="/Vfor" class="routerItem">V-for</RouterLink>
        <RouterLink to="/nine" class="routerItem">V-nine</RouterLink>
        
        <RouterLink to="/Vbind" class="routerItem">Vbind</RouterLink>
        <RouterLink to="/VifAndVshow" class="routerItem">VifAndVshow</RouterLink>
        <RouterLink to="/WatchAndComputed" class="routerItem">WatchAndComputed</RouterLink>

        <RouterLink to="/Propose" class="routerItem">Propose</RouterLink>
        <RouterLink to="/Emit" class="routerItem">Emit</RouterLink>
        <RouterLink to="/DataFlow" class="routerItem">DataFlow</RouterLink>
        <RouterLink to="/introduce" class="routerItem">introduce</RouterLink>
        <RouterLink to="/hoshikawa1" class="routerItem">hoshikawa1</RouterLink>
        <RouterLink to="/hoshikawa2" class="routerItem">hoshikawa2</RouterLink>






    </div>
    <!-- <span>{{ location }}</span>
    <span>{{ locationInfo }}</span> -->
</template>

<style scoped lang="scss">

// button{
//     z-index: 10;
// }
.headerShow{
    width: 100vw;
    height: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    // text-align: center;
  z-index: -1;

    
}

.routerItem{
        font-size:24pt;
        color:purple;
        text-decoration: none;
        margin-left: 20px;
    }

    // .cass{
    //     color: white;
    //     background-color: purple;
    //     border-radius: 10px;
    // }


</style>