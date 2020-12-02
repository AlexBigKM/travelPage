$(function() {
	$(".arrow").click(function() {
	    var elementClick = $(this).attr("href")
	    var destination = $(elementClick).offset().top;
	    jQuery("html:not(:animated),body:not(:animated)").animate({
	      scrollTop: destination
	    }, 800);
	    return false;
	});
	$('.call-btn').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

 	$('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
  $(".btn-routes").click(function(e){
  	e.preventDefault();
  	$('.destinations-more').addClass('destinations-visible');
  });

  $(".phone").hover(function() {
    $(".phone").animate({width:"60px", height:"60px"}, 900);
    },
    function(){
     $(".phone").animate({width:"39px", height:"39px"}, 1400);
});
});