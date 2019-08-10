	function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}	
	
	//文本框获得焦点和失去焦点
	function clearText(){
		if($("#txt").value=="请输入想找的宝贝"){
			$("#txt").value="";
		}
	}
	function resetText(){
		if($("#txt").value==""){
			$("#txt").value="请输入想找的宝贝";
		}
	}

//city城市选择
$("#sjx").onclick=function(){
	$("#city").style.display="block";
}
 let uls=$("#ulDom").children;
 for(var i=0;i<uls.length;i++){
 	uls[i].onclick=function(e){
 		var e=event||window.event;
 		$("#sjx").innerText=this.innerText;
 		$("#city").style.display="none";
 	}
 }
 
 
 //图片切换
 //1.获取所有的小图
   var uls2 = $("#ulS").children;

   for(var i=0;i<uls2.length;i++){
	
	uls2[i].setAttribute("index",i);
//	//给每个小图绑定点击事件
	uls2[i].onmouseover = function(event){
	
		let evt =event || window.event
		for(var j=0;j<uls2.length;j++){
			uls2[j].style="";
		}
		this.style.borderColor ="black";//给点击的小图加上边框
		//2、
		var pics = $("#pic").children;
		for(var j=0;j<pics.length;j++){
			pics[j].style.display = "none";
		}
		var index = this.getAttribute("index");
		pics[index].style.display = "block";
		evt.preventDefault();
	}
}
//
////购物车+ -
$('#numb1').onclick=function(){
	$('#numb2').value--;
	if($('#numb2').value<1){
		$('#numb2').value=1;
	}
}
$('#numb3').onclick=function(){
	$('#numb2').value++;
}
	
	
	//点击立即购买按钮和加入购物车按钮

	$("#b1").onclick=function(){
		$("#alertBox").style.display="block";
	}
	$("#b2").onclick=function(){
		$("#alertBox").style.display="block";
	}
	$("#is").onclick=function(){
		$("#alertBox").style.display="none";
	}
    
    
    let di=document.getElementsByClassName('di');
    //首页跳转商品详情页
//  $("#newBox").onclick=function(){
    	//1.创建对象
		let xhr=new XMLHttpRequest();
		//2.设置请求参数
		xhr.open('post','./php/getGoodsInfo.php',true);

		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
		let sendstr=`goodsId=${di.innerHTML}`;
		
			//3.设置回调函数
		xhr.onreadystatechange=function(){
			if(xhr.status==200 && xhr.readyState==4){
				if(xhr.responseText==0){
				     console.log(xhr.responseText);
				 }
			}
		}
		 xhr.send(sendstr);

//  }
