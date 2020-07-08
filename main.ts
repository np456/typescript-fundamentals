//import the types you want and seperate them via a , from the desired module name in quotes
// name is related path from this file, if both files are in same folder it's just './point'
// it shows an error but it works
import { Point } from './point';
import { LikeComponent } from './like.component'

/*function log(message){
    // log to console
    console.log(message)
}

 var message = 'Hello world';

 log(message);
 */

// Section 2.14 Declaring variables
//  function doSomething(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }

//     // knows what variable i is (can't do this in C# as it's scoped)
//     // here in JS, var scopes the variable to the nearest function
//     // using LET, will give the same behaviour as in C#, compilation error if using let instead
//     // proper way to declare variables....
//     console.log('Finally: ' + i);

//  }

//  doSomething();

// // Section 2.15 Types
// let count = 5; // let count : number aka. TSC compiler infers its a number type from the 5
// count = 'a'; //compilation error

// let a; // let a: any, these are all valid
// a=1;
// a=true;
// a='a';

// //if not know value ahead of time, use type annotations
// // e.g. let a: number;
// // let b: boolean;
// // let c: stringl
// // let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a', false]; //NOT GOOD to do bad example

// // Too verbose, OOP use enums, put all constants in container
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// //enum Color{Red, Green, Blue}; // first value is 0, then 1, then 2 etc.... should explicitly state this
// enum Color {Red = 0, Green =1, Blue =2}; //in case people add stuff and breaks it
// let backgroundColr = Color.Blue; // Intellisense in TS

// See the equivalent JS when compiled, is complicated for a simple enum
// everytime you TSC the main.js it will overwrite the equivalent main.js unless you explicitly RM the file yourself

// Section 2.16 Type assertions
//let message = 'abc';

// let message; // by default if no type set, default is any
// message = 'abc'; 
// let endsWithC = message.endsWith('c'); //returns boolean all string methods with the purple cube in intellisense, intellisense only shows up per the type, so any won't show up any

// tell the compiler, the variable is a string
// e.g. method 1 prefix variable with type e.g. (<string>message)

// alternative way
// let alternativeWayt = (message as string).endsWith('c');
// your preference to choose which, Method#1 more popular
// type assertions don't change type of variable at runtime
// purely a way to tell TSC to tell type of a variable JUST TO ACCESS intellisense

// Section 2.17 Arrow Functions
// JS version
// let log = function(message){
//     console.log(message);
// }

// //TS arrow function way, in C# it's called lambda expression, notice the parameter placement!
// // no parameters just have empty () e.g. in this case the below becomes console.log()
// let doLog = (message) => {
//     console.log(message);
// }

// //Section 2.18 custom types/interfaces
// // let drawPoint = (x, y) => {
// //     //,,,
// //     // what happens when you have many parameters going into functions? e.g. (x, y, z, a, b, c)etc.
// //     // sperate out the parameters to a single concept
// //     // encapsulate them all into a single object and pass that into function instead
// // }
// //e.g.
// // let drawPoint = (point) => {

// // }
// // // but what happens when you pass wrong values because point is just an "object"
// // drawPoint({
// //     //x:1,
// //     //y:2
// //     name: 'Bla'
// // })

// // Method #1 in-line annotation for SIMPLE cases, but very verbose and dont want to repeat this object in many places
// // let drawPoint = (point:{x: number, y: number}) => {

// //      }
// // drawPoint(
// //     {
// //         x:1,
// //         y:2
// //     }
// // )

// // Method #2: interfaces
// interface Point {
//     x: number, y: number
// }

// let drawPoint = (point: Point) => {
//     //.. cleaner and can be reused in multiple places
//     // custom type using pascal naming convention
//     // first letter of every word in name of interface should be capitalised (see interface definition)
// }

// // Section 2.19 Classes
// // cohesion problem in 2.18

// // Define shape of point object
// // interface Point {
// //     x: number,
// //     y: number
// // }
// // interface Point {
// //     x: number,
// //     y: number,
// //     // Can only define signatures (function)
// //     draw:() => void //function delcaration don't need pass point object as it can directly access x and y members/properties
// // }


// // standalone functions violating cohesion principle in OOP, highly related concepts should be part of one unit
// // class groups properties (variables) and methods (functions)
// // interfaces are purely for declarations, no implementations so cannot move functions into interface
// // let drawPoint = (point: Point) =>
// // {
// //     //...
// // }

// // let getDistance = (pointA: Point, pointB: point) => {
// //     //...
// // }

// // drawPoint({
// //     x:1,
// //     y:2
// // })

// class Point {
//     //fields for storing data, need ; delimiter
//     x: number;
//     y: number;
//     //draw: () => void // function -> remove because now that it is a class, can actually have implementation
//     draw(){
//         //...
//     }
//     getDistance(another: Point){
//         //...
//     }

// }

// // Section 2.20 Objects
// // instantiate objects and calling methods of the class
// class Point {
//     //fields for storing data, need ; delimiter
//     x: number;
//     y: number;
//     //draw: () => void // function -> remove because now that it is a class, can actually have implementation
//     draw(){
//         //...
//         console.log('X:' + this.x + 'Y: ' + this.y);   // must prefix with 'this', refers to 'this field'
//     }
//     getDistance(another: Point){
//         //...
//     }

