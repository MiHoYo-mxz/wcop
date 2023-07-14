<script setup lang="ts">
  import { textAnimate } from "@/utils/textAnimate";
  import { onMounted } from "vue";

  onMounted(() => {
    textAnimate();
  });
</script>

<template>
  <!-- 封面title区域 -->
  <div class="coverTitle">
    <!-- blog主标题 -->
    <n-gradient-text class="mainTitle" type="info">
      hello word
    </n-gradient-text>
    <!-- 一言 -->
    <n-gradient-text id="subTitle" type="warning"></n-gradient-text>
  </div>
</template>

<style lang="scss" scoped>
  .coverTitle {
    text-align: center;
    display: flex;
    flex-direction: column;
    user-select: none;
    .mainTitle {
      height: 100px;
      font-size: 100px;
      line-height: 100px;
    }
    #subTitle {
      height: 50px;
      font-size: 20px;
    }
  }
</style>
