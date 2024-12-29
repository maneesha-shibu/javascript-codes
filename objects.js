const s1 = {
    Name : 'maneesha',
    age :24,
    fees_paid: 3400.78,
    work_exp: {
        ABC: '3 Months',
        XYZ: '2 Months'
    },
    Marks : {
        Maths: 45,
        Science: 56
    },
    Percentage: ['sem-1: 84', 'sem-2: 86', 'sem-3: 88'],
    performance: ()=>console.log('Good')
}
// console.log(s1,  typeof s1);
// console.log(s1.Name);
console.log(s1.Name," Marks of Math:",s1.Marks.Maths);