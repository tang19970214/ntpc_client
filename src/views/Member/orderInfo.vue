<template>
  <div id="orderInfo" class="pt-4 pb-120 d-block d-mb-none">
    <!-- 白牌 -->
    <div class="w-100" v-if="this.getCar == 'whiteCar'">
      <div class="w-100" v-if="whiteCarData.length > 0">
        <div class="orderInfoList w-100 mb-10 d-flex flex-column" v-for="item in whiteCarData" :key="item.id">
          <div class="orderInfoList__top p-16">
            <el-row>
              <el-col :span="6" class="d-flex flex-column">
                <label class="mb-5">乘客姓名</label>
                <strong class="m-0">{{ item.name }}</strong>
              </el-col>
              <el-col :span="11" class="d-flex flex-column">
                <label class="mb-5">預約時間</label>
                <strong class="m-0">{{ item.toTime }}</strong>
              </el-col>
              <el-col :span="7" class="d-flex flex-column">
                <label class="mb-5">鄉鎮村里</label>
                <strong class="m-0">尖石鄉{{ item.village }}</strong>
              </el-col>
            </el-row>
            <el-row class="pt-16">
              <el-col :span="4" class="d-flex flex-column">
                <label class="mb-5">身分</label>
                <strong class="m-0">{{ item.userType }}</strong>
              </el-col>
              <el-col :span="6" class="d-flex flex-column">
                <label class="mb-5">轉乘原因</label>
                <strong class="m-0">{{ item.transferPurpose }}</strong>
              </el-col>
              <el-col :span="7" class="d-flex flex-column">
                <label class="mb-5">轉乘運具</label>
                <strong class="m-0">{{ item.transferTraffic }}</strong>
              </el-col>
              <el-col :span="7" class="d-flex flex-column">
                <label class="mb-5">轉乘業者</label>
                <strong class="m-0">{{ item.transferOperator }}</strong>
              </el-col>
            </el-row>
          </div>

          <div class="orderInfoList__local p-16">
            <div class="w-100 mb-8 d-flex flex-column">
              <div class="w-100 d-flex align-items-center flex-row">
                <img class="pl-2 pr-4" src="@/assets/images/icon/circle.png" alt="起點" width="10px" />
                <p class="m-0 font-s-12 text-mainColor">起點</p>
              </div>
              <div class="w-100 ml-16">{{ item.fromAddr }}</div>
            </div>

            <div class="w-100 d-flex flex-column">
              <div class="w-100 d-flex align-items-center flex-row">
                <img src="@/assets/images/icon/map.png" alt="迄點" width="16px" />
                <p class="m-0 font-s-12 text-mainColor">迄點</p>
              </div>
              <div class="w-100 ml-16">{{ item.toAddr }}</div>
            </div>
          </div>

          <!-- 取消訂單btn -->
          <!-- <div class="orderInfoList__delete w-100 py-8 d-flex align-items-center justify-content-center">
            <i class="el-icon-delete"></i>
            <p class="m-0">取消訂單</p>
          </div> -->
        </div>
      </div>
      <div class="w-100 mt-50 pb-150" v-else>
        <div class="w-100 d-flex align-items-center justify-content-center flex-column">
          <img src="@/assets/images/noData.png" alt="查無資料" />
          <p class="m-0">查無資料</p>
        </div>
      </div>
    </div>

    <!-- 巴士 -->
    <!-- <div class="w-100" v-if="this.getCar == 'bus'">
      <div class="w-100" v-if="busData.length > 0">
        <div
          class="orderInfoList w-100 mb-10 d-flex flex-column"
          v-for="(item, index) in filterBusStatus(busData)"
          :key="'OL_' + index"
        >
          <div class="orderInfoList__top p-16">
            <el-row class="d-flex align-items-center">
              <el-col :span="7" class="d-flex flex-column">
                <label class="mb-5">訂車日期</label>
                <p class="m-0">{{ item.date }}</p>
              </el-col>
              <el-col :span="5" class="d-flex flex-column">
                <label class="mb-5">時間</label>
                <p class="m-0">{{ item.timer }}</p>
              </el-col>
              <el-col :span="8" class="d-flex flex-column">
                <label class="mb-5">訂車人電話</label>
                <p class="m-0">{{ item.phone }}</p>
              </el-col>
              <el-col :span="4" class="d-flex align-items-center">
                <span
                  class="px-8 py-3 font-s-12"
                  :style="getOrderStatus(item.status)"
                >
                  {{ item.status }}
                </span>
              </el-col>
            </el-row>
          </div>
          <div class="orderInfoList__road">
            <div class="px-16 py-8">
              <label>路線</label>
              <strong class="ml-8">{{ item.road }}</strong>
            </div>
          </div>
          <div class="orderInfoList__local p-16">
            <div class="w-100 mb-8 d-flex flex-column">
              <div class="w-100 d-flex align-items-center flex-row">
                <img
                  class="px-4"
                  src="@/assets/images/icon/circle.png"
                  alt="起點"
                  width="8px"
                />
                <p class="m-0 font-s-12 text-mainColor">起點站牌</p>
              </div>
              <div class="w-100 ml-16">{{ item.localStart }}</div>
            </div>
            <div class="w-100 d-flex flex-column">
              <div class="w-100 d-flex align-items-center flex-row">
                <img
                  src="@/assets/images/icon/map.png"
                  alt="迄點"
                  width="16px"
                />
                <p class="m-0 font-s-12 text-mainColor">迄點站牌</p>
              </div>
              <div class="w-100 ml-16">{{ item.localEnd }}</div>
            </div>
          </div>
          <div
            class="orderInfoList__delete w-100 py-8 d-flex align-items-center justify-content-center"
          >
            <i class="el-icon-delete"></i>
            <p class="m-0">取消訂單</p>
          </div>
        </div>
      </div>
      <div class="w-100 mt-50 pb-150" v-else>
        <div
          class="w-100 d-flex align-items-center justify-content-center flex-column"
        >
          <img src="@/assets/images/noData.png" alt="查無資料" />
          <p class="m-0">查無資料</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import moment from "moment";
