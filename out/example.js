"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mister {
    mr(name) {
        return 'Mr. ' + name;
    }
}
exports.Mister = Mister;
class Senior extends Mister {
}
exports.Senior = Senior;
class Master extends Senior {
    mr(name) {
        return super.mr(name) + ' master of the Universe';
    }
}
exports.Master = Master;
