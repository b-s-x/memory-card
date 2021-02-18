<template>
  <div class="card-item__container">
    <div class="title">{{dataCurrentItem.translate}}</div>
    <div
    class="text"
    >{{dataCurrentItem.text}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    dataCurrentItem: { type: Object, default: () => ({}) },
  },

  methods: {
    show() {
      const elem = document.querySelector('.text')
      elem.classList.toggle('visible')
    },

    showRemove() {
      const elem = document.querySelector('.text')
      elem.classList.remove('visible')
    }
  }
}
</script>

<style lang="scss" scoped>

@import "@common";

.title {
  @extend %font-family;
  letter-spacing: 5px;
  font: {
    size: calc(34px + 1vw);
    weight: 900;
  };
}

.text {
  @extend %font-family;
  visibility: hidden;
  font: {
    size: calc(24px + 1vw);
  };
  padding-top: 30px;
}

.visible {
  visibility: visible;
}

</style>
