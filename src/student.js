class Student {
  constructor(name, skillLevel){
    this.name = name;
    this.skillLevel = skillLevel;
    this.assignments = [];
  }

  study(){
    if(this.skillLevel !== 100){
      this.skillLevel += 1;
    } else {
      return this;
    }
    return this;
  }

  doHomework(homework){
    console.log(homework)
    if(!homework){
      for(let i = 0; i < this.assignments.length; i++){
        if(this.assignments[i].completed === false){
          console.log(`in`)
          if(this.assignments[i].skillLevel < this.skillLevel){
            this.assignments[i].completed = true;
          }
        }
      }
    }else if(!homework.skillLevel){
      return;
    } else if( homework.skillLevel < 1 || homework.skillLevel > 100){
      return
    }else if(homework.skillLevel <= this.skillLevel){
      homework.completed = true;
      this.assignments.push(homework);
    } else {
      homework.completed = false;
      this.assignments.push(homework);
    }

  }
}

module.exports = Student
