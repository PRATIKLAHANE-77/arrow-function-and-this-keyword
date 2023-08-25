// Write an arrow function which returns the product of two numbers

const prod = (a,b) => {
    return a * b;
}

console.log(prod(2,3));

//  create a student object

const student = {
    name: 'pratik',
    age:23,
    education: 'B.tech',
    normal: function(){
        return this.name;
    },
    arr: () =>  this.age,
   

}

console.log(student.name + " " +  student.age + " " + student.education);
console.log(student.normal());
console.log(student.arr());
