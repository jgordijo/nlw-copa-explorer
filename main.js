function createMatch(homeTeam, time, awayTeam) {
  return `
    <li>
      <img src="./assets/icon=${homeTeam}.svg" alt="${homeTeam}'s flag" />
      <strong>${time}</strong>
      <img src="./assets/icon=${awayTeam}.svg" alt="${awayTeam}'s flag" />
    </li>
  `
}

function createCard(date, day, matches) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${matches}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createMatch("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createMatch("switzerland", "13:00", "brazil") +
    createMatch("portugal", "16:00", "uruguay")
  ) +
  createCard("02/12", "sexta", createMatch("brazil", "16:00", "cameroon"))

