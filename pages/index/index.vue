<template>
  <view>
    <task v-if="PageCur=='task'"></task>
    <!-- 商城 -->
    <!-- 发布 -->
    <!-- <publish v-if="PageCur=='publish'"></publish> -->
    <!-- 发现 -->
    <!-- 我的 -->
    <user v-if="PageCur=='user'"></user>
    <components v-if="PageCur=='component'"></components>
    <plugin v-if="PageCur=='plugin'"></plugin>

    <view class="cu-bar tabbar bg-white shadow foot">
      <view class="action" @click="NavChange" data-cur="task">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/task' + [PageCur=='task'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='task'?'text-orange':'text-gray'">任务大厅</view>
      </view>
      <view class="action" @click="NavChange" data-cur="component">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/shop' + [PageCur == 'component'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='component'?'text-orange':'text-gray'">会员商城</view>
      </view>
      <view class="action text-gray add-action" @click="NavChange" data-cur="publish">
        <button class="cu-btn cuIcon-camerafill bg-orange shadow">
        </button>
      </view>
      <view class="action" @click="NavChange" data-cur="plugin">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/find' + [PageCur == 'plugin'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='plugin'?'text-orange':'text-gray'">发现</view>
      </view>
      <view class="action" @click="NavChange" data-cur="user">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/user' + [PageCur == 'user'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='user'?'text-orange':'text-gray'">我的</view>
      </view>
    </view>

    <!-- <basics v-if="PageCur=='task'"></basics> -->
    <!-- <view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-orange':'text-gray'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-orange':'text-gray'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-orange':'text-gray'">扩展</view>
			</view>
    </view>-->
  </view>
</template>

<script>
export default {
  data() {
    return {
      PageCur: "task"
    };
  },
  
  onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function() {
      uni.showToast({
        title: "已刷新"
      });
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom() {
    console.log("到底了");
    this.more = "loading";
  },
  methods: {
    NavChange: function(e) {
      // console.log(e);
      this.PageCur = e.currentTarget.dataset.cur;
    }
  }
};
</script>

<style>
/* page {
  padding-bottom: 100rpx;
} */
.cu-bar.tabbar .action.add-action [class*="cuIcon-"] {
  background-image: url('../../static/tabbar/fabu@2x.png');
}
</style>
