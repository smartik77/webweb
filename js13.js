
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


const harrysAccount = new BankAccount(100)
const action = harrysAccount.deposit  // записывыем в action метод deposit
action.call(harrysAccount, 1000)   // Метод call() позволяет вызывать функцию как метод объекта


console.log(harrysAccount)
