// Write a programm to print mark of student using for loop

Result={
    STUDENT_NAME: "MARKS OF STUDENT",
    ROHAN:54,
    RAHUL:84,
    NIKKU:101,
    MOHIT:94,

}
for (const key in Result) {
    const element = Result[key];
    console.log(key, ":", element)
}