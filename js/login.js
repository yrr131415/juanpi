 	function $(str){
			if(str.charAt(0)=="#"){
				return document.getElementById(str.substring(1));
			}else if(str.charAt(0)=="."){
				return document.getElementsByClassName(str.substring(1));
			}else{
				return document.getElementsByTagName(str);
			}
	 }

 
 $("#sub").onclick=function(){
		//1.创建对象
		let xhr=new XMLHttpRequest();
		
		//2.设置请求参数
		xhr.open('post','./php/loginCheckPhone.php',true);

		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		let sendstr=`userphone=${$("#inp1").value}`;
		
			//3.设置回调函数
		xhr.onreadystatechange=function(){
			if(xhr.status==200 && xhr.readyState==4){
				if(xhr.responseText==0){//php端响应过来的数字  0是用手机号存在，可以登录；
					window.location.href='index.html';
				 }else{//1是手机号不存在，跳转到登录页面
				 	$("#p1").innerHTML="该用户名还未注册,请先<a href='register.html'>注册</a>";
				 }
			}
		}
		 xhr.send(sendstr);
	}
