// Класс для генерации случайных значений
class Random {
    // Статический метод для генерации случайного дробного числа в диапазоне [low, high)
    static nextDouble(low, high) {
        // Math.random() дает число [0, 1)
        // Умножаем на длину диапазона (high-low) и сдвигаем на low
        return low + Math.random() * (high - low)
    }

    // Статический метод для генерации случайного целого числа в диапазоне [low, high)
    static nextInt(low, high) {
        // Аналогично nextDouble, но с округлением вниз
        return Math.floor(low + Math.random() * (high - low))
    }

    // Статический метод для выбора случайного элемента массива
    static nextElement(array) {
        // Используем nextInt для генерации случайного индекса в диапазоне [0, array.length)
        return array[this.nextInt(0, array.length)]
    }
}

// Случайное дробное число между 1.5 и 3.5
console.log(Random.nextDouble(1.5, 3.5))

// Случайное целое число от 10 до 19 включительно
console.log(Random.nextInt(10, 20))

// Случайный элемент массива
console.log(Random.nextElement([86, 9, 0]))
