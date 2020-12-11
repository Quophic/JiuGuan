<template>
  <div>
    <div class="justify">
      <v-btn
        text
        height="70px"
        width="70px"
        class="rounded-circle add"
        @click="sendContent"
      >
        <v-icon color="blue" size="50px">mdi-telegram</v-icon>
      </v-btn>
      <div class="input">
        <v-textarea
          v-model="newContent"
          autofocus
          auto-grow
          background-color="white"
          outlined
          counter
          :placeholder="placeHolder"
        >
        </v-textarea>
      </div>
    </div>
    <div class="topicPlace"></div>

    <v-app-bar :class="'rounded-t-xl'" class="bottomBar">
      <v-btn text class="bottomBTN1">
        <v-icon color="black">mdi-image-multiple-outline</v-icon>
      </v-btn>
      <v-btn text class="bottomBTN2">
        <v-icon size="27px" color="black">mdi-pencil-box-multiple-outline</v-icon>
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
      if (this.newContent.match(/[\S]/) != null) {
        console.log(this.newContent);
        this.$axios
          .get(
            "/upcomment?Content=" +
              this.newContent +
              "&FromId=0" +
              "&FromName=lsp"
          )
          .then((response) => {
            console.log(response.data);
          });

        this.newContent = "";
        this.placeHolder = "说点什么吧？";
      } else {
        this.placeHolder = "禁止输入为空";
      }
    },
  },
};
</script>

<style  scoped>
.justify {
  position: relative;
  top: 50px;
  height: 100%;
}
.input {
  position: absolute;
  background-color: white;
  margin: auto;
  top: 100px;
  left: 10%;
  width: 80%;
}
.add {
  position: absolute;
  right: 10%;
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
</style>