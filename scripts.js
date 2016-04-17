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



