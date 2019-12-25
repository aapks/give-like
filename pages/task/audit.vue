<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">审核</block>
		</cu-custom>
		<view class="cu-list menu-avatar">
		  <view class="cu-item align-start margin-top-sm">
		    <view
		      class="cu-avatar radius lg user-avatar" >
		  <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image>
		 </view>
		    <view class="content">
		      <view class="text-black">
		        <text class="text-bold">似懂非懂</text>
		        <!-- <text class="text-sm text-grey margin-left-sm">任务剩余量：{{item.}}</text> -->
						<view class="cu-tag radius xs bg-blue margin-left-sm">已上传凭证</view>
		      </view>
		      <view class="text-gray margin-top-sm" style="font-size: 12px;">
		        <view class="text-cut">抖音昵称：xxxx <view class="cu-tag radius xs bg-gray margin-left-sm">复制地址抖音打开</view></view>
		        <view class="text-cut">任务平台：抖音</view>
		        <view class="text-cut">任务要求: 关注/点赞/评论</view>
		        <view class="text-cut">剩余数量：199</view>
		      </view>
		    </view>
		    <view class="action">
		      <view class="text-orange text-sm text-bold">234元</view>
		    </view>
		  </view>
		</view>
		
		<view class="padding text-black text-bold">任务凭证</view>
		
		<view class="grid col-3">
			<view class="grid-item">
				<view
				     class="cu-avatar radius lg" >
				 <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image>
				</view>
			</view><view class="grid-item">
				<view
				     class="cu-avatar radius lg" >
				 <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image>
				</view>
			</view><view class="grid-item">
				<view
				     class="cu-avatar radius lg" >
				 <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image>
				</view>
			</view><view class="grid-item">
				<view
				     class="cu-avatar radius lg" >
				 <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image>
				</view>
			</view><view class="grid-item">
				<view
				     class="cu-avatar radius lg" >
				 <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image>
				</view>
			</view><view class="grid-item">
				<view
				     class="cu-avatar radius lg" >
				 <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="padding-lg flex justify-between margin-top-lg" style="padding: 40rpx 150rpx;">
			<view>
			<button class="cu-btn bg-green lg">通过</button>
			</view>
			<view>
			<button class="cu-btn bg-red lg">拒绝</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.grid-item {
	padding: 40rpx;
	.cu-avatar {
		width: 160rpx;
		height: 160rpx;
	}
}
.cu-list.menu-avatar>.cu-item .content {
	left: 170rpx;
}
	.cu-list.menu-avatar>.cu-item .action {
		width: 130rpx;
	}
.cu-list.menu-avatar>.cu-item {
	align-items: flex-start;
	padding-right: 30rpx;
  min-height: 270rpx;
}
.user-avatar {
	width: 120rpx;
	height: 120rpx;
}
</style>
