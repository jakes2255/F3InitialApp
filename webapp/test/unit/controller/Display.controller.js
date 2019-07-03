/*global QUnit*/

sap.ui.define([
	"com/study/Z_F3_InitialApp/controller/Display.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Display Controller");

	QUnit.test("I should test the Display controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});