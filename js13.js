class BankAccount {
  constructor(balance = 0) {
    this.balance = balance
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount
      return true
    }
    return false
  }
}


// В JavaScript методы объектов (включая методы класса) теряют контекст (this), если их вызывать отдельно от объекта. 
// Когда мы присваиваем метод переменной action и вызываем его как обычную функцию, this внутри метода перестает ссылаться на harrysAccount.

// const harrysAccount = new BankAccount(100)
// const action = harrysAccount.deposit 
// action(1000) // Ошибка: this внутри deposit станет undefined (в strict mode)



const harrysAccount = new BankAccount(100)
harrysAccount.deposit.call(harrysAccount, 200) 
harrysAccount.deposit.apply(harrysAccount, [1000])

console.log(harrysAccount)
