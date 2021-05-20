<template>
  <div id="member">
    <!-- web -->
    <div class="d-none d-mb-block px-150">
      <HeaderBox :titleImg="titleImg" :titleName="titleName" />
      <div class="w-100" v-if="noUser">
        <MemberTab />
      </div>
    </div>

    <!-- phone -->
    <div class="d-block d-mb-none pt-90">
      <div class="w-100 pos-fixed t-0 z-999">
        <PhoneHeader :pageName="mainPageName" />
        <div
          class="childrenTag w-100 d-flex align-items-center justify-content-center flex-row"
        >
          <div
            class="w-100 py-12 d-flex align-items-center justify-content-center flex-row"
            :class="{ 'childrenTag-active': item.path === $route.name }"
            v-for="(item, index) in filterPages(childrenPage)"
            :key="'CP_' + index"
            @click="goPage(item)"
          >
            <div class="w-100 text-center">
              <p class="m-0">{{ item.pageName }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBox from "@/components/HeaderBox.vue";
import MemberTab from "@/components/MemberTab.vue";
import PhoneHeader from "@/components/PhoneHeader.vue";

import api from "@/api/apis.js";

export default {
  components: {
    MemberTab,
    HeaderBox,
    PhoneHeader,
  },
  data() {
    return {
      noUser: false,
      titleImg: require("@/assets/images/headerBox/member.png"),
      mainPageName: "會員專區",
      childrenPage: [
        {
          userStatus: false,
          path: "signin",
          pageName: "會員登入",
        },
        {
          userStatus: false,
          path: "register",
          pageName: "會員註冊",
        },
        {
          userStatus: true,
          path: "memberInfo",
          pageName: "會員基本資料",
        },
        {
          userStatus: true,
          path: "orderInfo",
          pageName: "訂單資訊",
        },
      ],
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    goPage(data) {
      this.$router.push(data.path);
    },
    reload() {
      api
        .GetLoginStatus()
        .then((data) => {
          if (data.data.code == 200) {
            this.noUser = false;
          } else {
            this.noUser = true;
          }
        })
        .catch((error) => {
          this.noUser = true;
        });
    },
  },
  watch: {
    $route(to, from) {
      this.reload();
    },
  },
  computed: {
    titleName() {
      if (this.$route.name === "signin") {
        return "會員登入";
      } else if (this.$route.name === "register") {
        return "會員註冊";
      } else {
        return "會員專區";
      }
    },
    filterPages() {
      return (data) => {
        const haveUser = [];
        const noUser = [];
        data.filter((item, index) => {
          if (!item.userStatus) {
            noUser.push(item);
          } else {
            haveUser.push(item);
          }
        });
        if (this.noUser) {
          return noUser;
        } else {
          return haveUser;
        }
      };
    },
  },
};
</script>

<style lang="scss">
#member {
  .childrenTag {
    background: white;
    border-bottom: 1px solid #eeeeee;
    img:last-child {
      display: none;
    }
    &-active {
      border-bottom: 2px solid #f38c00;
      color: #f38c00;
    }
  }
}
</style>