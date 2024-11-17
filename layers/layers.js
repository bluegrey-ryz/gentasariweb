ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12154896.026480, -851486.368332, 12165324.380795, -846101.855078]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_Pesawahan_2 = new ol.format.GeoJSON();
var features_Pesawahan_2 = format_Pesawahan_2.readFeatures(json_Pesawahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pesawahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pesawahan_2.addFeatures(features_Pesawahan_2);
var lyr_Pesawahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pesawahan_2, 
                style: style_Pesawahan_2,
                popuplayertitle: "Pesawahan",
                interactive: false,
                title: '<img src="styles/legend/Pesawahan_2.png" /> Pesawahan'
            });
var format_RTRW_3 = new ol.format.GeoJSON();
var features_RTRW_3 = format_RTRW_3.readFeatures(json_RTRW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW_3.addFeatures(features_RTRW_3);
var lyr_RTRW_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW_3, 
                style: style_RTRW_3,
                popuplayertitle: "RT,RW",
                interactive: true,
    title: 'RT,RW<br />\
    <img src="styles/legend/RTRW_3_0.png" /> <br />\
    <img src="styles/legend/RTRW_3_1.png" /> RT 01 / RW 01<br />\
    <img src="styles/legend/RTRW_3_2.png" /> RT 01 / RW 02<br />\
    <img src="styles/legend/RTRW_3_3.png" /> Rt 01 / RW 03<br />\
    <img src="styles/legend/RTRW_3_4.png" /> RT 01 / RW 04<br />\
    <img src="styles/legend/RTRW_3_5.png" /> RT 01 / RW 06<br />\
    <img src="styles/legend/RTRW_3_6.png" /> RT 02 / RW 01<br />\
    <img src="styles/legend/RTRW_3_7.png" /> RT 02 / RW 02<br />\
    <img src="styles/legend/RTRW_3_8.png" /> RT 02 / RW 03<br />\
    <img src="styles/legend/RTRW_3_9.png" /> RT 02 / RW 04<br />\
    <img src="styles/legend/RTRW_3_10.png" /> RT 02 / RW 05<br />\
    <img src="styles/legend/RTRW_3_11.png" /> RT 02 / RW 06<br />\
    <img src="styles/legend/RTRW_3_12.png" /> RT 03 / RW 01<br />\
    <img src="styles/legend/RTRW_3_13.png" /> RT 03 / RW 02<br />\
    <img src="styles/legend/RTRW_3_14.png" /> RT 03 / RW 03<br />\
    <img src="styles/legend/RTRW_3_15.png" /> RT 03 / RW 04<br />\
    <img src="styles/legend/RTRW_3_16.png" /> RT 03 / RW 05<br />\
    <img src="styles/legend/RTRW_3_17.png" /> RT 03 / RW 06<br />\
    <img src="styles/legend/RTRW_3_18.png" /> RT 04 / RW 01<br />\
    <img src="styles/legend/RTRW_3_19.png" /> RT 04 / RW 02<br />\
    <img src="styles/legend/RTRW_3_20.png" /> RT 04 / RW 03<br />\
    <img src="styles/legend/RTRW_3_21.png" /> RT 04 / RW 04<br />\
    <img src="styles/legend/RTRW_3_22.png" /> RT 04 / RW 05<br />\
    <img src="styles/legend/RTRW_3_23.png" /> RT 04 / RW 06<br />\
    <img src="styles/legend/RTRW_3_24.png" /> RT 05 / RW 01<br />\
    <img src="styles/legend/RTRW_3_25.png" /> RT 05 / RW 03<br />\
    <img src="styles/legend/RTRW_3_26.png" /> RT 05 / RW 04<br />\
    <img src="styles/legend/RTRW_3_27.png" /> RT 05 / RW 05<br />\
    <img src="styles/legend/RTRW_3_28.png" /> RT 05 / RW 06<br />\
    <img src="styles/legend/RTRW_3_29.png" /> RT 06 / RW 01<br />\
    <img src="styles/legend/RTRW_3_30.png" /> RT 06 / RW 03<br />\
    <img src="styles/legend/RTRW_3_31.png" /> RT 06 / RW 04<br />\
    <img src="styles/legend/RTRW_3_32.png" /> RT 06 / RW 05<br />\
    <img src="styles/legend/RTRW_3_33.png" /> RT 06 / RW 06<br />\
    <img src="styles/legend/RTRW_3_34.png" /> RT 07 /  RW 04<br />\
    <img src="styles/legend/RTRW_3_35.png" /> RT 07 / RW 01<br />\
    <img src="styles/legend/RTRW_3_36.png" /> RT 07 / RW 03<br />\
    <img src="styles/legend/RTRW_3_37.png" /> RT 07 / RW 05<br />\
    <img src="styles/legend/RTRW_3_38.png" /> RT 07 / RW 06<br />\
    <img src="styles/legend/RTRW_3_39.png" /> RT 08 / RW 01<br />\
    <img src="styles/legend/RTRW_3_40.png" /> RT 08 / RW 03<br />\
    <img src="styles/legend/RTRW_3_41.png" /> RT 08 / RW 04<br />\
    <img src="styles/legend/RTRW_3_42.png" /> RT 08 / RW 05<br />\
    <img src="styles/legend/RTRW_3_43.png" /> RT 09 / RW 01<br />\
    <img src="styles/legend/RTRW_3_44.png" /> RT 09 / RW 03<br />\
    <img src="styles/legend/RTRW_3_45.png" /> RT 09 / RW 04<br />\
    <img src="styles/legend/RTRW_3_46.png" /> RT 09 / RW 05<br />\
    <img src="styles/legend/RTRW_3_47.png" /> RT 09 / RW 06<br />\
    <img src="styles/legend/RTRW_3_48.png" /> RT 10 / RW 01<br />\
    <img src="styles/legend/RTRW_3_49.png" /> RT 10 / RW 03<br />\
    <img src="styles/legend/RTRW_3_50.png" /> RT 10 / RW 04<br />\
    <img src="styles/legend/RTRW_3_51.png" /> RT 10 / RW 05<br />\
    <img src="styles/legend/RTRW_3_52.png" /> RT 10 / RW 06<br />\
    <img src="styles/legend/RTRW_3_53.png" /> RT 11 / RW 03<br />\
    <img src="styles/legend/RTRW_3_54.png" /> RT 11 / RW 04<br />\
    <img src="styles/legend/RTRW_3_55.png" /> RT 11 / RW 05<br />\
    <img src="styles/legend/RTRW_3_56.png" /> RT 11 / RW 06<br />\
    <img src="styles/legend/RTRW_3_57.png" /> RT 12 / RW 03<br />\
    <img src="styles/legend/RTRW_3_58.png" /> RT 12 / RW 05<br />\
    <img src="styles/legend/RTRW_3_59.png" /> RT 12 / RW 06<br />\
    <img src="styles/legend/RTRW_3_60.png" /> RT 13 / RW 05<br />'
        });
