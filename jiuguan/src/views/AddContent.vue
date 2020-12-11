<template>
  <div>
    
      <div class="justify">
      <a href="/community">
      <v-btn
      text
        height="70px"
        width="70px"
        class="rounded-circle "
      >
        <v-icon
        size=33
        color="#E16C6C"
        >
        keyboard_arrow_left
      </v-icon>
      </v-btn>
      
      </a>
      <v-btn
        text
        height="70px"
        width="70px"
        class="rounded-circle add"
        @click="sendContent"
      >
        <v-icon color="#FDA6A6" size="35px">mdi-telegram</v-icon>
      </v-btn>
      <div class="input">
        <v-textarea
          v-model="newContent"
          auto-grow
          :class="'elevation-4'"
          counter="200"
          :placeholder="placeHolder"
        >
        </v-textarea>
      </div>
    </div>
    <div class="topicPlace"></div>

    <v-app-bar :class="'rounded-t-xl'" class="bottomBar">
      <v-btn text class="bottomBTN1">
        <v-icon color="#A55959">mdi-image-multiple-outline</v-icon>
      </v-btn>
      <v-btn text class="bottomBTN2">
        <v-icon size="27px" color="#A55959"
          >mdi-pencil-box-multiple-outline</v-icon
        >
      </v-btn>
    </v-app-bar>
 
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContent: "",
      placeHolder: "",
    };
  },
  methods: {
    sendContent() {
      if (this.newContent.match(/[\S]/) == null  ) {
        this.placeHolder = "禁止输入为空";
      } else if(this.newContent.length <= 200) {
        console.log(this.newContent);
        this.$axios
          .get(
            "/upcomment?Content=" +
              this.newContent +
              "&FromId=" +
              sessionStorage.getItem("userID") +
              "&FromName=" +
              sessionStorage.getItem("userName")
          )
          .then((response) => {
            console.log(response.data);
            alert(response.data.msg);
          });

        this.newContent = ""; 
        this.placeHolder = "说点什么吧？";
      }else{
        alert("字数超出限制")
      }
    },
  },
};
</script>

<style  scoped>
.justify {
  height: 1000px;
  background-color: #FFF3EA;
}
.input {
  position: absolute;
  margin: auto;
  top:70px;
  left: 10%;
  width: 80%;
  background-color:#F8D4B4
}
.add {
  position: absolute;
  right: 5%;
}
.bottomBTN1 {
  position: absolute;
  left: 25%;
}
.bottomBTN2 {
  position: absolute;
  right: 25%;
}
.topicPlace {
  position: absolute;
  bottom: 50%;
  left: 15%;
  width: 70%;
}
.bottomBar {
  position: fixed;
  bottom: 0;
}
a{
  text-decoration: none;
}
</style>