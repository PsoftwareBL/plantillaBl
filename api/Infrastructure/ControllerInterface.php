<?php
declare(Strict_types=1);
include_once '../../../../../libs/bl/php/conn.php';

class Controller
{
	public $conn;

    public function db_connect()
	{
		$this->conn = new Conn('cartera');
    }

	public function select($data)
	{
		// $sql = "SELECT '' FROM '' WHERE '' = :id";
		// $params = [
		// 	'id' => $data->getId(),
		// ];
		// $res = $this->conn->sql($sql, $params);
		
		// if (is_array($res) && count($res) > 0) {
		// 	return ['state' => 'OK', 'result' => $res];
		// } else {
			return ['state' => 'NO', 'result' => []];
		// }
	}

	public function insert($data)
	{
		// $this->conn->begin();
		// $sql = "INSERT INTO '' () VALUES () RETURNING *";
		// $params = [
		// 	'id' => $data->getId(),
		// ];
		// $res = $this->conn->sql($sql, $params);
		
		// if (is_array($res) && count($res) > 0) {
		// 	$this->conn->commit();
		// 	return ['text' => 'OK', 'result' => $res];
		// } else {
		// 	$this->conn->rollback();
			return ['text' => 'NO', 'result' => []];
		// }
	}

	public function update($data)
	{
		// $this->conn->begin();
		// $sql = "UPDATE '' SET '' WHERE '' RETURNING *";
		// $params = [
		// 	'id' => $data->getId(),
		// ];
		// $res = $this->conn->sql($sql, $params);

		// if (is_array($res) && count($res) > 0) {
		// 	$this->conn->commit();
		// 	return ['text' => 'OK', 'result' => $res];
		// } else {
		// 	$this->conn->rollback();
			return ['text' => 'NO', 'result' => []];
		// }
	}

	public function delete($data)
	{
		// $this->conn->begin();
        // $sql = "DELETE FROM '' WHERE id = '' RETURNING *";
		// $params = [
		// 	'id' => $data->getId(),
		// ];
		// $res = $this->conn->sql($sql, $params);

		// if (is_array($res) && count($res) > 0) {
		// 	$this->conn->commit();
		// 	return ['text' => 'OK', 'result' => $res];
		// } else {
		// 	$this->conn->rollback();
			return ['text' => 'NO', 'result' => []];
		// }
	}
	
	public function __destruct()
	{
		$this->conn->close();
	}
}
