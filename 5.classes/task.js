class PrintEditionItem {
    constructor(name, releaseDate, pagesCount,) {

        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0
        } else if (number > 100) {
            this._state = 100
        } else this._state = number;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, PagesCount) {
        super(name, releaseDate, PagesCount);
        this.type = 'magazine';
    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, PagesCount) {
        super(name, releaseDate, PagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {

    constructor(author, name, releaseDate, PagesCount) {
        super(author, name, releaseDate, PagesCount);
        this.type = "novel"
    }
}

class FantasticBook extends Book {

    constructor(author, name, releaseDate, PagesCount) {
        super(author, name, releaseDate, PagesCount);
        this.type = "fantastic"
    }
}


class DetectiveBook extends Book {

    constructor(author, name, releaseDate, PagesCount) {
        super(author, name, releaseDate, PagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);

        }
    }

    findBookBy(type, value) {
        for (const book of this.books) {
            if (book[type] === value) {
                return book;

            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const removedBook = this.books.splice(i, 1);
                return removedBook[0];
            }
        }
        return null;
    }
}


const myLibrary = new Library('Библиотека на Никитинской');

myLibrary.addBook(
    new DetectiveBook('Team Lead',
        'Кто положил прод',
        2023,
        2000
    )
);

myLibrary.addBook(
    new FantasticBook('Developers',
        'Релиз в пятницу',
        1919,
        '502')
);

const givenBook = myLibrary.giveBookByName("Релиз в пятницу")
console.log(givenBook.name);
givenBook.state -= 40;
console.log(givenBook.state);
givenBook.fix();
console.log(givenBook.state);
myLibrary.addBook(givenBook);
console.log(myLibrary.findBookBy("name", "Релиз в пятницу"));


class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (!this.marks.hasOwnProperty(subject)) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark)

        }
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0;
        } else {
            return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
        }
    }

    getAverage() {
        const subject = Object.keys(this.marks);
        if (subject.length === 0) {
            return 0;
        }
        const totalSum = subject.reduce((acc, subject) => {
            return acc + this.getAverageBySubject(subject);
        }, 0);
        return totalSum / subject.length;

    }
}




