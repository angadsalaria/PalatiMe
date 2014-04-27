angular.module('palati.filters', [])

.filter('tastingsFilter', function(strngUtils){
	return function(input, query){
		if(query.zip=='' || query.zip==null) return input;
		var result = {};
		angular.forEach(input, function(tasting){
			if(strngUtils.compareStr(tasting.winery.addrZip, query.zip))
				result[tasting.id]=tasting;          
		});
		return result;
	};
})

.filter('nullParser', function(){
	  return function(input, placeholder){
	    if(!(input == undefined || input == null || (input===''))){
	      return input;
	    } else {
	      return placeholder;
	    }
	  };
	})
	
;