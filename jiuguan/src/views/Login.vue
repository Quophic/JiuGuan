<template>
  <div id="inputLogin">
    <div class="loginBackground">    
      
    </div>
    <h1 class="title">进入酒馆</h1>
    <div class="usernameInput">
      <v-text-field outlined clearable prepend-inner-icon="perm_identity" label="login"></v-text-field>
    </div>
    <div class="passwordInput">
      <v-text-field outlined clearable type="password" prepend-inner-icon="lock" label="password"></v-text-field>
    </div>
    <div class="logbutton">
      <a href="/loginWelcome">
        <v-btn id="loginBtn" depressed large height="28px" width="95px">登录</v-btn>
      </a>
      <a href="/register">
        <v-btn id="regBtn" depressed large height="28px" width="95px">注册</v-btn>
      </a>  
    </div>
  </div>
</template>

<script>
export default {};
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
