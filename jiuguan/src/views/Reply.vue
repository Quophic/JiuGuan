<template>
  <div>
    <div class="quit">
      <a href="/community">
        <v-btn icon color="#E16C6C" class="quitIcon">
          <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
      </a>
    </div>
    <div>
      {{ comment.Content}}
    </div>
    <div v-for="(item, index) in replies" :key="index">
      <div>{{ item.Content }}</div>
    </div>
    <div class="input">
      <v-text-field
        v-model="reply"
        counter="50"
        :placeholder="placeHolder"
      ></v-text-field>
      <v-btn @click="sendReply">ss</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      replies: [],
      comment: {},
      reply: "",
      placeHolder: "有什么意见吗？",
    };
  },
  created() {
    this.getReply();
  },
  methods: {
    getReply() {
      this.$axios
        .get(
          "/getreply?CommentId=" +
            sessionStorage.getItem("commentID") +
            "&PageSize=100" +
            "&PageNum=1"
        )
        .then((response) => {
          if (response.data) {
            console.log(response.data);
            this.comment = response.data.comment;
            this.replies.push(...response.data.date);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendReply() {
      if (this.reply.match(/[\S]/) == null) {
        this.placeHolder = "禁止输入为空";
      } else if (this.reply.length <= 50) {
        this.$axios
          .get(
            "/upreply?Content=" +
              this.reply +
              "&FromName=" +
              sessionStorage.getItem("userName") +
              "&FromId=" +
              sessionStorage.getItem("userID") +
              "&ToCommentId=" +
              sessionStorage.getItem("commentID") +
              "&ToId=0"
          )
          .then((response) => {
            console.log(response);
            this.reply=''
          });
      } else {
        this.placeHolder = "还有话说吗？";
      }
      
    },
  },
};
</script>

<style scoped>
.input{
    position: fixed;
    bottom:0;

    
    width:90%
}
</style>