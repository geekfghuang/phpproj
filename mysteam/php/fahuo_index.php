<?php
require "link.php";
require "jsonHelper.php";
$array;
$i=0;
$sql="SELECT * FROM buy_sell,user,goods WHERE buy_sell.seller='$_POST[username]' AND buy_sell.sell_type='wait' AND user.username=buy_sell.buyer AND goods.id=buy_sell.goodsid";
$result=$mysql->query($sql);
if($result->num_rows>0){
	while($final=$result->fetch_array()){
		$array[$i]['id']=$final['buy_sell_id'];
		$array[$i]['buyer']=$final['buyer'];
		$array[$i]['shouhuo_address']=$final['address'];
		$array[$i]['lianxi_phone']=$final['phone'];
		$array[$i]['picture']=$final['picture'];
		$array[$i]['goodsname']=$final['goodsname'];
		$array[$i]['size']=$final['size'];
		$array[$i]['price']=$final['price'];
		$i++;
	}
	echo JSON($array);
}
else{
	echo false;
}
?>