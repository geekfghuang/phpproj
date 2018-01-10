<?php
session_start();
require "jsonHelper.php";
$array;  
if(isset($_SESSION["username"])&&isset($_SESSION["headimg"])){
    $array["username"]=$_SESSION["username"];//键值对
    $array["headimg"]=$_SESSION["headimg"];//键值对
    echo JSON($array);
}
else{
	echo false;
}
?>