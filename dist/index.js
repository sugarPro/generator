var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
function createIterator(from, to) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = from;
                _a.label = 1;
            case 1:
                if (!(i <= to)) return [3 /*break*/, 4];
                return [4 /*yield*/, i];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
var iterator = createIterator(1, 5);
try {
    for (var iterator_1 = __values(iterator), iterator_1_1 = iterator_1.next(); !iterator_1_1.done; iterator_1_1 = iterator_1.next()) {
        var val = iterator_1_1.value;
        console.log(val);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1.return)) _a.call(iterator_1);
    }
    finally { if (e_1) throw e_1.error; }
}
function factorial(n) {
    var result, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                result = 1;
                i = 1;
                _a.label = 1;
            case 1:
                if (!(i <= n)) return [3 /*break*/, 4];
                result *= i;
                return [4 /*yield*/, result];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
try {
    for (var _e = __values(factorial(5)), _f = _e.next(); !_f.done; _f = _e.next()) {
        var n = _f.value;
        console.log(n);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
    }
    finally { if (e_2) throw e_2.error; }
}
// 1, 2, 6, 24, 120
function flat(arr) {
    var e_5, _a, arr_1, arr_1_1, item, e_5_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, 8, 9]);
                arr_1 = __values(arr), arr_1_1 = arr_1.next();
                _b.label = 1;
            case 1:
                if (!!arr_1_1.done) return [3 /*break*/, 6];
                item = arr_1_1.value;
                if (!Array.isArray(item)) return [3 /*break*/, 3];
                return [5 /*yield**/, __values(flat(item))];
            case 2:
                _b.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, item];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                arr_1_1 = arr_1.next();
                return [3 /*break*/, 1];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_5_1 = _b.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/];
        }
    });
}
var A = [1, [2, [3, 4], 5], 6];
try {
    for (var _g = __values(flat(A)), _h = _g.next(); !_h.done; _h = _g.next()) {
        var f = _h.value;
        console.log(f);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
    }
    finally { if (e_3) throw e_3.error; }
}
// 1 2 3 4 5 6
function upper(items) {
    var e_6, _a, items_1, items_1_1, item, e_7, e_6_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, 9, 10]);
                items_1 = __values(items), items_1_1 = items_1.next();
                _b.label = 1;
            case 1:
                if (!!items_1_1.done) return [3 /*break*/, 7];
                item = items_1_1.value;
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 6]);
                return [4 /*yield*/, item.toUpperCase()];
            case 3:
                _b.sent();
                return [3 /*break*/, 6];
            case 4:
                e_7 = _b.sent();
                return [4 /*yield*/, null];
            case 5:
                _b.sent();
                return [3 /*break*/, 6];
            case 6:
                items_1_1 = items_1.next();
                return [3 /*break*/, 1];
            case 7: return [3 /*break*/, 10];
            case 8:
                e_6_1 = _b.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 10];
            case 9:
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 10: return [2 /*return*/];
        }
    });
}
var bad_items = ['a', 'B', 1, 'c'];
try {
    for (var _j = __values(upper(bad_items)), _k = _j.next(); !_k.done; _k = _j.next()) {
        var item = _k.value;
        console.log(item);
    }
}
catch (e_4_1) { e_4 = { error: e_4_1 }; }
finally {
    try {
        if (_k && !_k.done && (_d = _j.return)) _d.call(_j);
    }
    finally { if (e_4) throw e_4.error; }
}
// want to log: A, B, null, C
function askFoo() {
    return new Promise(function (resolve, reject) {
        resolve("foo");
    });
}
function co(func) {
    // your code goes here
    var it = func();
    var handler = function (data) {
        var result = it.next(data);
        if (!result.done) {
            result.value.then(handler);
        }
    };
    handler();
}
function genFunc() {
    var foo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, askFoo()];
            case 1:
                foo = _a.sent();
                console.log(foo);
                return [2 /*return*/];
        }
    });
}
co(genFunc);
