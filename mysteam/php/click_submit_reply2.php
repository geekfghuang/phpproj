<?php
	require "link.php";
	
	$time=date("Y/m/d");
	
	$sql="INSERT INTO reply (goodsid,sender,reply_comment_id,reply_text,reply_time) VALUES($_POST[goodsid],'$_POST[sender]',$_POST[x],'$_POST[reply_text]','$time')";
	$result=$mysql->query($sql);
?>