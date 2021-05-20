<template>
  <div id="drts">
    <div style="overflow-wrap: break-word;">
      <strong class="font-s-26">前山DRTS彈性班次預約方式</strong>
      <p class="mt-16 mb-0 font-s-24">1. 電話預約</p>
      <ul class="font-s-20">
        <li>預約電話：(03)5841001分機406或408</li>
        <li>電話預約時間：(週一至週五)上午8時起至下午16時止</li>
      </ul>
      <p class="mt-4 font-s-24">2. 網路預約</p>
      <ul class="font-s-20">
        <li>預約網址：<a href="http://drts.hccst.gov.tw/tw_reservation.asp" target="_blank">http://drts.hccst.gov.tw/tw_reservation.asp</a></li>
      </ul>
      <strong class="font-s-28 mt-16">注意事項：</strong>
      <p class="font-s-20 mt-4">如欲搭乘彈性班次，最晚須於乘車前三天提出預約</p>
    </div>

    <div v-if="false">
      <el-form :rules="rules" ref="dataForm_drts" :model="drtsList" label-position="top" label-width="80px">
        <!-- 乘客姓名 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'乘客姓名'" prop="name">
            <el-input v-model="drtsList.name" placeholder="請輸入乘客姓名"></el-input>
          </el-form-item>
        </el-col>
        <!-- 鄉鎮 -->
        <el-col :span="12">
          <el-form-item size="medium" :label="'鄉鎮'" prop="town">
            <el-select v-model="drtsList.town" placeholder="請選擇鄉鎮">
              <el-option label="尖石鄉" value="SSTW"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 村里 -->
        <el-col :span="12">
          <el-form-item size="medium" :label="'村里'" prop="village">
            <el-input v-model="drtsList.village" placeholder="請輸入村里"></el-input>
          </el-form-item>
        </el-col>
        <!-- 身分 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'身分'" prop="userType">
            <el-select v-model="drtsList.userType" placeholder="請選擇身分">
              <el-option label="一般" value="一般"></el-option>
              <el-option label="學生" value="學生"></el-option>
              <el-option label="年長者" value="年長者"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!-- 預約日期 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'預約日期'" prop="reserveDate">
            <el-date-picker v-model="drtsList.reserveDate" type="date" placeholder="請選擇日期" value-format="yyyy-MM-dd" :picker-options="disBeforeTime" :clearable="false"></el-date-picker>
          </el-form-item>
        </el-col>
        <!-- 上車時間 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'上車時間'" prop="fromTime">
            <el-time-select v-model="drtsList.fromTime" :picker-options="{start: timeStartTime, step: '00:10', end: '20:00'}" placeholder="請選擇時間" :clearable="false" :disabled="!drtsList.reserveDate">
            </el-time-select>
          </el-form-item>
        </el-col>
        <!-- 是否轉乘 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'是否轉乘'" prop="hasTransfer">
            <el-select v-model="drtsList.hasTransfer" placeholder="請選擇是否轉乘">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!-- 轉乘運具 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'轉乘運具'" prop="transferTraffic">
            <el-select v-model="drtsList.transferTraffic" placeholder="請選擇轉乘運具">
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
            <el-select v-model="drtsList.transferOperator" placeholder="請選擇轉乘業者">
              <el-option label="尖石鄉DRTS" value="尖石鄉DRTS"></el-option>
              <el-option label="尖石鄉基本民行" value="尖石鄉基本民行"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 轉乘目的 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'轉乘目的'" prop="transferPurpose">
            <el-select v-model="drtsList.transferPurpose" placeholder="請選擇轉乘目的">
              <el-option label="就醫" value="就醫"></el-option>
              <el-option label="就學" value="就學"></el-option>
              <el-option label="就養" value="就養"></el-option>
              <el-option label="日常" value="日常"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!-- 路線名稱 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'路線名稱'" prop="stationLineId">
            <el-select v-model="drtsList.stationLineId" placeholder="請選擇路線名稱" no-data-text="無數據" @change="getStationLines">
              <el-option v-for="item in drtsLines" :key="item.id" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!-- 上車站牌 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'上車站牌'" prop="fromAddr">
            <el-select v-model="drtsList.fromAddr" placeholder="請選擇上車站牌" no-data-text="無數據">
              <el-option v-for="item in drtsStation" :key="item.id" :label="item.stationName" :value="item.stationName"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!-- 下車站牌 -->
        <el-col :span="24">
          <el-form-item size="medium" :label="'下車站牌'" prop="toAddr">
            <el-select v-model="drtsList.toAddr" placeholder="請選擇下車站牌" no-data-text="無數據">
              <el-option v-for="item in drtsStation" :key="item.id" :label="item.stationName" :value="item.stationName"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-form>

      <div class="w-100 mb-30 d-flex align-items-center justify-content-center">
        <el-button class="order_btn" @click="reservation">預約</el-button>
      </div>
    </div>
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
      drtsLines: [],
      drtsLinesIds: [],
      drtsStation: [],
      alldrtsStation: [],
      drtsList: {
        name: window.localStorage.getItem("userName"),
        town: "SSTW",
        village: "",
        userType: "",
        reserveDate: "",
        fromTime: "",
        fromAddr: "",
        toAddr: "",
        hasTransfer: "",
        transferTraffic: "",
        transferOperator: "",
        transferPurpose: "",
        stationLineId: "",
        stationType: "前山DRTS",
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
        stationLineId: [
          {
            required: true,
            message: "請選擇路線名稱",
            trigger: "change",
          },
        ],
        fromAddr: [
          {
            required: true,
            message: "上車站牌不能為空",
            trigger: "blur",
          },
        ],
        toAddr: [
          {
            required: true,
            message: "下車站牌不能為空",
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
        this.drtsList.reserveDate !== moment(new Date()).format("YYYY-MM-DD")
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
    /* 取得路線 */
    getLines() {
      const lineQuery = {
        page: 1,
        limit: 999,
        key: undefined,
      };
      api.busStationLines(lineQuery).then((res) => {
        this.drtsLines = res.data.data;
      });
    },
    getStationLines(val) {
      this.$store.dispatch("loadingHandler", true);
      const linesData = this.drtsLines.filter((res) => res.name == val)[0].id;
      api.busLinesData({ id: linesData }).then((res) => {
        this.drtsLinesIds = res.data.result.assignLineStations;
        this.drtsStation = this.alldrtsStation.filter((item) =>
          this.drtsLinesIds.includes(item.id)
        );
        this.$store.dispatch("loadingHandler", false);
      });
    },
    /* 取得站牌 */
    getStations() {
      const busQuery = {
        page: 1,
        limit: 999,
        key: undefined,
      };
      api.busStations(busQuery).then((res) => {
        this.alldrtsStation = res.data.data;
      });
    },
    /* 預約 */
    reservation() {
      this.$refs["dataForm_drts"].validate((valid) => {
        if (valid) {
          api.Orders(this.drtsList).then((res) => {
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
  mounted() {
    this.getLines();
    this.getStations();
  },
};
</script>

<style lang="scss">
#drts {
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