<?php
require "link.php";
require "jsonHelper.php";
$x=$_POST['username'];
$i=0;
$array;
$sql="SELECT * FROM buy,goods WHERE buy.username='$x' AND buy.goodsid=goods.id ORDER BY buy.id DESC";
$result=$mysql->query($sql);
while($final=$result->fetch_array()){     //千万不可以while($final){},这样会死循环爆内存！！
   $array[$i]['goodsid']=$final['goodsid'];
   $array[$i]['picture']=$final['picture'];
   $i++;
}
echo JSON($array);
?>