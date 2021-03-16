<template>
    <button class="btn">
        {{text}}
    </button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "text"}
  }
}
</script>

<style lang="scss" scoped>

@import "@common";
// @import "../styles/variables";



.btn {
  background-color: black;
  border-radius: 20px;
  border: 1px solid black;
  color: $white;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}

</style>