<template>
  <div class="order main" style="background-color: #f5f5f5">
    <div class="container box">
      <ShippingAddress />
      <div class="order-info">
        <div class="title">订单信息</div>
        <div class="order-info-list" v-if="goodsList.length > 0">
          <el-table :data="goodsList" style="width: 100%">
            <el-table-column
              prop="goodsName"
              label="商品"
              show-overflow-tooltip
              highlight-current-row
              align="center"
            >
            </el-table-column>
            <el-table-column prop="goodsImg" label="商品图片" align="center">
              <template #default="{ row }">
                <img
                  :src="row.goodsImg"
                  alt=""
                  style="width: 80px; height: 80px; object-fit: cover"
                />
              </template>
            </el-table-column>
            <el-table-column
              prop="goodsPrice"
              label="商品单价"
              width="180"
              align="center"
            >
              <template #default="{ row }">
                <span>{{ row.goodsPrice }}元 × {{ row.goodsNum }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="freight"
              label="运费"
              width="180"
              align="center"
            >
              <template #default="{ row }">
                <span v-if="row.freight === 0">包邮</span>
                <span v-else>{{ row.goodsPrice }}元</span>
              </template>
            </el-table-column>
            <el-table-column label="商品总价" width="180" align="center">
              <template #default="{ row }">
                <span class="col-total"
                  >{{ row.goodsPrice * row.goodsNum + row.freight }}元</span
                >
              </template>
            </el-table-column>
          </el-table>
          <div class="distribution-mode"></div>
          <div class="order-info-detail">
            <div class="bill-item">
              <div class="bill-name">商品总价：</div>
              <div class="bill-price">{{ totalPrice }}元</div>
            </div>
            <div class="bill-item">
              <div class="bill-name">运费：</div>
              <div class="bill-price">{{ freightTotal }}元</div>
            </div>
            <div class="bill-item">
              <div class="bill-name">优惠券：</div>
              <div class="bill-price">-{{ discountsTotal }}元</div>
            </div>
            <!-- <div class="bill-item">
              <div class="bill-name">会员优惠：</div>
              <div class="bill-price">0元</div>
            </div> -->
            <!-- <div class="bill-item">
              <div class="bill-name">积分抵扣：</div>
              <div class="bill-price">0元</div>
            </div> -->
            <div class="bill-item">
              <div class="bill-name">活动优惠：</div>
              <div class="bill-price">-{{ eventDiscountsTotal }}元</div>
            </div>
            <div class="bill-item">
              <div class="bill-name">实付金额：</div>
              <div class="bill-price">
                <span class="total">{{ actuallyPaid }}</span
                >元
              </div>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="btns">
            <el-button @click="$router.push('/shopping/cart')"
              >返回购物车</el-button
            >
            <el-button type="primary" @click="$router.push('/payDone')">去付款</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from "vue";
import ShippingAddress from "./components/ShippingAddress/index.vue";

const goodsList = ref([
  {
    goodsName: "xiaomi su7 顶配 霞光紫",
    goodsImg: "@/assets/images/1.png",
    goodsPrice: 199999,
    goodsNum: 1,
    freight: 0,
    discounts: 100,
    eventDiscounts: 10,
  },
  {
    goodsName: "xiaomi su7 顶配 水泥灰",
    goodsImg: "@/assets/images/2.webp",
    goodsPrice: 199999,
    goodsNum: 6,
    freight: 0,
    discounts: 300,
    eventDiscounts: 30,
  },
  {
    goodsName: "xiaomi su7 低配 少女粉",
    goodsImg: "@/assets/images/3.webp",
    goodsPrice: 199999,
    goodsNum: 3,
    freight: 0,
    discounts: 500,
    eventDiscounts: 50,
  },
]);

const totalPrice = computed(() => {
  return goodsList.value.reduce((pre, cur) => {
    return pre + cur.goodsPrice * cur.goodsNum;
  }, 0);
});

const freightTotal = computed(() => {
  return goodsList.value.reduce((pre, cur) => {
    return pre + cur.freight;
  }, 0);
});

const discountsTotal = computed(() => {
  return goodsList.value.reduce((pre, cur) => {
    return pre + cur.discounts;
  }, 0);
});

const eventDiscountsTotal = computed(() => {
  return goodsList.value.reduce((pre, cur) => {
    return pre + cur.eventDiscounts;
  }, 0);
});

const actuallyPaid = computed(() => {
  return goodsList.value.reduce((pre, cur) => {
    return (
      pre +
      cur.goodsPrice * cur.goodsNum +
      cur.freight -
      cur.discounts -
      cur.eventDiscounts
    );
  }, 0);
});
</script>
  
<style lang="scss" scoped>
:deep(.title) {
  padding: 0 20px;
  font-weight: bold;
  line-height: 60px;
}
:deep(.el-table--enable-row-hover .el-table__body tr:hover > td) {
  background-color: rgba(255, 255, 255, 0) !important;
}
.box {
  padding: 35px 0;
  background: #fff;
}
.order-info {
  &-list {
    padding: 0 20px;
    .col-total {
      color: rgb(255, 80, 80);
    }
  }
  &-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 20px;
    .bill-item {
      display: flex;
      align-items: end;
      height: 30px;
      &:last-child {
        margin-top: 10px;
      }
    }
    .bill-name {
      display: flex;
      justify-content: end;
      width: 100px;
      font-size: 14px;
      color: #757575;
    }
    .bill-price {
      display: flex;
      justify-content: end;
      min-width: 80px;
      font-size: 14px;
      color: #f56c6c;
      &:last-child {
        display: flex;
        align-items: end;
        margin-top: 100px;
      }
      .total {
        font-size: 30px;
        color: #f15b5b;
        line-height: 0.8;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: end;
    .el-button {
      padding: 20px 40px;
    }
  }
}
.distribution-mode {
  padding: 0 20px;
  font-weight: bold;
  line-height: 60px;
}
</style>