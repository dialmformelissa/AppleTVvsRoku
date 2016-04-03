$(document).ready(function(){

	// $(".feature").on("click", function(e) {

	// 	var target = $(e.target);
	// 	var src = target.attr("src");

	// 	$(".lightbox").attr("src");

	// 	$(".lightbox img").attr("src", src);


	// });

	$('input').change(function(){
        var Roku = $('.Roku:checked').length
        var Apple = $('.Apple:checked').length 
        $('.Roku_results').text(yes)
        $('.Apple_results').text(no)                        
    })

});