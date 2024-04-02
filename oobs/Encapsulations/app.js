// in javascript we can achive encapsulation by using closures to create private members.

function Counter(){
  let _count=0 // private variable

  // oublic methos that can access and modify the private variable

  this.increment= function(){
   return _count++;
  }
  this.decrement = function(){
  return  _count--;
  }
  this.getCount= function(){
    return _count;
  }
}

const lucifer= new Counter();
console.log(lucifer.getCount());
console.log(lucifer.increment())
console.log(lucifer.decrement())
console.log(lucifer.decrement());
