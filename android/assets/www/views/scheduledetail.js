AAIM.scheduledetail = function (params) {        
	var viewModel = {
        event_name: ko.observable(''),
        event_location: ko.observable(''),
        event_date: ko.observable(''),
        event_time: ko.observable(''),
        event_detail: ko.observable(''),

		viewShown: function(){
			console.log(params);
			console.log('selected id = '+params.id);
			showPleaseWait();
			schedule_store.byKey(params.id).done(function(data){
				hidePleaseWait();
				console.log(data);
                viewModel.event_name(data.event_name);
                viewModel.event_location(data.event_location);
                
                data.event_date = formatDate(data.event_date);
                viewModel.event_date(data.event_date);
                viewModel.event_time(data.event_time);
                viewModel.event_detail(data.event_detail);
			});
		},
    }
    return viewModel;
};