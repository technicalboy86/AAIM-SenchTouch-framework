AAIM.refs = function (params) {        
	var viewModel = {
		viewShowing: function(){
			console.log(' refs list - view shown');
			viewModel.refslist_data(new DevExpress.data.DataSource({
	    		store: refs_store
			}));
		},
		refslist_data : ko.observableArray()
    }
    return viewModel;
};