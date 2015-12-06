AAIM.news = function (params) {        
	var viewModel = {
		viewShowing: function(){
			console.log(' news list - view shown');
			viewModel.newslist_data(new DevExpress.data.DataSource({
	    		store: news_store
			}));
		},
		newslist_data : ko.observable()
    }
    return viewModel;
};