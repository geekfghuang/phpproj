<?php
    require "link.php";
	$sqlsearch="SELECT * FROM attention WHERE goodsid=$_POST[goodsid] AND username='$_POST[username]'";//为了避免重叠问题，要事先判断是否已经关注
	$resultsearch=$mysql->query($sqlsearch);
	echo $resultsearch->num_rows;
?>