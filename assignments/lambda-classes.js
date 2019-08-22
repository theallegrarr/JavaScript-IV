// CODE here for your Lambda Classes
class Personnel {
    constructor(theName, theLocation, theAge) {
        this.name = theName;
        this.location = theLocation;
        this.age = theAge;      
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructors extends Personnel {
    constructor(theName, theLocation, theFavLanguage, theSpecialty, theCatchPhrase){
        super(theName, theLocation);
        this.favLanguage = theFavLanguage;
        this.specialty = theSpecialty; 
        this.catchPhrase = theCatchPhrase; 
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    setGrade(student){
        student.grade = parseInt(Math.random()*100);
    }
}
class Students extends Personnel {
    constructor(theName, theLocation, theAge, thePreviousBackground, theClassName, theFavSubjects){
        super(theName, theLocation, theAge);
        this.previousBackGround = thePreviousBackground;
        this.className = theClassName; 
        this.favSubjects = theFavSubjects; 
        this.grade = 73;
    }

    listSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    Sprint(subject){
        return `${this.name} has begun the sprint for ${subject}`;
    }
    grade(){
        return `${this.name}'s grade is ${this.grade}`;
    }
    graduate(){
        if(this.grade >= 70){
            return `${this.name} is ready to graduate`;
        } else {
            return `Go back to grading student`;
        }
    }
}

class ProjectManagers extends Personnel {
    constructor(theName, theLocation, theAge, theGradClass, theFavInstructor){
        super(theName, theLocation, theAge);
        this.gradClass = theGradClass;
        this.favInstructor = theFavInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
    setGrade(student){
        student.grade = parseInt(Math.random()*100);
    }
}


let Gabriel = new Instructors('Gabriel Cabrejas', 'US', 35, 'JavaScript', 'WEB', 'foo');
console.log(Gabriel);
console.log(Gabriel.speak());
let Peter =  new Students('Peter Malak', 'District 9', 27, 'Hunger Games', 'Mocking Jay', ['C++', 'JavaScript'] );
console.log(Peter);
console.log(Gabriel.grade(Peter,'C++'));
console.log(Peter.listSubjects());
console.log(Peter.PRAssignment('JavaScript'));
console.log(Peter.Sprint('JavaScript'));
let SlackJaw = new ProjectManagers('Slack Jaw', 'Karnaca', 34, 'WEBEU3', Gabriel);
console.log(SlackJaw);
console.log(SlackJaw.standUp('@WEBEU3'));
console.log(SlackJaw.debugsCode(Peter, 'JavaScript'));
Gabriel.setGrade(Peter);
console.log(Peter);
