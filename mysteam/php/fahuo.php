<?php
	require "link.php";
	require "jsonHelper.php";
	$array;
	$i=0;
	$sql="SELECT * FROM buy_sell,user,goods WHERE buy_sell.seller='$_POST[username]' AND buy_sell.sell_type='wait' AND user.username=buy_sell.buyer AND goods.id=buy_sell.goodsid";
	$result=$mysql->query($sql);
	$count=$result->num_rows;//新旧语法不能混用！
	echo $count; 
?>