window.onload=function(){
	//基础代谢计算器
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
}
