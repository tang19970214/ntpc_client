<template>
  <div id="contactService">
    <div class="company" v-for="item in company" :key="item.id">
      <div class="border">
        <h4 class="company__title">{{ item.companyTitle }}</h4>
        <p class="company__phone">{{ item.companyPhone }}</p>
        <p class="company__car">
          <span class="company__car__title">車趟服務時間 :</span>
          {{ item.carTime }}
        </p>

        <p class="company__service">
          <span class="company__service__title">客服服務時間 :</span>
          {{ item.service }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: [
        {
          id: 1,
          companyTitle: "安銓國際租賃有限公司",
          companyPhone: "(02)2658-6655",
          carTime: "週一至週六 08:00-20:00（國定假日提前預約皆可服務)",
          service: " 週一至週日 09:00-20:00",
        },
        {
          id: 2,
          companyTitle: "安銓國際租賃有限公司",
          companyPhone: "(02)2658-6655",
          carTime: "週一至週六 08:00-20:00（國定假日提前預約皆可服務)",
          service: " 週一至週日 09:00-20:00",
        },
        {
          id: 3,
          companyTitle: "安銓國際租賃有限公司",
          companyPhone: "(02)2658-6655",
          carTime: "週一至週六 08:00-20:00（國定假日提前預約皆可服務)",
          service: " 週一至週日 09:00-20:00",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#contactService {
  margin: 0 auto;
  width: 80%;
  margin-top: 20px;
  color: #888;
  font-family: Microsoft JhengHei;
  .border {
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #222;
    padding: 20px 0;
  }
  .company {
    font-size: 20px;
    text-align: center;
    &__car {
      &__title {
        font-weight: bold;
      }
    }
    &__service {
      &__title {
        font-weight: bold;
      }
    }
  }
  .contactService_border {
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #222;
    padding: 20px 0;
  }
}
</style>
