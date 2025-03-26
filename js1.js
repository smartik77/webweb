// createPoint создает точку на плоскости с координатами x, y 
function createPoint(x, y) {
    return { 
        x,  // координата х
        y,  // координата у

        // getX - метод получения х
        getX() {
            return this.x
        },

        // getУ - метод получения у
        getY() {
            return this.y
        },

        // translate прибавляет к координатам точки указанные числф dx и dy
        translate(dx, dy) {
            this.x += dx
            this.y += dy
        },

        // scale умножает координаты точки на указанное число num
        scale(num) {
            this.x *= num
            this.y *= num
        }
    }
}

let point = createPoint(4, 3)

console.log(point.getX(), point.getY())

point.translate(1, -1)
console.log(point.getX(), point.getY())
