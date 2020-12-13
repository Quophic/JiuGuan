<template>
  <div style="background-color: #fff2d8; height: 100%">
    <div class="quit">
      <a href="/community">
        <v-btn icon color="#E16C6C" class="quitIcon">
          <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
      </a>
    </div>
    <div>
      <div class="main">
        <v-card class="user" :elevation="0">
          <v-avatar size="50">
            <v-img max-height="100%" src="../assets/charts1.png"></v-img>
          </v-avatar>

          <span class="userName">
            {{ userName }}
          </span>

          <span class="wow">{{ comment.Content }} </span>
        </v-card>
      </div>
    </div>
    <div class="mid">
      <div>
        <div class="text1">留言</div>
        <div class="text2">TIME HOT</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="replies">
      <div v-for="(item, index) in replies" :key="index">
        <div>{{ item.Content }}</div>
      </div>
    </div>

    <div class="input">
      <div class="poo">
        <input type="text" v-model="reply" />
      </div>

      <v-btn @click="sendReply" height="20px" color="#F58C8C"></v-btn>
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
      userName: "",
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
            this.userName = response.data.comment.FromName
            this.comment = response.data.comment;
            // console.log( this.comment.Content.length)
            if( this.comment.Content.length >= 20){
              // console.log(this.comment)
              this.comment.Content = this.comment.Content.slice(0,19).concat("......")
            }
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
      } else if (this.reply.length <= 500) {
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
            this.reply = "";
          });
      } else {
        this.placeHolder = "还有话说吗？";
      }
    },
  },
};
</script>

<style scoped>
.input {
  position: fixed;
  bottom: 24px;
  display: flex;
  justify-content: space-around;
  height: 30px;
  width: 80%;
  left: 10%;
  background-color: white;
  padding: 5px;
  border-radius: 7px;
}
.quit {
  position: absolute;
  top: 20px;
  left: 20px;
}
.poo {
  margin-right: 5px;
  height: 20px;
  background-color: #ffe6e6;
}
.main {
  position: absolute;
  top: 80px;
  left: 10%;
  border-radius: 10px;
  height: 90px;
  background-color: white;

  width: 80%;
}
.user {
  padding: 30px 20px;
  background-color: #fffaf6;
}
.userName {
  width: 100px;
  font-size: 10px;
  position: absolute;
  top: 30px;
  left: 90px;
}
.wow {
  position: absolute;
  top: 60px;
  left: 90px;
}
.replies {
  position: absolute;
  top: 260px;
  left: 10%;

  width: 80%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
}
a {
  text-decoration: none;
}
.line {
  width: 350px;
  height: 1px;
  background-color: red;
}
.mid {
  position: absolute;
  top: 180px;
  left: -10px;
  height: 10px;
}
.text1 {
  position: relative;
  top: 50px;
  left: 18px;
  width: 28px;
  height: 20px;
  font-size: 14px;
  font-family: Kailasa;
  font-weight: bold;
  line-height: 18px;
  color: #611010;
  opacity: 1;
}
.text2 {
  position: relative;
  top: 33px;
  left: 310px;

  width: 70px;
  height: 14px;
  font-size: 10px;
  font-family: Kailasa;
  font-weight: bold;
  line-height: 12px;
  color: #611010;
  opacity: 1;
}
</style>