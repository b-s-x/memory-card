<template>
  <div class="container-form container--signup">
    <form action="#" class="form" @submit.prevent>
      <h2 class="form-title">Sign Up</h2>
      <input type="text" placeholder="User" class="input" />
      <input type="email" placeholder="Email" class="input" />
      <input type="password" placeholder="Password" class="input" />

      <b-button class="btn-sign-up" text="Sign Up"/>
    </form>
  </div>
</template>

<script>
import BButton from "./Button"


export default {
  components: {
    BButton
  }
}
</script>

<style lang="scss" scoped>
// @import "../styles/variables";
// @import "../styles/template";

@import "@common";


.container-form {
  @extend %container-form;
}

.form {
  @extend %form;
}

.input {
  @extend %input;
}

.form-title {
  @extend %form-title;
}

.btn-sign-up {
  margin-top: 15px;
}

.container--signup {
  transform: translateX(100%);
}

</style>