<template>
	<view>
		<view class="cu-bar bg-white search-form">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="等你来翻" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-green shadow-blur round">搜索</button>
			</view>
		</view>
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="item.id">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
			</swiper-item>
		</swiper>

		<view class="cu-form-group ">
			<view class="title">
				<text class="cuIcon-locationfill text-orange margin-right-xs"></text>华旗国际店
			</view>
			<switch :class="switchA?'checked':''" :checked="switchA?true:false"></switch>
		</view>


		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
				 :data-id="index">
					-{{item.name}}-
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)"
			 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white">
						<view class="action">
							<text class="cuIcon-title text-green">{{item.name}}</text>
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item" v-for="i in item.children" :key="i.a">
							<view class="cu-avatar round lg" >
								<image :src="i.url" class="cu-avatar round lg"></image>
								<!-- style="background-image:url(https://ali.xinshipu.cn/20160620_16/original/1466416688007.jpg)" -->
							</view>
							<view class="content">
								<view class="text-grey">
									<text class="text-cut">{{i.a}}</text>
								</view>
								<view class="text-gray text-sm flex" >
									<text class="text-cut">
										{{i.b}}
									</text>
								</view>
							</view>
							<view class="action">
								<view class="cu-tag round bg-grey sm">{{i.c}}</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>

		</view>
	</view>

	</view>

