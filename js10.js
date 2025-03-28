class BankAccount {
     constructor(balance = 0) {
          this.balance = balance  // Начальный баланс
     }

     // Пополнение счета (возвращает true/false при успехе/ошибке)
     deposit(amount) {
          if (amount > 0) {
               this.balance += amount
            
               console.log('Баланс пополнен на ', amount)
               console.log('Счет:', this.balance)
               return true
          }
          return false
     }

     // Снятие средств (проверяет доступный баланс)
     withdraw(amount) {
          if (amount > 0 && this.balance >= amount) {
               this.balance -= amount
               console.log('С баланса снято ', amount)
               console.log('Счет:', this.balance)
               return true
          }
          return false
     }

     // Текущий баланс
     getBalance() {
          console.log('На счету:', this.balance)
          return this.balance
     }
}

// Сберегательный счет с процентами
class SavingsAccount extends BankAccount {
     constructor(balance = 0, interestRate = 0) {
          super(balance)
          this.interestRate = interestRate // Процентная ставка (например, 0.05 = 5%)
     }

     // Начислить проценты через метод deposit()
     addInterest() {
          const interest = this.getBalance() * this.interestRate
          this.deposit(interest) // Используем метод родителя
     }
}

// Текущий счет с комиссией за снятие
class CheckingAccount extends BankAccount {
     constructor(balance = 0, fee = 0) {
          super(balance)
          this.fee = fee // Фиксированная комиссия за операцию
     }

     // Переопределяем withdraw() с добавлением комиссии
     withdraw(amount) {
          return super.withdraw(amount + this.fee) // Используем родительский метод
          console.log('С баланса снято ', amount)
          console.log('комиссия:  ',  this.fee)
          console.log('Счет:', this.balance)
     }
}


const account = new BankAccount()
console.log(account)
account.deposit(10)
account.withdraw(1)
account.getBalance()

console.log('---------------------------------------------------------------------------------------------')

const saving = new SavingsAccount(100, 0.07)
console.log(saving)
saving.addInterest()
saving.getBalance()

console.log('---------------------------------------------------------------------------------------------')

const checking = new CheckingAccount(100, 3)
checking.withdraw(10)