var format_gentasari_poly_4 = new ol.format.GeoJSON();
var features_gentasari_poly_4 = format_gentasari_poly_4.readFeatures(json_gentasari_poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gentasari_poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gentasari_poly_4.addFeatures(features_gentasari_poly_4);
var lyr_gentasari_poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gentasari_poly_4, 
                style: style_gentasari_poly_4,
                popuplayertitle: "gentasari_poly",
                interactive: false,
                title: '<img src="styles/legend/gentasari_poly_4.png" /> gentasari_poly'
            });
var format_gentasari_line_5 = new ol.format.GeoJSON();
var features_gentasari_line_5 = format_gentasari_line_5.readFeatures(json_gentasari_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gentasari_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gentasari_line_5.addFeatures(features_gentasari_line_5);
var lyr_gentasari_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gentasari_line_5, 
                style: style_gentasari_line_5,
                popuplayertitle: "gentasari_line",
                interactive: false,
                title: '<img src="styles/legend/gentasari_line_5.png" /> gentasari_line'
            });
var format_NamaGang_6 = new ol.format.GeoJSON();
var features_NamaGang_6 = format_NamaGang_6.readFeatures(json_NamaGang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaGang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaGang_6.addFeatures(features_NamaGang_6);
var lyr_NamaGang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamaGang_6, 
                style: style_NamaGang_6,
                popuplayertitle: "Nama Gang",
                interactive: true,
                title: '<img src="styles/legend/NamaGang_6.png" /> Nama Gang'
            });
