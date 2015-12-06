AAIM.notificationdetail = function (params) {        
	var viewModel = {
        timestamp: ko.observable(''),
		notification_title: ko.observable(''),
		notification_description: ko.observable(''),
		viewShown: function(){
			console.log(params);
			console.log('selected id = '+params.id);
			showPleaseWait();
			notifications_store.byKey(params.id).done(function(data){
				console.log(data);
                
                if(data.timestamp)
                    viewModel.timestamp(data.timestamp.substring(0,10));
				
                viewModel.notification_title(data.notification_title);
				viewModel.notification_description(data.notification_description);
                hidePleaseWait();
			});
		},
    }
    return viewModel;
};