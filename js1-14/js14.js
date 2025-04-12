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

// Функция для создания обработчика пополнения счета
function depositInto(account) {
    return amount => account.deposit(amount)
}

// Функция для отложенного вызова
function invokeLater(f, delay) {
    setTimeout(() => f(delay), delay)
}

// Создаем аккаунты
const harrysAccount = new BankAccount(100)
const sallysAccount = new BankAccount(500)

// Гарри получает 1000 через 1000 мс
invokeLater(depositInto(harrysAccount), 1000)
// Салли получает 2000 через 2000 мс
invokeLater(depositInto(sallysAccount), 2000)


setTimeout(() => {
    console.log("Баланс Гарри:", harrysAccount.balance)
    console.log("Баланс Саллу:", sallysAccount.balance) 
}, 3000)
