<template>
  <div id="inputreg">
    <div class="regBackground">
      <img :src="regSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="form">
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- 用户名的输入框 -->
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <!-- 密码的输入框 -->
        <v-text-field
          v-model="password"
          :rules="passRules"
          label="password"
          required
        ></v-text-field>
        <!-- 验证密码的输入框 -->
        <v-text-field
          v-model="reppass"
          :rules="repRules"
          label="reppass"
          required
        ></v-text-field>
      </v-form>
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
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
      passRules: [
        v => !!v || 'password is required',
        v => /.+@.+\..+/.test(v) || 'password must be valid',
      ],
      reppassword: '',
      reppassword: [

      ]
  })
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
</style>
