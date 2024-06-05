<template>
  <div class="header">
    <div class="container">
      <el-row
        type="flex"
        justify="space-between"
        align="middle"
        class="header-box"
      >
        <router-link to="/">
          <div class="site-logo">
            <h1>购物商城LOGO</h1>
            <!-- <img src="../assets/img/logo.png" alt="" /> -->
          </div>
        </router-link>
        <el-row align="middle">
          <div class="search mr-20">
            <!-- <el-input placeholder="请输入内容" :prefix-icon="Search" /> -->
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
              :prefix-icon="Search"
            >
              <template #loading>
                <el-icon class="is-loading">
                  <svg class="circular" viewBox="0 0 20 20">
                    <g
                      class="path2 loading-path"
                      stroke-width="0"
                      style="animation: none; stroke: none"
                    >
                      <circle r="3.375" class="dot1" rx="0" ry="0" />
                      <circle r="3.375" class="dot2" rx="0" ry="0" />
                      <circle r="3.375" class="dot4" rx="0" ry="0" />
                      <circle r="3.375" class="dot3" rx="0" ry="0" />
                    </g>
                  </svg>
                </el-icon> </template
            ></el-autocomplete>
          </div>
          <el-icon :size="24" color="#666" class="mr-20">
            <User />
          </el-icon>
          <el-icon :size="24" color="#666">
            <shoppingCart />
          </el-icon>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";

const state = ref("");

interface LinkItem {
  value: string;
  link: string;
}

const links = ref<LinkItem[]>([]);

const loadAll = () => {
  return [
    { value: "vue", link: "https://github.com/vuejs/vue" },
    { value: "element", link: "https://github.com/ElemeFE/element" },
    { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
    { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
    { value: "vuex", link: "https://github.com/vuejs/vuex" },
    { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
    { value: "babel", link: "https://github.com/babel/babel" },
  ];
};

let timeout: ReturnType<typeof setTimeout>;
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
};
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

const handleSelect = (item: Record<string, any>) => {
  console.log(item);
};

onMounted(() => {
  links.value = loadAll();
});
</script>

<style lang="scss" scoped>
.header {
  position: static;
  top: 0;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  &-box {
    height: 100%;
  }
  .search {
    ::v-deep .el-input {
      height: 36px;
      &__wrapper {
        border-radius: 20px;
      }
    }
  }
}
.circular {
  display: inline;
  height: 30px;
  width: 30px;
  animation: loading-rotate 2s linear infinite;
}
.loading-path .dot1 {
  transform: translate(3.75px, 3.75px);
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
}
.loading-path .dot2 {
  transform: translate(calc(100% - 3.75px), 3.75px);
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.4s;
}
.loading-path .dot3 {
  transform: translate(3.75px, calc(100% - 3.75px));
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 1.2s;
}
.loading-path .dot4 {
  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));
  fill: var(--el-color-primary);
  animation: custom-spin-move 1s infinite linear alternate;
  opacity: 0.3;
  animation-delay: 0.8s;
}
@keyframes loading-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes custom-spin-move {
  to {
    opacity: 1;
  }
}
</style>