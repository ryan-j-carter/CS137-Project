<?php

require_once "pdo.php";

$i = $_GET['q'];

$stmt = $pdo->query("SELECT * FROM product WHERE product_id = $i");
$row = $stmt->fetch();

echo $row['image_src'];
echo ";";
echo $row['name'];
echo ";";
echo $row['price'];
echo ";";
echo $row['description'];


?>
