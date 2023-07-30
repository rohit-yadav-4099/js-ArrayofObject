
// Q.1.....

let studentRecords1 =
            [{name: "John", id: 123, marks: 98},
            {name: "Baba", id: 101, marks: 23},
            {name: "yaga", id: 200, marks: 45},
            {name: "wick", id: 115, marks: 75}];

let res = studentRecords1.map((item)=>item.name.toUpperCase());

         console.log(res);


// Q.2.....

let studentRecords2 =
            [{name: "John", id: 123, marks: 98},
            {name: "Baba", id: 101, marks: 23},
            {name: "yaga", id: 200, marks: 45},
            {name: "wick", id: 115, marks: 75}];

let res2=studentRecords2.filter((item)=>item.marks>50)
         console.log(res2)

// Q.3.....

let studentRecords3 =
            [{name: "John", id: 123, marks: 98},
            {name: "Baba", id: 101, marks: 23},
            {name: "yaga", id: 200, marks: 45},
            {name: "wick", id: 115, marks: 75}];

let res3=studentRecords3.filter((item)=>item.marks>50&&item.id>120)
         console.log(res3)


// Q.4.....

let studentRecords4 =
            [{name: "John", id: 123, marks: 98},
            {name: "Baba", id: 101, marks: 23},
            {name: "yaga", id: 200, marks: 45},
            {name: "wick", id: 115, marks: 75}];

let res4=0;
studentRecords4.map((item)=>res4+=item.marks);
         console.log(res4);

// Q.5.....

let studentRecords5 =
            [{name: "John", id: 123, marks: 98},
            {name: "Baba", id: 101, marks: 23},
            {name: "yaga", id: 200, marks: 45},
            {name: "wick", id: 115, marks: 75}];

let res5=studentRecords5.filter((item)=>item.marks>50).map((item)=>item.name)
         console.log(res5)

// Q.6.....

let studentRecords6 =
            [{name: "John", id: 123, marks: 98},
            {name: "Baba", id: 101, marks: 23},
            {name: "yaga", id: 200, marks: 45},
            {name: "wick", id: 115, marks: 75}];

let res6=0;
studentRecords6.filter((item)=>item.id>120).map((item)=>res6+=item.marks);
         console.log(res6);

// Q.7.....

let studentRecords7 =
            [{name: "John", id: 123, marks: 98},
            {name: "Baba", id: 101, marks: 23},
            {name: "yaga", id: 200, marks: 45},
            {name: "wick", id: 115, marks: 75}];

let res7=0; 
let markupdate = studentRecords7.map((item)=>{
    if(item.marks<50){
        item.marks+=15
    }
    return item;

}).map((item)=>item.marks>50? res7+=item.marks:null)
console.log(res7)

// Q.8.....

function createStudent(name, sclass, rollNo){
    return{name, class: sclass, roll_no: rollNo};
}

let student = [
    createStudent("John", 2, 10),
    createStudent("Jane", 3, 12),
    createStudent("markWood", 12, 10),
    createStudent("David", 2, 8),
    createStudent("Sarah", 3, 10),
    createStudent("Virat", 4, 10)
];

console.log(student[0].name);
console.log(student[0].class);
console.log(student[0].roll_no);

console.log(student[3].name)