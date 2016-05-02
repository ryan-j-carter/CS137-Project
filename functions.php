<!DOCTYPE html>
<?php

require_once "pdo.php";
$stmt = $pdo->query("SELECT * FROM product");

?>
<html>
<head>
</head>
<body>
	<table border="1">
		<?php
		foreach($stmt as $row) {
			echo "<tr><td>";
			echo $row['name'];
			echo "</td></tr>";
		}
		?>
	</table>
</body>
</html>
