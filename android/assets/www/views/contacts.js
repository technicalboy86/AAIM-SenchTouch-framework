AAIM.contacts = function (params) {        
	var viewModel = {
		viewShowing: function(){
			console.log(' contacts list - view shown');
			viewModel.contactslist_data(new DevExpress.data.DataSource({
	    		store: contacts_store
			}));
		},
		setHeight: function(){
			var baseHeight = $(".layout-content").height();
			console.log(baseHeight - 80 + "px");
			return baseHeight - 80 + "px";
		},
		contactslist_data : ko.observable()
    }
    return viewModel;
};