var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veshile = /** @class */ (function () {
    function Veshile() {
        this.price = 1000;
        this.model = 'car';
    }
    Veshile.prototype.getPrice = function () {
        return this.price;
    };
    Veshile.prototype.getDescription = function () {
        return this.model;
    };
    return Veshile;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla() {
        var _this = _super.call(this) || this;
        _this.price = 25000;
        _this.model = 'Tesla';
        return _this;
    }
    return Tesla;
}(Veshile));
var Autopilot = /** @class */ (function () {
    function Autopilot(car) {
        this.car = car;
    }
    Autopilot.prototype.getPrice = function () {
        return this.price + 5000;
    };
    Autopilot.prototype.getDescription = function () {
        return "&{this.car.getDescription()} with autopilot";
    };
    return Autopilot;
}());
var tesla = new Tesla;
tesla = new Autopilot('tesla');
console.log("tesla");
