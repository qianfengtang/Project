	//主页js效果
	//导航广告划出效果
	$("#nav-li>li").hover(function(){
		var i=$(this).index();
		ftn(i);
	});
	//初始化
	$(".nav-ad .nav-ad-list").eq(0).show();
	//效果函数
	function ftn(m){
		$("#nav-li>li").eq(m).addClass("current").siblings().removeClass("current");
		$(".nav-ad .nav-ad-list").eq(m).stop().slideDown(200).siblings().stop().slideUp(200);
	}
	$(".nav-ad .nav-ad-list").click(function(){
		$(this).css("display","none");
	});
	//页面content部分点击效果
	$(".gonow1").css("color","#c2191b");
	$(".gonews1").show();
	$(".gonow3").css("color","#c2191b");
	$(".gonews4").show();
	$(".gonow1").click(function(){
		$(this).css("color","#c2191b").siblings().css("color","#666");
		$(".gonews1").show();
		$(".gonews2").hide();
	});
	$(".gonow2").click(function(){
		$(this).css("color","#c2191b").siblings().css("color","#666");
		$(".gonews2").show();
		$(".gonews1").hide();
	});
	$(".gonow3").click(function(){
		$(this).css("color","#c2191b").siblings().css("color","#666");
		$(".gonews4").show();
		$(".gonews5").hide();
	});
	$(".gonow4").click(function(){
		$(this).css("color","#c2191b").siblings().css("color","#666");
		$(".gonews5").show();
		$(".gonews4").hide();
	});
	//底部轮播控制
	var size=$(".img-list>li").size();
	var j=0,timer;
	//设置自动播放函数
	function autoplay(){
		timer=setInterval(function(){
			j++;
			j%=size-7;
			lunbo();
		},1000);
	}
	setTimeout(autoplay(),1000);
	//设置变换函数
	function lunbo(){
		$(".img-list").stop().css("left",-j*133+"px");
	}
	//移出播放移入暂停功能
	$(".footad").hover(function(){
		clearInterval(timer);
		console.log(1);
	},function(){
		autoplay();
	});
	//设置按钮播放效果
	$(".prev-btn").click(function(){
		j++;
		if(j==4){
			j=0;
		}
		console.log(j);
		lunbo();
	});
	$(".next-btn").click(function(){
		j--;
		if(j==-1){
			j=size-8;
		}
		lunbo();
	});
	//主页js效果结束
	//