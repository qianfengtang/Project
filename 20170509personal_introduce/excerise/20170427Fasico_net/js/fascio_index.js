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
	
	//第二个网页动画效果
	/*$(window).scroll(function(){
		if($(window).scrollTop()>150){
			$(".service-ad img").addClass("animated rollIn");
		}
	});*/
	$(".service-ad img").hover(function(){
		$(this).addClass("animated bounce");
	},function(){
		$(this).removeClass("animated bounce");
	});
	//第三个页面动画效果
	$(window).scroll(function(){
		if($(window).scrollTop()>150){
			$(".content-right .col-xs-12 p").addClass("animated rollIn");
		}
	});
	$(".content-right img").hover(function(){
		$(this).addClass("animated fadeIn");
	},function(){
		$(this).removeClass("animated fadeIn");
	});
	//第四个网页的hover效果
	$(".show-list>li").eq(0).show();
	$(".result-choose>li").hover(function(){
		var i=$(this).index();
		$(this).addClass("choose").siblings().removeClass('choose');
		$(".show-list>li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(0);
	});
	//图片hover效果
	$(".show-list img").hover(function(){
		$(this).addClass("animated jello");
	},function(){
		$(this).removeClass("animated jello");
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
	$(".form").slideDown(500);
				
				$("#landing").addClass("border-btn");

				$("#registered").click(function() {
					$("#landing").removeClass("border-btn");
					$("#landing-content").hide(500);
					$(this).addClass("border-btn");
					$("#registered-content").show(500);
					
				});

				$("#landing").click(function() {
					$("#registered").removeClass("border-btn");
					$(this).addClass("border-btn");
					
					$("#landing-content").show(500);
					$("#registered-content").hide(500);
	});
	