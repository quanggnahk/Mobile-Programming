// ================= CÂU 1 & 2 =================
namespace Q1_Q2 {
    export class Person {
        constructor(public name: string, public age: number) {}
        display(): void {
            console.log(`Person - Name: ${this.name}, Age: ${this.age}`);
        }
    }

    export class Student extends Person {
        constructor(name: string, age: number, public grade: string) {
            super(name, age);
        }
        displayAll(): void {
            this.display();
            console.log(`Grade: ${this.grade}`);
        }
    }
}

// ================= CÂU 3 =================
namespace Q3 {
    export class Car {
        constructor(public brand: string, public model: string, public year: number) {}
        showInfo(): void {
            console.log(`Car: ${this.year} ${this.brand} ${this.model}`);
        }
    }
}

// ================= CÂU 4 =================
namespace Q4 {
    export class Rectangle {
        constructor(public width: number, public height: number) {}
        getArea(): number { return this.width * this.height; }
        getPerimeter(): number { return 2 * (this.width + this.height); }
    }
}

// ================= CÂU 5 =================
namespace Q5 {
    export class BankAccount {
        constructor(public balance: number = 0) {}
        deposit(amount: number): void { this.balance += amount; }
        withdraw(amount: number): void {
            if (amount <= this.balance) this.balance -= amount;
            else console.log("Insufficient funds");
        }
    }
}

// ================= CÂU 6 =================
namespace Q6 {
    export class Book {
        constructor(public title: string, public author: string, public year: number) {}
    }
}

// ================= CÂU 7 =================
namespace Q7 {
    export class User {
        private _name: string;
        constructor(name: string) { this._name = name; }
        
        get name(): string { return this._name; }
        set name(newName: string) { this._name = newName; }
    }
}

// ================= CÂU 8 =================
namespace Q8 {
    export class Product {
        constructor(public name: string, public price: number) {}
    }
    const products: Product[] = [
        new Product("Laptop", 1200),
        new Product("Mouse", 25),
        new Product("Monitor", 150)
    ];
    // Filter products with price > 100
    export const expensiveProducts = products.filter(p => p.price > 100);
}

// ================= CÂU 9 =================
namespace Q9 {
    export interface Animal {
        name: string;
        sound(): void;
    }
}

// ================= CÂU 10 =================
namespace Q10 {
    export class Account {
        public publicField: string = "Anyone can access";
        private privateField: string = "Only class can access";
        public readonly readonlyField: string = "Can only be assigned once";
        
        constructor(readOnlyVal: string) {
            this.readonlyField = readOnlyVal;
        }
    }
}

// ================= CÂU 11 =================
namespace Q11 {
    export class Animal {
        constructor(public name: string) {}
    }
    export class Dog extends Animal {
        bark(): void { console.log("Woof!"); }
    }
    export class Cat extends Animal {
        meow(): void { console.log("Meow!"); }
    }
}

// ================= CÂU 12 =================
namespace Q12 {
    export interface Flyable { fly(): void; }
    export interface Swimmable { swim(): void; }
    
    export class Bird implements Flyable {
        fly(): void { console.log("Bird is flying"); }
    }
    export class Fish implements Swimmable {
        swim(): void { console.log("Fish is swimming"); }
    }
}

// ================= CÂU 13 =================
namespace Q13 {
    export abstract class Shape {
        abstract area(): number;
    }
    export class Square extends Shape {
        constructor(public side: number) { super(); }
        area(): number { return this.side * this.side; }
    }
    export class Circle extends Shape {
        constructor(public radius: number) { super(); }
        area(): number { return Math.PI * this.radius * this.radius; }
    }
}

// ================= CÂU 14 =================
namespace Q14 {
    export class Employee {
        constructor(public name: string) {}
    }
    export class Manager extends Employee {
        assignTask(): void { console.log(`${this.name} is assigning tasks.`); }
    }
    export class Developer extends Employee {
        writeCode(): void { console.log(`${this.name} is writing code.`); }
    }
}

// ================= CÂU 15 =================
namespace Q15 {
    export class Book { constructor(public title: string) {} }
    export class User { constructor(public name: string) {} }
    
    export class Library {
        books: Book[] = [];
        users: User[] = [];
        addBook(book: Book): void { this.books.push(book); }
        addUser(user: User): void { this.users.push(user); }
    }
}