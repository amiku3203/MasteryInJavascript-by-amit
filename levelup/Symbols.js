// symbols is a unique and immutable primitive data type introduced in ec6. a symbol is often used as and   identifuer for object object propertues to avoid potential naming confilcys.

//unlike string or number , symbols are guranteed to be unique.when you create a symble , it is unique and can not be recreated or changed , this uniqueness ensure that symbols will not collude with other property  names, even thet have the same string representation

const mysymbol=Symbol("My custome1");
const mysymbol2=Symbol("My custome1");
console.log(mysymbol===mysymbol2)
console.log(typeof mysymbol)
console.log(mysymbol)

 const s1=Symbol("bar")
 const s2=Symbol("bar")

 const h={}
 h.age=12;
 h["g"]="male"
 h["g"]="female"
 h[s1]="alex"
 h[s2]="john"

 console.log(h)