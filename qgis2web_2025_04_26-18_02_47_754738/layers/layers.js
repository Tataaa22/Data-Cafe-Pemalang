var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_JALAN_LN_25K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_2 = format_JALAN_LN_25K_2.readFeatures(json_JALAN_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_2.addFeatures(features_JALAN_LN_25K_2);
var lyr_JALAN_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_2, 
                style: style_JALAN_LN_25K_2,
                popuplayertitle: 'JALAN_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_2.png" /> JALAN_LN_25K'
            });
var format_Cafepemalangg_3 = new ol.format.GeoJSON();
var features_Cafepemalangg_3 = format_Cafepemalangg_3.readFeatures(json_Cafepemalangg_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafepemalangg_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafepemalangg_3.addFeatures(features_Cafepemalangg_3);
var lyr_Cafepemalangg_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cafepemalangg_3, 
                style: style_Cafepemalangg_3,
                popuplayertitle: 'Cafepemalangg',
                interactive: true,
                title: '<img src="styles/legend/Cafepemalangg_3.png" /> Cafepemalangg'
            });
var format_Fixedgeometries_4 = new ol.format.GeoJSON();
var features_Fixedgeometries_4 = format_Fixedgeometries_4.readFeatures(json_Fixedgeometries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fixedgeometries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fixedgeometries_4.addFeatures(features_Fixedgeometries_4);
var lyr_Fixedgeometries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fixedgeometries_4, 
                style: style_Fixedgeometries_4,
                popuplayertitle: 'Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/Fixedgeometries_4.png" /> Fixed geometries'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_JALAN_LN_25K_2.setVisible(true);lyr_Cafepemalangg_3.setVisible(true);lyr_Fixedgeometries_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_JALAN_LN_25K_2,lyr_Cafepemalangg_3,lyr_Fixedgeometries_4];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_25K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Cafepemalangg_3.set('fieldAliases', {'No': 'No', 'Nama Tempat': 'Nama Tempat', '(Longitude) x': '(Longitude) x', 'Latitude (y)': 'Latitude (y)', });
lyr_Fixedgeometries_4.set('fieldAliases', {'No': 'No', 'Nama Tempat': 'Nama Tempat', '(Longitude) x': '(Longitude) x', 'Latitude (y)': 'Latitude (y)', 'Foto': 'Foto', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_25K_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Cafepemalangg_3.set('fieldImages', {'No': 'Range', 'Nama Tempat': 'TextEdit', '(Longitude) x': 'TextEdit', 'Latitude (y)': 'TextEdit', });
lyr_Fixedgeometries_4.set('fieldImages', {'No': 'Range', 'Nama Tempat': 'TextEdit', '(Longitude) x': 'TextEdit', 'Latitude (y)': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_25K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Cafepemalangg_3.set('fieldLabels', {'No': 'no label', 'Nama Tempat': 'no label', '(Longitude) x': 'no label', 'Latitude (y)': 'no label', });
lyr_Fixedgeometries_4.set('fieldLabels', {'No': 'inline label - always visible', 'Nama Tempat': 'inline label - always visible', '(Longitude) x': 'inline label - always visible', 'Latitude (y)': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_Fixedgeometries_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});