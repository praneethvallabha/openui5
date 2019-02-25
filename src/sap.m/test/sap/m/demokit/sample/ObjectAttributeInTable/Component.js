sap.ui.define(['sap/ui/core/UIComponent'],
		function(UIComponent) {
		"use strict";
		var Component = UIComponent.extend("sap.m.sample.ObjectAttributeInTable.Component", {
			metadata: {
				rootView: "sap.m.sample.ObjectAttributeInTable.Table",
				dependencies: {
					libs: [
						"sap.m"
					]
				},
				config: {
					sample: {
						files: [
							"Table.view.xml", "Table.controller.js"
						]
					}
				}
			}
		});

	return Component;

});