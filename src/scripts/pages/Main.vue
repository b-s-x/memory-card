<template>
  <div class="container">
    <card-container
    :dataItem="dataItem"
    @nextWord="nextWord()"
    />
  </div>
</template>

<script>
import CardContainer from '@components/CardContainer'

import { mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },

  components: {
    CardContainer,
  },

  computed: {
    ...mapGetters({
      dataItem: 'dataItem',
    })
  },

  methods: {
    nextWord() {
      this.$store.commit('giveMeWord')
    },
  },

  async mounted() {
    await this.$store.dispatch('fetchArray');
    this.nextWord()
  },
}


</script>

<style lang="scss" scoped>

@import "@common";

.container {
  height: calc( 100vh - 3vh);
  display: grid;
  place-items: center;
}

</style>

