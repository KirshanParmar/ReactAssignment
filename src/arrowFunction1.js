var Language = function (name, delay) {
    this.name = name;
    this.delay = delay;
};

Language.prototype.greet = function () {
    setTimeout(() => {
        console.log('Hi, I am ' + this.name);
    }, this.delay);
};

var java = new Language('JAVA', 2000);
var javascript = new Language('JavaScript', 30);

java.greet();
javascript.greet();
