<template>
  <div class="shipping-address">
    <div class="container">
      <div class="title">收货地址</div>
      <div class="shipping-address-list">
        <div
          v-for="item in addressList"
          :key="item.id"
          @click="handleSelect(item)"
          :class="[
            'shipping-address-item',
            item.id == addressActive ? 'active' : '',
          ]"
        >
          <div class="header">
            <div class="addressee">{{ item.name }}</div>
            <div class="address-default" v-if="item.isDefault">默认地址</div>
          </div>
          <div class="addressee-phone">{{ phoneHide(item.phone) }}</div>
          <div class="address">{{ item.provinceName + item.cityName }}</div>
          <el-tooltip
            :content="item.addressDetail"
            :disabled="item.addressDetail.length <= 32"
            placement="top"
            effect="light"
          >
            <div class="address-detail">{{ item.addressDetail }}</div>
          </el-tooltip>
          <div class="address-operation">
            <!-- <div class="address-default" v-if="item.isDefault">默认地址</div> -->
            <el-button
              v-if="!item.isDefault"
              type="primary"
              size="small"
              text
              @click="handleDefault(item)"
              >设为默认地址</el-button
            >
            <el-button
              type="primary"
              size="small"
              text
              @click="handleUpdate(item)"
              >修改</el-button
            >
            <el-button
              type="primary"
              size="small"
              text
              @click="handleDelete(item)"
              >删除</el-button
            >
          </div>
        </div>
        <div class="shipping-address-item address-add" @click="handleAdd">
          <el-icon :size="24">
            <Plus />
          </el-icon>
          <span>新增地址</span>
        </div>
      </div>

      <el-dialog
        v-model="dialogFormVisible"
        title="新增收件地址"
        width="600"
        :before-close="handleClose"
        draggable
        align-center
      >
        <el-form :model="form" ref="formRef" :rules="rules">
          <el-form-item prop="name" :label-width="formLabelWidth">
            <el-input
              v-model="form.name"
              placeholder="收件人"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item prop="phone" :label-width="formLabelWidth">
            <el-input
              v-model="form.phone"
              placeholder="手机号"
              autocomplete="off"
            />
          </el-form-item>
          <el-row style="width: 100%">
            <el-col :span="12">
              <el-form-item prop="province" :label-width="formLabelWidth">
                <el-select
                  v-model="form.province"
                  placeholder="省份"
                  style="width: 100%"
                  @change="changeProvince()"
                >
                  <el-option
                    v-for="item in provinceList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="city" :label-width="formLabelWidth">
                <el-select
                  v-model="form.city"
                  placeholder="市 / 区"
                  style="width: 100%"
                  @change="changeCity()"
                >
                  <el-option
                    v-for="item in cityList"
                    :key="item.code"
                    :label="item.name"
                    :value="item.code"
                  />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="addressDetail" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :rows="3"
              maxlength="50"
              show-word-limit
              v-model="form.addressDetail"
              placeholder="详细地址"
              autocomplete="off"
            />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="handleSubmit"> 确认 </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { Plus } from "@element-plus/icons-vue";
import { ref, onMounted, reactive } from "vue";
import type { FormRules } from "element-plus";
import { ElMessage, ElMessageBox } from "element-plus";

onMounted(() => {
  getProvince();
  addressList.value.filter((item: any) => {
    if (item.isDefault) {
      addressActive.value = item.id;
    }
  });
});

const addressList = ref([
  {
    id: 1,
    name: "可乐",
    phone: "12345678901",
    province: "440000",
    provinceName: "广东省",
    city: "440100",
    cityName: "广州市",
    addressDetail: "增城区光明村",
    isDefault: false,
  },
  {
    id: 2,
    name: "可乐",
    phone: "12345678901",
    province: "440000",
    provinceName: "广东省",
    city: "440100",
    cityName: "广州市",
    addressDetail:
      "光明村水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水",
    isDefault: true,
  },
  {
    id: 3,
    name: "可乐",
    phone: "12345678901",
    province: "440000",
    provinceName: "广东省",
    city: "440100",
    cityName: "广州市",
    addressDetail: "光明村",
    isDefault: false,
  },
]);

