
	var p11=document.getElementById("p11");
	var p21=document.getElementById("p21");
	var p31=document.getElementById("p31");
	var calc_contain=document.getElementById("calc-contain");
	var klm2=document.getElementById("klm2");
	var klm1=document.getElementById("klm1");
	var hour2=document.getElementById("hour2");
	var minite2=document.getElementById("minite2");
	var second2=document.getElementById("second2");
	var rhour2=document.getElementById("r-hour2");
	var rminite2=document.getElementById("r-minite2");
	var rsecond2=document.getElementById("r-second2");
	var calc2=document.getElementById("calc2");
	var rt2=document.getElementById("reset2");
	var tang_ft_v="";
	var tang_ft_time="";
	/*ft begin*/
	alert("申明：本网站为个人调试网站，里面的内容仅为个人学习所用！")
	p11.onclick=function(){
		calc_contain.style.left="0px";
	}
	p21.onclick=function(){
		calc_contain.style.left="-590px";
	}
	p31.onclick=function(){
		calc_contain.style.left="-1180px";
	}
	calc2.onclick=function(){
		tang_ft_time=(parseFloat(hour2.value)+minite2.value/60+second2.value/3600).toFixed(2);
		tang_ft_v=klm1.value/tang_ft_time;
		console.log(tang_ft_time);
		console.log(hour2.value);
		console.log(minite2.value);
		console.log(second2.value);
		tang_ft_time=klm2.value/tang_ft_v;
		rhour2.innerHTML=parseInt(tang_ft_time);
		rminite2.innerHTML=parseInt((tang_ft_time-parseInt(tang_ft_time))*60);
		rsecond2.innerHTML=(((tang_ft_time-parseInt(tang_ft_time))*60-parseInt((tang_ft_time-parseInt(tang_ft_time))*60))*60).toFixed(2);
	}
	rt2.onclick=function(){
		klm1.value="";
		hour2.value="";
		minite2.value="";
		second2.value="";
		klm2.value="";
	}
	/*ft-end*/
	/*pace-converter begin*/
	var minite1=document.getElementById("minite1");
	console.log(minite1.value);
	var s1=document.getElementById("s1");
	var s2=document.getElementById("s2");
	var s3=document.getElementById("s3");
	var calc1=document.getElementById("calc1");
	var reset1=document.getElementById("reset1");
	calc1.onclick=function(){
		if(minite1.value!=""&&s1.value!=""){
			s2.value=(minite1.value/60+s1.value/3600).toFixed(2);
			s3.value=(1000/(minite1.value*60+s1.value)).toFixed(2);
		}
		else if(s2.value!=""){
			s3.value=(1000/(s2.value*3600)).toFixed(2);
			minite1.value=parseInt(s2.value*60);
			s1.value=parseInt((s2.value*60-parseInt(s2.value*60))*60);
		}
		else if(s3.value!=""){
			s2.value=(1000/s3.value/3600).toFixed(2);
			minite1.value=parseInt(s2.value*60);
			s1.value=parseInt((s2.value*60-parseInt(s2.value*60))*60);
		}
		else if(minite1.value==s1.value&&s1.value==s2.value&&s2.value==s3.value&&s3.value==""){
			alert("请输入数据！");
		}
	}
	reset1.onclick=function(){
		minite1.value="";
		s1.value="";
		s2.value="";
		s3.value="";
	}
	/*pace-converter end*/
	/*pace-calc begin*/
	var klm=document.getElementById("klm");
	var hour=document.getElementById("hour");
	var minite=document.getElementById("minite");
	var second=document.getElementById("second");
	var second1=document.getElementById("second1");
	var s_1=document.getElementById("ss");
	var calc=document.getElementById("calc");
	var oreset=document.getElementById("reset");
	
	calc.onclick=function(){
		if(klm.value==""){
			klm.value=((hour.value*3600+minite.value*60+second.value)/(second1.value*60+s_1.value)).toFixed(2);
		}
		else if(hour.value==minite.value&&minite.value==second.value&&second.value==""){
			hour.value=parseInt(klm.value*(second1*60+s_1.value)/3600);
			minite.value=parseInt((klm.value*(second1*60+s_1.value)/3600-hour.value)*60);
			second.value=(((klm.value*(second1*60+s_1.value)/3600-hour.value)*60-minite.value)*60).toFixed(2);
		}
		else if(second1.value==""&&s_1.value==""){
			second1.value=parseInt((hour.value*60+minite.value)/klm.value);
			s_1.value=parseInt(second.value/klm.value); 
		}
		else if(klm.value==hour.value&&hour.value==minite.value&&minite.value==second.value&&second.value==second1.value&&second1.value==s_1.value&&s.value==""){
			alert("请输入数据！");
		}
	}
	oreset.onclick=function(){
		klm.value="";
		hour.value="";
		minite.value="";
		second.value="";
		s_1.value="";
		second1.value="";
	}
	/*pace-calc end*/
	var tqf=document.getElementById("tqf");
	var hhy=document.getElementById("hhy");
	var wy=document.getElementById("wy");
	var cy=document.getElementById('cy');
	
	function jumptotqf(m){
		var target=document.getElementById(m);
		target.style.display="block";
		hhy.style.display="none";
		cy.style.display="none";
		wy.style.display="none";
	}
	function jumptohhy(m){
		var target=document.getElementById(m);
		target.style.display="block";
		tqf.style.display="none";
		cy.style.display="none";
		wy.style.display="none";
	}
	function jumptocy(m){
		var target=document.getElementById(m);
		target.style.display="block";
		tqf.style.display="none";
		hhy.style.display="none";
		wy.style.display="none";
	}
	function jumptowy(m){
		var target=document.getElementById(m);
		target.style.display="block";
		tqf.style.display="none";
		cy.style.display="none";
		hhy.style.display="none";
	}
	/*导航点击事件*/
	var nav=document.getElementsByClassName("nav")[0];
	var navli=nav.getElementsByTagName("li");
	for(var i=0;i<navli.length;i++){
		var num;
		navli[i].index=i;
		navli[i].onclick=function(){
			num=this.index;
			ftn(num);
		}
	}
	function ftn(num){
		for(var j=0;j<navli.length;j++){
			navli[j].id="";
		}
		navli[num].id="current";
	}
