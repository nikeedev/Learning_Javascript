var os = process.platform === "win32" ? "Windows" : "Unrecgonized"

class human {
    name : string;
    age : number;
    favorite_color : string;
}

var nik = new human();
nik.name = "Nik"
nik.age = 14;
nik.favorite_color = "#4a4dff";

console.log("Current platform: ", os, " --- ", nik)