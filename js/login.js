//手机号码验证
window.onload=function(){
  
	//1.判断手机号码
	$("#strong").style.display="none";
	$("#inp1").onfocus=function(){
		$("#p1").innerHTML="请输入11位手机号";
        $("#strong").style.display="none";
	}
    $("#inp1").onblur=function(){
  	  if( $("#inp1").value==""){
  	  	$("#p1").innerHTML="请输入手机号码";
  	  	$("#strong").style.display = "inline-block";
		$("#strong").style.backgroundPosition = "0 -19px";
  	  }else{
	  	  	var r=/^1[3|4|5|7|8][0-9]{9}$/;
			if(r.test($("#inp1").value)){
			  $("#strong").style.display = "inline-block";
			  $("#strong").style.backgroundPosition = "-40px -19px";
			    $("#p1").style.display="none";
			}else{
				$("#strong").style.display = "inline-block";
				$("#strong").style.backgroundPosition = "0 -19px";
				$("#p1").innerHTML="请输入正确的手机号码";
			}
	     }
     }

	
   //2.判断密码：

   	   $("#inp2").onfocus=function(){
       	 $("#p2").innerHTML="6-16个数字、字母或符号，字母区分大小写";
       }
		$("#inp2").onblur=function(){
			if($("#inp2").value==''){
				 $("#p2").innerHTML="请输入密码";
				 $("#str1").style.display = "inline-block";
				 $("#str1").style.backgroundPosition = "0 -19px";
			} else if($("#inp2").value){
				var r=/[0-9a-zA-Z`~!@#$%\^&*()_+-={}|\[\]:"";\'<>?,.\\]{6,16}$/
//				var r=/^(?![0-9]+$)[\da-zA-Z]{6,16}$/; 
				//(?!\d+$)  正方向上查找“非至少一个数字结尾”处才开始匹配，且返回空。
				if(r.test($("#inp2").value)){
						$("#low").style.backgroundColor="white";
						$("#mid").style.backgroundColor="white";
						$("#high").style.backgroundColor="white";
						let pass=$("#inp2").value;
						if(pass.length>0){
							if(pass.lenght<=6||isNaN(pass)==false){
								 $("#p2").style.display="none";
								$("#mi").style.display="block";
								$("#low").style.backgroundColor="red";
								$("#str1").style.display = "inline-block";
				                $("#str1").style.backgroundPosition = "-40px -19px";

							}else if(pass.length>6&&hasLetter(pass)&&hasNum(pass)&&hasSpec(pass)){
								$("#mi").style.display="block";
								$("#high").style.backgroundColor="green";
							}else{
								$("#mi").style.display="block";
								$("#mid").style.backgroundColor="yellow";
							}
						}
	                 }
				}else{
				 $("#str1").style.display = "inline-block";
				 $("#str1").style.backgroundPosition = "0 -19px";

				}
			}

   	//3.确认密码：
 		$("#inp3").onfocus=function(){
	    	$("#p3").style.display="block";
	    	$("#p3").innerHTML="请再次输入密码!";
	    }
		$("#inp3").onblur=function(){
			var pwd1=$("#inp2").value;
			var pwd2=$("#inp3").value;
			if(pwd2==""||pwd2==null){
				$("#p3").style.display="block";
				$("#p3").innerHTML="确认密码不能为空!";
			    $("#str2").style.display = "inline-block";
			    $("#str2").style.backgroundPosition = "0 -19px";
			}else if(pwd2==pwd1){
				 $("#str2").style.display = "inline-block";
				 $("#str2").style.backgroundPosition = "-40px -19px";
				 $("#p3").innerHTML="";
			}else{
				$("#p3").style.display="block";
				$("#p3").innerHTML="两次密码不一致!";
				$("#str2").style.display = "inline-block";
			    $("#str2").style.backgroundPosition = "0 -19px";
			}
		}
		
     //4.随机生成4位验证码
   
     $("#inp4").onfocus=function(){
         $("#p4").innerHTML="请输入短信验证码";
        }
     $("#inp4").onblur=function(){
     	if($("#inp4").value==""){
     		$("#p4").innerHTML="验证码不能为空";
     		$("#str3").style.display = "inline-block";
			$("#str3").style.backgroundPosition = "0 -19px";
     	}else{
     		$("#p4").innerHTML="";
     		$("#str3").style.display = "inline-block";
			$("#str3").style.backgroundPosition = "-40px -19px";
     	}
     }
     
     $("#getY").onclick=function(){
     	var num="";
		for(var i=0;i<4;i++){
			num+=Math.floor(Math.random()*10)
		}
        $("#inp4").value=num;
     }
   
   if($("#check").checked){
   	  return true;
   }
   $("#sub").onclick=function(){
   	  if(flagphone && flagcode && flagcode2 && flagma){
				return true;
				
			}else{
				return false;
			}
   }

 
	function $(str){
			if(str.charAt(0)=="#"){
				return document.getElementById(str.substring(1));
			}else if(str.charAt(0)=="."){
				return document.getElementsByClassName(str.substring(1));
			}else{
				return document.getElementsByTagName(str);
			}
	   }	
	  function hasLetter(pass){
	    	for(var i=0;i<pass.length;i++){
		    	var code=pass.charCodeAt(i);
			    	if((code>=65&&code<=90)||(code>=97&&code<=122)){
			    		return true;
			    	}
			    }
		    	return false;
		}
    
     function hasNum(pass){
    	for(var i=0;i<pass.length;i++){
    		var code=pass.charCodeAt(i);
    		if(code>=48&&code<=57){
    			return true;
    		}
    	}
    	return false;
    }
    
    function hasSpec(pass){
    	var specs=["$","#","!"];
    	for(var i=0;i<pass.length;i++){
    		if(specs.indexOf(pass.charAt(i))>-1){//indexOf检索字符串，返回下标
    			return true;
    		}
    	}
    	return false;
    }

}