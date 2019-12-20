<template>
  <view>
    <form>
      <view class="cu-form-group margin-top">
        <view class="title">平台选择</view>
        <picker @change="PickerChange" :value="index" :range="picker">
          <view class="picker">{{ picker[index] }}</view>
        </picker>
      </view>
      <view class="cu-form-group">
        <view class="title">任务标题</view>
        <input type="text" placeholder="请输入标题" />
      </view>

      <view class="cu-form-group">
        <view class="title">任务单价</view>
        <input type="number" placeholder="请输入单价" />
      </view>
      <view class="cu-form-group">
        <view class="title">任务数量</view>
        <input type="number" placeholder="请输入数量" />
      </view>

      <view class="cu-form-group">
        <view class="title">任务类型</view>
        <view v-for="(item,index) in checkbox" :key="index">
          <checkbox
            :class="item.checked?'checked':''"
            :checked="item.checked?true:false"
            @click="CheckboxChange(item)"
            value="A"
          ></checkbox>
          <text class="margin-left-xs">{{item.label}}</text>
        </view>
      </view>

      <view class="cu-form-group">
        <view class="title">视频连接</view>
        <input type="text" placeholder="上传任务视频链接" />
      </view>

      <view class="cu-form-group">
        <view class="title">日期选择</view>
        <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
          <view class="picker">{{date}}</view>
        </picker>
      </view>
      <view class="padding">
        <view
          class="text-sm bg-gray light radius padding-sm"
        >次日零点生效，如竞价成功，次日显示在置顶推荐任务栏中，按出价由高至底排序，非必选项，涨粉效果更快！</view>
        <button class="cu-btn block bg-orange margin-top-sm lg">确认发布</button>
      </view>
    </form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      picker: ["抖音", "快手", "火山", "微视"],
      date: "2018-12-25",
      checkbox: [
        {
          value: "A",
          label: "点赞",
          checked: false
        },
        {
          value: "B",
          label: "评论",
          checked: false
        },
        {
          value: "C",
          label: "关注",
          checked: false
        }
      ]
    };
  },
  methods: {
    PickerChange(e) {
      this.index = e.detail.value;
    },
    DateChange(e) {
      this.date = e.detail.value;
    },
    CheckboxChange(item) {
      item.checked = !item.checked;
      this.$set(this.checkbox, item);
    }
  }
};
</script>

<style lang="scss">
</style>