// }

// // RUNTIME ERROR if custom types not explicitly declared
// // must explicitly allocate memory via new operator (see bellw)
// //let point : Point = new Point(); // type Point
// // OBJECT instance of class
// let point = new Point(); // TSC infer from assignment so reduce clutter
// point.x = 1;
// point.y = 2;
// point.draw();  // property, method and field access. No more polluting global namespace

// // Section 2.21 Constructors
// // instantiate objects and calling methods of the class
// class Point {
//     x: number;
//     y: number;

// constructor(x?: number, y?: number) { //reserved keyword in TS
//     this.x = x; //set to the constructor parameter value
//     this.y = y;
// }

//     draw(){
//         //...
//         console.log('X:' + this.x + 'Y: ' + this.y);   // must prefix with 'this', refers to 'this field'
//     }

// }

// //initialise point object
// // let point = new Point(); // TSC infer from assignment so reduce clutter
// // point.x = 1;
// // point.y = 2;
// // point.draw();  // property, method and field access. No more polluting global namespace

// // reduce the initialisation verbosity via constructors
// // every class has a constructor (method called when an instance created of the class), need to supply constructor values
// //let point = new Point(1, 2);

// // What if don't know the initial values? in TS, you can't have multiple constructors like C#, need to add parmeters optional via ?
// // once you set parameter optional, all params on RHS also need to be optional 
// let point = new Point();


// Section 2.22 Access Modifiers
// Set rules so that upon initialisation of object, don't want to change certain values/properties/fields or access methods
// // instantiate objects and calling methods of the class
// keywords applied to members to class to control access on outside: public, private and protected
// by default all members are public in TS
// can apply to fields, properties and methods


// class Point {
//     private x: number;
//     private y: number;

//     constructor(x?: number, y?: number) { 
//         this.x = x; 
//         this.y = y;
//     }

//     draw(){
//         //...
//         console.log('X:' + this.x + 'Y: ' + this.y); 
//     }

// }

// let point = new Point();

// Section 2.23 Access modifiers in constructor params, moved the properties to constructor params
// if prefix in constructor, TS generates fields with same name and value of argument
// similarly, if you want to modify the properties, define them as public
// class Point {

//     constructor(private x?: number, private y?: number) { 
//         //this.x = x; 
//         //this.y = y;
//     }

//     draw(){
//         //...
//         console.log('X:' + this.x + 'Y: ' + this.y); 
//     }

// }

// let point = new Point();


// // Section 2.24 Properties
// // How to read co-ordinate?
// class Point {

//     constructor(private _x?: number, private _y?: number) { 
//         //this.x = x; 
//         //this.y = y;
//     }

//     draw(){
//         //...
//         console.log('X:' + this.x + 'Y: ' + this.y); 
//     }

//     // in this class can access all private members of this class, but not from outside
//     //getX(){
//     //get X() {
//     get x() {
//         return this.x;
//     }

//     // set new value for X if satisfiy conditions
//     //setX(value){
//     //set X(value){
//     set x(value){
//         if(value < 0)
//         {
//             throw new Error('Value cannot be less than 0.');
//         } 
        
//         this.x = value;
//     }

//     // in JS/TS, use camel notation to name fields
//     // for properties? getters/setters you will get error if you try to use e.g. get x(), set x()...
//     // to overcome this when uysing properties prefix fields with an _ (see above)

// }

// let point = new Point();
// point.getX(); // get x and display to user
// point.draw();

// // user set co-ordinates but also want them to change it later only if within a given range?
// // use case
// let point2 = new Point(1,2);
// point2.setX(10);
// point2.draw()

// // use property...similar to other OOP languages
// // PROPERTY DEFINTIION GET OR SET
// // instead of defining a custom method  aka. getX() becomes get X() and setX() becomes set X() - SEE ABOVE 
// // use properties like fields
// // can get(read) X and set(modify) it
// let point3 = new Point(1,2);
// let x = point3.X;
// //point3.X(10); WRONG see below
// point3.X = 10; // dont have to call method, is better syntax

// // PROPERTIES FOR PRIVATE FIELDS
// // read only access, or give ability to set values but with validation
// // GETTERS AND SETTERS
// // LOOKS LIKE FIELDS ON OUTSIDE BUT INTERNALLY IS METHOD IN CLASS, i.e. a GETTER OR SETTER OR COMBINATION GETTER/SETTER

// Section 2.25 Modules -> MOVED TO NEW FILE
// Multiple files...move class point definition e.g. Point.ts, add new file in SRC
// class Point{
//     constructor(private x?: number, private y?: number){}

//     draw(){
//         console.log('X: ' + this.x + ' Y: ' + this.y);
//     }

// }
// think of each file as a "module"

let point = new Point(1,2);
point.draw();

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`); // use `` backticks to create template string
// ${component.likesCount} will be replaced by value of likesCount component
// using tsc *.ts in cmd prompt is error because is a macOS/terminal thing (in the Udemy example 2.27)

// before calling onClick(), you can set the likescount beforehand and same as IsSelected
// likes should only change if user clicks the button
// implement read only property so consumer of class can't change value of the fields
// change to read only properties