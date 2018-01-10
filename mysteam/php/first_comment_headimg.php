<?php
require "link.php";
$sql="SELECT * FROM user WHERE username='$_POST[username]'";
$result=$mysql->query($sql);
$final=$result->fetch_array();
echo $final['headimg'];
?>