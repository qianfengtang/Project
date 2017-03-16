window.onload=function(){
	var ad=document.getElementById("ad");
	var btn_left=document.getElementById("button-left");
	var btn_right=document.getElementById("button-right");
	var i=0;
	btn_left.onclick=function(){
		i++;
		if(i>0){
			i=-2;
		}
		ad.style.left=i*1200+"px";
		console.log("next:" +i);
	}
	btn_right.onclick=function(){
		i--;
		if(i<-2){
			i=0;
		}
		ad.style.left=i*1200+"px";
		}
	
}
