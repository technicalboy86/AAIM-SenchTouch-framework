AAIM.emerbroadcast = function (params) {        
	var viewModel = {
		goMeeting: function(){
            console.log("****************** ********************");
    		showPleaseWait();
            var company_id = localStorage.getItem("company_id");
            console.log("company_id ===== "+company_id);
    		$.ajax({
		        url: API_LIVEMEETING,
		        type: 'POST',
                data: {company_id: company_id},
		        success: function(meeting_url) {
                    console.log('got meeting_url ' + meeting_url);
		        	hidePleaseWait();
		        	console.log(meeting_url);
		        	if(meeting_url == ''){
		        		DevExpress.ui.dialog.alert("NO LIVE meetings at this time.", 'Notification');
		        		return;
		        	}
		        	window.open(meeting_url, '_blank', 'location=yes, enableViewportScale=no');
				}
			});
			
		}
    }
    return viewModel;
};