<?php
require "link.php";
require "jsonHelper.php";
$array;
$i=0;
$sql="SELECT * FROM comment,user,sell WHERE comment.goodsid=$_POST[goodsid] AND sell.goodsid=comment.goodsid AND comment.commenter=user.username ORDER BY comment.comment_id DESC";
$result=$mysql->query($sql);
while($final=$result->fetch_array()){
	$array[$i]['commenter']=$final['commenter'];
	$array[$i]['commenter_headimg']=$final['headimg'];
	$array[$i]['text']=$final['text'];
	$array[$i]['comment_id']=$final['comment_id'];
	$array[$i]['time']=$final['comment_time'];
	$array[$i]['user']=$final['username'];
	$i++;
}
echo JSON($array);
?>