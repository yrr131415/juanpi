<?php
	header("content-type","text/html;charset=utf-8");
	
   //1接收数据
	$userphone = $_POST["userphone"];

   //2、在数据库中查询
   //1)、建立连接，并选择数据库
   $con = mysql_connect("localhost","root","root");
   mysql_select_db("mydb1",$con);

   
   	//2、执行SQL语句
	$result=mysql_query("select * from user where userphone='$userphone'",$con);
	$rows=mysql_num_rows($result);
	
	if($rows>0){//如果用户名存在，返回0；
		echo 0;
	}else{//如果用户名不存在，返回1.
		echo 1;
	}
   //3、关闭数据库
	mysql_close($con);
?>