<template>
  <div id="allNews">
    <section>
      <!-- web -->
      <div class="d-none d-mb-block el-main">
        <HeaderBox :titleImg="titleImg" :titleName="titleName" />
        <div class="w-100">
          <div class="w-100">
            <el-date-picker v-model="getMonth" type="month" placeholder="請選擇月份" value-format="yyyy-MM" @change="chooseMonth"></el-date-picker>
          </div>

          <div class="w-100" v-if="tableData">
            <div class="w-100 mt-15">
              <el-table class="cur-pointer" style="width: 100%" :data="tableData" empty-text="暫無數據" stripe @row-click="touchNews">
                <el-table-column label="公告日期" prop="releaseDate" width="150">
                  <template slot-scope="scope">
                    <p class="m-0">{{ scope.row.releaseDate | moment("YYYY-MM-DD")}}</p>
                  </template>
                </el-table-column>
                <el-table-column prop="title" label="標題"></el-table-column>
                <el-table-column fixed="right" label="" width="50">
                  <template>
                    <i class="el-icon-arrow-right" />
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div class="w-100 mt-120" v-else>
            <div class="w-100 d-flex align-items-center justify-content-center flex-column">
              <img src="@/assets/images/noData.png" alt="查無資料" />
              <p class="m-0">查無資料</p>
            </div>
          </div>
        </div>
      </div>

      <!-- phone -->
      <div class="d-block d-mb-none" id="phoneNews">
        <div class="w-100">
          <div class="w-100">
            <div class="px-15 py-10 dateBG">
              <el-date-picker class="w-100" v-model="getMonth" type="month" placeholder="請選擇月份" value-format="yyyy-MM" @change="chooseMonth"></el-date-picker>
            </div>
          </div>

          <div class="w-100">
            <div class="w-100" v-if="tableData.length > 0">
              <div class="newsList p-15 d-flex align-items-center flex-column cur-pointer" :style="{
                  background: index % 2 == 0 ? 'white' : '#FAFAFA',
                }" v-for="(item, index) in tableData" :key="'TD_' + index" @click="touchNews(item)">
                <div class="newsList-content w-100 text-left">
                  {{ item.title }}
                </div>
                <div class="newsList-date w-100 text-right mt-10">
                  {{ item.releaseDate | moment("YYYY-MM-DD") }}
                </div>
              </div>
            </div>
            <div class="w-100" v-else>
              <div class="w-100 d-flex align-items-center justify-content-center flex-column mt-120">
                <img src="@/assets/images/noData.png" alt="查無資料" />
                <p class="m-0">查無資料</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderBox from "@/components/HeaderBox.vue";
import Pagination from "@/components/Pagination.vue";

import api from "@/api/apis.js";

export default {
  components: {
    HeaderBox,
    Pagination,
  },
  data() {
    return {
      titleImg: require("@/assets/images/headerBox/News.png"),
      titleName: "最新消息",
      getMonth: "",
      tableData: [],
    };
  },
  mounted() {
    this.$store.dispatch("loadingHandler", true);
    this.reload();
  },
  methods: {
    async reload() {
      const getNews = {
        page: 1,
        limit: 1000,
        orderby: "releaseDate desc",
      };
      await api.GetNews(getNews).then((res) => {
        this.tableData = res.data.data;
        this.$store.dispatch("loadingHandler", false);
      });
    },
    chooseMonth() {
      this.$store.dispatch("loadingHandler", true);
      this.reload();
    },
    touchNews(data) {
      this.$router.push({ name: "newsInfo", params: { id: data.id } });
    },
  },
};
</script>

<style lang="scss">
#allNews {
  .el-input__inner {
    text-align-last: center;
  }

  #phoneNews {
    .dateBG {
      background: #fef4e5;
      .el-input {
        width: 100%;
      }
    }
    .newsList {
      border-bottom: 1px solid #eeeeee;
      &-content {
        overflow-y: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.65);
      }
      &-date {
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
}
</style>