 <template>
  <div id="serviceInfo">
    <!-- web -->
    <div class="d-none d-mb-block el-main">
      <div id="serviceRoute" class="w-100">
        <HeaderBox :titleImg="serviceRoute.titleImg" :mainName="serviceRoute.mainName" :titleName="serviceRoute.titleName" />

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

        <div class="w-100 mt-20">
          <el-row class="mb-20 d-flex align-items-center justify-content-center" v-for="item in filterRoute(serviceList)" :key="item.id">
            <el-col :span="12">
              <img :src="item.imgPath" :alt="item.title" width="100%">
            </el-col>
            <el-col :span="12">
              <div class="px-20">
                <strong class="font-s-36">{{item.title}}</strong>
                <p class="font-s-24">{{item.context}}</p>
                <strong class="font-s-24" v-if="!!item.service">服務範圍：</strong>
                <p class="font-s-22 mt-4">{{item.service}}</p>
                <strong>資料來源：</strong>
                <div class="w-100 pt-8 d-flex align-items-center">
                  <p class="m-0">{{item.linkTitle}}</p>
                  <a class="ml-8" :href="item.link" target="_blank">{{item.link}}</a>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- phone -->
    <div class="d-block d-mb-none">
      <div class="w-100" id="phoneserviceRoute">

        <div class="selectRoute px-16 py-8">
          <el-select v-model="nowChoose" placeholder="請選擇路線" no-data-text="暫無數據">
            <el-option v-for="(item, index) in tabTitle" :key="'TT_' + index" :label="item.name" :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="p-8 bg-white">
          <el-row class="mb-20" v-for="item in filterRoute(serviceList)" :key="item.id">
            <div class="d-flex align-items-center justify-content-center">
              <el-col :span="12">
                <el-image class="w-100" :src="item.imgPath" :preview-src-list="[item.imgPath]" :alt="item.title" width="100%"></el-image>
              </el-col>
              <el-col :span="12">
                <div class="px-20">
                  <strong class="font-s-20">{{item.title}}</strong>
                </div>
              </el-col>
            </div>
            <el-col :span="24">
              <div class="p-8">
                <p class="mt-0">{{item.context}}</p>
                <strong class="font-s-18" v-if="!!item.service">服務範圍：</strong>
                <p class="mt-0">{{item.service}}</p>
                <strong>資料來源：</strong>
                <p class="m-4">{{item.linkTitle}}</p>
                <a class="ml-8" :href="item.link" target="_blank">{{item.link}}</a>
              </div>
            </el-col>
          </el-row>
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
      serviceRoute: {
        titleImg: require("@/assets/images/headerBox/News.png"),
        titleName: "服務介紹",
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
      serviceList: [
        {
          id: 1,
          value: "backBasic",
          imgPath: require("@/assets/images/serviceInfo/basic.png"),
          title: "後山基本民行服務介紹",
          context:
            "新竹縣政府、尖石鄉公所於103、104年起，配合交通部公路總局執行「公路公共運輸提昇計畫」，推出基本民行運輸路線。後山地區基本民行路線包含： 「玉峰1、2線」與「秀巒1、2線」，以服務後山2村居民往返尖石鄉公所與竹東地區，滿足鄉民日常就學、就醫、採購等基本生活的交通需求為主！",
          service:
            "以後山地區秀巒村、玉峰村往返尖石鄉公所、內灣、竹東市區等為服務範圍。",
          linkTitle: "新竹縣尖石鄉公所網站",
          link: "http://www.hccst.gov.tw/home.php",
        },
        {
          id: 2,
          value: "drts",
          imgPath: require("@/assets/images/serviceInfo/drts.png"),
          title: "前山DRTS觀光公車服務介紹",
          context:
            "尖石鄉公所自106年起，再推出DRTS觀光公車，由內灣車站行駛竹120縣道、竹60、竹62環狀聯絡道，沿途經過薰衣草森林、峇里森林溫泉渡假村、6號花園、數碼天空、那羅部落香草園區、錦屏大橋等景點。並針對偏鄉供電及訊號運輸不便情形，逐步建置「潔能智慧站牌」，以手搖發電方式顯示公車動態，並提供DRTS營運預約平台，以網頁及APP進行數位化的預約及服務派遣。",
          service:
            "以前山地區眾多著名景點為服務範圍。由內灣車站行駛竹120縣道、竹60、竹62環狀聯絡道，沿途經過薰衣草森林、峇里森林溫泉渡假村、6號花園、數碼天空、那羅部落香草園區、錦屏大橋等景點。",
          linkTitle: "尖石鄉公所DRTS預約訂車平台",
          link: "http://drts.hccst.gov.tw/tw_index.asp?1",
        },
        {
          id: 3,
          imgPath: require("@/assets/images/serviceInfo/pupuInfo.jpg"),
          value: "backGroup",
          title: "後山噗噗共乘服務介紹",
          context:
            "後山噗噗共乘服務是一種以部落在地多元車輛(包含：在地單位車輛、後山居民自用車輛等)，代替公車提供交通接送的服務模式。搭乘方式皆採預約制，並由專人在接獲預約後，協助媒合在地多元車輛，提供尖石鄉後山地區生活圈之範圍內(最遠到那羅)，點到點之接送服務。藉以突破後山地區部落分散之限制，完善後山學生通勤就學、居民與長輩跨部落就醫、採買、探親與洽公等短程之交通需求，或是無縫轉乘聯外大眾運輸往返竹東等地區之需要。噗噗共乘服務有以下幾項特點：叫車方便：只要一通電話，或是Line線上留言即可叫車服務範圍廣：後山部落間可直達往返，或媒合無縫轉乘到尖石鄉公所、竹東市區等範圍，滿足您食衣住行育樂之所需客製化服務：針對您申請的目的地與時間，協助派車或規劃轉乘台鐵、客運往返結伴共乘：媒合2人以上共乘，接送您與部落鄰里共同搭車，可結識部落新朋友",
          linkTitle: "尖石鄉噗噗共乘範圍",
          link: "",
        },
      ],
      nowChoose: "drts",
      unfoldIMG: false,
      openImgPath: "",
    };
  },
  methods: {
    changeTab(data) {
      this.nowChoose = data.value;
    },
    watchIMG(data) {
      this.unfoldIMG = true;
      this.openImgPath = data;
    },
  },
  computed: {
    filterRoute() {
      return (data) => {
        return data.filter((res) => res.value == this.nowChoose);
      };
    },
  },
};
</script>

<style lang="scss">
#serviceInfo {
  #serviceRoute {
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
      width: 270px;
      background: #ffffff;
      border: 1px solid #bbbbbb;
      border-radius: 16px;
      cursor: pointer;
      &-introduce {
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
          &:hover {
            text-decoration: underline;
          }
        }
      }

      &:hover {
        border: 2px solid #f38c00;
        box-sizing: border-box;
      }
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

  #phoneserviceRoute {
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
      background: #ffffff;
      border: 1px solid #bbbbbb;
      border-radius: 16px;
      cursor: pointer;
      &-introduce {
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
          &:hover {
            text-decoration: underline;
          }
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