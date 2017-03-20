
	/*转换*/
	var click_1=document.getElementById("click1");
	var click_2=document.getElementById("click2");
	var click_3=document.getElementById("click3");
	var cont1=document.getElementsByClassName("content3")[0];
	var cont2=document.getElementsByClassName("content1")[0];
	var cont3=document.getElementsByClassName("content2")[0];
	console.log(cont1);
	console.log(cont2);
	console.log(cont3);
			click_2.onclick=function(){
				cont2.style.display="block";
				cont1.style.display="none";
				cont3.style.display="none";
			}
			click_1.onclick=function(){
				cont1.style.display="block";
				cont2.style.display="none";
				cont3.style.display="none";
			}
			click_3.onclick=function(){
				cont3.style.display="block";
				cont1.style.display="none";
				cont2.style.display="none";
			}
		
	var btn=document.getElementById("count");
		btn.onclick=function(){
			/*第一个select 小时*/
			var hear=document.getElementById("select1");
			var index1=hear.selectedIndex;
			var h=hear.options[index1].text;
			/*第二个select 分钟*/
			var mot=document.getElementById("select2");
			var index2=mot.selectedIndex;
			var m=mot.options[index2].text;
			/*第三个select 秒*/
			var sec=document.getElementById("select3");
			var index3=sec.selectedIndex;
			var s=sec.options[index3].text;
			
			var k=document.getElementById("km");
			var g=document.getElementById("god");
			var tb=document.getElementById("tab1");
			var t1=document.getElementById("td1");
			var t2=document.getElementById("td2");
			var t3=document.getElementById("td3");
			var t4=document.getElementById("td4");
			var t5=document.getElementById("td5");
			var t6=document.getElementById("td6");
			var t7=document.getElementById("td7");
			var t8=document.getElementById("td8");
			var t9=document.getElementById("td9");
			k.style.display="none";
			if(h==2){
				g.style.display="block";
				tb.style.display="none";
			}
			else{
				tb.style.display="block";
				g.style.display="none";
				res=parseFloat(42/(parseInt(h)+parseInt(m/60)+parseInt(s/3600)));
//				console.log(res);
				t1.innerHTML="0"+parseInt(1/res)+"时"+parseInt((parseFloat(1/res)-parseInt(1/res))*60)+"分"+parseInt(((parseFloat(1/res)-parseInt(1/res))*60-parseInt((parseFloat(1/res)-parseInt(1/res))*60))*60)+"秒";
				t2.innerHTML="0"+parseInt(20/res)+"时"+parseInt((parseFloat(20/res)-parseInt(20/res))*60)+"分"+parseInt(((parseFloat(20/res)-parseInt(20/res))*60-parseInt((parseFloat(20/res)-parseInt(20/res))*60))*60)+"秒";
				t3.innerHTML="0"+parseInt(2/res)+"时"+parseInt((parseFloat(2/res)-parseInt(2/res))*60)+"分"+parseInt(((parseFloat(2/res)-parseInt(2/res))*60-parseInt((parseFloat(2/res)-parseInt(2/res))*60))*60)+"秒";
				t4.innerHTML="0"+parseInt(21/res)+"时"+parseInt((parseFloat(21/res)-parseInt(21/res))*60)+"分"+parseInt(((parseFloat(21/res)-parseInt(21/res))*60-parseInt((parseFloat(21/res)-parseInt(21/res))*60))*60)+"秒";
				t5.innerHTML="0"+parseInt(5/res)+"时"+parseInt((parseFloat(5/res)-parseInt(5/res))*60)+"分"+parseInt(((parseFloat(5/res)-parseInt(5/res))*60-parseInt((parseFloat(5/res)-parseInt(5/res))*60))*60)+"秒";
				t6.innerHTML="0"+parseInt(30/res)+"时"+parseInt((parseFloat(30/res)-parseInt(30/res))*60)+"分"+parseInt(((parseFloat(30/res)-parseInt(30/res))*60-parseInt((parseFloat(30/res)-parseInt(30/res))*60))*60)+"秒";
				t7.innerHTML="0"+parseInt(10/res)+"时"+parseInt((parseFloat(10/res)-parseInt(10/res))*60)+"分"+parseInt(((parseFloat(10/res)-parseInt(10/res))*60-parseInt((parseFloat(10/res)-parseInt(10/res))*60))*60)+"秒";
				t8.innerHTML="0"+parseInt(42/res)+"时"+parseInt((parseFloat(42/res)-parseInt(42/res))*60)+"分"+parseInt(((parseFloat(42/res)-parseInt(42/res))*60-parseInt((parseFloat(42/res)-parseInt(42/res))*60))*60)+"秒";
				t9.innerHTML="0"+parseInt(15/res)+"时"+parseInt((parseFloat(15/res)-parseInt(15/res))*60)+"分"+parseInt(((parseFloat(15/res)-parseInt(15/res))*60-parseInt((parseFloat(15/res)-parseInt(15/res))*60))*60)+"秒";
//				console.log(t1);
			}
		}
		/*体重指标*/
		var btn1=document.getElementById("count1");
			btn1.onclick=function(){
				var hig=document.getElementById("high").value;
				var weig=document.getElementById("weight").value;
				var pas=document.getElementById("pass");
				var gbs=document.getElementById("gb");
				var out=document.getElementsByClassName("resule")[0];
				var rou=document.getElementsByClassName("round")[0];
					if(hig==""|weig=="")
						{
							pas.style.display="inline-block";
						}
					else{
						    pas.style.display="none";
							gbs.style.display="block";
							hig=hig/100;
							console.log(hig);
							out.innerHTML=parseFloat(weig/Math.pow(hig,2)).toFixed(2);
							console.log(out.value);
							
							if(out.innerHTML<18.5){
								rou.innerHTML="偏轻";
							}
							else if(out.innerHTML>=18.5&&out.innerHTML<24.9){
								rou.innerHTML="正常";
							}
							else if(out.innerHTML>=25&&out.innerHTML<29.9){
								rou.innerHTML="偏重";
							}
							else{
								rou.innerHTML="肥胖";
							}
						}
			}
			/*热量消耗*/
			var btn2=document.getElementById("count2");
			btn2.onclick=function(){
				var tan=document.getElementById("distance").value;
				var ght=document.getElementById("weight1").value;
				var pas1=document.getElementById("pass1");
				var resul=document.getElementById("nel");
				var kal=document.getElementsByClassName("resule1")[0];
					if(tan==""|ght==""){
						pas1.style.display="inline-block";
					}
					else{
						pas1.style.display="none";
						resul.style.display="block";
						kal.innerHTML=(tan*ght*1.036).toFixed(3);
						console.log(kal.innerHTML);
					}
			}
			//汪娅
	var count1=document.getElementById("count_1");
	var jc=document.getElementById("jc");
	var gy=document.getElementById("gy");
	var right=document.getElementById("right_12");
	var right2=document.getElementById("right_2");
    var a=null,b=0;
  	 jc.onclick=function(){
   		
   		right.style.display="block";
  	 	right2.style.display="none";
 	  }
   	gy.onclick=function(){
   		right.style.display="none";
  	 	right2.style.display="block";
  	 }
	count1.onclick=function(){
    var man=document.getElementById("man")
	var woman=document.getElementById("woman")
	var old=document.getElementById("old");
	var height=document.getElementById("height");
	var weight_tz=document.getElementById("weight_tz");
	var option1=document.getElementById("option1")
	var option2=document.getElementById("option2")
	var option3=document.getElementById("option3")
	var op_four=document.getElementById("op_four")
	var option5=document.getElementById("option5")
	var clear_wa=document.getElementById("clear_wa");
	var result=document.getElementById("result");
	var bg=document.getElementById("bg");
		if(man.checked){ 
	    	a=67+13.73*weight_tz.value+5*height.value-6.9*old.value;
	    	
			if(option1.checked){
				b=a*option1.value;
			} 
			else  if(option2.checked){
				b=a*option2.value;
			}
			else  if(option3.checked){
				b=a*option3.value;
			}
			else  if(op_four.checked){
				b=a*op_four.value;
			}
			else{
				b=a*option5.value;
			}
			
			result.innerHTML="一日所需能量："+(a*b).toFixed(2)+"千卡Kcal";
		}
		else if(woman.checked){
			a=661+9.6*weight.value+1.72*height.value-4.7*old.value;
		   
		    if(option1.checked){
				b=a*option1.value;
			}
			else if(option2.checked){
				b=a*option2.value;
			}
			else if(option3.checked){
				b=a*option3.value;
			}
			else if(op_four.checked){
				b=a*op_four.value;
			}
			else{
				b=a*option5.value;
			}
			
		    result.innerHTML="一日所需能量："+(a*b).toFixed(2)+"千卡Kcal";
		}
	}
	clear_wa.onclick=function(){
	  man.checked="";
	  woman.checked="";
	  old.value="";
	  weight_tz.value="";
	  height.value="";
	  result.innerHTML="";
	  option1.checked="";
	  option2.checked="";
	  option3.checked="";
	  op_four.checked="";
	  option5.checked="";
	}
	//公英制转换
	//输入值
	var inch1=document.getElementById("inch1");
	var inch3=document.getElementById("inch3");
	var inch5=document.getElementById("inch5");
	var inch7=document.getElementById("inch7");
	var inch9=document.getElementById("inch9");
	var inch11=document.getElementById("inch11");
	//计算值
	var inch2=document.getElementById("inch2");
	var inch4=document.getElementById("inch4");
	var inch6=document.getElementById("inch6");
	var inch8=document.getElementById("inch8");
	var inch10=document.getElementById("inch10");
	var inch12=document.getElementById("inch12");
	//等于
	var equal1=document.getElementById("equal1");
	var equal2=document.getElementById("equal2");
	var equal3=document.getElementById("equal3");
	var equal4=document.getElementById("equal4");
	var equal5=document.getElementById("equal5");
	var equal6=document.getElementById("equal6");
	//重置
	var clear_a=document.getElementById("clear_a");
	var clear_b=document.getElementById("clear_b");
	var clear_c=document.getElementById("clear_c");
	var clear_d=document.getElementById("clear_d");
	var clear_e=document.getElementById("clear_e");
	var clear_f=document.getElementById("clear_f");
	//计算
	gy.onclick=function(){
		right.style.display="none";
   	    right_2.style.display="block";
	}
	equal1.onclick=function(){
		inch2.value=inch1.value*1.61;
	}
	equal2.onclick=function(){
		inch4.value=inch3.value*2.54;
	}
	equal3.onclick=function(){
		inch6.value=inch5.value*30.48;
	}
	equal4.onclick=function(){
		inch8.value=inch7.value*0.45;
	}
	equal5.onclick=function(){
		inch10.value=inch9.value*28.35;
	}
	equal6.onclick=function(){
		inch12.value=inch11.value*3.79;
	}
	//重置清除
	clear_a.onclick=function(){
		inch2.value="";
		inch1.value="";
	}
	clear_b.onclick=function(){
		inch4.value="";
		inch3.value="";
	}
	clear_c.onclick=function(){
		inch6.value="";
		inch5.value="";
	}
	clear_d.onclick=function(){
		inch8.value="";
		inch7.value="";
	}
	clear_e.onclick=function(){
		inch10.value="";
		inch9.value="";
	}
	clear_f.onclick=function(){
		inch12.value="";
		inch11.value="";
	}
	//成燕
	var ocounter = document.getElementById("counter");
	var olevel = document.getElementById("level");
	var oct = document.getElementById("ct");
	var ole = document.getElementById("le");
	var odistains = document.getElementById("distains");
	var obtn_calculate = document.getElementById("btn_calculate");
	var obtn_reset = document.getElementById("btn_reset");
	//点击菜单栏弹出右边内容
	ocounter.onclick = function() {
		oct.style.display = "block";
		ole.style.display = "none";
	}
	olevel.onclick = function() {
			oct.style.display = "none";
			ole.style.display = "block";
	}
	//训练计算器	
	obtn_calculate.onclick = function() {
		//时
		var ohours = document.getElementById("hours");
		var oh1=ohours.selectedIndex;
		var h=ohours.options[oh1].text;
		//分
		var omuins = document.getElementById("muins");
		var om=omuins.selectedIndex;
		var m=omuins.options[om].text;
		//秒
		var osecond = document.getElementById("second_2");
		var os=osecond.selectedIndex;
		var s=osecond.options[os].text;		
		if(odistains.value > 0 && ohours.value  >=0 && omuins.value  > 0 && osecond.value > 0) {
			// 计算每公里的速度
			var shijian=parseInt(h)+parseInt(m/60)+parseInt(s/3600);
			document.getElementById("t1").innerHTML =parseInt(1.5/shijian)+"时"+parseInt((parseFloat(1.5/shijian)-parseInt(1.5/shijian))*60)+"分"+parseInt(((parseFloat(1.5/shijian)-parseInt(1.5/shijian))*60-parseInt((parseFloat(1.5/shijian)-parseInt(1.5/shijian))*60))*60)+"秒";
			document.getElementById("t2").innerHTML =parseInt(3/shijian)+"时"+parseInt((parseFloat(3/shijian)-parseInt(3/shijian))*60)+"分"+parseInt(((parseFloat(3/shijian)-parseInt(3/shijian))*60-parseInt((parseFloat(3/shijian)-parseInt(3/shijian))*60))*60)+"秒";
			document.getElementById("t3").innerHTML =parseInt(5/shijian)+"时"+parseInt((parseFloat(5/shijian)-parseInt(5/shijian))*60)+"分"+parseInt(((parseFloat(5/shijian)-parseInt(5/shijian))*60-parseInt((parseFloat(5/shijian)-parseInt(5/shijian))*60))*60)+"秒";
			document.getElementById("t4").innerHTML =parseInt(10/shijian)+"时"+parseInt((parseFloat(10/shijian)-parseInt(10/shijian))*60)+"分"+parseInt(((parseFloat(10/shijian)-parseInt(10/shijian))*60-parseInt((parseFloat(10/shijian)-parseInt(10/shijian))*60))*60)+"秒";
			document.getElementById("t5").innerHTML =parseInt(21/shijian)+"时"+parseInt((parseFloat(21/shijian)-parseInt(21/shijian))*60)+"分"+parseInt(((parseFloat(21/shijian)-parseInt(21/shijian))*60-parseInt((parseFloat(21/shijian)-parseInt(21/shijian))*60))*60)+"秒";
			document.getElementById("t6").innerHTML =parseInt(42/shijian)+"时"+parseInt((parseFloat(42/shijian)-parseInt(42/shijian))*60)+"分"+parseInt(((parseFloat(42/shijian)-parseInt(42/shijian))*60-parseInt((parseFloat(42/shijian)-parseInt(42/shijian))*60))*60)+"秒";
			var speed = odistains.value/(parseFloat(h) * 60+ parseFloat(m) + parseFloat(s) / 60);
			document.getElementById("p1").innerHTML = (1/ speed).toFixed(2);
			document.getElementById("p2").innerHTML = (60/ speed).toFixed(2);
			document.getElementById("p3").innerHTML = (1000/ speed / 60).toFixed(2);
			return;
		}
        document.getElementById("calorie").innerHTML = "输入数据不够";		
	}	
	//重置
	obtn_reset.onclick = function() {
		document.getElementById("distains").value=null;
		document.getElementById("hours").value =null;
		document.getElementById("muins").value =null;
		document.getElementById("second_2").value =null;
		document.getElementById("t1").value =null;
		document.getElementById("t2").value = null;
		document.getElementById("t3").value = null;
		document.getElementById("t4").value = null;
		document.getElementById("t5").value = null;
		document.getElementById("t6").value = null;
		document.getElementById("p1").value = null;
		document.getElementById("p2").value = null;
		document.getElementById("p3").value = null;
		document.getElementById("calorie").innerHTML = null;
	}	
	//国家运动员等级
    var osex=document.getElementById("sex");
    var oage=document.getElementById("age");
    var osl_style=document.getElementById("sl_style");
    var obtn_calcula=document.getElementById("btn_calcula");
    var obtn_ret=document.getElementById("btn_ret");
    var jieguo=document.getElementById("jieguo");
    obtn_calcula.onclick=function(){
        var sle = document.getElementById("sl_style");
		var ose=sle.selectedIndex;
		var y=sle.options[ose].text;
    	//时
		var ohours = document.getElementById("sl_hours");
		var oh1=ohours.selectedIndex;
		var h=ohours.options[oh1].text;
		//分
		var omuins = document.getElementById("sl_muins");
		var om=omuins.selectedIndex;
		var m=omuins.options[om].text;
		//秒
		var osecond = document.getElementById("sl_second");
		var os=osecond.selectedIndex;
		var s=osecond.options[os].text;			
		if(sex1.checked){
			var tim=y/(parseFloat(h) * 60+ parseFloat(m) + parseFloat(s) / 60);
			if(tim<=19&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"一级运动员的水平，达标成绩为：19:00"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：13:31";
			}else if(tim>19&&tim<=21&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"二级运动员的水平，达标成绩为：20:30"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：17:40";				
			}
			else if(tim>21&&tim<=23&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"三级运动员的水平，达标成绩为：22:30"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：17:40";
				
			}else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex1.value+"运动员的水平，达标成绩为：22:30"+"<br/>"+"您的成绩没有达到"+sex1.value+"专业运动员的水平，达标成绩为：17:40";
				
			}
			if(tim<=19&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"一级运动员的水平，达标成绩为：19:00"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：13:31";
			}else if(tim>19&&tim<=21&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"二级运动员的水平，达标成绩为：20:30"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：17:40";
				
			}else if(tim>21&&tim<=23&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"三级运动员的水平，达标成绩为：22:30"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：17:40";
				
			}else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex1.value+"运动员的水平，达标成绩为：22:30"+"<br/>"+"您的成绩没有达到"+sex1.value+"专业运动员的水平，达标成绩为：17:40";
				
			}
			if(tim<=44&&y==10000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"一级运动员的水平，达标成绩为：44:00"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：28:31";
			}else if(tim>44&&tim<=50&&y==10000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"二级运动员的水平，达标成绩为：50:00"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：37:40";
				
			}else if(tim>50&&tim<=56&&y==10000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"三级运动员的水平，达标成绩为：56:00"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：37:40";
				
			}else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex1.value+"运动员的水平，达标成绩为：56:00"+"<br/>"+"您的成绩没有达到"+sex1.value+"专业运动员的水平，达标成绩为：37:40";
				
			}
			if(tim<=110&&y==12000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"一级运动员的水平，达标成绩为：1:50:00"+"<br/>"+"没有该级别专业运动员标准数据.";
			}else if(tim>110&&tim<=116&&y==12000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"二级运动员的水平，达标成绩为：1:56:00"+"<br/>"+"没有该级别专业运动员标准数据.";
				
			}else if(tim>116&&tim<=120&&y==12000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"三级运动员的水平，达标成绩为：2:00:00"+"<br/>"+"没有该级别专业运动员标准数据.";
			
			}else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex1.value+"水平，达标成绩为：2:00:00"+"<br/>"+"没有该级别专业运动员标准数据.";				
			}
			if(tim<=220&&y==42000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"一级运动员的水平，达标成绩为：3:40:00"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：28:31";
			}else if(tim>220&&tim<=240&&y==42000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"二级运动员的水平，达标成绩为：4:00:00"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：37:40";
				
			}else if(tim>240&&tim<=260&&y==42000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex1.value+"三级运动员的水平，达标成绩为：4:20:00"+"<br/>"+"您的成绩达到了"+sex1.value+"专业:"+"国际级运动健将的水平，达标成绩为：37:40";
				
			}else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex1.value+"四级运动员的水平，达标成绩为：4:20:00"+"<br/>"+"您的成绩没有达到"+sex1.value+"专业运动员的水平，达标成绩为：37:40";				
			}			
		}
		if(sex2.checked){
			var tim=y/(parseFloat(h) * 60+ parseFloat(m) + parseFloat(s) / 60);			
			if(tim<=19&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"一级运动员的水平，达标成绩为：19:00"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：13:31";
			}else if(tim>19&&tim<=21&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"二级运动员的水平，达标成绩为：20:30"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：17:40";				
			}else if(tim>21&&tim<=23&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"三级运动员的水平，达标成绩为：22:30"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：17:40";				
			}else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex2.value+"运动员的水平，达标成绩为：22:30"+"<br/>"+"您的成绩没有达到"+sex2.value+"专业运动员的水平，达标成绩为：17:40";			
			}
			if(tim<=19&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"一级运动员的水平，达标成绩为：19:00"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：13:31";
			}else if(tim>19&&tim<=21&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"二级运动员的水平，达标成绩为：20:30"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：17:40";				
			}else if(tim>21&&tim<=23&&y==5000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"三级运动员的水平，达标成绩为：22:30"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：17:40";				
			}else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex2.value+"运动员的水平，达标成绩为：22:30"+"<br/>"+"您的成绩没有达到"+sex2.value+"专业运动员的水平，达标成绩为：17:40";				
			}
			if(tim<=44&&y==10000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"一级运动员的水平，达标成绩为：44:00"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：28:31";
			}else if(tim>44&&tim<=50&&y==10000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"二级运动员的水平，达标成绩为：50:00"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：37:40";				
			}else if(tim>50&&tim<=56&&y==10000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"三级运动员的水平，达标成绩为：56:00"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：37:40";				
			}
			else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex2.value+"运动员的水平，达标成绩为：56:00"+"<br/>"+"您的成绩没有达到"+sex2.value+"专业运动员的水平，达标成绩为：37:40";				
			}
			if(tim<=110&&y==12000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"一级运动员的水平，达标成绩为：1:50:00"+"<br/>"+"没有该级别专业运动员标准数据.";
			}else if(tim>110&&tim<=116&&y==12000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"二级运动员的水平，达标成绩为：1:56:00"+"<br/>"+"没有该级别专业运动员标准数据.";
				
			}else if(tim>116&&tim<=120&&y==12000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"三级运动员的水平，达标成绩为：2:00:00"+"<br/>"+"没有该级别专业运动员标准数据.";				
			}else if(tim>120&&y==12000){
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex2.value+"水平，达标成绩为：2:00:00"+"<br/>"+"没有该级别专业运动员标准数据.";				
			}
			if(tim<=220&&y==42000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"一级运动员的水平，达标成绩为：3:40:00"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：28:31";
			}else if(tim>220&&tim<=240&&y==42000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"二级运动员的水平，达标成绩为：4:00:00"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：37:40";				
			}else if(tim>240&&tim<=260&&y==42000){
				jieguo.innerHTML="您的成绩达到了全国田径业余锻炼等级标准"+sex2.value+"三级运动员的水平，达标成绩为：4:20:00"+"<br/>"+"您的成绩达到了"+sex2.value+"专业:"+"国际级运动健将的水平，达标成绩为：37:40";				
			}
			else{
				jieguo.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准"+sex2.value+"四级运动员的水平，达标成绩为：4:20:00"+"<br/>"+"您的成绩没有达到"+sex2.value+"专业运动员的水平，达标成绩为：37:40";				
			}					
		} 
	    document.getElementById("calorie").innerHTML = "输入数据不够";	
   }
    
	

