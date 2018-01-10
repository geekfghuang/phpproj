<?php
require "link.php";
session_start();

$sql="UPDATE user SET username='$_POST[username]',age=$_POST[age],email='$_POST[email]',address='$_POST[address]',phone='$_POST[phone]',headimg='../img/$_POST[headimg]' WHERE username='$_POST[current_user]'";//注意匹配语法! 注意age(int)! debug parse error!

$sql2="UPDATE buy SET username='$_POST[username]' WHERE username='$_POST[current_user]'";

$sql3="UPDATE sell SET username='$_POST[username]' WHERE username='$_POST[current_user]'";

$sql4="UPDATE reply SET sender='$_POST[username]' WHERE sender='$_POST[current_user]'";

$sql5="UPDATE hopelist SET username='$_POST[username]' WHERE username='$_POST[current_user]'";

$sql6="UPDATE comment SET commenter='$_POST[username]' WHERE commenter='$_POST[current_user]'";

$sql7="UPDATE attention SET username='$_POST[username]' WHERE username='$_POST[current_user]'";

$sql8="UPDATE buy_sell SET buyer='$_POST[username]' WHERE buyer='$_POST[current_user]'";

$sql9="UPDATE buy_sell SET seller='$_POST[username]' WHERE seller='$_POST[current_user]'";

$result=$mysql->query($sql);
$result2=$mysql->query($sql2);
$result3=$mysql->query($sql3);
$result4=$mysql->query($sql4);
$result5=$mysql->query($sql5);
$result6=$mysql->query($sql6);
$result7=$mysql->query($sql7);
$result8=$mysql->query($sql8);
$result9=$mysql->query($sql9);

$_SESSION["username"]=$_POST["username"];//及时更新SESSION值
$_SESSION["headimg"]="../img/".$_POST["headimg"];//注意匹配语法！
?>