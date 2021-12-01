<template>
  <div class="container">
    <div class="header-bar">
      <h3>Overview</h3>
      <h3>Patch notes</h3>
    </div>
    <div class="content-main">
      <h1>LEAGUE OF LEGENDS</h1>
      <p>
        Welcome to the League of Legends battle - the world's most engaging
        fighting game.
      </p>
      <h3>INTRODUCTION</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 976px;
  height: 455px;
  display: grid;
  grid-template-rows: 12% 88%;
}
.container > .header-bar {
  display: flex;
  justify-content: start;
  align-items: center;
  grid-gap: 50px;
  padding-left: 100px;
  font-family: FrizQuadrata;
  font-size: 14px;
  letter-spacing: 1.5px;
  line-height: 14px;
}
.header-bar:nth-child(1){
  color: #f0e6d2;
  cursor: pointer;
}
.header-bar:nth-child(2){
  color:#beb088;
  cursor: pointer;
}
.container > .content-main {
  padding: 20% 0 0 5%;
  text-align: start;
}
.content-main > h1 {
  color: #f0e6d2;
  font-family: FrizQuadrata;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 48px;
}
.content-main > p {
  color: #938f83;
  font-family: Roboto;
  line-height: 16px;
  margin: 32px 0px 0px;
}
.content-main > h3 {
  background-color: #1e2328;
  border: 2px solid #cca558;
  display: inline-block;
  font-family: FrizQuadrata;
  font-weight: 700;
  line-height: 16px;
  padding: 12.8px 32px;
}
.content-main > h3:hover {
  cursor: pointer;
  border: 2px solid #ffb114;
}
</style>