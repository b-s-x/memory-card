<template>
  <div class="container">
    <card-container
    :dataCurrentItem="dataCurrentItem"
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
      dataCurrentItem: 'dataCurrentItem',
      dataSet: 'dataSet',
    })
  },

  methods: {
    async nextWord() {
      await this.$store.commit('countRaise')
      this.$store.commit('giveMeWord')
    },
  },

  async mounted() {
    await this.$store.dispatch('fetchArray');
    this.$store.commit('giveMeWord')
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

