
export function convert(value:number, baseUnit:string, convertUnit: string) {
    let units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

    let indexBase: number = units.indexOf(baseUnit);
    let indexConvert: number = units.indexOf(convertUnit);
    let subIndex: number = Math.abs(indexBase - indexConvert);
    if(indexBase > indexConvert) return value / Math.pow(10,subIndex);
    return value * Math.pow(10,subIndex);
}