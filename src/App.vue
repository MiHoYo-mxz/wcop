<script setup lang="ts">
  import TopBar from "@/components/TopBar.vue";
  import { darkTheme } from "naive-ui";
  import { ref } from "vue";

  const theme = ref(null);
  const changeGlobalColor = (dark: any): void => {
    theme.value = dark;
  };
</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout>
      <div id="app">
        <TopBar @changeGlobalColor="changeGlobalColor"></TopBar>
        <router-view></router-view>
      </div>
    </n-layout>
  </n-config-provider>
</template>

<style lang="scss" scoped></style>
