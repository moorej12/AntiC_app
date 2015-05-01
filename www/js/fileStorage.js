/**
 * The fileStorage module contains functions to interact with the persistent storage
 * file system on the device in order to save medical information permanently to
 * allow for offline use.
 * 
 * The fileStorage module utilizes the FileStorage API provided by PhoneGap to save the 
 * dose charts to the phone's persistent storage.
 * 
 * @class fileStorage
 */
// Global fileSystem object which interacts with the device
var fileSystem;

// Path to the data directory on the device's sdcard
var dataDirectoryPath = "anticData/";

// Path to the images base directory on the remote server
var remoteServerImagesDir = "http://ec2-54-201-147-95.us-west-2.compute.amazonaws.com/";

/**
 * Initializes the fileSystem object by using the FileStorage API to request the 
 * phone's persistent storage.  Also creates the anticData folder on the phone which
 * will be the location of stored doseChart images
 * 
 * @method initializeFileSystem
 */
function initializeFileSystem() {
	window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
			function(fs) {
				fileSystem = fs;
				localStorage.fileSystemRoot = fs.root.toURL();
				fs.root.getDirectory("anticData", {create: true, exclusive: false},
						             function() {
                                        app.onFileSystemReady();}, 
						             fileError);
			}, fileError);
}

/**
 * Downloads an image file from the remote server so that it can be stored 
 * in the anticData folder on the phone's persistent storage for offline use
 * 
 * @method downloadImageFromServer
 * @param {String} Name of the image to store
 */
function downloadImageFromServer(imageName) {
	   // Initialize the FileAPI objects
       var fileTransfer = new FileTransfer();
    
       // Initialize the file paths
       var remoteImagePath = remoteServerImagesDir + imageName;
       var uri = encodeURI(remoteImagePath);
       console.log("imageName" + imageName);
       var localImagePath = fileSystem.root.toURL() + dataDirectoryPath + imageName.split("/").pop().replace(" ", "_");
       console.log(localImagePath);
    
       // Initialize the download process
       fileTransfer.download(uri, localImagePath,
                             function(entry) { 
                           	     console.log("Saved " + imageName + " to " + localImagePath);
                             }, fileError);        
}

/**
 * Error handling callback function incase the File API plugin
 * returns an error.  Log the code for debugging purposes.
 * 
 * @method fileError
 * @param {String} Error code to display
 */
function fileError(error) {
    console.log(error.code);
}