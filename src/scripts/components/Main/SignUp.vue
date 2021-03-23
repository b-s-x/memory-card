<template>
  <div class="container-form container__signup">
    <form action="#" class="form" @submit.prevent="" novalidate>
      <div class="form-title">Sign Up</div>
      <input
        @blur="$v.formRegSignUp.email.$touch()"
        :class="status($v.formRegSignUp.email)"
        v-model="formRegSignUp.email"
        type="text"
        placeholder="Email"
        class="input"
      />

      <div
        v-if="$v.formRegSignUp.email.$dirty && !$v.formRegSignUp.email.required"
        class="formErrText"
      >
        {{ msgRequired }}
      </div>

      <div
        v-if="$v.formRegSignUp.email.$dirty && !$v.formRegSignUp.email.email"
        class="formErrText"
      >
        {{ msgToBeEmail }}
      </div>

      <input
        @blur="$v.formRegSignUp.password.$touch()"
        :class="status($v.formRegSignUp.password)"
        v-model="formRegSignUp.password"
        type="password"
        placeholder="Password"
        class="input"
        autocomplete
      />

      <div v-show="$v.formRegSignUp.password.$dirty && !$v.formRegSignUp.password.minLength" class="formErrText">
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

      <div v-show="$v.formRegSignUp.passwordConfirm.$dirty && !$v.formRegSignUp.passwordConfirm.sameAs" class="formErrText">
        {{ msgNotSameAs }}
      </div>

      <m-button class="btn-sign-up" text="Sign Up" />
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

.formErr {
  background: rgba(243, 78, 78, 0.342);
  border: 1px solid red;
}

.formErrText {
  color: red;
}
</style>