</template>
<script>
	export default {
		data() {
			return {
				switchA: true,
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://wx1.sinaimg.cn/mw690/a6e6345cly1g99mo2j2lqj21o02807wj.jpg',
				}, {
					id: 1,
					type: 'image',
					url: 'https://wx4.sinaimg.cn/mw1024/a6e6345cly1g95yz15dfwj21o0280kjm.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://wx4.sinaimg.cn/mw1024/a6e6345cly1g8v2l9st00j21o0280qv6.jpg',
				}, {
					id: 3,
					type: 'image',
					url: 'https://wx2.sinaimg.cn/mw1024/a6e6345cly1g86263z3ugj22801o07wj.jpg',
				}, {
					id: 4,
					type: 'image',
					url: 'https://wx1.sinaimg.cn/mw690/a6e6345cly1g99mo2j2lqj21o02807wj.jpg',
				}, {
					id: 5,
					type: 'image',
					url: 'https://wx2.sinaimg.cn/mw1024/a6e6345cly1g8774jgb92j21o0280x6q.jpg',
				}, {
					id: 6,
					type: 'image',
					url: 'https://wx3.sinaimg.cn/mw1024/a6e6345cly1g8661ob1iwj21o0280npe.jpg',
				}],
				dotStyle: false,
				towerStart: 0,
				direction: '',


				list: [{
						name: '翻仔咖啡',
						id: 0,
						children: [{
								a: "阿华田咖啡",
								b: "Avada coffee",
								c: "￥25",
								url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574762456104&di=e6afd461efacbfa81887b175f4d22987&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FI-H-C7vAImtuwfhayDKuPjK2EOPsueMTbAFF4tccMWE-OrTcCi-L0gXpZGLYEEcFTYGVDmosZWTLal1WbWRW3A.jpg'
								
							},
							{
								a: "圣诞姜饼人拿铁",
								b: "Christmas Gingerbread Man Latte",
								c: "￥28",
								url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574762552596&di=1cda4fcc3b5857bb2de2c8f5ebe37f23&imgtype=0&src=http%3A%2F%2Fdata.5ikfc.com%2Fstatic%2Fdiscount%2Fmdl%2F14%2Fmdl-jiangbingren-03.jpg"
							},
							{
								a: "冰美式",
								b: "Iced Americano",
								c: "￥22",
								url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2606402031,1730100237&fm=26&gp=0.jpg"

							},
							{
								a: "焦糖玛奇朵",
								b: "Caramel Macchiato",
								c: "￥25",
								url:"http://i1.chuimg.com/ec2559c64fcc11e7bc9d0242ac110002_1280w_853h.jpg@2o_50sh_1pr_1l_600w_90q_1wh"

							},
							{
								a: "香草拿铁",
								b: "Vanilla Latte",
								c: "￥25",
								url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574762602373&di=8c58f8159ec48b646355e8c191744624&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F10%2F27%2FFhswGAumjEK-NTM1BEGJ_BUKGcBi.jpg%2521730x0.jpg"
							},

						]
					},
					{
						name: '翻仔水果茶',
						id: "1",
						children: [{
								a: "百香果双响炮",
								b: "Baixiangguo double sound cannon",
								c: "￥15",
								url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574762723360&di=4e23ea886daad1967ef598ca4d159998&imgtype=0&src=http%3A%2F%2Fs2.cdn.xiachufang.com%2Ff4315be4b0a211e59ffeb82a72e00100.jpg%3FimageView2%2F2%2Fw%2F600%2Finterlace%2F1%2Fq%2F90"
							},
							{
								a: "鲜榨橙汁",
								b: "Fresh orange juice",
								c: "￥12",
								url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574762850891&di=c683e5049c2131f9c1fd8aba8f033a0b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1e8e76c12195e51d92ae451311e3919b32167f49102e1-eMu0tO_fw658"
							},
							{
								a: "满杯水果茶",
								b: "A cup of fruit tea",
								c: "￥18",
								url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2796900773,1740024835&fm=26&gp=0.jpg"
							},
							{
								a: "猕猴桃果汁",
								b: "kiwi juice",
								c: "￥20",
								url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2032643660,1595116150&fm=26&gp=0.jpg"
							},
							{
								a: "西瓜汁",
								b: "Watermelon Juice",
								c: "￥15",
								url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=887732177,3115702476&fm=26&gp=0.jpg"
							},
							

						]
					},
					{
						name: '经典饮品',
						id: 2,
						children: [{
								a: "翻仔波波茶",
								b: "Fanzai Bobo tea",
								c: "￥15",
								url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3746799552,2652869887&fm=26&gp=0.jpg"
							},
							{
								a: "珍珠奶茶",
								b: "Bubble Tea",
								c: "￥15",
								url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2152816712,212845747&fm=15&gp=0.jpg"
							},
							{
								a: "老盐柠檬",
								b: "Old salt lemon",
								c: "￥15",
								url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2700365259,74442919&fm=15&gp=0.jpg"
							},
							{
								a: "多肉葡萄",
								b: "Bubble Tea",
								c: "￥15",
								url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2165863523,2451046345&fm=26&gp=0.jpg"
							},

						]
					},
					{
						name: '茶精选',
						id: 3,
						children: [{
							a: "冻柠红",
							b: "Black tea",
							c:"￥8",
							url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2061772493,1691551463&fm=26&gp=0.jpg"
						},
						{
							a: "绿茶",
							b: "Green Tea",
							c:"￥8",
							url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3120908506,2522654142&fm=26&gp=0.jpg"
						},
						{
							a: "乌龙茶",
							b: "Oolong Tea",
							c:"￥8",
							url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=331419052,454669967&fm=26&gp=0.jpg"
						},
						{
							a: "茉莉花茶",
							b: "Jasmine Tea",
							c:"￥8",
							url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1165211710,1235726949&fm=26&gp=0.jpg"
						},
						{
							a: "桂圆红枣枸杞茶",
							b: "Longan jujube wolfberry tea",
							c:"￥12",
							url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2000506738,4008748278&fm=26&gp=0.jpg"
						},
						
						]
					},
					{
						name: '甜到心坎',
						id: 4,
						children: [{
							a: "草莓奶盖",
							b: "Strawberry milk cap",
							c:"￥14",
							url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957262488,357406901&fm=26&gp=0.jpg"
						},
						{
							a: "舒芙蕾",
							b: "Shu Fu Lei",
							c:"￥18",
							url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3094647770,678035685&fm=26&gp=0.jpg"
						},
						{
							a: "提拉米苏",
							b: "subscription",
							c:"￥20",
							url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1150291171,2512992329&fm=26&gp=0.jpg"
						},
						{
							a: "巧克力麦芬",
							b: "chocolate muffin",
							c:"￥20",
							url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3718781499,714237199&fm=26&gp=0.jpg"
						},
						{
							a: "黑森林蛋糕",
							b: "Schwarzwald cake",
							c:"￥20",
							url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=780465294,2406279269&fm=26&gp=0.jpg"
						},
						]
					},
					{
						name: '健康轻食',
						id: 5,
						children: [{
							a: "蔬菜沙拉",
							b: "Vegetable Salad",
							c:"￥14",
							url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1524312483,1281347458&fm=26&gp=0.jpg"
						},
						{
							a: "水果沙拉",
							b: "Fresh Fruit Salad",
							c:"￥14",
							url:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2971972105,997353532&fm=26&gp=0.jpg"
						},
						{
							a:"牛肉芝士羊角",
							b:"Vegetable salad, beef, cheese and mutton horn",
							c:"￥12",
							url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4113223241,2260924740&fm=26&gp=0.jpg"
						}	
						]
					}

				],


				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true


			}
		},

		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可

			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			let list = [{}];
			for (let i = 0; i < 9; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
			}
			// this.list = list;
			this.listCur = list[0];

		},

		onReady() {
			uni.hideLoading()
		},

		methods: {
			SwitchA: () => {

			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},

			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				return false //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}

		}
	}
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}

	.page {
		height: 100Vh;
		width: 100vw;
		padding-top: 100upx;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}

	/* .cu-bar{
		z-index: 999;
		position: fixed;
	} */
	.fixed {
		position: fixed;
		z-index: 99;
	}

	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}

	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}

	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}

	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}

	.VerticalBox {
		display: flex;
	}

	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
