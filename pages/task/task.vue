<template>
  <view class="page">
    <scroll-view scroll-x class="bg-white nav">
      <view class="flex text-center">
        <view
          class="cu-item flex-sub"
          :class="index==TabCur?'text-orange cur':''"
          v-for="(item,index) in navArr"
          :key="index"
          @tap="tabSelect"
          :data-id="index"
        >{{item.title}}</view>
      </view>
    </scroll-view>

    <swiper
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
    </swiper>

    <view class="notic text-sm">这里是公告内容，这里是公告内容</view>
    <view class="cu-bar bg-white">
      <view class="action">
        <text class="cuIcon-title text-orange"></text>
        <text>推荐任务</text>
      </view>
    </view>
    <!-- <view class="cu-bar bg-white">
      <view class="action border-title">
        <text class="text-xl text-bold">推荐任务</text>
        <text class="bg-grey" style="width:2rem"></text>
      </view>
    </view>-->
    <view class="cu-list menu-avatar">
      <view class="cu-item" v-for="item in 7" :key="item">
        <view
          class="cu-avatar radius lg"
          style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"
        ></view>
        <view class="content">
          <view class="text-black">
            抖音
            <text class="text-sm text-grey margin-left-sm">任务剩余量：2342</text>
          </view>
          <view class="text-gray text-xs flex justify-between">
            <view class="text-cut">任务要求: 关注/点赞/评论</view>
            <view class="text-cut">需求方: xxx</view>
          </view>
        </view>
        <view class="action">
          <view class="text-red text-sm text-bold margin-bottom-xs">1.00元</view>
          <button class="cu-btn bg-orange round sm" @click="takeOrder">接单</button>
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
        {
          title: "抖音"
        },
        {
          title: "快手"
        },
        {
          title: "火山"
        },
        {
          title: "微视"
        }
      ],
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
  methods: {
    tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    },
    cardSwiper(e) {
      this.cardCur = e.detail.current;
    },
    takeOrder() {
      // uni.showToast({
      // 	title: ''
      // })
      this.loadModal = true;
      setTimeout(() => {
        this.loadModal = false;
      }, 1500);
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
  background-color: beige;
}
</style>
