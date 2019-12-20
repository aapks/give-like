<template>
	<view>
		<view class="padding">
			<view>
		<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				
				<view>
					李牧尘
				</view>
			</view>
		
		<view class="">
			<view>27563余额</view>
			<view>349团队人数</view>
		</view>
		
		<view class="flex justify-between bg-blue radius padding">
			<view class="flex justify-between align-center text-sm">
				<view class='cu-tag radius bg-red'>尊享会员</view>
				<view class="margin-left-sm">
					
			升级尊享会员，享更多权益
				</view>
				
			</view>
			
			<button class="cu-btn bg-orange radius sm" @click="update">即刻升级</button>
		</view>
			
		</view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-orange"></text>
				<text>更多服务</text>
			</view>
		</view>
		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*3">
				<navigator :url="item.url">
					
				
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view>
				<text>{{item.name}}</text>
				</navigator>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 0,
					name: '升级会员'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '我的任务',
					url: '/pages/task/mytask'
				}, {
					cuIcon: 'order',
					color: 'yellow',
					badge: 0,
					name: '推广邀请'
				}, {
					cuIcon: 'selection',
					color: 'olive',
					badge: 22,
					name: '任务达人'
				}, {
					cuIcon: 'home',
					color: 'cyan',
					badge: 0,
					name: '超级店主'
				}, {
					cuIcon: 'like',
					color: 'red',
					badge: 0,
					name: '我的收藏'
				}, {
					cuIcon: 'friendfavor',
					color: 'purple',
					badge: 0,
					name: '我的关注'
				}, {
					cuIcon: 'upstagefill',
					color: 'yellow',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'addressbook',
					color: 'purple',
					badge: 0,
					name: '实名认证'
				}, {
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '商家合作'
				}, {
					cuIcon: 'settings',
					color: 'black',
					badge: 0,
					name: '系统设置'
				}, {
					cuIcon: 'vipcard',
					color: 'blue',
					badge: 0,
					name: '我的名片'
				}],
				gridCol: 4,
				gridBorder: false
			};
		},
		methods:{
			update() {
				console.log('升级');
			}
		}
	}
</script>

<style lang="scss">

</style>
