function logout(){
    comp_id = localStorage.getItem("company_id");
    API_NOTIFICATIONS = API_NOTIFICATIONS.replace(comp_id,'COMPID');
    API_CONTACTS = API_CONTACTS.replace(comp_id,'COMPID');
    API_NEWS = API_NEWS.replace(comp_id,'COMPID');
    API_REFS = API_REFS.replace(comp_id,'COMPID');
    API_SCHEDULE = API_SCHEDULE.replace(comp_id,'COMPID');
    
    localStorage.clear();
    AAIM.app.navigate("Login", {root: true});
}
window.AAIM = $.extend(true, window.AAIM, {
  "config": {
    "navigationType": "slideout",
    "commandMapping": {
      "ios-header-toolbar": {
        "commands": [
          {
            "id": "menu-add",
            "location": "menu"
          },
          {
              "id": "menu-edit",
              "location": "menu"
          },
          {
              "id": "menu-remove",
              "location": "menu"
          }
        ]
      },
      "android-header-toolbar": {
        "commands": [
          {
              "id": "menu-add",
              "location": "menu"
          },
          {
              "id": "menu-edit",
              "location": "menu"
          },
          {
              "id": "menu-remove",
              "location": "menu"
          }
        ]
      },
      "win8-phone-appbar": {
        "commands": [
          {
              "id": "menu-add",
              "location": "menu"
          },
          {
              "id": "menu-edit",
              "location": "menu"
          },
          {
              "id": "menu-remove",
              "location": "menu"
          }
        ]
      },
      "tizen-header-toolbar": {
        "commands": [
          {
              "id": "menu-add",
              "location": "menu"
          },
          {
              "id": "menu-edit",
              "location": "menu"
          },
          {
              "id": "menu-remove",
              "location": "menu"
          }
        ]
      },
      "generic-header-toolbar": {
          "commands": [
            {
                "id": "menu-add",
                "location": "menu"
            },
            {
                "id": "menu-edit",
                "location": "menu"
            },
            {
                "id": "menu-remove",
                "location": "menu"
            }
          ]
      }
    },

    "navigation": [{
			"title": "Contacts",
			"action": "#contacts",
			"icon": "cts"
		},
		{
			"title": "Notifications",
			"action": "#notifications",
			"icon": "nts"
		},
		{
			"title": "News",
			"action": "#news",
			"icon": "news"
		},
		{
			"title": "Schedule",
			"action": "#schedule",
			"icon": "scs"
		},
		{
			"title": "Live Meeting",
			"action": "#emerbroadcast",
			"icon": "lms"
		},
		{
			"title": "Quick References",
			"action": "#refs",
			"icon": "qrs"
		},
        {
            "title": "Log Out",
            "action": logout,
            "icon": ""
        }
    ]
  }
});