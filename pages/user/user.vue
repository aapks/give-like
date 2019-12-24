<template>
  <view class="page">
    <view class="user-panel padding" style="padding-bottom:0;">
      <view class="margin-bottom-lg text-right">
        <navigator url="/pages/user/userSettings">
          <!-- <text class="cuIcon-settings"></text> -->
          <image style="width: 36rpx;height: 40rpx;" src="../../static/settings.png"/>
        </navigator>
      </view>
      
      <view class="flex justify-between">
        <view class="flex">
          <view
            class="cu-avatar round lg"
            style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
          ></view>

          <view class="margin-left-sm">
            <view class="margin-bottom-xs text-bold username">{{userinfo.username}}
              <image class="vip" src="../../static/vip@2x.png"></image>
            </view>
            <view class="text-sm scoped">信用分: 23</view>
          </view>
        </view>

        <navigator>
          <text class="cuIcon-right"></text>
        </navigator>
      </view>

      <view class="flex">
        <view class="basis-df margin-xs padding-sm radius text-center">
					<navigator url="/pages/user/balance">
						
          <view class="text-bold" style="font-size: 18px;">27563</view>
          <view style="color:#666;font-size: 10px;margin-top:10rpx;">余额</view>
					</navigator>
        </view>
        <view class="basis-df margin-xs padding-sm radius text-center">
					<navigator url="/pages/user/team">
						
          <view class="text-bold" style="font-size: 18px;">349</view>
          <view style="color:#666;font-size: 10px;margin-top:10rpx;">团队人数</view>
					</navigator>
        </view>
      </view>

      <!-- <view class="flex justify-between bg-blue radius padding">
        <view class="flex justify-between align-center text-sm">
          <view class="cu-tag radius bg-red">尊享会员</view>
          <view class="margin-left-sm">升级尊享会员，享更多权益</view>
        </view>

        <button class="cu-btn bg-orange radius sm" @click="update">即刻升级</button>
      </view> -->
    </view>

    <!-- <view class="cu-bar bg-white">
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
    </view> -->
    <view class="padding">
      <view class="bar flex justify-between padding-sm">
        <image style="width: 164rpx;height: 29rpx;" src="../../static/zumxiamhhuiyuan@2x.png"></image>
        <text class="text-white text-sm">升级尊享会员,享受更多权益</text>
        <navigator>
          <image style="width: 131rpx;height: 37rpx;" src="../../static/likeshengji@2x.png"></image>
        </navigator>
      </view>
       <view class="panel">
         <view class="panel-title">我的订单</view>
         <view class="panel-body">
           <view class="menu grid col-5">
             <view>

             <navigator class="menu-nav">
               <image src="../../static/daifukuan@2x.png" class="menu-icon"></image>
               <view class="menu-text">待付款</view>
             </navigator>
             </view>
             <view>
             <navigator class="menu-nav">
               <image src="../../static/daifahuo@2x.png" class="menu-icon"></image>
               <view class="menu-text">待发货</view>
             </navigator>
             </view>
             <view>
             <navigator class="menu-nav">
               <image src="../../static/daishouhuo@2x.png" class="menu-icon"></image>
               <view class="menu-text">待收货</view>
             </navigator>
             </view>
             <view>
             <navigator class="menu-nav">
               <image src="../../static/daipingjia@2x.png" class="menu-icon"></image>
               <view class="menu-text">待评价</view>
             </navigator>
             </view>
             <view>
             <navigator class="menu-nav">
               <image src="../../static/tuikuan@2x.png" class="menu-icon"></image>
               <view class="menu-text">退款/售后</view>
             </navigator>
             </view>
           </view>
         </view>
       </view>


      <view class="panel">
        <view class="panel-title">更多服务</view>
        <view class="panel-body">
  <view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
        <view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*3">
          <navigator :url="item.url">
            <!-- :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" -->
            <view>
              <image class="icon" :src="item.cuIcon"></image>
              <view class="cu-tag badge" v-if="item.badge!=0">
                <block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
              </view>
            </view>
            <text>{{item.name}}</text>
          </navigator>
        </view>
      </view>
      </view>
    </view>

    </view>
    <view class="cu-tabbar-height"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
		userinfo:{},
      cuIconList: [
        {
          cuIcon: "../../static/huiyuan.png",
          color: "red",
          badge: 0,
          name: "升级会员",
					url: '/pages/user/openAccount'
        },
        {
          cuIcon: "../../static/renwu@2x.png",
          color: "orange",
          badge: 0,
          name: "我的任务",
          url: "/pages/task/mytask"
        },
        {
          cuIcon: "../../static/tuiguangyaoqing@2x.png",
          color: "yellow",
          badge: 0,
          name: "推广邀请"
        },
        {
          cuIcon: "../../static/renwudaren@2x.png",
          color: "olive",
          badge: 0,
          name: "我的地址",
					url: "/pages/user/location"
        },
        {
          cuIcon: "../../static/wodeshoucang@2x.png",
          color: "red",
          badge: 0,
          name: "我的收藏"
        },
        {
          cuIcon: "../../static/kaitongxiaodian@2x.png",
          color: "cyan",
          badge: 0,
          name: "开通小店"
        },
        
        {
          cuIcon: "../../static/chaojidianzhu@2x.png",
          color: "purple",
          badge: 0,
          name: "超级店主"
        },
        {
          cuIcon: "../../static/paihangbang@2x.png",
          color: "yellow",
          badge: 0,
          name: "排行榜"
        },
        {
          cuIcon: "../../static/shimingrenzhneg@2x.png",
          color: "purple",
          badge: 0,
          name: "实名认证",
					url: '/pages/user/authentication'
        },
        {
          cuIcon: "../../static/shangjiahezuo@2x.png",
          color: "mauve",
          badge: 0,
          name: "商家合作"
        },
        {
          cuIcon: "../../static/mingpian@2x.png",
          color: "blue",
          badge: 0,
          name: "我的名片"
        },
        {
          cuIcon: "../../static/shezhi@2x.png",
          color: "black",
          badge: 0,
          name: "系统设置",
          url: "/pages/user/settings"
        }
      ],
      gridCol: 4,
      gridBorder: false
    };
  },
  created(){
	  const userinfo = uni.getStorageSync('userinfo');
	  console.log(userinfo,"===")
	  if(userinfo){
		  this.userinfo=userinfo;
	  }else{
		  uni.redirectTo({
		  	url: '../login/login'
		  });
	  }
  },
  methods: {
    update() {
      this.Jsbridge('demo',66666)
    },
	// h5与native通信
	Jsbridge(functionName, data){
	    window.DianzanJs && window.DianzanJs[functionName] && window.DianzanJs[functionName](JSON.stringify(data));
	}
  }
};
</script>