var format_Makam_7 = new ol.format.GeoJSON();
var features_Makam_7 = format_Makam_7.readFeatures(json_Makam_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Makam_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_7.addFeatures(features_Makam_7);
var lyr_Makam_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_7, 
                style: style_Makam_7,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_7.png" /> Makam'
            });
var format_Pemerintahan_8 = new ol.format.GeoJSON();
var features_Pemerintahan_8 = format_Pemerintahan_8.readFeatures(json_Pemerintahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_8.addFeatures(features_Pemerintahan_8);
var lyr_Pemerintahan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_8, 
                style: style_Pemerintahan_8,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_8.png" /> Pemerintahan'
            });
var format_Rumah_9 = new ol.format.GeoJSON();
var features_Rumah_9 = format_Rumah_9.readFeatures(json_Rumah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_9.addFeatures(features_Rumah_9);
var lyr_Rumah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_9, 
                style: style_Rumah_9,
                popuplayertitle: "Rumah",
                interactive: true,
    title: 'Rumah<br />\
    <img src="styles/legend/Rumah_9_0.png" /> Aples<br />\
    <img src="styles/legend/Rumah_9_1.png" /> Atikah Melitiana<br />\
    <img src="styles/legend/Rumah_9_2.png" /> Daffa<br />\
    <img src="styles/legend/Rumah_9_3.png" /> Elda Ramadani<br />\
    <img src="styles/legend/Rumah_9_4.png" /> Ibu Fai<br />\
    <img src="styles/legend/Rumah_9_5.png" /> Indi<br />\
    <img src="styles/legend/Rumah_9_6.png" /> Ketua Rt 05 / Rw 04<br />\
    <img src="styles/legend/Rumah_9_7.png" /> Mas Ijoh<br />\
    <img src="styles/legend/Rumah_9_8.png" /> Mbah Boyem<br />\
    <img src="styles/legend/Rumah_9_9.png" /> Mbah Iman<br />\
    <img src="styles/legend/Rumah_9_10.png" /> Mbah Kamto<br />\
    <img src="styles/legend/Rumah_9_11.png" /> Mbak Anggita<br />\
    <img src="styles/legend/Rumah_9_12.png" /> Mbak Fina<br />\
    <img src="styles/legend/Rumah_9_13.png" /> Mbak Mutia<br />\
    <img src="styles/legend/Rumah_9_14.png" /> Mbak Nani<br />\
    <img src="styles/legend/Rumah_9_15.png" /> Mbak Reza Ade<br />\
    <img src="styles/legend/Rumah_9_16.png" /> Mbak Rosi<br />\
    <img src="styles/legend/Rumah_9_17.png" /> Mbak Win<br />\
    <img src="styles/legend/Rumah_9_18.png" /> Nanda<br />\
    <img src="styles/legend/Rumah_9_19.png" /> Novi<br />\
    <img src="styles/legend/Rumah_9_20.png" /> <br />'
        });
var format_Kesehatan_10 = new ol.format.GeoJSON();
var features_Kesehatan_10 = format_Kesehatan_10.readFeatures(json_Kesehatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_10.addFeatures(features_Kesehatan_10);
var lyr_Kesehatan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_10, 
                style: style_Kesehatan_10,
                popuplayertitle: "Kesehatan",
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_10.png" /> Kesehatan'
            });
var format_Pendidikan_11 = new ol.format.GeoJSON();
var features_Pendidikan_11 = format_Pendidikan_11.readFeatures(json_Pendidikan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_11.addFeatures(features_Pendidikan_11);
var lyr_Pendidikan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_11, 
                style: style_Pendidikan_11,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_11.png" /> Pendidikan'
            });
