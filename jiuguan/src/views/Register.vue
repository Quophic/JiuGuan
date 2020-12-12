<template>
  <div id="inputreg">
    <div class="regBackground">
      <img :src="regSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="form">
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- 用户名的输入框 -->
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
        <!-- 验证密码的输入框 -->
        <v-text-field
          v-model="repeat"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :repeatRules="[repeatRules.required, repeatRules.min]"
          :type="show2 ? 'text' : 'password'"
          label="repeatpass"
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="show2 = !show2"
        ></v-text-field>
      </v-form>
      <v-btn
        id="signInBtn"
        depressed
        large
        height="28px"
        width="95px"
        @click="signIn"
        >注册</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     regSrc: require("../images/register.png")
  //   };
  // },
  data: () => ({
    regSrc: require("../images/register.png"),
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
    },
    repeat: "",
    repeatRules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
      // emailMatch: () => `The email and password you entered don't match`
    }
  }),
  methods: {
    signIn() {
      var that = this;
      if (this.password === "" || this.username === "" || this.repeat === "") {
        alert("账号密码不能为空");
      } else if (this.password !== this.repeat) {
        alert("输入的密码不一致");
      } else if (this.password.length < 8) {
        alert("请输入正确的密码");
      }else {
        console.log("准备发送请求");
        this.$axios
          .get(
            "/register?username=" + this.username + "&password=" + this.password
          )
          .then(function(res) {
            // console.log("good job");
            that.$router.push("/loading"); //成功之后跳转到登录成功后的界面
            console.log("注册成功");

          });
      }
    }
  }
};
</script>

<style>
.form {
  position: fixed;
  top: 80px;
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

#signInBtn {
  position: fixed;
  left: 135px;
  background-color: #e2806a;
}
</style>
