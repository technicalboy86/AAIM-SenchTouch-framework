var STRING_LIMIT = 60;
/* Notifications Data Store */
	var notifications_store = new DevExpress.data.CustomStore({
		load: function (loadOptions) {
			if (!loadOptions.refresh)
				return;
			
			var deferred = new $.Deferred();
			
	        $.getJSON(API_NOTIFICATIONS)
	        .done(function (result) {
	            var mapped = $.map(result, function (row) {
	            	if (row.notification_description.length > STRING_LIMIT) {
	            		row.notification_description = row.notification_description.substring(0,STRING_LIMIT) + "...";
	            	}
	            	return row;
	            });
	            deferred.resolve(mapped);
	        });
	        return deferred;			
		},
			
		byKey: function(key) {
	        return $.getJSON(API_NOTIFICATIONS + "/" + encodeURIComponent(key));
	    }
	    
	});

/* Contacts Data Store */
	var contacts_store = new DevExpress.data.CustomStore({
		load: function (loadOptions) {
			if (!loadOptions.refresh)
				return;
			
			var deferred = new $.Deferred();
			$.getJSON(API_CONTACTS)
	        .done(function (result) {
	        	console.log(result);
	        	var mapped = $.map(result, function (row) {
	            	return row;
	            });
	            deferred.resolve(mapped);
	        });
	        return deferred;			
		},
			
		byKey: function(key) {
	        return $.getJSON(API_CONTACTS + "/" + encodeURIComponent(key));
	    }
	    
	});

/* News Data Store */
var news_store = new DevExpress.data.CustomStore({
		load: function (loadOptions) {
			if (!loadOptions.refresh)
				return;
			
			var deferred = new $.Deferred();
			$.getJSON(API_NEWS)
	        .done(function (result) {
	        	console.log(result);
	        	var mapped = $.map(result, function (row) {
	        		row.active_on = formatDate(row.active_on);
	            	if (row.news_content.length > STRING_LIMIT) {
	            		row.news_content = row.news_content.substring(0, STRING_LIMIT) + "...";
	            	}	        		
	            	return row;
	            });
	            deferred.resolve(mapped);
	        });
	        return deferred;			
		},
			
		byKey: function(key) {
	        return $.getJSON(API_NEWS + "/" + encodeURIComponent(key));
	    }
	    
	});

/* Quick References Store */
	var refs_store = new DevExpress.data.CustomStore({
		load: function (loadOptions) {
			if (!loadOptions.refresh)
				return;
			
			var deferred = new $.Deferred();
			$.getJSON(API_REFS)
	        .done(function (result) {
	        	console.log('----------');
	        	console.log(result);
	        	var mapped = $.map(result, function (row) {
	            	if (row.reference_description.length > STRING_LIMIT) {
	            		row.reference_description = row.reference_description.substring(0, STRING_LIMIT) + "...";
	            	}	        		
	            	return row;
	            });
	            deferred.resolve(mapped);
	        });
	        return deferred;			
		},
			
		byKey: function(key) {
	        return $.getJSON(API_REFS + "/" + encodeURIComponent(key));
	    }
	    
	});

/* Schedule Store */
	var schedule_store = new DevExpress.data.CustomStore({
		load: function (loadOptions) {
			if (!loadOptions.refresh)
				return;
			
			var deferred = new $.Deferred();
			$.getJSON(API_SCHEDULE)
	        .done(function (result) {
	        	console.log(result);
	        	var mapped = $.map(result, function (row) {
                    row.event_date = formatDate(row.event_date);
	            	return row;
	            });
	            deferred.resolve(mapped);
	        });
	        return deferred;			
		},
			
		byKey: function(key) {
	        return $.getJSON(API_SCHEDULE + "/" + encodeURIComponent(key));
	    }
	    
	});

