<template>
  <div class="quantity__container">
    <div
      class="quantity__item"
      v-for="n of 5"
      :key="n"
      :class="{active: count >= n }"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: this.dataCount,
    }
  },

  props: {
    dataCount: { type: Number },
  },

  methods: {
    raise() {
      this.count++;
      this.count = this.dataCount
      console.log(this.dataCount);
    },

    decline() {
      this.count--
    },
  },

}
</script>

<style lang="scss" scoped>

.quantity {
  &__container {
    display: flex;
    position: absolute;
    right: 40px;
    top: 30px;
  }

  &__item {
    margin: 0 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid black;
  }
}

.active {
  background: black;
  border-radius: 50%;
}

</style>
