/* 
    CS 137
    Project 1
    Group 1

    scripts.js
 */


 /*
	window_onload() and navbar_reset_top()
	Check the navbar position on scroll,
	if it would leave the screen, lock it to 
	the top of the window.
 */
 function window_onload() {
 	window.addEventListener("scroll", navbar_reset_top, false);
 }

 var m=50; //Must be equal to margin-top for overview.

 function navbar_reset_top() {
 	var headerOffset=header.getBoundingClientRect();
 	var bottom=headerOffset.bottom;
 	var navOffset=nav.getBoundingClientRect();
 	var h=navOffset.height;

 	if(bottom<=0&&nav.className==="nav_rel") {
 		document.getElementById("nav").className="nav_fixed";
 		document.getElementById("firstcontent").style.marginTop=m+h+"px";
 	}
 	else if (bottom>0&&nav.className==="nav_fixed") {
 		document.getElementById("nav").className="nav_rel";
 		document.getElementById("firstcontent").style.marginTop=m+"px";
 		
 	}
 }

 /*
	load_changed() and set_checkout() 
	Update the checkout.html page to ensure the correct item is displayed

	query_param(field) parses the url query and returns the specified variable 'field'
 */

function load_changed(prod_id) {
	var qstring = "?q=" + prod_id;

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var result = xhttp.responseText;
			var fields = result.split(";");
			document.getElementById("co_item_img").src=fields[0];
			document.getElementById("co_item_name").innerHTML = fields[1];
			document.getElementById("co_item_price").innerHTML = "$" + fields[2];
			document.getElementById("co_item_desc").innerHTML = fields[3];
		}
	};

	xhttp.open("GET", "get_product.php" + qstring, true);
	xhttp.send();
}

var query_param = function(field) {
	var href = window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i');
	var val = reg.exec(href);
	return val ? val[1] : "0";
};

function set_checkout() {
	var item = document.checkout_form.product;
	var index = query_param('i');
	item.value = index;
}

/*
	set_shipping()
	When checkbox is checked, set shipping address equal to billing address
	When checkbox is unchecked, clear shipping address
*/

function set_shipping() {
	var frm = document.checkout_form;
	if (frm.sameship.checked) {
		frm.addr.value = frm.addr_s.value;
		frm.city.value = frm.city_s.value;
		frm.state.value = frm.state_s.value;
		frm.zip.value = frm.zip_s.value;
		frm.pnumber.value = frm.pnumber_s.value;
	}
	else {
		frm.addr.value = "";
		frm.city.value = "";
		frm.state.value = "";
		frm.zip.value = "";
		frm.pnumber.value = "";
	}
}

/*
	form_reset()
	Resets each field in the form.
*/

function form_reset() {
	//Tried using a for loop with a switch, but trying to use elements[index] threw an error.
	var frm = document.checkout_form;
	frm.quantity.value = "1";

	frm.fname.value = frm.fname.defaultValue;
	frm.lname.value = frm.lname.defaultValue;

	frm.addr.value = frm.addr.defaultValue;
	frm.state.value = frm.state.defaultValue;
	frm.city.value = frm.city.defaultValue;
	frm.zip.value = frm.zip.defaultValue;
	frm.pnumber.value = frm.pnumber.defaultValue;

	frm.sameship.checked = false;

	frm.addr_s.value = frm.addr_s.defaultValue;
	frm.state_s.value = frm.state_s.defaultValue;
	frm.city_s.value = frm.city_s.defaultValue;
	frm.zip_s.value = frm.zip_s.defaultValue;
	frm.pnumber_s.value = frm.pnumber_s.defaultValue;

	document.getElementById("def_payment").checked = true;

	frm.cardnumber.value = frm.cardnumber.defaultValue;
	frm.nameoncard.value = frm.nameoncard.defaultValue;
	frm.month.value = "0";
	frm.year.value = "0";
	frm.securitycode.value = frm.securitycode.defaultValue;

	document.getElementById("def_shipping").checked = true;
}

/*
	mail_order_body()
	Pulls necessary values from the form and creates a formatted order receipt in the body of an email.
*/

function has_num(n) {
	return n.match(/\d+/g) != null;
}

