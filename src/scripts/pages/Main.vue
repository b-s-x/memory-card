<template>
  <div class="container">
    <card-container
    :dataItem="complete"
    @nextWord="nextWord()"
    />
  </div>
</template>

<script>
import CardContainer from '@components/CardContainer'

import { mapState } from 'vuex'

const arr = [
  { text: "arise arose arisen", translate: "подниматься", count: 0 },
  { text: "awake awoke awoken", translate: "пробуждать", count: 1 },
  { text: "be was (were) been", translate: "быть", count: 2 },
]


export default {
  data() {
    return {
      dataItem: arr,
      complete: {},
    }
  },

  components: {
    CardContainer,
  },

  computed: {
    ...mapState({
      dataSets: 'dataSets',
    })
  },

  methods: {
    giveMeWord() {
      let randomIndex = Math.floor(Math.random() * this.dataItem.length);

      this.complete = {
        translate: this.dataItem[randomIndex].translate,
        content: this.dataItem[randomIndex].text,
        count: this.dataItem[randomIndex].count,
      }
    },

    nextWord() {
      this.giveMeWord()
    },
  },

  async created() {
    await this.giveMeWord()
  },

  async mounted() {
    // await this.$store.dispatch('fetchArray');
    await this.giveMeWord()
    // console.log(this.dataSets);
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

