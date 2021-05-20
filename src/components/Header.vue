<template>
  <section>
    <div id="header">
      <div class="w-100 d-flex align-items-center flex-row">
        <div class="header__logo" @click="goHome()">
          <div class="header__logo-leftBlock"></div>
          <img
            src="../assets/images/logo.png"
            alt="瑪家鄉預約訂車平台"
            width="350px"
          />
        </div>
        <div
          class="w-100 d-flex align-items-center justify-content-around"
          style="max-width: 1000px"
        >
          <div
            class="header__menu d-flex align-items-center justify-content-center"
            :class="{
              'header__menu--active': item.path.name === $route.meta.name,
            }"
            v-for="(item, index) in titleMenu"
            :key="'TM__' + index"
          >
            <router-link
              class="w-100 header__menu--action text-decoration-none d-flex align-items-center justify-content-center flex-column"
              :to="{ name: item.path.url }"
              v-if="!item.subMenu"
            >
              <div
                class="w-100 d-flex align-items-center justify-content-center"
              >
                <img :src="item.imgURL" alt="" />
                <img class="" :src="item.imgURL_hover" alt="" />
              </div>

              <p class="m-0">{{ item.menuText }}</p>
            </router-link>

            <span
              class="header__menu--action w-100 d-flex align-items-center justify-content-center flex-column pos-relative"
              v-else
            >
              <div
                class="w-100 d-flex align-items-center justify-content-center"
              >
                <img :src="item.imgURL" alt="" />
                <img class="" :src="item.imgURL_hover" alt="" />
              </div>
              <p class="m-0">{{ item.menuText }}</p>
              <div class="pos-absolute header__submenu text-center">
                <div
                  class="header__submenu--block py-8"
                  :class="{
                    'header__submenu--active': items.path.url === $route.name,
                  }"
                  v-for="(items, $index) in item.subMenu"
                  :key="'SM_' + $index"
                >
                  <router-link
                    class="w-100 text-decoration-none px-16"
                    :to="{ name: items.path.url }"
                  >
                    {{ items.menuText }}
                  </router-link>
                </div>
              </div>
            </span>
          </div>
        </div>

        <div class="sign ml-auto mr-90 d-flex" v-if="$store.state.userToken">
          <div class="sign__user text-center d-flex align-items-center mr-10">
            <strong>HI! {{ $store.state.userName }}</strong>
          </div>
          <button class="sign__out py-10" @click="signout">登出</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    titleMenu: {
      type: Array,
      default: () => {},
      require: false,
    },
  },
  methods: {
    goHome() {
      this.$router.push({ name: "News" });
    },
    signout() {
      this.$confirm(
        "確定要登出嗎？",
        {
          confirmButtonText: "確定",
        },
        {
          type: "warning",
        }
      ).then((_) => {
        window.localStorage.clear();
        this.$store.state.userToken = "";
        this.$store.state.userName = "";
        this.$message({
          type: "success",
          message: "已成功登出!",
        });
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="scss">
#header {
  width: 100%;
  position: fixed;
  z-index: 999;
  background-image: url("./../assets/images/Group 17.png");
  color: rgba(0, 0, 0, 0.65);
  padding: 0;
  display: flex;
  align-items: center !important;

  .header {
    &__logo {
      display: flex;
      align-items: center;
      margin: 0 50px;
      cursor: pointer;
      p {
        margin: 0;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        color: rgba(0, 0, 0, 0.65);
      }
    }
    &__menu {
      min-width: 120px;
      height: 100px;
      text-align: center;
      &--action {
        height: 100%;
        img {
          &:last-child {
            display: none;
          }
        }
        p {
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.45);
        }
        &:hover {
          width: 90px;
          height: 90px;
          background: white;
          border-radius: 50%;
          border: 4px solid #e4ddd2;
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
          .header__submenu {
            display: block;
          }
        }
      }
      &--active {
        border-bottom: 6px solid #f38c00;
        a,
        span {
          width: 90px;
          height: 90px;
          background: white;
          border-radius: 50%;
          border: 4px solid #e4ddd2;
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
    &__submenu {
      width: 130px;
      background: white;
      z-index: 999;
      bottom: -5rem;
      border-radius: 4px;
      border: 1px solid #eeeeee;
      display: none;
      &--block {
        width: 100%;
        &:first-child {
          border-bottom: 1px solid #eeeeee;
        }
        a {
          font-size: 16px;
          line-height: 24px;
          color: rgba(0, 0, 0, 0.65);
          border: none;
          &:hover {
            color: #f38c00;
          }
        }
      }
      &--active {
        a {
          color: #f38c00;
          border: none;
        }
      }
    }
  }

  .sign {
    border-bottom: 4px solid #4d6ba6;
    transform: translateZ(0);
    &:hover {
      border-bottom: 4px solid transparent;
    }
    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      left: 0;
      right: 100%;
      bottom: -4px;
      background: #4d6ba6;
      height: 4px;
      transition-property: right;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;
    }
    &:hover:before {
      right: 0;
    }
    &__user {
      white-space: nowrap;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.15em;
      color: #f38c00;
    }
    &__out {
      width: 50px;
      border: none;
      background-color: transparent;
      text-align: right;
      color: white;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      cursor: pointer;
    }
  }
}
</style>
