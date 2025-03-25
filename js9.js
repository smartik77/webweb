class Random {
    static nextDouble(low, high) {
        return low + Math.random() * (high - low)
    }

    static nextInt(low, high) {
        return Math.floor(low + Math.random() * (high - low))
    }

    static nextElement(array) {
        return array[this.nextInt(0, array.length)]
    }
}

console.log(Random.nextDouble(1.5, 3.5))
console.log(Random.nextInt(10, 20))
console.log(Random.nextElement([876,9,0]))
