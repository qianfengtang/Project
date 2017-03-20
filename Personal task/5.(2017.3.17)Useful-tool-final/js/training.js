window.onload = function() {
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
		var osecond = document.getElementById("second");
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
		document.getElementById("second").value =null;
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

}
