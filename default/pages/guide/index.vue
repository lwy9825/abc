<template>
	<view>
		<swiper class="swiper" :indicator-dots="true">
			<swiper-item>
				<view class="swiper-item uni-bg-red" style="background-color: red;">
				</view>
			</swiper-item>
			<swiper-item><view class="swiper-item uni-bg-green" style="background-color: green;"></view></swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="btn">
						<button class="aa" @tap="into">点击进行体验</button>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			};
		},
		onLoad() {
			if(uni.getStorageSync("guide")=='true'){
				this.into();
			}
		},
		methods: {
			into:function(){
				uni.setStorageSync("guide","true")
				uni.reLaunch({
					url:'../index/index'
				})
			}
		}
	};
</script>

<style>
	.swiper{
		height: 100vh;
	}
	.swiper-item{
		display: block;
		height: 100%;
		background-image: url('../../static/timg.jpg');
		background-position: center;
		background-size: cover;
		position: relative;
	}
	.btn{
		position: absolute;
		width: 100vw;
		bottom: 5vh;
	}
	
</style>
