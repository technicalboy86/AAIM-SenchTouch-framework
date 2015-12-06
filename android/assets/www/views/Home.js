function selectPage(page){
	AAIM.app.navigate(page);
}
    
AAIM.Home = function (params) {        
	var viewModel = {
    	logo_url: ko.observable(''),
    	title: ko.observable('AAIM'),
    	viewShowing: function(){
    		var company_logo = localStorage.getItem('company_logo');
    		var user_name = localStorage.getItem('user_name');
            console.log('-------------------');
            console.log(company_logo);
    		viewModel.logo_url(company_logo);
    		viewModel.title(user_name);
    	}
    }
    
    return viewModel;
};