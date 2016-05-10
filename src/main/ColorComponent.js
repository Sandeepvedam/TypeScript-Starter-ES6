"use strict";
const ColorManager_1 = require('../color/ColorManager');
class ColorModule {
    constructor() {
        this.colorObject = new ColorManager_1.ColorManager();
        //this.getData();
    }
    getData() {
        let data = this.colorObject.loadData();
        alert(data);
    }
}
exports.ColorModule = ColorModule;
