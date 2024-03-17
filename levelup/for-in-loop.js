//the for in loop in Javascript is used to iterate over the emurable properties of an object. it is a way to loop through the keys(property names) of an objects.

// for (let key in Object)P{...}

const exampleObject = {
    property1: 'value1',
    property2: 'value2',
    property3: 'value3',
    property4: 'value4',
    property5: 'value5'
  }

  for(let key in exampleObject){
    console.log(key,exampleObject[key])
  }

  let list=['one', 'two', 'three']

  for(let index in list){
    console.log(index,list[index])
  }