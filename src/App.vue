<script setup lang="ts">
  import TopBar from "@/components/TopBar.vue";
  import { type GlobalTheme } from "naive-ui";
  import { ref } from "vue";

  // 全局主题色切换
  const theme = ref<GlobalTheme | null>(null);
  const changeGlobalColor = (dark: GlobalTheme) => {
    theme.value = dark;
  };
</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout class="box">
      <div
        id="app"
        class="contentVeiw"
        style="width: 100vw; height: 100vh"
        ref="contentVeiw">
        <!-- 顶部导航 -->
        <TopBar @changeGlobalColor="changeGlobalColor"></TopBar>
        <!-- 路由占位 -->
        <router-view></router-view>
      </div>
    </n-layout>
  </n-config-provider>
</template>

<style lang="scss" scoped>
  .contentVeiw {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
      url(./assets/img/__gotou_hitori_bocchi_the_rock_and_1_more_drawn_by_jl_tan__f9846663ee157f3664fccf09e046da68.png)
        center 0 no-repeat;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      /**/
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-image: linear-gradient(
        45deg,
        rgb(112, 192, 232) 0%,
        rgb(112, 192, 232) 25%,
        rgb(182, 222, 242) 25%,
        rgb(182, 222, 242) 50%,
        rgb(112, 192, 232) 50%,
        rgb(112, 192, 232) 75%,
        rgb(182, 222, 242) 75%,
        rgb(182, 222, 242) 100%
      );
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-image: linear-gradient(
        45deg,
        rgba(232, 128, 128) 0%,
        rgba(232, 128, 128) 25%,
        rgb(182, 222, 242) 25%,
        rgb(182, 222, 242) 50%,
        rgba(232, 128, 128) 50%,
        rgba(232, 128, 128) 75%,
        rgb(182, 222, 242) 75%,
        rgb(182, 222, 242) 100%
      );
    }
  }
</style>
