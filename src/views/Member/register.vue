<template>
  <div id="register">
    <div class="d-none d-mb-block">
      <div class="w-100 d-flex align-items-center justify-content-center">
        <div class="w-100 orderCard">
          <div class="p-30">
            <el-form :rules="rules" ref="dataForm" :model="userInfo" label-position="right" label-width="130px">
              <!-- 帳號 -->
              <el-form-item size="small" :label="'帳號'" prop="account">
                <el-input v-model="userInfo.account" placeholder="請輸入帳號"></el-input>
              </el-form-item>
              <!-- 密碼 -->
              <el-form-item size="small" :label="'密碼'" prop="password">
                <el-input v-model="userInfo.password" type="password" placeholder="請輸入密碼" :show-password="true"></el-input>
              </el-form-item>
              <!-- 姓名 -->
              <el-form-item size="small" :label="'姓名'" prop="name">
                <el-input v-model="userInfo.name" placeholder="請輸入姓名"></el-input>
              </el-form-item>
              <!-- 鄉鎮 -->
              <el-form-item size="small" :label="'鄉鎮'" prop="town">
                <el-select class="w-100" v-model="userInfo.town" no-data-text="暫無數據" placeholder="請選擇鄉鎮">
                  <el-option label="尖石鄉" value="SSTW"></el-option>
                </el-select>
              </el-form-item>
              <!-- 村里 -->
              <el-form-item size="small" :label="'村里'" prop="village">
                <el-input v-model="userInfo.village" placeholder="請輸入村里"></el-input>
              </el-form-item>
              <!-- 手機號碼 -->
              <el-form-item size="small" :label="'手機號碼'" prop="phone">
                <el-input v-model="userInfo.phone" placeholder="請輸入手機號碼"></el-input>
              </el-form-item>
              <!-- 生日 -->
              <el-form-item size="small" :label="'生日'" prop="birthday">
                <el-date-picker class="w-100" v-model="userInfo.birthday" type="date" placeholder="請選擇出生年月日" value-format="yyyy-MM-dd" :picker-options="expireTimeOption" :clearable="false"></el-date-picker>
              </el-form-item>
              <!-- 身分 -->
              <el-form-item size="small" :label="'身分'" prop="userType">
                <el-select class="w-100" v-model="userInfo.userType" no-data-text="暫無數據" placeholder="請選擇身分">
                  <el-option label="一般" value="一般"></el-option>
                  <el-option label="學生" value="學生"></el-option>
                  <el-option label="年長者" value="年長者"></el-option>
                </el-select>
              </el-form-item>
              <!-- 是否為低收入戶 -->
              <el-form-item size="small" :label="'是否為低收入戶'" prop="isLowIncome">
                <el-select class="w-100" v-model="userInfo.isLowIncome" no-data-text="暫無數據" placeholder="請選擇是否為低收入戶">
                  <el-option label="是" value="是"></el-option>
                  <el-option label="否" value="否"></el-option>
                </el-select>
              </el-form-item>
              <!-- 性別 -->
              <el-form-item size="small" :label="'性別'" prop="sex">
                <el-select class="w-100" v-model="userInfo.sex" no-data-text="暫無數據" placeholder="選擇性別">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
            </el-form>

            <div class="w-100 d-flex align-items-center justify-content-center">
              <el-button class="order_btn" @click="register">註冊</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-block d-mb-none">
      <div class="w-100">
        <div class="p-16">
          <div class="w-100 d-flex align-items-center flex-column">
            <el-form :rules="rules" ref="dataForm1" :model="userInfo" label-position="right" label-width="100px">
              <!-- 帳號 -->
              <el-form-item size="small" :label="'帳號'" prop="account">
                <el-input v-model="userInfo.account" placeholder="請輸入帳號"></el-input>
              </el-form-item>
              <!-- 密碼 -->
              <el-form-item size="small" :label="'密碼'" prop="password">
                <el-input v-model="userInfo.password" type="password" placeholder="請輸入密碼" :show-password="true"></el-input>
              </el-form-item>
              <!-- 姓名 -->
              <el-form-item size="small" :label="'姓名'" prop="name">
                <el-input v-model="userInfo.name" placeholder="請輸入姓名"></el-input>
              </el-form-item>
              <!-- 鄉鎮 -->
              <el-form-item size="small" :label="'鄉鎮'" prop="town">
                <el-select class="w-100" v-model="userInfo.town" no-data-text="暫無數據" placeholder="請選擇鄉鎮">
                  <el-option label="尖石鄉" value="SSTW"></el-option>
                </el-select>
              </el-form-item>
              <!-- 村里 -->
              <el-form-item size="small" :label="'村里'" prop="village">
                <el-input v-model="userInfo.village" placeholder="請輸入村里"></el-input>
              </el-form-item>
              <!-- 手機號碼 -->
              <el-form-item size="small" :label="'手機號碼'" prop="phone">
                <el-input v-model="userInfo.phone" placeholder="請輸入手機號碼"></el-input>
              </el-form-item>
              <!-- 生日 -->
              <el-form-item size="small" :label="'生日'" prop="birthday">
                <el-date-picker class="w-100" v-model="userInfo.birthday" type="date" placeholder="請選擇出生年月日" value-format="yyyy-MM-dd" :picker-options="expireTimeOption" :clearable="false"></el-date-picker>
              </el-form-item>
              <!-- 身分 -->
              <el-form-item size="small" :label="'身分'" prop="userType">
                <el-select class="w-100" v-model="userInfo.userType" no-data-text="暫無數據" placeholder="請選擇身分">
                  <el-option label="一般" value="一般"></el-option>
                  <el-option label="學生" value="學生"></el-option>
                  <el-option label="年長者" value="年長者"></el-option>
                </el-select>
              </el-form-item>
              <!-- 是否為低收入戶 -->
              <el-form-item size="small" :label="'是否為低收入戶'" prop="isLowIncome">
                <el-select class="w-100" v-model="userInfo.isLowIncome" placeholder="請選擇是否為低收入戶">
                  <el-option label="是" value="是"></el-option>
                  <el-option label="否" value="否"></el-option>
                </el-select>
              </el-form-item>
              <!-- 性別 -->
              <el-form-item size="small" :label="'性別'" prop="sex">
                <el-select class="w-100" v-model="userInfo.sex" placeholder="選擇性別">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
            </el-form>

            <div class="orderBtn w-100 d-flex align-items-center justify-content-center">
              <button class="w-100 py-8" @click="register_phone">註冊</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { cityAndCountiesLite, Counties } from "@/assets/taiwan";
