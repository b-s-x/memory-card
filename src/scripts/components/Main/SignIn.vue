
<template>
  <div class="container-form">
    <form action="#" class="form" @submit.prevent="" novalidate>
      <div class="form-title">Sign In</div>
      <input
        @blur="$v.formLogSignIn.email.$touch()"
        :class="status($v.formLogSignIn.email)"
        v-model="formLogSignIn.email"
        type="text"
        placeholder="Email"
        class="input"
      />

      <div v-if="$v.formLogSignIn.email.$dirty && !$v.formLogSignIn.email.required" class="formErrText">
        {{ msgRequired }}
      </div>

      <div v-if="$v.formLogSignIn.email.$dirty && !$v.formLogSignIn.email.email" class="formErrText">
        {{ msgToBeEmail }}
      </div>

      <input
        @blur="$v.formLogSignIn.password.$touch()"
        :class="status($v.formLogSignIn.password)"
        v-model="formLogSignIn.password"
        type="password"
        placeholder="Password"
        autocomplete="on"
        class="input"
      />

      <div v-show="$v.formLogSignIn.password.$dirty && !$v.formLogSignIn.password.minLength" class="formErrText">
        {{ msgNotLessSymbol }}
      </div>

      <a href="#" class="link">Forgot your password?</a>

      <m-button text="Sign In" />
    </form>
  </div>
</template>

<script>
import MButton from "@components/Button/MButton";

import {
  required,
  email,
  minLength,
  sameAs,
} from "vuelidate/dist/validators.min.js";

export default {
  data() {
    return {
      msgRequired: "Это поле обязательно для заполнения",
      msgToBeEmail: "Это поле должно быть email адресом",
      msgNotLessSymbol: "Должно быть не менее 6 символов",

      formLogSignIn: {
        email: "",
        password: "",
      },
    };
  },

  validations: {
    formLogSignIn: {
      email: {
        required,
        email,
      },
      password: {
        minLength: minLength(6),
      },
    },
  },

  components: {
    MButton,
  },

  methods: {
    status(validator) {
      return {
        formErr: validator.$error,
      };
    },
  },
};
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

.formErr {
  background: rgba(243, 78, 78, 0.342);
  border: 1px solid red;
}

.formErrText {
  color: red;
}

</style>