
// alert('Hello World')

var x = 'hello'
let y = 'hello'

console.log('x: ', typeof x)
//const x = function(){}

var x = 10
console.log('x: ', typeof x)

let undf
let nll = null


let obj = {} // associative

console.log('undf: ', typeof undf)
console.log('nll: ', typeof nll)
console.log('arr: ', typeof arr)
console.log('obj: ', typeof obj)

let number = "10b"
// Number()
// parseInt()
//parseFloat()
console.log(10 + Number(number))


let cars = ['audi', 'bmw', 10, true, undefined] // simple

// API , RESTful -> json
let cars2 = {
    key:'string',
    key2:100,
    key3:{
        key:'string',
        key2:100,
        key3:{}
    },
    key4:[{
        key1:'text1'
    },{
        key1:'text1'
    },
    {
        key1:'text1'
    }],
    key5:function(){

        return ''
    },
    key6:() => {

    }
}

// ++ increment
// -- decrement

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element)
}

cars.forEach((item, i, arr) => {
    console.log('value: ', item, ', index: ', i, ', array: ', arr )
    //cars[1]
})


function multiply( y, z, x = 50, a = 150){
    // TODO 
    console.log('y: ', y, ', z: ', z, ', x: ', x)
    return x * y  // number
}

let m = multiply(10, 50) // number
let n = multiply(10, 50, 400) // number

class Myclass {

    #_y // private
    static _z

    constructor(x){
        console.log('this is constructor')
        this._x = x
        this.#_y = 10
    }

    getX(){
        this._z 
        
    }

    static getY(){

    }
}

let cls = new Myclass()
cls._x
// 
Myclass._z
Myclass.getY()
