<template>
  <div>
    <div class="d-block d-mb-none pt-44">
      <div class="w-100 pos-fixed t-0 z-999">
        <PhoneHeader :pageName="mainPageName" />
        <!-- <PhoneHeaderBox :childrenPage="childrenPage" /> -->
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PhoneHeader from "@/components/PhoneHeader.vue";
// import PhoneHeaderBox from "@/components/PhoneHeaderBox.vue";

export default {
  components: {
    PhoneHeader,
    // PhoneHeaderBox,
  },
  data() {
    return {
      mainPageName: "服務說明",
      // childrenPage: [
      //   {
      //     imgURL: require("@/assets/images/phoneHeader/map.png"),
      //     imgURL_hover: require("@/assets/images/phoneHeader/map_hover.png"),
      //     path: "oprationRoute",
      //     pageName: "營運路線",
      //   },
      //   {
      //     imgURL: require("@/assets/images/phoneHeader/money.png"),
      //     imgURL_hover: require("@/assets/images/phoneHeader/money_hover.png"),
      //     path: "payMethod",
      //     pageName: "收費方式",
      //   },
      // ],
    };
  },
};
</script>