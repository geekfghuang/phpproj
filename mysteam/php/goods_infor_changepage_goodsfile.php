<?php
require "link.php";
require "jsonHelper.php";
$x=$_POST["goodsid"];
$array;
$sql="SELECT * FROM goods WHERE id='$x'";
$result=$mysql->query($sql);
if($final=$result->fetch_array()){
	$array["goodsname"]=$final["goodsname"];
	$array["price"]=$final["price"];
	$array["size"]=$final["size"];
	$array["rest"]=$final["rest"];
	$array["description"]=$final["description"];
	$array["picture"]=$final["picture"];
}
echo JSON($array);
?>