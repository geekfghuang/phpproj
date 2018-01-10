<?php
require "link.php";
error_reporting(E_ALL ^ E_DEPRECATED);
$con = mysql_connect("localhost","root","");
mysql_query("SET NAMES UTF8");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("mystream", $con);
$sql="INSERT INTO user (username,password,email,headimg)
 VALUES('$_POST[username]','$_POST[password]','$_POST[email]','$_POST[headimg]')";
if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
 else{
	 echo true;
  }
mysql_close($con);

?>