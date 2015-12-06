window.AAIM = window.AAIM || {};
$(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
    AAIM.app = new DevExpress.framework.html.HtmlApplication({
        namespace: AAIM,
        /*commandMapping: AAIM.config.commandMapping,*/
        navigationType: AAIM.config.navigationType,
        navigation: AAIM.config.navigation
    });

    AAIM.app.router.register(":view/:id", { view: "Login", id: undefined });
    AAIM.app.router.register("contacts/:contact_id", { view: "contacts", contact_id: undefined });
	AAIM.app.router.register("notificationdetail/:notification_id", { view: "notificationdetail", notification_id: undefined });
	AAIM.app.router.register("newsdetail/:news_id", { view: "newsdetail", news_id: undefined });
	AAIM.app.router.register("contactdetail/:contact_id", { view: "contactdetail", contact_id: undefined });
	AAIM.app.router.register("refdetail/:reference_id", { view: "refdetail/:", reference_id: undefined });
    AAIM.app.router.register("scheduledetail/:id", { view: "scheduledetail/:", id: undefined });
	
    function onDeviceReady(){
		
	}
});
