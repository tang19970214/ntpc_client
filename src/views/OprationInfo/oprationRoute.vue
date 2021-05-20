 <template>
  <div id="oprationInfo">
    <!-- web -->
    <div class="d-none d-mb-block el-main">
      <div id="oprationRoute" class="w-100">
        <HeaderBox :titleImg="oprationRoute.titleImg" :mainName="oprationRoute.mainName" :titleName="oprationRoute.titleName" />

        <div class="w-100 d-flex align-items-center justify-content-center mt-35">
          <div class="tab-group">
            <div class="tablink w-100 d-flex align-items-center flex-row">
              <div class="d-flex align-items-center">
                <div class="tabs d-flex align-items-center justify-content-center cur-pointer px-30" :class="{ tabs_active: item.value === nowChoose }" v-for="(item, index) in tabTitle" :key="'TT__' + index" @click="changeTab(item)">
                  <p class="m-0">{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 pt-32">
          <div class="w-100 d-flex align-items-center" v-if="nowChoose == 'drts'">
            <div class="w-100 d-flex align-items-center justify-content-center flex-column">
              <strong class="font-s-36">前山DRTS服務時間</strong>
              <p class="font-s-24">提供固定班次(定班定線)、彈性班次(可預約搭乘)</p>
              <strong class="font-s-24">固定班次如下：</strong>
              <ul class="font-s-20">
                <li class="pb-8">平日線(週二至週四) 上午8:50、下午14:20皆由內灣大橋站發車</li>
                <li class="pb-8">假日一線(週五至週日) 上午8:50、下午12:50皆由內灣大橋站發車</li>
                <li>假日二線(週五至週日) 上午10:50、下午14:50皆由內灣大橋站發車</li>
              </ul>
              <strong class="font-s-24">服務車輛</strong>
              <p class="font-s-20">前山DRTS服務車輛　車型：中巴</p>
              <el-image style="width: 500px" :src="require('@/assets/images/serviceInfo/圖片26.jpg')" fit="cover"></el-image>
              <!-- <p class="font-s-24">電話(03)5841001分機406或408(電話預約服務時間：週一至週五上午8時起至下午16時止)或是線上網路預約(網址：<a href="http://drts.hccst.gov.tw/tw_reservation.asp">http://drts.hccst.gov.tw/tw_reservation.asp</a>)</p>
              <div class="w-100 pt-16">
                <strong class="font-s-36">固定班次如下：</strong>
                <p class="m-0 font-s-24">平日線(週二至週四) 上午8:50、下午14:20皆由內灣大橋站發車</p>
                <p class="m-0 font-s-24">假日一線(週五至週日) 上午8:50、下午12:50皆由內灣大橋站發車</p>
                <p class="m-0 font-s-24">假日二線(週五至週日) 上午10:50、下午14:50皆由內灣大橋站發車</p>
              </div> -->
            </div>
          </div>

          <div class="w-100" v-if="nowChoose == 'backBasic'">
            <div class="w-100 d-flex align-items-center justify-content-between">
              <div class="w-100">
                <strong class="font-s-36">後山基本民行服務時間</strong>
                <p class=" font-s-24">皆為固定班次，民眾乘車可於時刻表指定時間站點乘車。</p>
              </div>

              <div class="w-100">
                <el-row class="text-center">
                  <el-col class="p-8" :span="12">
                    <div class="routeCard d-flex flex-column">
                      <strong class="font-s-30">秀巒一線</strong>
                      <a class="mt-10 cur-pointer" @click="openSchedule('秀巒一線', require('@/assets/images/schedule/xiuluan_new1.jpg'))">
                        <i class="el-icon-search">查看時刻表</i>
                      </a>
                    </div>
                  </el-col>
                  <el-col class="p-8" :span="12">
                    <div class="routeCard d-flex flex-column">
                      <strong class="font-s-30">秀巒二線</strong>
                      <a class="mt-10 cur-pointer" @click="openSchedule('秀巒二線', require('@/assets/images/schedule/xiuluan_new2.jpg'))">
                        <i class="el-icon-search">查看時刻表</i>
                      </a>
                    </div>
                  </el-col>
                  <el-col class="p-8" :span="12">
                    <div class="routeCard d-flex flex-column">
                      <strong class="font-s-30">玉峰一線</strong>
                      <a class="mt-10 cur-pointer" @click="openSchedule('玉峰一線', require('@/assets/images/schedule/yufeng_new1.jpg'))">
                        <i class="el-icon-search">查看時刻表</i>
                      </a>
                    </div>
                  </el-col>
                  <el-col class="p-8" :span="12">
                    <div class="routeCard d-flex flex-column">
                      <strong class="font-s-30">玉峰二線</strong>
                      <a class="mt-10 cur-pointer" @click="openSchedule('玉峰二線', require('@/assets/images/schedule/yufeng_new2.jpg'))">
                        <i class="el-icon-search">查看時刻表</i>
                      </a>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>

            <div class="w-100">
              <strong class="font-s-24">服務車輛</strong>
              <p class="font-s-20">後山基本民行服務車輛　車型：中巴</p>
              <div class="w-100 d-flex align-items-center justify-content-around">
                <el-image style="width: 500px; height: 400px" :src="require('@/assets/images/serviceInfo/圖片27.jpg')" fit="cover"></el-image>
                <el-image style="width: 500px; height: 400px" :src="require('@/assets/images/serviceInfo/圖片28.jpg')" fit="cover"></el-image>
              </div>
            </div>
          </div>

          <div class="w-100 d-flex align-items-center" v-if="nowChoose == 'backGroup'">
            <div class="w-100">
              <strong class="font-s-36">後山共乘</strong>
              <p class="font-s-26">以尖石鄉後山地區提供預約乘車服務，最晚須於乘車前一天預約，預約方式有三：</p>
              <div class="w-100 pt-16">
                <strong class="font-s-30">＊電話預約</strong>
                <p class="font-s-26">預約專線：0800-660-696 (免付費電話)</p>
                <p class="font-s-26">電話預約服務時間：週一至週五上午9：30起至下午17：00止</p>
              </div>
              <div class="w-100 pt-16">
                <strong class="font-s-30">＊LINE預約</strong>
                <p class="font-s-26">LINE預約服務時間：全年無休</p>
                <p class="font-s-26"> LINE預約QR Code連結(可搜尋@bubumatc)：</p>
                <img src="@/assets/images/QRcode.jpg" alt="" width="80px">
              </div>
              <div class="w-100 pt-16">
                <strong class="font-s-30">＊前後山平台預約</strong>
                <p class="font-s-26">通報單位預約</p>
                <p class="font-s-26">可預約通報單位：玉峰村及秀巒村村辦、文健站、學校、衛生室及教會等合作單位</p>
                <p class="font-s-26">通報單位預約服務時間：通報單位營業時間內</p>
              </div>
              <div class="pt-16">
                <el-image style="width: 100%" :src="require('@/assets/images/serviceInfo/backGroup.png')" fit="cover"></el-image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="d-block d-mb-none pb-90">
      <div class="w-100" id="phoneOprationRoute">

        <div class="selectRoute px-16 py-8">
          <el-select v-model="nowChoose" placeholder="請選擇路線" no-data-text="暫無數據">
            <el-option v-for="(item, index) in tabTitle" :key="'TT_' + index" :label="item.name" :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="p-16">
          <div class="w-100 d-flex align-items-center" v-if="nowChoose == 'drts'">
            <div class="w-100">
              <strong class="font-s-32">前山DRTS服務時間</strong>
              <p class="font-s-20">提供固定班次(定班定線)、彈性班次(可預約搭乘)</p>
              <!-- <p class="font-s-20">電話(03)5841001分機406或408(電話預約服務時間：週一至週五上午8時起至下午16時止)或是線上網路預約(網址：<a href="http://drts.hccst.gov.tw/tw_reservation.asp">http://drts.hccst.gov.tw/tw_reservation.asp</a>)</p> -->
              <div class="w-100 pt-16">
                <strong class="font-s-32">固定班次如下：</strong>
                <ul class="font-s-20 mb-28">
                  <li>平日線(週二至週四) 上午8:50、下午14:20皆由內灣大橋站發車</li>
                  <li>假日一線(週五至週日) 上午8:50、下午12:50皆由內灣大橋站發車</li>
                  <li>假日二線(週五至週日) 上午10:50、下午14:50皆由內灣大橋站發車</li>
                </ul>

                <strong class="font-s-24">服務車輛</strong>
                <p class="font-s-20">前山DRTS服務車輛　車型：中巴</p>
                <el-image style="width: 100%" :src="require('@/assets/images/serviceInfo/圖片26.jpg')" fit="cover"></el-image>
                <!-- <p class="m-0 font-s-20">平日線(週二至週四) 上午8:50、下午14:20皆由內灣大橋站發車</p>
                <p class="m-0 font-s-20">假日一線(週五至週日) 上午8:50、下午12:50皆由內灣大橋站發車</p>
                <p class="m-0 font-s-20">假日二線(週五至週日) 上午10:50、下午14:50皆由內灣大橋站發車</p> -->
              </div>
            </div>
          </div>

          <div class="w-100 d-flex align-items-center flex-column justify-content-between" v-if="nowChoose == 'backBasic'">
            <div class="w-100">
              <strong class="font-s-32">基本民行</strong>
              <p class=" font-s-20">皆為固定班次，民眾乘車可於時刻表指定時間站點乘車。</p>
            </div>

            <div class="w-100">
              <div class="routeCard d-flex align-items-center justify-content-around">
                <strong class="font-s-26">秀巒一線</strong>
                <a class="mt-10 cur-pointer" @click="openSchedule_phone('秀巒一線', require('@/assets/images/schedule/xiuluan_new1.jpg'))">
                  <i class="el-icon-search">查看時刻表</i>
                </a>
              </div>
              <div class="routeCard d-flex align-items-center justify-content-around">
                <strong class="font-s-26">秀巒二線</strong>
                <a class="mt-10 cur-pointer" @click="openSchedule_phone('秀巒二線', require('@/assets/images/schedule/xiuluan_new2.jpg'))">
                  <i class="el-icon-search">查看時刻表</i>
                </a>
              </div>
              <div class="routeCard d-flex align-items-center justify-content-around">
                <strong class="font-s-26">玉峰一線</strong>
                <a class="mt-10 cur-pointer" @click="openSchedule_phone('玉峰一線', require('@/assets/images/schedule/yufeng_new1.jpg'))">
                  <i class="el-icon-search">查看時刻表</i>
                </a>
              </div>
              <div class="routeCard d-flex align-items-center justify-content-around">
                <strong class="font-s-26">玉峰二線</strong>
                <a class="mt-10 cur-pointer" @click="openSchedule_phone('玉峰二線', require('@/assets/images/schedule/yufeng_new2.jpg'))">
                  <i class="el-icon-search">查看時刻表</i>
                </a>
              </div>
            </div>

          </div>

          <div class="w-100 d-flex align-items-center" v-if="nowChoose == 'backGroup'">
            <div class="w-100">
              <strong class="font-s-32">後山共乘</strong>
              <p class="font-s-26">以尖石鄉後山地區提供預約乘車服務，最晚須於乘車前一天預約，預約方式有三：</p>
              <div class="w-100 pt-16">
                <strong class="font-s-26">＊電話預約</strong>
                <p class="font-s-20">預約專線：0800-660-696 (免付費電話)</p>
                <p class="font-s-20">電話預約服務時間：週一至週五上午9：30起至下午17：00止</p>
              </div>
              <div class="w-100 pt-16">
                <strong class="font-s-26">＊LINE預約</strong>
                <p class="font-s-20">LINE預約服務時間：全年無休</p>
                <p class="font-s-20"> LINE預約QR Code連結(可搜尋@bubumatc)：</p>
                <img src="@/assets/images/QRcode.jpg" alt="" width="80px">
              </div>
              <div class="w-100 pt-16">
                <strong class="font-s-26">＊前後山平台預約</strong>
                <p class="font-s-20">通報單位預約</p>
                <p class="font-s-20">可預約通報單位：玉峰村及秀巒村村辦、文健站、學校、衛生室及教會等合作單位</p>
                <p class="font-s-20">通報單位預約服務時間：通報單位營業時間內</p>
              </div>
              <div class="w-100 pt-16">
                <el-image style="width: 100%" :src="require('@/assets/images/serviceInfo/backGroup.png')" fit="cover"></el-image>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- modal -->
    <div class="modal" v-if="unfoldIMG">
      <div class="modal__content">
        <div class="w-100 d-flex align-items-center justify-content-center">
          <div class="pos-relative p-40">
            <img :src="openImgPath" alt="" width="100%" />
            <div class="pos-absolute t-0 r-0">
              <div class="closeModalBtn d-flex align-items-center justify-content-center cur-pointer" @click="unfoldIMG = false">
                <i class="el-icon-close"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- web -->
    <el-dialog :title="serviceModalInfo.title" :visible.sync="openServiceModal" width="60%">
      <div class="w-100 d-flex align-items-center justify-content-center">
        <img :src="serviceModalInfo.link" :alt="serviceModalInfo.title" width="100%">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="openServiceModal = false">
          確定
        </el-button>
      </span>
    </el-dialog>

    <!-- phone -->
    <el-dialog :title="serviceModalInfo.title" :visible.sync="openServiceModal_phone" width="95%">
      <div class="w-100 d-flex align-items-center justify-content-center">
        <img :src="serviceModalInfo.link" :alt="serviceModalInfo.title" width="100%">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="openServiceModal_phone = false">
          確定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import HeaderBox from "@/components/HeaderBox.vue";

export default {
  components: {
    HeaderBox,
  },
  data() {
    return {
      oprationRoute: {
        titleImg: require("@/assets/images/headerBox/oprationInfo.png"),
        // mainName: "營運資訊",
        titleName: "服務說明",
      },
      routeList: [
        {
          imgURL: require("@/assets/images/route/route1.png"),
          imgFullURL: require("@/assets/images/route/route1_full.png"),
          title: "DRTS 平日線",
          belong: "drts",
        },
        {
          imgURL: require("@/assets/images/route/route2.png"),
          imgFullURL: require("@/assets/images/route/route2_full.png"),
          title: "DRTS 假日1線",
          belong: "drts",
        },
        {
          imgURL: require("@/assets/images/route/route3.png"),
          imgFullURL: require("@/assets/images/route/route3_full.png"),
          title: "DRTS 假日2線",
          belong: "drts",
        },
        {
          imgURL: require("@/assets/images/route/route4.png"),
          imgFullURL: require("@/assets/images/route/route4_full.png"),
          title: "基本民行（前山）",
          belong: "front",
        },
        {
          imgURL: require("@/assets/images/route/route5.png"),
          imgFullURL: require("@/assets/images/route/route5_full.png"),
          title: "新樂上水田線",
          belong: "",
        },
        {
          imgURL: require("@/assets/images/route/route6.png"),
          imgFullURL: require("@/assets/images/route/route6_full.png"),
          title: "錦屏比麟線",
          belong: "",
        },
        {
          imgURL: require("@/assets/images/route/route7.png"),
          imgFullURL: require("@/assets/images/route/route7_full.png"),
          title: "義興馬胎線",
          belong: "",
        },
        {
          imgURL: require("@/assets/images/route/route8.png"),
          imgFullURL: require("@/assets/images/route/route8_full.png"),
          title: "基本民行（後山）",
          belong: "back",
        },
      ],
      tabTitle: [
        {
          value: "drts",
          name: "前山DRTS",
        },
        {
          value: "backBasic",
          name: "後山基本民行",
        },
        {
          value: "backGroup",
          name: "後山共乘",
        },
      ],
      nowChoose: "drts",
      unfoldIMG: false,
      openImgPath: "",
      serviceModalInfo: {},
      openServiceModal: false,
      openServiceModal_phone: false,
      serviceModalInfo: {},
    };
  },
  methods: {
    changeTab(data) {
      this.nowChoose = data.value;
    },
    openSchedule(title, link) {
      this.serviceModalInfo = {
        title: title,
        link: link,
      };
      this.openServiceModal = true;
    },
    openSchedule_phone(title, link) {
      this.serviceModalInfo = {
        title: title,
        link: link,
      };
      this.openServiceModal_phone = true;
    },
    watchIMG(data) {
      this.unfoldIMG = true;
      this.openImgPath = data;
    },
  },
  computed: {
    filterRoute() {
      return (data) => {
        const drtsList = [];
        const frontList = [];
        const backList = [];
        this.routeList.filter((item, index) => {
          if (item.belong === "drts") {
            drtsList.push(item);
          } else if (item.belong === "front") {
            frontList.push(item);
          } else if (item.belong === "back") {
            backList.push(item);
          }
        });
        if (this.nowChoose === "all") {
          return data;
        } else if (this.nowChoose === "drts") {
          return drtsList;
        } else if (this.nowChoose === "front") {
          return frontList;
        } else if (this.nowChoose === "back") {
          return backList;
        }
      };
    },
  },
};
</script>

<style lang="scss">
#oprationInfo {
  #oprationRoute {
    .tab-group {
      width: 100%;
    }
    .tablink {
      border-bottom: 1px solid #bbbbbb;
      &-countMoney {
        a {
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          color: #f38c00;
        }
      }
    }
    .tabs {
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
    .pthgRouteCard {
      margin: 0 8px;
      border-bottom: 2px solid #2d2d2d;
      &__title {
        background: #2d2d2d;
        text-align: center;
        padding: 16px;
        strong {
          font-size: 18px;
          color: white;
          letter-spacing: 0.2rem;
        }
      }

      &__content {
        background: white;
        text-align: center;
        border-left: 2px solid #2d2d2d;
        border-right: 2px solid #2d2d2d;
        div {
          &:first-child {
            border-right: 2px solid #2d2d2d;
          }
        }
      }
    }
    .pthgRoadMap {
      border: 2px solid #2d2d2d;
      transition: 0.6s;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
    }

    .routeCard {
      // width: 270px;
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
      background: #ffffff;
      border: 1px solid #bbbbbb;
      border-radius: 16px;
      transition: 0.6s;
      cursor: pointer;
      // &-introduce {
      p {
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        color: rgba(0, 0, 0, 0.65);
      }
      a {
        font-size: 16px;
        line-height: 24px;
        color: #f38c00;
        // &:hover {
        //   text-decoration: underline;
        // }
        // }
      }

      &:hover {
        border: 1px solid #f38c00;
        box-sizing: border-box;
      }
    }
  }

  #phoneOprationRoute {
    .selectRoute {
      background: #fef4e5;
      .el-select {
        width: 100%;
      }
    }

    .pthgRouteCard {
      // margin: 0 8px;
      border-bottom: 2px solid #2d2d2d;
      &__title {
        background: #2d2d2d;
        text-align: center;
        padding: 16px;
        strong {
          font-size: 18px;
          color: white;
          letter-spacing: 0.2rem;
        }
      }

      &__content {
        background: white;
        text-align: center;
        border-left: 2px solid #2d2d2d;
        border-right: 2px solid #2d2d2d;
        div {
          &:first-child {
            border-right: 2px solid #2d2d2d;
          }
        }
      }
    }

    .routeCard {
      padding: 16px 0;
      margin-bottom: 16px;
      background: #ffffff;
      border: 1px solid #bbbbbb;
      border-radius: 16px;
      cursor: pointer;
      p {
        font-size: 20px;
        text-align: center;
        color: rgba(0, 0, 0, 0.65);
      }
      a {
        font-size: 16px;
        color: #f38c00;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .el-image {
    .el-image-viewer__close {
      top: 10.5rem !important;
      right: 1rem !important;
      background: white;
    }
  }

  .el-dialog__wrapper {
    .el-dialog {
      border-radius: 16px;
      .el-dialog__body {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        span {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #3267bf;
        }
        p {
          font-size: 16px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.65);
        }
        strong {
          color: #f38c00;
        }
      }
      .el-dialog__footer {
        button {
          background-color: #f38c00;
          border: 0;
        }
      }
    }
  }

  .el-button {
    background: #f38c00;
    border: 1px solid #f38c00 !important;
    color: #fff;
    &:hover {
      background: #fff !important;
      border: 1px solid #f38c00 !important;
      color: #f38c00;
    }
  }
}
</style>