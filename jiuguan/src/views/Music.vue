<template>
  <div class="background">
    <div class="quit">
      <a href="/home">
        <v-btn icon color="#E16C6C" class="quitIcon">
          <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
      </a>
    </div>

    <div class="p1" @click="right"><v-img :src="music[0].src"></v-img></div>
    <div class="p2"><v-img :src="music[1].src"></v-img></div>
    <div class="p3" @click="left"><v-img :src="music[2].src"></v-img></div>
    <!-- 图片大小不一样，看起来额 -->
    <div class="name">{{ music[1].name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      music: [
        { src: require("../images/photo1.png"), name: "海浪" },
        { src: require("../images/photo2.png"), name: "舒缓" },
        { src: require("../images/photo.png"), name: "雨声" },
      ],
      a: 0,
    };
  },
  methods: {
    left() {
      this.music.push(this.music.shift());
    },
    right() {
      this.music.unshift(this.music.pop());
    },
  },
};
</script>

<style  scoped>
.background {
  background-color: #fcf0d5;
  height: 100%;
}
.pictures {
  position: absolute;
  width: 40000px;
  margin: 0 auto;
  top: 120px;
  width: 100px;
}
.p1 {
  position: absolute;
  left: 5%;
  top: 180px;
  width: 80px;
}

.p2 {
  position: absolute;
  left: 35%;
  width: 120px;
  top: 150px;
}
.p3 {
  position: absolute;
  right: 5%;
  width: 80px;
  top: 180px;
}
.name {
  font-family: PingFang SC;
  position: absolute;
  top: 270px;
  width: 20%;
  font-size: 20px;
  text-align: center;
  color: #b97c4f;
  left: 40%;
}
a {
  text-decoration: none;
}
.quit{
  position: absolute;
  top:30px;
  left:20px
}
</style>

