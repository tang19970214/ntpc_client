<template>
  <div id="pagination">
    <div class="w-100 d-flex align-items-center justify-content-end">
      <a
        class="pageBtn cur-pointer d-flex align-items-center justify-content-center"
        @click="works_prev()"
      >
        <i class="el-icon-arrow-left"></i>
      </a>

      <div class="d-flex align-items-center justify-content-center">
        <span
          class="pageBtn cur-pointer d-flex align-items-center justify-content-center mx-10"
          :class="{ pageBtn__active: defaultPage === item }"
          v-for="item in pageNum"
          :key="item"
          @click="choosePage(item)"
        >
          {{ item }}
        </span>
      </div>

      <a
        class="pageBtn cur-pointer d-flex align-items-center justify-content-center"
        @click="works_next()"
      >
        <i class="el-icon-arrow-right"></i>
      </a>

      <div class="d-flex align-items-center justify-content-center ml-20">
        <p class="m-0">前往第</p>
        <div class="goPageNum mx-8">
          <el-input
            v-model="goPageNum"
            @keyup.native.enter="goToPage(goPageNum)"
          ></el-input>
        </div>
        <p class="m-0">頁</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageNum: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      defaultPage: 1,
      goPageNum: 1,
    };
  },
  methods: {
    choosePage(number) {
      this.defaultPage = number;
    },
    works_prev() {
      if (this.defaultPage > 1) {
        this.defaultPage = this.defaultPage - 1;
      }
    },
    works_next() {
      if (this.defaultPage < this.pageNum) {
        this.defaultPage = Number(this.defaultPage) + 1;
      }
    },
    goToPage(page) {
      if (page <= this.pageNum) {
        this.defaultPage = page;
      } else {
        this.$message.error({
          message: "已超出現有頁數，請重新輸入！",
        });
        this.goPageNum = "";
      }
    },
  },
};
</script>

<style lang="scss">
.pageBtn {
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 20px;
  &__active {
    border: 1px solid #f38c00;
    color: #f38c00;
    font-weight: bold;
  }
}
.goPageNum {
  width: 50px;
  .el-input {
    &__inner {
      padding: 0;
      text-align-last: center;
    }
  }
}
</style>