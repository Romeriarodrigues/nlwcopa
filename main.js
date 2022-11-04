function createGame(player1, hour, player2) {
  return `
   <li>
         <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
         <strong>${hour}</strong>
         <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
         </li>
`
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
   <div class="card" style="animation-delay: ${delay}s">
       <h2>${date} <span> ${day} </span> </h2>
           <ul>
             ${games}     
          </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("Switzerland", "18:00", "Cameroon") +
      createGame("Switzerland", "16:00", "Japan") +
      createGame("Switzerland", "16:00", "Cameroon")
  ) +
  createCard(
    "25/11",
    "quinta",
    createGame("Switzerland", "20:00", "Cameroon")
  ) +
  createCard(
    "26/11",
    "quinta",
    createGame("Switzerland", "16:00", "Cameroon") +
      createGame("Switzerland", "16:00", "Cameroon")
  )
