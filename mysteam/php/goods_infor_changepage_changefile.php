<?php
require "link.php";
$sql="UPDATE goods SET goodsname='$_POST[goodsname]',size='$_POST[size]',price=$_POST[price],rest=$_POST[rest],description='$_POST[description]',picture='../img/$_POST[goodspicture]' WHERE id=$_POST[goodsid]";//int 不需要单引号！
$result=$mysql->query($sql);
?>