function valid_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}
function showPleaseWait(){
	$("#loadPanelContainer").dxLoadPanel("instance").show();
}
function hidePleaseWait(){
	$("#loadPanelContainer").dxLoadPanel("instance").hide();
}
function goMain(){
	AAIM.app.navigate("Home", { root: true });
}
function formatDate(date) {
	if(!date)
		return '';
    var d1 = Date.parse(date);
    var d = new Date(d1);
    var curr_date = d.getDate();
    if (curr_date.toString().length == 1) {
        curr_date = "0" + curr_date;
    }
    var curr_month = d.getMonth();
    curr_month++;
    if (curr_month.toString().length == 1) {
        curr_month = "0" + curr_month;
    }
    var curr_year = d.getFullYear();
    var ret = curr_month + "/" + curr_date + "/" + curr_year;
    return ret;
}