const nflTeams = [
  {
    name: "Arizona Cardinals",
    division: "NFC West",
    conference: "NFC",
    founded: "September 17, 1920",
    nflJoined: "1920",
    city: "Glendale",
    state: "AZ",
    cityFounded: "October 10, 1910",
    cityCharter: "October 10, 1910",
    stadium: "State Farm Stadium",
    stadiumOpened: "August 1, 2006"
  },
  {
    name: "Atlanta Falcons",
    division: "NFC South",
    conference: "NFC",
    founded: "June 30, 1965",
    nflJoined: "1966",
    city: "Atlanta",
    state: "GA",
    cityFounded: "1837",
    cityCharter: "December 29, 1847",
    stadium: "Mercedes-Benz Stadium",
    stadiumOpened: "August 26, 2017"
  },
  {
    name: "Baltimore Ravens",
    division: "AFC North",
    conference: "AFC",
    founded: "February 9, 1996",
    nflJoined: "1996",
    city: "Baltimore",
    state: "MD",
    cityFounded: "August 8, 1729",
    cityCharter: "January 13, 1797",
    stadium: "M&T Bank Stadium",
    stadiumOpened: "September 6, 1998"
  },
  {
    name: "Buffalo Bills",
    division: "AFC East",
    conference: "AFC",
    founded: "October 28, 1959",
    nflJoined: "1960",
    city: "Buffalo",
    state: "NY",
    cityFounded: "1810",
    cityCharter: "April 20, 1832",
    stadium: "Highmark Stadium",
    stadiumOpened: "August 17, 1973"
  },
  {
    name: "Carolina Panthers",
    division: "NFC South",
    conference: "NFC",
    founded: "October 26, 1993",
    nflJoined: "1995",
    city: "Charlotte",
    state: "NC",
    cityFounded: "December 3, 1768",
    cityCharter: "December 3, 1768",
    stadium: "Bank of America Stadium",
    stadiumOpened: "September 1, 1996"
  },
  {
    name: "Chicago Bears",
    division: "NFC North",
    conference: "NFC",
    founded: "September 17, 1920",
    nflJoined: "1920",
    city: "Chicago",
    state: "IL",
    cityFounded: "March 4, 1837",
    cityCharter: "March 4, 1837",
    stadium: "Soldier Field",
    stadiumOpened: "October 9, 1924"
  },
  {
    name: "Cincinnati Bengals",
    division: "AFC North",
    conference: "AFC",
    founded: "May 23, 1967",
    nflJoined: "1968",
    city: "Cincinnati",
    state: "OH",
    cityFounded: "December 1788",
    cityCharter: "March 1, 1819",
    stadium: "Paycor Stadium",
    stadiumOpened: "August 19, 2000"
  },
  {
    name: "Cleveland Browns",
    division: "AFC North",
    conference: "AFC",
    founded: "April 20, 1945",
    nflJoined: "1950",
    city: "Cleveland",
    state: "OH",
    cityFounded: "July 22, 1796",
    cityCharter: "January 1, 1914",
    stadium: "Huntington Bank Field",
    stadiumOpened: "September 12, 1999"
  },
  {
    name: "Dallas Cowboys",
    division: "NFC East",
    conference: "NFC",
    founded: "January 28, 1960",
    nflJoined: "1960",
    city: "Arlington",
    state: "TX",
    cityFounded: "1876",
    cityCharter: "1884",
    stadium: "AT&T Stadium",
    stadiumOpened: "May 27, 2009"
  },
  {
    name: "Denver Broncos",
    division: "AFC West",
    conference: "AFC",
    founded: "August 14, 1959",
    nflJoined: "1960",
    city: "Denver",
    state: "CO",
    cityFounded: "November 22, 1858",
    cityCharter: "November 7, 1861",
    stadium: "Empower Field at Mile High",
    stadiumOpened: "September 10, 2001"
  },
  {
    name: "Detroit Lions",
    division: "NFC North",
    conference: "NFC",
    founded: "July 12, 1930",
    nflJoined: "1930",
    city: "Detroit",
    state: "MI",
    cityFounded: "July 24, 1701",
    cityCharter: "September 13, 1806",
    stadium: "Ford Field",
    stadiumOpened: "September 22, 2002"
  },
  {
    name: "Green Bay Packers",
    division: "NFC North",
    conference: "NFC",
    founded: "August 11, 1919",
    nflJoined: "1921",
    city: "Green Bay",
    state: "WI",
    cityFounded: "1854",
    cityCharter: "February 27, 1854",
    stadium: "Lambeau Field",
    stadiumOpened: "September 29, 1957"
  },
  {
    name: "Houston Texans",
    division: "AFC South",
    conference: "AFC",
    founded: "October 6, 1999",
    nflJoined: "2002",
    city: "Houston",
    state: "TX",
    cityFounded: "August 30, 1836",
    cityCharter: "June 5, 1837",
    stadium: "NRG Stadium",
    stadiumOpened: "August 24, 2002"
  },
  {
    name: "Indianapolis Colts",
    division: "AFC South",
    conference: "AFC",
    founded: "January 23, 1953",
    nflJoined: "1953",
    city: "Indianapolis",
    state: "IN",
    cityFounded: "January 6, 1821",
    cityCharter: "March 30, 1847",
    stadium: "Lucas Oil Stadium",
    stadiumOpened: "August 16, 2008"
  },
  {
    name: "Jacksonville Jaguars",
    division: "AFC South",
    conference: "AFC",
    founded: "November 30, 1993",
    nflJoined: "1995",
    city: "Jacksonville",
    state: "FL",
    cityFounded: "June 15, 1822",
    cityCharter: "February 9, 1832",
    stadium: "EverBank Stadium",
    stadiumOpened: "August 18, 1995"
  },
  {
    name: "Kansas City Chiefs",
    division: "AFC West",
    conference: "AFC",
    founded: "August 14, 1959",
    nflJoined: "1960",
    city: "Kansas City",
    state: "MO",
    cityFounded: "June 3, 1850",
    cityCharter: "March 28, 1853",
    stadium: "GEHA Field at Arrowhead Stadium",
    stadiumOpened: "August 12, 1972"
  },
  {
    name: "Las Vegas Raiders",
    division: "AFC West",
    conference: "AFC",
    founded: "January 30, 1960",
    nflJoined: "1960",
    city: "Las Vegas",
    state: "NV",
    cityFounded: "May 15, 1905",
    cityCharter: "March 16, 1911",
    stadium: "Allegiant Stadium",
    stadiumOpened: "July 31, 2020"
  },
  {
    name: "Los Angeles Chargers",
    division: "AFC West",
    conference: "AFC",
    founded: "August 14, 1959",
    nflJoined: "1960",
    city: "Inglewood",
    state: "CA",
    cityFounded: "February 7, 1908",
    cityCharter: "February 7, 1908",
    stadium: "SoFi Stadium",
    stadiumOpened: "September 8, 2020"
  },
  {
    name: "Los Angeles Rams",
    division: "NFC West",
    conference: "NFC",
    founded: "February 12, 1937",
    nflJoined: "1937",
    city: "Inglewood",
    state: "CA",
    cityFounded: "February 7, 1908",
    cityCharter: "February 7, 1908",
    stadium: "SoFi Stadium",
    stadiumOpened: "September 8, 2020"
  },
  {
    name: "Miami Dolphins",
    division: "AFC East",
    conference: "AFC",
    founded: "August 16, 1965",
    nflJoined: "1966",
    city: "Miami Gardens",
    state: "FL",
    cityFounded: "May 13, 2003",
    cityCharter: "May 13, 2003",
    stadium: "Hard Rock Stadium",
    stadiumOpened: "August 16, 1987"
  },
  {
    name: "Minnesota Vikings",
    division: "NFC North",
    conference: "NFC",
    founded: "January 28, 1960",
    nflJoined: "1961",
    city: "Minneapolis",
    state: "MN",
    cityFounded: "1872",
    cityCharter: "1872",
    stadium: "U.S. Bank Stadium",
    stadiumOpened: "July 22, 2016"
  },
  {
    name: "New England Patriots",
    division: "AFC East",
    conference: "AFC",
    founded: "November 22, 1959",
    nflJoined: "1960",
    city: "Foxborough",
    state: "MA",
    cityFounded: "June 10, 1778",
    cityCharter: "June 10, 1778",
    stadium: "Gillette Stadium",
    stadiumOpened: "May 11, 2002"
  },
  {
    name: "New Orleans Saints",
    division: "NFC South",
    conference: "NFC",
    founded: "November 1, 1966",
    nflJoined: "1967",
    city: "New Orleans",
    state: "LA",
    cityFounded: "Spring 1718",
    cityCharter: "March 7, 1805",
    stadium: "Caesars Superdome",
    stadiumOpened: "August 3, 1975"
  },
  {
    name: "New York Giants",
    division: "NFC East",
    conference: "NFC",
    founded: "August 1, 1925",
    nflJoined: "1925",
    city: "East Rutherford",
    state: "NJ",
    cityFounded: "March 29, 1894",
    cityCharter: "March 29, 1894",
    stadium: "MetLife Stadium",
    stadiumOpened: "April 10, 2010"
  },
  {
    name: "New York Jets",
    division: "AFC East",
    conference: "AFC",
    founded: "August 14, 1959",
    nflJoined: "1960",
    city: "East Rutherford",
    state: "NJ",
    cityFounded: "March 29, 1894",
    cityCharter: "March 29, 1894",
    stadium: "MetLife Stadium",
    stadiumOpened: "April 10, 2010"
  },
  {
    name: "Philadelphia Eagles",
    division: "NFC East",
    conference: "NFC",
    founded: "July 8, 1933",
    nflJoined: "1933",
    city: "Philadelphia",
    state: "PA",
    cityFounded: "1682",
    cityCharter: "October 25, 1701",
    stadium: "Lincoln Financial Field",
    stadiumOpened: "August 3, 2003"
  },
  {
    name: "Pittsburgh Steelers",
    division: "AFC North",
    conference: "AFC",
    founded: "July 8, 1933",
    nflJoined: "1933",
    city: "Pittsburgh",
    state: "PA",
    cityFounded: "November 27, 1758",
    cityCharter: "March 18, 1816",
    stadium: "Acrisure Stadium",
    stadiumOpened: "August 18, 2001"
  },
  {
    name: "San Francisco 49ers",
    division: "NFC West",
    conference: "NFC",
    founded: "June 4, 1944",
    nflJoined: "1950",
    city: "Santa Clara",
    state: "CA",
    cityFounded: "January 12, 1777",
    cityCharter: "July 5, 1852",
    stadium: "Levi's Stadium",
    stadiumOpened: "July 17, 2014"
  },
  {
    name: "Seattle Seahawks",
    division: "NFC West",
    conference: "NFC",
    founded: "June 4, 1974",
    nflJoined: "1976",
    city: "Seattle",
    state: "WA",
    cityFounded: "May 23, 1853",
    cityCharter: "December 2, 1869",
    stadium: "Lumen Field",
    stadiumOpened: "July 20, 2002"
  },
  {
    name: "Tampa Bay Buccaneers",
    division: "NFC South",
    conference: "NFC",
    founded: "April 24, 1974",
    nflJoined: "1976",
    city: "Tampa",
    state: "FL",
    cityFounded: "January 18, 1849",
    cityCharter: "December 15, 1855",
    stadium: "Raymond James Stadium",
    stadiumOpened: "September 20, 1998"
  },
  {
    name: "Tennessee Titans",
    division: "AFC South",
    conference: "AFC",
    founded: "August 14, 1959",
    nflJoined: "1960",
    city: "Nashville",
    state: "TN",
    cityFounded: "December 24, 1779",
    cityCharter: "April 23, 1806",
    stadium: "Nissan Stadium",
    stadiumOpened: "September 12, 1999"
  },
  {
    name: "Washington Commanders",
    division: "NFC East",
    conference: "NFC",
    founded: "July 9, 1932",
    nflJoined: "1932",
    city: "Landover",
    state: "MD",
    cityFounded: "July 16, 1790",
    cityCharter: "",
    stadium: "Commanders Field",
    stadiumOpened: "September 14, 1997"
  }
];

