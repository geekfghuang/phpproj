<?php
	require "link.php";
	require "jsonHelper.php";
	$x=$_POST["search_goods"];
	//echo strpos($x,"篮球");
	$array;
	$i=0;
	
	$sql="SELECT * FROM goods WHERE goodsname LIKE '%$x%'";
	$result=$mysql->query($sql);
	
	if($result->num_rows>0){
	   while($final=$result->fetch_array()){
		  $array[$i]['goodsname']=$final['goodsname'];
		  $i++;
	   }
	   echo JSON($array);
	}
	else{
	   echo "No";
	}
?>