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
    }
  };
});