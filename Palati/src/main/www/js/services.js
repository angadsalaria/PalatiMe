angular.module('palati.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('WineService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var wines = [
    { id: 0, title: 'Veuve Clique Champagne, France', description: 'A blend of Pinot Noir, Pinot Meunier and Chardonnay with a rich, creamy texture and round balance.' },
    { id: 1, title: 'Laboure-Roi Pommard, France', description: 'Powerful scents of black currant, musk and liquorice.' },
    { id: 2, title: 'Chateau Ste Michelle & Dr. Loosen Eroica Riesling, Washington', description: 'This Riesling exudes mandarin orange and sweet lime aromas and flavors with subtle mineral notes.' },
    { id: 3, title: 'Castello Banfi Brunello Di Montalcino, Italy', description: 'Soft and velvety with liquorice, spices and cherry notes.' },
    { id: 4, title: 'Grahams Six Grapes Reserve, Portugal', description: 'Dark red color with a rich perfume of ripe plums and cherries. Complex on the palate, with a good structure and a long lingering finish.' },
    { id: 5, title: 'Errazuriz Late Harvest Sauvignon Blanc, Chile', description: 'Golden yellow in color with excellent aromatic intensity. Aromas of citrus and ripe apricots with a taste of honey and raisins.' }
  ];

  return {
    all: function() {
      return wines;
    },
    get: function(wineId) {
      // Simple index lookup
      return wines[wineId];
    },
    put: function(wineId, wine){
    	wines[wineId] = wine;
    }
  };
})

.factory('AttributesService', function() {
	 

	var basicList = function (){
		return [
                { text: "Body", checked: true, factor: 0 },
                { text: "Sweetness", checked: true, factor: 0 },
                { text: "Tannin", checked: true, factor: 0 },
                { text: "Fruit", checked: true, factor: 0 },
                { text: "Acid", checked: true, factor: 0 }
                ];
	};
	var extendedList = function(){
		return [
               { text: "Aging", checked: false, factor: 0 },
               //    { text: "Aggressive", checked: false, factor: 0 },
               //    { text: "Angular", checked: false, factor: 0 },
               { text: "Austere", checked: false, factor: 0 },
               //    { text: "Backbone", checked: false, factor: 0 },
               //    { text: "Backward", checked: false, factor: 0 },
               { text: "Balanced", checked: false, factor: 0 },
               //    { text: "Big", checked: false, factor: 0 },
               { text: "Bitter", checked: false, factor: 0 },
               //     { text: "Brawny", checked: false, factor: 0 },
               { text: "Brooding", checked: false, factor: 0 },
               { text: "Buttery", checked: false, factor: 0 },
               //     { text: "Clean", checked: false, factor: 0 },
               { text: "Coarse", checked: false, factor: 0 },
               { text: "Creamy", checked: false, factor: 0 },
               //     { text: "Dense", checked: false, factor: 0 },
               { text: "Fading", checked: false, factor: 0 },
               { text: "Flat", checked: false, factor: 0 },
               { text: "Floral", checked: false, factor: 0 },
               { text: "Forward", checked: false, factor: 0 },
               //    { text: "Green", checked: false, factor: 0 },
               { text: "Herbaceous", checked: false, factor: 0 },
               { text: "Length", checked: false, factor: 0 },
               { text: "Oaky", checked: false, factor: 0 },
               //    { text: "Peppery", checked: false, factor: 0 },
               { text: "Smoky", checked: false, factor: 0 },
               { text: "Tannic", checked: false, factor: 0 }
               //    { text: "Velvety", checked: false, factor: 0 }

               ];
	};
	  return {
	    getBasicList: function() {
	      return basicList();
	    },
	    getExtendedList: function() {
		      return extendedList();
		}
	  };
	});
