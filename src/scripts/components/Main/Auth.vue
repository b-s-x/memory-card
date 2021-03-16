<template>
  <div class="container right-panel-active">

    <sign-up/>

    <sign-in/>

    <div class="container__overlay">
      <div class="overlay">
        <div class="overlay__panel overlay--left">
          <div class="btn-box" @click="toggle()">
            <b-button text="Sign In" />
          </div>
        </div>

        <div class="overlay__panel overlay--right">
          <div class="btn-box" @click="toggle()">
            <b-button text="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SignUp from "./SignUp"
import SignIn from "./SignIn";
import BButton from "./Button"

export default {
  components: {
    SignUp,
    SignIn,
    BButton,
  },

  methods: {
    toggle() {
      const container = document.querySelector(".container");
      container.classList.toggle("right-panel-active");
    }
  },
}
</script>

<style lang="scss" scoped>

@import "@common";

// @import "../styles/variables";
// @import "../styles/mixins";

.container {
  background-color: $white;
  border-radius: $button-radius;
  box-shadow: $shadow;
  height: $max-height;
  max-width: $max-width;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.container__overlay {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transition: $transform;
  width: 50%;
  z-index: 100;
}

.right-panel-active .container__overlay {
  transform: translateX(-100%);
}

$photo: "https://images.unsplash.com/photo-1589429152188-da4f442e177b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";

.overlay {
  background-image: url($photo);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transition: $transform;
  width: 200%;
}

.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay__panel {
  @include flex();
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 50%;
  transition: $transform;
}

//buttons move
.overlay--left {
  transform: translateX(-20%);
}

.right-panel-active .overlay--left {
  transform: translateX(0);
}

.overlay--right {
  right: 0;
  transform: translateX(0);
}

.right-panel-active .overlay--right {
  transform: translateX(20%);
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

</style>