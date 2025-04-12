function getFirstWords(text) {
  // Разделяем текст на предложения по .!?
  const sentences = text.split(/[.!?]/)
  
  // Собираем первые слова из каждого предложения
  const firstWords = []
  
  for (const sentence of sentences) {
    const trimmed = sentence.trim() // Убираем пробелы в начале
    if (trimmed === '') continue   // Пропускаем пустые предложения
    
    const firstWord = trimmed.split(' ')[0] // Берем первое слово
    firstWords.push(firstWord)
  }
  
  return firstWords.join(', ') // Объединяем через запятую
}

const text = "Погода сегодня хорошая. Завтра будет дождь! Ты взял зонт?"
console.log(getFirstWords(text))