const addressActive = ref();
const dialogFormVisible = ref(false);
const formLabelWidth = "0";
const form = ref({
  name: "",
  phone: "",
  province: "",
  provinceName: "",
  city: "",
  cityName: "",
  address: "",
  addressDetail: "",
  postalCode: "",
});
const formRef = ref<any>(null);
const provinceList = ref();
const cityList = ref();

const validPhone = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error("请输入手机号"));
  } else {
    const reg = /^1[3|4|5|7|8]\d{9}$/;
    if (reg.test(value)) {
      callback();
    } else {
      return callback(new Error("请输入正确的手机号"));
    }
  }
};
const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: "请输入收货人姓名",
      trigger: "blur",
    },
  ],
  phone: [
    {
      validator: validPhone,
      trigger: "blur",
    },
  ],
  province: [
    {
      required: true,
      message: "请选择省份",
      trigger: "change",
    },
  ],
  city: [
    {
      required: true,
      message: "请选择市 / 区",
      trigger: "change",
    },
  ],
  address: [
    {
      required: true,
      message: "请输入详细地址",
      trigger: "blur",
    },
    { min: 5, max: 50, message: "长度在 5 到 50 个字符", trigger: "blur" },
  ],
});

const phoneHide = (phone: any) => {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
};

const getProvince = async () => {
  const res = await import("@/position.json");
  provinceList.value = res.default;
};

const changeProvince = () => {
  form.value.provinceName = provinceList.value.find(
    (item: any) => item.code == form.value.province
  ).name;
  form.value.city = "";
  getCity();
};

const changeCity = () => {
  form.value.cityName = cityList.value.find(
    (item: any) => item.code == form.value.city
  ).name;
};

const getCity = () => {
  cityList.value = provinceList.value.find(
    (item: any) => item.code == form.value.province
  ).children;
};

const handleSelect = (row: any) => {
  addressActive.value = row.id;
};

const handleAdd = () => {
  dialogFormVisible.value = true;
};

const handleClose = () => {
  form.value = {
    name: "",
    phone: "",
    province: "",
    provinceName: "",
    city: "",
    cityName: "",
    address: "",
    addressDetail: "",
    postalCode: "",
  };
  formRef.value.resetFields();
  dialogFormVisible.value = false;
};

const handleDefault = (row: any) => {
  addressList.value.forEach((item: any) => {
    item.isDefault = false;
  });
  row.isDefault = true;
};

const handleUpdate = (row: any) => {
  form.value = row;
  getCity();
  dialogFormVisible.value = true;
  console.log(row);
};

const handleDelete = (row: any) => {
  ElMessageBox.confirm("确认要删除这个收货地址吗?", "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    ElMessage({
      type: "success",
      message: "删除收货地址成功",
    });
  });
  console.log(row);
};

const handleSubmit = () => {
  formRef.value.validate(async (valid: any) => {
    if (valid) {
      console.log(form.value);
      dialogFormVisible.value = false;
    }
  });
};
</script>
    
<style lang="scss" scoped>
.shipping-address {
  background: #fff;
  .shipping-address-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    .shipping-address-item {
      padding: 10px 20px;
      width: calc(100% / 4 - 12px);
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 0 15px 15px 0;
      cursor: pointer;
      &:nth-child(4n) {
        margin-right: 0;
      }
      &:hover {
        border: 1px solid #bbb;
        transition: all 0.5s;
        .address-operation {
          .el-button {
            visibility: visible;
          }
        }
      }
      .header {
        display: flex;
        justify-content: space-between;
        .address-default {
          color: #ff6600;
        }
      }
      .addressee {
        font-weight: bold;
        margin-bottom: 15px;
      }
      .addressee-phone,
      .address,
      .address-detail,
      .address-default {
        font-size: 14px;
        color: #757575;
        line-height: 22px;
      }
      .address-detail {
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .address-operation {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 5px;
        .address-default {
          color: #ff6600;
        }
        .el-button {
          margin-left: 10px;
          visibility: hidden;
        }
      }
    }
    .active {
      border: 1px solid #ff6600 !important;
      .address-operation {
        .el-button {
          visibility: visible
        }
      }
    }
  }
  .address-add {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 170px;
    color: rgba($color: #333, $alpha: 0.6);
    cursor: pointer;
    &:hover {
      background: #f5f5f5;
    }
  }
}
</style>