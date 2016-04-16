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
var descriptions = ["placeholder aero",
				    "placeholder enco",
					"placeholder virt",
					"placeholder bona",
					"placeholder chem",
					"placeholder hari",
					"placeholder kali",
					"placeholder v60c",
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



