<template>
  <div id="trafficInfo" class="pb-70">

    <!-- <div class="traffic w-100 d-flex flex-column">
      <div class="traffic__title p-16">
        <strong>大眾運輸</strong>
      </div>

      <div class="w-100">
        <div class="w-100 d-flex flex-column">
          <div class="traffic__title--method p-16">
            <strong>高雄火車站 → 屏東火車站 → 屏東客運往三地門站 → 水門站下車 → 步行往自力路上方約20鐘到本公所。</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="traffic w-100 d-flex flex-column">
      <div class="traffic__title p-16">
        <strong>自行開車</strong>
      </div>

      <div class="w-100">
        <div class="w-100 d-flex flex-column">
          <div class="traffic__title--method p-16">
            <strong>國道3號 → 長治交流道下 → 台24往內埔農工 → 187縣道進水門社區 7-ELEVEN → 屏35線忠孝路二段往上行駛 → 台灣原住民族文化園區-右轉 → 本公所。</strong>
          </div>
        </div>
      </div>
    </div> -->

    <div class="traffic w-100 d-flex flex-column" v-for="(item, index) in trafficInfoList" :key="'TIL_' + index">

      <div class="traffic__title p-16">
        <strong>{{ item.method }}</strong>
      </div>

      <div class="w-100">
        <div class="w-100 d-flex flex-column" v-for="(items, index) in item.path" :key="'PT_' + index">
          <div class="traffic__title--method px-16 py-8">
            <strong>{{ items.direction }}</strong>
          </div>
          <div class="traffic__title--content px-16 py-8">
            <ul class="m-0 p-0 list-none">
              <li class="py-8" v-for="(tData, index) in items.option" :key="'OP_' + index">
                {{ tData.content }}
              </li>
            </ul>
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
      trafficInfoList: [
        {
          method: "開車",
          path: [
            {
              direction: "南下",
              option: [
                {
                  content:
                    "1. 關西交流道下，循118縣道至關西，接台3線往橫山方向，於十分寮轉120縣道東行7公里，即達尖石鄉。全程約23公里。",
                },
                {
                  content: "2. 竹林交流道下，循120縣道16公里，即達尖石鄉。",
                },
              ],
            },
            {
              direction: "北上",
              option: [
                {
                  content: "竹林交流道下，循120縣道16公里，即達尖石鄉。",
                },
              ],
            },
          ],
        },
        {
          method: "搭車",
          path: [
            {
              direction: "高鐵",
              option: [
                {
                  content: "1. 於高鐵新竹站下車。",
                },
                {
                  content:
                    "2. 轉乘高鐵新竹站外的「台鐵六家站」搭台鐵區間車【內灣一六家】支線至「台鐵竹中站」後，再換搭【新竹-內灣】支線至竹東。",
                },
                {
                  content: "3. 於竹東火車站轉乘客運。",
                },
              ],
            },
            {
              direction: "新竹客運公車",
              option: [
                {
                  content: "1. 竹東往那羅線，於尖石站下車。",
                },
                {
                  content: "2. 竹東往梅花線，於尖石站下車。",
                },
                {
                  content: "3. 竹東往八五山線，於尖石站下車。",
                },
              ],
            },
          ],
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