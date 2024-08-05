<template>
  <div class="goods main">
    <div class="container">
      <div class="goods-category mb-30">秘制小汉堡</div>
      <!-- <Tag /> -->
      <el-segmented v-model="value" :options="tagList" />
      <el-segmented v-model="value2" :options="tagList2" />
      <div class="goods-items mt-20">
        <el-card shadow="hover" class="goods-box" v-for="o in 20" :key="o">
          <router-link to="/goods/detail">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%"
            />
            <div class="title">汉堡汉堡</div>
            <div class="sub-title mtb-5">买一送一哦，优惠划算就在这</div>
            <div class="price mt-15">
              <span class="number">8888</span>元<del
                ><span class="number">9999</span>元</del
              >
            </div>
          </router-link>
        </el-card>
      </div>
      <pagination
        v-show="total > 0"
        :background="false"
        :total="total"
        :page="queryParams.pageNum"
        :limit="queryParams.pageSize"
        :layout="'prev, pager, next'"
        @pagination="getList"
      />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, reactive } from "vue";
// import { getGoodsList } from "@/api/goods";
import Pagination from "@/components/Pagination/index.vue";

const total = ref(100);
const queryParams = reactive({
  pageNum: 1,
  pageSize: 50,
});
const value = ref(null);
const value2 = ref(null);
const tagList = [
  { label: "全部", value: null },
  { label: "手机", value: 1 },
  { label: "电脑", value: 2 },
  { label: "平板", value: 3 },
  { label: "电视", value: 4 },
  { label: "耳机", value: 5 },
  { label: "音响", value: 6 },
  { label: "路由器", value: 7 },
  { label: "智能手表", value: 8 },
  { label: "智能手环", value: 9 },
  { label: "智能音箱", value: 10 },
  { label: "智能插座", value: 11 },
];
const tagList2 = [
  { label: "全部", value: null },
  { label: "小米", value: 1 },
  { label: "华为", value: 2 },
  { label: "苹果", value: 3 },
  { label: "三星", value: 4 },
  { label: "OPPO", value: 5 },
  { label: "VIVO", value: 6 },
  { label: "魅族", value: 7 },
  { label: "联想", value: 8 },
  { label: "一加", value: 9 },
  { label: "锤子", value: 10 },
  { label: "360", value: 11 },
  { label: "中兴", value: 12 },
];
const getList = () => {
  //   getGoodsList(queryParams).then((res) => {
  //     total.value = res.total;
  //   });
};
// getList();
</script>
  
<style lang="scss" scoped>
.goods {
  &-category {
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }
  &-items {
    display: flex;
    flex-wrap: wrap;
  }
  &-box {
    margin: 0 15px 15px 0;
    width: calc(100% / 5 - 15px);
    text-align: center;
    line-height: 1.5;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      transform: translateY(-2px);
    }
    &:nth-child(5n) {
      margin-right: 0;
    }
    .title {
      color: #333;
    }
    .sub-title {
      font-size: 12px;
      color: #999;
    }
    .price {
      color: #f00;
      del {
        font-size: 14px;
        color: #999;
        margin-left: 0.5em;
      }
    }
  }
}
::v-deep .el-segmented {
  background: none;
  &__item {
    margin-right: 15px;
    border-radius: 15px;
    &-selected {
      border-radius: 15px;
    }
  }
}
</style>