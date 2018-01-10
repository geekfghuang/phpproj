<?php
require "link.php";
$x=$_POST["username"];
$sql="SELECT * FROM user WHERE username='$x'";
$result=$mysql->query($sql);
if($result->fetch_array()){                                       //记住一定要这么写！
	echo true;
}
else{
	echo false;
}
?>