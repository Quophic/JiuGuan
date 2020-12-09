<template>
  <div id="inputLogin">
    <div class="loginBackground">    
      
    </div>
    <h1 class="title">进入酒馆</h1>
    <div class="loginInput">
      <v-text-field outlined clearable prepend-inner-icon="perm_identity" label="login"></v-text-field>
      <v-text-field outlined clearable type="password" prepend-inner-icon="lock" label="password"></v-text-field>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loginInput {
  position: fixed;
  top:100px;
  left: 100px;
  width: 182px;
  height: 20px;
}

h1 {
  position: fixed;
  top: 60px;
  left: 150px;
}

</style>
