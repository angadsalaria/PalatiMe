app.factory('clientCommonService', function($http){

	return { 
		getClient: function(clientId){
			return $http({method: 'GET', url: 'getClientById.json', params: {id : clientId}});
		},
		getClients: function(){
		return $http({method: 'GET', url: 'getClients.json'});
	},	
	};
});

/* Notification service.
 * Assumes that the jsp contains following tag-> <div id="notification-container"></div>
 * */
app.factory('notify', function(){
	var thisNotification = '#notification-container>div:last-child';
	var notifyHtml = function(type, message){
		return '<div class="'+type+'" onclick="$(this).remove()"><div><b>'+type+'!</b></div><div>'+message+'</div></div>';
	};	
	function setAnimation(elem, delay){
		setTimeout(function(){$(elem).fadeOut(500, function(){$(elem).remove();});},delay);
	}	
	return { 
		success: function(msg){
			$('#notification-container').append(notifyHtml('Success', msg));
			setAnimation($(thisNotification), 10000);
		},
		error: function(msg){
			$('#notification-container').append(notifyHtml('Error', msg));
			setAnimation($(thisNotification), 90000);
		},
		warning: function(msg){
			$('#notification-container').append(notifyHtml('Warning', msg));
			setAnimation($(thisNotification), 8000);
		},
		info: function(msg){
			$('#notification-container').append(notifyHtml('Info', msg));
			setAnimation($(thisNotification), 8000);

		}

	};
});

app.factory('dateService', function(){
	return {
		validate:	function(str){
			if(typeof str !== 'string') {
				return false;
			}
			var i, split = str.split(/\/|-/);
			if(split.length !== 3) {
				return false;
			}
			//Check that each piece is a real number
			for(i = 0; i < split.length; i++) {
				//(NaN is not equal to itself)
				if(split[i] !== split[i]) {
					return false;
				}
			}
			//Check for JavaScript date "rollover"
			var y = +split[2], m = +split[0], d = +split[1],
			dt = new Date(y, m - 1, d);
			return (y == dt.getFullYear()) &&  (m == dt.getMonth() + 1) && (d == dt.getDate());
		},
	
		format: function(dateObject){
			return dateObject.getMonth()+1 + "/" + dateObject.getDate() + "/" + dateObject.getFullYear();
		}
	};
});