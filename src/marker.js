class Marker {
  constructor(size, color, remainingInk){
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }

  write(word){
    let wordArray = word.split(``);
    let returnArray = [];
    for(let i = 0; i < wordArray.length; i++){
      if(wordArray[i] !== ` `){
        if(this.remainingInk !== 0){
          this.remainingInk -= 1;
          returnArray.push(wordArray[i]);
        }
      } else {
        returnArray.push(` `);
      }
    }
    return returnArray.join('')
  }
}

module.exports = Marker
