"use strict";
const jQuery = require('jquery');
const Q = require('q');
class ColorManager {
    constructor() {
    }
    loadData() {
        let defer = Q.defer();
        let dataUrl = 'json/data.json';
        jQuery.get(dataUrl, function (response) {
            let promises = [];
            for (let colors of response) {
                let promiseData = {
                    data: colors
                };
                promises.push(recommendationPromise);
            }
            defer.resolve(promises);
        });
        return defer.promise;
    }
}
exports.ColorManager = ColorManager;
