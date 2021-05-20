<template>
  <div id="reservation">
    <div class="d-none d-mb-block el-main">
      <HeaderBox :titleImg="titleImg" :titleName="titleName" />
      <div class="w-100 d-flex align-items-center justify-content-center mt-30">
        <div class="tab-group">
          <div class="tablink w-100 d-flex align-items-center">
            <div class="tabs d-flex align-items-center justify-content-center cur-pointer" :class="{ tabs_active: item.value === nowChoose }" v-for="(item, index) in tabTitle" :key="'TT__' + index" @click="changeTab(item)">
              <p class="m-0">{{ item.name }}</p>
            </div>
          </div>

          <!-- content -->
          <div class="w-100">

            <!-- carGroup -->
            <div class="w-100" v-if="nowChoose === 'carGroup'">
              <div class="orderCard">
                <el-form :rules="rules_share" ref="dataForm_share" :model="carGroupList" label-position="top" label-width="80px">
                  <!-- 乘客姓名 -->
                  <el-col :span="6">
                    <el-form-item size="medium" :label="'乘客姓名'" prop="name">
                      <el-input v-model="carGroupList.name" placeholder="請輸入乘客姓名"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- 鄉鎮 -->
                  <el-col :span="6">
                    <el-form-item size="medium" :label="'鄉鎮'" prop="town">
                      <el-select v-model="carGroupList.town" placeholder="請選擇鄉鎮">
                        <el-option label="尖石鄉" value="SSTW"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <!-- 村里 -->
                  <el-col :span="6">
                    <el-form-item size="medium" :label="'村里'" prop="village">
                      <el-input v-model="carGroupList.village" placeholder="請輸入村里"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- 身分 -->
                  <el-col :span="6">
                    <el-form-item size="medium" :label="'身分'" prop="userType">
                      <el-select v-model="carGroupList.userType" placeholder="請選擇身分">
                        <el-option label="一般" value="一般"></el-option>
                        <el-option label="學生" value="學生"></el-option>
                        <el-option label="年長者" value="年長者"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <!-- 預約日期 -->
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'預約日期'" prop="reserveDate">
                      <el-date-picker v-model="carGroupList.reserveDate" type="date" placeholder="請選擇日期" value-format="yyyy-MM-dd" :picker-options="disBeforeTime" :clearable="false"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <!-- 上車時間 -->
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'上車時間'" prop="fromTime">
                      <el-time-select v-model="carGroupList.fromTime" :picker-options="{start: timeStartTime_carGroup, step: '00:10', end: '20:00'}" placeholder="請選擇時間" :clearable="false" :disabled="!carGroupList.reserveDate">
                      </el-time-select>
                    </el-form-item>
                  </el-col>
                  <!-- 是否轉乘 -->
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'是否轉乘'" prop="hasTransfer">
                      <el-select v-model="carGroupList.hasTransfer" placeholder="請選擇是否轉乘">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <!-- 轉乘運具 -->
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'轉乘運具'" :prop="checkTransfer() ? '': 'transferTraffic'">
                      <el-select v-model="carGroupList.transferTraffic" placeholder="請選擇轉乘運具" :disabled="checkTransfer()">
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
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'轉乘業者'" :prop="checkTransfer() ? '': 'transferOperator'">
                      <el-select v-model="carGroupList.transferOperator" placeholder="請選擇轉乘業者" :disabled="checkTransfer()">
                        <el-option label="尖石鄉DRTS" value="尖石鄉DRTS"></el-option>
                        <el-option label="尖石鄉基本民行" value="尖石鄉基本民行"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <!-- 轉乘目的 -->
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'轉乘目的'" :prop="checkTransfer() ? '': 'transferPurpose'">
                      <el-select v-model="carGroupList.transferPurpose" placeholder="請選擇轉乘目的" :disabled="checkTransfer()">
                        <el-option label="就醫" value="就醫"></el-option>
                        <el-option label="就學" value="就學"></el-option>
                        <el-option label="就養" value="就養"></el-option>
                        <el-option label="日常" value="日常"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <!-- 上車地點 -->
                  <el-col :span="16">
                    <el-form-item size="medium" :label="'上車地點'" prop="fromAddr">
                      <el-input v-model="carGroupList.fromAddr" placeholder="請輸入上車地點" @change="getFromGeo"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- 上車地點經度 -->
                  <el-col :span="4">
                    <el-form-item size="medium" :label="'上車地點經度'" prop="fromLng">
                      <el-input v-model="carGroupList.fromLng" placeholder="請輸入上車地點經度"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- 上車地點緯度 -->
                  <el-col :span="4">
                    <el-form-item size="medium" :label="'上車地點緯度'" prop="fromLat">
                      <el-input v-model="carGroupList.fromLat" placeholder="請輸入上車地點緯度"></el-input>
                    </el-form-item>
                  </el-col>

                  <!-- 下車地點 -->
                  <el-col :span="16">
                    <el-form-item size="medium" :label="'下車地點'" prop="toAddr">
                      <el-input v-model="carGroupList.toAddr" placeholder="請輸入下車地點" @change="getToGeo"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- 下車地點經度 -->
                  <el-col :span="4">
                    <el-form-item size="medium" :label="'下車地點經度'" prop="toLng">
                      <el-input v-model="carGroupList.toLng" placeholder="請輸入下車地點經度"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- 下車地點緯度 -->
                  <el-col :span="4">
                    <el-form-item size="medium" :label="'下車地點緯度'" prop="toLat">
                      <el-input v-model="carGroupList.toLat" placeholder="請輸入下車地點緯度"></el-input>
                    </el-form-item>
                  </el-col>
                </el-form>

                <div class="w-100 mb-30 d-flex align-items-center justify-content-center">
                  <el-button class="order_btn" @click="reservation_carGroup">預約</el-button>
                </div>
              </div>
            </div>

            <!-- new drts 0412新增 -->
            <div class="w-100" v-if="nowChoose === 'drts'">
              <div class="orderCard">
                <div class="p-20">
                  <strong class="font-s-36">前山DRTS彈性班次預約方式</strong>
                  <p class="mt-16 mb-0 font-s-24">1. 電話預約</p>
                  <ul>
                    <li>預約電話：(03)5841001分機406或408</li>
                    <li>電話預約時間：(週一至週五)上午8時起至下午16時止</li>
                  </ul>
                  <p class="mt-4 font-s-24">2. 網路預約</p>
                  <ul>
                    <li>預約網址：<a href="http://drts.hccst.gov.tw/tw_reservation.asp" target="_blank">http://drts.hccst.gov.tw/tw_reservation.asp</a></li>
                  </ul>
                  <strong class="font-s-28 mt-16">注意事項：</strong>
                  <p class="font-s-20 mt-4">如欲搭乘彈性班次，最晚須於乘車前三天提出預約</p>
                </div>
              </div>
            </div>
            <!-- drts -->
            <div class="w-100" v-if="false">
              <div class="orderCard">
                <el-form :rules="rules_drts" ref="dataForm_drts" :model="drtsList" label-position="top" label-width="80px">
                  <!-- 乘客姓名 -->
                  <el-col :span="6">
                    <el-form-item size="medium" :label="'乘客姓名'" prop="name">
                      <el-input v-model="drtsList.name" placeholder="請輸入乘客姓名"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- 鄉鎮 -->
                  <el-col :span="6">
                    <el-form-item size="medium" :label="'鄉鎮'" prop="town">
                      <el-select v-model="drtsList.town" placeholder="請選擇鄉鎮">
                        <el-option label="尖石鄉" value="SSTW"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <!-- 村里 -->
                  <el-col :span="6">
                    <el-form-item size="medium" :label="'村里'" prop="village">
                      <el-input v-model="drtsList.village" placeholder="請輸入村里"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- 身分 -->
                  <el-col :span="6">
                    <el-form-item size="medium" :label="'身分'" prop="userType">
                      <el-select v-model="drtsList.userType" placeholder="請選擇身分">
                        <el-option label="一般" value="一般"></el-option>
                        <el-option label="學生" value="學生"></el-option>
                        <el-option label="年長者" value="年長者"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <!-- 預約日期 -->
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'預約日期'" prop="reserveDate">
                      <el-date-picker v-model="drtsList.reserveDate" type="date" placeholder="請選擇日期" value-format="yyyy-MM-dd" :picker-options="disBeforeTime" :clearable="false" @change="getDate"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <!-- 上車時間 -->
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'上車時間'" prop="fromTime">
                      <el-time-select v-model="drtsList.fromTime" :picker-options="{start: timeStartTime_drts, step: '00:10', end: '20:00'}" placeholder="請選擇時間" :clearable="false" :disabled="!drtsList.reserveDate">
                      </el-time-select>
                    </el-form-item>
                  </el-col>
                  <!-- 是否轉乘 -->
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'是否轉乘'" prop="hasTransfer">
                      <el-select v-model="drtsList.hasTransfer" placeholder="請選擇是否轉乘">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <!-- 轉乘運具 -->
                  <el-col :span="8">
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
                  <el-col :span="8">
                    <el-form-item size="medium" :label="'轉乘業者'" prop="transferOperator">
                      <el-select v-model="drtsList.transferOperator" placeholder="請選擇轉乘業者">
                        <el-option label="尖石鄉DRTS" value="尖石鄉DRTS"></el-option>
                        <el-option label="尖石鄉基本民行" value="尖石鄉基本民行"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <!-- 轉乘目的 -->
                  <el-col :span="8">
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
                  <el-button class="order_btn" @click="reservation_drts">預約</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-block d-mb-none mt-90">
      <div class="w-100 pos-fixed t-0 z-999">
        <PhoneHeader :pageName="mainPageName" />
        <PhoneHeaderBox :childrenPage="childrenPage" />
      </div>
      <router-view class="pos-absolute t-0 r-0"></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBox from "@/components/HeaderBox.vue";