function submit_order() {
	var frm = document.checkout_form;
	var xhttp = new XMLHttpRequest();
	var item_name = document.getElementById("co_item_name").innerHTML;

	var order_num = Math.floor(Math.random() * 1000000000);
	
	xhttp.onreadystatechange = function() {
		if(xhttp.readyState == 4 && xhttp.status == 200){
			alert("Submission Complete.");
			// opens confirmation page with randomly generated order number
			window.location = "confirmation.php?order_id=" + order_num;
		}
	}

	xhttp.open("POST", "submit_order.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("first_name="+frm.fname.value+"&last_name="+frm.lname.value+
			"&product_name="+item_name+
			"&quantity="+frm.quantity.value+
			"&ship_address="+frm.addr_s.value+
			"&ship_city="+frm.city_s.value+
			"&ship_state="+frm.state_s.value+
			"&ship_zip="+frm.zip_s.value+
			"&ship_phone="+frm.pnumber_s.value+	
			"&bill_address="+frm.addr.value+
			"&bill_city="+frm.city.value+
			"&bill_state="+frm.state.value+
			"&bill_zip="+frm.zip.value+
			"&bill_phone="+frm.pnumber.value+
			"&payment_method="+frm.payment.value+
			"&card_number="+frm.cardnumber.value+
			"&card_name="+frm.nameoncard.value+
			"&card_expiration_month="+frm.month.value+
			"&card_expiration_year="+frm.year.value+
			"&card_security="+frm.securitycode.value+
			"&ship_method="+frm.shipping_method.value+
			"&order_id="+order_num
		);
}

/*
	form_validate()
	Makes sure every field contains some value.
	Ensures certain fields are only numeric or only alphabetic.
*/

function form_validate() {
	var messages = [];
	var frm = document.checkout_form;
	if (frm.fname.value === "") {messages.push("Enter your first name.");}
	if (frm.lname.value === "") {messages.push("Enter your last name.");}
	if (frm.addr.value === "") {messages.push("Enter an address in Billing.");}
	if (frm.city.value === "") {messages.push("Enter a city in Billing.");}

	if (frm.state.value.length < 2 || has_num(frm.state.value)) {
		messages.push("Enter a valid state in Billing.");
	}
	if (frm.zip.value.length < 5 || isNaN(frm.zip.value)) {
		messages.push("Enter a valid zip code in Billing.");
	}
	if (frm.pnumber.value.length < 10 || isNaN(frm.pnumber.value)) {
		messages.push("Enter a valid phone number in Billing.");
	}

	if (frm.addr_s.value === "") {messages.push("Enter an address in Shipping.");}
	if (frm.city_s.value === "") {messages.push("Enter a city in Shipping.");}

	if (frm.state_s.value.length < 2 || has_num(frm.state_s.value)) {
		messages.push("Enter a valid state in Shipping.");
	}
	if (frm.zip_s.value.length < 5 || isNaN(frm.zip_s.value)) {
		messages.push("Enter a valid zip code in Shipping.");
	}
	if (frm.pnumber_s.value.length < 10 || isNaN(frm.pnumber_s.value)) {
		messages.push("Enter a valid phone number in Shipping.");
	}

	if (frm.cardnumber.value.length < 16 || isNaN(frm.cardnumber.value)) {
		messages.push("Enter a valid card number.");
	}
	if (frm.nameoncard.value === "") {messages.push("Enter a card number.");}

	if (frm.month.value === "0") {
		messages.push("Select a month.");
	}
	if (frm.year.value === "0") {
		messages.push("Select a year.");
	}
	if (frm.securitycode.value.length < 3 || isNaN(frm.securitycode.value)) {
		messages.push("Enter a valid security code.");
	}
	if (messages.length > 0) {
		if (messages.length > 5) {alert("Please fill out the form.");}
		else {alert(messages.join('\n'));}
		return false;
	}
	
	submit_order();

	return true;
}

function getPlace(zip) {
	var xhr = new XMLHttpRequest;
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) 
		{
		var result = xhr.responseText;
      		var place = result.split (', ');
      		if (document.getElementById ("city_s").value == "")
        		document.getElementById ("city_s").value = place[0];
      		if (document.getElementById ("state_s").value == "")
        		document.getElementById ("state_s").value = place[1]; 
		}
	}
	xhr.open("GET", "getCityState.php?zip=" + zip, true);
	xhr.send();
}
