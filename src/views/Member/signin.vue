<template>
  <div id="signin">
    <div class="d-none d-mb-block">
      <div class="w-100 d-flex align-items-center justify-content-center">
        <div class="w-100 orderCard">
          <div class="p-30">
            <div class="w-100 mb-24">
              <div class="d-flex align-items-center flex-column">
                <div class="w-100">
                  <p class="m-0">帳號</p>
                </div>
                <div class="w-100">
                  <el-input v-model="userInfo.account" prefix-icon="el-icon-user"></el-input>
                </div>
              </div>
            </div>
            <div class="w-100 mb-24">
              <div class="d-flex align-items-center flex-column">
                <div class="w-100">
                  <p class="m-0">密碼</p>
                </div>
                <div class="w-100">
                  <el-input v-model="userInfo.password" type="password" prefix-icon="el-icon-lock" :show-password="true" @keyup.enter.native="signin"></el-input>
                </div>
              </div>
            </div>

            <div class="w-100 d-flex align-items-center justify-content-center">
              <el-button class="order_btn" @click="signin">登入</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-block d-mb-none">
      <div class="w-100">
        <div class="p-16">
          <div class="w-100 d-flex align-items-center flex-column">
            <div class="orderList w-100 d-flex align-items-center flex-column mb-15">
              <div class="w-100 d-flex align-items-center flex-row">
                <strong>帳號</strong>
              </div>
              <div class="w-100">
                <el-input v-model="userInfo.account" prefix-icon="el-icon-user"></el-input>
              </div>
            </div>

            <div class="orderList w-100 d-flex align-items-center flex-column mb-24">
              <div class="w-100 d-flex align-items-center flex-row">
                <strong>密碼</strong>
              </div>
              <div class="w-100">
                <el-input v-model="userInfo.password" prefix-icon="el-icon-lock" :show-password="true" @keyup.enter.native="signin"></el-input>
              </div>
            </div>

            <div class="orderBtn w-100 d-flex align-items-center justify-content-center">
              <button class="w-100 py-8" @click="signin">登入</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/apis.js";

export default {
  data() {
    return {
      userInfo: {
        account: "",
        password: "",
        appKey: "SYS_USER_CLIENT",
      },
    };
  },
  mounted() {
    api
      .GetLoginStatus()
      .then((result) => {
        this.$router.push("memberInfo");
      })
      .catch((error) => {});
  },
  methods: {
    signin() {
      if (this.userInfo.account == "" || this.userInfo.password == "") {
        this.$message({
          message: "帳號或密碼尚未輸入",
          type: "warning",
        });
      } else {
        this.$store.dispatch("loadingHandler", true);
        api.Login(this.userInfo).then((data) => {
          if (data.data.code === 200) {
            window.localStorage.setItem("tokenClient", data.data.token);
            this.getUserId();
            this.$message({
              message: "登入成功！",
              type: "success",
            });
          } else {
            this.$message.error({
              message: data.data.message,
            });
          }
          this.$store.dispatch("loadingHandler", false);
        });
      }
    },
    getUserId() {
      api.GetUserProfile().then((data) => {
        window.localStorage.setItem("userID", data.data.result.id);
        window.localStorage.setItem("userName", data.data.result.name);
        window.location.reload();
      });
    },
  },
};
</script>

<style lang="scss">
#signin {
  .orderCard {
    width: 40vw;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    border-radius: 16px;
    margin-top: 16px;
  }
  .order_btn {
    width: 240px;
    height: 40px;
    border-radius: 4px;
    background: #f38c00;
    color: white;
    margin-left: 12px;
    margin-right: 12px;
    &:hover {
      background: white;
      color: #f38c00;
      border: 1px solid #f38c00;
    }
  }

  .orderList {
    strong {
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.85);
    }
  }
  .orderBtn {
    button {
      border: 0;
      background: #f38c00;
      border-radius: 4px;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
  }
}
</style>