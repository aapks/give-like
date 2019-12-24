<template>
  <view class="page">
    <view class="flex align-center">
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
      <view class="padding-sm">
        <navigator url="/pages/task/publish">
          <text class="text-lg text-gray cuIcon-roundadd"></text>
        </navigator>
      </view> 
    </view>

    <view class="padding">
      <swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
      :autoplay="true" interval="5000" duration="500">
        <swiper-item v-for="(item,index) in swiperList" :key="index" class="radius" style="border-radius: 8px;">
          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
          <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
        </swiper-item>
      </swiper>
    </view>
    <!-- <swiper
      class="card-swiper"
      :class="dotStyle?'square-dot':'round-dot'"
      :indicator-dots="true"
      :circular="true"
      :autoplay="true"
      interval="5000"
      duration="500"
      @change="cardSwiper"
      indicator-color="#8799a3"
      indicator-active-color="#0081ff"
    >
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
        <view class="swiper-item">
          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'" />
          <video
            :src="item.url"
            autoplay
            loop
            muted
            :show-play-btn="false"
            :controls="false"
            objectFit="cover"
            v-if="item.type=='video'"
          ></video>
        </view>
      </swiper-item>
    </swiper> -->

    <view class="notic text-sm flex justify-start align-center" style="padding: 0 30rpx;">
      <image style="width:140rpx;height:32rpx;padding-right:20rpx;border-right:1px solid #c7c7c7; margin-right:20rpx;" src="../../static/zuixinxiaoxi@2x.png"></image>
      恭喜<text class="text-orange">我怀念的</text>成功提现<text class="text-orange">￥4000</text></view>
    <view class="cu-bar bg-white">
      <view class="action">
        <!-- <text class="cuIcon-title text-orange"></text> -->
        <text class="text-bold text-black" style="border-left: 6rpx solid #FF8733;text-indent:10rpx;">推荐任务</text>
      </view>
    </view>
    <!-- <view class="cu-bar bg-white">
      <view class="action border-title">
        <text class="text-xl text-bold">推荐任务</text>
        <text class="bg-grey" style="width:2rem"></text>
      </view>
    </view>-->
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
          <view class="text-orange text-sm text-bold margin-bottom-xs">{{item.price?item.price:0}}元</view>
          <button class="cu-btn bg-orange round sm margin-top-lg" @click="takeOrder(item.id)">接单</button>
        </view>
      </view>
      <!-- <view class="cu-item">
        <view
          class="cu-avatar radius lg"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);"
        >
          <view class="cu-tag badge">99+</view>
        </view>
        <view class="content">
          <view class="text-grey">
            <view class="text-cut">瓦洛兰之盾-塔里克</view>
            <view class="cu-tag round bg-orange sm">战士</view>
          </view>
          <view class="text-gray text-sm flex">
            <view
              class="text-cut"
            >塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。</view>
          </view>
        </view>
        <view class="action">
          <view class="text-grey text-xs">22:20</view>
          <view class="cuIcon-notice_forbid_fill text-gray"></view>
        </view>
      </view>
      <view class="cu-item">
        <view
          class="cu-avatar radius lg"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"
        ></view>
        <view class="content">
          <view class="text-pink">
            <view class="text-cut">莫甘娜</view>
          </view>
          <view class="text-gray text-sm flex">
            <view class="text-cut">凯尔，你被自己的光芒变的盲目！</view>
          </view>
        </view>
        <view class="action">
          <view class="text-grey text-xs">22:20</view>
          <view class="cu-tag round bg-red sm">5</view>
        </view>
      </view>
      <view class="cu-item grayscale">
        <view
          class="cu-avatar radius lg"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"
        ></view>
        <view class="content">
          <view>
            <view class="text-cut">伊泽瑞尔</view>
            <view class="cu-tag round bg-orange sm">断开连接...</view>
          </view>
          <view class="text-gray text-sm flex">
            <view class="text-cut">等我回来一个打十个</view>
          </view>
        </view>
        <view class="action">
          <view class="text-grey text-xs">22:20</view>
          <view class="cu-tag round bg-red sm">5</view>
        </view>
      </view>
      <view class="cu-item cur">
        <view
          class="cu-avatar radius lg"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);"
        >
          <view class="cu-tag badge"></view>
        </view>
        <view class="content">
          <view>
            <view class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</view>
            <view class="cu-tag round bg-orange sm">6人</view>
          </view>
          <view class="text-gray text-sm flex">
            <view class="text-cut">
              伊泽瑞尔：
              <text class="cuIcon-locationfill text-orange margin-right-xs"></text>传送中...
            </view>
          </view>
        </view>
        <view class="action">
          <view class="text-grey text-xs">22:20</view>
          <view class="cuIcon-notice_forbid_fill text-gray"></view>
        </view>
      </view>-->
    </view>
    <!-- <view class="cu-load load-modal" v-if="loadModal">
      <view class="cuIcon-emojifill text-orange"></view>
      <image src="/static/logo.png" mode="aspectFit" />
      <view class="gray-text">接单中...</view>
    </view> -->
    <view class="cu-tabbar-height"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      navArr: [],
	  tabid:"",
	  tasklist:[],
      swiperList: [
        {
          id: 0,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg"
        },
        {
          id: 1,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg"
        },
        {
          id: 2,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg"
        },
        {
          id: 3,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
        },
        {
          id: 4,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg"
        },
        {
          id: 5,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg"
        },
        {
          id: 6,
          type: "image",
          url:
            "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"
        }
      ],
      TabCur: 0,
      cardCur: 0,
      dotStyle: false,
      loadModal: false
    };
  },
  onLoad(){
  		uni.showLoading({
  			title:"加载中"
  		})
  },
  created(){
  	  this.$api.Category().then(res=>{
  		  if(res.code===1){
			  this.navArr=res.data;
		  }
  	  })
	  this.$api.Task({type:""}).then(res=>{
  		  if(res.code===1){
			  this.tasklist=res.data;
		  }
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
	update(id){
		this.$api.Task({cid:id}).then(res=>{
			if(res.code===1){
				this.tasklist=res.data;
			}
		})
		uni.hideLoading();
	},
    cardSwiper(e) {
      this.cardCur = e.detail.current;
    },
    takeOrder(id) {
      uni.showLoading({
      	title:"接单中"
      })
	  this.$api.Payorder({task_id:id}).then(res=>{
	  	if(res.code===1){
			uni.hideLoading();
			uni.showToast({
			    title: '接单成功',
				icon:'success',
			    duration: 2000,
				success: () => {
					setTimeout(()=>{
						uni.navigateTo({
							url:'../task/mytask',
							animationType: 'pop-in',
							animationDuration: 200
						})
					},1500)
				}
			})
		}
	  })
      
    }
  }
};
</script>

<style lang="scss">
.page {
  height: 100vh;
}
.notic {
  height: 80rpx;
  line-height: 80rpx;
  text-indent: 20rpx;
  color: #999999;
  // background-color: beige;
}
.text-lg {
  font-size: 24px;
}
.cu-list.menu-avatar>.cu-item .content {
  line-height: 1.3em;
  width: calc(100% - 52px - 33px - 66px - 11px);
  left: 90px;
}
.paystate {
  display: inline-block;
  background-color: rgba(255,135,51,0.1);
  color: #FF8733;
  font-size: 12px;
  padding: 4rpx;
  border-radius: 4px;
}
.cu-list.menu-avatar>.cu-item {
  margin-top: 15rpx;
  height: 90px;
  align-items: flex-start;
}
.screen-swiper {
  min-height: 300rpx;
}
.cu-avatar {
  width: 120rpx;
  height: 119rpx;
}
.cu-bar {
  min-height: 35px;
}
.cu-list.menu-avatar>.cu-item:after {
  border-bottom-width: 14rpx;
  border-color: #F7F7F7;
}
</style>
