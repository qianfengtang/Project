	var i=0,timer;
	var size=$(".pic>li").size();
	$(".pic>li").eq(0).css("display","block");
	//设置按钮切换效果
	$(".btn>li").click(function(){
		i=$(this).index();
		ftn();
	});
	//设置变换函数
	function ftn(){
		$(".btn>li").eq(i).addClass("current").siblings().removeClass("current");
		$(".pic>li").eq(i).stop().fadeIn(200).siblings().stop().fadeOut(200);
	}
	//设置自动播放函数
	function autoplay(){
		timer=setInterval(function(){
		i++;
		i%=size;
		ftn();
		},2000);	
	}
	$(".contain").hover(function(){
		clearInterval(timer);
	},function(){
		autoplay();
	});
	setTimeout(autoplay(),1000);
	//自动播放结束
	//设置项目列表版块的js效果
	$(".choose-item li").hover(function(){
		$(this).addClass("list-current").siblings().removeClass("list-current");
	})
	//设置手风琴效果
	$(".actual-case li").mouseenter(function () {
		$(this).addClass("actual-choose").siblings("li").removeClass("actual-choose");
		$(this).removeClass("actual-throw").siblings('li').addClass("actual-throw");
        $(this).stop().animate({width : 844},500).siblings("li").stop().animate({ width: 84},500);
 	 });
 	 //设置大师展示模块动画点击效果
 	 //点击左侧按钮效果
 	 var m_index=0;
 	 $(".arrow1").click(function(){
 	 	$(".arrow2").removeClass("arrow-current");
 	 	m_index++;
 	 	if(m_index>=$('.master-img ul>li').length-4){
 	 		m_index=$('.master-img ul>li').length-4;
 	 		$(this).addClass("arrow-current");
 	 	}
 	 	$(".master-img ul").stop().animate({left:-m_index*307},500);
 	 });
	//点击右侧按钮效果
	$(".arrow2").click(function(){
		$(".arrow1").removeClass("arrow-current");
 	 	m_index--;
 	 	if(m_index<=0){
 	 		m_index=0;
 	 		$(this).addClass("arrow-current");
 	 	}
 	 	$(".master-img ul").stop().animate({left:-m_index*307},500);
 	 });
 	 //设置楼层滚动效果
 	 $(window).scroll(function(){
 	 	if($(document).scrollTop()>100){
 	 		$(".quick-nav").css("display","block");
 	 	}else{
 	 		$(".quick-nav").css("display","none");
 	 	}
 	 });