// Global variables
let filteredTeams = [...nflTeams];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  initializeFilters();
  renderTeamCards();
});

function initializeFilters() {
  // Populate division dropdown
  const divisions = [...new Set(nflTeams.map(team => team.division))].sort();
  const divisionSelect = document.getElementById('division-filter');
  divisions.forEach(division => {
    const option = document.createElement('option');
    option.value = division;
    option.textContent = division;
    divisionSelect.appendChild(option);
  });

  // Add event listeners
  document.getElementById('search').addEventListener('input', handleSearch);
  document.getElementById('conference-filter').addEventListener('change', handleFilter);
  document.getElementById('division-filter').addEventListener('change', handleFilter);
  document.getElementById('date-type').addEventListener('change', handleFilter);
}

function handleSearch() {
  filterAndRender();
}

function handleFilter() {
  filterAndRender();
}

function filterAndRender() {
  filteredTeams = [...nflTeams];

  // Search filter
  const searchTerm = document.getElementById('search').value.toLowerCase();
  if (searchTerm) {
    filteredTeams = filteredTeams.filter(team =>
      team.name.toLowerCase().includes(searchTerm) ||
      team.city.toLowerCase().includes(searchTerm) ||
      team.state.toLowerCase().includes(searchTerm) ||
      team.stadium.toLowerCase().includes(searchTerm)
    );
  }

  // Conference filter
  const conference = document.getElementById('conference-filter').value;
  if (conference) {
    filteredTeams = filteredTeams.filter(team => team.conference === conference);
  }

  // Division filter
  const division = document.getElementById('division-filter').value;
  if (division) {
    filteredTeams = filteredTeams.filter(team => team.division === division);
  }

  // Date type filter
  const dateType = document.getElementById('date-type').value;
  if (dateType === 'exact') {
    filteredTeams = filteredTeams.filter(team => team.founded !== team.nflJoined);
  } else if (dateType === 'nfl') {
    filteredTeams = filteredTeams.filter(team => team.founded === team.nflJoined);
  }

  renderTeamCards();
}

