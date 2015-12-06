AAIM.refdetail = function (params) {        
	var viewModel = {
		reference_title: ko.observable(''),
		reference_description: ko.observable(''),
		url_link: ko.observable(''),
		viewShown: function(){
			console.log(params);
			console.log('selected id = '+params.id);
			showPleaseWait();
			refs_store.byKey(params.id).done(function(data){
				console.log(data);
				hidePleaseWait();
				viewModel.reference_title(data.reference_title);
				viewModel.reference_description(data.reference_description);
				if(data.url_link)
					viewModel.url_link(data.url_link);
			});
		},
		goURL: function(){
			url = viewModel.url_link();
			window.open(url, '_blank', 'location=yes, enableViewportScale=no');
		}
    }
    return viewModel;
};