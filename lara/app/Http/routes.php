<?php  //路由文件

	$app['router']->get('/',function(){
		return '<h1>路由成功哈哈！！！</h1>';
	});

	$app['router']->get('/welcome','App\Http\Controllers\WelcomeController@index');
	
?>