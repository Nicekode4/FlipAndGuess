/**
 * @param callback function(error)
 * @author YellowAfterlife
 **/
 function requestDeviceMotion(callback) {
    if (window.DeviceMotionEvent == null) {
        callback(new Error("DeviceMotion is not supported."));
    } else if (DeviceMotionEvent.requestPermission) {
        DeviceMotionEvent.requestPermission().then(function(state) {
            if (state == "granted") {
                callback(null);
            } else callback(new Error("Permission denied by user"));
        }, function(err) {
            callback(err);
        });
    } else { // no need for permission
        callback(null);
    }
}
function firstClick() {
    requestDeviceMotion(function(err) {
        if (err == null) {
            window.removeEventListener("click", firstClick);
            window.removeEventListener("touchend", firstClick);
            window.addEventListener("devicemotion", function(e) {
                // access e.acceleration, etc.
            });
        } else {
            // failed; a JS error object is stored in `err`
        }
    });
}
window.addEventListener("click", firstClick);
window.addEventListener("touchend", firstClick);

/**
 * @param callback function(error)
 * @author YellowAfterlife
 **/
 function requestDeviceOrientation(callback) {
    if (window.DeviceOrientationEvent == null) {
        callback(new Error("DeviceOrientation is not supported."));
    } else if (DeviceOrientationEvent.requestPermission) {
        DeviceOrientationEvent.requestPermission().then(function(state) {
            if (state == "granted") {
                callback(null);
            } else callback(new Error("Permission denied by user"));
        }, function(err) {
            callback(err);
        });
    } else { // no need for permission
        callback(null);
    }
}