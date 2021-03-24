
<template>
  <div class="container-form">
    <form action="#" class="form" @submit.prevent="collectAndSentForm" novalidate>
      <div class="form-title">Sign In</div>
      <input
        @blur="$v.formLogSignIn.email.$touch()"
        :class="status($v.formLogSignIn.email)"
        v-model="formLogSignIn.email"
        type="text"
        placeholder="Email"
        class="input"
      />

      <transition name="fade" mode="out-in">
        <div v-if="ifFormLogEmailDirtyOrRequired" class="form-error__text">
          {{ msgRequired }}
        </div>

        <div v-if="ifFormLogEmailDirtyOrEmail" class="form-error__text">
          {{ msgToBeEmail }}
        </div>
      </transition>

      <input
        @blur="$v.formLogSignIn.password.$touch()"
        :class="status($v.formLogSignIn.password)"
        v-model="formLogSignIn.password"
        type="password"
        placeholder="Password"
        autocomplete="on"
        class="input"
      />

      <div
        v-show="ifFormLogPasswordDirtyOrMinLength" class="form-error__text">
        {{ msgNotLessSymbol }}
      </div>

      <a href="#" class="link">Forgot your password?</a>

      <m-button type="submit" text="Sign In" />
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

      submitStatus: null,

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

  computed: {
    ifFormLogEmailDirtyOrRequired() {
      return this.$v.formLogSignIn.email.$dirty && !this.$v.formLogSignIn.email.required
    },

    ifFormLogEmailDirtyOrEmail() {
      return this.$v.formLogSignIn.email.$dirty && !this.$v.formLogSignIn.email.email
    },

    ifFormLogPasswordDirtyOrMinLength() {
      return this.$v.formLogSignIn.password.$dirty && !this.$v.formLogSignIn.password.minLength
    }
  },

  methods: {
    status(validator) {
      return {
        "form-error": validator.$error,
      };
    },

    collectAndSentForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        const authForm = {
          email: this.formLogSignIn.email,
          password: this.formLogSignIn.password,
        };

        this.$emit("authenticationUser", authForm); //Promise???
        this.submitStatus = "OK";

        for (let input in this.formLogSignIn) {
          this.formLogSignIn[input] = "";
        }

        console.log("Вход успешен");

        this.$v.$reset();
      }
    },
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

  &-title {
    @extend %form-title;
  }
}

.input {
  @extend %input;
}

.form-error {
  @extend %form-error;

  &__text {
    @extend %form-error__text;
  }
}

.link {
  color: $black;
  margin: 24px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>