 <template>
  <div id="oprationInfo">
    <div class="d-none d-mb-block el-main">
      <div id="tollMethod" class="w-100">
        <HeaderBox :titleImg="tollMethod.titleImg" :mainName="tollMethod.mainName" :titleName="tollMethod.titleName" />

        <!-- <div class="w-100 mt-30 card">
          <div class="p-30">
            <div class="card-title">
              <strong class="d-inline-flex">
                瑪家鄉 收費方式
              </strong>
            </div>

            <div class="w-100 mt-25">
              <el-row class="text-center">
                <el-col :span="3" v-for="item in local" :key="item.id">
                  <div class="">{{item.label}}</div>
                </el-col>
              </el-row>

              <img src="@/assets/images/payMethod/payMethod1.jpg" alt="" width="100%">
              <img src="@/assets/images/payMethod/payMethod2.jpg" alt="" width="100%">
            </div>
          </div>
        </div> -->

        <div class="w-100 mt-30 card">
          <div class="p-30">
            <div class="card-title">
              <p class="m-0 d-inline-flex">
                基本民行 尖石鄉電子票卡申請資格及操作方式表
              </p>
            </div>
            <div class="w-100 mt-25">
              <table class="w-100 card-table">
                <thead>
                  <tr class="text-left">
                    <th class="p-20" colspan="2">回饋對象</th>
                    <th class="p-20">資格限制</th>
                    <th class="p-20">票價</th>
                    <th class="p-20">收費路段</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-20" rowspan="2">敬老愛心卡</td>
                    <td class="p-20">本鄉鄉民</td>
                    <td class="p-20">55歲以上</td>
                    <td class="p-20">免費搭乘</td>
                    <td class="p-20">全線免收費搭乘</td>
                  </tr>
                  <tr>
                    <td class="p-20">外來旅客</td>
                    <td class="p-20">65歲以上</td>
                    <td class="p-20">50元/次</td>
                    <td class="p-20">
                      <ul class="m-0 p-0 list-none">
                        <li>1. 竹東-尖石鄉公所 15元/段</li>
                        <li>2. 尖石鄉公所-宇老 15元/段</li>
                        <li>3. 宇老-部落終點站 20元/段</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td class="p-20" colspan="2">學生卡</td>
                    <td class="p-20">0歲-20歲</td>
                    <td class="p-20">10元/次</td>
                    <td class="p-20">全線/10元</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td class="p-20" colspan="2">本鄉鄉民</td>
                    <td class="p-20">20歲-55歲</td>
                    <td class="p-20">15元/次</td>
                    <td class="p-20">全線/15元</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td class="p-20" colspan="2">外來旅客</td>
                    <td class="p-20">0歲-65歲以下</td>
                    <td class="p-20">100元/次</td>
                    <td class="p-20">
                      <ul class="m-0 p-0 list-none">
                        <li>1. 竹東-尖石鄉公所 30元/段</li>
                        <li>2. 尖石鄉公所-宇老 30元/段</li>
                        <li>3. 宇老-部落終點站 40元/段</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-remark w-100 d-flex align-items-center flex-column">
              <div class="w-100 mt-25 d-flex align-items-center justify-content-center">
                <p class="m-0">備註</p>
                <img src="@/assets/images/icon/blueLine.png" alt="" width="100%" height="1px" />
              </div>
              <div class="w-100 py-20">
                <ul class="d-flex align-items-center">
                  <li class="ml-25">向鄉公所購買電子票卡</li>
                  <li class="ml-50">採單趟搭乘1次收費(當地居民)</li>
                  <li class="ml-50">採三段式收費(外來旅客)</li>
                </ul>
              </div>
              <div class="w-100">
                <img src="@/assets/images/icon/blueLine.png" alt="" width="100%" height="1px" />
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 mt-30 card">
          <div class="p-30">
            <div class="card-title">
              <p class="m-0 d-inline-flex">尖石鄉（DRTS觀光線）收費表</p>
            </div>
            <div class="w-100 mt-25">
              <table class="w-100 card-table">
                <thead>
                  <tr class="text-left">
                    <th class="p-20" colspan="2">回饋對象</th>
                    <th class="p-20">資格限制</th>
                    <th class="p-20">票價</th>
                    <th class="p-20">收費路段</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-20" rowspan="2">敬老愛心卡</td>
                    <td class="p-20">本鄉鄉民</td>
                    <td class="p-20">55歲以上</td>
                    <td class="p-20">免費搭乘</td>
                    <td class="p-20" rowspan="2">全線免收費搭乘</td>
                  </tr>
                  <tr>
                    <td class="p-20">外來旅客</td>
                    <td class="p-20">65歲以上</td>
                    <td class="p-20">免費搭乘</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td class="p-20" colspan="2">學生卡</td>
                    <td class="p-20">0歲-20歲</td>
                    <td class="p-20">10元/次</td>
                    <td class="p-20">全線/10元</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td class="p-20" colspan="2">本鄉鄉民</td>
                    <td class="p-20">20歲-55歲</td>
                    <td class="p-20">15元/次</td>
                    <td class="p-20">全線/15元</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td class="p-20" colspan="2">外來旅客</td>
                    <td class="p-20">0歲-65歲以下</td>
                    <td class="p-20">50元/次</td>
                    <td class="p-20">全線/50元</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-remark w-100 d-flex align-items-center flex-column">
              <div class="w-100 mt-25 d-flex align-items-center justify-content-center">
                <p class="m-0">備註</p>
                <img src="@/assets/images/icon/blueLine.png" alt="" width="100%" height="1px" />
              </div>
              <div class="w-100 py-20">
                <ul class="d-flex align-items-center">
                  <li class="ml-25">本鄉鄉民可向鄉公所購買電子票卡</li>
                  <li class="ml-50">採單趟搭乘1次收費</li>
                </ul>
              </div>
              <div class="w-100">
                <img src="@/assets/images/icon/blueLine.png" alt="" width="100%" height="1px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-block d-mb-none pb-60">
      <div class="w-100" id="phonePayMethod">
        <div class="px-16 py-32 d-flex align-items-center flex-column">
          <!-- <img src="@/assets/images/payMethod/payMethod1.jpg" alt="" width="100%">
          <img src="@/assets/images/payMethod/payMethod2.jpg" alt="" width="100%"> -->
          <div class="w-100 d-flex align-items-center flex-column">
            <div class="w-100 titleText">
              <p class="m-0">基本民行 尖石鄉電子票卡申請資格及操作方式表</p>
            </div>

            <div class="overflow-x w-100 mt-15 d-flex align-items-center">
              <div class="w-100 ticketCard my-5 d-flex align-items-center flex-column" v-for="(item, index) in ticketInfo" :key="'TI_' + index">
                <div class="w-100">
                  <div class="ticketCard-title p-16 d-flex align-items-center flex-row">
                    <strong>{{ item.title }}</strong>
                    <p class="m-0">{{ item.role }}</p>
                  </div>
                </div>
                <el-divider class="m-0" />
                <div class="w-100 ticketCard-content">
                  <div class="p-16 d-flex align-items-center flex-column">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div class="w-100 d-flex flex-column text-left">
                        <p class="m-0">資格限制</p>
                        <p class="m-0">{{ item.options.age }}</p>
                      </div>
                      <div class="w-100 d-flex flex-column text-left">
                        <p class="m-0">票價</p>
                        <p class="m-0">{{ item.options.price }}</p>
                      </div>
                    </div>
                    <div class="w-100 d-flex align-items-center flex-column mt-15">
                      <div class="w-100 d-flex flex-column text-left">
                        <p class="m-0">收費路段</p>
                        <ul class="m-0 p-0 list-none">
                          <li v-for="(items, index) in item.options.tollRoad" :key="'TR_' + index">
                            {{ items.text }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-100 mt-25">
              <div class="remark w-100 d-flex align-items-center flex-column">
                <div class="w-100 mb-5 d-flex align-items-center flex-row">
                  <p class="m-0">備註</p>
                  <img src="@/assets/images/icon/orangeLine.png" alt="" width="100%" height="1px" />
                </div>
                <div class="w-100">
                  <div class="w-100 d-flex align-items-center text-left">
                    <ul class="m-0 pl-50">
                      <li>向鄉公所購買電子票卡</li>
                      <li>採單趟搭乘1次收費(當地居民)</li>
                      <li>採三段式收費(外來旅客)</li>
                    </ul>
                  </div>
                </div>
                <div class="w-100">
                  <img src="@/assets/images/icon/orangeLine.png" alt="" width="100%" height="1px" />
                </div>
              </div>
            </div>
          </div>

          <div class="w-100 d-flex align-items-center flex-column">
            <div class="w-100 titleText">
              <p class="m-0">尖石鄉（DRTS觀光線）收費表</p>
            </div>

            <div class="overflow-x w-100 mt-15 d-flex align-items-center">
              <div class="w-100 ticketCard my-5 d-flex align-items-center flex-column" v-for="(item, index) in ticketInfo" :key="'TI_' + index">
                <div class="w-100">
                  <div class="ticketCard-title p-16 d-flex align-items-center flex-row">
                    <strong>{{ item.title }}</strong>
                    <p class="m-0">{{ item.role }}</p>
                  </div>
                </div>
                <el-divider class="m-0" />
                <div class="w-100 ticketCard-content">
                  <div class="p-16 d-flex align-items-center flex-column">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div class="w-100 d-flex flex-column text-left">
                        <p class="m-0">資格限制</p>
                        <p class="m-0">{{ item.options.age }}</p>
                      </div>
                      <div class="w-100 d-flex flex-column text-left">
                        <p class="m-0">票價</p>
                        <p class="m-0">{{ item.options.price }}</p>
                      </div>
                    </div>
                    <div class="w-100 d-flex align-items-center flex-column mt-15">
                      <div class="w-100 d-flex flex-column text-left">
                        <p class="m-0">收費路段</p>
                        <ul class="m-0 p-0 list-none">
                          <li v-for="(items, index) in item.options.tollRoad" :key="'TR_' + index">
                            {{ items.text }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-100 mt-25">
              <div class="remark w-100 d-flex align-items-center flex-column">
                <div class="w-100 mb-5 d-flex align-items-center flex-row">
                  <p class="m-0">備註</p>
                  <img src="@/assets/images/icon/orangeLine.png" alt="" width="100%" height="1px" />
                </div>
                <div class="w-100">
                  <div class="w-100 d-flex align-items-center text-left">
                    <ul class="m-0 pl-50">
                      <li>本鄉鄉民可向鄉公所購買電子票卡</li>
                      <li>採單趟搭乘1次收費</li>
                    </ul>
                  </div>
                </div>
                <div class="w-100">
                  <img src="@/assets/images/icon/orangeLine.png" alt="" width="100%" height="1px" />
                </div>
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
      // local: [
      //   { id: 1, label: "內埔" },
      //   { id: 2, label: "老埤" },
      //   { id: 3, label: "排灣" },
      //   { id: 4, label: "佳義" },
      //   { id: 5, label: "涼山" },
      //   { id: 6, label: "隘寮" },
      //   { id: 7, label: "禮納里" },
      //   { id: 8, label: "鄉公所" },
      // ],
      tollMethod: {
        titleImg: require("@/assets/images/headerBox/Toll.png"),
        mainName: "營運資訊",
        titleName: "收費方式",
      },
      ticketInfo: [
        {
          title: "敬老愛心卡",
          role: "（本鄉鄉民）",
          options: {
            age: "55歲以上",
            price: "免費搭乘",
            tollRoad: [
              {
                text: "全線免收費搭乘",
              },
            ],
          },
        },
        {
          title: "敬老愛心卡",
          role: "（外來旅客）",
          options: {
            age: "65歲以上",
            price: "50元/次",
            tollRoad: [
              {
                text: "1. 竹東-尖石鄉公所 15元/段",
              },
              {
                text: "2. 尖石鄉公所-宇老 15元/段",
              },
              {
                text: "3. 宇老-部落終點站 20元/段",
              },
            ],
          },
        },
        {
          title: "學生卡",
          role: "",
          options: {
            age: "0-20歲",
            price: "10元/次",
            tollRoad: [
              {
                text: "全線/10元",
              },
            ],
          },
        },
        {
          title: "本鄉鄉民",
          role: "",
          options: {
            age: "20歲-55歲",
            price: "15元/次",
            tollRoad: [
              {
                text: "全線/15元",
              },
            ],
          },
        },
        {
          title: "外來旅客",
          role: "",
          options: {
            age: "0-65歲以下",
            price: "100元/次",
            tollRoad: [
              {
                text: "1. 竹東-尖石鄉公所 30元/段",
              },
              {
                text: "2. 尖石鄉公所-宇老 30元/段",
              },
              {
                text: "3. 宇老-部落終點站 40元/段",
              },
            ],
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#oprationInfo {
  #tollMethod {
    padding: 0px 100px;
    box-sizing: border-box;
    .card {
      background: #ffffff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
      border-radius: 16px;
      &-title {
        border-bottom: 1px solid #eeeeee;
        strong {
          font-size: 20px;
          line-height: 28px;
          color: rgba(0, 0, 0, 0.65);
          padding-bottom: 8px;
          border-bottom: 2px solid #f38c00;
        }
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

      &-remark {
        p {
          min-width: 50px;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: 0.1rem;
          color: #3267bf;
        }
        ul {
          list-style-image: url("../../assets/images/icon/orangeDot.png");
          li {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: rgba(0, 0, 0, 0.65);
          }
        }
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
      }
      .el-dialog__footer {
        button {
          background-color: #f38c00;
          border: 0;
        }
      }
    }
  }

  #phonePayMethod {
    background: #fafafa;
    .titleText {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #3267bf;
    }
    .ticketCard {
      min-width: 210px;
      max-width: 210px;
      height: 230px;
      margin-right: 16px;
      background: #ffffff;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.24);
      border-radius: 16px;
      &:first-child {
        margin-left: 70px;
      }
      &-title {
        strong {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.65);
        }
        p {
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          color: #f38c00;
        }
      }
      &-content {
        p {
          &:first-child {
            font-size: 12px;
            line-height: 18px;
            color: rgba(0, 0, 0, 0.45);
          }
          &:last-child {
            font-size: 14px;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.65);
          }
        }
        ul {
          font-size: 14px;
          line-height: 20px;
          color: rgba(0, 0, 0, 0.65);
        }
      }
    }
    .remark {
      p {
        min-width: 30px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #f38c00;
      }
      ul {
        list-style-image: url("../../assets/images/icon/orangeDot.png");
        li {
          font-size: 14px;
          line-height: 20px;
          color: rgba(0, 0, 0, 0.65);
        }
      }
    }
  }
}
</style>