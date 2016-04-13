/* 
    CS 137
    Project 1
    Group 1

    scripts.js
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
 		document.getElementById("overview").style.marginTop=m+h+"px";
 	}
 	else if (bottom>0&&nav.className==="nav_fixed") {
 		document.getElementById("nav").className="nav_rel";
 		document.getElementById("overview").style.marginTop=m+"px";
 		
 	}
 }




