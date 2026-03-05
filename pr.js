// 1
class Animal {
    name;
    age;
    eat() {
        console.log(`Животное ест`)
    }
    sleep() {
        console.log(`Животное спит`)
    }
}

class Dog extends Animal {
    breed;

    eat() {
        console.log("Собака ест")
    };

    bark() {
        console.log('Гав-Гав!')
    }
}

// 2
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand
        this.model= model
        this.year = year
    }

    displayInfo() {
        console.log(`Автомобиль: ${this.brand} ${this.model} ${this.year} года`);
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year)
        this.doors = doors
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Количество дверей: ${this.doors}`);
    }
}


// 3 
class Person {
    name;
    age;

    greet() {
        console.log(`Здарово, за##ал!`)
    }
}

class Student extends Person{
    course;
    greet() {
        console.log(`Здарово, ёпта!`)
    }
}

class Teacher extends Person{
    subject;

    greet() {
        console.log(`Здарово, немощи!`)
    }
}


//4 

let teacher = new Teacher()
let person = new Person()
function isTeacher(obj) {
    if (obj instanceof Teacher) {
        console.log(`Атас, учитель идёт`)
    } else if (obj instanceof Person){
        console.log(`Забейте, это левый чел`)
    }
}

isTeacher(teacher)
isTeacher(person)


// 5 
class SecondAnimal {
    makeSound() {
        console.log(`sound`)
    }
}

class Mammal extends SecondAnimal {
    makeSound() {
        console.log(`bobr kurva`)
    }
}

class Dog extends SecondAnimal {
    makeSound() {
        console.log(`bobr kurva. I perdole.`)
    }
}



















// 1
