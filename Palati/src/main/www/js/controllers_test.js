app.controller('AppController', function($scope,$http){


	$scope.testConnection = function(){
		$http({method: 'GET', url: 'http://192.168.1.11:8080/Palati/testConnection.do'})
		.then(function(success){
			alert(success.data);
		},function(error){
		
		});
	};
	
	$scope.testScan = function(){
console.log('scanning');
        
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) { 

            alert("We got a "+result.format+"\n" + 
            "Result: " + result.text + "\n" +             
            "Cancelled: " + result.cancelled);  

           
            /*
            if (args.format == "QR_CODE") {
                window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
            }
            */

        }, function (error) { 
            console.log("Scanning failed: ", error); 
        } );
		
		
	};

});