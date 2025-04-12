// Point - функция создания точки на плоскости с координатами x и y
function Point(x, y) {
    this.x = x
    this.y = y
}

// Point.prototype.getX - метод получения х
Point.prototype.getX = function() {
    return this.x
}

// Point.prototype.getY - метод получения y
Point.prototype.getY = function() {
    return this.y
}

// translate прибавляет к координатам точки указанные числф dx и dy
Point.prototype.translate = function(dx, dy) {
    this.x += dx
    this.y += dy
}

// scale умножает координаты точки на указанное число num
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
