AAIM.schedule = function (params) {        
	var viewModel = {
		viewShowing: function(){
			viewModel.schedulelist_data(new DevExpress.data.DataSource({
	    		store: schedule_store
			}));
		},
		schedulelist_data : ko.observable()
    }
    return viewModel;
};