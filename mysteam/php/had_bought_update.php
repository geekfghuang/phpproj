<?php
require "link.php";
$sql="UPDATE buy_sell SET sell_type='get' WHERE buy_sell_id=$_POST[id]";
$result=$mysql->query($sql);
?>