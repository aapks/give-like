<template>
	<view class="page">
		<cu-custom style="background-color: #fff;" bgcolor="bg-white" :isBack="true">
		  <block slot="content">开通会员</block>
		</cu-custom>
		<view class="panel padding">
			<view class="address padding-sm" @click="toLocaltion">
				<view class="text-bold text-black">王希捷   <text class="text-xl margin-left-sm">158****6993</text></view>
				<view>河南郑州二七区绿地滨湖2区22楼2207</view>
				
				<text class="cuIcon-right"></text>
			</view>
			<view class="good padding">
				<view class="text-right flex align-center justify-end">
					<image class="vip margin-right-sm" src="../../static/vip@2x.png"></image>尊享会员
				</view>
				<view class="flex justify-start">
					<view class="cu-avatar radius lg margin-right-sm">
							    <image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image></view>
									<view>
										<view>产品名称产品名称产品名称产品名称</view>
										<view class="text-black text-bold text-lg">￥120</view>
										<text>x1</text>
									</view>
				</view>
			</view>
		</view>
		<view class="panel">
			<view class="cu-form-group">
				<view class="title">商品金额</view>
				<view class="text-black text-bold text-lg">￥120</view>
			</view>
			<view class="cu-form-group">
				<view class="title">总计</view>
				<view class="text-black text-bold text-lg">￥120</view>
			</view>
			<view class="cu-form-group align-start">
							<view class="title">买家留言</view>
							<textarea maxlength="-1" placeholder=""></textarea>
						</view>
		</view>
		
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
					<view class="cu-dialog">
						<view class="cu-bar bg-white">
							<view class="action text-green" @click="buyNow">确定</view>
							<view class="action text-blue" @tap="hideModal">取消</view>
						</view>
						<view class="padding-xl bg-white">
							<radio-group class="block" @change="RadioChange">
										<view class="cu-form-group margin-top">
											<view class="title">微信支付</view>
											<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
										</view>
										<view class="cu-form-group margin-top">
											<view class="title">支付宝支付</view>
											<radio :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
										</view>
									</radio-group>
						</view>
					</view>
				</view>
				
		<view class="cu-bar tabbar flex justify-between footbar">
			<view class="price">￥130.00</view>
			<button class="cu-btn block lg bg-orange round"  @tap="showModal" data-target="bottomModal">立即购买</button>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: '',
				radio: ''
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
							this.modalName = null
						},
						RadioChange(e) {
										this.radio = e.detail.value
									},
									buyNow() {},
									toLocaltion() {
										uni.navigateTo({
											url:'/pages/user/location'
										})
									}
		}
	}
</script>

<style lang="scss">
	.page {
		min-height: 100vh;
		background-color: rgb(248,248,248);
	}
.footbar {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 0 30rpx;
	background-color: #fff;
}
.price {
	font-size: 20px;
	font-weight: bold;
}
.panel {
	margin-bottom: 20rpx;
	background-color: #fff;
}
.address {
	position: relative;
	border: 1px dashed #eee;
}
.cuIcon-right {
	position: absolute;
	top: 50rpx;
	right: 20rpx;
}
.vip {
  width: 60rpx;
  height: 30rpx;
  margin-left: 14rpx;
}
.cu-avatar {
	flex: 0 0 120rpx;
	width: 120rpx;
	height: 120rpx;
}
</style>
