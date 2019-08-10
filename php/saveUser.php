<?php
	header("content-type","text/html;charset=utf-8");
	//一、接收前端传来的数据
	$userphone = $_POST['userphone'];//接收到手机号
	$userpass = $_POST['userpass'];//接收到密码

	//二、保存数据
	//1、建立连接并选择数据库
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		//die("连接失败".mysql_error());
		echo "0";	
	}	
	mysql_select_db("mydb1");

	//2、执行SQL语句
	$result=mysql_query("select * from user where userphone='$userphone'",$con);
	$res=mysql_num_rows($result);
	
	if($res==1){//查询数据库中是否有数据，有的话，不能注册
		echo 0;
	}else{//没有数据的话，插入数据
		mysql_query("insert into user values('$userphone','$userpass')",$con);
		echo 1;
	}
    //3、关闭数据库
	mysql_close($con);
?>