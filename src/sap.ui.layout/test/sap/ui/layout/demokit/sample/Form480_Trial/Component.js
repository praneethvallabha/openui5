sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.ui.layout.sample.Form480_Trial.Component", {

		metadata : {
			rootView : {
				"viewName": "sap.ui.layout.sample.Form480_Trial.Page",
				"type": "XML",
				"async": true
			},
			dependencies : {
				libs : [
					"sap.m",
					"sap.ui.layout"
				]
			},
			config : {
				sample : {
					stretch : true,
					files : [
						"Page.view.xml",
						"Page.controller.js",
						"Change.fragment.xml",
						"Display.fragment.xml"
					]
				}
			}
		}
	});

	return Component;

});