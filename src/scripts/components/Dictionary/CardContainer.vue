<template>
  <div class="card__container">

    <quantity
      ref="quantity"
      :dataCount="dataCurrentItem.count"
    />

    <card-item
      class="card__item"
      :dataCurrentItem="dataCurrentItem"
      ref="cardItem"
    />

    <div class="button__container">
      <custom-button
        class="button"
        border
        @customClick="raise()"
        > +
      </custom-button>

      <custom-button
        class="button__long"
        upper
        @customClick="show()"
        > show
      </custom-button>

      <custom-button
        class="button"
        border
        @customClick="decline()"
        > -
      </custom-button>
    </div>

  </div>


</template>

<script>

import CardItem from '@components/Dictionary/CardItem'
import CustomButton from "@components/Dictionary/CustomButton"
import Quantity from "@components/Dictionary/Quantity"

export default {
  components: {
    CardItem,
    CustomButton,
    Quantity,
  },

  props: {
    dataCurrentItem: { type: Object, default: () => ({}) },
  },

  methods: {
    raise() {
      this.$refs.quantity.raise()
      this.$refs.cardItem.showRemove()
      this.$emit('nextWord', 'countRaise')
    },

    decline() {
      this.$refs.quantity.decline()
      this.$refs.cardItem.showRemove()
      this.$emit('nextWord', 'countDecline')
    },

    show() {
      this.$refs.cardItem.show()
    },

  },
}
</script>

<style lang="scss" scoped>

@import "@common";

.card__container {
  position: relative;
  width: clamp(410px, 40%, 70%);
  box-shadow: $card-shadow;
  border-radius: 20px;
  padding: 40px;
}

.button__container {
  display: flex;
  padding-top: 30px;
  height: calc(50px + 0.5vh);
}

.button {
  margin: 0 10px;
  flex: 1 0;

  &__long {
    flex: 2 0;
  }
}

</style>