<style lang="scss">
.page {
  min-height: 100vh;
  background-color: rgb(248, 248, 248)!important;
}
.cu-avatar {
  width: 138rpx;
  height: 138rpx;
}
.username {
  margin-top: 20rpx;
  font-size: 18px;
  color: #2d2d2d;
}
.scoped {
  display: inline-block;
  padding: 4rpx 10rpx;
  border-radius: 10px;
  background-color: rgba(254,146,39,.19);
  font-size: 12px;
  color: #2d2d2d;
}
.panel {
  // background-color: #fff;
  margin-bottom: 30rpx;
  background-color: #fff;
  border-radius: 8px;
  &-title {
    padding: 30rpx;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    border-bottom: 1px solid #e7e7e7;
  }
  &-body {
    // padding: 30rpx;
  }
}
.icon {
  width: 60rpx;
  height: 60rpx;
}
.cu-list.grid>.cu-item uni-text {
  margin-top: 0;
  font-size: 14px;
  color: #666;
}
.menu {
  width: 100%;
  padding: 45rpx 30rpx 30rpx;
  &-nav {
    display: block;
    text-align: center;
  }
  &-icon {
    width: 50rpx;
    height: 50rpx;
  }
  &-text {
    margin-top: 20rpx;
    font-size: 14px;
    color: #666;
  }
}
.vip {
  width: 60rpx;
  height: 30rpx;
  margin-left: 14rpx;
}
.cuIcon-right {
 position: relative;
 top: 55rpx;
}
.bar {
  height: 76rpx;
  background-image: url('../../static/bg@2x.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
