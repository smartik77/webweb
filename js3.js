class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getX () {
        return this.x
    }

    getY () {
        return this.y
    }

    translate (dx, dy) {
        this.x += dx
        this.y += dy
    }

    scale (num) {
        this.x *= num
        this.y *= num
    }
}

const point = new Point(2, 3)

console.log(point.getX(), point.getY())

point.translate(1, -1)
console.log(point.getX(), point.getY())

point.scale(2)
console.log(point.getX(), point.getY())
