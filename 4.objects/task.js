function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

    let student1 = new Student("Ivan", "male", 15);
    let student2 = new Student("Anna", "female", 18);

    Student.prototype.setSubject = function (subjectName) {
        this.subject = subjectName;
    }


    Student.prototype.addMarks = function (...marksToAdd) {
        if(!this.marks) {
            console.log(`${this.name} отчислен.`);
        } else {
            this.marks.push(...marksToAdd);
        }

    }

    Student.prototype.getAverage = function () {
        if(!this.marks || this.marks.length === 0){
            return 0;
        } else {
            return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
        }

    }

    Student.prototype.exclude = function (reason) {
        delete this.subject;
        delete  this.marks;
        this.excluded = reason;

    }
