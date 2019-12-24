<template>
  <view>
    <form>
      <view class="cu-form-group margin-top">
        <view class="title">平台选择</view>
        <picker @change="PickerChange" :value="index" range-key="name" :range="picker">
          <view class="picker">{{ picker[index].name }}</view>
        </picker>
      </view>
	  
	  <view class="cu-form-group">
	    <view class="title">平台昵称</view>
	    <input type="text" v-model="nickname" placeholder="请输入平台昵称" />
	  </view>
      <view class="cu-form-group">
        <view class="title">任务标题</view>
        <input type="text" v-model="tasktit" placeholder="请输入标题" />
      </view>
 			<view class="cu-form-group">
        <view class="title">任务数量</view>
        <input type="number" v-model="number" placeholder="请输入数量" />
      </view>
      <view class="cu-form-group">
        <view class="title">任务单价</view>
        <input type="number" v-model="price" placeholder="请输入单价" />
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
        <input type="text" v-model="videourl" placeholder="上传任务视频链接" />
      </view>

      <view class="cu-form-group">
        <view class="title">日期选择</view>
        <picker mode="date" :value="date" start="2019-01-01" end="2020-01-01" @change="DateChange">
          <view class="picker">{{date}}</view>
        </picker>
      </view>

			 <view class="cu-form-group">
        <view class="title">可选置顶</view>
        <input type="text" v-model="price" placeholder="今日 最高出价500元" />
				<button class="cu-btn sm bg-blue">输入置顶竞价</button>
      </view>
      <view class="padding">
        <view
          class="text-sm bg-gray light radius padding-sm"
        >次日零点生效，如竞价成功，次日显示在置顶推荐任务栏中，按出价由高至底排序，非必选项，涨粉效果更快！</view>
				<view class="flex justify-between">
					<view class="margin-top-sm">
						<view>合计：¥1200.00 元</view>
						<view>账户余额：200  余额不足  <navigator class="toBalance text-bold text-orange" url="/pages/user/balance">请充值</navigator></view>
					</view>
        <button class="cu-btn bg-orange sm margin-top-sm lg" @click="Agent">确认发布</button>

				</view>
      </view>
    </form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cid:"",
	  tasktit:"",
	  nickname:"",
	  price:"",
	  number:"",
	  tasksec:"",
		videourl:"",
		price: '',
	  index:0,
      picker: [],
      date: "2019-12-24",
	  typelist:[],
      checkbox: [
        {
          value: "点赞",
          label: "点赞",
          checked: false
        },
        {
          value: "评论",
          label: "评论",
          checked: false
        },
        {
          value: "关注",
          label: "关注",
          checked: false
        }
      ]
    };
  },
	async created(){
		this.getNowFormatDate();
		await this.$api.Category().then(res=>{
			if(res.code===1){
				 this.picker=res.data;
				 this.cid=res.data[0].id;
			}
		})
	},
  onShow(){
	  console.log("-----")
  },
  methods: {
    PickerChange(e) {
		this.index = e.detail.value;
		this.cid=this.picker[e.detail.value].id;
    },
	getNowFormatDate() {
		let date = new Date();
		let seperator1 = "-";
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		this.data = year + seperator1 + month + seperator1 + strDate;
	},
    DateChange(e) {
		
      this.date = e.detail.value;
    },
    CheckboxChange(item) {
		console.log(item,"0000")
      item.checked = !item.checked;
      this.$set(this.checkbox, item);
	  let arr=JSON.parse(JSON.stringify(this.checkbox)); 
	  let obj="";
	  arr.map((item,index)=>{
		  if(item.checked){
			  obj=obj+item.value+"、"
		  }
	  })
	  this.tasksec=obj.slice(0,obj.length-1);
    },
	Agent(){
		if(this.cid===""){
			uni.showToast({
			    title: '请选择平台',
				icon:'none',
			    duration: 2000
			});
			return;
		}
		if(this.nickname===""){
			uni.showToast({
			    title: '请输入平台昵称',
				icon:'none',
			    duration: 2000
			});
			return;
		}
		if(this.tasktit===""){
			uni.showToast({
			    title: '请输入任务标题',
				icon:'none',
			    duration: 2000
			});
			return;
		}
		if(this.price===""){
			uni.showToast({
			    title: '请输入任务价格',
				icon:'none',
			    duration: 2000
			});
			return;
		}
		if(this.number===""){
			uni.showToast({
			    title:'请输入任务数量',
				icon:'none',
			    duration: 2000
			});
			return;
		}
		if(this.tasksec===""){
			uni.showToast({
			    title:'请选择任务类型',
				icon:'none',
			    duration: 2000
			});
			return;
		}
		if(this.videourl===""){
			uni.showToast({
			    title:'请输入任务视频链接',
				icon:'none',
			    duration: 2000
			});
			return;
		}
		this.$api.Release({cid:this.cid,nickname:this.nickname,title:this.tasktit,
		price:this.price*1,max_num:this.number*1,type:this.tasksec,taskurl:this.videourl,
		end_time:this.data}).then(res=>{
			if(res.code===1){
				uni.showToast({
				  title: "发布成功",
				  icon: "success",
				  duration: 2000,
				  success: function() {
				    setTimeout(()=>{
						uni.navigateBack({
							delta:1
						})
					},2000)
				  }
				});
			}
		})
	}
  }
};
</script>

<style lang="scss">
	.toBalance {
		display: inline-block;
		text-decoration: underline;
	}
</style>
