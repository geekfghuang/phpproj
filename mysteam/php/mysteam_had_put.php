<?php
	require "link.php";
	require "jsonHelper.php";
	$x=$_POST['username'];
	$x=(explode(" ",$x)[0]);
	$i=0;
	$array;
	$sql="SELECT * FROM sell,goods WHERE sell.username='$x' AND sell.goodsid=goods.id";
	$result=$mysql->query($sql);
	if($result->num_rows>0){
	while($final=$result->fetch_array()){     //千万不可以while($final){},这样会死循环爆内存！！
	   $array[$i]['goodsid']=$final['goodsid'];
	   $array[$i]['picture']=$final['picture'];
	   $i++;
	}
	echo JSON($array);
	}
	else{
	echo false;
	}
?>