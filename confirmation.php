<!DOCTYPE html>
<!--
    CS 137
    Project 2
    Group 1

    confirmation.php
-->

<?php
require_once "pdo.php";
?>
<html>
    <head>
        <title>Order Confirmation</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="styles.css"/>
        <link rel="SHORTCUT ICON" href="images/favicon.ico"/>
        <link rel="icon" href="images/favicon.ico" type="image/ico"/>
        <script src="scripts.js"></script>
    </head>
    <body onload="window_onload();">
    	<div id="header">
            <h1 id="title">JavaSipt</h1>
        </div>
	<div id="nav" class="nav_rel">
            <ul>
                <li><a href="index.html">Home</a></li><!-- display inline block :(
             --><li><a href="products.php">Products</a></li>
            </ul>
        </div>
	<div id="firstcontent" class="content">
		<?php
		require_once "pdo.php";
		$order_id = $_GET['order_id'];
		$stmt = $pdo->query("SELECT o.*, p.price FROM orders o INNER JOIN product p ON o.product_name=p.name WHERE o.order_id = $order_id");
		$row = $stmt->fetch();
		?>
		<h2>Order Receipt<div class="hr_div"></div></h2>
		<h4>Product Information:</h4>
		<p><?php echo $row['product_name']." - $".$row['price'];  ?></p>
		<p>Quantity: <?php echo $row['quantity'];  ?><br>
		<?php if ($row['ship_method'] == 6){
			$ship = "6-Days Ground - $3";
			$ship_price = 3;
		}
		else if ($row['ship_method'] == 2) {
			$ship = "2-Days Expedited - $6";
			$ship_price = 6;
		} 
		else {
			$ship = "Overnight - $10";
			$ship_price = 10;
		}
		$subtotal = $row['price']*$row['quantity'] + $ship_price;
		?>
		Shipping Speed: <?php echo $ship;  ?><br>
		Subtotal: $<?php echo $subtotal;  ?><br>
		Card Number: xxxxxxxxxxxx<?php echo substr($row['card_number'], 12, 4);  ?><br>
		Card Type: <?php echo $row['payment_method'];  ?></p>
		<h4>Shipping Information:</h4>
		<p>Name: <?php echo $row['first_name']." ".$row['last_name']; ?><br>
		Address: <?php echo $row['ship_address']; ?><br>
		City: <?php echo $row['ship_city']; ?><br>
		State: <?php echo $row['ship_state']; ?><br>
		Zip Code: <?php echo $row['ship_zip']; ?><br>
		Phone Number: <?php echo $row['ship_phone']; ?></p>
		<h4>Billing Information:</h4>
		<p>Address: <?php echo $row['bill_address']; ?><br>
		City: <?php echo $row['bill_city']; ?><br>
		State: <?php echo $row['bill_state']; ?><br>
		Zip Code: <?php echo $row['bill_zip']; ?><br>
		Phone Number: <?php echo $row['bill_phone']; ?></p>
	</div>
	<div style="height:50px;width:100%;"></div>
    </body>
</html>
