
function mouseOver(){
	Submit.style.background = "#83899F";
	Submit.style.color = "white";
}

function mouseOut(){
    Submit.style.background    = "#697787";
    Submit.style.color = "white";
}

function mouseOver2(){
	See.style.background = "#83899F";
	See.style.color = "white";
}

function mouseOut2(){
    See.style.background    = "#697787";
    See.style.color = "white";
}

function mouseOver3(){
	Prnt.style.background = "#83899F";
	Prnt.style.color = "white";
}

function mouseOut3(){
    Prnt.style.background    = "#697787";
    Prnt.style.color = "white";
}

function mouseOver4(){
	Reload.style.background = "#83899F";
	Reload.style.color = "white";
}

function mouseOut4(){
    Reload.style.background    = "#697787";
    Reload.style.color = "white";
}

document.getElementById("fullname").onchange = function() {changeToCapital()}
    function changeToCapital(){
    var fname = document.getElementById("fullname");
    fname.value = fname.value.toUpperCase();
}


function personalinfo() {
	var fname = document.getElementById("fullname").value;

	alert('Thank you, ' + fname + '. Please proceed to the next section.');
}

function price() {
	var vip = document.getElementById("vip");
	vip.value = "4760";
	var patron = document.getElementById("patron");
	patron.value = "3700";
	var lowera = document.getElementById("lowera");
	lowera.value = "2640";
	var lowerb = document.getElementById("lowerb");
	lowerb.value = "2115";
	var upper = document.getElementById("upper");
	upper.value = "1590";

	var selected0ption = document.getElementById("selected0ption").value;

	var reg = document.getElementById("reg");
	reg.value = "0";
	var std = document.getElementById("std");
	std.value = "0.2";

	var disc = document.getElementById("disc").value

	var finalprice = selected0ption - (selected0ption*disc)

	alert('Your ticket price is ' + finalprice + '. Please proceed to the next section.')

}

function print() {
	alert('Check your email for your ticket. Thank you!')
}