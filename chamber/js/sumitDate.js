const date = new Date();

//Get date and time
var datetime = "Last Sync: " + date.getDate() + "/"
	+ (date.getMonth()+1)  + "/"
	+ date.getFullYear() + " || "
	+ date.getHours() + ":"
	+ date.getMinutes() + ":"
	+ date.getSeconds();
document.getElementById("submitdate").value = datetime;