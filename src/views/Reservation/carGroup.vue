<template>
  <div id="carGroup">
    <!-- <div class="w-100"> -->
    <!-- <div class="p-16"> -->
    <el-form :rules="rules" ref="dataForm_share" :model="carGroupList" label-position="top" label-width="80px">
      <!-- 乘客姓名 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'乘客姓名'" prop="name">
          <el-input v-model="carGroupList.name" placeholder="請輸入乘客姓名"></el-input>
        </el-form-item>
      </el-col>
      <!-- 鄉鎮 -->
      <el-col :span="12">
        <el-form-item size="medium" :label="'鄉鎮'" prop="town">
          <el-select v-model="carGroupList.town" placeholder="請選擇鄉鎮">
            <el-option label="尖石鄉" value="SSTW"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <!-- 村里 -->
      <el-col :span="12">
        <el-form-item size="medium" :label="'村里'" prop="village">
          <el-input v-model="carGroupList.village" placeholder="請輸入村里"></el-input>
        </el-form-item>
      </el-col>
      <!-- 身分 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'身分'" prop="userType">
          <el-select v-model="carGroupList.userType" placeholder="請選擇身分">
            <el-option label="一般" value="一般"></el-option>
            <el-option label="學生" value="學生"></el-option>
            <el-option label="年長者" value="年長者"></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <!-- 預約日期 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'預約日期'" prop="reserveDate">
          <el-date-picker v-model="carGroupList.reserveDate" type="date" placeholder="請選擇日期" value-format="yyyy-MM-dd" :picker-options="disBeforeTime" :clearable="false"></el-date-picker>
        </el-form-item>
      </el-col>
      <!-- 上車時間 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'上車時間'" prop="fromTime">
          <el-time-select v-model="carGroupList.fromTime" :picker-options="{start: timeStartTime, step: '00:10', end: '20:00'}" placeholder="請選擇時間" :clearable="false" :disabled="!carGroupList.reserveDate">
          </el-time-select>
        </el-form-item>
      </el-col>
      <!-- 是否轉乘 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'是否轉乘'" prop="hasTransfer">
          <el-select v-model="carGroupList.hasTransfer" placeholder="請選擇是否轉乘">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <!-- 轉乘運具 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'轉乘運具'" prop="transferTraffic">
          <el-select v-model="carGroupList.transferTraffic" placeholder="請選擇是否轉乘">
            <el-option label="臺鐵" value="臺鐵"></el-option>
            <el-option label="公車客運" value="公車客運"></el-option>
            <el-option label="醫療專車" value="醫療專車"></el-option>
            <el-option label="計程車" value="計程車"></el-option>
            <el-option label="小黃公車" value="小黃公車"></el-option>
            <el-option label="幸福巴士" value="幸福巴士"></el-option>
            <el-option label="公所接駁巴士" value="公所接駁巴士"></el-option>
            <el-option label="噗噗共乘" value="噗噗共乘"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <!-- 轉乘業者 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'轉乘業者'" prop="transferOperator">
          <el-select v-model="carGroupList.transferOperator" placeholder="請選擇是否轉乘">
            <el-option label="尖石鄉DRTS" value="尖石鄉DRTS"></el-option>
            <el-option label="尖石鄉基本民行" value="尖石鄉基本民行"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <!-- 轉乘目的 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'轉乘目的'" prop="transferPurpose">
          <el-select v-model="carGroupList.transferPurpose" placeholder="請選擇是否轉乘">
            <el-option label="就醫" value="就醫"></el-option>
            <el-option label="就學" value="就學"></el-option>
            <el-option label="就養" value="就養"></el-option>
            <el-option label="日常" value="日常"></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <!-- 上車地點 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'上車地點'" prop="fromAddr">
          <el-input v-model="carGroupList.fromAddr" placeholder="請輸入上車地點" @change="getFromGeo"></el-input>
        </el-form-item>
      </el-col>
      <!-- 上車地點經度 -->
      <el-col :span="12">
        <el-form-item size="medium" :label="'上車地點經度'" prop="fromLng">
          <el-input v-model="carGroupList.fromLng" placeholder="請輸入上車地點經度"></el-input>
        </el-form-item>
      </el-col>
      <!-- 上車地點緯度 -->
      <el-col :span="12">
        <el-form-item size="medium" :label="'上車地點緯度'" prop="fromLat">
          <el-input v-model="carGroupList.fromLat" placeholder="請輸入上車地點緯度"></el-input>
        </el-form-item>
      </el-col>

      <!-- 下車地點 -->
      <el-col :span="24">
        <el-form-item size="medium" :label="'下車地點'" prop="toAddr">
          <el-input v-model="carGroupList.toAddr" placeholder="請輸入下車地點" @change="getToGeo"></el-input>
        </el-form-item>
      </el-col>
      <!-- 下車地點經度 -->
      <el-col :span="12">
        <el-form-item size="medium" :label="'下車地點經度'" prop="toLng">
          <el-input v-model="carGroupList.toLng" placeholder="請輸入下車地點經度"></el-input>
        </el-form-item>
      </el-col>
      <!-- 下車地點緯度 -->
      <el-col :span="12">
        <el-form-item size="medium" :label="'下車地點緯度'" prop="toLat">
          <el-input v-model="carGroupList.toLat" placeholder="請輸入下車地點緯度"></el-input>
        </el-form-item>
      </el-col>
    </el-form>

    <div class="w-100 mb-30 d-flex align-items-center justify-content-center">
      <el-button class="order_btn" @click="reservation">預約</el-button>
    </div>
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import api from "@/api/apis.js";

