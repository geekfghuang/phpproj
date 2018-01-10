<?php
require "link.php";
require "jsonHelper.php";
$array;
$i=0;
$sql="SELECT * FROM attention,goods WHERE attention.username='$_POST[username]' AND attention.goodsid=goods.id ORDER BY attention.id DESC";
$result=$mysql->query($sql);
while($final=$result->fetch_array()){
    $array[$i]['goodsname']=$final['goodsname'];
	$array[$i]['picture']=$final['picture'];
	$array[$i]['description']=$final['description'];
	$array[$i]['time']=$final['time'];
	$array[$i]['price']=$final['price'];
	$array[$i]['goodsid']=$final['goodsid'];
	$i++;
}
echo JSON($array);
?>