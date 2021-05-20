<template>
  <div id="contactInfo">
    <div class="pt-20 pb-80">
      <div class="contactInfo__text w-100 py-12 d-flex flex-column" v-for="(item, index) in contactInfoList" :key="'CIL_' + index">
        <div class="w-100 text-center">
          <img :src="item.imgURL" :alt="item.imgAlt" width="72px" />
        </div>
        <div class="w-100 text-center mt-10" v-if="item.text">
          <strong>{{ item.text }}</strong>
        </div>
        <div class="w-100 d-flex flex-column text-center mt-10" v-else>
          <strong v-for="(items, index) in item.context" :key="'CT_' + index">
            {{ items.text }}
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>

<style lang="scss">
#contactInfo {
  .contactInfo {
    &__text {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
</style>