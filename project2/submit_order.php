<?php

require_once "pdo.php";
error_reporting(E_ALL);
ini_set('display_errors', 1);

error_log(var_dump($_POST));

$statement = $pdo->prepare("
	INSERT INTO orders
	(	
		product_name,
		quantity,
		first_name,
		last_name,
		ship_address,
		ship_city,
		ship_state,
		ship_zip,
		ship_phone,
		bill_address,
		bill_city,
		bill_state,
		bill_zip,
		bill_phone,
		payment_method,
		card_number,
		card_name,
		card_expiration_month,
		card_expiration_year,
		card_security,
		ship_method,
		order_id
	)
	VALUES	
	(	
		:product_name,
		:quantity,
		:first_name,
		:last_name,
		:ship_address,
		:ship_city,
		:ship_state,
		:ship_zip,
		:ship_phone,
		:bill_address,
		:bill_city,
		:bill_state,
		:bill_zip,
		:bill_phone,
		:payment_method,
		:card_number,
		:card_name,
		:card_expiration_month,
		:card_expiration_year,
		:card_security,
		:ship_method,
		:order_id
	)
");

$statement->bindParam(':product_name', $product_name);
$statement->bindParam(':first_name', $first_name);
$statement->bindParam(':last_name', $last_name);
$statement->bindParam(':quantity', $quantity);
$statement->bindParam(':ship_address', $ship_address);
$statement->bindParam(':ship_city', $ship_city);
$statement->bindParam(':ship_state', $ship_state);
$statement->bindParam(':ship_zip', $ship_zip);
$statement->bindParam(':ship_phone', $ship_phone);
$statement->bindParam(':bill_address', $bill_address);
$statement->bindParam(':bill_city', $bill_city);
$statement->bindParam(':bill_state', $bill_state);
$statement->bindParam(':bill_zip', $bill_zip);
$statement->bindParam(':bill_phone', $bill_phone);
$statement->bindParam(':payment_method', $payment_method);
$statement->bindParam(':card_number', $card_number);
$statement->bindParam(':card_name', $card_name);
$statement->bindParam(':card_expiration_month', $card_expiration_month);
$statement->bindParam(':card_expiration_year', $card_expiration_year);
$statement->bindParam(':card_security', $card_security);
$statement->bindParam(':ship_method', $ship_method);
$statement->bindParam(':order_id', $order_id);

$product_name = $_POST["product_name"];
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$quantity = $_POST["quantity"];
$ship_address = $_POST["ship_address"];
$ship_city = $_POST["ship_city"];
$ship_state = $_POST["ship_state"];
$ship_zip = $_POST["ship_zip"];
$ship_phone = $_POST["ship_phone"];
$bill_address = $_POST["bill_address"];
$bill_city = $_POST["bill_city"];
$bill_state = $_POST["bill_state"];
$bill_zip = $_POST["bill_zip"];
$bill_phone = $_POST["bill_phone"];
$payment_method = $_POST["payment_method"];
$card_number = $_POST["card_number"];
$card_name = $_POST["card_name"];
$card_expiration_month = $_POST["card_expiration_month"];
$card_expiration_year = $_POST["card_expiration_year"];
$card_security = $_POST["card_security"];
$ship_method = $_POST["ship_method"];
$order_id = $_POST["order_id"];

$statement->execute();

?>
