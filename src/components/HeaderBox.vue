<template>
  <div id="headerBox">
    <div class="d-none d-mb-block">
      <el-row class="h-100 d-flex align-items-start">
        <el-col :span="12" :offset="6">
          <div
            class="text-center d-flex align-items-center justify-content-center pt-60"
          >
            <img :src="titleImg" alt="" />
            <p class="titleName my-0 ml-10">{{ titleName }}</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="text-right pt-70 d-flex align-items-center justify-content-end"
          >
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item class="homePage" :to="{ path: '/' }"
                >首頁</el-breadcrumb-item
              >
              <el-breadcrumb-item v-if="mainName">{{
                mainName
              }}</el-breadcrumb-item>
              <el-breadcrumb-item class="nowPage">{{
                titleName
              }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="d-block d-mb-none">
      <div
        class="headerBox--phone w-100 d-flex align-items-center justify-content-center flex-row"
      >
        <div class="w-100 d-flex align-items-center flex-row">
          <img src="" alt="" />
          <p class="m-0"></p>
        </div>
        <div class="w-100"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleImg: {
      type: String,
      default: "test",
      require: true,
    },
    mainName: {
      type: String,
      require: false,
    },
    titleName: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss">
#headerBox {
  width: 100%;
  height: 120px;
  .title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center !important;
    justify-content: center !important;
  }
  .titleName {
    font-size: 28px;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.85);
  }
  .homePage {
    span:hover {
      color: #f38c00;
    }
  }
  .nowPage {
    span {
      color: #f38c00;
    }
  }

  .headerBox--phone {
  }
}
</style>