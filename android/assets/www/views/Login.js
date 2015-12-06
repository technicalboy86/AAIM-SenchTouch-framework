AAIM.Login = function (params) {        
	var viewModel = {
		navigating: function(){
			console.log('navigating');
		},
		viewShown: function(){
			$(".dx-toolbar-left").hide();
		},
		viewShowing: function(params){
			
			console.log('viewShowing');
			var user_id = localStorage.getItem('user_id');
			if(user_id){
				AAIM.app.navigate("Home", { root: true });
				$(".dx-toolbar-left").show();
			}
		},
			
    	email: ko.observable(''),
    	login: function(){
    		var email = viewModel.email();
    		var toast = $("#toastContainerAlert").dxToast('instance');
    		var can_login = true;
    		if(email == ''){
    			msg = "Please input your email.";
    			can_login = false;
    		}else if(!valid_email(email)){
    			msg = "Please input a valid email.";
    			can_login = false;
    		}
			if(!can_login){
	    		toast.option({'message': msg});
	    		toast.show();  
	    		return;
    		}	
    		//call ajax
    		showPleaseWait();
    		$.ajax({
		        url: API_ROOT+'login',
		        type: 'POST',
		        dataType: 'json',
		        data: {
		        	'email': email
		        },
                success: function(result) {
		        	hidePleaseWait();
		        	if(result == ''){
		        		toast.option({'message': "You don't have valid account."});
	    				toast.show(); 
	    				return;
		        	}
                   
                    API_NOTIFICATIONS = API_NOTIFICATIONS.replace('COMPID', result.company_id);
                    API_CONTACTS = API_CONTACTS.replace('COMPID', result.company_id);
                    API_NEWS = API_NEWS.replace('COMPID', result.company_id);
                    API_REFS = API_REFS.replace('COMPID', result.company_id);
                    API_SCHEDULE = API_SCHEDULE.replace('COMPID', result.company_id);
		        	
		        	localStorage.setItem("company_id", result.company_id);
					localStorage.setItem("group_admin", result.group_admin);
					localStorage.setItem("group_factory", result.group_factory);
					localStorage.setItem("group_marketing", result.group_marketing);
					localStorage.setItem("group_sales", result.group_sales);
					localStorage.setItem("group_superadmin", result.group_superadmin);
					localStorage.setItem("group_systemadmin", result.group_systemadmin);
					
					localStorage.setItem('user_id', result.user_id);
					localStorage.setItem('user_email', result.user_email);
					localStorage.setItem('user_name', result.user_name);
					if(result.company_logo)
						localStorage.setItem('company_logo', DOMAIN + "uploads/company_logos/" + result.company_logo);
		        	AAIM.app.navigate("Home", { root: true });
		        },
                error: function() {
                   hidePleaseWait();
                   toast.option({'message': "You don't have valid account."});
                   toast.show();
                   return;
                }
		    });
    	}
    }
    
    return viewModel;
};