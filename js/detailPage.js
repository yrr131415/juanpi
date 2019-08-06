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

