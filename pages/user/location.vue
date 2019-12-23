<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">地址</block>
		</cu-custom>
		<view class="cu-list menu-avatar">
			<view class="cu-item padding-sm">
				<view class="block">
					<view class="margin-bottom-xs flex justify-between">
						<view>
							<text class="text-bold margin-right-lg">李牧尘</text>          1378789789234
						</view>
						<view>
							<navigator url="/pages/user/address">
								<text class="cuIcon-edit"></text>
								编辑
							</navigator>
						</view>
					</view>
					<view class="text-gray text-sm">河南郑州高新区863软件园11号楼1101</view>
					<view class="flex justify-between margin-top-xs">
						<view>
							<checkbox
								class="margin-right-xs"
							  :class="checked?'checked':''"
							  :checked="checked?true:false"
							  @click="CheckboxChange(item)"
							  value="A"
							></checkbox>
							设为默认</view>
						<view>
							<text class="cuIcon-delete"></text>
							删除地址</view>
					</view>
				</view>
				<!-- <view class="content">
					<view class="text-grey">凯尔</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text>
							我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-grey sm">5</view>
				</view> -->
			</view>
		</view>
		<view class="padding">
			<button class="cu-btn block lg bg-orange" @click="add">添加地址</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				list:[]
			};
		},
		async onLoad(){
			await this.$api.Myaddrsss().then(res=>{
				
			})
		},
		methods:{
			address(){
				uni.navigateTo({
					url:'./address',
					animationDuration:200,
					animationType:'fade-in'
		methods: {
			add() {
				uni.navigateTo({
					url: '/pages/user/address'
				})
			}
		}
	}
</script>

<style lang="scss">
.cu-list.menu-avatar>.cu-item {
	justify-content: flex-start;
	height: auto;
	.block {
		width: 100%;
	}
}
uni-checkbox .uni-checkbox-input {
	width: 20rpx;
	height: 20rpx;
}
</style>
