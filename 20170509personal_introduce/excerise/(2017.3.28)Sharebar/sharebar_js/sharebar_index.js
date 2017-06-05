	var menu2 =document.getElementsByClassName("menu2")[0];
	var sharebar=document.getElementsByClassName("sharebar")[0];
	var winWidth;
	var boxWidth;
	//获取窗口的宽度
	if (window.innerWidth){
		winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;		
	}
	//获取分享条的宽度
	boxWidth=sharebar.offsetWidth;
	sharebar.onmouseover=function(){
		move(winWidth-boxWidth,-1);
	}
	sharebar.onmouseout=function(){
		move(winWidth,1);
	}
	//封装函数
	var timer=null;
 	function move(a,b){
 		clearInterval(timer);
 		timer=setInterval(function(){
 			if(sharebar.style.left==a+"px"){
 				clearInterval(timer);
 			}else{
 				sharebar.style.left=sharebar.offsetLeft+b+'px';
 			}
 		},1)
 		
 	}

