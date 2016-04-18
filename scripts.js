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
	load_changed() and set_checkout() update the checkout.html
	page to ensure the correct item is displayed

	query_param(field) parses the url query and returns the specified variable 'field'
 */

var images = ["images/aeropress.jpg",  "images/encore.jpg",     "images/virtuoso.jpg", 
			  "images/bonavita.jpg",   "images/chemex.jpg",     "images/hariokettle.jpg", 
			  "images/kalita.jpg",     "images/v60copper.jpg",  "images/costaricalm.jpg",
			  "images/ethiopiahb.jpg", "images/ethiopiak.jpeg", "images/guatemalaah.jpg",
			  "images/guatemalac.jpg", "images/honduraslc.jpg"];
var names = ["Aeropress", "Baratza Encore", "Baratza Virtuoso", "Bonavita Kettle", "Chemex", "Hario Kettle",
			 "Kalita Wave", "V60 - Copper", "Costa Rica La Minita", "Ethiopia Halo Bariti", "Ethiopia Kochere",
			 "Guatemala Antigua Hunapu", "Guatemala Candelaria", "Honduras Las Capucas"];
var prices = ["$25", "$130", "$230", "$75", "$45", "$35", "$25", "$45", "$14", "$14", "$17", "$15", "$17", "$15"];
var descriptions = ["The Aeropress is a unique brewing tool that utilizes pressure and total immersion of the grinds to extract the most possible flavor from the beans. Due to the fine filtration and shorter brewing time, the Aeropress results in a much less acidic cup of coffee. By using a smaller grind, it is possible to brew espresso-style coffee with this tool.",
				    "The Baratza Encore is one of the best entry level burr grinders on the market. The grinder can adjust from fine espresso all the way to coarse french press, and the conical burrs ensure a uniform grind at any level. The hopper is designed to keep beans pushing against the burrs at all times, while the burrs funnel grinds through to avoid buildup.",
					"In the mid-range of burr grinders sits the Baratza Virtuoso. With more precise burrs than the Encore, the Virtuoso offers a top level grind consistency while still being fairly low cost. The system also allows users to control the speed of the motor, letting you sacrifice some grind speed for an even better grind.",
					"The Bonavita Kettle is one of the only electric gooseneck kettles on the market that features variable temperature control. With an accuracy of 1&deg;F, this kettle allows you to keep water at the perfect temperature for any brewing method. Other features include a timer function, and the ability to maintain a temperature for as long as you need.",
					"The Chemex is generally regarded as one of the best and most well-designed brewing tools available. It utilizes a pour-over method in which the water continuously passes through coffee grinds until it reaches the tip of the filter. The result is a full extraction of what the beans have to offer while never extracting too much.",
					"If you want a stovetop gooseneck kettle, the Hario is the way to go. The handle is designed to make pouring feel natural and comfortable, while the tip of the gooseneck is just the right angle to keep water flowing smoothly at any pour speed. In it's price range, there is no alternative to the Hario.",
					"The Kalita Wave is one of the more unique pour-over tools available. Rather than funnel water to a large hole, the Kalita has three small holes in the flat base. This results in a slower extraction, and leaves the grinds immersed for a longer period of time. This will produce a much different cup than something like the V60.",
					"If any pour-over method is considered the standard, it's the V60. Used in coffee shops everywhere, the V60 can make fantastic cups of coffee from nearly any type of bean. The copper-plated body keeps the water hot as it passes through, and looks bloody gorgeous doing it.",
					"With a consistent cupping score of 92 and higher, La Manita is often nominated one of the best coffees in the world. It has undertones of dark chocolate, with hints of lemon and flowers behind it, and the aftertaste lingers fantastically.",
					"This coffee is from the brand new Halo Bariti co-op south of the Yirgacheffe region. The coffee is creamy with a sweet, blueberry flavor. While typical fruit coffees end with an earthy note, this one ends with a sweet creamy flavor. Other notes include lavendar, rose, and raspberry.",
					"Another coffee near the Yirgacheffe region, the Kochere is a light, floral bean with a tea-like aroma. Notes are reminiscent of lemon and peach tea, with some hints of oranges and melon. This is one of our lighter and more floral coffees, and makes for a great iced coffee as well as a balanced, refreshing hot cup.",
					"From the slopes of Antigua Valley comes this fresh bean grown in wonderful volcanic soils. The aromas include pear, cherries, and rum, while the flavors range from caramel and dark chocolate to apple and lime.",
					"The Candelaria co-op is another group based in Antigua, providing a slightly different take on rich Guatemalan coffee. These beans offer aromas of plum, chocolate, and blood orange. The front notes are molasses and citrus, while the sip ends with a sweet milk chocolate.",
					"The first thing you'll notice is how exceptionally smooth this coffee is. It has rich flavors of toffee, milk chocoalte, butter, and apples, and the silky body carries a brown sugar sweetness. The finish is creamy with notes of pecan and molasses."];

function load_changed() {
	var item = document.checkout_form.product;
	var index = parseInt(item.value);
	document.getElementById("co_item_img").src=images[index];
	document.getElementById("co_item_name").innerHTML = names[index];
	document.getElementById("co_item_price").innerHTML = prices[index];
	document.getElementById("co_item_desc").innerHTML = descriptions[index];
}

var query_param = function(field) {
	var href = window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i');
	var val = reg.exec(href);
	return val ? val[1] : null;
};

function set_checkout() {
	var item = document.checkout_form.product;
	var index = query_param('i');
	item.value = index;
	load_changed();
}

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

function form_reset() {
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

function has_num(n) {
	return n.match(/\d+/g) != null;
}

function mail_order_body() {
	var frm = document.checkout_form;
	var item_name = document.getElementById("co_item_name").innerHTML;
	var item_price = document.getElementById("co_item_price").innerHTML;
	var subtotal = "$" + (parseInt(item_price.replace(/[^0-9]+/g,"")) * parseInt(frm.quantity.value) + parseInt(frm.shipping_method.value)).toString() + ".00";

	var ebody = "Order Receipt\n" 
	+			"---------------------------------------\n"
	+			item_name + " - " + item_price
	+ 			"\nQuantity: " + frm.quantity.value
	+			"\nShipping Speed: " + frm.shipping_method.options[frm.shipping_method.selectedIndex].text
	+ 			"\nSubtotal: " + subtotal + "\n"
	+			"Card Number: xxxxxxxxxxxx" + frm.cardnumber.value.substring(12,16) 
	+			"\n\nBilling Information: \n"
	+			frm.fname.value + " " + frm.lname.value + "\n"
	+			frm.addr.value + "\n"
	+			frm.city.value + ", " + frm.state.value + " " + frm.zip.value + "\n\n"
	+			"Shipping Address: \n"
	+			frm.addr_s.value + "\n"
	+			frm.city_s.value + ", " + frm.state_s.value + " " + frm.zip_s.value
	+			"\n\nThank you for your order!\n\n";

	window.location.href = "mailto:email@address.com?body=" + encodeURIComponent(ebody);
}

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
	mail_order_body();

	return true;
}



