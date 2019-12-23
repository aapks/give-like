<template>
  <view>
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">地址</block>
    </cu-custom>
    <form>
      <view class="cu-form-group">
        <view class="title">收货人</view>
        <input placeholder="请输入收货人" />
      </view>
      <view class="cu-form-group">
        <view class="title">收货电话</view>
        <input type="number" placeholder="请输入手机号码" name="phone" maxlength="11" />
      </view>
      <view class="cu-form-group">
        <view class="title">收货地址</view>
        <picker
          mode="multiSelector"
          @change="MultiChange"
          @columnchange="MultiColumnChange"
          :value="multiIndex"
          :range="multiArray"
        >
          <view
            class="picker"
          >{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}</view>
        </picker>
      </view>
      <view class="cu-form-group">
        <view class="title">详细地址</view>
        <input placeholder="请输入详细地址" />
      </view>
      <view class="cu-form-group">
        <view>
          <checkbox
            class="margin-right-xs"
            :class="checked?'checked':''"
            :checked="checked?true:false"
            @click="CheckboxChange"
            value="A"
          ></checkbox>设为默认收货地址
        </view>
      </view>
      <view class="padding">
        <button class="cu-btn block bg-orange margin-tb-sm lg" @click="save">提交</button>
      </view>
    </form>
  </view>
</template>

<script>
import { data, province, city, area, town } from "province-city-china/data";
export default {
  data() {
    return {
      checked: false,
      multiArray: [[], [], []],
      multiIndex: [0, 0, 0]
    };
  },
  onLoad() {
    this._initdata();
  },
  methods: {
    _initdata() {
      let that = this;
      this.multiArray[0] = province.map(item => item.name);
      this.multiArray[1] = ["北京市"];
      this.multiArray[2] = area
        .filter(item => item.province === province[that.multiIndex[0]].province)
        .map(item => item.name);
    },
    format(params) {
      let that = this;
      let citydata = city.filter(
        item => item.province === province[params[0]].province
      );

      let areadata = citydata.length
        ? area.filter(
            item =>
              item.province === citydata[params[1]].province &&
              item.city === citydata[params[1]].city
          )
        : area.filter(item => item.province === province[params[0]].province);
      // 市
      this.multiArray[1] = citydata.length
        ? citydata.map(item => item.name)
        : [province[params[0]].name];
      // // 区
      // ;
      this.multiArray[2] = areadata.map(item => item.name);
    },
    CheckboxChange() {
      this.checked = !this.checked;
    },
    MultiChange(e) {
      this.multiIndex = e.detail.value;
    },
    MultiColumnChange(e) {
      let data = {
        multiArray: this.multiArray,
        multiIndex: this.multiIndex
      };
      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          // ;
          this.format([e.detail.value, 0, 0]);
          // switch (data.multiIndex[0]) {
          // 	case 0:
          // 		data.multiArray[1] = city;
          // 		data.multiArray[2] = area;
          // 		break;
          // 	case 1:
          // 		data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
          // 		data.multiArray[2] = ['鲫鱼', '带鱼'];
          // 		break;
          // }
          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
        case 1:
          this.format([this.multiIndex[0], e.detail.value, 0]);
          data.multiIndex[2] = 0;
          break;
        // case 1:
        // 	switch (data.multiIndex[0]) {
        // 		case 0:
        // 			switch (data.multiIndex[1]) {
        // 				case 0:
        // 					data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
        // 					break;
        // 				case 1:
        // 					data.multiArray[2] = ['蛔虫'];
        // 					break;
        // 				case 2:
        // 					data.multiArray[2] = ['蚂蚁', '蚂蟥'];
        // 					break;
        // 				case 3:
        // 					data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
        // 					break;
        // 				case 4:
        // 					data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
        // 					break;
        // 			}
        // 			break;
        // 		case 1:
        // 			switch (data.multiIndex[1]) {
        // 				case 0:
        // 					data.multiArray[2] = ['鲫鱼', '带鱼'];
        // 					break;
        // 				case 1:
        // 					data.multiArray[2] = ['青蛙', '娃娃鱼'];
        // 					break;
        // 				case 2:
        // 					data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
        // 					break;
        // 			}
        // 			break;
        // 	}
        // 	data.multiIndex[2] = 0;
        // 	break;
      }
      // this.multiArray = data.multiArray;
      this.multiIndex = data.multiIndex;
    }
  }
};
</script>

<style lang="scss">
</style>
