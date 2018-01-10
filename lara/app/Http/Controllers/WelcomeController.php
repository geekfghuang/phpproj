<?php

	namespace App\Http\Controllers;
	use Illuminate\Routing\Controller;
	use Illuminate\Container\Container;
	use App\Models\Student;

	class WelcomeController extends Controller{
		public function index(){
			$student = Student::first();
			$data = $student->getAttributes();
			$app = Container::getInstance();

			//通过服务容器实例获取服务名称为'view'的实例对象，即为视图创建工厂类实例
			$factory = $app->make('view');
			//$factory->make()创建视图实例对象，通过视图实例的with方法添加数据
			return $factory->make('welcome')->with('data',$data);
		}
	}
?>