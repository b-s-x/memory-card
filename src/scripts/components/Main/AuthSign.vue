<template>
  <div class="container" :class="{ 'panel-active': isActive }">

    <sign-up @registerUser="sentFormToStorage($event)"/>

    <sign-in @authenticationUser="sentFormToStorage($event)"/>

    <div class="container__overlay">
      <div class="overlay">

        <div class="overlay__panel overlay__left">
          <div class="btn-box" @click="toggleActiveSide()">
            <m-button text="Sign In" />
          </div>
        </div>

        <div class="overlay__panel overlay__right">
          <div class="btn-box" @click="toggleActiveSide()">
            <m-button text="Sign Up" />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import MButton from "@components/Button/MButton";

export default {
  data() {
    return {
      isActive: true,
    };
  },

  components: {
    SignUp,
    SignIn,
    MButton,
  },

  methods: {
    toggleActiveSide() {
      this.isActive = !this.isActive;
    },

    sentFormToStorage(form) {
      console.log(form);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@common";

.container {
  background: $white;
  height: clamp(50%, 70%, 80%);
  width: clamp(50%, 70%, 80%);
  position: relative;
  border-radius: 60px;

  &__overlay {
    position: absolute;
    height: 102%;
    width: 51%;
    top: -1%;
    left: 50%;
    z-index: 100;
    overflow: hidden;
    transition: $transform;
  }
}

.overlay {
  position: relative;
  height: 100%;
  width: 200%;
  left: -100%;
  background-image: url($photo);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  transition: $transform;

  &__panel {
    @include flex();
    position: absolute;
    height: 100%;
    width: 50%;
    transition: $transform;
  }
}

.panel-active .container__overlay {
  transform: translateX(-100%);
}

.panel-active .overlay {
  transform: translateX(50%);
}

//buttons move
.overlay__left {
  transform: translateX(-20%);
}

.panel-active .overlay__left {
  transform: translateX(0);
}

.overlay__right {
  right: 0;
  transform: translateX(0);
}

.panel-active .overlay__right {
  transform: translateX(20%);
}
</style>