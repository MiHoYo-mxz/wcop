<script setup lang="ts">
  import { darkTheme } from "naive-ui";
  import { NIcon } from "naive-ui";
  import type { MenuOption } from "naive-ui";
  import {
    Home,
    LogoMicrosoft,
    CopyOutline,
    ChatboxEllipsesOutline,
    PawSharp,
    IceCream,
    Moon,
    SunnyOutline,
  } from "@vicons/ionicons5";

  import { ref, h } from "vue";

  // 导航栏选项激活
  let activeKey = ref<string | null>(null);
  // 导航栏图标渲染函数
  const renderIcon = (icon: any): any => {
    return () => h(NIcon, null, { default: () => h(icon) });
  };
  // 导航栏组件数据
  const menuOptions: MenuOption[] = [
    {
      label: () =>
        h(
          "a",
          {
            // href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
            // target: "_blank",
            rel: "noopenner noreferrer",
          },
          "首页"
        ),
      key: "home",
      icon: renderIcon(Home),
    },
    {
      label: "分类",
      key: "category",
      icon: renderIcon(LogoMicrosoft),
      children: [
        {
          type: "group",
          label: "人物",
          key: "people",
          children: [
            {
              label: "叙事者",
              key: "narrator",
            },
            {
              label: "羊男",
              key: "sheep-man",
            },
          ],
        },
        {
          label: "饮品",
          key: "beverage",
          children: [
            {
              label: "威士忌",
              key: "whisky",
            },
          ],
        },
        {
          label: "食物",
          key: "food",
          children: [
            {
              label: "三明治",
              key: "sandwich",
            },
          ],
        },
        {
          label: "过去增多，未来减少",
          key: "the-past-increases-the-future-recedes",
        },
      ],
    },
    {
      label: "归档",
      key: "file",
      icon: renderIcon(CopyOutline),
    },
    {
      label: "动态",
      key: "trends",
      icon: renderIcon(ChatboxEllipsesOutline),
    },
    {
      label: "友人",
      key: "friends",
      icon: renderIcon(PawSharp),
    },
    {
      label: "关于我",
      key: "about",
      icon: renderIcon(IceCream),
    },
  ];

  // 更改全局主题色
  let changeGlobalColorShow = ref<boolean>(true);
  const dark = darkTheme;
  const emit = defineEmits(["changeGlobalColor"]);
  const changeGlobal = (dark: any): void => {
    changeGlobalColorShow.value = !changeGlobalColorShow.value;
    emit("changeGlobalColor", dark);
  };
</script>

<template>
  <div class="topBar">
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions" />
    <div class="btn">
      <n-icon
        size="20"
        @click="changeGlobal(dark)"
        v-show="changeGlobalColorShow">
        <SunnyOutline />
      </n-icon>
      <n-icon size="20" @click="changeGlobal" v-show="!changeGlobalColorShow">
        <Moon />
      </n-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .topBar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .btn {
      height: 100%;
      display: flex;
      align-items: flex-end;
      cursor: pointer;
    }
  }
</style>
