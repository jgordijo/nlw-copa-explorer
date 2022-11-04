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
  createCard({ date: "20/11", day: "domingo", matches: createMatch({ homeTeam: "qatar", time: "13:00", awayTeam: "ecuador" }) }) +
  createCard({
    date: "21/11",
    day: "segunda",
    matches:
      createMatch({ homeTeam: "england", time: "10:00", awayTeam: "iran" }) +
      createMatch({ homeTeam: "senegal", time: "13:00", awayTeam: "netherlands" }) +
      createMatch({ homeTeam: "united states", time: "16:00", awayTeam: "wales" })
  }) +
  createCard({
    date: "22/11",
    day: "terça",
    matches:
      createMatch({ homeTeam: "argentina", time: "07:00", awayTeam: "saudi arabia" }) +
      createMatch({ homeTeam: "denmark", time: "10:00", awayTeam: "tunisia" }) +
      createMatch({ homeTeam: "mexico", time: "13:00", awayTeam: "poland" }) +
      createMatch({ homeTeam: "france", time: "16:00", awayTeam: "australia" })
  }) +
  createCard({
    date: "23/11",
    day: "quarta",
    matches:
      createMatch({ homeTeam: "morocco", time: "07:00", awayTeam: "croatia" }) +
      createMatch({ homeTeam: "germany", time: "10:00", awayTeam: "japan" }) +
      createMatch({ homeTeam: "spain", time: "13:00", awayTeam: "costa rica" }) +
      createMatch({ homeTeam: "belgium", time: "16:00", awayTeam: "canada" })
  }) +
  createCard({
    date: "24/11",
    day: "quinta",
    matches:
      createMatch({ homeTeam: "switzerland", time: "07:00", awayTeam: "cameroon" }) +
      createMatch({ homeTeam: "uruguay", time: "10:00", awayTeam: "south korea" }) +
      createMatch({ homeTeam: "portugal", time: "13:00", awayTeam: "ghana" }) +
      createMatch({ homeTeam: "brazil", time: "16:00", awayTeam: "serbia" })
  }) +
  createCard({
    date: "25/11",
    day: "sexta",
    matches:
      createMatch({ homeTeam: "wales", time: "07:00", awayTeam: "iran" }) +
      createMatch({ homeTeam: "qatar", time: "10:00", awayTeam: "senegal" }) +
      createMatch({ homeTeam: "netherlands", time: "13:00", awayTeam: "ecuador" }) +
      createMatch({ homeTeam: "england", time: "16:00", awayTeam: "united states" })
  }) +
  createCard({
    date: "26/11",
    day: "sábado",
    matches:
      createMatch({ homeTeam: "tunisia", time: "07:00", awayTeam: "australia" }) +
      createMatch({ homeTeam: "poland", time: "10:00", awayTeam: "saudi arabia" }) +
      createMatch({ homeTeam: "france", time: "13:00", awayTeam: "denmark" }) +
      createMatch({ homeTeam: "argentina", time: "16:00", awayTeam: "mexico" })
  }) +
  createCard({
    date: "27/11",
    day: "domingo",
    matches:
      createMatch({ homeTeam: "japan", time: "07:00", awayTeam: "costa rica" }) +
      createMatch({ homeTeam: "belgium", time: "10:00", awayTeam: "morocco" }) +
      createMatch({ homeTeam: "croatia", time: "13:00", awayTeam: "canada" }) +
      createMatch({ homeTeam: "spain", time: "16:00", awayTeam: "germany" })
  }) +
  createCard({
    date: "28/11",
    day: "segunda",
    matches:
      createMatch({ homeTeam: "cameroon", time: "07:00", awayTeam: "serbia" }) +
      createMatch({ homeTeam: "south korea", time: "10:00", awayTeam: "ghana" }) +
      createMatch({ homeTeam: "brazil", time: "13:00", awayTeam: "switzerland" }) +
      createMatch({ homeTeam: "portugal", time: "16:00", awayTeam: "uruguay" })
  }) +
  createCard({
    date: "29/11",
    day: "terça",
    matches:
      createMatch({ homeTeam: "ecuador", time: "07:00", awayTeam: "senegal" }) +
      createMatch({ homeTeam: "netherlands", time: "10:00", awayTeam: "qatar" }) +
      createMatch({ homeTeam: "iran", time: "13:00", awayTeam: "united states" }) +
      createMatch({ homeTeam: "wales", time: "16:00", awayTeam: "england" })
  }) +
  createCard({
    date: "30/11",
    day: "quarta",
    matches:
      createMatch({ homeTeam: "tunisia", time: "07:00", awayTeam: "france" }) +
      createMatch({ homeTeam: "australia", time: "10:00", awayTeam: "denmark" }) +
      createMatch({ homeTeam: "poland", time: "13:00", awayTeam: "argentina" }) +
      createMatch({ homeTeam: "saudi arabia", time: "16:00", awayTeam: "mexico" })
  }) +
  createCard({
    date: "01/12",
    day: "quinta",
    matches:
      createMatch({ homeTeam: "croatia", time: "07:00", awayTeam: "belgium" }) +
      createMatch({ homeTeam: "canada", time: "10:00", awayTeam: "morocco" }) +
      createMatch({ homeTeam: "japan", time: "13:00", awayTeam: "spain" }) +
      createMatch({ homeTeam: "costa rica", time: "16:00", awayTeam: "germany" })
  }) +
  createCard({
    date: "02/12",
    day: "sexta",
    matches:
      createMatch({ homeTeam: "south korea", time: "07:00", awayTeam: "portugal" }) +
      createMatch({ homeTeam: "ghana", time: "10:00", awayTeam: "uruguay" }) +
      createMatch({ homeTeam: "serbia", time: "13:00", awayTeam: "switzerland" }) +
      createMatch({ homeTeam: "cameroon", time: "16:00", awayTeam: "brazil" })
  });

