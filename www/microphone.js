var microphoneVolume = {
    start: function(success, error) {
 		cordova.exec(successCallback, errorCallback, 'MicroPhone', 'start', []); 
    },

    read: function(success, error) {
        cordova.exec(successCallback, errorCallback, 'MicroPhone', 'read', []); 
    },

    stop: function(success, error) {
        cordova.exec(successCallback, errorCallback, 'MicroPhone', 'stop', []); 
    }    
}

module.exports = microphoneVolume;