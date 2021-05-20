<template>
  <div>
    <div class="d-block d-mb-none pt-42">
      <div class="w-100 pos-fixed t-0 z-999">
        <PhoneHeader :pageName="mainPageName" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PhoneHeader from "@/components/PhoneHeader.vue";

export default {
  components: {
    PhoneHeader,
  },
  data() {
    return {
      mainPageName: "最新消息",
    };
  },
};
</script>