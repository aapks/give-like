<template>
  <view>
    <task v-if="PageCur=='task'"></task>
    <components v-if="PageCur=='component'"></components>
    <plugin v-if="PageCur=='plugin'"></plugin>

    <view class="cu-bar tabbar bg-white shadow foot">
      <view class="action" @click="NavChange" data-cur="task">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/basics' + [PageCur=='task'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='task'?'text-orange':'text-gray'">任务大厅</view>
      </view>
      <view class="action" @click="NavChange" data-cur="component">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='component'?'text-orange':'text-gray'">会员商城</view>
      </view>
      <view class="action text-gray add-action">
        <button class="cu-btn cuIcon-add bg-green shadow"></button>
        发布
      </view>
      <view class="action" @click="NavChange" data-cur="plugin">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='plugin'?'text-orange':'text-gray'">发现</view>
      </view>
      <view class="action" @click="NavChange" data-cur="plugin">
        <view class="cuIcon-cu-image">
          <image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'" />
        </view>
        <view :class="PageCur=='plugin'?'text-orange':'text-gray'">我的</view>
      </view>
    </view>

    <!-- <basics v-if="PageCur=='basics'"></basics> -->
    <!-- <view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-orange':'text-gray'">元素</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-orange':'text-gray'">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-orange':'text-gray'">扩展</view>
			</view>
    </view>-->
  </view>
</template>

<script>
export default {
  data() {
    return {
      PageCur: "task"
    };
  },
  methods: {
    NavChange: function(e) {
      console.log(e);
      this.PageCur = e.currentTarget.dataset.cur;
    }
  }
};
</script>

<style>
</style>
