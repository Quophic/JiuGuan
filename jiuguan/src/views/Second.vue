<template>
  <div class="Second">
    <div class="sorry">二楼正在装修中...</div>
        <!-- 底端导航栏 -->
    <div class="bottomNav">
      <v-bottom-navigation height="44px" v-model="value" class="nav">
        <a href="/second">
          <v-btn value="second" class="navBtn">
            <v-icon large>stairs</v-icon>
          </v-btn>
        </a>
        <a href="/home">
          <v-btn value="home" class="navBtn">
            <v-icon large>home</v-icon>
          </v-btn>
        </a>
        <a href="/user">
          <v-btn value="nearby" class="navBtn">
            <v-icon large>person</v-icon>
          </v-btn>
        </a>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ value: "second" })
}
</script>

<style>

.Second {
  background-color: #FFF4E3;
  height: 100%;
  width: 100%;
}

.sorry {
  position: absolute;
  left: 98px;
  top: 230px;
  font-size: 20px;
  color: #D96D6D;
}

</style>