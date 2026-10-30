const personFunc = {
    talk() {
        console.log(`${this.name} is talking.`);
    },
    walk() {
        console.log(`${this.name} is walking.`);
    }
};

function createPerson(name) {
    const p = Object.create(personFunc);
    p.name = name;
    return p;
}
const p = createPerson("Alice");
console.log(p);
p.talk();
p.walk();

////////////

function Person(name) { 
 this.name = name;
}

// Person.prototype.talk = function () {
//     console.log(`${this.name} is talking.`);
// };
// Person.prototype.walk = function () {
//     console.log(`${this.name} is walking.`);
// };

Person.prototype = personFunc;
Person.prototype.constructor = Person;

const cp1=new Person("Bob");
console.log(cp1);
cp1.talk();
cp1.walk();

function Employee(name, position) {
    this.name = name;
    this.position = position;
}



//////////

class PersonC {
   // weight = 70;
    constructor(name)
    {
        this.name = name;
        //let weight = 70;
    }
    talk() {
        console.log(`${this.name} is talking.`);
    }
    walk() {
        console.log(`${this.name} is walking.`);
    }
}
const pc1 = new PersonC("Charlie");

console.log(pc1);
pc1.talk();
pc1.walk();

console.log(pc1.weight);