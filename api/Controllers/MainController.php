<?php
declare(Strict_types=1);
namespace Controllers;

include_once '../../../../libs/bl/php/clean.php';
include_once '../Infrastructure/ControllerInterface.php';
use Controller;

class MainController extends Controller
{
	public function __construct()
	{
		$this->db_connect();
	}

	public function select($data)
	{
		$sql = "SELECT documento, nombre FROM rec_human.personas WHERE documento = :id";
		$params = [
			'id' => $data->getId(),
		];
		$res = $this->conn->sql($sql, $params);
		
		if (is_array($res) && count($res) > 0) {
			return ['state' => 'OK', 'result' => $res];
		} else {
			return ['state' => 'NO', 'result' => []];
		}
	}
}
