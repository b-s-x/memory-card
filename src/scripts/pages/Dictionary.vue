<template>
  <div class="container">
    <card-container
      :dataCurrentItem="dataCurrentItem"
      @nextWord="nextWord($event)"
    />
  </div>
</template>

<script>
import CardContainer from '@components/Dictionary/CardContainer'

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
    async nextWord(terms) {
      await this.$store.commit(terms)
      await this.$store.dispatch('sendDataToServer');
      this.$store.commit('giveMeWord')
    },
  },

  async mounted() {
    await this.$store.dispatch('fetchArray');
    this.$store.commit('giveMeWord')
  }
}

</script>

<style lang="scss" scoped>
@import "@common";

.container {
  height: calc(100vh - 3vh);
  display: grid;
  place-items: center;
}
</style>

