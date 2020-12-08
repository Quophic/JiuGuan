<template>
  <div id="start">
    <div class="background">
      <img :src="startSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="button">
      <a href="/login">
        <v-btn
          depressed
          large
          id="loginButton"
          class="brown--text"
          height="28px"
          width="95px"
          >登陆</v-btn
        >
      </a>
      <a href="/Register">
        <v-btn
          depressed
          large
          id="regButton"
          class="brown--text"
          height="28px"
          width="95px"
          >注册</v-btn
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startSrc: require("../images/startImg.png")
    };
  }
};
</script>

<style>
.button {
  width: 30px;
  height: 30px;
}

#loginButton {
  opacity: 0.6;
  position: fixed;
  top: 393px;
  left: 25px;
}

#regButton {
  opacity: 0.6;
  position: fixed;
  top: 454px;
  left: 25px;
}

.background {
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-position: center;
  position: fixed;
}
</style>
