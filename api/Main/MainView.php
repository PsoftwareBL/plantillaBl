<?php
declare(Strict_types=1);
date_default_timezone_set('America/Bogota');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Access-Control-Allow-Headers: Content-Type');
header('Accept: application/json');
header('Content-Type: application/json');

include_once '../Controllers/MainController.php';
include_once '../Domain/Main.php';
include_once '../Infrastructure/ViewInterface.php';
use Domain\Main as Model;
use Controllers\MainController;

class MainView extends Interfaz
{
	public $method;
	public $controller;
	public $model;

	public function __construct()
	{
		$this->method = $_SERVER['REQUEST_METHOD'];
		$this->controller = new MainController();
		$this->model = new Model();
	}

	public function get()
	{
		$item = json_decode($_GET['data'], true);
		$query = [];
		if ( isset($item['op']) && $item['op'] == 'getUser' ) {
			$this->model->setId($item['id']);
			$query = $this->controller->select($this->model);
		} 
		return ['message' => $query['state'], 'payload' => $query['result']];
	}
}

$main = new MainView();
echo json_encode($main->execute(), JSON_PRETTY_PRINT);