import api from "@/api/apis.js";

export default {
  data() {
    return {
      getStartDate: "",
      getEndDate: "",
      whiteCarData: [],
      // busData: [
      //   {
      //     date: "2016-05-03",
      //     timer: "09:00",
      //     road: "DRTS 平日線",
      //     people: "20人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "新訂單",
      //     statusCode: "new",
      //   },
      //   {
      //     date: "2016-05-02",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "13人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "已排班",
      //     statusCode: "plan",
      //   },
      //   {
      //     date: "2016-05-04",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "5人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "已抵達",
      //     statusCode: "arrive",
      //   },
      //   {
      //     date: "2016-05-01",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "20人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "客上",
      //     statusCode: "custome",
      //   },
      //   {
      //     date: "2016-05-08",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "20人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "已完成",
      //     statusCode: "finish",
      //   },
      //   {
      //     date: "2016-05-06",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "7人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "取消",
      //     statusCode: "cancel",
      //   },
      //   {
      //     date: "2016-05-07",
      //     timer: "13:00",
      //     road: "DRTS 平日線",
      //     people: "10人",
      //     localStart: "尖石鄉公所",
      //     localEnd: "薰衣草森林腳下",
      //     phone: "0987654321",
      //     status: "新訂單",
      //     statusCode: "new",
      //   },
      // ],
      getCar: "whiteCar",
      carMethod: [
        {
          value: "whiteCar",
          label: "白牌車",
        },
        // {
        //   value: "bus",
        //   label: "巴士",
        // },
      ],
      getStatus: "all",
      // statusMethod: [
      //   {
      //     value: "all",
      //     text: "全部狀態",
      //   },
      //   {
      //     value: 1,
      //     text: "新訂單",
      //   },
      //   {
      //     value: 2,
      //     text: "已排班",
      //   },
      //   {
      //     value: 3,
      //     text: "已抵達",
      //   },
      //   {
      //     value: 4,
      //     text: "客上",
      //   },
      //   {
      //     value: 5,
      //     text: "已完成",
      //   },
      //   {
      //     value: 9,
      //     text: "取消",
      //   },
      // ],
    };
  },
  methods: {
    async reload() {
      const loadData = {
        page: 1,
        limit: 1000,
      };
      await api.LoadOrder(loadData).then((res) => {
        this.whiteCarData = res.data.data.filter(
          (resp) => resp.createUserId === window.localStorage.getItem("userID")
        );
        this.$store.dispatch("loadingHandler", false);
      });
    },
  },
  mounted() {
    this.$store.dispatch("loadingHandler", true);
    this.reload();
  },
};
</script>

<style lang="scss">
#orderInfo {
  .el-row {
    .el-col {
      padding: 0;
    }
  }
  .dateBG {
    background: #fef4e5;
  }
  .orderInfoList {
    border-top: 0.5px solid #bbbbbb;
    border-bottom: 0.5px solid #bbbbbb;
    &__top {
      background: white;
      border-bottom: 0.5px solid #eeeeee;
      label {
        font-size: 12px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
      }
      p {
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.65);
      }
      strong {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }
      span {
        font-size: 16px;
        line-height: 24px;
        color: #f3411a;
        p {
          color: #f3411a;
        }
      }
    }
    &__road {
      background: white;
      label {
        font-size: 12px;
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
      }
      strong {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #3267bf;
      }
    }
    &__local {
      position: relative;
      border-top: 1px solid #eeeeee;
      border-bottom: 1px solid #eeeeee;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.65);
      background: #fafafa;

      &::before {
        content: "";
        position: absolute;
        top: 30px;
        left: 23px;
        width: 1px;
        height: 38px;
        background: #f38c00;
      }
    }
    &__delete {
      background: white;
      font-size: 16px;
      line-height: 24px;
      color: #f3411a;
    }
  }
  .el-input {
    width: 100% !important;
  }
}
</style>