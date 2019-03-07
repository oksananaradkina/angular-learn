export interface IFamily {
    f: string,
    i: string,
    o: string,
    gender: 'male' | 'female',
    year: number
}

export const myArray: IFamily[] = [
    { f: 'Глазков', i: 'Павел', o: 'Борисович', gender: 'male', year: 1976 },
    { f: 'Глазков', i: 'Павел', o: 'Борисович', gender: 'male', year: 1976 },
    { f: 'Глазков', i: 'Павел', o: 'Борисович', gender: 'male', year: 1976 }
]
