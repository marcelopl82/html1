
const result = document.querySelector(".result")
const humanscore = document.querySelector("#human-score")
const machinescore = document.querySelector("#Machine-score")
let scorehumannumber = 0
let scoremachinenumber = 0
const GAME_OPTIONS={
      ROCK:'rock',
      PAPER:'paper',
      SCISSORS:'scissors'}   
      
console.log(result)
const playhuman = (humanchoice) => {
      console.log(humanchoice)
  
      playthegame(humanchoice, playMachine())

}

const playMachine = () => {
      const choices = [GAME_OPTIONS.ROCK,GAME_OPTIONS.PAPER,GAME_OPTIONS.SCISSORS ]    //choice =escolhas//

      const randomNumber = Math.floor(Math.random() * 3)

      return choices[randomNumber]
}
const playthegame = (human, Machine) => {

      console.log('humano: ' + human + 'Machine:' + Machine)

      if (human === Machine){ result.innerHTML = "deu empate !" }
      
      else if ((human === GAME_OPTIONS.PAPER && Machine === GAME_OPTIONS.ROCK) ||
            (human === GAME_OPTIONS.ROCK && Machine === GAME_OPTIONS.SCISSORS) ||
            (human === GAME_OPTIONS.SCISSORS && Machine === GAME_OPTIONS.PAPER)
      ) {
            scorehumannumber++
            humanscore.innerHTML = scorehumannumber
            result.innerHTML = 'você ganhau !'
      }

      else {
            scoremachinenumber++
            machinescore.innerHTML = scoremachinenumber

            result.innerHTML = "você perdeu para o pc !"
      }

}
/* papel-> pedra-> tesoura*/