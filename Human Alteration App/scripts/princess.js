var $ = function(id) { return document.getElementById(id); };
var dc = function(tag) { return document.createElement(tag); };

//This code was taken nearly entirely by an article tutorial at: http://dev.opera.com/articles/view/creating-pseudo-3d-games-with-html-5-can-1/ all copyright belongs to Jacob Seidelin.

var map = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,0,3,0,0,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
	[1,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
	[1,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
	[1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,3,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,3,3,3,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,4,0,0,4,2,0,2,2,2,2,2,2,2,2,0,2,4,4,0,0,4,0,0,0,0,0,0,0,1],
	[1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
	[1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
	[1,0,0,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,4,0,0,0,0,0,0,0,1],
	[1,0,0,4,3,3,4,2,2,2,2,2,2,2,2,2,2,2,2,2,4,3,3,4,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var map1 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,1,1,1,0,1,2,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var map1A = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var map2 = [
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,9,4,0,4,9,4,0,4,7,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,4,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,4,0,0,0,4,0,0,0,4,4,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,4,4,4,0,4,4,4,7,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,4,4,4,0,4,4,4,0,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,9,0,0,0,9,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,9,0,0,0,9,0,4,9,4,0,4,9,4,0,4,9,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,9,4,0,4,9,4,0,4,9,4,0,4,9,4,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
];
var map2A = [
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,9,4,0,4,9,4,0,4,7,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,4,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,4,0,0,0,4,0,0,0,4,4,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,4,4,4,0,4,4,4,0,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,4,4,4,0,4,4,4,0,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,9,0,0,0,9,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,9,0,0,0,9,0,4,9,4,0,4,9,4,0,4,9,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,9,4,0,4,9,4,0,4,9,4,0,4,9,4,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
];
var map2B = [
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,9,4,0,4,9,4,0,4,7,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,4,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,4,0,0,0,4,0,0,0,4,4,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,4,4,4,0,4,4,4,0,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,4,0,4,4,4,0,4,4,4,0,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,9,0,0,0,9,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,9,0,0,0,9,0,4,9,4,0,4,9,4,0,4,9,4,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,4,9,4,0,4,9,4,0,4,9,4,0,4,9,4,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
];
var map3 = [
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	[7,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,6,6,6,9,6,6,9,6,6,6,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,6,6,6,9,6,6,9,6,6,6,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,6,6,6,9,6,6,9,6,6,6,0,4,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,5,8,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,4,4,0,4,4,4,4,4,4,4,4,4,4,5,0,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,5,8,5,5,5,5,5,5,5,5,5,5,0,0,5,5,0,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[4,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,5,0,0,0,0,0,0,0,0,5,5,5,5,0,5,5,0,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,5,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,5,5,5,5,5,5,5,0,5,5,0,5,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,5,0,5,5,0,5,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,5,0,5,0,5,5,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,5,0,5,5,5,0,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,5,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
];
var map3A = [
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
	[7,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,6,6,6,9,6,6,9,6,6,6,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,6,6,6,9,6,6,9,6,6,6,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,6,6,6,9,6,6,9,6,6,6,0,4,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,0,0,0,0,0,0,0,0,0,0,0,4,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,4,4,0,4,4,4,4,4,4,4,4,4,4,5,0,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,4],
	[4,0,5,8,5,5,5,5,5,5,5,5,5,5,0,0,5,5,0,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[4,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,0,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,5,0,0,0,0,0,0,0,0,5,5,5,5,0,5,5,0,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,5,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,5,5,5,5,5,5,5,0,5,5,0,5,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,5,0,5,5,0,5,0,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,5,0,5,0,5,5,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,5,0,5,5,5,0,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,5,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[5,0,0,0,0,0,0,0,0,0,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
	[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
];
var map4 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var itemTypes = [
	{ img : "images/drawn/sprites/orb.png", block : true },	// 0
	{ img : "images/drawn/sprites/key.png", block : true },		// 1
	{ img : "images/drawn/sprites/book.png", block : true },	// 2
];

var mapItems = [
];
var map1Items = [
	{type:0, x:8, y:6},
];
var map2Items = [
	{type:0, x:30, y:3},
];
var map3Items = [
	{type:0, x:15, y:10},
	{type:2, x:18, y:13},
];
var map4Items = [
	{type:0, x:8, y:6},
];

var princess = {
	x : 16.5,			// current x, y position
	y : 10.5,
	dir : 0,		// the direction that the princess is turning, either -1 for left or 1 for right.
	rotDeg : 0,		// the current angle of rotation 
	rot : 0,		// the current angle of rotation
	speed : 0,		// is the playing moving forward (speed = 1) or backwards (speed = -1).
	moveSpeed : 1,	// how far (in map units) does the princess move each step/update
	rotSpeed : 22.5	// how much does the princess rotate each step/update (in radians)
}

var x;

var mapWidth = 0;
var mapHeight = 0;

var miniMapScale = 8;

var screenWidth = 640;
var screenHeight = 300;

var showOverlay = true;

var stripWidth = 2;
var fov = 60 * Math.PI / 180;

var numRays = Math.ceil(screenWidth / stripWidth);
var fovHalf = fov / 2;

var viewDist = (screenWidth/2) / Math.tan((fov / 2));

var twoPI = Math.PI * 2;

var numTextures = 10;

var level = 0;

var levelEvents= {
	
};

function level1Events() {
	levelEvents = {
		falseWall: false,
	};
}

function level2Events() {
	levelEvents = {
		switch1Found: false,
		switch2Found: false,
		switch3Found: false
	};
}

function level3Events() {
	levelEvents = {
		switch1Found: false,
		switch2Found: false,
		switch3Found: false,
		switch4Found: false,
		switch5Found: false,
		switchesPressed: 0,
	};
}

function level4Events() {
	levelEvents = {
		swordRetrieved: false,
	};
}

var jimmy = 0;
var gameMode = "dialogue"; //roaming, cutscene, battle, building

function init() {

	mapWidth = map[0].length;
	mapHeight = map.length;

	bindKeys();

	initScreen();

	initSprites();

	gameCycle(); 
	renderCycle();
	//for(j=12;x.beginPath(x.stroke()),R(i),--j;R(i+1))R(i)
}

var spriteMap;
var visibleSprites = [];
var oldVisibleSprites = [];
var screenStrips = [];

function initScreen() {

	var screen = $("screen");

	for (var i=0;i<screenWidth;i+=stripWidth) {
		var strip = dc("div");
		strip.style.position = "absolute";
		strip.style.left = i + "px";
		strip.style.width = stripWidth+"px";
		strip.style.height = "0px";
		strip.style.overflow = "hidden";

		strip.style.backgroundColor = "magenta";

		var img = new Image();
		img.src = (window.opera ? "walls_19color.png" : "scripts/gamefiles/wolftextures.png");
		img.style.position = "absolute";
		img.style.left = "0px";

		strip.appendChild(img);
		strip.img = img;	// assign the image to a property on the strip element so we have easy access to the image later

		screenStrips.push(strip);
		screen.appendChild(strip);
	}

}

// bind keyboard events to game functions (movement, etc)
function bindKeys() {

	document.onkeyup = function(e) {
		e = e || window.event;
		if (gameMode == "roaming") {
			switch (e.keyCode) { // which key was pressed?

				case 38: // up, move princess forward, ie. increase speed
					if (princess.dir == 0) {
						moveUp();
						break;
					}

				case 40: // down, move princess backward, set negative speed
					if (princess.dir == 0) {
						moveDown();
						break;
					}

				case 37: // left, rotate princess left
					rotateLeft();
					break;

				case 39: // right, rotate princess right
					rotateRight();
					break;
			}
		}
	}
}

function moveUp() {
	princess.speed = 1;
	move();
	princess.speed = 0;
}
function moveDown() {
	princess.speed = -1;
	move();
	princess.speed = 0;
}
function rotateLeft() {
	princess.dir = -1;
	jimmy = -2;
}
function rotateRight() {
	princess.dir = 1;
	jimmy = -2;
}

function gameCycle() {

	if (princess.dir != 0) {
		if (jimmy < 0) {
			jimmy += .5;
			princess.rot += princess.dir * princess.rotSpeed * Math.PI / 180; // add rotation if princess is rotating (princess.dir != 0)
			cleanPI();
		}
		else {
			princess.dir = 0;
			angleSnap();
		}
	}

	document.getElementById("demo").innerHTML = "x: " + Math.floor(princess.x) + " y: " + Math.floor(princess.y) + " rot: " + princess.rot;

	setTimeout(gameCycle,2000/30); // aim for 30 FPS
}

function renderCycle() {
	clearSprites();
	castRays();
	renderSprites();
	setTimeout(renderCycle,2000/30);
}

function initSprites() {
	spriteMap = [];
	for (var y=0;y<map.length;y++) {
		spriteMap[y] = [];
	}

	var screen = $("screen");

	for (var i=0;i<mapItems.length;i++) {
		var sprite = mapItems[i];
		var itemType = itemTypes[sprite.type];
		var img = dc("img");
		img.src = itemType.img;
		img.style.display = "none";
		img.style.position = "absolute";

		sprite.visible = false;
		sprite.block = itemType.block;
		sprite.img = img;

		spriteMap[sprite.y][sprite.x] = sprite;
		screen.appendChild(img);
	}

}

function clearSprites() {
	// clear the visible sprites array but keep a copy in oldVisibleSprites for later.
	// also mark all the sprites as not visible so they can be added to visibleSprites again during raycasting.
	oldVisibleSprites = [];
	for (var i=0;i<visibleSprites.length;i++) {
		var sprite = visibleSprites[i];
		oldVisibleSprites[i] = sprite;
		sprite.visible = false;
	}
	visibleSprites = [];
}

function renderSprites() {

	for (var i=0;i<visibleSprites.length;i++) {
		var sprite = visibleSprites[i];
		var img = sprite.img;
		img.style.display = "block";

		// translate position to viewer space
		var dx = sprite.x + 0.5 - princess.x;
		var dy = sprite.y + 0.5 - princess.y;

		// distance to sprite
		var dist = Math.sqrt(dx*dx + dy*dy);

		// sprite angle relative to viewing angle
		var spriteAngle = Math.atan2(dy, dx) - princess.rot;

		// size of the sprite
		var size = viewDist / (Math.cos(spriteAngle) * dist);

		if (size <= 0) continue;

		// x-position on screen
		var x = Math.tan(spriteAngle) * viewDist;

		img.style.left = (screenWidth/2 + x - size/2) + "px";

		// y is constant since we keep all sprites at the same height and vertical position
		img.style.top = ((screenHeight-size)/2)+"px";

		var dbx = sprite.x - princess.x;
		var dby = sprite.y - princess.y;

		img.style.width = size + "px";
		img.style.height =  size + "px";

		var blockDist = dbx*dbx + dby*dby;
		img.style.zIndex = 1000000-Math.floor(blockDist*1000);
	}

	// hide the sprites that are no longer visible
	for (var i=0;i<oldVisibleSprites.length;i++) {
		var sprite = oldVisibleSprites[i];
		if (visibleSprites.indexOf(sprite) < 0) {
			sprite.visible = false;
			sprite.img.style.display = "none";
		}
	}

}

function castRays() {

	var stripIdx = 0;

	for (var i=0;i<numRays;i++) {
		// where on the screen does ray go through?
		var rayScreenPos = (-numRays/2 + i) * stripWidth;

		// the distance from the viewer to the point on the screen, simply Pythagoras.
		var rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);

		// the angle of the ray, relative to the viewing direction.
		// right triangle: a = sin(A) * c
		var rayAngle = Math.asin(rayScreenPos / rayViewDist);

		castSingleRay(
			princess.rot + rayAngle, 	// add the princesss viewing direction to get the angle in world space
			stripIdx++
		);
	}
}

function castSingleRay(rayAngle, stripIdx) {

	// first make sure the angle is between 0 and 360 degrees
	rayAngle %= twoPI;
	if (rayAngle < 0) rayAngle += twoPI;

	// moving right/left? up/down? Determined by which quadrant the angle is in.
	var right = (rayAngle > twoPI * 0.75 || rayAngle < twoPI * 0.25);
	var up = (rayAngle < 0 || rayAngle > Math.PI);

	var wallType = 0;

	// only do these once
	var angleSin = Math.sin(rayAngle);
	var angleCos = Math.cos(rayAngle);

	var dist = 0;	// the distance to the block we hit
	var xHit = 0; 	// the x and y coord of where the ray hit the block
	var yHit = 0;

	var textureX;	// the x-coord on the texture of the block, ie. what part of the texture are we going to render
	var wallX;	// the (x,y) map coords of the block
	var wallY;

	var wallIsHorizontal = false;

	// first check against the vertical map/wall lines
	// we do this by moving to the right or left edge of the block we're standing in
	// and then moving in 1 map unit steps horizontally. The amount we have to move vertically
	// is determined by the slope of the ray, which is simply defined as sin(angle) / cos(angle).

	var slope = angleSin / angleCos; 	// the slope of the straight line made by the ray
	var dXVer = right ? 1 : -1; 	// we move either 1 map unit to the left or right
	var dYVer = dXVer * slope; 	// how much to move up or down

	var x = right ? Math.ceil(princess.x) : Math.floor(princess.x);	// starting horizontal position, at one of the edges of the current map block
	var y = princess.y + (x - princess.x) * slope;			// starting vertical position. We add the small horizontal step we just made, multiplied by the slope.

	while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
		var wallX = Math.floor(x + (right ? 0 : -1));
		var wallY = Math.floor(y);
		
		if (spriteMap[wallY][wallX] && !spriteMap[wallY][wallX].visible) {
			spriteMap[wallY][wallX].visible = true;
			visibleSprites.push(spriteMap[wallY][wallX]);
		}

		// is this point inside a wall block?
		if (map[wallY][wallX] > 0) {
			var distX = x - princess.x;
			var distY = y - princess.y;
			dist = distX*distX + distY*distY;	// the distance from the princess to this point, squared.

			wallType = map[wallY][wallX]; // we'll remember the type of wall we hit for later
			textureX = y % 1;	// where exactly are we on the wall? textureX is the x coordinate on the texture that we'll use later when texturing the wall.
			if (!right) textureX = 1 - textureX; // if we're looking to the left side of the map, the texture should be reversed

			xHit = x;	// save the coordinates of the hit. We only really use these to draw the rays on minimap.
			yHit = y;
			xWallHit = wallX;
			yWallHit = wallY;

			wallIsHorizontal = true;

			break;
		}
		x += dXVer;
		y += dYVer;
	}



	// now check against horizontal lines. It's basically the same, just "turned around".
	// the only difference here is that once we hit a map block, 
	// we check if there we also found one in the earlier, vertical run. We'll know that if dist != 0.
	// If so, we only register this hit if this distance is smaller.

	var slope = angleCos / angleSin;
	var dYHor = up ? -1 : 1;
	var dXHor = dYHor * slope;
	var y = up ? Math.floor(princess.y) : Math.ceil(princess.y);
	var x = princess.x + (y - princess.y) * slope;

	while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
		var wallY = Math.floor(y + (up ? -1 : 0));
		var wallX = Math.floor(x);
		
		if (spriteMap[wallY][wallX] && !spriteMap[wallY][wallX].visible) {
			spriteMap[wallY][wallX].visible = true;
			visibleSprites.push(spriteMap[wallY][wallX]);
		}
		
		if (map[wallY][wallX] > 0) {
			var distX = x - princess.x;
			var distY = y - princess.y;
			var blockDist = distX*distX + distY*distY;
			if (!dist || blockDist < dist) {
				dist = blockDist;
				xHit = x;
				yHit = y;
				xWallHit = wallX;
				yWallHit = wallY;

				wallType = map[wallY][wallX];
				textureX = x % 1;
				if (up) textureX = 1 - textureX;
			}
			break;
		}
		x += dXHor;
		y += dYHor;
	}

	if (dist) {
		//drawRay(xHit, yHit);

		var strip = screenStrips[stripIdx];

		dist = Math.sqrt(dist);

		// use perpendicular distance to adjust for fish eye
		// distorted_dist = correct_dist / cos(relative_angle_of_ray)
		dist = dist * Math.cos(princess.rot - rayAngle);

		// now calc the position, height and width of the wall strip

		// "real" wall height in the game world is 1 unit, the distance from the princess to the screen is viewDist,
		// thus the height on the screen is equal to wall_height_real * viewDist / dist

		var height = Math.round(viewDist / dist);

		// width is the same, but we have to stretch the texture to a factor of stripWidth to make it fill the strip correctly
		var width = height * stripWidth;

		// top placement is easy since everything is centered on the x-axis, so we simply move
		// it half way down the screen and then half the wall height back up.
		var top = Math.round((screenHeight - height) / 2);

		strip.style.height = height+"px";
		strip.style.top = top+"px";

		strip.img.style.height = Math.floor(height * numTextures) + "px";
		strip.img.style.width = Math.floor(width*2) +"px";
		strip.img.style.top = -Math.floor(height * (wallType-1)) + "px";

		var texX = Math.round(textureX*width);

		if (texX > width - stripWidth)
			texX = width - stripWidth;
		
		

		strip.img.style.left = -texX + "px";
		
		var dwx = xWallHit - princess.x;
		var dwy = yWallHit - princess.y;

		var wallDist = dwx*dwx + dwy*dwy;
		strip.style.zIndex = 1000000-Math.floor(wallDist*1000);

	}

}

function drawRay(rayX, rayY) {
	var miniMapObjects = $("minimapobjects");
	var objectCtx = miniMapObjects.getContext("2d");

	objectCtx.strokeStyle = "rgba(0,100,0,0.3)";
	objectCtx.lineWidth = 0.5;
	objectCtx.beginPath();
	objectCtx.moveTo(princess.x * miniMapScale, princess.y * miniMapScale);
	objectCtx.lineTo(
		rayX * miniMapScale,
		rayY * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
}

function move() {
	var moveStep = princess.speed * princess.moveSpeed;	// princess will move this far along the current direction vector

	// make sure the angle is between 0 and 360 degrees
	//while (princess.rot < 0) princess.rot += twoPI;
	//while (princess.rot >= twoPI) princess.rot -= twoPI;

	var newX = princess.x + Math.cos(princess.rot) * moveStep;	// calculate new princess position with simple trigonometry
	var newY = princess.y + Math.sin(princess.rot) * moveStep;

	if (isBlocking(newX, newY)) {	// are we allowed to move to the new position?
		return; // no, bail out.
	}

	princess.x = newX; // set new position
	princess.y = newY;
	eventCheck();
}

function cleanPI() {
	if (princess.rot > 6) {
		princess.rot = 0;
	}
	if (-princess.rot > 6) {
		princess.rot = 0;
	}
	if (princess.rot < .0001 && princess.rot > .00000000000001) {
		princess.rot = 0;
	}
	if (-princess.rot < .0001 && -princess.rot > .00000000000001) {
		princess.rot = 0;
	}
	if (princess.rot > 3 && princess.rot < 3.2) {
		princess.rot = Math.PI;
	}
	if (-princess.rot > 3 && -princess.rot < 3.2) {
		princess.rot = -Math.PI;
	}
}

function angleSnap() {
	if (princess.rot > 0.3 && princess.rot < 1.57) {
		princess.rot = Math.PI/2;
	}
	if (princess.rot > 1.58 && princess.rot < 3.14) {
		princess.rot = Math.PI;
	}
	if (princess.rot > 3.15 && princess.rot < 4.7) {
		princess.rot = Math.PI + Math.PI/2;
	}
	if (princess.rot > 4.8 && princess.rot < 6.28) {
		princess.rot = Math.PI*2;
	}
	if (-princess.rot > 0.3 && -princess.rot < 1.57) {
		princess.rot = -Math.PI/2;
	}
	if (-princess.rot > 1.58 && -princess.rot < 3.14) {
		princess.rot = -Math.PI;
	}
	if (-princess.rot > 3.15 && -princess.rot < 4.7) {
		princess.rot = -Math.PI - Math.PI/2;
	}
	if (-princess.rot > 4.8 && -princess.rot < 6.28) {
		princess.rot = -Math.PI*2;
	}
}

function isBlocking(x,y) {

	// first make sure that we cannot move outside the boundaries of the level
	if (y < 0 || y >= mapHeight || x < 0 || x >= mapWidth)
		return true;

	// return true if the map block is not 0, ie. if there is a blocking wall.
	return (map[Math.floor(y)][Math.floor(x)] != 0); 
}

function updateMiniMap() {

	var miniMap = $("minimap");
	var miniMapObjects = $("minimapobjects");

	var objectCtx = miniMapObjects.getContext("2d");
	miniMapObjects.width = miniMapObjects.width;

	objectCtx.fillStyle = "red";
	objectCtx.fillRect(		// draw a dot at the current princess position
		princess.x * miniMapScale - 2, 
		princess.y * miniMapScale - 2,
		4, 4
	);

	objectCtx.strokeStyle = "red";
	objectCtx.beginPath();
	objectCtx.moveTo(princess.x * miniMapScale, princess.y * miniMapScale);
	objectCtx.lineTo(
		(princess.x + Math.cos(princess.rot) * 4) * miniMapScale,
		(princess.y + Math.sin(princess.rot) * 4) * miniMapScale
	);
	objectCtx.closePath();
	objectCtx.stroke();
}

function drawMiniMap() {

	// draw the topdown view minimap

	var miniMap = $("minimap");			// the actual map
	var miniMapCtr = $("minimapcontainer");		// the container div element
	var miniMapObjects = $("minimapobjects");	// the canvas used for drawing the objects on the map (princess character, etc)

	miniMap.width = mapWidth * miniMapScale;	// resize the internal canvas dimensions 
	miniMap.height = mapHeight * miniMapScale;	// of both the map canvas and the object canvas
	miniMapObjects.width = miniMap.width;
	miniMapObjects.height = miniMap.height;

	var w = (mapWidth * miniMapScale) + "px" 	// minimap CSS dimensions
	var h = (mapHeight * miniMapScale) + "px"
	miniMap.style.width = miniMapObjects.style.width = miniMapCtr.style.width = w;
	miniMap.style.height = miniMapObjects.style.height = miniMapCtr.style.height = h;

	var ctx = miniMap.getContext("2d");

	ctx.fillStyle = "white";
	ctx.fillRect(0,0,miniMap.width,miniMap.height);

	// loop through all blocks on the map
	for (var y=0;y<mapHeight;y++) {
		for (var x=0;x<mapWidth;x++) {

			var wall = map[y][x];

			if (wall > 0) { // if there is a wall block at this (x,y) ...

				ctx.fillStyle = "rgb(200,200,200)";
				ctx.fillRect(				// ... then draw a block on the minimap
					x * miniMapScale,
					y * miniMapScale,
					miniMapScale,miniMapScale
				);

			}
		}
	}

	updateMiniMap();
}

function levelSelect(n) {
	level = n;
	switch (n) {
		case 1: {
			if (data.story.vr1 == true) {
				map1Items.splice(0,1);
			}
			princess.x = 1.5;
			princess.y = 3.5;
			princess.rot = 0;
			map = map1;
			mapItems = map1Items;
			level1Events();
			clearSprites();
			init();
			document.getElementById('output').innerHTML = '';
			writeText("The kingdom of flowers has been laid to siege over the last year, but not by an army. An evil sorcerer has cursed the land with monsters and plagues, driving the once-great kingdom to near ruin. The beautiful princess Elizabeth has stolen a horse to follow a voice inside of her mind drawing her to a lonely cave near the castle town.");
			writeBig("images/drawn/vr/profile1.jpg");
			writeText("As beautiful as she is youthful, Elizabeth has been blessed with a body that could rival a fertility goddess. Though she has lived a sheltered life, she would do anything to save her subjects.");
			writeSpeech("Elizabeth", "vr", "So this is the place. In here must be the secret to ending what befouls the land...");
			writeText("Soon the rock walls give way to accursed purple stone. Though the cave's passage seems short, you must find your way to what lies inside.");
			writeTransition("princessGame", "Start your adventure");
			break;
		}
		case 2: {
			if (data.story.vr2 == true) {
				map2Items.splice(0,1);
			}
			princess.x = 13.5;
			princess.y = 18.5;
			princess.rot = 0;
			map = map2;
			mapItems = map2Items;
			level2Events();
			clearSprites();
			init();
			document.getElementById('output').innerHTML = '';
			writeText("It's been less than a week since the princess has begun her trial. Her skin glistens with sweat from a day filled with endless masturbation. She's put off meetings, etiquette lessons, and even her usual procrastination habits for the sake of pleasure. Finally, she's begun to calm down.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "...cess...");
			writeSpeech("Elizabeth", "vr", "Ah, I'm hearing their voices now. Truly, I must be mastering this curse by now.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Princess, can you hear me?");
			writeSpeech("Elizabeth", "vr", "Ah! Yes, Lord, I can hear you! Have my trials come to an end? Have I saved my people?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "What? No, it's me, the priest. Listen, I've been watching you these last few weeks, and?");
			writeSpeech("Elizabeth", "vr", "What?! No, you can't have! My... My chastity!");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Be quiet. I'm a man of God, remember? Totally chaste here. Anyways, I have a new task for you.");
			writeSpeech("Elizabeth", "vr", "A new task? But I thought I was meant to remain hear and take upon sin.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Exactly. Just harvesting the desires of the guards in the castle isn't enough. You have an entire kingdom!");
			writeSpeech("Elizabeth", "vr", "Harvesting?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Shit, ignore that. Wrong person. Anyways, you need to leave the castle, and I know just how to do it. My phanto- The divine grace of God has led me to learn a spell which can help you engage your... Self-pleasure in the public of the town's square, all without alerting anyone to your true purpose.");
			writeSpeech("Elizabeth", "vr", "I-In public? The town square? In broad daylight?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Yes. I know it is a daunting task, but-<br>Hey! Stop jilling off while I'm talking! Head to the dungeon. There's a set of hidden mechanisms that lead to a secret escape route from the castle. Once you're outside of the holy circle protecting the royal family, I'll be able to enchant you.");
			writeSpeech("Elizabeth", "vr", "Ah, yes. I understand. I shall do as you ask.");
			writeTransition("princessGame", "Begin chapter 2");
			break;
		}
		case 3: {
			if (data.story.vr3 == true) {
				map3Items.splice(0,1);
			}
			princess.x = 1.5;
			princess.y = 1.5;
			princess.rot = 0;
			map = map3;
			mapItems = map3Items;
			level3Events();
			clearSprites();
			init();
			document.getElementById('output').innerHTML = '';
			writeText("Days have passed since the princess's last foray outside of her room. The dark energies swirling within her body have seeped into her very core. At this point she is no longer the same innocent woman who began this quest to save her people. were it not for her naivete on the pleasure of sex and the insistence of the dark voice guiding her mind, she would have offered herself to one of the guards long ago.");
			writeText("The head of the royal guard knocks on the princess's door.");
			writeSpeech("Rose", "knight", "Princess? Your father's speech is in less than an hour. I know you've been distraught over the fate of the peasantry, but I must ask that you try to make yourself presentable. It will do the people good to see their virtuous princess at the king's side.");
			writeSpeech("Elizabeth", "vr", "Nngh! Yes!");
			writeText("The sounds of moaning and squirting fluids accompany her soft voice.");
			writeSpeech("Rose", "knight", "<i>Such a kind soul, she struggles with so much. Even muffled through the door, I can hear her cries of anguish as she battles the tears.</i>");
			writeText("...");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Awaken, princess. The time draws near for the next step of our plan.");
			writeSpeech("Elizabeth", "vr", "Ngh~ Can't it wait? I'm in the middle of... Maidenly things.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Remove your hands from your cunt and prepare them for work. Or are you so willing to abandon your people?");
			writeText("With a sigh, you withdraw your fingers.");
			writeSpeech("Elizabeth", "vr", "No no. Please, guide me.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "With the energy you gathered in town, I've been able to send scouts to the castle. I've found a secret passage in the castle's library leading into a dungeon where an old tome is contained.");
			writeSpeech("Elizabeth", "vr", "And I am to collect this tome? Burn it as well to quell it's dark influence?");
			writeSpeech("???", "drawn/vr/profile4.jpg", "No, you'll be casting one of the spells inside.");
			writeSpeech("Elizabeth", "vr", "That sounds legitimate.");
			writeSpeech("???", "drawn/vr/profile4.jpg", "Head to the library, find a way into the dungeon, and obtain the book. That section of the castle is empty now, so some of your intellect ought to return as well. I'll speak to you again when the task is done.");
			writeTransition("princessGame", "Enter the library");
			break;
		}
		case 4: {
			if (data.story.vr4 == true) {
				map4Items.splice(0,1);
			}
			princess.x = 1.5;
			princess.y = 3.5;
			princess.rot = 0;
			map = map4;
			mapItems = map4Items;
			level4Events();
			clearSprites();
			init();
			document.getElementById('output').innerHTML = '';
			writeTransition("princessGame", "Continue your adventure");
			break;
		}
		case 5: {
			document.getElementById('output').innerHTML = '';
			writeText("<p class = 'choiceText' onclick = 'levelComplete()'>Open your eyes</p>");
			break;
		}
	}
}

function eventCheck() {
	document.getElementById('output').innerHTML = '';
	var space = "x" + String(Math.floor(princess.x)) + "y" + String(Math.floor(princess.y));
	//alert(space);
	switch (level) {
		case 1: { //level 1
			switch (space) {
				case "x8y4": {
					if (levelEvents.falseWall == false) {
						writeSpeech("Elizabeth", "vr", "This wall isn't as filthy as the others...");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`falsewall`)'>Investigate the wall</p>");
					}
					else {
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x8y5": {
					if (data.story.vr1 == false) {
						writeText("You've collected a secret item!");
						mapItems.splice(0,1);
						init();
						data.story.vrScore += 1;
						data.story.vr1 = true;
					}
					else {
					writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x12y12": {
					writeText("<p class = 'choiceText' onclick = 'levelComplete()'>Enter the demon's lair</p>");
					break;
				}
				case "x12y13": {
					writeText("<p class = 'choiceText' onclick = 'levelComplete()'>Enter the demon's lair</p>");
					break;
				}
				default: {
					writeTransition("princessExit", "Quit the game");
					break;
				}
			}
			break;
		}
		case 2: { //level 2
			switch (space) {
				case "x13y18": {
					writeSpeech("Elizabeth", "vr", "The new dungeons, still unfinished. They're just storage cells at the moment. I believe father enjoys hiding things beneath our family's crest, behind the banners.");
						writeTransition("princessExit", "Quit the game");
					break;
				}
				case "x21y13": {
					if (levelEvents.switch1Found == false) {
						writeSpeech("Elizabeth", "vr", "Ahah! A hidden switch!");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`switch1`)'>Press the hidden switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Hmm, nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x18y3": {
					if (levelEvents.switch2Found == false) {
						writeSpeech("Elizabeth", "vr", "Ahah! A hidden switch!");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`switch2`)'>Press the hidden switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Hmm, nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x22y9": {
					if (levelEvents.switch3Found == false) {
						writeSpeech("Elizabeth", "vr", "Ahah! A hidden switch!");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`switch3`)'>Press the hidden switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Hmm, nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x26y3": {
					writeSpeech("Elizabeth", "vr", "Here we are, the hidden door into town.");
					writeText("<p class = 'choiceText' onclick = 'levelComplete()'>Exit the castle</p>");
					break;
				}
				case "x26y2": {
					writeSpeech("Elizabeth", "vr", "Here we are, the hidden door into town.");
					writeText("<p class = 'choiceText' onclick = 'levelComplete()'>Exit the castle</p>");
					break;
				}
				case "x16y6": {
					writeSpeech("Elizabeth", "vr", "These must be the old storage rooms. Quite musty. Perhaps the switch was hidden in one of them?");
					break;
				}
				case "x28y3": {
					if (data.story.vr2 == false) {
						writeText("You've collected a secret item!");
						mapItems.splice(0,1);
						init();
						data.story.vrScore += 1;
						data.story.vr2 = true;
					}
					else {
					writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				default: {
					writeTransition("princessExit", "Quit the game");
					break;
				}
			}
			break;
		}
		case 3: { //level 3
			switch (space) {
				case "x4y10": {
					if (levelEvents.switch1Found == false) {
						writeSpeech("Elizabeth", "vr", "Ahah! A hidden switch!");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`book1`)'>Press the hidden switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Hmm, nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x9y7": {
					if (levelEvents.switch2Found == false) {
						writeSpeech("Elizabeth", "vr", "Ahah! A hidden switch!");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`book2`)'>Press the hidden switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Hmm, nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x3y4": {
					if (levelEvents.switch3Found == false) {
						writeSpeech("Elizabeth", "vr", "Ahah! A hidden switch!");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`book3`)'>Press the hidden switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Hmm, nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x9y2": {
					if (levelEvents.switch4Found == false) {
						writeSpeech("Elizabeth", "vr", "Ahah! A hidden switch!");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`book4`)'>Press the hidden switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Hmm, nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x3y11": {
					if (levelEvents.switchesPressed > 2) {
						writeSpeech("Elizabeth", "vr", "This must be the door to the dungeon.");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`dungeonDoor`)'>Enter the dungeon</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "The door is locked. Three metal dials rest below the door's knob.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x3y12": {
					if (levelEvents.switchesPressed > 2) {
						writeSpeech("Elizabeth", "vr", "This must be the door to the dungeon.");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`dungeonDoor`)'>Enter the dungeon</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "The door is locked. Three metal dials rest below the door's knob.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x3y14": {
					writeSpeech("Elizabeth", "vr", "The door out of the dungeon.");
					writeText("<p class = 'choiceText' onclick = 'princessEvent(`dungeonDoor`)'>Enter the library</p>");
					break;
				}
				case "x12y21": {
					if (levelEvents.switch5Found == false) {
						writeSpeech("Elizabeth", "vr", "Another switch? I wonder what this one does.");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`book5`)'>Pull the switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x13y21": {
					if (levelEvents.switch5Found == false) {
						writeSpeech("Elizabeth", "vr", "Another switch? I wonder what this one does.");
						writeText("<p class = 'choiceText' onclick = 'princessEvent(`book5`)'>Pull the switch</p>");
					}
					else {
						writeSpeech("Elizabeth", "vr", "Nothing else here.");
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x18y14": {
					writeSpeech("Elizabeth", "vr", "This must be the tome. I feel... Icky, just looking at it.");
					writeText("<p class = 'choiceText' onclick = 'princessEvent(`dungeonBook`)'>Open the book</p>");
					break;
				}
				case "x18y13": {
					writeSpeech("Elizabeth", "vr", "This must be the tome. I feel... Icky, just looking at it.");
					writeText("<p class = 'choiceText' onclick = 'princessEvent(`dungeonBook`)'>Open the book</p>");
					break;
				}
				case "x15y11": {
					if (data.story.vr3 == false) {
						writeText("You've collected a secret item!");
						mapItems.splice(0,1);
						init();
						data.story.vrScore += 1;
						data.story.vr3 = true;
					}
					else {
						writeTransition("princessExit", "Quit the game");
					}
					break;
				}
				case "x4y2": {
					writeSpeech("Elizabeth", "vr", "A book on agriculture.");
					writeTransition("princessExit", "Quit the game");
					break;
				}
				case "x6y4": {
					writeSpeech("Elizabeth", "vr", "A book on differentiating witchcraft from astrology. It's never been opened.");
					writeTransition("princessExit", "Quit the game");
					break;
				}
				case "x7y5": {
					writeSpeech("Elizabeth", "vr", "A book on dark magic. It's a trap, whoever touches it is cursed to go to hell after death.");
					writeTransition("princessExit", "Quit the game");
					break;
				}
				case "x3y7": {
					writeSpeech("Elizabeth", "vr", "A book titled 'Proof of Ethical Consumption under Capitalism'.<br>All the pages are blank.");
					writeTransition("princessExit", "Quit the game");
					break;
				}
				case "x10y8": {
					writeSpeech("Elizabeth", "vr", "A book about how to bathe properly. <br>It certainly is lovely that our citizens bathe regularly to help fight the spread of plague.");
					writeTransition("princessExit", "Quit the game");
					break;
				}
				case "x4y8": {
					writeSpeech("Elizabeth", "vr", "A book about me! 'How I would love to take Princess Elizabeth's'... Oh my.");
					writeTransition("princessExit", "Quit the game");
					break;
				}
				case "x8y10": {
					writeSpeech("Elizabeth", "vr", "This banner is particularly lovely.");
					writeTransition("princessExit", "Quit the game");
					break;
				}
				case "x11y5": {
					writeSpeech("Elizabeth", "vr", "A book on the maintenance of pantaloons.");
					writeTransition("princessExit", "Quit the game");
					break;
				}
				default: {
					writeTransition("princessExit", "Quit the game");
					//levelComplete();
					break;
				}
			}
			break;
		}
		case 4: { //level 2
			switch (space) {
				default: {
					writeTransition("princessExit", "Go back");
					levelComplete();
					break;
				}
			}
			break;
		}
	}
}

function princessEvent(n) {
	switch(n) {
		case "falsewall":
			map = map1A;
			levelEvents.falseWall = true;
			eventCheck();
		break;
		case "switch1":
			if (levelEvents.switch2Found == false && levelEvents.switch3Found == false) {
				map = map2A;
			}
			else {
				map = map2B;
			}
			levelEvents.switch1Found = true;
			eventCheck();
		break;
		case "switch2":
			if (levelEvents.switch1Found == false && levelEvents.switch3Found == false) {
				map = map2A;
			}
			else {
				map = map2B;
			}
			levelEvents.switch2Found = true;
			eventCheck();
		break;
		case "switch3":
			if (levelEvents.switch2Found == false && levelEvents.switch1Found == false) {
				map = map2A;
			}
			else {
				map = map2B;
			}
			levelEvents.switch3Found = true;
			eventCheck();
		break;
		case "book1":
			levelEvents.switchesPressed += 1;
			if (levelEvents.switchesPressed > 4) {
				map = map3A
			}
			levelEvents.switch1Found = true;
			eventCheck();
		break;
		case "book2":
			levelEvents.switchesPressed += 1;
			if (levelEvents.switchesPressed > 4) {
				map = map3A
			}
			levelEvents.switch2Found = true;
			eventCheck();
		break;
		case "book3":
			levelEvents.switchesPressed += 1;
			if (levelEvents.switchesPressed > 4) {
				map = map3A
			}
			levelEvents.switch3Found = true;
			eventCheck();
		break;
		case "book4":
			levelEvents.switchesPressed += 1;
			if (levelEvents.switchesPressed > 4) {
				map = map3A
			}
			levelEvents.switch4Found = true;
			eventCheck();
		break;
		case "book5":
			levelEvents.switchesPressed += 1;
			if (levelEvents.switchesPressed > 4) {
				map = map3A
			}
			levelEvents.switch5Found = true;
			eventCheck();
		break;
		case "dungeonDoor":
			if (princess.y == 14.5) {
				princess.y = 11.5
			}
			else {
				princess.y = 14.5
			}
		break;
		case "dungeonBook":
			if(data.story.vr3 == true) {
				mapItems.splice(0,1);
				init();
				levelComplete();
				
			}
			else {
				mapItems.splice(1,1);
				init();
				levelComplete();
			}
		break;
	}
}

function resolve() {
	eventCheck();
	gameMode = "roaming";
}

function levelComplete() {
	gameMode = "dialogue";
	hidePrincess();
	document.getElementById('output').innerHTML = '';
	switch (level) {
		case 1:
			writeEvent("vr1");
			unlockScene("vr1");
		break;
		case 2:
			writeEvent("vr2");
			unlockScene("vr2");
		break;
		case 3:
			writeEvent("vr3");
			unlockScene("vr3");
		break;
		case 4:
			writeEvent("vr4");
			unlockScene("vr4");
		break;
		case 5:
			writeEvent("vr5");
			unlockScene("vr5");
		break;
	}
	writeTransition("princessExit", "Back to the menu");
}