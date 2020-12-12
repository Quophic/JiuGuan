<template>
  <div id="start">
    <div class="background">
      <img :src="startSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="slogan">
      <p class="slogan">酒馆，倾诉与倾听的地方</p>
    </div>
    <div class="button">
      <a href="/login">
        <v-btn
          depressed
          large
          id="loginButton"
          height="28px"
          width="125px"
          >登录</v-btn
        >
      </a>
      <a href="/Register">
        <v-btn
          depressed
          large
          id="regButton"
          class="brown--text"
          height="28px"
          width="125px"
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
      startSrc: require("../images/start.png"),
    };
  },
};
</script>

<style  scoped>
.button {
  width: 30px;
  height: 30px;
}

.slogan {
  position: absolute;
  width: 220px;
  height: 28px;
  left: 40px;
  bottom: 170px;
  font-size: 20px;
  color: #FFF3EA;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-position: center;
}

#loginButton {
  position: fixed;
  top: 145px;
  left: 125px;
  background-color: #E2806A;
}

#regButton {
  position: fixed;
  top: 207px;
  left: 125px;
  background-color: #E2806A;
}

.v-btn__content {
  color: #FBE9E7;
}

</style>
