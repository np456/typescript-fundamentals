"use strict";
exports.__esModule = true;
exports.Point = void 0;
// now visible outside the file
// define own scope, to use outside add export keyword
// from TS POV, this file is a module
// go to main.ts to import so can use it
// export classes, functions, simple variables or objects
// to use theese types, need to import them
// import/export makes file module from TS view
// angular modules are different - organising application into smaller functional areas, rather than parts of your application
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
