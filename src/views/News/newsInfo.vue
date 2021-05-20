<template>
  <div id="newsInfo">
    <div class="d-none d-mb-block el-main">
      <HeaderBox :titleImg="titleImg" :titleName="titleName" />
      <div
        class="newsCard w-100 d-flex flex-column align-items-center justify-content-center"
      >
        <div class="w-100 newsCard_title">
          {{ newsInfo.title }}
        </div>
        <div class="w-100 newsCard_content">
          <vue-editor v-model="newsInfo.content" :disabled="true" />
        </div>
        <div class="w-100 align-items-center text-right newsCard_date">
          {{ newsInfo.datetime }}
        </div>
      </div>

      <div class="w-100 d-flex align-items-center justify-content-end">
        <a class="goBack cur-pointer" @click="goBack()">
          <img src="@/assets/images/arrow-down-left.svg" alt="" />
          返回上一頁
        </a>
      </div>
    </div>

    <div class="d-block d-mb-none">
      <div
        class="p-20 d-flex flex-column align-items-center justify-content-center"
      >
        <div class="newsCard--phone p-15">
          <div class="w-100 newsCard_title">
            {{ newsInfo.title }}
          </div>
          <div class="w-100 newsCard_content">
            <vue-editor v-model="newsInfo.content" :disabled="true" />
          </div>
          <div class="w-100 align-items-center text-right newsCard_date">
            {{ newsInfo.datetime }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBox from "@/components/HeaderBox.vue";
import moment from "moment";
import api from "@/api/apis.js";

export default {
  components: { HeaderBox },
  data() {
    return {
      titleImg: require("@/assets/images/headerBox/News.png"),
      titleName: "最新消息",
      newsInfo: {},
    };
  },
  methods: {
    async reload() {
      await api.GetNews().then((data) => {
        data.data.data.filter((item) => {
          if (item.id === this.$route.params.id) {
            this.newsInfo = {
              datetime: moment(item.releaseDate).format("YYYY-MM-DD"),
              title: item.title,
              content: item.contents,
            };
          }
        });
        this.$store.dispatch("loadingHandler", false);
      });
    },
    goBack() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.$store.dispatch("loadingHandler", true);
    this.reload();
  },
};
</script>

<style lang="scss">
.newsCard {
  width: 100%;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  &_title {
    padding-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #3267bf;
  }
  &_content {
    padding-top: 16px;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.65);
    .ql-toolbar {
      display: none !important;
    }
    .ql-container {
      border: none !important;
    }
  }
  &_date {
    padding-top: 16px;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.45);
  }
  &--phone {
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.24);
    border-radius: 16px;
  }
}
.goBack {
  margin-top: 26px;
  font-size: 16px;
  line-height: 24px;
  color: #f38c00;
  &:hover {
    text-decoration: underline;
  }
}
</style>