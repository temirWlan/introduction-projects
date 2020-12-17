var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProgrammingLanguage = /** @class */ (function () {
    function ProgrammingLanguage(typing) {
        this.typing = typing;
    }
    ProgrammingLanguage.prototype.getTyping = function (name) {
        return "Programming Language: " + name + ", with static typing: " + this.typing;
    };
    return ProgrammingLanguage;
}());
// 1 === 2
// class Car {
//   readonly model: string;
//   readonly maxSpeed: string;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    return Car;
}());
// modifiers
var GeometricFigure = /** @class */ (function () {
    function GeometricFigure() {
        this.draw();
    }
    GeometricFigure.prototype.draw = function () {
        return this.height * 2;
    };
    GeometricFigure.prototype.lie = function () {
        console.log('lie');
    };
    return GeometricFigure;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        _this.spin();
        _this.lie();
        return _this;
    }
    Circle.prototype.spin = function () {
        return this.height;
    };
    return Circle;
}(GeometricFigure));
// abstract class
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
// guards
var SomeResponse = /** @class */ (function () {
    function SomeResponse() {
        this.statusCode = 200;
        this.response = 'Data has been deleted';
    }
    return SomeResponse;
}());
var SomeError = /** @class */ (function () {
    function SomeError() {
        this.statusCode = 404;
        this.message = 'Could not defined';
    }
    return SomeError;
}());
function handle(res) {
    if (res instanceof SomeResponse) {
        return {
            info: "Status code: " + res.statusCode + ", Response: " + res.response
        };
    }
    else {
        return {
            info: "Status code: " + res.statusCode + ", Error message: " + res.message
        };
    }
}
