<template>
  <div style="background-color: #eeeeee">
    <div class="center">
      <div class="between">
        <a href="/home">
          <v-btn icon color="#E16C6C">
            <v-icon large>keyboard_arrow_left</v-icon>
          </v-btn>
        </a>
      </div>
      <div>
        <v-card class="user">
          <v-avatar size="80">
            <v-img max-height="100%" src="../assets/charts1.png"></v-img>
          </v-avatar>

          <span class="userName">
            {{ userName }}
          </span>
          <span class="happy">
              HAPPY EVERYDAY
              <v-btn
              
              >

              </v-btn>
          </span>


          <v-card-title> </v-card-title>
        </v-card>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: sessionStorage.getItem("userName"),
    };
  },
};
</script>

<style  scoped>
a {
  text-decoration: none;
}
.center {
  width: 86%;
  margin: 0 auto;
}
.between {
  margin: 10px 0;
}
.user {
  padding: 30px 20px;
  background-color: #fffaf6;
}
.userName{
    font-size: 30px;
    position: absolute;
    top:30px;
    left:120px
}
.happy{
    background-color:white;
    font-size:12px;
    position:absolute;
    top:80px;
    left:120px
}
</style>