<template>
  <section class="container">
    <div class="header-logo">
      <img
        class="img-1"
        src="/assets/images/play-button/play-button-shape.png"
      />
      <img
        class="img-2"
        src="/assets/images/play-button/play-button-click-area.png"
        @click.prevent="onClick('/assets/sounds/button-play-click.mp3')"
      />
    </div>
    <div class="header-menu">
      <ul>
        <li>HOME</li>
        <li>TFT</li>
        <li>CLASH</li>
      </ul>
    </div>
    <div class="header-extension">
      <ul>
        <li><img src="/assets/images/header-icons/profile.png" /></li>
        <li><img src="/assets/images/header-icons/collection.png" /></li>
        <li><img src="/assets/images/header-icons/booty.png" /></li>
        <li><img src="/assets/images/header-icons/shop.png" /></li>
      </ul>
    </div>
    <div class="header-riot">
      <img src="/assets/images/header-icons/divider.png" />
      <ul>
        <li>
          <img src="/assets/images/header-icons/riot-points.png" />{{
            this.$store.state.rp
          }}
        </li>
        <li>
          <img src="/assets/images/header-icons/blue-essence.png" />{{
            this.$store.state.thl
          }}
        </li>
      </ul>
    </div>
    <div class="header-profile">
      <div class="header-profile-avatar">
        <img src="/assets/images/aside-icons/avatar-wrapper.png" />
        <p class="header-profile-rank">{{ this.$store.state.rank }}</p>
      </div>
      <div class="header-profile-infor">
        <ul>
          <li class="header-profile-infor-nickname">
            {{ this.$store.state.userName }}
          </li>
          <li class="header-profile-infor-status">
            <img src="/assets/images/aside-icons/check.ico" />{{
              this.$store.state.userStatus
            }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onClick(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
  },
};
</script>

<style scoped>
.container {
  background: transparent;
  width: 100%;
  height: 67px;
  margin-top: 0px;
  border-bottom: 1px solid gray;
  display: flex;
  background: rgba(0, 0, 0, 0.55);
}
.header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 100%;
  padding-left: 20px;
}

.img-1 {
  width: 40px;
  height: 42px;
  cursor: pointer;
}
.img-2 {
  width: 120px;
  height: 35px;
  cursor: pointer;
  transition: 0.3s;
}
.header-logo:hover .img-2:hover {
  filter: hue-rotate(120deg);
}
.header-logo:after {
  content: "Play";
  position: absolute;
  margin-left: 40px;
  cursor: pointer;
}
.header-menu,
.header-extension {
  width: 350px;
  height: 100%;
  padding: 0;
}

.header-menu > ul,
.header-extension > ul {
  display: flex;
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.header-menu > ul > li,
.header-extension > ul > li {
  display: flex;
  align-items: center;
  padding: 0 7px;
  cursor: pointer;
  transition: 0.4s;
  opacity: 0.5;
  font-weight: bold;
}
.header-extension > ul > li >img{
  width: 25px;
}
.header-menu > ul > li:hover,
.header-extension > ul > li:hover,
.header-extension > ul > li > img:hover {
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
  filter: hue-rotate(100deg);
}
.header-extension {
  width: 290px;
}
.header-extension > ul > li {
  padding: 0 20px;
}
.header-riot {
  display: flex;
  width: 125px;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
}
.header-riot > img {
  width: 2px;
  height: 100%;
}
.header-riot > ul {
  list-style: none;
  display: grid;
  grid-gap: 10px;
}
.header-riot > ul > li {
  display: flex;
  grid-gap: 5px;
  padding: 0 5px;
}
.header-profile {
  width: 180px;
  height: 100%;
  padding: 0 10px 0 20px;
  display: flex;
}
.header-profile-avatar {
  background-image: url("https://opgg-static.akamaized.net/images/profile_icons/profileIcon4791.jpg?image=q_auto:best&v=1518361200");
  background-size: 100% 100%;
  width: 67px;
  height: 100%;
  border-radius: 50%;
  margin-top: -5px;
  cursor: pointer;
}
.header-profile-avatar > img {
  width: 67px;
  height: 100%;
}
.header-profile-rank {
  position: absolute;
  top: 28px;
  right: 200px;
}
.header-profile-infor {
  display: flex;
  align-items: center;
  padding: 0;
  width: 130px;
  height: 100%;
  margin: 0;
}
.header-profile-infor > ul {
  display: grid;
  list-style: none;
  grid-gap: 8px;
  padding: 0 10px;
  text-align: start;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.header-profile-infor-nickname {
  font-size: 1.2rem;
  letter-spacing: 2px;
}
.header-profile-infor-status {
  display: flex;
  grid-gap: 8px;
  color: rgb(0, 209, 0);
}
.header-profile-infor-status > img {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid rgb(0, 253, 0);
}
</style>