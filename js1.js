// createPoint создает точку на плоскости с координатами x, y 
function createPoint(x, y) {
    return { 
        x, y,

        getX() {
            return this.x
        },

        getY() {
            return this.y
        },

        translate(dx, dy) {
            this.x += dx
            this.y += dy
        },

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
