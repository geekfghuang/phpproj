<?php
require "link.php";
require "jsonHelper.php";
$array;
$sql="SELECT * FROM goods WHERE type LIKE '%$_POST[findgoods]%'";
$result=$mysql->query($sql);
$i=0;
while($final=$result->fetch_array()){
	 $array[$i]['price']=$final['price'];
	 $array[$i]['goodsname']=$final['goodsname'];
	 $array[$i]['picture']=$final['picture'];
	 $array[$i]['description']=$final['description'];
	 $array[$i]['goodsid']=$final['id'];
	 $i++;
}
echo JSON($array);
?>