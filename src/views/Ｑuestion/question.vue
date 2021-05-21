<template>
  <div id="question">
    <div class="question">
      <div class="question__header">
        <h1 class="question__header__title">用戶常見問題</h1>
      </div>
      <!-- 分隔線 -->
      <div class="line">
        <!-- <div class="line__d"></div> -->
        <!-- <div class="line__text">使用說明相關問題</div> -->
      </div>

      <!-- 問題答覆 -->
      <div class="question__list">
        <div class="question__list__quest" @click="isRotate = !isRotate">
          <i class="el-icon-plus mr-8" :class="{ rotate: isRotate }"></i
          >在交通平台系統最早可以預約訂車期間為何?
        </div>
        <div class="question__list__ans">
          <transition name="fade">
            <p v-if="isRotate">
              最早預約訂車期間為30天，最晚於72小時前至系統完成預約下單。
            </p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRotate: false,
    };
  },
};
</script>

<style lang="scss">
#question {
  display: flex;
  align-items: center;
  flex-direction: column;
  .question {
    width: 80%;
    &__header {
      &__title {
        font-family: Microsoft JhengHei;
        color: #888;
      }
    }

    // 分隔線
    .line {
      position: absolute;
      height: 1px;
      background-color: #888;
      right: 0;
      top: 100px;
      left: 0;
      &::after {
        left: 8%;
        top: -16px;
        position: absolute;
        content: "使用說明相關問題";
        background-color: #ffffff;
        padding: 0 20px;
        font-size: 22px;
        color: #888;
        z-index: 999;
      }
    }

    .question__list {
      margin-top: 100px;
      &__quest {
        color: #c6604c;
        font-size: 20px;
        cursor: pointer;
        .el-icon-plus {
          transition-duration: 0.2s;
          &.rotate {
            transform: rotate(45deg);
          }
        }
      }
      &__ans {
        font-size: 16px;
        color: #888;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
