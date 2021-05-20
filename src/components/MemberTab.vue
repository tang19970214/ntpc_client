<template>
  <div id="memberTab">
    <div class="w-100 d-flex align-items-center justify-content-center">
      <div class="tab-group">
        <div class="tablink w-100 d-flex align-items-center">
          <div class="tabs d-flex align-items-center justify-content-center cur-pointer" :class="{ tabs_active: item.value === $route.name }" v-for="(item, index) in tabTitle" :key="'TT__' + index" @click="changeTab(item)">
            <p class="m-0">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabTitle: [
        {
          value: "signin",
          name: "會員登入",
        },
        {
          value: "register",
          name: "會員註冊",
        },
      ],
    };
  },
  methods: {
    changeTab(data) {
      console.log(data);
      this.$router.push({ name: data.value });
    },
  },
};
</script>

<style lang="scss">
#memberTab {
  .tab-group {
    width: 40vw;
    margin-top: 60px;
  }
  .tablink {
    border-bottom: 1px solid #bbbbbb;
  }
  .tabs {
    width: 144px;
    height: 60px;
    background: #ffffff;
    border-radius: 16px 16px 0px 0px;
    margin-right: 8px;
    align-self: center;
    border: 1px solid #bbbbbb;
    transform: translateY(1px);
    color: rgba(0, 0, 0, 0.45);
    font-size: 20px;
    &:hover {
      background: #f38c00;
      color: white;
      border-bottom: transparent;
      border: 1px solid #f38c00;
    }
    &_active {
      background: #f38c00;
      color: white;
      border-bottom: transparent;
      border: 1px solid #f38c00;
    }
  }
}
</style>