<template>
  <div id="app">
    <Loading />
    <div id="nav">
      <!-- header -->
      <div class="d-none d-mb-block pb-105">
        <Header :titleMenu="titleMenu" />
      </div>
      <!-- body -->
      <div class="w-100 pos-relative" style="min-height: calc(100vh - 65px)">
        <div class="pos-absolute l-0 b-0 d-none d-mb-block">
          <img src="@/assets/images/bodyBG.png" alt="" />
        </div>
        <router-view class="pos-relative"></router-view>
      </div>
      <!-- footer -->
      <div class="w-100">
        <div class="d-none d-mb-block">
          <div class="w-100 pos-relative">
            <img src="@/assets/images/footer.jpg" alt="" width="100%" />
            <div class="footer__introduce pos-absolute t-0 r-0 mr-20">
              <div class="text-left">
                <strong class="mt-30 d-xl-block">新北市政府 @版權所有</strong>
                <div class="d-flex align-items-start flex-row">
                  <p class="m-0">服務時間：</p>
                  <div class="d-flex align-items-start flex-column pl-8">
                    <p class="m-0">週一至週五 08:00~12:00</p>
                    <p class="m-0">13:00~17:00</p>
                    <p class="m-0">週六、日及例假日休息</p>
                  </div>
                </div>
                <p class="m-0">服務電話：03-5841001 傳真：03-584230</p>
              </div>
            </div>
            <div class="footer__copyright w-100 text-center pos-absolute b-0">
              <p>COPYRIGHT © 新北市政府</p>
            </div>
          </div>
        </div>

        <div class="d-block d-mb-none">
          <div
            class="footerInfo w-100 d-flex align-items-center justify-content-around"
          >
            <div
              class="footerInfo-list w-100 py-10 d-flex align-items-center justify-content-center flex-column"
              :class="{
                'footerInfo-list_active': item.path.name == $route.meta.name,
              }"
              v-for="(item, index) in titleMenu"
              :key="'FL_' + index"
            >
              <router-link
                class="text-decoration-none"
                :to="{ name: item.path.url }"
              >
                <div
                  class="w-100 d-flex align-items-center justify-content-center"
                >
                  <img :src="item.imgURL" alt="" width="30px" />
                  <img :src="item.imgURL_hover" alt="" width="30px" />
                </div>
                <p class="m-0 pt-5">{{ item.menuText }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Loading,
    Header,
  },
  data() {
    return {
      titleMenu: [
        /* 最新消息 */
        {
          path: {
            name: "News",
            url: "News",
          },
          imgURL: require("@/assets/images/header/news.png"),
          imgURL_hover: require("@/assets/images/header/news_hover.png"),
          menuText: "最新消息",
        },
        /* 服務介紹 */
        {
          path: {
            name: "serviceInfo",
            url: "serviceInfo",
          },
          imgURL: require("@/assets/images/header/oprationInfo.png"),
          imgURL_hover: require("@/assets/images/header/oprationInfo_hover.png"),
          menuText: "服務介紹",
        },
        /* 服務說明 */
        {
          path: {
            name: "oprationInfo",
            url: "oprationRoute",
          },
          imgURL: require("@/assets/images/header/serviceInfo.png"),
          imgURL_hover: require("@/assets/images/header/serviceInfo_hover.png"),
          menuText: "服務說明",
        },
        /* 行程預約 */
        {
          path: {
            name: "reservation",
            url: "carGroup",
          },
          imgURL: require("@/assets/images/header/reservation.png"),
          imgURL_hover: require("@/assets/images/header/reservation_hover.png"),
          menuText: "行程預約",
        },
        /* 會員專區 */
        {
          path: {
            name: "member",
            url: "memberInfo",
          },
          imgURL: require("@/assets/images/header/member.png"),
          imgURL_hover: require("@/assets/images/header/member_hover.png"),
          menuText: "會員專區",
        },
        /* 關於我們 */
        {
          path: {
            name: "contact",
            url: "trafficInfo",
          },
          imgURL: require("@/assets/images/header/contact.png"),
          imgURL_hover: require("@/assets/images/header/contact_hover.png"),
          menuText: "關於我們",
        },
        //聯繫客服
        {
          path: {
            name: "contactService",
            url: "contactService",
          },
          imgURL: require("@/assets/images/header/contact.png"),
          imgURL_hover: require("@/assets/images/header/contact_hover.png"),
          menuText: "聯繫客服",
        },

        //常見問題
        {
          path: {
            name: "question",
            url: "question",
          },
          imgURL: require("@/assets/images/header/contact.png"),
          imgURL_hover: require("@/assets/images/header/contact_hover.png"),
          menuText: "常見問題",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url("./assets/css/basic/_global.scss");

#app {
  background: #f4f3ed;
  font-family: Arial, "Microsoft JhengHei";
  .footer {
    &__introduce {
      font-family: Arial;
      letter-spacing: 0.05em;
      margin-top: 16px;
      @media (max-width: 1300px) {
        margin-top: 12px;
      }
      @media (max-width: 1200px) {
        margin-top: 0px;
      }
      strong {
        font-size: 18px;
        line-height: 20px;
        color: #ebc653;
      }
      p,
      ul {
        padding-top: 8px;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
      }
      li:last-child {
        padding-top: 5px;
      }
    }
    &__copyright {
      font-size: 14px;
      line-height: 20px;
      color: #8e3c3c;
      font-weight: bold;
    }
  }

  .footerInfo {
    position: fixed;
    bottom: 0;
    background: white;
    border-top: 1px solid #eeeeee;
    &-list {
      img:last-child {
        display: none;
      }
      p {
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        color: rgba(0, 0, 0, 0.45);
      }
      &_active {
        img {
          &:first-child {
            display: none;
          }
          &:last-child {
            display: block;
          }
        }
        p {
          color: #f38c00;
        }
      }
    }
  }
}
</style>
