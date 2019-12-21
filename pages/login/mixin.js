let timer;
export default {
	methods: {
		async getCode() {
			if(this.tel){
				await this.$api.Getcode({phone:this.tel}).then(res=>{
					if(res.code===1){
						this.disabled = true;
						let sec = 5;
						timer = setInterval(() => {
						  sec--;
						  this.codeText = `${sec}s重新获取`;
						  if (sec < 0) {
						    this.codeText = `重新获取`;
						    this.disabled = false;
						    clearInterval(timer);
						  }
						}, 1000);
					}
				})
			}else{
				uni.showToast({
				    title: '请输入手机号',
					icon:'none',
				    duration: 2000
				});
			}
		}
	}
}