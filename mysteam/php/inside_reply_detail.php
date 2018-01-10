<?php
require "link.php";
require "jsonHelper.php";
$array;
$i=0;
$sql="SELECT * FROM reply,comment,sell WHERE reply.goodsid=$_POST[goodsid] AND reply.reply_comment_id=comment.comment_id AND sell.goodsid=reply.goodsid";
$result=$mysql->query($sql);
while($final=$result->fetch_array()){
   $array[$i]['reply_comment_id']=$final['reply_comment_id'];
   $array[$i]['sender']=$final['sender'];
   $array[$i]['reply_time']=$final['reply_time'];
   $array[$i]['reply_text']=$final['reply_text'];
   $array[$i]['id']=$final['reply_id'];
   $array[$i]['original_commenter']=$final['commenter'];
   $array[$i]['seller']=$final['username'];
   $i++;
}
echo JSON($array);
?>