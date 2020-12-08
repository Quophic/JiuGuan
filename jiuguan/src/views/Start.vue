<template>
  <div id="start">
      <div class="background">
          <img :src="startSrc" width="100%" height="100%" alt="" />
      </div>
      <div class="button">
          <a href="/login">
             <v-btn depressed small color="primary">Primary</v-btn>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            startSrc : require("/Users/sairen/vuelearn/JiuGuan/jiuguan/src/images/startImg.png")
        }
    }
}
</script>

<style>
.button {
    width: 30px;
    height: 30px;
}

.background {
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-position: center;
    position: fixed;
    z-index: -1;
}
</style>