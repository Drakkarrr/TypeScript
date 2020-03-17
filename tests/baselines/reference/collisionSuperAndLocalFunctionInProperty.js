//// [collisionSuperAndLocalFunctionInProperty.ts]
function _super() { // No error
} 
class Foo {
   public prop1 = {
        doStuff: () => {
            function _super() { // No error
            } 
        }
   }
}
class b extends Foo {
    public prop2 = {
        doStuff: () => {
            function _super() { // error
            } 
        }
    }
}

//// [collisionSuperAndLocalFunctionInProperty.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) {
            throw new TypeError("Class extends value " + b + " is not a constructor or null");
        }
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function _super() {
}
var Foo = /** @class */ (function () {
    function Foo() {
        this.prop1 = {
            doStuff: function () {
                function _super() {
                }
            }
        };
    }
    return Foo;
}());
var b = /** @class */ (function (_super_1) {
    __extends(b, _super_1);
    function b() {
        var _this = _super_1 !== null && _super_1.apply(this, arguments) || this;
        _this.prop2 = {
            doStuff: function () {
                function _super() {
                }
            }
        };
        return _this;
    }
    return b;
}(Foo));
