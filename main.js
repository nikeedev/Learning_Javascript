var os = process.platform === "win32" ? "Windows" : "Unrecgonized";
var human = /** @class */ (function () {
    function human() {
    }
    return human;
}());
var nik = new human();
nik.name = "Nik";
nik.age = 14;
nik.favorite_color = "#4a4dff";
console.log("Current platform: ", os, " --- ", nik);
