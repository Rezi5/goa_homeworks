function compare(student1, student2) {
    if (student1.grade > student2.grade) {
        return student1.name;
    } else if (student1.grade < student2.grade) {
        return student2.name;
    } else {
        if (student1.id < student2.id) {
            return student1.name;
        } else if (student1.id > student2.id) {
            return student2.name;
        } else {
            return "Both are equal";
        }
    }
}

const studentA = { name: "Rezi", id: 1, grade: 95 };
const studentB = { name: "Nika", id: 2, grade: 95 };

console.log(compare(studentA, studentB));