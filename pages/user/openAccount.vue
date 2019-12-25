<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">升级会员</block>
		</cu-custom>

		<view class="user-panel padding">
			<view class="flex justify-between">
				<view class="flex">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>

					<view class="margin-left-sm">
						<view class="margin-bottom-xs text-bold">李牧尘</view>
						<view class='cu-tag bg-blue round sm'>高级会员</view>
						<!-- <view class="text-sm bg-blue">高级会员</view> -->
					</view>
				</view>
				<view>
					<text class="text-bold margin-right-xs">2019.12.25</text>
					到期</view>
			</view>
		</view>
		<swiper
		  class="card-swiper"
		  :class="dotStyle?'square-dot':'round-dot'"
		  :indicator-dots="false"
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
					<view class="inner">
						<view class="flex align-center justify-start">
							<image class="vip margin-right-sm" src="../../static/vip@2x.png"></image>尊享会员
						</view>
						<view>升级需要￥698/六个月</view>
						<view>300任务/天</view>
					<button class="cu-btn sm bg-orange toAccount margin-top-sm" @click="toAccount">查看更多权益</button>
					</view>
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
		</swiper>
		
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

		<view class="text-center text-black text-bold">
			请选择任一礼包, 购买升级
		</view>
		<view class="cu-card case">
			<view class="cu-item shadow">
				<view class="image">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="widthFix"></image>
					<!-- <view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view> -->
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="content flex-sub">
							<view class="text-grey">商品名称商品名称</view>
							<view class="text-gray text-sm flex justify-between">
								<view>
									<text class="text-black text-bold text-df margin-right-sm">￥698</text>
									
									<text class="text-line margin-right-sm">市场价￥860</text>
									
									
									
									已售：2323
								</view>
								
								<view class="text-gray text-sm">
									<button class="cu-btn bg-orange sm" @click="toDredge">开通会员</button>
									<!-- <text class="cuIcon-attentionfill margin-lr-xs"></text> 10
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
									<text class="cuIcon-messagefill margin-lr-xs"></text> 30 -->
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			cuIconList: [
			  {
			    cuIcon: "cardboardfill",
			    color: "red",
			    badge: 0,
			    name: "任务接单",
					url: '/pages/user/openAccount'
			  },
			  {
			    cuIcon: "selection",
			    color: "orange",
			    badge: 1,
			    name: "邀请赚钱",
			    url: "/pages/task/mytask"
			  },
				{
				  cuIcon: "selection",
				  color: "orange",
				  badge: 1,
				  name: "接单返佣",
				  url: "/pages/task/mytask"
				},{
			    cuIcon: "selection",
			    color: "orange",
			    badge: 1,
			    name: "购物分成",
			    url: "/pages/task/mytask"
			  }],
				gridCol: 4,
				gridBorder: false
			};
		},
		methods: {
			toDredge() {
				uni.navigateTo({
					url: '/pages/user/dredge'
				})
			},
			cardSwiper(e) {
			  this.cardCur = e.detail.current;
			},
			toAccount() {
				uni.navigateTo({
					url: '/pages/user/account'
				})
			}
		}
	}
</script>

<style lang="scss">
.cu-list.menu-avatar>.cu-item .content{
	left: 0;
}
.cu-list.menu-avatar>.cu-item .content.flex-sub {
	width: 100%;
}
.text-line {
	text-decoration: line-through;
}
.card-swiper {
	height: 200px !important;
}
.toAccount {
	
}
.inner {
	position: absolute;
	bottom: 100rpx;
	left: 30rpx;
	color: #fff;
}
.vip {
  width: 60rpx;
  height: 30rpx;
}
</style>
