	//设置导航hover效果
	$(".nav-list>li").click(function(){
		$(this).children().addClass("current");
		$(this).siblings().children().removeClass("current");
	});
	//导航按钮效果
	var btn=true;
		$(".navbar-toggle").click(function(){
		if(btn==true){
			$(".lunbo").css("visibility","hidden");
			$(".ad .ad-check").css("visibility","hidden");
		}
		if(btn==false){
			$(".lunbo").css("visibility","visible");
			$(".ad .ad-check").css("visibility","visible");
		}
		if(btn==true){
			btn=false;
		}else{
			btn=true;
		}
	});
	//品牌设计子菜单hover效果
	$(".logo-plan").hover(function(){
		$(".sub-list").stop().slideDown(200);
	},function(){
		$(".sub-list").stop().slideUp(200);
	});
	//第四个网页的hover效果
	$(".show-list>li").eq(0).show();
	$(".result-choose>li").hover(function(){
		var i=$(this).index();
		$(this).addClass("choose").siblings().removeClass('choose');
		$(".show-list>li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(0);
	});
	//第五个页面的鼠标滚动的动画效果
	//文本动画
	$(window).scroll(function(){
		if($(window).scrollTop()>10){
			$(".content-list").addClass("animated fadeInDown");
		}
	});
	//广告图片动画
	$(window).scroll(function(){
		if($(window).scrollTop()>150){
			$(".fifth-ad .col-xs-8").addClass("animated fadeInLeft");
			$(".fifth-ad .col-xs-4 img").addClass("animated fadeInRight");
		}
	});
	//人物介绍动画
	$(window).scroll(function(){
		if($(window).scrollTop()>700){
			$(".man-img img").addClass("animated zoomIn");
		}
	});
	//第六个页面的效果
	