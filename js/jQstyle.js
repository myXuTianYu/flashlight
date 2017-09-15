$(".ps").click(function(){
	$(this).css({width:"34.8%"});
	$(this).children(".text").removeClass("none");
	$(this).siblings().css({width:"6.7%"});
	$(this).siblings().children(".text").addClass("none");
})
