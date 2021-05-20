<template>
  <div id="contact">
    <div class="d-none d-mb-block el-main">
      <HeaderBox :titleImg="titleImg" :titleName="titleName" />
      <!-- 交通 -->
      <div class="w-100 mt-30 card">
        <div class="p-30">

          <div class="card-title">
            <p class="m-0 d-inline-flex">交通資訊</p>
          </div>

          <!-- <div class="card-body mt-25">
            <table class="w-100 card-table">
              <thead>
                <tr class="text-left">
                  <th class="p-20 w-50">大眾運輸</th>
                  <th class="p-20 w-50">自行開車</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-20">
                    高雄火車站 → 屏東火車站 → 屏東客運往三地門站 → 水門站下車 → 步行往自力路上方約20鐘到本公所。
                  </td>
                  <td class="p-20">
                    國道3號 → 長治交流道下 → 台24往內埔農工 → 187縣道進水門社區 7-ELEVEN → 屏35線忠孝路二段往上行駛 → 台灣原住民族文化園區-右轉 → 本公所。
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->

          <div class="card-body mt-25">
            <div class="w-100 card-traffic mb-15">
              <p class="m-0">開車</p>
            </div>

            <table class="w-100 card-table">
              <thead>
                <tr class="text-left">
                  <th class="p-20 w-50">南下</th>
                  <th class="p-20 w-50">北上</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-20">
                    <ul class="m-0 p-0 list-none">
                      <li class="pb-16">
                        1.
                        關西交流道下，循118縣道至關西，接台3線往橫山方向，於十分寮轉120縣道東行7公里，即達尖石鄉。全程約23公里。
                      </li>
                      <li>2. 竹林交流道下，循120縣道16公里，即達尖石鄉。</li>
                    </ul>
                  </td>
                  <td class="p-20">
                    竹林交流道下，循120縣道16公里，即達尖石鄉。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-body mt-25">
            <div class="w-100 card-traffic mb-15">
              <p class="m-0">搭車</p>
            </div>

            <table class="w-100 card-table">
              <thead>
                <tr class="text-left">
                  <th class="p-20 w-50">高鐵</th>
                  <th class="p-20 w-50">新竹客運公車</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-20">
                    <ul class="m-0 p-0 list-none">
                      <li class="pb-16">1. 於高鐵新竹站下車。</li>
                      <li class="pb-16">
                        2.
                        轉乘高鐵新竹站外的「台鐵六家站」搭台鐵區間車【內灣一六家】支線至「台鐵竹中站」後，再換搭【新竹-內灣】支線至竹東。
                      </li>
                      <li>3. 於竹東火車站轉乘客運。</li>
                    </ul>
                  </td>
                  <td class="p-20">
                    <ul class="m-0 p-0 list-none">
                      <li class="pb-16">1. 竹東往那羅線，於尖石站下車。</li>
                      <li class="pb-16">2. 竹東往梅花線，於尖石站下車。</li>
                      <li>3. 竹東往八五山線，於尖石站下車。</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- 收費 -->
      <div class="w-100 mt-30 card">
        <div class="p-30">

          <div class="card-title">
            <p class="m-0 d-inline-flex">收費方式</p>
          </div>

          <div class="card-body mt-25">
            <strong class="font-s-32">一般民眾每趟次50元，尖石鄉民憑證每趟次15元喔</strong>

            <table class="w-100 card-table mt-20">
              <thead>
                <tr class="text-left">
                  <th class="p-20 w-50">前山DRTS</th>
                  <th class="p-20 w-50">後山基本民行</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-20">
                    <el-image style="width: 100%" :src="require('@/assets/images/schedule/toll_drts.png')" fit="cover"></el-image>
                  </td>
                  <td class="p-20">
                    <el-image style="width: 100%" :src="require('@/assets/images/schedule/toll_basic.png')" fit="cover"></el-image>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <div class="w-100 mt-30 card">
        <div class="p-30">
          <div class="card-title">
            <p class="m-0 d-inline-flex">聯絡資訊</p>
          </div>
          <div class="card-content mt-30">
            <div class="d-flex align-items-center card-content-center" v-for="(item, index) in contactInfoList" :key="'CIL_' + index">
              <div>
                <img :src="item.imgURL" :alt="item.imgAlt" />
              </div>
              <div class="ml-10" v-if="item.text">
                <p class="m-0">{{ item.text }}</p>
              </div>
              <div class="w-100 ml-10 d-flex flex-column text-left" v-else>
                <p class="m-0" v-for="(items, index) in item.context" :key="'CT_' + index">
                  {{ items.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-block d-mb-none pt-90">
      <div class="w-100 pos-fixed t-0 z-999">
        <PhoneHeader :pageName="mainPageName" />
        <PhoneHeaderBox :childrenPage="childrenPage" />
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBox from "@/components/HeaderBox.vue";
import PhoneHeader from "@/components/PhoneHeader.vue";
import PhoneHeaderBox from "@/components/PhoneHeaderBox.vue";

export default {
  components: {
    HeaderBox,
    PhoneHeader,
    PhoneHeaderBox,
  },
  data() {
    return {
      titleImg: require("@/assets/images/headerBox/contact.png"),
      titleName: "關於我們",
      trafficInfo: [
        {
          traffic: "開車",
          information: [
            {
              direction: "南下",
              options: [
                {
                  context:
                    "1. 關西交流道下，循118縣道至關西，接台3線往橫山方向，於十分寮轉120縣道東行7公里，即達尖石鄉。全程約23公里。",
                },
                {
                  context: "2. 竹林交流道下，循120縣道16公里，即達尖石鄉。",
                },
              ],
            },
            {
              direction: "北上",
              options: [
                {
                  context: "竹林交流道下，循120縣道16公里，即達尖石鄉。",
                },
              ],
            },
          ],
        },
        {
          traffic: "搭車",
          information: [
            {
              direction: "高鐵",
              options: [
                {
                  context: "1. 於高鐵新竹站下車。",
                },
                {
                  context:
                    "2. 轉乘高鐵新竹站外的「台鐵六家站」搭台鐵區間車【內灣一六家】支線至「台鐵竹中站」後，再換搭【新竹-內灣】支線至竹東。",
                },
                {
                  context: "3. 於竹東火車站轉乘客運。",
                },
              ],
            },
            {
              direction: "新竹客運公車",
              options: [
                {
                  context: "1. 竹東往那羅線，於尖石站下車。",
                },
                {
                  context: "2. 竹東往梅花線，於尖石站下車。",
                },
                {
                  context: "3. 竹東往八五山線，於尖石站下車。",
                },
              ],
            },
          ],
        },
      ],
      contactInfoList: [
        {
          imgURL: require("@/assets/images/icon/address.png"),
          imgAlt: "地址",
          text: "新竹縣尖石鄉嘉樂村2鄰70號",
        },
        {
          imgURL: require("@/assets/images/icon/phone.png"),
          imgAlt: "電話",
          context: [
            {
              text: "03-5841001",
            },
          ],
        },
        {
          imgURL: require("@/assets/images/icon/fax.png"),
          imgAlt: "傳真",
          context: [
            {
              text: "03-5842301",
            },
          ],
        },
        {
          imgURL: require("@/assets/images/icon/order.png"),
          imgAlt: "訂車專線",
          context: [
            {
              text: "03-5841001#406",
            },
            {
              text: "03-5841001#408",
            },
          ],
        },
      ],

      mainPageName: "關於我們",
      childrenPage: [
        {
          imgURL: "",
          imgURL_hover: "",
          path: "trafficInfo",
          pageName: "交通資訊",
        },
        {
          imgURL: "",
          imgURL_hover: "",
          path: "tollMethod",
          pageName: "收費方式",
        },
        {
          imgURL: "",
          imgURL_hover: "",
          path: "contactInfo",
          pageName: "聯絡資訊",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#contact {
  .card {
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    border-radius: 16px;
    &-title {
      border-bottom: 1px solid #eeeeee;
      p {
        font-size: 20px;
        line-height: 28px;
        color: rgba(0, 0, 0, 0.65);
        padding-bottom: 8px;
        border-bottom: 2px solid #f38c00;
      }
    }
    &-content {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-left: 30%;
      @media (min-width: 1280px) {
        margin-left: 0;
        flex-direction: row;
        justify-content: space-around;
        & > div {
          margin-right: 20px;
        }
      }
    }
    &-traffic {
      font-size: 20px;
      line-height: 28px;
      color: #3267bf;
    }
    &-table {
      border-collapse: collapse;
      thead {
        background: #f38c00;
        color: white;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
      }
      tbody {
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.65);
      }
    }
    table,
    th,
    td {
      border: 0.5px solid #bbbbbb;
    }
  }
}
</style>