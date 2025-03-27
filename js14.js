// Базовый класс банковского счета
class BankAccount {
  constructor(balance = 0) {
    this.balance = balance; // Текущий баланс
  }

  // Пополнение счета
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log('Баланс пополнен на ', amount);
      console.log('Счет:', this.balance);
      return true;
    }
    return false;
  }

  // Получить баланс
  getBalance() {
    return this.balance;
  }
}





// Утилита для отложенного вызова функции с аргументом delay
function invokeLater(f, delay) {
  setTimeout(() => f(delay), delay); 
}

//  Функция для пополнения любого счета
function depositInto(account) {
  return (amount) => account.deposit(amount); // Возвращает функцию с привязанным account
}

// Пример использования
const sallysAccount = new BankAccount(1000);


invokeLater(depositInto(sallysAccount), 2000);
