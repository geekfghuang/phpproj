<?php
session_start();
require "link.php";
$x=$_POST["username"];
$y=$_POST["password"];
$sql="SELECT * FROM user WHERE username='$x' AND password='$y'";
$result=$mysql->query($sql);
if($final=$result->fetch_array()){
	$_SESSION["username"]=$final["username"];
	$_SESSION["headimg"]=$final["headimg"];
	echo true;
}
else{
    echo false;
}
?>