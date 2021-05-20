<template>
  <div id="phoneHeaderBox">
    <div
      class="childrenTag w-100 d-flex align-items-center justify-content-center flex-row"
    >
      <div
        class="w-100 py-12 d-flex align-items-center justify-content-center flex-row"
        :class="{ 'childrenTag-active': item.path === $route.name }"
        v-for="(item, index) in childrenPage"
        :key="'CP_' + index"
        @click="goPage(item)"
      >
        <div class="d-flex align-items-center justify-content-center">
          <img :src="item.imgURL" alt="" />
          <img :src="item.imgURL_hover" alt="" />
        </div>

        <p class="m-0">{{ item.pageName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    childrenPage: {
      type: Array,
      require: true,
    },
  },
  methods: {
    goPage(data) {
      this.$router.push(data.path);
    },
  },
};
</script>

<style lang="scss">
#phoneHeaderBox {
  .childrenTag {
    background: white;
    border-bottom: 1px solid #EEEEEE;
    img:last-child {
      display: none;
    }
    &-active {
      border-bottom: 2px solid #f38c00;
      color: #f38c00;
      img {
        &:first-child {
          display: none;
        }
        &:last-child {
          display: block;
        }
      }
    }
  }
}
</style>