<?php
require "link.php";

$x=$_POST['x'];              /*取reply_comment_id*/
$y=explode("x",$x)[1];
$z=explode("m",$y)[0];

$time=date("Y/m/d");
$sql="INSERT INTO reply (goodsid,sender,reply_comment_id,reply_text,reply_time) VALUES($_POST[goodsid],'$_POST[sender]',$z,'$_POST[reply_text]','$time')";
$result=$mysql->query($sql);


?>