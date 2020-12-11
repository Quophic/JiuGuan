<template>
  <div>
    <div class="loading">
      <img :src="loading" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      loading: require("../images/loading.jpg"),
      timer: '',
      value: 0
    };
  },
  methods: {
    go() {
      this.$router.push({path:'/home'})
    }
  },
  mounted() {
    this.timer = setTimeout(this.go, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style>

</style>