import api from "@/api/apis.js";

export default {
  data() {
    return {
      userInfo: {
        account: "",
        password: "",
        name: "",
        thiId: "",
        town: "",
        village: "",
        phone: "",
        birthday: "",
        userType: "",
        isLowIncome: "",
        sex: "",
      },
      rules: {
        account: [
          {
            required: true,
            message: "帳號不能為空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密碼不能為空",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "姓名不能為空",
            trigger: "blur",
          },
        ],
        town: [
          {
            required: true,
            message: "請選擇鄉鎮",
            trigger: "change",
          },
        ],
        village: [
          {
            required: true,
            message: "村里不能為空",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "手機號碼不能為空",
            trigger: "blur",
          },
        ],
        birthday: [
          {
            required: true,
            message: "請選擇出生年月日",
            trigger: "change",
          },
        ],
        userType: [
          {
            required: true,
            message: "請選擇身分",
            trigger: "change",
          },
        ],
        isLowIncome: [
          {
            required: true,
            message: "請選擇是否為低收入戶",
            trigger: "change",
          },
        ],
        sex: [
          {
            required: true,
            message: "請選擇性別",
            trigger: "change",
          },
        ],
      },
      expireTimeOption: {
        disabledDate(date) {
          return date.getTime() >= Date.now();
        },
      },
      countyData: Counties,
      districtData: cityAndCountiesLite,
      checkID: false,
    };
  },
  methods: {
    register() {
      const vm = this;
      const reg_phone = /^[0]{1}[0-9]{7,}$/;
      vm.$refs["dataForm"].validate((valid) => {
        if (valid) {
          if (!reg_phone.test(vm.userInfo.phone)) {
            vm.userInfo.phone = "";
            vm.$message.error({
              message: "電話格式錯誤，請重新填寫！",
            });
          } else {
            this.$store.dispatch("loadingHandler", true);
            api.Register(vm.userInfo).then((res) => {
              console.log(res);
              if (res.data.code == 500) {
                vm.$message.error({
                  message: res.data.message,
                });
              } else if (res.data.code == 200) {
                vm.$message({
                  type: "success",
                  message:
                    "註冊成功，請至【會員專區 -> 會員登入】重新登入即可!",
                });
                vm.$router.push({ name: "signin" });
              } else {
                vm.$message.error({
                  message: "未知的錯誤，請重新嘗試！",
                });
              }
              this.$store.dispatch("loadingHandler", false);
            });
          }
        }
      });
    },
    register_phone() {
      const vm = this;
      const reg_phone = /^[0]{1}[9]{1}[0-9]{8}$/;
      vm.$refs["dataForm1"].validate((valid) => {
        if (valid) {
          if (!reg_phone.test(vm.userInfo.phone)) {
            vm.userInfo.phone = "";
            vm.$message.error({
              message: "電話格式錯誤，請重新填寫！",
            });
          } else {
            this.$store.dispatch("loadingHandler", true);
            const allProfile = {
              account: vm.userInfo.account,
              password: moment(vm.userInfo.birthday).format("YYYYMMDD"),
              name: vm.userInfo.name,
              sex: vm.userInfo.sex,
              birthday: vm.userInfo.birthday,
              phone: vm.userInfo.phone,
              county: vm.userInfo.county,
              district: vm.userInfo.district,
              addr: vm.userInfo.address,
            };
            api.Register(allProfile).then((res) => {
              if (res.data.code == 500) {
                vm.$message.error({
                  message: res.data.message,
                });
              } else if (res.data.code == 200) {
                vm.$message({
                  type: "success",
                  message:
                    "註冊成功，請至【會員專區 -> 會員登入】重新登入即可!",
                });
                vm.$router.push({ name: "signin" });
              } else {
                vm.$message.error({
                  message: "未知的錯誤，請重新嘗試！",
                });
              }
              this.$store.dispatch("loadingHandler", false);
            });
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
#register {
  .el-date-editor {
    width: 100%;
    .el-input__prefix {
      color: #888;
      left: auto;
      right: 5px;
    }
  }
  .el-input__inner {
    padding-left: 20px;
  }

  .orderCard {
    width: 40vw;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    border-radius: 16px;
    margin: 16px 0;
    &__titleText {
      p {
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.85);
      }
      span {
        font-size: 16px;
        line-height: 24px;
        color: #f3411a;
      }
    }
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