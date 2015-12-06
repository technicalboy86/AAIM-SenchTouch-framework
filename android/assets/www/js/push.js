var pushNotification;
function initPushNotification() {
    try
    {
        pushNotification = window.plugins.pushNotification;

        if (device.platform == 'android' || device.platform == 'Android') {
            pushNotification.register(successHandler, errorHandler, {"senderID":"26873981888","ecb":"onNotificationGCM"});  // required!
        } else {
            pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"}); // required!

        }
       // pushNotification.unregister(successUnregisteredHandler, errorHandler);

    }
    catch(err)
    {
        txt="There was an error on this page.\n\n";
        txt+="Error description: " + err.message + "\n\n";
        alert(txt);
    }
}
function onNotificationAPN(e) {
    if (e.alert) {
        navigator.notification.alert(e.alert, "Push notification");
    }
    
    if (e.sound) {
        var snd = new Media(e.sound);
        snd.play();
    }
    
    if (e.badge) {
        pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
    }

}
// handle GCM notifications for Android
function onNotificationGCM(e) { 

    switch( e.event )
    {   
        case 'registered':
            if ( e.regid.length > 0 )
            {
                localStorage.setItem("token_id", e.regid);
                regToServer();
            }
            break;
            
        case 'message':
	        alert(e.payload.MSG);
         
            break;
            
        case 'error':
            alert("Push Notification: Error - " + e.msg);
            break;
            
        default:
            alert("Push Notification: Failure - Unknown, an event was received and we do not know what it is");
            break;
    }
 
}

var SERVER_URL = "http://connecttostaff.com/webservice/push_register.php";
function regToServer()
{
    if ( !localStorage.getItem('token_id'))
        return;
    var token_id = localStorage.getItem('token_id');
alert(token_id);
//    $.mobile.loading( "show", {theme: 'b', text: 'Setting Homework...', html: '', textVisible: 'true'} );
    $.ajax({
        type: "POST",
        url: SERVER_URL,
        data: {
            token_id: token_id,
        },
        dataType: "json",
        success: function(response) {
         //  alert(response["ret"]);
        },
        error: function() {
//            $.mobile.loading( "hide" );
            alert("No connection found. Please connect to your provider for this search.");
        }
    });
}
function tokenHandler (result) {
    localStorage.setItem("token_id", result);
    regToServer();
//    alert("iOS Push Notification: Success - " + result);
    // Your iOS push server needs to know the token before it can push to this device
    // here is where you might want to send it the token for later use.
}
function successHandler (result) {
//   alert("Android Push Notification: Success - " + result);
}

function errorHandler (error) {
//   alert("Push Notification: Error - " + error);
}

function successUnregisteredHandler(result) {
//    alert("Unregistered Push Notification: Success - " + result);
}

 document.addEventListener("deviceready", onDeviceReady, false);
 function onDeviceReady() {
                  initPushNotification();
}