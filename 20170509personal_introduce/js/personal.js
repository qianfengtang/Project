//设置第一页动画效果
	if($(".page1").filter("current")){
		$(".page1-truangle1").addClass("animated slideInDown");
		$(".page1-truangle2").addClass("animated slideInUp");
	}else{
		$(".page1-truangle1").removeClass("slideInDown");
		$(".page1-truangle2").removeClass("slideInUp");
		
	}
//设置第二页动画效果
	//项目描述
	$(".project-desc").hover(function(){
		$(this).css("top","0px");
	},function(){
		$(this).css("top","119px");
	});
	//项目图片
	if($(".page2").filter("current")){
		$(".project-list img").addClass("animated zoomIn");
		$(".content-left img").addClass("animated tada");
	}else{
		$(".project-list img").removeClass("animated zoomIn");
		$(".content-left img").removeClass("animated tada");
	}
	//项目li
	var num=0;
	var timer;
	$(".project-list>li").eq(0).addClass("now");
	for(var i=0;i<$(".project-list li").length;i++){
		$(".project-list li").eq(i).hover(function(){
			clearInterval(timer);
			num=$(this).index();
			ftn(num);
		},function(){
			autoplay();
		});
	}
	function ftn(num){
		$(".project-list li").eq(num).addClass("now").siblings().removeClass("now");
	}
	function autoplay(){
		timer=setInterval(function(){
			var j=Math.random();
			j=parseInt(j*10)%$(".project-list li").length;
			if(j==num){
				j++;
			}
			num=j;
			ftn(num);
		},2000);
		
	}
	setTimeout(autoplay(),2000);
//设置第四页动画
	//第一个水球
	$("#ball1").waterbubble({
		radius:50,
		txt:"html5\/css3\n90%",
		data:0.9,
		waterColor:"#8AC3FC",
		textColor:"black",
		font:"20px"
	});
	//第二个水球
	$("#ball2").waterbubble({
		radius:50,
		txt:"Js\/jQuery\n80%",
		data:0.8,
		waterColor:"#91E314",
		textColor:"black",
		font:"20px"
	});
	//第三个水球
	$("#ball3").waterbubble({
		radius:50,
		txt:"Bootstrap\/amazeUI\n80%",
		data:0.8,
		waterColor:"#C94652",
		textColor:"black",
		font:"20px"
	});
	//第四个水球
	$("#ball4").waterbubble({
		radius:50,
		txt:"PHP\/mySQL\n70%",
		data:0.7,
		waterColor:"#FFAF39",
		textColor:"black",
		font:"20px"
	});
	//第五个水球
	$("#ball5").waterbubble({
		radius:50,
		txt:"Node\/Vue\n60%",
		data:0.6,
		waterColor:"#7CB131",
		textColor:"black",
		font:"20px"
	});
	//第六个水球
	$("#ball6").waterbubble({
		radius:50,
		txt:"Ajax\/Json\n65%",
		data:0.65,
		waterColor:"#3C826C",
		textColor:"black",
		font:"20px"
	});
	//无缝轮播
	function marquee(i, direction){
	var obj = document.getElementById("marquee" + i);
	var obj1 = document.getElementById("marquee" + i + "_1");
	var obj2 = document.getElementById("marquee" + i + "_2");
		if (direction == "up"){
			if (obj2.offsetTop - obj.scrollTop <= 0){
				obj.scrollTop -= (obj1.offsetHeight + 20);
			}else{
				var tmp = obj.scrollTop;
				obj.scrollTop++;
				if (obj.scrollTop == tmp){
					obj.scrollTop = 1;
				}
			}
		}else{
			if (obj2.offsetWidth - obj.scrollLeft <= 0){
				obj.scrollLeft -= obj1.offsetWidth;
			}else{
				obj.scrollLeft++;
			}
		}
	}
	
	function marqueeStart(i, direction){
		var obj = document.getElementById("marquee" + i);
		var obj1 = document.getElementById("marquee" + i + "_1");
		var obj2 = document.getElementById("marquee" + i + "_2");
	
		obj2.innerHTML = obj1.innerHTML;
		var marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 20);
		obj.onmouseover = function(){
			window.clearInterval(marqueeVar);
		}
		obj.onmouseout = function(){
			marqueeVar = window.setInterval("marquee("+ i +", '"+ direction +"')", 20);
		}
	}
	marqueeStart(1, "left");
//第五页js效果
	$(".contact-me>li").eq(1).hover(function(){
		$(".contact-me img").slideDown(200);
	},function(){
		$(".contact-me img").stop().slideUp(200);
	})
