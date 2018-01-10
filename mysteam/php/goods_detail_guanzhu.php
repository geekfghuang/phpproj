<?php
	require "link.php";
	$x=date("Y/m/d");
	$sql="INSERT INTO attention (username,goodsid,time) VALUES ('$_POST[username]',$_POST[goodsid],'$x')";
	$result=$mysql->query($sql);
?>