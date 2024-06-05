<template>
  <div class="footer">
    <div class="container">
      <el-row class="ptb-30 server">
        <el-col :span="6" class="server-link">
          <i class="iconfont icon-zhengpin"></i>
          <span>官方正品保证</span>
        </el-col>
        <el-col :span="6" class="server-link">
          <i class="iconfont icon-qitiantuihuan"></i>
          <span>7天无理由退货</span>
        </el-col>
        <el-col :span="6" class="server-link">
          <i class="iconfont icon-m15-copy-copy-copy"></i>
          <span>15天免费换货</span>
        </el-col>
        <el-col :span="6" class="server-link">
          <i class="iconfont icon-baoyou"></i>
          <span>包邮送到家</span>
        </el-col>
      </el-row>
      <el-row justify="center" class="ptb-30">
        <el-col :span="4" class="links">
          <dl class="col-links">
            <dt>选购指南</dt>
            <dd><a href="#" target="_blank">手机</a></dd>
            <dd><a href="#" target="_blank">电视</a></dd>
            <dd><a href="#" target="_blank">笔记本</a></dd>
            <dd><a href="#" target="_blank">平板</a></dd>
            <dd><a href="#" target="_blank">穿戴</a></dd>
            <dd><a href="#" target="_blank">耳机</a></dd>
            <dd><a href="#" target="_blank">家电</a></dd>
            <dd><a href="#" target="_blank">路由器</a></dd>
            <dd><a href="#" target="_blank">音箱</a></dd>
            <dd><a href="#" target="_blank">配件</a></dd>
          </dl>
        </el-col>
        <el-col :span="4" class="links">
          <dl class="col-links">
            <dt>服务中心</dt>
            <dd><a href="#" target="_blank">申请售后</a></dd>
            <dd><a href="#" target="_blank">售后政策</a></dd>
            <dd><a href="#" target="_blank">维修服务价格</a></dd>
            <dd><a href="#" target="_blank">订单查询</a></dd>
            <dd><a href="#" target="_blank">以旧换新</a></dd>
            <dd><a href="#" target="_blank">保障服务</a></dd>
            <dd><a href="#" target="_blank">防伪查询</a></dd>
            <dd><a href="#" target="_blank">F码通道</a></dd>
          </dl>
        </el-col>
        <el-col :span="4" class="links">
          <dl class="col-links">
            <dt>关于珍便宜</dt>
            <dd><a href="#" target="_blank">了解我们</a></dd>
            <dd><a href="#" target="_blank">加入我们</a></dd>
            <dd><a href="#" target="_blank">投资者关系</a></dd>
            <dd><a href="#" target="_blank">环境，社会及管治</a></dd>
            <dd><a href="#" target="_blank">廉洁举报</a></dd>
          </dl>
        </el-col>
        <el-col :span="5" class="links">
          <dl class="col-links">
            <dt>关注我们</dt>
            <dd><a href="#" target="_blank">新浪微博</a></dd>
            <dd>
              <a href="javascript:void(0);" id="J_siteWeixinCode">官方微信</a>
            </dd>
            <dd><a href="#" target="_blank">联系我们</a></dd>
            <dd><a href="#" target="_blank">公益基金会</a></dd>
          </dl>
        </el-col>
        <el-col :span="4" class="links">
          <div class="col-contact">
            <p class="phone">400-888-8888</p>
            <p>8:00-18:00（仅收市话费）</p>
            <a class="btn btn-line-primary btn-small J_contactBtn">
              <em class="iconfont-message2"></em> 人工客服
            </a>
          </div>
        </el-col>
      </el-row>
      <!-- <el-row>
      <el-col :span="24"
        >Copyright © 2012-2020 Maoxxxxxxx有限公司 版权所有</el-col
      >
      <el-col :span="24">备案号：湘ICP备0000000号</el-col>
    </el-row> -->
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  .server {
    font-weight: 700;
    border-bottom: 1px solid #e0e0e0;
    .server-link {
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 24px;
        margin-right: 5px;
      }
    }
  }
  .col-links {
    dt {
      line-height: 50px;
    }
    dd {
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>