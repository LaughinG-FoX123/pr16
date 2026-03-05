
// 1
class Figure {
    getArea() {
        return `Area` 
    }
}

class Circle extends Figure{
    getArea() {
        return `Метод для вычесления площади` 
    }
}

// 2
class Transport {
    brand;
    year;
}

class Car extends Transport{
    koles;
}

class Bike extends Transport{
    koles;
    power;
}

// 3 
class Employee {
    calculateSalary() {
        return 12
    }
}

class Manager extends Employee  {
    calculateSalary() {
        return `Другой способ расчёта`
    }
}


class Developer extends Employee  {
    calculateSalary() {
        return `Абсолютно другой способ расчёта`
    }
}

// 4 
class Animal {
     sound() {
        console.log(`sound`)
     }
}

class Cat extends Animal{
     sound() {
        console.log(`sound1`)
     }
}
class Dog extends Animal{
     sound() {
        console.log(`sound12`)
     }
}
class Cow extends Animal{
     sound() {
        console.log(`sound13`)
     }
}


// 5
class Rectangle {
    getPerimetre() {
        return `Perimetre`
    }

    getPloshad() {
        return `Ploshad`
    }
}

class Square extends Rectangle {
    constructor() {
        return `упрощённый конструктор`
    }
}

// 6 
class Book {
    name;
    year;
    author;
}

class Fiction extends Book {
    pages;
}

class NonFiction extends Book {
    language;
}


// 7 
class Product {
    getPrice() {
        return 122
    }
}

class DiscountedProduct extends Product {
    getPrice() {
        return 12
    }
}  

class  PremiumProduct extends Product {
    getPrice() {
        return 1200
    }
}  

// 8 

class Person {
    name;
    age;
}

class Student extends Person{
    course;
}

class Teacher extends Person{
    subject;
}

// 9 
class SecondAnimal {
    makeSound() {
        console.log(`sound`)
    }
}

class Mammal extends SecondAnimal {
    makeNewSound() {
        console.log(`bobr kurva`)
    }
    makeMYYYY() {
        console.log(`MYYYYY`)
    }
}

class Dog extends SecondAnimal {
    makeExactlyNewSound() {
        console.log(`bobr kurva. I perdole.`)
    }
}

// 10
class Shape {
    getArea()  {
        return `Area`
    }
}

class Triangle extends Shape {
    getArea()  {
        return `TriangleArea`
    }
}

class Rectangle extends Shape {
    getArea()  {
        return `RectangleArea`
    }
}
