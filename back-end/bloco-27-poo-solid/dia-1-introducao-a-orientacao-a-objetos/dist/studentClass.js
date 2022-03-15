"use strict";
class Student {
    constructor(_name, _registration, _grades, _jobs) {
        this._name = _name;
        this._registration = _registration;
        this._grades = _grades;
        this._jobs = _jobs;
    }
    sumGrades(grades) {
        if (grades.length != 4)
            return `Operação falhou, falta notas!`;
        return grades.reduce((total, current) => total + current);
    }
    averageGrades(totalGrades) {
        return totalGrades / 4;
    }
    get getGrade() {
        return this._grades;
    }
}
const st1 = new Student('Yasmin', '5326589', [10, 8, 9.5], [10, 9]);
console.log(st1.sumGrades(st1.getGrade));
