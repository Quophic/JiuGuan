<template>
  <div class="homeBg">
    <div class="quitbtn">
        <v-btn icon color="#E16C6C" class="quitIcon">
          <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
    </div>
    <p>12/13 星期日</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .homeBg {
    width: 100%;
    height: 100%;
    background-color: #FFD79F;
  }

  .quitbtn {
    position: absolute;
    left: 20px;
    top: 61px;
    width: 28px;
    height: 28px;
    background-color: #ffffff;
    border-radius: 50%;
  }
</style>