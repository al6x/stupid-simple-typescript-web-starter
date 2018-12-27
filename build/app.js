define("src/lib", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.message = "Hello World!";
});
define("src/app", ["require", "exports", "src/lib"], function (require, exports, lib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.getElementById("message").innerHTML = lib_1.message;
});
//# sourceMappingURL=app.js.map