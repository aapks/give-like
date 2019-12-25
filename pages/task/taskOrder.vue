<template>
	<view>
		<view class="cu-list menu-avatar">
		  <view class="cu-item" v-for="item in 3" :key="item">
		    <view
		      class="cu-avatar radius lg" >
		  <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image>
		 </view>
		    <view class="content">
		      <view class="text-black">
		        <text class="text-bold">似懂非懂</text>
		        <!-- <text class="text-sm text-grey margin-left-sm">任务剩余量：{{item.}}</text> -->
						<view class="cu-tag radius xs bg-gray margin-left-sm">复制地址抖音打开</view>
		      </view>
		      <view class="text-gray" style="font-size: 12px;">
		        <view class="text-cut">任务数量: 似懂非懂</view>
		        <view class="text-cut">任务要求: 关注/点赞/评论</view>
		      </view>
		    </view>
		    <view class="action">
		      <view class="text-orange text-sm text-bold">234元</view>
		      <button class="cu-btn bg-blue round sm margin-top-lg" style="font-size: 15px;" @click="takeOrder">去审核</button>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			takeOrder() {}
		}
	}
</script>

<style lang="scss">
	.cu-list.menu-avatar>.cu-item .action {
		width: 130rpx;
	}
.cu-list.menu-avatar>.cu-item {
	padding-right: 30rpx;
  height: 220rpx;
}
</style>
