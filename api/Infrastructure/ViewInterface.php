<?php
declare(Strict_types=1);

class Interfaz
{
	public $method;
	public $controller;
	public $model;

	public function execute()
	{
		switch ($_SERVER['REQUEST_METHOD']) {
			case 'GET':
				return $this->get();
				break;
			case 'POST':
				return $this->post();
				break;
			case 'PUT':
				return $this->put();
				break;
			case 'DELETE':
				return $this->delete();
				break;
		}
	}

	public function get()
	{
		$item = json_decode($_GET['data'], true);
		$query = [];
		// if ( isset($item['op']) && $item['op'] == 'getUser' ) {
		// 	$this->model->setId($item['id']);
		// 	$query = $this->controller->select($this->model);
		// } else {
			$query = [
				'state' => 'NO',
				'result' => []
			];
		// }
		return ['message' => $query['state'], 'payload' => $query['result']];
	}

	public function post()
	{
		$item = $_POST;
		$query = [];
		// if ( isset($item['op']) && $item['op'] == 'option' ) {
		// 	$this->model->setId($item['id']);
		// 	$query = $this->controller->insert($this->model);
		// } else {
			$query = [
				'state' => 'NO',
				'result' => []
			];
		// }
		return ['message' => $query['text'], 'payload' => $query['result']];
	}

	public function put()
	{
		$item = json_decode(file_get_contents('php://input'), true);
		$query = [];
		// if ( isset($item['op']) && $item['op'] == 'option') {
		// 	$this->model->setId($item['id']);
		// 	$query = $this->controller->update($this->model);
		// } else {
			$query = [
				'state' => 'NO',
				'result' => []
			];
		// }
		return ['message' => $query['text'], 'payload' => $query['result']];
	}

	public function delete() {
		$item = json_decode(file_get_contents('PHP://input'), true);
		$query = [];
		// if ( isset($item['op']) && $item['op'] == 'option') {
		// 	$this->model->setVars($item['var']);
		// 	$query = $this->controller->delete($this->model);
		// } else {
			$query = [
				'state' => 'NO',
				'result' => []
			];
		// }
		return ['message' => $query['text'], 'payload' => $query['result']];
	}
}
