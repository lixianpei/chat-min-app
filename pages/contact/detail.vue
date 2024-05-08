<template>
	<view class="container">
		<view class="info">
			<image class="avatar" :src="userInfo.avatarUrl"></image>
			<view class="right">
				<view class="base">
					<view>
						<text class="remark_username">{{userInfo.user_name || userInfo.nickname}}</text>
						<image v-if="userInfo.gender == 1" class="gender" src="/static/icon/man.png"></image>
						<image v-else-if="userInfo.gender == 2" class="gender" src="/static/icon/woman.png"></image>
					</view>
					<view>
						<image v-if="userInfo.isStar" class="star" src="/static/icon/star.png"></image>
					</view>
				</view>
				<view class="item">昵称：{{userInfo.nickname||"-"}}</view>
				<view class="item">聊天号：{{userInfo.id||"-"}}</view>
				<view class="item">地区：{{userInfo.address||"-"}}</view>
				<view class="item"></view>
				
			</view>
		</view>
		
		<view class="operation-item">
			<uni-list>
				<uni-list-item v-if="userInfo.isFriend == 1" showArrow title="设置备注和标签" />
				<uni-list-item v-if="userInfo.isFriend == 1" title="电话号码" :rightText="userInfo.phone" />
				
				<!-- 未添加好友时 -->
				<uni-list-item v-if="userInfo.isFriend != 1" title="来源" :rightText="userInfo.searchSource || '未知搜索来源'" />
			</uni-list>
			
			<view v-if="userInfo.isFriend" class="button" @click="addContactUser()">
				<uni-icons type="chatbubble" size="22" color="#616c95"></uni-icons>
				<view class="text">发消息</view>
			</view>
			<view v-if="userInfo.isFriend" class="button" @click="addContactUser()">
				<uni-icons type="videocam" size="22" color="#616c95"></uni-icons>
				<view class="text">音视频通话</view>
			</view>
			
			<view v-if="!userInfo.isFriend" class="button" @click="addContactUser()">
				<view class="text">添加到通讯录</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { userDetail,addFriend } from '../../api/api.js'
	export default {
		data() {
			return {
				userInfo: {						
					uid: 1,
					phone: "17859908727",
					remark_username: "Ac",
					username: "赵双岑",
					nickname: "Super笔中情",
					user_no: "superupzhaoshaungcen",
					address: "福建省厦门市",
					avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
					gender: 1,//男-1；女-2；
					isStar: 1,//是否标星
					searchSource: "来自手机号搜索",//好友推荐、其他等等
				},
			}
		},
		onLoad(option) {
			console.log("detail:",option)
			userDetail({id: parseInt(option.id)}).then(res => {
				console.log(res)
				this.userInfo = res
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			addContactUser() {
				addFriend({
					"userId": this.userInfo.id,
					"status": 2,//发起申请
				}).then(res => {
					setTimeout(() => {
						uni.redirectTo({
							url:'/pages/chat/chat?id='+this.userInfo.id
						})
					},2000)
				}).catch(err => {
					console.log("err////",err)
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.info {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			background-color: white;
			padding: 20rpx;
			.avatar {
				width: 100rpx;
				height: 100rpx;
				border-radius: 10rpx;
				flex-shrink: 0;
			}
			.right {
				display: flex;
				flex-direction: column;
				padding-left: 20rpx;
				width: 100%;
				.base {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.remark_username {
						font-weight: bolder;
						font-size: 1.3rem;
					}
					.gender {
						width: 30rpx;
						height: 30rpx;
						margin: 0 10rpx;
					}
					.star {
						width: 30rpx;
						height: 30rpx;
					}
				}
				.item {
					font-size: 0.8rem;
					color: #666;
					padding-top: 10rpx;
				}
			}
		}
		.operation-item {
			margin-top: 20rpx;
			.button {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				margin-top: 20rpx;
				padding: 20rpx;
				text-align: center;
				background-color: white;
				.text {
					color: #616c95;
					font-weight: bold;
					font-size: 0.9rem;
					padding-left: 10rpx;
				}
			}
		}
	}
</style>