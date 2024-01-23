<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue";

// export default {
//   data() {
//     return {
//       imagePath: "03.png"
//     };
//   },
//   mounted() {
//     this.setupMouseTracking();
//   },
//   methods: {
//     setupMouseTracking() {
//       const img = this.$refs.mouseImage;

//       this.handleMouseMove = (e) => {
//         var x = e.pageX;
//         var y = e.pageY;

//         img.style.top = y + 10 + "px";
//         img.style.left = x + 10 + "px";
//       };

//       window.addEventListener('mousemove', this.handleMouseMove);
//     },
//     removeMouseTracking() {
//       window.removeEventListener('mousemove', this.handleMouseMove);
//     }
//   },
//   beforeDestroy() {
//     this.removeMouseTracking();
//   }
// };
</script>

<template>
  <!-- <div>
    <img :src="imagePath" alt="Mouse Image" class="mouse-image" ref="mouseImage" style="z-index: 999;">
  </div> -->
  <div class="header">
    
    <Header />
  </div>
  <div class="content">

    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.header{
  width: 100vw;
  height: 0vh;
  transition: 1s;
  &:hover{
    height: 15vh;
  }
}

.content{
  width: 100vw;
  height: 70vh;
  text-align: center;
}

/*.mouse-image {
  width: 50px;
  height: 50px;
  position: absolute;
} */
</style>
