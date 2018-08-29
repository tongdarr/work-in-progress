$(document).ready(function(){

    $(".draggable").draggable({
    	axis: "x",
        scroll: false,
    	stop: function(event, ui){
    		if($(this).offset().left > window.screen.width-300){
    			$(this).animate({
    				left: window.screen.width
    			}, 400);

    			$(this).hide('slow', function(){
    				remove();
    			});

    		}
    		else{
    			$(this).animate({
    				left: "5%"
    			}, 500);
    		}
    	}
    });

});