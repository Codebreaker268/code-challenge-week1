


// the value for marks should be numbers ranging from 0 to 100

    

//Assigning grades based on marks
// A grade should range from 80 to 100
// B grade should range from 60 to 79
// c grade should range from 49 to 59
// D grade should range from 40 to 49
// E grade should be anything less than 40

function studentGrade(marks){

if (marks>=80&&marks<=100){
    return "A";
}else if(marks>=60&&marks<80){
    return "B";
}else if(marks>=50&&marks<60){
    return "C";
}else if(marks>=40&&marks<50){
    return "D";
}else{
    return "E";
}
}
// promt to entermarks
let grade=prompt("Enter marks:");
let marks=parseFloat(grade);
if (!isNaN(marks)&& marks>= 0 && marks<=100){
    let grade=studentGrade(marks);
    console.log(`grade is ${grade}`);
}else{
    console.log("invalid entry")
}

