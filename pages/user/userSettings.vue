<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">个人设置</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">头像</view>
				<navigator url="/pages/user/upload">
					
				<view class="cu-avatar round bg-gray"></view>
				</navigator>
			</view>
			<view class="cu-form-group">
			  <view class="title">昵称</view>
			  <input placeholder="请输入昵称">
			</view><view class="cu-form-group">
			  <view class="title">手机号</view>
			  <input placeholder="请输入手机号" type="number" maxlength="11">
			</view>
			
			<radio-group class="block" @change="RadioChange" style="border-top: 0.5px solid #eee;">
				<!-- #ifndef MP-ALIPAY -->
				<view class="cu-form-group">
					<view class="title">性别</view>
					<view>
						<radio class='radio margin-right-sm' :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>&nbsp;&nbsp;&nbsp;&nbsp;男
						<radio class='radio margin-left-lg margin-right-sm' :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>&nbsp;&nbsp;&nbsp;&nbsp;女
					</view>
				</view>
				<!-- #endif -->
			</radio-group>
			<view class="cu-form-group" style="border-top: 0.5px solid #eee;">
				<view class="title">生日</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">地址</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">简介</view>
				<textarea maxlength="-1" @input="textareaBInput" placeholder="介绍自己，让更多的人了解你..."></textarea>
			</view>
			<view class="padding">
				<button class="cu-btn block lg bg-orange">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	import { data, province, city, area, town } from "province-city-china/data";
	export default {
		data() {
			return {
				date: '2018-12-25',
				radio: 'A',
				index: -1,
				picker: []
			};
		},
		onLoad() {
			this.picker = city.map(item => item.name)
		},
		methods: {
			DateChange(e) {
				console.log( e.detail.value);
				
				this.date = e.detail.value
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			textareaBInput() {}
		}
	}
</script>

<style lang="scss">

</style>
