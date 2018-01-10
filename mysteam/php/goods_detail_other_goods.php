<?php
require "link.php";
require "jsonHelper.php";
$array;
$i=0;
$ID=$_POST['current_id'];
$sql="SELECT * FROM goods,sell WHERE goods.id=sell.goodsid AND sell.username='$_POST[sellor]' ";
$result=$mysql->query($sql);
if($result_num=$result->num_rows>0){
	while($final=$result->fetch_array()){
		if($ID!=$final['goodsid']){   //避免与当前商品重复
			$array[$i]['picture']=$final['picture'];
			$array[$i]['goodsid']=$final['goodsid'];
			$i++;
			if($i==5){
			   break;
			}
		}
	}
}

$x=$_POST['current_type'];

$y=(explode(" ",$x)[1]);//expolde将字符串变成数组,分隔标志为" ",数组元素从0开始

$z=$i;
$sql2="SELECT * FROM goods WHERE type LIKE '%$y%' ";
$result2=$mysql->query($sql2);
while($final2=$result2->fetch_array()){
	if($ID!=$final2['id']){
		 $array[$z]['picture']=$final2['picture'];
		 $array[$z]['goodsid']=$final2['id'];
		 $z++;
		 if($z==$i+2){
			 break;	 
		 }
	}
}

echo JSON($array);

?>