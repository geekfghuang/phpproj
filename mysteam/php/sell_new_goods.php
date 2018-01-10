<?php

require "link.php";

$x=date("Y/m/d");//取当天时间,注意格式,date("Y/m/d");

$sql="INSERT INTO goods (type,goodsname,price,size,rest,had_sold,description,picture) VALUES ('$_POST[goodstype]','$_POST[goodsname]',$_POST[price],'$_POST[size]',$_POST[rest],0,'$_POST[description]','../img/$_POST[picture]')";
$result=$mysql->query($sql);

$sqlhelp="SELECT * FROM goods ORDER BY id DESC";//找最新的goodsid,注意随机应变.
$resulthelp=$mysql->query($sqlhelp);
$final=$resulthelp->fetch_array();
$y=$final['id'];

$sql2="INSERT INTO sell (username,goodsid,time,totalnumber) VALUES('$_POST[username]',$y,'$x',$_POST[rest])";
$result2=$mysql->query($sql2);
//注意int不用单引号了.

?>