import moment from "moment";

export default {
  data() {
    return {
      disBeforeTime: {
        disabledDate(date) {
          return date.getTime() < Date.now() - 24 * 60 * 60 * 1000;
        },
      },
      carGroupList: {
        // thiId: 0,
        name: window.localStorage.getItem("userName"),
        town: "SSTW",
        village: "",
        userType: "",
        reserveDate: "",
        fromTime: "",
        fromAddr: "",
        fromLng: "",
        fromLat: "",
        toTime: "",
        toAddr: "",
        toLng: "",
        toLat: "",
        hasTransfer: "",
        transferTraffic: "",
        transferOperator: "",
        transferPurpose: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "乘客姓名不能為空",
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
        userType: [
          {
            required: true,
            message: "請選擇身分",
            trigger: "change",
          },
        ],
        reserveDate: [
          {
            required: true,
            message: "請選擇預約日期",
            trigger: "change",
          },
        ],
        fromTime: [
          {
            required: true,
            message: "請選擇預約日期",
            trigger: "change",
          },
        ],
        hasTransfer: [
          {
            required: true,
            message: "請選擇是否轉乘",
            trigger: "change",
          },
        ],
        transferTraffic: [
          {
            required: true,
            message: "請選擇轉乘運具",
            trigger: "change",
          },
        ],
        transferOperator: [
          {
            required: true,
            message: "請選擇轉乘業者",
            trigger: "change",
          },
        ],
        transferPurpose: [
          {
            required: true,
            message: "請選擇轉乘目的",
            trigger: "change",
          },
        ],
        fromAddr: [
          {
            required: true,
            message: "上車地點不能為空",
            trigger: "blur",
          },
        ],
        fromLng: [
          {
            required: true,
            message: "上車地點經度不能為空",
            trigger: "blur",
          },
        ],
        fromLat: [
          {
            required: true,
            message: "上車地點緯度不能為空",
            trigger: "blur",
          },
        ],
        toAddr: [
          {
            required: true,
            message: "下車地點不能為空",
            trigger: "blur",
          },
        ],
        toLng: [
          {
            required: true,
            message: "下車地點經度不能為空",
            trigger: "blur",
          },
        ],
        toLat: [
          {
            required: true,
            message: "下車地點緯度不能為空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    timeStartTime() {
      let time;
      if (
        this.carGroupList.reserveDate !==
        moment(new Date()).format("YYYY-MM-DD")
      ) {
        time = "06:00";
      } else {
        let nowHr = moment().format("HH");
        let nowMin =
          (Math.floor(moment().format("hh:mm").split(":")[1] / 10) + 1) * 10;

        if (nowMin == 60) {
          nowMin = "00";
          nowHr++;
        }

        time = `${nowHr}:${nowMin}`;
      }
      return time;
    },
  },
  methods: {
    // 取得上車地點座標
    getFromGeo(str) {
      this.$store.dispatch("loadingHandler", true);
      api
        .GetGeo({ _addr: str })
        .then((res) => {
          this.carGroupList.fromLng = res.data.result.lon;
          this.carGroupList.fromLat = res.data.result.lat;
          this.$store.dispatch("loadingHandler", false);
        })
        .catch((err) => {
          this.$store.dispatch("loadingHandler", false);
        });
    },
    // 取得下車地點座標
    getToGeo(str) {
      this.$store.dispatch("loadingHandler", true);
      api
        .GetGeo({ _addr: str })
        .then((res) => {
          this.carGroupList.toLng = res.data.result.lon;
          this.carGroupList.toLat = res.data.result.lat;
          this.$store.dispatch("loadingHandler", false);
        })
        .catch((err) => {
          this.$store.dispatch("loadingHandler", false);
        });
    },
    reservation() {
      this.$refs["dataForm_share"].validate((valid) => {
        if (valid) {
          this.$store.dispatch("loadingHandler", true);
          api.Orders(this.carGroupList).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "預約成功!",
              });
              this.$router.push({ name: "orderInfo" });
            } else {
              this.$message({
                type: "warning",
                message: res.data.message,
              });
            }
            this.$store.dispatch("loadingHandler", false);
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
#carGroup {
  width: 100%;
  background: #f4f3ed;
  min-height: calc(100vh - 158px);
  padding: 16px 16px 90px 16px;
  box-sizing: border-box;

  .order_btn {
    width: 240px;
    height: 40px;
    border-radius: 4px;
    background: #f38c00;
    color: white;
    margin-top: 36px;
    &:hover {
      background: white;
      color: #f38c00;
      border: 1px solid #f38c00;
    }
  }

  .el-form {
    &-item {
      margin-bottom: 0 !important;
    }
  }
}
</style>