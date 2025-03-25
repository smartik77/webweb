function Point(x, y) {
    this.x = x
    this.y = y
}

Point.prototype.getX = function() {
    return this.x
}

Point.prototype.getY = function() {
    return this.y
}

Point.prototype.translate = function(dx, dy) {
    this.x += dx
    this.y += dy
}

Point.prototype.scale = function(num) {
    this.x *= num
    this.y *= num
}

const point = new Point(2, 3)

console.log(point.getX(), point.getY())

point.translate(1, -1)
console.log(point.getX(), point.getY())

point.scale(2)
console.log(point.getX(), point.getY())
