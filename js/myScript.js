$(function(){
	var output = $("#out");
	
	$("#add").click(function(){
		$("<input class=\"input\" type=\"number\"><br>")
		.val(0)
		.appendTo($("ul"));
	})
	
	$("#calc").click(function(){
		var expenses = 0;
		
		$(".input[type=number]")
		.each(function(index,elem){
			var jElem = $(elem);
			var value;
			
			try{
				value = parseInt(jElem.val());
				if (isNaN(value)){
					console.log("isNaN");
					value = 0;
				}
			}catch(e){
				value = 0;
			}
			
			expenses += value;
		});
		
		output.text(expenses);
	})
}
)