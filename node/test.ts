console.log('Hello TypeScript')

let x:number = 10
// string
// boolean
// Any
// bigint    ->  100000n
// void -> no return 
// fn -> type -> return 
let z:any = ''
// undefined
// enum -> perechislenie

let cars:string[] = ['audi', 'bmw', '1000']
//let cars2:Array<string> = ['audi', 'bmw', '1000']
let carItems:[string, number, boolean] = ['audi', 2.0, false]

function getA(x:number = 18, y:string = 'text'):void
{
    console.log('this is void function')
}
getA()

function getB():string{
    return 'this is return function'
}
getB()
// javascript
let months = {
    january: 1,
    february: 2
}

// typescript
enum months2 { 
    january = 10,
    february = 20
}

let myMonth:months2 = months2.february

if (typeof cars == "object"){
    console.log('this is array')
}

let txt:any = 'Hello TypeScript' 
let txtLenth:number = (<string>txt).length
let txtLenth2:number = (txt as string).length


function getAllArguments (x:string, ...r:number[]){}
// 1
function getM(x:(n:number, m:number) => number):number{
    return 10
}

let fn = function (n:number, m:number) { 
    let a:number = n + m
    return a
}
getM(fn)
// 2
let sum = (x:number, y:number) => x + y

console.log("result: ", sum(2, 4))

class X {

    

    constructor(public _internal = 'sdfgsef'){
        
    }

    x = {
        getX:() => {
         
            function g(){}
        }
    }
    
}
