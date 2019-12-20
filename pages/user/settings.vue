<template>
  <view>
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">设置</block>
    </cu-custom>
    <view
      class="cu-list menu"
      :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']"
    >
      <view class="cu-item" :class="menuArrow?'arrow':''">
        <navigator hover-class="none" class="block">
          <view class="content">
            <text class="cuIcon-info text-grey"></text>
            <text class="text-grey">设置支付密码</text>
          </view>
        </navigator>
      </view>
      <view class="cu-item" :class="menuArrow?'arrow':''">
        <navigator hover-class="none" class="block">
          <view class="content">
            <text class="cuIcon-info text-grey"></text>
            <text class="text-grey">修改登录密码</text>
          </view>
        </navigator>
      </view>
      <view class="cu-item" :class="menuArrow?'arrow':''">
        <navigator hover-class="none" class="block" url="/pages/user/changePhone">
          <view class="content">
            <text class="cuIcon-info text-grey"></text>
            <text class="text-grey">更换手机号</text>
          </view>
        </navigator>
      </view>
      <view class="cu-item" :class="menuArrow?'arrow':''">
        <view class="content">
          <text class="cuIcon-info text-grey"></text>
          <text class="text-grey">清除缓存</text>
        </view>
        <view class="text-gray text-sm">24Mb</view>
      </view>
      <view class="cu-item" :class="menuArrow?'arrow':''">
        <view class="content">
          <text class="cuIcon-info text-grey"></text>
          <text class="text-grey">版本更新</text>
        </view>
        <view class="text-gray text-sm">v1.1.2最新版</view>
      </view>
    </view>
    <view class="padding">
      <button class="cu-btn lg bg-orange block" @click="logout">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      menuBorder: false,
      menuCard: false
    };
  },
  methods: {
    logout() {}
  }
};
</script>

<style lang="scss">
.cu-item {
  .block {
    width: 100%;
  }
}
</style>
