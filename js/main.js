$(document).ready(function(){

//Progress bar
var div_top = $('#about').offset().top;
$(window).scroll(function(){
if($(window).scrollTop() > div_top){
$(".knob1").knob();
	$({animatedVal: 0}).animate({animatedVal: 87}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob1").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob2").knob();
	$({animatedVal: 0}).animate({animatedVal: 71}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob2").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob3").knob();
	$({animatedVal: 0}).animate({animatedVal: 45}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob3").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob4").knob();
	$({animatedVal: 0}).animate({animatedVal: 24}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob4").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});
}
});

$("#about-link").click(function(e) {
$(".knob1").knob();
	$({animatedVal: 0}).animate({animatedVal: 87}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob1").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob2").knob();
	$({animatedVal: 0}).animate({animatedVal: 71}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob2").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob3").knob();
	$({animatedVal: 0}).animate({animatedVal: 45}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob3").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});

$(".knob4").knob();
	$({animatedVal: 0}).animate({animatedVal: 24}, {
		duration: 2000,
		easing: "swing",
		step: function() {
			$(".knob4").val(Math.ceil(this.animatedVal)).trigger("change");
		}
	});
});


// Nav to select
var nav = $("#main-nav");
$("<select class='nav-select visible-xs' />").appendTo(nav);
var select = nav.find("select");

nav.find("a").each(function() {
	var el = $(this);
		$("<option />", {
		"value"		: el.attr("href"),
		"text"		: el.text()
	}).appendTo(select);
});

$("nav select").change(function() {
	window.location = $(this).find("option:selected").val();
});

$("#main-nav ul li").click(function(e) {
		$("#main-nav ul li").removeClass('active');
		$(this).addClass('active');
});

//Slick slider
$('#gallery').slick({
	dots: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});

// Custom select
$('.nav-select').selectric();

});