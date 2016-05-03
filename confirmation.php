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
            <h1 id="title">Order Confirmation</h1>
        </div>
		<div class="products">
			<?php
			require_once "pdo.php";
			$order_id = $_GET['order_id'];
			$stmt = $pdo->query("SELECT * FROM orders WHERE order_id = $order_id");
			$row = $stmt->fetch();
			?>
			<h3>Your purchase was successful!</h3>
			<h4>Shipping Information:</h4>
			First Name: <?php echo $row['first_name']; ?><br />
			Last Name: <?php echo $row['last_name']; ?><br />
			Address: <?php echo $row['ship_address']; ?><br />
			City: <?php echo $row['ship_city']; ?><br />
			State: <?php echo $row['ship_state']; ?><br />
			Zip Code: <?php echo $row['ship_zip']; ?>br />
			Phone Number: <?php echo $row['ship_phone']; ?><br /><br />
			<h4>Billing Information:</h4>
			Address: <?php echo $row['bill_address']; ?><br />
			City: <?php echo $row['bill_city']; ?><br />
			State: <?php echo $row['bill_state']; ?><br />
			Zip Code: <?php echo $row['bill_zip']; ?><br />
			Phone Number: <?php echo $row['bill_phone']; ?><br /><br />
			<h4>Payment Method: <?php echo $row['payment_method']; ?></h4><br />
			<h4>Card Information:</h4>
			Card Number: ************<?php echo substr(strval($row['payment_method']),12; ?><br />
			Name on Card: <?php echo $row['card_name']; ?><br />
			Expiration Date: <?php echo $row['card_expiration_month']; ?> <?php echo $row['card_expiratin+year']; ?><br /><br />
			<h4>Shipping Method: <?php echo $row['ship_method']; ?></h4>
			<h3 align="center"><a href="index.html"">Return to Home</a></h3>
		</div>
    </body>
</html>
