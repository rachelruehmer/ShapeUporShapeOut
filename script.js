let btnRec = document.getElementById("button-addon1");
let btnSqu = document.getElementById("button-addon2");
let btnCir = document.getElementById("button-addon3");
let btnTri = document.getElementById("button-addon4");


class Shape {
    constructor(width, height, radius, sideLength) {
        super(width, height, radius, sideLength)
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super (radius)
        this.radius = radius;
        this.cirDiv = document.createElement("div") 
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height)
        this.height = height;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
        this.width = width;
        this.height = height;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength)
        this.sideLength;
    }
}
btnCir.addEventListener("click", function () {
});
btnTri.addEventListener("click", function () {
});
btnRec.addEventListener("click", function () {
});
btnSqu.addEventListener("click", function () {
});
