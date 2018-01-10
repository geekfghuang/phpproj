<?php
	require "link.php";
	require "jsonHelper.php";
	$x=$_POST['goodsid'];
	$array;
	$sql="SELECT * FROM goods,sell WHERE goods.id='$x' AND sell.goodsid=goods.id";
	$result=$mysql->query($sql);
	if($final=$result->fetch_array()){
		 $array['goodsname']=$final['goodsname'];
		 $array['price']=$final['price'];
		 $array['size']=$final['size'];
		 $array['description']=$final['description'];
		 $array['totalnumber']=$final['totalnumber'];
		 $array['time']=$final['time'];
	}
	echo JSON($array);
?>