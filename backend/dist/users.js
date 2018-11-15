"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "thomaz@gmail.com": new User('thomaz@gmail.com', 'Thomaz', 'thom2004'),
    "monica@gmail.com": new User('monica@gmail.com', 'Monica', 'moni2004')
};
