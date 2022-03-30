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