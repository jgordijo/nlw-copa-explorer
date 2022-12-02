function createMatch({ homeTeam, time, score, awayTeam }) {
  return `
    <li>
      <img src="./assets/icon=${homeTeam}.svg" alt="${homeTeam}'s flag" />
      <strong>${time || score}</strong>
      <img src="./assets/icon=${awayTeam}.svg" alt="${awayTeam}'s flag" />
    </li>
  `
}

function createCard({ date, day, matches }) {
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
  createCard({
    date: "02/12",
    day: "sexta",
    matches:
      createMatch({ homeTeam: "south korea", time: "07:00", awayTeam: "portugal" }) +
      createMatch({ homeTeam: "ghana", time: "10:00", awayTeam: "uruguay" }) +
      createMatch({ homeTeam: "serbia", time: "13:00", awayTeam: "switzerland" }) +
      createMatch({ homeTeam: "cameroon", time: "16:00", awayTeam: "brazil" })
  });

