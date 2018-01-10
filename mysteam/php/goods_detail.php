<?php
require "link.php";
require "jsonHelper.php";
$array;
$sql="SELECT * FROM goods WHERE id='$_POST[goodsid]'";
$result=$mysql->query($sql);
$final=$result->fetch_array();
if($final){
	$array['goodspic']=$final['picture'];
    $array['goodsname']=$final['goodsname'];
	$array['size']=$final['size'];
	$array['rest']=$final['rest'];
	$array['description']=$final['description'];
	$array['had_sold']=$final['had_sold'];
	$array['price']=$final['price'];
	$array['type']=$final['type'];
	$array['goodsid']=$final['id'];
	//评论  $array['']
}

$array['x']=strpos("basketball clothes",$array['type']);
$sql2="SELECT * FROM sell WHERE goodsid='$_POST[goodsid]'";
$result2=$mysql->query($sql2);
$final2=$result2->fetch_array();
if($final2){
    $array['sellor']=$final2['username'];
}

$sql3="SELECT * FROM user WHERE username='$array[sellor]'";
$result3=$mysql->query($sql3);
$final3=$result3->fetch_array();
if($final3){
    $array['address']=$final3['address'];
	$array['phone']=$final3['phone'];
}

echo JSON($array);
?>