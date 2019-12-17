let timer;
export default {
	methods: {
		getCode() {
		  this.disabled = true;
		  let sec = 3;
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
	}
}