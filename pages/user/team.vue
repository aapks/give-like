<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">团队</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
		        <view class="flex text-center">
		          <view
		            class="cu-item flex-sub"
		            :class="index==TabCur?'text-orange cur':''"
		            v-for="(item,index) in navArr"
		            :key="index"
		            @tap="tabSelect"
		            :id="item.id"
		        :data-index="index"
		          >{{item.name}}</view>
		        </view>
		      </scroll-view>
		<view class="cu-list menu-avatar">
		      <view class="cu-item" v-for="item in tasklist" :key="item.id">
		        <view
		          class="cu-avatar radius lg"
		        >
				    <image :src="getImgUrl(item.thumb)" mode=""></image></view>
		        <view class="content">
		          <view class="text-black">
		            {{item.cname?item.cname:""}}
		            <text class="text-sm text-grey margin-left-sm">任务剩余量：{{item.sur_num?item.sur_num:0}}</text>
		          </view>
		          <view class="text-gray text-xs">
		            <view class="text-cut">任务要求: {{item.type?item.type:""}}</view>
		            <view class="text-cut">需求方:{{item.nickname}}</view>
		            <view class="paystate">已付款</view>
		          </view>
		        </view>
		        <view class="action">
		          <view class="text-red text-sm text-bold margin-bottom-xs">{{item.price?item.price:0}}元</view>
		          <button class="cu-btn bg-orange round sm" @click="takeOrder(item.id)">接单</button>
		        </view>
		      </view>
					</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navArr: [{
					id: 1,
					name: '直推用户'
				},{
					id: 2,
					name: '简推用户'
				}],
				TabCur: 0
			};
		},
		methods: {
			tabSelect(e) {
			  this.TabCur = e.currentTarget.dataset.index;
			}
		}
	}
</script>

<style lang="scss">

</style>
