 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map

      
        });

       
       



 var featureLayer_1 = new FeatureLayer({     url:"https://services.arcgis.com/jDGuO8tYggdCCnUJ/arcgis/rest/services/CADominantGroundwaterFeatures/FeatureServer/0"});
   
  

        map.add(featureLayer_1);

    
  var featureLayer_2 = new FeatureLayer({     url:"https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/California_Fire_Perimeters_1878_2019/FeatureServer/1"});
   
 

        map.add(featureLayer_2);
});
