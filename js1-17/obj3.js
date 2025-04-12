let ladder = {
  step: 0,
  
  showStep() {
    console.log(this.step)
  },
  
  up() {
    this.step++
  },
  
  down() {
    this.step--
  }
}

ladder.showStep() // 0
ladder.up()
ladder.up()
ladder.showStep() // 2
ladder.down()
ladder.showStep() // 1
