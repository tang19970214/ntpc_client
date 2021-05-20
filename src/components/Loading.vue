<template>
  <div class="loading" v-if="$store.state.loading">
    <div class="loading__BG"></div>
    <div class="loading__Icon">
      <div class="loading__Icon--circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss">
.loading {
  &__BG {
    z-index: 9999;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #eeeeee, $alpha: 0.8);
    opacity: 0.8;
  }
  &__Icon {
    z-index: 10000;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &--circle {
      // border: 10px solid #f38c00;
      // border-right: 10px solid transparent;
      border: 10px solid #ddd;
      border-right: 10px solid #f38c00;
      // box-shadow: 0px 0px 0 3px#f38c00;
      height: 150px;
      width: 150px;
      border-radius: 50%;
      animation: loading 1s infinite linear;
      @keyframes loading {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>