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
          :id="item.id"
          :data-index="index"
        >{{item.title}}</view>
      </view>
    </scroll-view>

    <view class="cu-list menu-avatar">
      <view class="cu-item" v-for="item in tasklist" :key="item.id">
        <view
          class="cu-avatar radius lg" >
		  <image :src="getImgUrl(item.thumb)" mode=""></image>
		 </view>
        <view class="content">
          <view class="text-black">
            {{item.cname}}
            <!-- <text class="text-sm text-grey margin-left-sm">任务剩余量：{{item.}}</text> -->
          </view>
          <view class="text-gray text-xs flex justify-between">
            <view class="text-cut">任务要求: {{item.task_title}}</view>
            <view class="text-cut">需求方:{{item.master_name}}</view>
          </view>
        </view>
        <view class="action">
          <view class="text-red text-sm text-bold margin-bottom-xs">{{item.price?item.price:0}}元</view>
          <button class="cu-btn bg-blue round sm" @click="takeOrder">上传凭证</button>
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
        {title: "已接任务",id:0},
        {title: "待审核",id:1},
        {title: "完成任务",id:2},
        {title: "被驳回",id:-1}
      ],
	  tasklist:[],
      TabCur: 0,
      loadModal: false
    };
  },
  onLoad(){
	  uni.showLoading({
	  	title:"加载中"
	  })
  },
  created(){
	  this.$api.Mytask({id:""}).then(res=>{
		  console.log(res)
		  this.tasklist=res.data
	  })
	  uni.hideLoading();
  },
  methods: {
    tabSelect(e) {
      uni.showLoading({
			title:"加载中"
		})
      this.TabCur = e.currentTarget.dataset.index;
      this.tabid=e.target.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
      this.update(e.target.id);
    },
    takeOrder() {
      this.loadModal = true;
      setTimeout(() => {
        this.loadModal = false;
      }, 1500);
    },
	update(id){
		this.$api.Mytask({id:id}).then(res=>{
		  console.log(res)
		  this.tasklist=res.data
		})
		uni.hideLoading();
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
