function student(name, branch, cgpa) {
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}
function studentdefault(name, branch, cgpa) {
    if (name === void 0) { name = "ravi"; }
    if (branch === void 0) { branch = "cse"; }
    if (cgpa === void 0) { cgpa = 95; }
    console.log("student name:" + name);
    console.log("student branch:" + branch);
    console.log("student cgpa:" + cgpa);
}
function studentdetails(name, rollno, sgpa) {
    console.log("student name:" + name);
    console.log("student rollno:" + rollno);
    console.log("student sgpa:" + sgpa);
}
function studentmarks() {
    var s = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        s[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    var avg;
    for (i = 0; i < s.length; i++) {
        sum = sum + s[i];
    }
    console.log("total marks:" + sum);
    console.log("Average marks:" + sum / (s.length));
}
student("dinesh", "cse", 89);
studentdefault();
studentdetails("vamsi", "cse", 85);
studentmarks(94, 97, 99, 66, 89, 85);
studentdetails("sandeep", "512", 80);
studentmarks(100, 67, 83, 76, 98);