import PhoneHeader from "@/components/PhoneHeader.vue";
import PhoneHeaderBox from "@/components/PhoneHeaderBox.vue";

import moment from "moment";
import api from "@/api/apis.js";

export default {
  components: {
    HeaderBox,
    PhoneHeader,
    PhoneHeaderBox,
  },
  data() {
    return {
      disBeforeTime: {
        disabledDate(date) {
          return date.getTime() < Date.now() - 24 * 60 * 60 * 1000;
        },
      },
      titleImg: require("@/assets/images/headerBox/reservation.png"),
      titleName: "行程預約",
      mainPageName: "行程預約",
      childrenPage: [
        {
          imgURL: "",
          imgURL_hover: "",
          path: "carGroup",
          pageName: "共享車隊",
        },
        {
          imgURL: "",
          imgURL_hover: "",
          path: "drts",
          pageName: "DRTS",
        },
      ],
      selfPayUserId: "",
      userProfile: [],
      /* tab */
      tabTitle: [
        {
          value: "carGroup",
          name: "共享車隊",
        },
        {
          value: "drts",
          name: "DRTS",
        },
        // {
        //   value: "bus",
        //   name: "幸福巴士",
        // },
      ],
      nowChoose: "carGroup",
      /* 共享車隊 */
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
        orderStatus: "",
        hasTransfer: "",
        transferTraffic: "",
        transferOperator: "",
        transferTraffic2: "",
        transferOperator2: "",
        transferTraffic3: "",
        transferOperator3: "",
        transferPurpose: "",
        stationLineId: "",
        stationType: "共享車隊",
        contactPhone: "",
        carpoolNum: 0,
      },
      rules_share: {
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
      /* DRTS */
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
      rules_drts: {
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
    timeStartTime_carGroup() {
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
    timeStartTime_drts() {
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
    checkTransfer() {
      return () => {
        return this.carGroupList.hasTransfer !== "是" ? true : false;
      };
    },
  },
  methods: {
    changeTab(data) {
      this.nowChoose = data.value;
    },
    async reload() {
      const listQuery = {
        page: 1,
        limit: 999,
      };
      await api.GetUserInfo(listQuery).then((res) => {
        this.userProfile = res.data.data.filter(
          (resp) => resp.id === window.localStorage.getItem("userID")
        )[0];
        this.$store.dispatch("loadingHandler", false);
      });
    },
    // 共享車隊
    /* 預約 */
    reservation_carGroup() {
      this.$refs["dataForm_share"].validate((valid) => {
        if (valid) {
          this.$store.dispatch("loadingHandler", true);
          api.Orders(this.carGroupList).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "預約成功!",
              });
              this.$router.push({ name: "memberInfo" });
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
    /* 取得上車地點座標 */
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
    /* 取得下車地點座標 */
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

    // DRTS
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
      /* 取得路線名稱ID */
      const linesData = this.drtsLines.filter((res) => res.name == val)[0].id;
      /* 取得今日星期幾(轉字串) */
      const getDayOfWeek = moment(this.drtsList.reserveDate)
        .weekday()
        .toString();

      /* 取得該路線站牌 */
      api.busLinesData({ id: linesData }).then((res) => {
        let getWorkWeek = res.data.result.workWeek.split(",");

        /* 若行駛日為空 或 今日非行駛日 */
        if (
          res.data.result.workWeek == "" ||
          !getWorkWeek?.includes(getDayOfWeek)
        ) {
          this.drtsStation = null;
        } else {
          this.drtsLinesIds = res.data.result.assignLineStations;
          this.drtsStation = this.alldrtsStation.filter((item) =>
            this.drtsLinesIds.includes(item.id)
          );
        }
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
    /* 有路線名稱的情況下，改變日期就重新抓取站牌 */
    getDate(val) {
      if (!!this.drtsList.stationLineId) {
        this.getStationLines(this.drtsList.stationLineId);
      }
    },
    /* 預約 */
    reservation_drts() {
      this.$refs["dataForm_drts"].validate((valid) => {
        if (valid) {
          this.$store.dispatch("loadingHandler", true);
          api.Orders(this.drtsList).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "預約成功!",
              });
              this.$router.push({ name: "memberInfo" });
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
    this.$store.dispatch("loadingHandler", true);
    this.reload();
    this.getLines();
    this.getStations();
  },
};
</script>

<style lang="scss">
#reservation {
  position: relative;
  .tab-group {
    width: 100%;
  }
  .tablink {
    border-bottom: 1px solid #bbbbbb;
  }
  .tabs {
    width: 144px;
    height: 60px;
    background: #ffffff;
    border-radius: 16px 16px 0px 0px;
    margin-right: 8px;
    align-self: center;
    border: 1px solid #bbbbbb;
    transform: translateY(1px);
    color: rgba(0, 0, 0, 0.45);
    font-size: 20px;
    &:hover {
      background: #f38c00;
      color: white;
      border-bottom: transparent;
      border: 1px solid #f38c00;
    }
    &_active {
      background: #f38c00;
      color: white;
      border-bottom: transparent;
      border: 1px solid #f38c00;
    }
  }

  .orderCard {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    border-radius: 16px;
    margin-top: 16px;
    padding: 12px;

    .el-form-item {
      &__label {
        font-weight: bold !important;
      }
    }
  }

  .el-col {
    padding: 12px;
  }

  .el-input {
    width: 100% !important;
  }

  .el-input__inner {
    padding-left: 30px;
  }

  .el-input__prefix {
    left: auto;
    right: 5px;
  }

  .el-select {
    width: 100% !important;
  }

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
}
</style>