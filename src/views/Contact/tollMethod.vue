<template>
  <div id="trafficInfo" class="pb-70">

    <div class="p-8">
      <strong class="font-s-24">一般民眾每趟次50元，尖石鄉民憑證每趟次15元喔</strong>
    </div>

    <div class="traffic w-100 d-flex flex-column" v-for="(item, index) in trafficInfoList" :key="'TIL_' + index">

      <div class="traffic__title p-16">
        <strong>{{ item.method }}</strong>
      </div>

      <div class="w-100">
        <el-image style="width: 100%" :src="item.imgPath" fit="cover"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trafficInfoList: [
        {
          method: "前山DRTS",
          imgPath: require("@/assets/images/schedule/toll_drts.png"),
        },
        {
          method: "後山基本民行",
          imgPath: require("@/assets/images/schedule/toll_basic.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#trafficInfo {
  .traffic {
    border-top: 0.5px solid #bbbbbb;
    border-bottom: 0.5px solid #bbbbbb;
    &__title {
      background: #ffffff;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #3267bf;
      border-bottom: 0.5px solid #bbbbbb;
      &--method {
        background: #fafafa;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.65);
        border-bottom: 0.5px solid #eeeeee;
      }
      &--content {
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}
</style>