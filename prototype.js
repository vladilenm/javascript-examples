// const Animal = function(options) {
//   this.name = options.name
//   this.color = options.color
//
//   // this.voice = function() {
//   //   console.log('Base voice from ', this.name)
//   // }
// }
//
// Animal.prototype.voice = function() {
//   console.log('Base voice from ', this.name)
// }
//
// // console.log(Animal.prototype)
//
// const dog = new Animal({name: 'Rex', color: '#fff'})
// // const dog = {name: 'Rex', color: '#fff'}
//
// // dog.voice()
//
// const Cat = function(options) {
//   Animal.apply(this, arguments)
//   this.hasTail = options.hasTail
//   this.type = 'cat'
// }
//
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
//
// Animal.prototype.voice = function() {
//   console.log('This sound goes from: ', this.name)
// }
//
// Cat.prototype.voice = function() {
//   Animal.prototype.voice.apply(this, arguments)
//   console.log(this.name + ' says myay')
// }
//
// const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})
// console.log(cat)

class Animal {
  constructor(options) {
    this.name = options.name
    this.color = options.color
  }

  voice() {
    console.log('Base voice from ', this.name)
  }
}

const dog = new Animal({name: 'Rex', color: 'white'})

class Cat extends Animal {
  constructor(options) {
    super(options)

    this.hasTail = options.hasTail
    this.type = 'cat'
  }

  voice() {
    super.voice()
    console.log(this.name + ' says myay')
  }
}

const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})

// Examples
Object.prototype.print = function() {
  console.log(`I am object: `, this)
}

cat.print()

Array.prototype.mapAndLog = function() {
  console.log('Array to map', this)
  return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4].mapAndLog(x => x ** 2))

String.prototype.toTag = function(tagName) {
  return `<${tagName}>${this}</${tagName}>`
}

console.log('eminem'.toTag('strong'))
console.log('eminem'.toTag('em'))

Number.prototype.toBigInt = function() {
  return BigInt(this)
}


const number = 42
console.log(number.toBigInt())