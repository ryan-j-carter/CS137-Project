<!DOCTYPE html>
<!--
    CS 137
    Project 2
    Group 1

    products.php
-->

<?php
require_once "pdo.php";
$stmt = $pdo->query("SELECT * FROM product");

?>
<html>
    <head>
        <title>JavaSipt - Products</title>
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
             --><li><a class="active" href="products.php">Products</a></li>
            </ul>
        </div>
		<div id="firstcontent" class="products">
			<table>
			<?php
			$type = "";
			$max_cols = 4;
			$c = 1;
			echo '<tr>';
			foreach($stmt as $row) {
				$name = $row['name'];
				$image_src = $row['image_src'];
				$price = (string)$row['price'];
				$product_id = $row['product_id'];
				if ($type != ucfirst($row['type'])) {
					$type = ucfirst($row['type']);
					echo '<tr><th scope="col" colspan="4">';
					echo "$type<div class=\"hr_div\"></div>";
					echo '</th></tr>';
				}
				if ($c > $max_cols) {
					echo '</tr><tr><td>';
					echo '<a href="checkout.php?i='.$product_id.'"><img src="'.$image_src.'" alt="'.$name.'"></a>';
					echo '<figcaption>'.$name.'<br>$'.$price.'</figcaption></td>';
					$c = 2;
				}
				else {
					if ($c == 1) {
						echo '<tr>';
					}
					echo '<td>';
					echo '<a href="checkout.php?i='.$product_id.'"><img src="'.$image_src.'" alt="'.$name.'"></a>';
					echo '<figcaption>'.$name.'<br>$'.$price.'</figcaption></td>';
					$c++;
				}	
			}
			?>
			</table>
		</div>
    </body>
</html>
