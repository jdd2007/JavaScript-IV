// CODE here for your Lambda Classes

class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }
};

class Instructor extends Person {
    constructor(name) {
        super(name);
        this.specialty = name.specialty;
        this.favLanguage = name.favLanguage;
        this.catchPhrase = name.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
};

class ProjectManager extends Instructor {
    constructor(name) {
        super(name);
        this.gradClassName = name.gradClassName;
        this.favInstructor = name.favInstructor;
    }
    standup(slackChannel) {
        console.log(`${name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}.`);
    }
};

class Student extends Person {
    constructor(name) {
        super(name);
        this.prevBackground = name.prevBackground;
        this.className = name.className;
        this.favSubjects = name.favSubjects;
    }
    listsSubjects() {
        console.log(favSubjects);
    }
    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun a sprint challenge on ${subject}.`);
    }
};

const einstein = new Instructor({
    name: 'Albert Einstein',
    age: 138,
    location: 'Germany',
    gender: 'M',
    specialty: 'Physics',
    favLanguage: 'Mathematics',
    catchPhrase: 'If you cant explain it simply, you dont understand it well enough.'
  });

const feynman = new Instructor({
    name: 'Richard Feynman',
    age: 101,
    location: 'USA',
    gender: 'M',
    specialty: 'Quantum Mechanics',
    favLanguage: 'That which can be understood by the layman',
    catchPhrase: 'What I cannot create, I do not understand.'
  });


const anita = new ProjectManager({
    name: 'Anita Dayet',
    age: 44,
    location: 'Alaska',
    gender: 'F',
    gradClassName: 'Anitas Grad Class Name',
    favInstructor: feynman
  });

const isabella = new ProjectManager({
    name: 'Isabella Queeningtown',
    age: 25,
    location: 'Chicago',
    gender: 'F',
    gradClassName: 'Isabellas Grad Class Name',
    favInstructor: einstein
  });

const vicky = new ProjectManager({
    name: 'Victoria Newbottom',
    age: 31,
    location: 'Atlanta',
    gender: 'F',
    gradClassName: 'Victorias Grad Class Name',
    favInstructor: einstein
  });

const cavour = new Student({
    name: 'Count Cavour',
    age: 208,
    location: 'Turin',
    gender: 'M',
    prevBackground: 'Italian politician',
    className: 'WebPT99',
    favSubjects: ['Node.js','Git']
  });

  const garibaldi = new Student({
    name: 'Giuseppe Garibaldi',
    age: 211,
    location: 'Nice',
    gender: 'M',
    prevBackground: 'International freedom-fighter',
    className: 'WebPT100',
    favSubjects: ['Javascript','Redux']
  });

  const mazzini = new Student({
    name: 'Giuseppe Garibaldi',
    age: 213,
    location: 'Genoa',
    gender: 'M',
    prevBackground: 'Nationalist revolutionary',
    className: 'WebPT101',
    favSubjects: ['Javascript','Git']
  });

console.log(cavour.prAssignment('Javascript'));
console.log(mazzini.sprintChallenge('Authentication'));
console.log(garibaldi.speak());
console.log(einstein.demo('atoms'));
console.log(feynman.grade(cavour,'astronomy'));