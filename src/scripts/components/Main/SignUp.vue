<template>
  <div class="container-form container__signup">
    <form action="#" class="form" @submit.prevent>
      <div class="form-title">Sign Up</div>
      <input type="text" placeholder="User" class="input" />
      <input type="email" placeholder="Email" class="input" />
      <input
        type="password"
        placeholder="Password"
        autocomplete="on"
        class="input"
      />

      <m-button class="btn-sign-up" text="Sign Up" />
    </form>
  </div>
</template>

<script>
import MButton from "@components/Button/MButton";

export default {
  components: {
    MButton,
  },
};
</script>

<style lang="scss" scoped>
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

.container__signup {
  transform: translateX(100%);
}
</style>