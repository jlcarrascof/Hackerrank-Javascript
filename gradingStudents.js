function gradingStudents(grades) {
    let roundedGrades = [];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];

        let module = grade % 5
        let difference = 5 - module;

        if (module >= 3) {
            if (grade + difference >= 40) {
                roundedGrades.push(grade + difference);
            } else {
                roundedGrades.push(grade);
            }
        } else {
            roundedGrades.push(grade);
        }
    }

    return roundedGrades;
}

console.log(gradingStudents([73, 67, 40, 33]));
