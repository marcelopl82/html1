
const result = document.querySelector(".result")
const humanscore = document.querySelector("#human-score")
const machinescore = document.querySelector("#Machine-score")
let scorehumannumber = 0
let scoremachinenumber = 0

console.log(result)
const playhuman = (humanchoice) => {
      console.log(humanchoice)

      playthegame(humanchoice, playMachine())

}

const playMachine = () => {
      const choices = ['rock', 'paper', 'scissors']    //choice =escolhas//

      const randomNumber = Math.floor(Math.random() * 3)

      return choices[randomNumber]
}
const playthegame = (human, Machine) => {

      console.log('humano: ' + human + 'Machine:' + Machine)

      if (human === Machine) { result.innerhtml = "deu empate !" }
      else if ((human === "paper" && Machine === "rock") ||
            (human === "rock" && Machine === "scissors ") ||
            (human === "scissors " && Machine === "paper")
      ) {
            scorehumannumber++
            humanscore.innerHTML = scorehumannumber
            result.innerhtml = 'você ganhau !'
      }

      else {
            scoremachinenumber++
            machinescore.innerHTML = scoremachinenumber

            result.innerhtml = "você perdeu para o pc !"
      }
}

/* papel-> pedra-> tesoura*/