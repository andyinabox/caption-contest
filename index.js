var $ = require('jquery-browserify');

var IMAGE_COUNT = 18;
var imageNum = Math.floor(Math.random() * IMAGE_COUNT);
var imagePath = 'images/'+imageNum+'.jpg';

$(function() {
	var $img = $('img');
	$img.attr('src', imagePath);
	$('input').val(window.location + imagePath);
});