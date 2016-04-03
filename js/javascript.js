$(document).ready(function(){

	$(".feature").on("click", function(e) {

		var target = $(e.target);
		var src = target.attr("src");

		$(".lightbox").attr("src");

		$(".lightbox img").attr("src", src);


	});

});