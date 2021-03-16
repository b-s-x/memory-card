<template>
  <div class="main">
    <div class="auth-sign__container">
      <auth-sign/>
    </div>
  </div>
</template>

<script>

import AuthSign from "@components/Main/AuthSign.vue"

export default {
  components: {
    AuthSign
  }
}
</script>

<style lang="scss" scoped>

$photo: "https://images.unsplash.com/photo-1589429152188-da4f442e177b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";

.main {
  background-image: url($photo);
  align-items: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  // height: 100vh;
}

.auth-sign__container {
  display: grid;
  place-items: center;
  height: 100vh;
}

</style>