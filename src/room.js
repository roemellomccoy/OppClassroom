class Room {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.contents = [];
  }

  add(item){
    this.contents.push(item);
    return this;
  }

  has(reference){
    if(this.contents.indexOf(reference) !== -1){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Room
