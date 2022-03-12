class Student {

    constructor(
        private _name: string,
        private _registration: string,
        private _grades: number[],
        private _jobs: number[],
    ) { }

    sumGrades(grades: number[]) {
        if (grades.length != 4) return `Operação falhou, falta notas!`;
        return grades.reduce((total, current) => total + current);
    }

    averageGrades(totalGrades: number) {
        return totalGrades / 4;
    }

    get getGrade() {
        return this._grades;
    }
}

class Person {
    private _name: string = String();
    private _birthday: Date = new Date();
    constructor(name: string, birthday: Date) {
        this.name = name,
        this.birthday = birthday;
    };

    get name() {
        return this._name;
    }

    set name(value: string) {
        this.validName(value);
        this._name = value;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(date: Date) {
        this.validateAge(date);
        this._birthday = date;
    }

    private validName(name: string): void {
        if (name.length < 3) throw new Error('Deve conter acima de 3 caracteres');
    }

    getAge(value: Date): number {
        const atual = new Date().getFullYear();
        const ageDate = value.getFullYear();
        return atual - ageDate;
    }

    private validateAge(value: Date): void {
        if (this.getAge(value) < 0) throw new Error('Data incorreta');
        if (this.getAge(value) > 120) throw new Error('Dead!');
    }

}


const p1 = new Person('Yasmin', new Date('2023/02/15'));
console.log(p1);


