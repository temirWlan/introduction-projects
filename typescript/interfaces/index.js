// objects
var firstCircle = {
    id: 234,
    size: {
        radius: 4314,
        circumference: 143242
    }
};
var secondCircle = {
    id: 25435,
    size: {
        radius: 2424,
        circumference: 223462
    }
};
secondCircle.color = 'green';
var thirdCircle = {};
var fourthCircle = {};
;
var firstCylinder = {
    id: 324515,
    size: {
        radius: 5345,
        circumference: 624532,
        height: 2452
    },
    getDiameter: function () {
        return this.size.radius * 2;
    }
};
;
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
;
;
var elementStyle = {
    width: '250px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: 'red'
};
