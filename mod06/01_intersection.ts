interface IEmployee {
    id: number;
    name: string;
}
interface ISales {
    id: string;
    bonus: number;
}
type Sales = IEmployee & ISales;

let s: Sales = {
    id: 1,
    name: 'mary',
    bonus: 1000
};

console.log(s.id, s.name, s.bonus);