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
        <checkbox
          :class="checkbox[0].checked?'checked':''"
          :checked="checkbox[0].checked?true:false"
          @click="CheckboxChange"
          value="A"
        >点赞</checkbox>
        <checkbox
          :class="checkbox[0].checked?'checked':''"
          :checked="checkbox[0].checked?true:false"
          @click="CheckboxChange"
          value="A"
        >评论</checkbox>
        <checkbox
          :class="checkbox[0].checked?'checked':''"
          :checked="checkbox[0].checked?true:false"
          @click="CheckboxChange"
          value="A"
        >关注</checkbox>
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

      <!-- <view class="cu-form-group">
        <view class="title">密码</view>
        <input placeholder="请输入密码" type="password" name="password" />
      </view>
      <view class="padding">
        <button class="cu-btn block bg-orange margin-tb-sm lg" @click="login">立即登录</button>
      </view>
      <view class="login-bar flex justify-between">
        <button class="cu-btn sm bg-white">
          没有账号？
          <navigator class="primary" hover-class="none" url="/pages/login/register">去注册</navigator>
        </button>
        <button class="cu-btn sm bg-white primary">
          <navigator hover-class="none" url="/pages/login/forget">忘记密码?</navigator>
        </button>
      </view>-->
    </form>
    <view class="cu-tabbar-height"></view>
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
          checked: true
        },
        {
          value: "B",
          checked: true
        },
        {
          value: "C",
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
    CheckboxChange(e) {
      var items = this.checkbox,
        values = e.detail.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value == values[j]) {
            items[i].checked = true;
            break;
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
</style>
