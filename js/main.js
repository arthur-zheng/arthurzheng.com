$(document).ready(function(){
	
	// click events for menu
	$(".menu__list h5").click(function(){
		//slide up all the link lists
		$(this).closest("li").find("ul").slideUp();
		//slide down the link list below the h3 clicked - only if its closed
		if(!$(this).next().is(":visible")){
			$(this).next().slideDown();
		}
	})
	
	
})