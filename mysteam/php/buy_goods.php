<?php
require "link.php";
require "jsonHelper.php";
$array;
$x=date("Y/m/d");
$sqlselect_buy="SELECT * FROM buy WHERE username='$_POST[username]' AND goodsid=$_POST[goodsid]";//查找是否已经买过
$resultselect_buy=$mysql->query($sqlselect_buy);
if($finalselect_buy=$resultselect_buy->fetch_array()){//如果用户买过，在此基础上修改    **商品不够还没讨论,语言有待完善**
	
	$array['number']=$finalselect_buy['number'];//更新buy中的内容
	$sqlupdata_buy="UPDATE buy SET number=$array[number]+1,time='$x' WHERE username='$_POST[username]' AND goodsid=$_POST[goodsid]";
	$resultupdate_buy=$mysql->query($sqlupdata_buy);
	
	$sqlselect_goods="SELECT * FROM goods WHERE id=$_POST[goodsid]";//查找到goods中的原值
	$resultselect_goods=$mysql->query($sqlselect_goods);
	$finalselect_goods=$resultselect_goods->fetch_array();
	$array['rest']=$finalselect_goods['rest'];
	$array['had_sold']=$finalselect_goods['had_sold'];
	
	$sqlupdate_goods="UPDATE goods SET rest=$array[rest]-1,had_sold=$array[had_sold]+1 WHERE id=$_POST[goodsid]";
	$resultupdate_goods=$mysql->query($sqlupdate_goods);//在goods原值基础上修改
	
	/*联系卖家，发货通知*/
	$sqllianxi_sell="SELECT * FROM sell WHERE goodsid=$_POST[goodsid]";//查找卖家
	$resultlianxi_sell=$mysql->query($sqllianxi_sell);
	$finallianxi_sell=$resultlianxi_sell->fetch_array();
	$array['seller']=$finallianxi_sell['username'];
	
	$sqlinsert_buy_sell="INSERT INTO buy_sell (buyer,seller,goodsid,sell_type) VALUES('$_POST[username]','$array[seller]',$_POST[goodsid],'wait')";
	$finalinsert_buy_sell=$mysql->query($sqlinsert_buy_sell);//将买卖关系插入数据库表buy_sell
}
else{//如果用户没有买过,数据库表中插入数据
    
	$x=date("Y/m/d");
    $insert_buy="INSERT INTO buy(username,goodsid,time,number) VALUES('$_POST[username]',$_POST[goodsid],'$x',1)";
	$resultinsert_buy=$mysql->query($insert_buy);
	
	$sqlselect_goods2="SELECT * FROM goods WHERE id=$_POST[goodsid]";//查找到goods中的原值
	$resultselect_goods2=$mysql->query($sqlselect_goods2);
	$finalselect_goods2=$resultselect_goods2->fetch_array();
	$array['rest2']=$finalselect_goods2['rest'];
	$array['had_sold2']=$finalselect_goods2['had_sold'];
	
	$sqlupdate_goods2="UPDATE goods SET rest=$array[rest2]-1,had_sold=$array[had_sold2]+1 WHERE id=$_POST[goodsid]";
	$resultupdate_goods2=$mysql->query($sqlupdate_goods2);//在goods原值基础上修改
	
	/*联系卖家，发货通知*/
	$sqllianxi_sell2="SELECT * FROM sell WHERE goodsid=$_POST[goodsid]";//查找卖家
	$resultlianxi_sell2=$mysql->query($sqllianxi_sell2);
	$finallianxi_sell2=$resultlianxi_sell2->fetch_array();
	$array['seller2']=$finallianxi_sell2['username'];
	
	$sqlinsert_buy_sell2="INSERT INTO buy_sell (buyer,seller,goodsid,sell_type) VALUES('$_POST[username]','$array[seller2]',$_POST[goodsid],'wait')";
	$finalinsert_buy_sell2=$mysql->query($sqlinsert_buy_sell2);//将买卖关系插入数据库表buy_sell
}
echo JSON($array);
?>