function renderTeamCards() {
  const container = document.getElementById('data-table');
  
  // Group teams by conference and division
  const groupedTeams = {};
  
  filteredTeams.forEach(team => {
    if (!groupedTeams[team.conference]) {
      groupedTeams[team.conference] = {};
    }
    if (!groupedTeams[team.conference][team.division]) {
      groupedTeams[team.conference][team.division] = [];
    }
    groupedTeams[team.conference][team.division].push(team);
  });

  let html = '<div class="teams-container">';

  // Sort conferences (AFC first, then NFC)
  const conferences = Object.keys(groupedTeams).sort();
  
  conferences.forEach(conference => {
    html += `<div class="conference-section">`;
    html += `<h2 class="conference-title">${conference}</h2>`;
    
    const divisions = Object.keys(groupedTeams[conference]).sort();
    
    divisions.forEach(division => {
      html += `<div class="division-section">`;
      html += `<h3 class="division-title">${division}</h3>`;
      html += `<div class="teams-grid">`;
      
      groupedTeams[conference][division].forEach(team => {
        const hasExactFounding = team.founded && team.founded !== team.nflJoined;
        const foundedClass = hasExactFounding ? 'exact-founding' : 'nfl-founding';
        const foundedText = hasExactFounding ? team.founded : `NFL: ${team.nflJoined}`;
        
        html += `
          <div class="team-card ${foundedClass}" onclick="showTeamPopup('${team.name}')">
            <div class="team-card-content">
              <h4 class="team-name">${team.name}</h4>
              <p class="team-location">${team.city}, ${team.state}</p>
              <p class="team-founded">${foundedText}</p>
            </div>
          </div>
        `;
      });
      
      html += `</div></div>`;
    });
    
    html += `</div>`;
  });

  html += '</div>';

  // Add modal HTML
  html += `
    <div id="team-modal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeTeamPopup()">&times;</span>
        <div id="modal-body"></div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function showTeamPopup(teamName) {
  const team = nflTeams.find(t => t.name === teamName);
  if (!team) return;

  const hasExactFounding = team.founded && team.founded !== team.nflJoined;
  
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <div class="popup-header">
      <h2>${team.name}</h2>
      <p class="popup-division">${team.division}</p>
    </div>
    
    <div class="popup-content">
      <div class="info-section">
        <h3>Team History</h3>
        <div class="info-grid">
          <div class="info-item">
            <label>Founded:</label>
            <span class="${hasExactFounding ? 'exact-date' : 'nfl-date'}">${team.founded}</span>
          </div>
          <div class="info-item">
            <label>Joined NFL:</label>
            <span>${team.nflJoined}</span>
          </div>
          <div class="info-item">
            <label>Conference:</label>
            <span>${team.conference}</span>
          </div>
          <div class="info-item">
            <label>Division:</label>
            <span>${team.division}</span>
          </div>
        </div>
      </div>

      <div class="info-section">
        <h3>Location Details</h3>
        <div class="info-grid">
          <div class="info-item">
            <label>City:</label>
            <span>${team.city}</span>
          </div>
          <div class="info-item">
            <label>State:</label>
            <span>${team.state}</span>
          </div>
          <div class="info-item">
            <label>City Founded:</label>
            <span>${team.cityFounded || 'Not available'}</span>
          </div>
          <div class="info-item">
            <label>City Chartered:</label>
            <span>${team.cityCharter || 'Not available'}</span>
          </div>
        </div>
      </div>

      <div class="info-section">
        <h3>Stadium Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <label>Stadium:</label>
            <span>${team.stadium}</span>
          </div>
          <div class="info-item">
            <label>Stadium Opened:</label>
            <span>${team.stadiumOpened}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('team-modal').style.display = 'block';
}

function closeTeamPopup() {
  document.getElementById('team-modal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('team-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
