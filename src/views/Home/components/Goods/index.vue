<template>
  <div class="goods container">
    <h2 class="page-title">商品列表</h2>
    <el-row gutter="30">
      <el-col :span="6" class="goods-ad">
        <router-link to="/">
          <img src="@/assets/images/adwebp.webp" alt="" />
        </router-link>
      </el-col>
      <el-col :span="18" class="goods-items">
        <el-card shadow="hover" class="goods-box" v-for="o in 8" :key="o">
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
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.goods {
  &-ad {
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;

    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }
  &-box {
    width: 24%;
    // margin-bottom: 15px;
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
      // font-size: 14px;
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
</style>