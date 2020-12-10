<template>
  <p>{{ percent }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },

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
          // 计算图片加载的百分数，绑定到percent变量
          let percentNum = Math.floor((this.count / 14) * 100);
          this.percent = `${percentNum}%`;
        };
      }
    }
  },

  watch: {
    count: function(val) {
      // console.log(val)
      if (val === 18) {
        // 图片加载完成后跳转页面
        this.$router.push({ path: "cover" });
      }
    }
  }
};
</script>

<style></style>
