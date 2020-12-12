<template>
  <div id="inputLogin">
    <div class="loginBackground">
      <img :src="startSrc" width="100%" height="100%" alt="" />
    </div>
    <!-- 用户名的输入框 -->
    <div class="loginForm">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="username"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <!-- 密码的输入框 -->
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          label="password"
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="show = !show"
        ></v-text-field>
      </v-form>
      <v-btn
        id="loginBtn"
        depressed
        large
        height="28px"
        width="95px"
        @click="login"
        >登录</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      startSrc: require("../images/start.png"),
      loginForm: {
        username: "",
        password: ""
      },
      show: false,
      show2: false,
      valid: true,
      username: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },

  methods: {
    ...mapMutations(["changeLogin"]),

    login() {
      let that = this;
      if (this.username === "" || this.password === "") {
        alert("账号和密码不能为空");
      } 
      else {
        this.$axios
          .get("/autoin?username=" + that.username + "&password=" + that.password)
          .then(function(res) {
            console.log("顺利运行");
            console.log(res.data);

            that.userToken = res.data.token;
            // that.userToken = "Bearer " + res.data.token;
            //sessionStorage.getItem("userID")
            sessionStorage.setItem("userID",res.data.s.ID)
            sessionStorage.setItem("userName",res.data.s.UserName)
            

            // console.log(that.userToken)
            //将用户的token存入vuex中
            that.changeLogin({ Authorization: that.userToken });
            that.$router.push("/loading"); //成功之后跳转到登录成功后的界面
            // alert("登录成功");
          })
          .catch(function(error){
            alert("账号或密码错误");
            // console.log(error)
          })
          
      }
    }
  }
};
</script>

<style scoped>
.loginForm {
  position: fixed;
  top: 100px;
  left: 63px;
  width: 250px;
  height: 150px;
}

.background {
  position: fixed;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  background-position: center;
}

#loginBtn {
  position: fixed;
  left: 135px;
  background-color: #e2806a;
}
</style>
