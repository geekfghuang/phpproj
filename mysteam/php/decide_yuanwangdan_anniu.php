<?php
	require "link.php";
	$sqlsearch="SELECT * FROM hopelist WHERE goodsid=$_POST[goodsid] AND username='$_POST[username]'";//为了避免重叠问题，要事先判断是否已经添加至愿望单
	$resultsearch=$mysql->query($sqlsearch);
	$count=$resultsearch->num_rows;
	echo $count;
?>