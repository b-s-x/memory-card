<template>
  <div class="container-form container__signup">
    <form action="#" class="form" @submit.prevent="registerUser" novalidate>
      <div class="form-title">Sign Up</div>
      <input
        @blur="$v.formRegSignUp.email.$touch()"
        :class="status($v.formRegSignUp.email)"
        v-model="formRegSignUp.email"
        type="text"
        placeholder="Email"
        class="input"
      />

      <transition name="fade" mode="out-in">
        <div v-if="ifFormRegEmailDirtyOrRequired" class="form-error__text">
          {{ msgRequired }}
        </div>

        <div v-if="ifFormRegEmailDirtyOrEmail" class="form-error__text">
          {{ msgToBeEmail }}
        </div>
      </transition>

      <input
        @blur="$v.formRegSignUp.password.$touch()"
        :class="status($v.formRegSignUp.password)"
        v-model="formRegSignUp.password"
        type="password"
        placeholder="Password"
        class="input"
        autocomplete
      />

      <div v-if="ifFormRegPasswordDirtyOrMinLength" class="form-error__text">
        {{ msgNotLessSymbol }}
      </div>

      <input
        @blur="$v.formRegSignUp.passwordConfirm.$touch()"
        :class="status($v.formRegSignUp.passwordConfirm)"
        v-model="formRegSignUp.passwordConfirm"
        type="password"
        placeholder="Confirm password"
        autocomplete
        class="input"
      />

      <div v-if="ifFormRegPasswordConfirmDirtyOrSameAs" class="form-error__text">
        {{ msgNotSameAs }}
      </div>

      <m-button type="submit" class="btn-sign-up" text="Sign Up" />
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
      msgNotSameAs: "Пароли не совпадают",

      submitStatus: null,

      formRegSignUp: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
    };
  },

  components: {
    MButton,
  },

  validations: {
    formRegSignUp: {
      email: {
        required,
        email,
      },
      password: {
        minLength: minLength(6),
      },
      passwordConfirm: {
        sameAs: sameAs("password"),
      },
    },
  },

  computed: {
    ifFormRegEmailDirtyOrRequired() {
      return this.$v.formRegSignUp.email.$dirty &&
            !this.$v.formRegSignUp.email.required
    },

    ifFormRegEmailDirtyOrEmail() {
      return this.$v.formRegSignUp.email.$dirty &&
            !this.$v.formRegSignUp.email.email
    },

    ifFormRegPasswordDirtyOrMinLength() {
      return this.$v.formRegSignUp.password.$dirty &&
            !this.$v.formRegSignUp.password.minLength
    },

    ifFormRegPasswordConfirmDirtyOrSameAs() {
      return this.$v.formRegSignUp.passwordConfirm.$dirty &&
            !this.$v.formRegSignUp.passwordConfirm.sameAs
    }
  },

  methods: {
    status(validator) {
      return {
        'form-error': validator.$error,
      };
    },

    registerUser() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        const newUserForm = {
          email: this.formRegSignUp.email,
          password: this.formRegSignUp.password,
          passwordConfirm: this.formRegSignUp.passwordConfirm,
        };

        this.$emit('registerUser', newUserForm)
        this.submitStatus = "OK";

        for (let input in this.formRegSignUp) {
          this.formRegSignUp[input] = "";
        }

        console.log("Регистрация успешна");

        this.$v.$reset();
      }
    },
  },
};
</script>

<style lang="scss" scoped>

@import "@common";

.container {
  &-form {
    @extend %container-form;
  }

  &__signup {
    transform: translateX(100%);
  }
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

.btn-sign-up {
  margin-top: 15px;
}

</style>