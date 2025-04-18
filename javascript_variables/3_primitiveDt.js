//Symbols

const rahulID = Symbol("studentID");
const priyaID = Symbol("studentID");

const students = {
    Rahul : {
        name : "Rahul",
        age : 19,
        [rahulID] : 135

    },
    Priya : {
        name : "Priya",
        age : 20,
        [priyaID] : 153
    }
}

console.log(students.Rahul)
console.log(students.Priya)

for(let key in students.Rahul){
    console.log(key)
}

students.Rahul["studentId"] = "HACKED";
console.log(students.Rahul["studentId"]); // HACKED

console.log(students.Rahul[rahulID]); // 135

