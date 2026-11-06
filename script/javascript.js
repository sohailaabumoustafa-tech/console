
class student{
    constructor(id,name,grades,attendance){
this.id=id;
this.name=name;
this.grades=grades;
this.attendance=attendance;
    }
getAverage(){
    const sum=this.grades.reduce((sum,grade)=>sum+grade,0)
    return sum/this.grades.length
}

getGrade(){
    const avg=this.getAverage();
    if(avg>=85)return("A");
     else if (avg>=75)return("B");
   else if(avg>=65)return("C");
  else if(avg>=50)return("D");
    else return("F");
}



getResult(){
  const avg=this.getAverage();
    if (avg>=50 &&this.attendance>=75){

     return"ناجح"
    }else{
         return "يحتاج مراجعة"
    }
}

}

 const studentsList=[
new student(1,"sohaila",[90,85,95],95),
new student(2,"hayah",[40,43,47],90),
new student(3,"hamza",[91,80,94],85),
new student(4,"hoor",[41,44,49],80),
 ];

 const strugglingStudents=studentsList.filter(s=>s.getAverage()>=40 && s.getAverage()<=49);
 const upgradedGrades=strugglingStudents.map(s=>s.getAverage()+5)
 const totalgrades=upgradedGrades.reduce((sum,grade)=>sum+grade,0)
 const upgradedAverage=totalgrades/strugglingStudents.length;

//  let upgradedAverage=0;/
//  if(strugglingStudents>0){/
//  const upgradedAverage=totalgrades/strugglingStudents.length;/
//  }/




studentsList.forEach((s) => {
  console.log(s.name, s.getAverage(), s.getGrade(), s.getResult());
});


console.log("الطلاب المتعسرين:", strugglingStudents);
console.log("درجاتهم بعد الرأفة:", upgradedGrades);
console.log("المجموع:", totalgrades);
console.log("المتوسط بعد الرأفة:", upgradedAverage);



 
































































































































































