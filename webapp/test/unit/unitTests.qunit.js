/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/study/Z_F3_InitialApp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});