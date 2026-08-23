// ================= CÂU 1 & 2 =================
namespace Q1_Q2 {
  export class Person {
    constructor(
      public name: string,
      public age: number,
    ) {}
    display(): void {
      console.log(`Person - Name: ${this.name}, Age: ${this.age}`);
    }
  }

  export class Student extends Person {
    constructor(
      name: string,
      age: number,
      public grade: string,
    ) {
      super(name, age);
    }
    displayAll(): void {
      this.display();
      console.log(`Grade: ${this.grade}`);
    }
  }
}

console.log("\n--- Câu 1 & 2: Person và Student ---");
const student = new Q1_Q2.Student("Alice", 20, "Computer Science");
student.displayAll();

// ================= CÂU 3 =================
namespace Q3 {
  export class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number,
    ) {}
    showInfo(): void {
      console.log(`Car: ${this.year} ${this.brand} ${this.model}`);
    }
  }
}

console.log("\n--- Câu 3: Car ---");
const car = new Q3.Car("Toyota", "Camry", 2022);
car.showInfo();

// ================= CÂU 4 =================
namespace Q4 {
  export class Rectangle {
    constructor(
      public width: number,
      public height: number,
    ) {}
    getArea(): number {
      return this.width * this.height;
    }
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
}

console.log("\n--- Câu 4: Rectangle ---");
const rect = new Q4.Rectangle(5, 10);
console.log(`Area: ${rect.getArea()}, Perimeter: ${rect.getPerimeter()}`);

// ================= CÂU 5 =================
namespace Q5 {
  export class BankAccount {
    constructor(public balance: number = 0) {}
    deposit(amount: number): void {
      this.balance += amount;
    }
    withdraw(amount: number): void {
      if (amount <= this.balance) this.balance -= amount;
      else console.log("Insufficient funds");
    }
  }
}

console.log("\n--- Câu 5: BankAccount ---");
const account = new Q5.BankAccount(500);
account.deposit(200);
account.withdraw(100);
console.log(`Balance after transactions: $${account.balance}`);

// ================= CÂU 6 =================
namespace Q6 {
  export class Book {
    constructor(
      public title: string,
      public author: string,
      public year: number,
    ) {}
  }
}

console.log("\n--- Câu 6: Book ---");
const book = new Q6.Book("Clean Code", "Robert C. Martin", 2008);
console.log(book);

// ================= CÂU 7 =================
namespace Q7 {
  export class User {
    private _name: string;
    constructor(name: string) {
      this._name = name;
    }

    get name(): string {
      return this._name;
    }
    set name(newName: string) {
      this._name = newName;
    }
  }
}

console.log("\n--- Câu 7: User (Getter/Setter) ---");
const user = new Q7.User("JohnDoe");
console.log(`Old name: ${user.name}`);
user.name = "JaneDoe";
console.log(`New name: ${user.name}`);

// ================= CÂU 8 =================
namespace Q8 {
  export class Product {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }
  const products: Product[] = [
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Monitor", 150),
  ];
  // Filter products with price > 100
  export const expensiveProducts = products.filter((p) => p.price > 100);
}

console.log("\n--- Câu 8: Filter Products ---");
console.log("Expensive products (> $100):", Q8.expensiveProducts);

// ================= CÂU 9 =================
namespace Q9 {
  export interface Animal {
    name: string;
    sound(): void;
  }
}

console.log("\n--- Câu 9: Interface Animal ---");
const myAnimal: Q9.Animal = {
  name: "Corgi",
  sound: () => console.log("Gâu gâu!"),
};
console.log(myAnimal.name);
myAnimal.sound();

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

console.log("\n--- Câu 10: Access Modifiers ---");
const acc = new Q10.Account("Giá trị Readonly");
console.log(acc.publicField);
console.log(acc.readonlyField);
// console.log(acc.privateField); // Lỗi nếu bỏ comment vì đây là private

// ================= CÂU 11 =================
namespace Q11 {
  export class Animal {
    constructor(public name: string) {}
  }
  export class Dog extends Animal {
    bark(): void {
      console.log("Woof!");
    }
  }
  export class Cat extends Animal {
    meow(): void {
      console.log("Meow!");
    }
  }
}

console.log("\n--- Câu 11: Kế thừa cơ bản ---");
const dog = new Q11.Dog("Rex");
const cat = new Q11.Cat("Mimi");
dog.bark();
cat.meow();

// ================= CÂU 12 =================
namespace Q12 {
  export interface Flyable {
    fly(): void;
  }
  export interface Swimmable {
    swim(): void;
  }

