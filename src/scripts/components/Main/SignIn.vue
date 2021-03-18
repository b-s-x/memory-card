
<template>
  <div class="container-form">
    <form action="#" class="form" @submit.prevent>
      <div class="form-title">Sign In</div>
      <input type="email" placeholder="Email" class="input" />
      <input type="password" placeholder="Password" class="input" />
      <a href="#" class="link">Forgot your password?</a>
      <m-button text="Sign In"/>
    </form>
  </div>
</template>

<script>

import MButton from "@components/Button/MButton"

export default {
  components: {
    MButton,
  }
}
</script>

<style lang="scss" scoped>

@import "@common";

.link {
  color: $black;
  margin: 24px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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

.container-form {
  @extend %container-form;
}

</style>