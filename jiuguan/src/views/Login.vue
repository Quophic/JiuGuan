<template>
  <div id="inputLogin">
    <div class="loginBackground">    
      
    </div>
    <h1 class="title">进入酒馆</h1>
    <div class="usernameInput">
      <v-text-field outlined clearable prepend-inner-icon="perm_identity" label="username" v-model="loginForm.username"></v-text-field>
    </div>
    <div class="passwordInput">
      <v-text-field outlined clearable type="password" prepend-inner-icon="lock" label="password" v-model="loginForm.password"></v-text-field>
    </div>
    <div class="logbutton">
        <v-btn id="loginBtn" depressed large height="28px" width="95px" @click="login">登录</v-btn>
      <a href="/register">
        <v-btn id="regBtn" depressed large height="28px" width="95px">注册</v-btn>
      </a>  
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      }
    }
  },

  methods: {
    ...mapMutations(['changeLogin']),

    login () {
      let that = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号和密码不能为空');
      } else {
        // console.log("确实不为空")
        //下面对是否跨域成功进行测试
        this.$axios.get("http://localhost:8000/products") //这个get的是对应数据存放的api
        .then(function(res){
          console.log("正常运行")
          console.log(res)
        })
        // this.$axios ({
        //   method: 'post',
        //   url: 'http://localhost:8000/products',
        //   data: that.loginForm,
        // }).then(res => {
        //   console.log(res),
        //   // console.log(res.data),
        //   that.userToken = 'Bearer ' + res.data.data.body.token;
        //   //将用户的token存入vuex中
        //   that.changeLogin({ Authorization: that.userToken })
        //   that.$router.push('/loginWelcome');  //成功之后跳转到登录成功后的界面
        //   alert('登录成功');
        // }).catch(error => {
        //   alert('账号或密码错误');
        //   console.log(error);
        // });
      }
    }
  }
};
</script>

<style>
.usernameInput,
.passwordInput {
  position: fixed;
  width: 182px;
  height: 20px;
}

.usernameInput {
  top: 100px;
  left: 100px;
}

.passwordInput {
  top: 180px;
  left: 100px;
}

h1 {
  position: fixed;
  top: 60px;
  left: 150px;
}

.logbutton {
  position: fixed;
  top: 300px;
  left: 100px;
}

#loginBtn {
  position: fixed;
  top: 300px;
  left: 75px;
}

#regBtn {
  position: fixed;
  top: 300px;
  left: 200px;
}

</style>
