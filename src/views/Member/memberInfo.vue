<template>
  <div id="memberInfo">
    <div class="d-none d-mb-block el-main">
      <div class="w-100">
        <!-- 會員基本資料 -->
        <div class="topCard">
          <div class="topCard_title w-100 d-flex align-items-center justify-content-between">
            <b>會員基本資料</b>
            <div class="d-flex align-items-center topCard_title-btn" @click="editMemberInfo = true" v-if="!editMemberInfo">
              <img src="@/assets/images/edit.svg" alt="" />
              <p class="m-0">修改</p>
            </div>
            <div class="d-flex align-items-center topCard_title-btn" v-else>
              <div class="d-flex align-items-center justify-content-center mr-10" @click="editMemberInfo = false">
                <i class="el-icon-close text-mainColor"></i>
                <p class="m-0">取消修改</p>
              </div>
              <div class="d-flex align-items-center justify-content-center" @click="doubleCheck = true">
                <img src="@/assets/images/save.svg" alt="" />
                <p class="m-0">儲存</p>
              </div>
            </div>
          </div>

          <div class="w-100 py-10">
            <el-row class="w-100 d-flex align-items-center flex-wrap">
              <!-- 姓名 -->
              <el-col class="p-10" :span="6">
                <div class="w-100 d-flex align-items-center justify-content-start flex-column mr-24">
                  <p class="w-100 m-0">姓名</p>
                  <p class="topCard_textborder w-100 m-0 pt-5" v-if="!editMemberInfo">
                    {{ userProfile.name }}
                  </p>
                  <el-input type="text" v-model="userProfile.name" v-else></el-input>
                </div>
              </el-col>
              <!-- 性別 -->
              <el-col class="p-10" :span="6">
                <div class="w-100 d-flex align-items-center justify-content-start flex-column mr-24">
                  <p class="w-100 m-0">性別</p>
                  <p class="topCard_textborder w-100 m-0 pt-5" v-if="!editMemberInfo">
                    {{ userProfile.sex }}
                  </p>
                  <el-select class="w-100" v-model="userProfile.sex" v-else>
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                  </el-select>
                </div>
              </el-col>
              <!-- 是否為低收入戶 -->
              <el-col class="p-10" :span="6">
                <div class="w-100 d-flex align-items-center justify-content-start flex-column mr-24">
                  <p class="w-100 m-0">是否為低收入戶</p>
                  <p class="topCard_textborder w-100 m-0 pt-5" v-if="!editMemberInfo">
                    {{ userProfile.isLowIncome }}
                  </p>
                  <el-select class="w-100" v-model="userProfile.isLowIncome" placeholder="請選擇是否為低收入戶" v-else>
                    <el-option label="是" value="是"></el-option>
                    <el-option label="否" value="否"></el-option>
                  </el-select>
                </div>
              </el-col>
              <!-- 生日 -->
              <el-col class="p-10" :span="6">
                <div class="w-100 d-flex align-items-center justify-content-start flex-column mr-24">
                  <p class="w-100 m-0">出生年月日</p>
                  <p class="topCard_textborder w-100 m-0 pt-5" v-if="!editMemberInfo">
                    {{ userProfile.birthday | moment("YYYY-MM-DD") }}
                  </p>
                  <el-date-picker v-model="userProfile.birthday" type="date" placeholder="請選擇日期" value-format="yyyy-MM-dd" :clearable="false" v-else></el-date-picker>
                </div>
              </el-col>
              <!-- 手機號碼 -->
              <el-col class="p-10" :span="6">
                <div class="w-100 d-flex align-items-center justify-content-start flex-column mr-24">
                  <p class="w-100 m-0">手機號碼</p>
                  <p class="topCard_textborder w-100 m-0 pt-5" v-if="!editMemberInfo">
                    {{ userProfile.phone }}
                  </p>
                  <el-input type="text" v-model="userProfile.phone" v-else></el-input>
                </div>
              </el-col>
              <!-- 身分 -->
              <el-col class="p-10" :span="6">
                <div class="w-100 d-flex align-items-center justify-content-start flex-column mr-24">
                  <p class="w-100 m-0">身分</p>
                  <p class="topCard_textborder w-100 m-0 pt-5" v-if="!editMemberInfo">
                    {{ userProfile.userType }}
                  </p>
                  <el-select class="w-100" v-model="userProfile.userType" placeholder="請選擇身分" v-else>
                    <el-option label="一般" value="一般"></el-option>
                    <el-option label="學生" value="學生"></el-option>
                    <el-option label="年長者" value="年長者"></el-option>
                  </el-select>
                </div>
              </el-col>
              <!-- 村里 -->
              <el-col class="p-10" :span="6">
                <div class="w-100 d-flex align-items-center justify-content-start flex-column mr-24">
                  <p class="w-100 m-0">村里</p>
                  <p class="topCard_textborder w-100 m-0 pt-5" v-if="!editMemberInfo">
                    {{ userProfile.village }}
                  </p>
                  <el-input type="text" v-model="userProfile.village" v-else></el-input>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <!-- 訂單資訊 -->
        <div class="bottomCard">
          <div class="bottomCard_title w-100 d-flex align-items-center justify-content-start">
            <b>訂單資訊</b>
          </div>
          <!-- tab -->
          <div class="w-100 pos-relative">
            <div class="tab-group mt-30">
              <div class="tablink w-100 d-flex align-items-center flex-row">
                <div class="d-flex align-items-center">
                  <div class="tabs d-flex align-items-center justify-content-center cur-pointer py-8 px-16" :class="{ tabs_active: item.value === nowChoose }" v-for="(item, index) in tabTitle" :key="'TT__' + index" @click="changeTab(item)">
                    <p class="m-0">{{ item.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-100 my-20" v-if="nowChoose === 'whiteCar'">
            <div class="w-100" v-if="whiteCarData.length > 0">
              <div class="bottomCard_orderInfo">
                <el-table :data="whiteCarData" :default-sort="{ prop: 'reserveDate', order: 'descending' }" empty-text="查無資料" style="width: 100%">
                  <el-table-column label="乘客姓名" prop="name" width="100px"></el-table-column>
                  <el-table-column label="預約時間" prop="reserveDate" width="100" sortable>
                    <template slot-scope="scope">
                      <p class="m-0">{{ scope.row.reserveDate | moment("YYYY-MM-DD") }}</p>
                      <p class="m-0">{{ scope.row.reserveDate | moment("HH:mm") }}</p>
                    </template>
                  </el-table-column>
                  <el-table-column label="鄉鎮村里" prop="village">
                    <template slot-scope="scope">
                      <p class="m-0">尖石鄉{{ scope.row.village}}</p>
                    </template>
                  </el-table-column>
                  <el-table-column label="身分" prop="userType" width="80" sortable></el-table-column>
                  <el-table-column label="轉乘原因" prop="transferPurpose" width="100" sortable></el-table-column>
                  <el-table-column label="轉乘運具" prop="transferTraffic" width="100" sortable></el-table-column>
                  <el-table-column label="轉乘業者" prop="transferOperator" width="120" sortable></el-table-column>
                  <el-table-column label="起點" prop="fromAddr"></el-table-column>
                  <el-table-column label="迄點" prop="toAddr"></el-table-column>
                  <el-table-column fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                      <el-link type="primary" slot="reference" @click="produceQRcode(scope.row.id)">
                        <b>產生QRCODE</b>
                      </el-link>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>

            <div class="w-100 mt-20" v-else>
              <div class="w-100 d-flex align-items-center justify-content-center flex-column">
                <img src="@/assets/images/noData.png" alt="查無資料" />
                <p class="m-0">查無資料</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="d-block d-mb-none">
      <div class="px-16 pt-16 pb-100">
        <!-- 姓名 -->
        <div class="infoList w-100 d-flex flex-column mb-30">
          <div class="infoList__title w-100 text-left">
            <strong>姓名</strong>
          </div>
          <div class="infoList__context w-100 text-left">
            <p class="m-0 pt-5" v-if="!editMemberInfo">
              {{ userProfile.name }}
            </p>
            <el-input type="text" v-model="userProfile.name" v-else></el-input>
          </div>
        </div>
        <!-- 性別 -->
        <div class="infoList w-100 d-flex flex-column mb-30">
          <div class="infoList__title w-100 text-left">
            <strong>性別</strong>
          </div>
          <div class="infoList__context w-100 text-left">
            <p class="m-0 pt-5" v-if="!editMemberInfo">
              {{ userProfile.sex }}
            </p>
            <el-select class="w-100" v-model="userProfile.sex" v-else>
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </div>
        </div>
        <!-- 是否為低收入戶 -->
        <div class="infoList w-100 d-flex flex-column mb-30">
          <div class="infoList__title w-100 text-left">
            <strong>是否為低收入戶</strong>
          </div>
          <div class="infoList__context w-100 text-left">
            <p class="m-0 pt-5" v-if="!editMemberInfo">
              {{ userProfile.isLowIncome == '0' ? '否': '是' }}
            </p>
            <div class="w-100" v-else>
              <el-radio v-model="userProfile.isLowIncome" label="0">否</el-radio>
              <el-radio v-model="userProfile.isLowIncome" label="1">是</el-radio>
            </div>
          </div>
        </div>
        <!-- 生日 -->
        <div class="infoList w-100 d-flex flex-column mb-30">
          <div class="infoList__title w-100 text-left">
            <strong>出生年月日</strong>
          </div>
          <div class="infoList__context w-100 text-left">
            <p class="m-0 pt-5" v-if="!editMemberInfo">
              {{ userProfile.birthday | moment("YYYY-MM-DD") }}
            </p>
            <el-date-picker v-model="userProfile.birthday" type="date" placeholder="請選擇日期" value-format="yyyy-MM-dd" :clearable="false" v-else></el-date-picker>
          </div>
        </div>
        <!-- 手機號碼 -->
        <div class="infoList w-100 d-flex flex-column mb-30">
          <div class="infoList__title w-100 text-left">
            <strong>手機號碼</strong>
          </div>
          <div class="infoList__context w-100 text-left">
            <p class="m-0 pt-5" v-if="!editMemberInfo">
              {{ userProfile.phone }}
            </p>
            <el-input type="text" v-model="userProfile.phone" v-else></el-input>
          </div>
        </div>
        <!-- 身分 -->
        <div class="infoList w-100 d-flex flex-column mb-30">
          <div class="infoList__title w-100 text-left">
            <strong>身分</strong>
          </div>
          <div class="infoList__context w-100 text-left">
            <p class="m-0 pt-5" v-if="!editMemberInfo">
              {{ userProfile.userType }}
            </p>
            <el-select class="w-100" v-model="userProfile.userType" placeholder="請選擇身分" v-else>
              <el-option label="一般" value="一般"></el-option>
              <el-option label="學生" value="學生"></el-option>
              <el-option label="年長者" value="年長者"></el-option>
            </el-select>
          </div>
        </div>
        <!-- 村里 -->
        <div class="infoList w-100 d-flex flex-column mb-30">
          <div class="infoList__title w-100 text-left">
            <strong>村里</strong>
          </div>
          <div class="infoList__context w-100 text-left">
            <p class="m-0 pt-5" v-if="!editMemberInfo">
              {{ userProfile.village }}
            </p>
            <el-input type="text" v-model="userProfile.village" v-else></el-input>
          </div>
        </div>
        <!-- 修改btn -->
        <div class="w-100 mt-10 text-center btnColor">
          <div class="d-flex align-items-center justify-content-center" @click="editMemberInfo = true" v-if="!editMemberInfo">
            <img src="@/assets/images/edit.svg" alt="" />
            <p class="m-0">修改</p>
          </div>

          <div class="w-100 d-flex align-items-center justify-content-center topCard_title-btn" v-else>
            <div class="d-flex align-items-center justify-content-center mr-30" @click="editMemberInfo = false">
              <i class="el-icon-close text-mainColor"></i>
              <p class="m-0">取消修改</p>
            </div>
            <div class="d-flex align-items-center justify-content-center" @click="doubleCheck = true">
              <img src="@/assets/images/save.svg" alt="" />
              <p class="m-0">儲存</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <el-dialog title="提示" :visible.sync="doubleCheck" width="300px">
      <span>確定要修改您的基本資料嗎？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="doubleCheck = false">取 消</el-button>
        <el-button type="primary" @click="saveUserInfo">確 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="訂單QRCODE" :visible.sync="showQrcode" width="30%" center>
      <div class="text-center" v-qr="qrValue" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showQrcode = false">關 閉</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import moment from "moment";
import api from "@/api/apis.js";

export default {
  components: { Pagination },
  data() {
    return {
      editMemberInfo: false,
      doubleCheck: false,
      getDateRange: "",
      userProfile: [],
      whiteCarData: [],
      busData: [],
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
      nowChoose: "whiteCar",
      tabTitle: [
        {
          value: "whiteCar",
          name: "白牌車",
        },
        // {
        //   value: "bus",
        //   name: "巴士",
        // },
      ],
      chooseStatus: "all",
      statusList: [
        {
          value: "all",
          text: "全部狀態",
        },
        {
          value: 1,
          text: "新訂單",
        },
        {
          value: 2,
          text: "已排班",
        },
        {
          value: 3,
          text: "已抵達",
        },
        {
          value: 4,
          text: "客上",
        },
        {
          value: 5,
          text: "已完成",
        },
        {
          value: 9,
          text: "已取消",
        },
      ],
      sexData: [
        {
          value: 1,
          label: "男",
        },
        {
          value: 2,
          label: "女",
        },
      ],

      /* QR code */
      showQrcode: false,
      qrValue: "",
    };
  },
  methods: {
    reloadUserData() {
      const listQuery = {
        page: 1,
        limit: 999,
      };
      api.GetUserInfo(listQuery).then((res) => {
        this.userProfile = res.data.data.filter(
          (resp) => resp.id === window.localStorage.getItem("userID")
        )[0];
      });
    },
    async reloadOrder() {
      const loadData = {
        Name: window.localStorage.getItem("userName"),
        page: 1,
        limit: 1000,
      };
      await api.LoadOrder(loadData).then((res) => {
        this.whiteCarData = res.data.data;
        this.$store.dispatch("loadingHandler", false);
      });
    },
    async saveUserInfo() {
      this.$store.dispatch("loadingHandler", true);
      this.doubleCheck = false;
      await api.UpdateUserInfo(this.userProfile).then((res) => {
        if (res.data.code === 200) {
          this.$message({
            type: "success",
            message: "修改成功!",
          });
          this.$store.dispatch("getNewUserName", this.userProfile.name);
          this.$store.dispatch("loadingHandler", false);
        }
      });
      this.editMemberInfo = false;
    },
    produceQRcode(id) {
      this.showQrcode = true;
      this.qrValue = "http://thi.1966.org.tw/api/Orders/Get?id=" + id;
    },
    changeTab(data) {
      this.nowChoose = data.value;
      this.chooseStatus = "all";
    },
    chooseDateRange() {
      this.reloadOrder();
    },
  },
  mounted() {
    this.$store.dispatch("loadingHandler", true);
    this.reloadUserData();
    this.reloadOrder();
  },
};
</script>

<style lang="scss">
#memberInfo {
  .el-date-editor {
    width: 100% !important;
  }
  .tab-group {
    width: 100%;
  }
  .tablink {
    border-bottom: 1px solid #bbbbbb;
  }
  .tabs {
    background: #ffffff;
    border-radius: 16px 16px 0px 0px;
    margin-right: 6px;
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

  .topCard {
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    border-radius: 16px;
    padding: 24px;
    margin-top: 36px;
    &_title {
      border-bottom: 1px solid #eeeeee;
      b {
        font-size: 20px;
        line-height: 28px;
        border-bottom: 2px solid #f38c00;
      }
      &-btn {
        color: #f38c00;
        cursor: pointer;
        p {
          padding-left: 5px;
        }
      }
    }
    &_textborder {
      border-bottom: 1px dashed #bbb;
    }
  }
  .bottomCard {
    // height: 794px;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    border-radius: 16px;
    padding: 24px;
    margin-top: 24px;
    margin-bottom: 48px;
    &_title {
      border-bottom: 1px solid #eeeeee;
      b {
        font-size: 20px;
        line-height: 28px;
        border-bottom: 2px solid #f38c00;
      }
    }
  }

  .infoList {
    &__title {
      font-size: 16px;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.85);
    }
    &__context {
      p {
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.65);
        border-bottom: 1px dashed #bbbbbb;
      }
    }
  }
  .btnColor {
    color: #f38c00;
  }

  .el-input__inner {
    padding-left: 10px;
  }
  .el-input__prefix {
    left: auto;
    right: 5px;
  }
}
</style>