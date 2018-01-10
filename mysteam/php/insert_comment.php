<?php
require "link.php";
$time=date("Y/m/d");
$sql="INSERT INTO comment (commenter,goodsid,text,comment_time) VALUES('$_POST[commenter]',$_POST[goodsid],'$_POST[text]','$time')";
$result=$mysql->query($sql);
?>