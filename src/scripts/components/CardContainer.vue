<template>
  <div class="card__container">

    <quantity
      class="one"
      ref="quantity"
      :dataCount="dataItem.count"
    />

    <card-item
      class="card__item"
      :dataItem="dataItem"
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

import CardItem from '@components/CardItem'
import CustomButton from "@components/CustomButton"
import Quantity from "@components/Quantity"

export default {
  components: {
    CardItem,
    CustomButton,
    Quantity,
  },

  props: {
    dataItem: { type: Object, default: () => ({}) },
  },

  methods: {
    raise() {
      this.$refs.quantity.raise()
      this.$refs.cardItem.showRemove()
      this.$emit('nextWord')
    },

    decline() {
      this.$refs.quantity.decline()
      this.$refs.cardItem.showRemove()
      this.$emit('nextWord')
    },

    show() {
      this.$refs.cardItem.show()
    }
  },
}
</script>

<style lang="scss" scoped>

@import "@common";

$card-shadow: -8px 6px 57px -1px rgba(34, 60, 80, 0.59);

.card__container {
  position: relative;
  width: clamp(410px, 40%, 70%);
  box-shadow: $card-shadow;
  border-radius: 20px;
  padding: 40px;
  min-height: 210px;
}

.button__container {
  @include flex();
  padding-top: 30px;
}

.button {
  padding: 0 30px;
  margin: 0 10px;

  &__long {
    padding: 0 50px;
  }
}

</style>
