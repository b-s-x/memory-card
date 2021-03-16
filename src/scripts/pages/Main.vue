<template>
  <div class="main">
    <div class="overlay">
      <auth/>
    </div>
  </div>
</template>

<script>

import Auth from "@components/Main/Auth.vue"

export default {
  components: {
    Auth,
  }
}
</script>

<style lang="scss" scoped>

$photo: "https://images.unsplash.com/photo-1589429152188-da4f442e177b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";

.overlay {
  background-image: url($photo);
  align-items: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
}


</style>