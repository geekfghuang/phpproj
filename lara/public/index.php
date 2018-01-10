<?php  //服务器端程序入口文件

	use Illuminate\Database\Capsule\Manager;
	use Illuminate\Support\Fluent;

	//调用自动加载文件，添加自动加载文件函数
	require __DIR__.'/../vendor/autoload.php';

	//实例化服务容器，注册事件、路由服务提供者  
	$app = new Illuminate\Container\Container;
	//将服务容器添加为静态属性，可以在任何位置获取服务容器的实例
	Illuminate\Container\Container::setInstance($app);
	with(new Illuminate\Events\EventServiceProvider($app))->register();  
	with(new Illuminate\Routing\RoutingServiceProvider($app))->register();  
	
	//启动Eloquent ORM模块并进行相关配置
	$manager=new Manager();
	$manager->addConnection(require '../config/database.php');
	$manager->bootEloquent();

	//将服务名称'config'与Illuminate\Support\Fluent的实例绑定在一起
	//该类的实例主要用于存储视图模块的配置信息
	$app->instance('config',new Fluent());
	$app['config']['view.compiled']="C:\\wamp\\www\\lara\\storage\\framework\\views\\";
	$app['config']['view.paths']=["C:\\wamp\\www\\lara\\resources\\views\\"];
	//视图服务注册
	with(new Illuminate\View\ViewServiceProvider($app))->register();
	with(new Illuminate\Filesystem\FilesystemServiceProvider($app))->register();

	//加载路由
	require __DIR__.'/../app/Http/routes.php'; 

	//实例化请求并分发处理请求 
	$request = Illuminate\Http\Request::createFromGlobals();  
	$response = $app['router']->dispatch($request);

	//返回请求响应
	$response->send();
?>