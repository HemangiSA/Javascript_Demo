var students = [['abc', 80], ['def', 77], ['xyz', 88], ['yqt', 95], ['sql', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

alert("Average grade: " + (Avgmarks)/students.length);