var format_Lapangan_12 = new ol.format.GeoJSON();
var features_Lapangan_12 = format_Lapangan_12.readFeatures(json_Lapangan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_12.addFeatures(features_Lapangan_12);
var lyr_Lapangan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_12, 
                style: style_Lapangan_12,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_12.png" /> Lapangan'
            });
var format_Museum_13 = new ol.format.GeoJSON();
var features_Museum_13 = format_Museum_13.readFeatures(json_Museum_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museum_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museum_13.addFeatures(features_Museum_13);
var lyr_Museum_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museum_13, 
                style: style_Museum_13,
                popuplayertitle: "Museum",
                interactive: true,
                title: '<img src="styles/legend/Museum_13.png" /> Museum'
            });
var format_RelKereta_14 = new ol.format.GeoJSON();
var features_RelKereta_14 = format_RelKereta_14.readFeatures(json_RelKereta_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RelKereta_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RelKereta_14.addFeatures(features_RelKereta_14);
var lyr_RelKereta_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RelKereta_14, 
                style: style_RelKereta_14,
                popuplayertitle: "Rel Kereta ",
                interactive: true,
                title: '<img src="styles/legend/RelKereta_14.png" /> Rel Kereta '
            });
var format_Jalan_15 = new ol.format.GeoJSON();
var features_Jalan_15 = format_Jalan_15.readFeatures(json_Jalan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_15.addFeatures(features_Jalan_15);
var lyr_Jalan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_15, 
                style: style_Jalan_15,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_15.png" /> Jalan'
            });
var format_Bengkel_16 = new ol.format.GeoJSON();
var features_Bengkel_16 = format_Bengkel_16.readFeatures(json_Bengkel_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bengkel_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bengkel_16.addFeatures(features_Bengkel_16);
var lyr_Bengkel_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bengkel_16, 
                style: style_Bengkel_16,
                popuplayertitle: "Bengkel ",
                interactive: true,
                title: '<img src="styles/legend/Bengkel_16.png" /> Bengkel '
            });
var format_Masjid_17 = new ol.format.GeoJSON();
var features_Masjid_17 = format_Masjid_17.readFeatures(json_Masjid_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_17.addFeatures(features_Masjid_17);
var lyr_Masjid_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_17, 
                style: style_Masjid_17,
                popuplayertitle: "Masjid",
                interactive: true,
                title: '<img src="styles/legend/Masjid_17.png" /> Masjid'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_Pesawahan_2.setVisible(true);lyr_RTRW_3.setVisible(true);lyr_gentasari_poly_4.setVisible(true);lyr_gentasari_line_5.setVisible(true);lyr_NamaGang_6.setVisible(true);lyr_Makam_7.setVisible(true);lyr_Pemerintahan_8.setVisible(true);lyr_Rumah_9.setVisible(true);lyr_Kesehatan_10.setVisible(true);lyr_Pendidikan_11.setVisible(true);lyr_Lapangan_12.setVisible(true);lyr_Museum_13.setVisible(true);lyr_RelKereta_14.setVisible(true);lyr_Jalan_15.setVisible(true);lyr_Bengkel_16.setVisible(true);lyr_Masjid_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_Pesawahan_2,lyr_RTRW_3,lyr_gentasari_poly_4,lyr_gentasari_line_5,lyr_NamaGang_6,lyr_Makam_7,lyr_Pemerintahan_8,lyr_Rumah_9,lyr_Kesehatan_10,lyr_Pendidikan_11,lyr_Lapangan_12,lyr_Museum_13,lyr_RelKereta_14,lyr_Jalan_15,lyr_Bengkel_16,lyr_Masjid_17];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pesawahan_2.set('fieldAliases', {'id': 'id', 'Sawah': 'Sawah', });
