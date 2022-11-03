function createMatches(matches) {
  return matches.map(match =>
    `
      <li>
        <img src="./assets/icon=${match.home}.svg" alt="${match.home}" />
        <strong>${match.time}</strong>
        <img src="./assets/icon=${match.away}.svg" alt="${match.away}" />
      </li>
    `
  );
}

function createCards({ date, day, matches }) {
  console.log
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${matches}
    </ul>
  </div>
`
}


document.querySelector("#app").innerHTML = `
<header>
  <img src="./assets/logo.svg" alt="Logo da NLW">
</header>
<main id="cards">
  ${createCards({
    date: '20/11',
    day: 'Domingo',
    matches: createMatches([{ home: 'qatar', away: 'ecuador', time: '13:00' }])
  })}
  ${createCards({
    date: '21/11',
    day: 'Segunda',
    matches: createMatches([
      { home: 'england', away: 'iran', time: '10:00' },
      { home: 'senegal', away: 'netherlands', time: '13:00' },
      { home: 'united states', away: 'wales', time: '16:00'}
    ])
  })}
</main>
`