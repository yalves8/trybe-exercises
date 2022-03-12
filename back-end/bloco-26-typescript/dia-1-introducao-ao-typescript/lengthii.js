const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(value, baseUnit, convertUnit) {
    const indexBase = units.indexOf(baseUnit);
    const indexConvert = units.indexOf(convertUnit);
    const subIndex = Math.abs(indexBase - indexConvert);
    if(indexBase > indexConvert) return value / Math.pow(10,subIndex);
    return value * Math.pow(10,subIndex);
}
// const c = 'm';
console.log(convert(10,'m','km'));