"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
function convert(value, baseUnit, convertUnit) {
    let units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    let indexBase = units.indexOf(baseUnit);
    let indexConvert = units.indexOf(convertUnit);
    let subIndex = Math.abs(indexBase - indexConvert);
    if (indexBase > indexConvert)
        return value / Math.pow(10, subIndex);
    return value * Math.pow(10, subIndex);
}
exports.convert = convert;
