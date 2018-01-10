<?php
require "link.php";
require "jsonHelper.php";
$x=$_POST['username'];
$array;
$sql="SELECT * FROM user WHERE username='$x'";
$result=$mysql->query($sql);
$final=$result->fetch_array();
if($final){
   $array['headimg']=$final['headimg'];
   $array['username']=$final['username'];
   $array['email']=$final['email'];
   $array['address']=$final['address'];
   $array['phone']=$final['phone'];
   $array['age']=$final['age'];
}
echo JSON($array);
?>