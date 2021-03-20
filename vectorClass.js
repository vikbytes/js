class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    plus(vector) {
        return new Vec(vector.x + this.x, vector.y + this.y);
    }
    minus(vector) {
        return new Vec(vector.x - this.x, vector.y - this.y);
    }


}

console.log(new Vec(1,2).plus(new Vec(2,3)));
console.log(new Vec(3, 4).length);