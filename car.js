$(window).on("load", function()
{
	$("#mult").on("click", function() 
	{
		var width = parseInt($("#width").val());
		var length = parseInt($("#length").val());
		
		var result = length * width;
		$("#result").text("Result: " + result);
	});
	
	$("#pow").on("click", function() 
	{
		var width = parseInt($("#width").val());
		var length = parseInt($("#length").val());
		
		var result = 1;
		for (var i = 0; i < width; i++) {
			result *= length;
		}
		$("#result").text("Result: " + result);
	});
	
	$("#homeBtn").on("click", function()
	{
		window.open("home.html", "_blank");
	});
});