<template lang="pug">
.line
	.btn(@click="counter.remove()")
		.contentBtnAnimate
			img(src="/img/minus.svg")
	.counter {{counter.getCount}}
	.btn(@click="counter.add()")
		.contentBtnAnimate
			img(src="/img/plus.svg")
</template>

<script>
import {useCounter} from "@/config/store/counter.js";
export default {
	data(){
		return{
			counter:useCounter(),
		}
	},
	created() {
		this.counter.restoreLocal()
	}
}
</script>

<style scoped>
	.line{
		display: flex;
	}
	.btn{
		padding: 5px;
		height: fit-content;
	}
	.btn img{
		width: 50px;
		height: 50px;
		transition: .2s ease-in-out;
	}
	.btn:hover img{
		filter: brightness(0) invert(1)
	}
	.counter{
		font-size: 40px;
		line-height: 60px;
		width: 130px;
		text-align: center;
	}
</style>