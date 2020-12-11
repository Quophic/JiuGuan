<template>
  <div>
    <div class="background">
      <img :src="bgImg" width="375px" height="275px" />
    </div>
    <div class="photoWall">
      <h3>他的照片墙/</h3>
      <p>仅显示对方允许显示的部分</p>
    </div>
    <div class="card">
      <div class="avatar">
        <img :src="avaImg" width="78px" height="78px" />
      </div>
      <div class="userName">Ncuhome</div>
      <div class="rule">仅展示允许公开部分</div>
      <div class="addicon">
        <v-btn icon class="addIcon">
          <v-icon color="white">person_add</v-icon>
        </v-btn>
      </div>
      <div class="some1">125发表</div>
      <div class="some2">102好友</div>
      <div class="some3">13成就</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImg: require("../images/other-top.png"),
      avaImg: require("../images/other-head.png")
    };
  }
};
</script>

<style>
h3 {
  position: fixed;
  font-size: 16px;
  color: #611010;
  top: 385px;
  left: 20px;
}

p {
  position: fixed;
  font-size: 8px;
  color: #611010;
  top: 417px;
  left: 20px;
}

.avatar {
  position: absolute;
  left: 23px;
  bottom: 73px;
}

.card {
  position: absolute;
  top: 211px;
  left: 20px;
  width: 343px;
  height: 134px;
  background: #fffaf6;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 15px;
}

.userName {
  position: absolute;
  top: 7px;
  left: 116px;
  width: 78px;
  height: 28px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 28px;
  color: #611010;
}

.rule {
  position: absolute;
  left: 116px;
  top: 42px;
  width: 110px;
  height: 14px;
  font-size: 10px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 14px;
  color: #611010;
}

.addIcon {
  position: absolute;
  right: 22px;
  top: 23px;
  background-color: #ff7c74;
}

.some1
.some2
.some3 {
    background-color: red;
    position: absolute;
    width: 28px;
    height: 40px;
    font-size: 14px;
    color: #B40000;
}
</style>
