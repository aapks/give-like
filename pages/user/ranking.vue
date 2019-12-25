<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">排行榜</block>
		</cu-custom>
		<view class="rank-list padding">
			<view class="text-center margin-bottom-lg">
				<text class="cuIcon-back margin-right-sm"></text>
				2019-12-03
				<text class="cuIcon-right margin-left-sm"></text>
			</view>
			<view class="grid col-3 margin-top-xl margin-bottom-lg" style="margin-top: 120rpx;">
				<view class="grid-item text-center">
					<view class="cu-tag badge">
						2
					</view>
					<view class="cu-avatar round xl" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						
					<view>
						<text>用户昵称</text>
						<view class="cu-tag xs bg-orange round">高级会员</view>
						<view>￥3242.45</view>
					</view>
				</view><view class="grid-item text-center" style="position: relative;top: -70rpx;">
					<view class="cu-tag badge">
						1
					</view>
					<view class="cu-avatar round xl" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						
					<view>
						<text>用户昵称</text>
						<view class="cu-tag xs bg-orange round">高级会员</view>
						<view>￥3242.45</view>
					</view>
				</view><view class="grid-item text-center">
					<view class="cu-tag badge">
						3
					</view>
					<view class="cu-avatar round xl" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
						
					<view>
						<text>用户昵称</text>
						<view class="cu-tag xs bg-orange round">高级会员</view>
						<view>￥3242.45</view>
					</view>
				</view>
			</view>
			<view class="rank-list-item flex align-center justify-between">
				<view>
					<text class="text-black text-bold text-xl margin-right-lg">4</text>
					<view class="cu-avatar round lg margin-right-lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					<text class=" margin-right-sm">用户昵称</text>
					<text class="cu-tag xs bg-orange round">高级会员</text>
				</view>
				<view>￥3242.45</view>
			</view><view class="rank-list-item flex align-center justify-between">
				<view>
					<text class="text-black text-bold text-xl margin-right-lg">4</text>
					<view class="cu-avatar round lg margin-right-lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					<text class=" margin-right-sm">用户昵称</text>
					<text class="cu-tag xs bg-orange round">高级会员</text>
				</view>
				<view>￥3242.45</view>
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
.rank-list-item {
	margin-bottom: 30rpx;
}
.grid-item {
	position: relative;
	.cu-tag.badge {
		position: absolute;
		left: 80rpx;
		top: -10rpx;
		right: auto;
		z-index: 999;
	}
}
</style>
