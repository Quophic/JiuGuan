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
          v-model="repeatpass"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :repeatRules="[repeatRules.required, rules.min]"
          :type="show2 ? 'text' : 'password'"
          label="repeatpass"
          hint="At least 8 characters"
          class="input-group--focused"
          @click:append="show2 = !show2"
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
    count: 0,
    show: false,
    show2: false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 5) || "Name must be less than 10 characters"
    ],
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`
    },
    repeat: "",
    repeatRules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`
    }
  }),

  mounted: function() {
    this.preload();
  },

  methods: {
    preload: function() {
      let imgs = [
        "static/img/charts1.png",
        "static/img/charts2.png",
        "static/img/charts3.png",
        "static/img/game.png",
        "static/img/other-head.png",
        "static/img/other-top.png",
        "static/img/others-head.png",
        "static/img/personal-head.png",
        "static/img/perisonal-top.png",
        "static/img/photo.png",
        "static/img/photo1.png",
        "static/img/photo2.png",
        "static/img/photo3.png",
        "static/img/review1.png",
        "static/img/review2.png",
        "static/img/review3.png",
        "static/img/society.png"
      ];

      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          this.count++;
        };
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
</style>
