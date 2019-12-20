<template>
  <view class="page">
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">我的任务</block>
    </cu-custom>
    <scroll-view scroll-x class="bg-white nav">
      <view class="flex text-center">
        <view
          class="cu-item flex-sub"
          :class="index==TabCur?'text-orange cur':''"
          v-for="(item,index) in navArr"
          :key="index"
          @tap="tabSelect"
          :data-id="index"
        >{{item.title}}</view>
      </view>
    </scroll-view>

    <view class="cu-list menu-avatar">
      <view class="cu-item" v-for="item in 7" :key="item">
        <view
          class="cu-avatar radius lg"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
        ></view>
        <view class="content">
          <view class="text-black">
            抖音
            <text class="text-sm text-grey margin-left-sm">任务剩余量：2342</text>
          </view>
          <view class="text-gray text-xs flex justify-between">
            <view class="text-cut">任务要求: 关注/点赞/评论</view>
            <view class="text-cut">需求方: xxx</view>
          </view>
        </view>
        <view class="action">
          <view class="text-red text-sm text-bold margin-bottom-xs">1.00元</view>
          <button class="cu-btn bg-blue round sm" @click="toUpload">上传凭证</button>
        </view>
      </view>
    </view>
    <view class="cu-load load-modal" v-if="loadModal">
      <!-- <view class="cuIcon-emojifill text-orange"></view> -->
      <image src="/static/logo.png" mode="aspectFit" />
      <view class="gray-text">接单中...</view>
    </view>
    <view class="cu-tabbar-height"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      navArr: [
        {
          title: "已接任务"
        },
        {
          title: "待审核"
        },
        {
          title: "完成任务"
        },
        {
          title: "被驳回"
        }
      ],
      TabCur: 0,
      loadModal: false
    };
  },
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    },
    toUpload() {
      uni.navigateTo({
        url: "/pages/task/upload"
      });
    }
  }
};
</script>

<style lang="scss">
.page {
  height: 100vh;
}
.cu-list.menu-avatar > .cu-item .content {
  width: calc(100% - 52px - 33px - 80px - 11px);
}
.cu-list.menu-avatar > .cu-item .action {
  width: 160rpx;
}
</style>