  export class Bird implements Flyable {
    fly(): void {
      console.log("Bird is flying");
    }
  }
  export class Fish implements Swimmable {
    swim(): void {
      console.log("Fish is swimming");
    }
  }
}

console.log("\n--- Câu 12: Implement Interfaces ---");
const bird = new Q12.Bird();
const fish = new Q12.Fish();
bird.fly();
fish.swim();

// ================= CÂU 13 =================
namespace Q13 {
  export abstract class Shape {
    abstract area(): number;
  }
  export class Square extends Shape {
    constructor(public side: number) {
      super();
    }
    area(): number {
      return this.side * this.side;
    }
  }
  export class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
}

console.log("\n--- Câu 13: Abstract Class Shape ---");
const square = new Q13.Square(4);
const circle = new Q13.Circle(3);
console.log(`Square Area: ${square.area()}`);
console.log(`Circle Area: ${circle.area().toFixed(2)}`);

// ================= CÂU 14 =================
namespace Q14 {
  export class Employee {
    constructor(public name: string) {}
  }
  export class Manager extends Employee {
    assignTask(): void {
      console.log(`${this.name} is assigning tasks.`);
    }
  }
  export class Developer extends Employee {
    writeCode(): void {
      console.log(`${this.name} is writing code.`);
    }
  }
}

console.log("\n--- Câu 14: Employee ---");
const manager = new Q14.Manager("Mr. Boss");
const dev = new Q14.Developer("Bob");
manager.assignTask();
dev.writeCode();

// ================= CÂU 15 =================
namespace Q15 {
  export class Book {
    constructor(public title: string) {}
  }
  export class User {
    constructor(public name: string) {}
  }

  export class Library {
    books: Book[] = [];
    users: User[] = [];
    addBook(book: Book): void {
      this.books.push(book);
    }
    addUser(user: User): void {
      this.users.push(user);
    }
  }
}

console.log("\n--- Câu 15: Library ---");
const lib = new Q15.Library();
lib.addBook(new Q15.Book("Design Patterns"));
lib.addUser(new Q15.User("Alice"));
console.log("Library Data:", lib);

// ================= CÂU 16 =================
namespace Q16 {
    export class Box<T> {
        constructor(public value: T) {}
        getValue(): T { return this.value; }
    }
}

console.log("\n--- Câu 16: Generics ---");
const numberBox = new Q16.Box<number>(42);
const stringBox = new Q16.Box<string>("Hello Generics");
console.log(
  `Number Box: ${numberBox.getValue()}, String Box: ${stringBox.getValue()}`,
);

// ================= CÂU 17 =================
namespace Q17 {
    export class Logger {
        private static instance: Logger;
        private constructor() {} // Ngăn chặn việc khởi tạo từ bên ngoài
        
