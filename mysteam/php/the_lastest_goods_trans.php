<?php
require "link.php";
require "jsonHelper.php";
$array;
$sql="SELECT * FROM goods,sell WHERE goods.id=sell.goodsid ORDER BY goods.id DESC";//降序排序
$result=$mysql->query($sql);
$i=0;
while($final=$result->fetch_array()){
	 $array[$i]['price']=$final['price'];
	 $array[$i]['goodsname']=$final['goodsname'];
	 $array[$i]['picture']=$final['picture'];
	 $array[$i]['description']=$final['description'];
	 $array[$i]['goodsid']=$final['goodsid'];
	 $array[$i]['time']=$final['time'];
	 $i++;
	 if($i==4){
		break;
     }
}
echo JSON($array);
?>