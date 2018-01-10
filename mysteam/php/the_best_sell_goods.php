<?php
require "link.php";
require "jsonHelper.php";
$array;
$sql="SELECT * FROM goods ORDER BY had_sold DESC";
$result=$mysql->query($sql);
$i=0;
while($final=$result->fetch_array()){
	 $array[$i]['price']=$final['price'];
	 $array[$i]['goodsname']=$final['goodsname'];
	 $array[$i]['picture']=$final['picture'];
	 $array[$i]['description']=$final['description'];
	 $array[$i]['goodsid']=$final['id'];
	 $array[$i]['had_sold']=$final['had_sold'];
	 $i++;
	 if($i==4){
	    break;
	 }
}
echo JSON($array);
?>