        static getInstance(): Logger {
            if (!Logger.instance) {
                Logger.instance = new Logger();
            }
            return Logger.instance;
        }
        log(msg: string): void { console.log(`[LOG]: ${msg}`); }
    }
}

console.log("\n--- Câu 17: Singleton Pattern ---");
const logger1 = Q17.Logger.getInstance();
const logger2 = Q17.Logger.getInstance();
logger1.log("This is a singleton logger!");
console.log(`logger1 === logger2: ${logger1 === logger2}`);

// ================= CÂU 18 =================
namespace Q18 {
    export class MathUtil {
        static add(a: number, b: number): number { return a + b; }
        static subtract(a: number, b: number): number { return a - b; }
        static multiply(a: number, b: number): number { return a * b; }
        static divide(a: number, b: number): number { return a / b; }
    }
}

console.log("\n--- Câu 18: Static MathUtil ---");
console.log(`5 + 3 = ${Q18.MathUtil.add(5, 3)}`);
console.log(`10 / 2 = ${Q18.MathUtil.divide(10, 2)}`);

// ================= CÂU 19 =================
namespace Q19 {
    export class Animal {
        makeSound(): void { console.log("Some generic sound"); }
    }
    export class Dog extends Animal {
        makeSound(): void { console.log("Bark!"); } // Overriding
    }
    export class Cat extends Animal {
        makeSound(): void { console.log("Meow!"); } // Overriding
    }
}

console.log("\n--- Câu 19: Đa hình (Polymorphism) ---");
const animals: Q19.Animal[] = [new Q19.Dog(), new Q19.Cat()];
animals.forEach(a => a.makeSound()); // Gọi đúng hàm của từng subclass

// ================= CÂU 20 =================
namespace Q20 {
    export interface Vehicle {
        drive(): void;
    }
    export class Car implements Vehicle {
        drive(): void { console.log("Driving a car"); }
    }
    export class Bike implements Vehicle {
        drive(): void { console.log("Riding a bike"); }
    }
}

console.log("\n--- Câu 20: Vehicle Interface ---");
const myCar = new Q20.Car();
const myBike = new Q20.Bike();
myCar.drive();
myBike.drive();

// ================= CÂU 21 =================
namespace Q21 {
    export class Repository<T> {
        private items: T[] = [];
        add(item: T): void { this.items.push(item); }
        getAll(): T[] { return this.items; }
    }
}

console.log("\n--- Câu 21: Generic Repository ---");
const repo = new Q21.Repository<string>();
repo.add("Item A");
repo.add("Item B");
console.log(repo.getAll());

// ================= CÂU 22 =================
namespace Q22 {
    export class Stack<T> {
        private elements: T[] = [];
        push(item: T): void { this.elements.push(item); }
        pop(): T | undefined { return this.elements.pop(); }
        peek(): T | undefined { return this.elements[this.elements.length - 1]; }
        isEmpty(): boolean { return this.elements.length === 0; }
    }
}

console.log("\n--- Câu 22: Stack Data Structure ---");
const stack = new Q22.Stack<number>();
stack.push(10);
stack.push(20);
console.log(`Pop: ${stack.pop()}`); // Lấy ra 20
console.log(`Peek: ${stack.peek()}`); // Xem đỉnh stack: 10
console.log(`Is Empty? ${stack.isEmpty()}`);

// ================= CÂU 23 =================
namespace Q23 {
    export interface Payment {
        pay(amount: number): void;
    }
    export class CashPayment implements Payment {
        pay(amount: number): void { console.log(`Paid $${amount} in cash.`); }
    }
    export class CardPayment implements Payment {
        pay(amount: number): void { console.log(`Paid $${amount} with card.`); }
    }
}

console.log("\n--- Câu 23: Interface Payment ---");
const cash = new Q23.CashPayment();
const card = new Q23.CardPayment();
cash.pay(100);
card.pay(250);

// ================= CÂU 24 =================
namespace Q24 {
    export abstract class Appliance {
        abstract turnOn(): void;
    }
    export class Fan extends Appliance {
        turnOn(): void { console.log("Fan is spinning."); }
    }
    export class AirConditioner extends Appliance {
        turnOn(): void { console.log("AC is cooling."); }
    }
}

console.log("\n--- Câu 24: Abstract Appliance ---");
const fan = new Q24.Fan();
const ac = new Q24.AirConditioner();
fan.turnOn();
ac.turnOn();

// ================= CÂU 25 =================
namespace Q25 {
    export class Shape {
        static describe(): void { console.log("This is a shape."); }
    }
}

console.log("\n--- Câu 25: Static Method ---");
Q25.Shape.describe();

// ================= CÂU 26 =================
namespace Q26 {
    export class Product {
        constructor(public name: string, public price: number) {}
    }
    export class Order {
        constructor(public products: Product[]) {}
        calculateTotal(): number {
            return this.products.reduce((total, p) => total + p.price, 0);
        }
    }
}

console.log("\n--- Câu 26: Order Total ---");
const order = new Q26.Order([
  new Q26.Product("Bàn phím", 50),
  new Q26.Product("Chuột", 30),
]);
console.log(`Total Order Price: $${order.calculateTotal()}`);

// ================= CÂU 27 =================
namespace Q27 {
    export class Person {
        constructor(public name: string) {}
    }
    export class Teacher extends Person {
        constructor(name: string, public subject: string) { super(name); }
        introduce(): void {
            console.log(`Hi, I'm ${this.name} and I teach ${this.subject}.`);
        }
    }
}

console.log("\n--- Câu 27: Teacher ---");
const teacher = new Q27.Teacher("Mr. White", "Chemistry");
teacher.introduce();

// ================= CÂU 28 =================
namespace Q28 {
    export class Animal {
        protected makeSound(): void { console.log("Animal sound"); }
    }
    export class Dog extends Animal {
        public makeSound(): void { console.log("Woof!"); }
    }
    export class Cat extends Animal {
        public makeSound(): void { console.log("Meow!"); }
    }
}

console.log("\n--- Câu 28: Override Protected Method ---");
const dog28 = new Q28.Dog();
dog28.makeSound(); 

// ================= CÂU 29 =================
namespace Q29 {
    export interface Movable { move(): void; }
    export class Car implements Movable {
        move(): void { console.log("Car drives."); }
    }
    export class Robot implements Movable {
        move(): void { console.log("Robot walks."); }
    }
}

console.log("\n--- Câu 29: Movable Interface ---");
const robot = new Q29.Robot();
robot.move();

// ================= CÂU 30 =================
namespace Q30 {
    export class Student { constructor(public name: string) {} }
    export class Teacher { constructor(public name: string) {} }
    
    export class School {
        constructor(public students: Student[], public teachers: Teacher[]) {}
        displayInfo(): void {
            console.log(`School has ${this.students.length} students and ${this.teachers.length} teachers.`);
        }
    }
}

console.log("\n--- Câu 30: School Info ---");
const school = new Q30.School(
  [new Q30.Student("SV1"), new Q30.Student("SV2")],
  [new Q30.Teacher("GV1")],
);
school.displayInfo();
console.log("\n================ HOÀN TẤT ================\n");
