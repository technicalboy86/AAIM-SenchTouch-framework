AAIM.notifications = function (params) {        
	var viewModel = {
		viewShowing: function(){
			console.log(' notifications list - view shown');
			viewModel.notificationslist_data(new DevExpress.data.DataSource({
	    		store: notifications_store
			}));
		},
		notificationslist_data : ko.observable()
    }
    return viewModel;
};