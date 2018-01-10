<?php
require "link.php";
require "jsonHelper.php";
$array;
$i=0;
$sql="SELECT * FROM hopelist,goods WHERE hopelist.username='$_POST[username]' AND hopelist.goodsid=goods.id ORDER BY hopelist.id DESC";
$result=$mysql->query($sql);
while($final=$result->fetch_array()){
	$array[$i]['goodsname']=$final['goodsname'];
	$array[$i]['picture']=$final['picture'];
	$array[$i]['description']=$final['description'];
	$array[$i]['price']=$final['price'];
	$array[$i]['goodsid']=$final['goodsid'];
	$array[$i]['time']=$final['time'];
	$array[$i]['size']=$final['size'];
	$i++;
}
echo JSON($array);
?>