$(window).on("load", function() 
{
	var currentdate = new Date(); 
					
	$(".date-time").text("תאריך" + " " + currentdate.getDate() + "." + (currentdate.getMonth()+1) + "." + currentdate.getFullYear()
	    + " " + "שעה" + " " + currentdate.getHours() + ":" + currentdate.getMinutes());
});