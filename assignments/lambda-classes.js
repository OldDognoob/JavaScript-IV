// CODE here for your Lambda Classes

// Class Person

class Person {
    constractor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
      speak(){
          return `Hello my name is ${this.name} and I am from ${this.locations}`;
      }
}


// Class Instructor

class Instructor extends Person {
    constractor(instructorAttributes){
       super(instructorAttributes);
        this.speciality = instractorAttributes.speciality;
        this.favLanguage = instractorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${this.subject}`
    }

    grade(student, subject){
        return `logs out ${student.name} recieves a perfect score on ${student}`;
    }
}

// Class Student

class Student extends Person {
    constractor(studentAttributes){
       super(studentAttributes);
         this.previousBackground = studentAttributes.previousBackground;
         this.className = studentAttributes.className;
         this.favSubject = studentAttributes.favSubject;
    }

    listsSubjects(){
        return ` `
    }
    
    PRAssignment(subject){
        return `student.name has submitted a PR for ${subject}`;
    }
    
    sprintChallenge(subject){
        return `student.name has begun sprint challenge on ${subject}`;
    }
}

// Class ProjectManager

class ProjectManager extends Instructor {
    constructor(projectmanagerAttributes){
        super(projectmanagerAttributes);
        this.gradClassName = projectmanagerAttributes.gradClassName;
        this.favInstructor = projectmanagerAttributes.favInstructor;
    }
    
    standUp(){

    }


}