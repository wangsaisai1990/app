<template>
    <div class="app-container">


        <mt-header fixed title="fixed top"></mt-header>

        <transition mode="out-in">
            <router-view></router-view>
        </transition>
        
        <nav class="mui-bar mui-bar-tab">
			<router-link to="/HomeContainer" class="mui-tab-item" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/MemberContainer" class="mui-tab-item" >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/ShopcarContainer" class="mui-tab-item" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/SearchContainer" class="mui-tab-item" >
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        

    </div>

</template>

<script >

</script>

<style>
    .app-container{
        padding-top:40px;
        overflow-x: hidden;
        padding-bottom: 50px;
    }

   .v-enter{
      opacity:0;
      transform: translate(100%);
   }
   .v-leave-to{
      opacity:0;
      transform: translate(-100%);
      position: absolute;
   }
   .v-enter-active,
   .v-leave-active{
      transition:all 0.5s ease;
   }
</style>