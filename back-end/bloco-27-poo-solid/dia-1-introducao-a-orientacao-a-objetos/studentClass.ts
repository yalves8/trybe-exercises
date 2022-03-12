class Student {

    constructor(
        private _name: string,
        private _registration: string,
        private _grades: number[],
        private _jobs: number[],
    ) {}

    sumGrades(grades: number[]) {
        if(grades.length != 4) return `Operação falhou, falta notas!`;
        return grades.reduce((total, current) => total+current);
    }

    averageGrades(totalGrades: number) {
        return totalGrades/4;
    }

    get getGrade() {
        return this._grades;
    }
}

const st1 = new Student('Yasmin', '5326589',[10,8,9.5], [10,9]);
console.log(st1.sumGrades(st1.getGrade));

