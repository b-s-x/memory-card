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

$padding-height: calc(8px + 0.3vh);
$padding-width: calc(36px + 0.3vw);
$font-size: calc(12px + 0.5vw);
$main--color: black;

.btn {
  padding:  $padding-height $padding-width;
  border-radius: 20px;
  font-size: $font-size;
  letter-spacing: 3px;
  font-weight: bold;
  border: 1px solid $main--color;
  background-color: $main--color;
  color: $white;
  cursor: pointer;
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