var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// for(var i = 0; i<students.length; i++){
//     console.log(students[i].age)
// }

// for(var i = 0; i<students.length; i++){
//     console.log(students[i].name+", " + students[i].city)
// }

// for(var i = 0; i <= students.length; i++){
//        var someStudents = students[0]
//        var someStudents2 = students[2]
//        var someStudents3 = students[3]
//        var allStudents = [someStudents, someStudents2, someStudents3]
        
//         console.log(allStudents[i].name +" is from " + allStudents[i].city)
    
// }

for(var i = 0; i < students.length; i++){
     if(students[i].age > 25 === true){
      console.log(students[i].name + " is older than 25")
     }
}