lyr_RTRW_3.set('fieldAliases', {'id': 'id', 'Rt, RW': 'Rt, RW', });
lyr_gentasari_poly_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'place': 'place', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'population': 'population', 'aeroway': 'aeroway', 'status': 'status', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_gentasari_line_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_NamaGang_6.set('fieldAliases', {'id': 'id', 'Jln.Gang': 'Jln.Gang', });
lyr_Makam_7.set('fieldAliases', {'id': 'id', 'Makam': 'Makam', });
lyr_Pemerintahan_8.set('fieldAliases', {'id': 'id', 'Nama.tmpat': 'Nama.tmpat', });
lyr_Rumah_9.set('fieldAliases', {'id': 'id', 'Rumah': 'Rumah', });
lyr_Kesehatan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pendidikan_11.set('fieldAliases', {'id': 'id', 'Pendidikan': 'Pendidikan', });
lyr_Lapangan_12.set('fieldAliases', {'id': 'id', 'nma.lpngn': 'nma.lpngn', });
lyr_Museum_13.set('fieldAliases', {'id': 'id', 'nma.museum': 'nma.museum', });
lyr_RelKereta_14.set('fieldAliases', {'id': 'id', 'namRrel': 'namRrel', });
lyr_Jalan_15.set('fieldAliases', {'id': 'id', 'namaJln': 'namaJln', });
lyr_Bengkel_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Masjid_17.set('fieldAliases', {'id': 'id', 'nma.masjid': 'nma.masjid', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Pesawahan_2.set('fieldImages', {'id': 'TextEdit', 'Sawah': 'TextEdit', });
lyr_RTRW_3.set('fieldImages', {'id': 'TextEdit', 'Rt, RW': 'TextEdit', });
lyr_gentasari_poly_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'status': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_gentasari_line_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_NamaGang_6.set('fieldImages', {'id': 'TextEdit', 'Jln.Gang': 'TextEdit', });
lyr_Makam_7.set('fieldImages', {'id': 'TextEdit', 'Makam': 'TextEdit', });
lyr_Pemerintahan_8.set('fieldImages', {'id': 'TextEdit', 'Nama.tmpat': 'TextEdit', });
lyr_Rumah_9.set('fieldImages', {'id': 'TextEdit', 'Rumah': 'TextEdit', });
lyr_Kesehatan_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pendidikan_11.set('fieldImages', {'id': 'TextEdit', 'Pendidikan': 'TextEdit', });
lyr_Lapangan_12.set('fieldImages', {'id': 'TextEdit', 'nma.lpngn': 'TextEdit', });
lyr_Museum_13.set('fieldImages', {'id': 'TextEdit', 'nma.museum': 'TextEdit', });
lyr_RelKereta_14.set('fieldImages', {'id': 'TextEdit', 'namRrel': 'TextEdit', });
lyr_Jalan_15.set('fieldImages', {'id': 'TextEdit', 'namaJln': 'TextEdit', });
lyr_Bengkel_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Masjid_17.set('fieldImages', {'id': 'TextEdit', 'nma.masjid': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pesawahan_2.set('fieldLabels', {'id': 'no label', 'Sawah': 'no label', });
lyr_RTRW_3.set('fieldLabels', {'id': 'no label', 'Rt, RW': 'no label', });
lyr_gentasari_poly_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'population': 'no label', 'aeroway': 'no label', 'status': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_gentasari_line_5.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'header label - always visible', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_NamaGang_6.set('fieldLabels', {'id': 'no label', 'Jln.Gang': 'no label', });
lyr_Makam_7.set('fieldLabels', {'id': 'no label', 'Makam': 'no label', });
lyr_Pemerintahan_8.set('fieldLabels', {'id': 'no label', 'Nama.tmpat': 'no label', });
lyr_Rumah_9.set('fieldLabels', {'id': 'no label', 'Rumah': 'no label', });
lyr_Kesehatan_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pendidikan_11.set('fieldLabels', {'id': 'no label', 'Pendidikan': 'no label', });
lyr_Lapangan_12.set('fieldLabels', {'id': 'no label', 'nma.lpngn': 'no label', });
lyr_Museum_13.set('fieldLabels', {'id': 'no label', 'nma.museum': 'no label', });
lyr_RelKereta_14.set('fieldLabels', {'id': 'no label', 'namRrel': 'no label', });
lyr_Jalan_15.set('fieldLabels', {'id': 'no label', 'namaJln': 'no label', });
lyr_Bengkel_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Masjid_17.set('fieldLabels', {'id': 'no label', 'nma.masjid': 'no label', });
lyr_Masjid_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});