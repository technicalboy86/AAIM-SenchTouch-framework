AAIM.contactdetail = function (params) {        
	var viewModel = {
		contact_name: ko.observable(''),
		contact_title: ko.observable(''),
		contact_company: ko.observable(''),
		contact_phone: ko.observable(''),
		contact_mobile: ko.observable(''),
		contact_fax: ko.observable(''),
		contact_notes: ko.observable(''),
		viewShown: function(){
			showPleaseWait();
			console.log('selected id = '+params.id);
			contacts_store.byKey(params.id).done(function(data){
				hidePleaseWait();
				console.log(data);
				viewModel.contact_name(data.contact_name);
				viewModel.contact_title(data.contact_title);
				viewModel.contact_company(data.contact_company);
				viewModel.contact_phone(data.contact_phone);
				viewModel.contact_mobile(data.contact_mobile);
				viewModel.contact_fax(data.contact_fax);
				viewModel.contact_notes(data.contact_notes);
			});
		},
    }
    return viewModel;
};