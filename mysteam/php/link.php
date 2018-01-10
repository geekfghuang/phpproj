<?php
$mysql = new mysqli("localhost", "root","","mysteam");
if(mysqli_connect_errno()){
    die("Unable to connect!").mysqli_connect_error();
}
$mysql->set_charset("utf8");
?>