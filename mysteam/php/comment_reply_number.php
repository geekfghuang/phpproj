<?php
require "link.php";
$sql="SELECT * FROM comment WHERE goodsid=$_POST[goodsid]";
$result=$mysql->query($sql);
echo $result->num_rows;
?>