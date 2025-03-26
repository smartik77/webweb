class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    // get x - акцессор получения свойства x
    get x() {
        return this._x
    }

    // set x - акцессор изменения свойства x
    set x(value) {
        if (typeof value !== 'number') {
            console.log("Не число")
        }
        this._x = value
    }
    
    // get y акцессор получения свойства y
    get y() {
        return this._y
    }

    // set y акцессор изменения свойства y
    set y(value) {
        if (typeof value !== 'number') {
            console.log("Не число")
        }
        this._y = value
    }

    translate(dx, dy) {
        this.x += dx
        this.y += dy
    }

    scale(num) {
        this.x *= num
        this.y *= num
    }
}

const point = new Point(2, 3)

console.log(point.x, point.y)

point.translate(1, -1)
console.log(point.x, point.y)

point.scale(2)
console.log(point.x, point.y)
