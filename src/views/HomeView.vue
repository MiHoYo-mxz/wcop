<script setup lang="ts">
  import { tocbotHook } from "@/hooks/tocbot";
  import { onMounted } from "vue";
  import CoverTitle from "@/components/CoverTitle.vue";

  onMounted(() => {
    tocbotHook();
  });
</script>

<template>
  <div class="home">
    <div class="coverBox">
      <CoverTitle class="coverTitle"></CoverTitle>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 300vh;
    .coverBox {
      height: 100vh;
      position: relative;
      .coverTitle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
