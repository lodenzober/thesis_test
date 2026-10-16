ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([10979041.202179, -1167414.309434, 13598083.898627, 365503.234859]);
var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_thesis_test_area_1 = new ol.format.GeoJSON();
var features_thesis_test_area_1 = format_thesis_test_area_1.readFeatures(json_thesis_test_area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thesis_test_area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thesis_test_area_1.addFeatures(features_thesis_test_area_1);
var lyr_thesis_test_area_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thesis_test_area_1, 
                style: style_thesis_test_area_1,
                popuplayertitle: 'thesis_test_area',
                interactive: true,
    title: 'thesis_test_area<br />\
    <img src="styles/legend/thesis_test_area_1_0.png" /> deforestation<br />\
    <img src="styles/legend/thesis_test_area_1_1.png" /> fossil resources<br />\
    <img src="styles/legend/thesis_test_area_1_2.png" /> mining<br />\
    <img src="styles/legend/thesis_test_area_1_3.png" /> <br />' });
var format_thesis_test_location_2 = new ol.format.GeoJSON();
var features_thesis_test_location_2 = format_thesis_test_location_2.readFeatures(json_thesis_test_location_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thesis_test_location_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thesis_test_location_2.addFeatures(features_thesis_test_location_2);
var lyr_thesis_test_location_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thesis_test_location_2, 
                style: style_thesis_test_location_2,
                popuplayertitle: 'thesis_test_location',
                interactive: true,
    title: 'thesis_test_location<br />\
    <img src="styles/legend/thesis_test_location_2_0.png" /> deforestation<br />\
    <img src="styles/legend/thesis_test_location_2_1.png" /> fossil resources<br />\
    <img src="styles/legend/thesis_test_location_2_2.png" /> mining<br />\
    <img src="styles/legend/thesis_test_location_2_3.png" /> <br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_thesis_test_area_1.setVisible(true);lyr_thesis_test_location_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_thesis_test_area_1,lyr_thesis_test_location_2];
lyr_thesis_test_area_1.set('fieldAliases', {'name': 'name', 'type': 'type', 'info': 'info', });
lyr_thesis_test_location_2.set('fieldAliases', {'name': 'name', 'type': 'type', });
lyr_thesis_test_area_1.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'info': 'TextEdit', });
lyr_thesis_test_location_2.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', });
lyr_thesis_test_area_1.set('fieldLabels', {'name': 'inline label - always visible', 'type': 'inline label - always visible', 'info': 'inline label - always visible', });
lyr_thesis_test_location_2.set('fieldLabels', {'name': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_thesis_test_location_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});