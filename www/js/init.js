/** init.js handles the initialization of the application's event handlers
 * This follows the proper initialization process defined at PhoneGap's
 * official website documentation
 * 
 * @class app
 */

var app = {
	/**
	 * initialize determines the current platform that the application is running on
	 * and will immediately execute the onDeviceReady if we detect we're running on
	 * webOS, otherwise binds the onDeviceReady if we detect we're on a mobile device.
	 * This ensures that onDeviceReady gets executed regardless of what platform the 
	 * app is being run on.
	 * 
	 * @method initialize
	 */
    initialize: function() {
		if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
			console.log("Running on phone device");
            this.bindEvents();
	    } else {
	    	console.log("Running on webOS");
	        this.onDeviceReady();
	    }
    },

    bindEvents: function() {
        document.addEventListener('deviceReady', this.onDeviceReady, false);
    },

    /**
     * onDeviceReady is executed each time the drugmenu.html page is loaded (including the landing
     * after accepting the disclaimer on index.html).  onDeviceRead initializes
     * the application and probes the remote server for medical updates, then populates the most
     * up to date list of drugs for the user
     * 
     * @method onDeviceReady
     */
    onDeviceReady: function() {
        console.log("onDeviceReady");
    	// Making sure menuList is empty
    	$('#menuList').empty();
    	localStorage.currentSort = "nameA";
        
    	// Initialize the fileSystem object for reading/storing offline data
    	if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    		initializeFileSystem();
    	}
    	
    },
    
    onFileSystemReady: function() {
        
        if (sessionStorage.firstLoad == null) {
    		// Only check the remote server on app initialization, not every time drugmenu.html is loaded
    		fetchUpdatesFromServer();
    	}
    	
    	// Create drugArray based on JSON data
    	drugArray = createDrugArray();
    	
    	// Load current options if default tab option selected
    	if(localStorage.defaultDrugClassification != null){
    		// The user wants the "generic" name to shown by default
    		if (localStorage.defaultDrugClassification == 'generic') {
    			// Change state of flipswitch
    			$('#select-generic').attr('selected',"");
    			$('#select-based-flipswitch').flipswitch();
    			$('#select-based-flipswitch').flipswitch('refresh');
    			
    			// Sort drug array by trade name	
    			drugArray = sort(drugArray,'genName');
    			// Populates menuList with drugArray
    			populateMenuList(drugArray, false);
    		} else {
    			// The user wants the "trade" name to shown by default
    			// Sort drug array by trade name	
    			drugArray = sort(drugArray,'tradeName');
    			// Populates menuList with drugArray
    			populateMenuList(drugArray, true);
    		}
    	} else {
    		// Sort drug array by trade name	
    		drugArray = sort(drugArray,'tradeName');
    		// Populates menuList with drugArray
    		populateMenuList(drugArray, true);
    	}
    	// The firstLoad flag is set to true so that we don't execute some functions
    	// every time drugmenu.html is loaded, only when the app is first loaded
    	sessionStorage.firstLoad = true;
    }
};
