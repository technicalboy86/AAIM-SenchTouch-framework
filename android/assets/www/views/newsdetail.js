AAIM.newsdetail = function (params) {        
	var viewModel = {
		news_title: ko.observable(''),
		news_content: ko.observable(''),
		active_on: ko.observable(''),
			file_attach: ko.observable(''),
		viewShown: function(){
			console.log(params);
			console.log('selected id = '+params.id);
			showPleaseWait();
			news_store.byKey(params.id).done(function(data){
				hidePleaseWait();
				console.log(data);
				viewModel.news_title(data.news_title);
				viewModel.active_on(data.active_on);
				viewModel.news_content(data.news_content);
				viewModel.file_attach(data.file_attach);
			});
		},
    }
    return viewModel;
};