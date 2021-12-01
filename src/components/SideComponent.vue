<template>
  <section class="container">
    <div class="extension">
      <p>SOCIAL</p>
      <div>
        <img src="../assets/images/aside-icons/add-friend.png" />
        <img src="../assets/images/aside-icons/add-folder.png" />
        <img src="../assets/images/aside-icons/options.png" />
        <img src="../assets/images/aside-icons/search.png" />
      </div>
    </div>
    <div class="extension-group">
      <ul v-for="(group, index) in groups" :key="index">
        <li class="group-flag">
          <img :src="group.flag" />
        </li>
        <li class="group-id">{{ group.ID }}</li>
        <li class="group-name">{{ group.name }}</li>
      </ul>
    </div>
    <p class="extension-general">
      {{
        `GENERAL (${this.$store.state.activeFriend}/`
      }}{{ totalFriend.length }})
    </p>
    <div class="near-contact">
      <ul v-for="(friend, index) in totalFriend" :key="index">
        <li @mouseover="mouseOverActive(index, $event)" @mouseleave="mouseLeave">
          <div class="view-table" v-show="isHovering == true">
            <div class="cover-image">
              <img :src="`@/assets/images/cover_background/${friend.cover}.jpg`" />
            </div>
            <div class="avatar-image">
              <img src="@/assets/images/aside-icons/platina.png" />
              <img class="avatar" :src="`/src/assets/images/avatar/${friend.avatar}.jpg`" />
            </div>
            <div class="intro-desc">
              <h1>{{ friend.name }}</h1>
              <h5>
                <img src="@/assets/images/aside-icons/status-message.png" /> "Latest message"
              </h5>
              <h4>{{ friend.recent }}</h4>
            </div>
          </div>
          <img :src="`@/assets/images/avatar/${friend.avatar}.jpg`" />
          <div class="near-contact-statusIcon" :class="{ online: friend.status === 'online', offline: friend.status === 'offline', notAvailable: friend.status === 'not available'}"></div>
          <div>
            <span class="near-contact-name">{{ friend.name }}</span>
            <span class="near-contact-statusLabel">{{ friend.status }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="function-tool">
      <div class="chat">
        <img src="../assets/images/aside-icons/chat.png" alt="chat" />
      </div>
      <div class="mission">
        <img src="../assets/images/aside-icons/missions.png" alt="mission" />
      </div>
      <div class="voice">
        <img src="../assets/images/aside-icons/voice.png" alt="voice" />
      </div>
      <div class="version">
        <h4>
          <a href="https://github.com/digital-werewolf">V2.0</a>
        </h4>
      </div>
      <div class="bug">
        <img src="../assets/images/aside-icons/bug.png" alt="bug" />
      </div>
    </div>
  </section>
</template>

<script>
import totalFriend from "../data/totalFriend.json";
import groups from "../data/group.json";
export default {
  data: () => ({
    totalFriend,
    groups,
    isHovering: false
  }),
  created() {
    const array = [];
    for (let i in totalFriend) {
      if (totalFriend[i].status === 'online') {
        array.push(totalFriend[i]);
      }
    }
    this.$store.state.activeFriend = array.length;
  },
  methods: {
    mouseOverActive(index, event) {
      this.isHovering = true;
      for (let i = 0; i < this.totalFriend.length; i++) {
        var child = document.querySelector('.near-contact').children[i].children[0].children[0];
        child.style.transform = "scale(0)";
        child.style.display = "none";
        child.style.transition = "0.3s linear";
        if (i == index) {
          child.style.transform = "scale(1)";
          child.style.display = "block";
        }
        if (index < 3) {
          child.style.marginTop = "-120px";
        }
        if (index >= 3) {
          child.style.marginTop = (55 * (-index)).toString() + "px";
          //child.style.marginTop = (event.clientY*(-1)).toString() + "%";
          // child.style.bottom = (-15*index + event.offsetY * index/5).toString() + "px";
        }
      }
    },
    mouseLeave() {
      this.isHovering = false;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
.container {
  position: absolute;
  right: 0;
  width: 232px;
  max-height: 100%;
  background: rgba(0, 0, 30, 0.75);
  padding: 0;
}
.extension {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background: rgba(252, 204, 211, 0.125);
  padding: 0;
  grid-gap: 50px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  position: fixed;
}
.extension > div {
  display: flex;
  grid-gap: 10px;
}
.extension > div > img {
  width: 16px;
  height: 11px;
  cursor: pointer;
}
.extension-group {
  padding: 0;
  margin-top: 30px;
  height: 150px;
  overflow-y: auto;
}

.extension-group > ul {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  grid-gap: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0;
  padding: 7px 0;
  transition: 0.3s;
}
.extension-group > ul:hover,
.function-tool > div:hover,
.near-contact > ul > li:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.212);
}
.extension-group .group-flag > img {
  width: 30px;
  height: 30px;
}
.extension-group .group-id {
  color: #c5a971;
}
.extension-general {
  text-align: start;
  background: rgba(252, 204, 211, 0.125);
  padding: 5px;
  margin: 5px 0;
}
.near-contact {
  height: 250px;
  padding: 7px 0;
  margin: 0;
  overflow-y: auto;
}
.near-contact > ul {
  padding: 7px 0;
  margin: 0;
}
.view-table {
  position: absolute;
  margin-left: -520px;
  width: 490px;
  height: 290px;
}
.view-table:before {
  content: url("../assets/images/aside-icons/popover-wrapper.png");
  position: absolute;
  /* width: 400px;
  height: 200px; */
}

.view-table > .cover-image > img {
  width: 490px;
  height: 290px;
  z-index: -1;
}
.view-table > .avatar-image > img:nth-child(1) {
  position: absolute;
  top: 22%;
  left: 4%;
  z-index: 2;
}
.view-table > .avatar-image > img:nth-child(2) {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: absolute;
  top: 40%;
  left: 12%;
  z-index: 2;
}
.view-table > .intro-desc {
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  background: rgba(27, 27, 27, 0.973);
}
.view-table > .intro-desc > h1 {
  color: white;
  padding-left: 50%;
}
.view-table > .intro-desc > h5 {
  color: #e4dbc8;
  padding-left: 50%;
}
.view-table > .intro-desc > h4 {
  color: #0ac5e1;
  padding-left: 85%;
}
.near-contact-statusIcon {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  position: relative;
  right: 20px;
  top: 25px;
  z-index: 2;
}
.near-contact-statusIcon.online {
  border: 4px solid rgb(219, 219, 219);
  background: green;
}
.near-contact-statusIcon.offline {
  border: 4px solid rgb(148, 0, 0);
  background: black;
}
.near-contact-statusIcon.notAvailable {
  border: 4px solid rgb(92, 92, 92);
  background: black;
}
.near-contact > ul > li {
  display: flex;
  grid-gap: 7px;
}
.near-contact > ul > li > img {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 2px solid #c5a971;
}
.near-contact > ul > li > div {
  display: grid;
  text-align: start;
}
.near-contact-name {
  color: gray;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.near-contact-statusLabel {
  color: rgb(0, 209, 0);
}
.function-tool {
  position: fixed;
  height: 50px;
  width: 100%;
  display: flex;
}
.function-tool .version {
  color: gray;
  border: none;
}
.function-tool .version > h4 > a {
  color: gray;
  text-decoration: none;
}
.function-tool > div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 13px;
  border: 1px solid #c5a971;
}
.function-tool > div > img {
  width: 16px;
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar,
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #785a28;
  border-radius: 300px;
}
</style>
