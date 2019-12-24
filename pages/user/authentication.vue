<template>
  <view>
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">实名认证</block>
    </cu-custom>
    <form>
      <view class="cu-form-group">
        <view class="title">姓名</view>
        <input placeholder="请输入真实姓名" type="text" />
      </view>
      <view class="cu-form-group">
        <view class="title">身份证号</view>
        <input placeholder="请输入身份证号" type="text" />
      </view>
    </form>
    <view class="padding">
      <view class="auth-item flex">
        <view class="basis-df">
          <image class="bg" src="../../static/auth1.png" />
        </view>
        <view class="basis-df">
          <view class="cu-form-group">
            <view class="grid col-2 grid-square flex-sub">
              <view
                class="bg-img"
                v-for="(item,index) in imgList"
                :key="index"
                @tap="ViewImage"
                :data-url="imgList[index]"
              >
                <image :src="imgList[index]" mode="aspectFill" />
                <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
                  <text class="cuIcon-close"></text>
                </view>
              </view>
              <view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
                <text class="cuIcon-cameraadd"></text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="auth-item flex">
        <view class="basis-df">
          <image class="bg" src="../../static/auth2.png" />
        </view>
        <view class="basis-df">
          <view class="cu-form-group">
            <view class="grid col-2 grid-square flex-sub">
              <view
                class="bg-img"
                v-for="(item,index) in imgList"
                :key="index"
                @tap="ViewImage"
                :data-url="imgList[index]"
              >
                <image :src="imgList[index]" mode="aspectFill" />
                <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
                  <text class="cuIcon-close"></text>
                </view>
              </view>
              <view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
                <text class="cuIcon-cameraadd"></text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="auth-item flex">
        <view class="basis-df">
          <image class="bg" src="../../static/auth3.png" />
        </view>
        <view class="basis-df">
          <view class="cu-form-group">
            <view class="grid col-2 grid-square flex-sub">
              <view
                class="bg-img"
                v-for="(item,index) in imgList"
                :key="index"
                @tap="ViewImage"
                :data-url="imgList[index]"
              >
                <image :src="imgList[index]" mode="aspectFill" />
                <view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
                  <text class="cuIcon-close"></text>
                </view>
              </view>
              <view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
                <text class="cuIcon-cameraadd"></text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <button class="cu-btn block lg bg-orange">提交审核</button>
      <view class="text-gray margin-top-sm">
        注意事项:
        <view>1.请保证身份证照片清晰完整,无任何遮挡,同时避免照片反光</view>
        <view>2.请尽量让身份证照片占满屏幕,并且露出身份证边缘</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    ChooseImage() {
      uni.chooseImage({
        count: 4, //默认9
        sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album"], //从相册选择
        success: res => {
          if (this.imgList.length != 0) {
            this.imgList = this.imgList.concat(res.tempFilePaths);
          } else {
            this.imgList = res.tempFilePaths;
          }
        }
      });
    },
    ViewImage(e) {
      uni.previewImage({
        urls: this.imgList,
        current: e.currentTarget.dataset.url
      });
    },
    DelImg(e) {
      uni.showModal({
        title: "提示",
        content: "确定要删除这段回忆吗？",
        cancelText: "再看看",
        confirmText: "再见",
        success: res => {
          if (res.confirm) {
            this.imgList.splice(e.currentTarget.dataset.index, 1);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
.auth-item {
  height: 200rpx;
  padding: 30rpx;
  margin-bottom: 30rpx;
  border: 1rpx dashed #999999;
}
.bg {
  width: 200rpx;
  height: 150rpx;
}
</style>
