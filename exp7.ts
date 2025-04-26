function student(name:string,branch:string,cgpa:number)
{
console.log("student name:"+name)
console.log("student branch:"+branch)
console.log("student cgpa:"+cgpa)
}
function studentdefault(name:string="ravi",branch:string="cse",cgpa:number=95)
{
console.log("student name:"+name)
console.log("student branch:"+branch)
console.log("student cgpa:"+cgpa)
}
function studentdetails(name:string,rollno:string,sgpa:number)
{
console.log("student name:"+name)
console.log("student rollno:"+rollno)
console.log("student sgpa:"+sgpa)
}
function studentmarks(...s:number[])
{
var i;
var sum:number=0;
var avg;
for(i=0;i<s.length;i++)
{
sum=sum+s[i];
}
console.log("total marks:"+sum)
console.log("Average marks:"+sum/(s.length))
}
student("dinesh","cse",89)
studentdefault()
studentdetails("vamsi","cse",85)
studentmarks(94,97,99,66,89,85)
studentdetails("sandeep","512",80)
studentmarks(100, 67, 83, 76, 98);