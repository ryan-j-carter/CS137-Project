<?php
$cityState = array(  
"92617" => "Irvine, CA",
"92602" => "Irvine, CA",
"92603" => "Irvine, CA",
"92604" => "Irvine, CA",
"92606" => "Irvine, CA",
"92612" => "Irvine, CA",
"92614" => "Irvine, CA",
"92616" => "Irvine, CA",
"92617" => "Irvine, CA",
"92618" => "Irvine, CA",
"92619" => "Irvine, CA",
"92620" => "Irvine, CA",
"92623" => "Irvine, CA",
"92697" => "Irvine, CA",
"92626" => "Costa Mesa, CA",
"92627" => "Costa Mesa, CA",
"92628" => "Costa Mesa, CA",
"92856" => "Orange, CA",
"92857" => "Orange, CA",
"92859" => "Orange, CA",
"92862" => "Orange, CA",
"92863" => "Orange, CA",
"92864" => "Orange, CA",
"92865" => "Orange, CA",
"92866" => "Orange, CA",
"92867" => "Orange, CA",
"92868" => "Orange, CA",
"92869" => "Orange, CA",
"92801" => "Anaheim, CA",
"92802" => "Anaheim, CA",
"92803" => "Anaheim, CA",
"92804" => "Anaheim, CA",
"92805" => "Anaheim, CA",
"92806" => "Anaheim, CA",
"92807" => "Anaheim, CA",
"92808" => "Anaheim, CA",
"92809" => "Anaheim, CA",
"92812" => "Anaheim, CA",
"92814" => "Anaheim, CA",
"92815" => "Anaheim, CA",
"92816" => "Anaheim, CA",
"92817" => "Anaheim, CA",
"92825" => "Anaheim, CA",
"92850" => "Anaheim, CA",
"92899" => "Anaheim, CA");

$zip = $_GET["zip"];
   if (array_key_exists($zip, $cityState))
      print $cityState[$zip];
   else
      print " , ";
?>
