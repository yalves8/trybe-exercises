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
class Person {
    constructor(name, birthday) {
        this._name = String();
        this._birthday = new Date();
        this.name = name,
            this.birthday = birthday;
    }
    ;
    get name() {
        return this._name;
    }
    set name(value) {
        this.validName(value);
        this._name = value;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(date) {
        this.validateAge(date);
        this._birthday = date;
    }
    validName(name) {
        if (name.length < 3)
            throw new Error('Deve conter acima de 3 caracteres');
    }
    getAge(value) {
        const atual = new Date().getFullYear();
        const ageDate = value.getFullYear();
        return atual - ageDate;
    }
    validateAge(value) {
        if (this.getAge(value) < 0)
            throw new Error('Data incorreta');
        if (this.getAge(value) > 120)
            throw new Error('Dead!');
        // return value;
    }
}
/* const st1 = new Student('Yasmin', '5326589',[10,8,9.5], [10,9]);
console.log(st1.sumGrades(st1.getGrade)); */
const p1 = new Person('Yasmin', new Date('2023/02/15'));
// p1.birthday(new Date('2023/02/15'));
console.log(p1);
