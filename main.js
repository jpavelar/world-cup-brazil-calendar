function createGame(player1, player2, hour) {
  return `
      
          
            <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
          
  
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>${games}</ul>
    </div>
          
  
  `
}
document.querySelector("#app").innerHTML = `
    <header>
      <img src="./assets/logo.svg" alt="Logo da NLW" />
    </header>
      <main id="cards">
        ${createCard(
          "24/11",
          "Quinta-feira",
          createGame("switzerland", "cameroon", "07:00") +
            createGame("brazil", "serbia", "16:00")
        )}
        
        ${createCard(
          "28/11",
          "Segunda-Feira",
          createGame("cameroon", "serbia", "07:00") +
            createGame("brazil", "switzerland", "13:00")
        )}

        ${createCard(
          "02/12",
          "Sexta-Feira",
          createGame("serbia", "switzerland", "16:00") +
            createGame("brazil", "cameroon", "13:00")
        )}

      </main>
`
