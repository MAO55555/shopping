<template>
  <div class="shopping-cart main" style="background-color: #f5f5f5">
    <div class="container">
      <div class="goodsList" v-if="goodsList.length > 0">
        <el-table
          :data="goodsList"
          @selection-change="handleSelectionChange"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55" align="center">
          </el-table-column>
          <el-table-column
            prop="goodsName"
            label="商品名称"
            show-overflow-tooltip
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
          <el-table-column prop="goodsPrice" label="商品单价" align="center">
          </el-table-column>
          <el-table-column label="商品数量" align="center">
            <template #default="{ row }">
              <el-input-number
                v-model="row.goodsNum"
                :min="1"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            prop="goodsTotalPrice"
            label="商品总价"
            align="center"
          >
            <template #default="{ row }">
              <span class="col-total">{{ row.goodsTotalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column label="商品操作" width="120" align="center">
            <template #default="{ row }">
              <el-button
                type="danger"
                icon="Delete"
                circle
                @click="handleDelete(row)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="space-between" class="car-bar">
          <el-col :span="8" class="select">
            <el-button type="success" text @click="$router.push('/')"
              >继续购物</el-button
            >
            <!-- <el-button type="danger">删除选中商品</el-button> -->
            <div class="select-goods">
              <span>已选<span class="select-goods-num">999</span>件商品</span>
            </div>
          </el-col>
          <el-col :span="8" class="total">
            <div class="total-price">
              <span>总价：<span class="total-price-num">9999</span>元</span>
            </div>
            <el-button type="primary">去结算</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="empty" v-else>
        <img
          src="@/assets/images/cart-empty.png"
          style="width: 320px"
          alt="not goods"
        />
        <div class="mb-15">购物车空空如也</div>
        <el-button type="primary" @click="$router.push('/')"
          >去购物吧~</el-button
        >
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

const goodsList = ref([
  {
    goodsName: "xiaomi su7oooooooooooooooooooooooooooooooooooo",
    goodsImg: "@/assets/images/1.png",
    goodsPrice: 199999,
    goodsNum: 1,
    goodsTotalPrice: 199999,
  },
  {
    goodsName: "xiaomi su7",
    goodsImg: "@/assets/images/2.webp",
    goodsPrice: 199999,
    goodsNum: 6,
    goodsTotalPrice: 199999,
  },
  {
    goodsName: "xiaomi su7",
    goodsImg: "@/assets/images/3.webp",
    goodsPrice: 199999,
    goodsNum: 3,
    goodsTotalPrice: 199999,
  },
]);

const handleSelectionChange = (val: any) => {
  console.log(val);
};

const handleDelete = (row: any) => {
  console.log(row);
};
</script>
  
<style lang="scss" scoped>
.col-total {
  color: rgb(255, 80, 80);
}
.car-bar {
  display: static;
  bottom: 0;
  margin-top: 20px;
  height: 50px;
  background: #fff;
  .select {
    display: flex;
    align-items: center;
    margin: 0 5px;
    &-goods {
      margin-left: 15px;
      &-num {
        padding: 0 2px;
        color: red;
      }
    }
  }
  .total {
    display: flex;
    justify-content: end;
    align-items: center;
    &-price {
      margin-right: 30px;
      &-num {
        font-size: 26px;
        color: red;
      }
    }
    .el-button {
      padding: 0 50px;
      height: 100%;
    }
  }
}
</style>