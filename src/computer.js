class Computer {
  constructor (name, os, processor, memory, graphics) {
    this.name = name;
    this.operatingSystem = os;
    this.processor = processor;
    this.memory = memory;
    this.graphics = graphics;
    this.on = false;
  }

  power(){
    this.on = !this.on;
  }
}

module.exports = Computer
