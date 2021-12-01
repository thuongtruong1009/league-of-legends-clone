<template>
  <div class="virtual-frame">
    <HeaderComponent />
    <SideComponent />
    <MainComponent />
  </div>
</template>

<script>
import SideComponent from "./components/SideComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent, SideComponent, MainComponent },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f0e6d2;
  font-family: FrizQuadrata;
  overflow: hidden;
}
@font-face {
  font-family: FrizQuadrata;
  src: url("/src/assets/fonts/FrizQuadrata.ttf");
}
body {
  background-image: url("https://4.bp.blogspot.com/-fXQUf52mB0I/XO98d2WF4ZI/AAAAAAAAGls/P3BtEoQqEoszt_NmeXJxyi2Tx9rB_qJeACKgBGAs/w0/galaxy-slayer-zed-lol-4K-97.jpg");
  background-size: cover;
  overflow: hidden;
}
.virtual-frame {
  background: rgba(0, 0, 0, 0.35);
  margin-left: -10px;
  width: 100%;
  height: 98.5%;
  z-index: 999;
  position: absolute;
}
</style>
