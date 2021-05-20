<template>
  <div id="phoneHeader">
    <div class="pos-absolute goprev" v-if="firstLoad">
      <i class="el-icon-arrow-left" @click="goPrev"></i>
    </div>
    <div
      class="w-100 py-10 titlebar d-flex align-items-center justify-content-center"
    >
      <p class="m-0">{{ pageName }}</p>
    </div>
    <div
      class="pos-absolute t-0 r-0 mt-12 mr-5 signinText"
      v-if="$store.state.userToken"
    >
      <strong @click="signout">登出</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      firstLoad: !this.$store.state.firstEnter,

    };
  },
  methods: {
    goPrev() {
      this.$router.go(-1);
    },
    signout() {
      this.$confirm("確定要登出嗎？", {
        type: "warning",
      }).then((_) => {
        window.localStorage.clear();
        this.$store.state.userToken = "";
        this.$message({
          type: "success",
          message: "已成功登出!",
        });
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="scss">
#phoneHeader {
  .goprev {
    color: white;
    font-size: 22px;
    margin-top: 10px;
    margin-left: 20px;
  }
  .titlebar {
    background: #f38c00;
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
    }
  }
  .signinText {
    strong {
      font-size: 14px;
      color: white;
    }
  }
}
.el-message-box {
  width: 300px;
}
</style>