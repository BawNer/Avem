<template>
  <div
    class="tile-wrapper"
    @click="active ? $router.push(to) : null"
  >
    <div class="tile-content" :class="active ? 'tile__active' : 'tile__disable' ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'АTile',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    to: {
      type: String,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .tile {
    &-wrapper {
      width: 90%;
      height: 120px;
      margin: 5% 0 5% 20px;
    }
    &-content {
      width: 100%;
      height: 100%;
      border-radius: .25rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 10px 15px;
      box-sizing: border-box;
      font-size: 1.3em;
    }
    &__active {
      box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.13);
      cursor: pointer;
    }
    &__disable {
      background: transparent;
      border: 3px dashed #192F4C;
    }
  }
</style>