<template>
  <div class="goods-detail main">
    <div class="container">
      <el-row :gutter="50" class="goods-info ptb-20">
        <el-col :span="9">
          <Switch />
        </el-col>
        <el-col :span="15">
          <div class="goods-name"><h2>MMMM</h2></div>
          <p class="sale-desc">
            徕卡Summilux可变光圈镜头｜光影猎人900影像传感器 | 小米澎湃OS |
            全新小米龙晶玻璃｜全等深微曲屏｜第三代骁龙®8移动平台
          </p>
          <div class="version-type">
            <div class="title">选择版本</div>
            <div class="select-list">
              <el-card
                v-for="item in versionType"
                :key="item.id"
                shadow="never"
                :class="[
                  'select-item',
                  item.id == versionActive ? 'active' : '',
                ]"
                @click="selectVersion(item)"
              >
                {{ item.name }}
              </el-card>
            </div>
          </div>
          <div class="color-type">
            <div class="title">选择颜色</div>
            <div class="select-list">
              <el-card
                v-for="item in colorType"
                :key="item.id"
                shadow="never"
                :class="['select-item', item.id == colorActive ? 'active' : '']"
                @click="selectColor(item)"
              >
                {{ item.name }}
                12GB+256GB
              </el-card>
            </div>
          </div>
          <div class="price mt-20">
            ￥<span class="number">9999</span>元<del
              ><span class="number">9999</span>元</del
            >
          </div>
          <div class="btns mt-20">
            <el-button type="primary" icon="SoldOut" class="buy-btn"
              >立即购买</el-button
            >
            <el-button
              type="primary"
              size="large"
              icon="ShoppingCart"
              class="add-car-btn"
              @click="addCar"
              >加入购物车</el-button
            >
            <el-button icon="Star" class="like-btn">喜欢</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Switch from "@/views/Home/components/Switch/index.vue";

const versionType = ref([
  {
    id: "1",
    name: "12GB+256GB",
    active: false,
  },
  {
    id: "2",
    name: "12GB+256GB",
    active: false,
  },
  {
    id: "3",
    name: "12GB+256GB",
    active: false,
  },
  {
    id: "4",
    name: "12GB+256GB",
    active: false,
  },
]);

const colorType = ref([
  {
    id: "1",
    name: "霞光紫",
    active: false,
  },
  {
    id: "2",
    name: "霞光紫",
    active: false,
  },
  {
    id: "3",
    name: "霞光紫",
    active: false,
  },
]);

const versionActive: any = ref(versionType.value[0].id);
const colorActive: any = ref(colorType.value[0].id);

const selectVersion = (item: any) => {
  // versionType.value.forEach((item: any) => {
  //   item.active = false;
  // });
  // item.active = true;
  versionActive.value = item.id;
};

const selectColor = (item: any) => {
  colorActive.value = item.id;
};

const router = useRouter();
const addCar = () => {
  console.log("加入购物车");
  router.push("/shopping/cart");
};
</script>

<style lang="scss" scoped>
.goods-detail {
  .goods-info {
    background: #fff;
    .goods-name {
      font-size: 24px;
      font-weight: 700;
    }
    .sale-desc {
      font-size: 14px;
      color: #999;
      padding: 15px 0;
      border-bottom: 1px solid #e0e0e0;
    }
  }
  .title {
    font-size: 18px;
    margin-top: 20px;
  }
  .select-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    ::v-deep .el-card__body {
      padding: 15px;
    }
    .select-item {
      width: 48%;
      margin-top: 15px;
      cursor: pointer;
      &:hover {
        border: 1px solid var(--el-color-primary);
        color: var(--el-color-primary);
      }
    }
    .active {
      border: 1px solid var(--el-color-primary);
      color: var(--el-color-primary);
    }
  }
  .price {
    .number {
      font-size: 24px;
    }
    del {
      color: #999;
      margin-left: 0.5em;
      .number {
        font-size: 18px;
      }
    }
  }
  .btns {
    .el-button {
      padding: 25px !important;
    }
  }
}
</style>