
$(document).ready(function () {


onload = start;

function start(){
var i = 1;
function Move(){
	i = (i%4)+1;
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000);
}
// Smooth scrolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function () {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});

	// Tooltips
	$(function () {
		$('#item1').tooltip();
	});
	// Event Listener
	$('#button').on('click', function() {
		var message = "hi"
		var comment = $('.message-box').val();
			$('#visible-comment').html(comment);
			$('.message-box').hide();
			alert("Thank you.");
		return false;
	});

	
	$('.message-box').on('keyup', function() {
		console.log('keyup happened');
		var nameName = 3;
		var name = 'string';
		var charCount = $(".message-box").val().length;
			console.log(charCount);
		$('#char-count').html(charCount);

		if(charCount > 200) {
	  $('#char-count').css('color', 'red');
	  $('.message-box').css('color', 'red');
		}	else {
		$('#char-count').css('color', 'white');
		$('.message-box').css('color', 'black');
		};
	});

	
	for(var i = 0; i < works.length; ++i ) {
		$("#works").append("\
			<div class='col-xs-12 col-sm-6 col-md-4'>\
				<a href='#' class='work-img'>\
				<img class='img-responsive' src='" + works[i].pic + "'>\
				<span class='info'><p class='proj-title'>Title:</p>" + works[i].title + "</span>\
				<h2>La Gaspesie de Metis</h2>\
				</a>\
			</div>\
		");
		
		var images = $("#works img");
		if ( i % 2 === 0) {
			$(images[i]).css("border", "2px DodgerBlue");
		} else {
			$(images[i]).css("border", "2px solid salmon");
		};

		$(".work-img").mouseenter( function() {
			$(".info", this).show();
		}).mouseleave(function(){
			$(".info", this).hide();
		});		;
	

	};


});
	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

$(document).ready(function () {



// Smooth scrolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function () {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});

	// Tooltips
	$(function () {
		$('#item1').tooltip();
	});
	// Event Listener
	$('#button').on('click', function() {
		var message = "hi"
		var comment = $('.message-box').val();
			$('#visible-comment').html(comment);
			$('.message-box').hide();
			alert("Thank you.");
		return false;
	});

	
	$('.message-box').on('keyup', function() {
		console.log('keyup happened');
		var nameName = 3;
		var name = 'string';
		var charCount = $(".message-box").val().length;
			console.log(charCount);
		$('#char-count').html(charCount);

		if(charCount > 200) {
	  $('#char-count').css('color', 'red');
	  $('.message-box').css('color', 'red');
		}	else {
		$('#char-count').css('color', 'white');
		$('.message-box').css('color', 'black');
		};
	});

	
	for(var i = 0; i < works.length; ++i ) {
		$("#works").append("\
			<div class='col-xs-12 col-sm-6 col-md-4'>\
				<a href='#' class='work-img'>\
				<img class='img-responsive' src='" + works[i].pic + "'>\
				<span class='info'><p class='proj-title'>Title:</p> + works[i].title + </span>\
				<h2>La Gaspesie de Metis</h2>\
				</a>\
			</div>\
		");
		
		var images = $("#works img");
		if ( i % 2 === 0) {
			$(images[i]).css("border", "2px DodgerBlue");
		} else {
			$(images[i]).css("border", "2px solid salmon");
		};

		$("work.img").mouseenter( function() {
			$(".info", this).show();
		}).mouseleave(function(){
			$(".info", this).hide();
		});		;
	

	};


 });