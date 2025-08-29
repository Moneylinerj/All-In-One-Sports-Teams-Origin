const stateData = {
  "AZ": { order: 48, founded: "February 14, 1912" },
  "GA": { order: 4, founded: "January 2, 1788" },
  "MD": { order: 7, founded: "April 28, 1788" },
  "NY": { order: 11, founded: "July 26, 1788" },
  "NC": { order: 12, founded: "November 21, 1789" },
  "OH": { order: 17, founded: "March 1, 1803" },
  "TX": { order: 28, founded: "December 29, 1845" },
  "CO": { order: 38, founded: "August 1, 1876" },
  "MI": { order: 26, founded: "January 26, 1837" },
  "WI": { order: 30, founded: "May 29, 1848" },
  "FL": { order: 27, founded: "March 3, 1845" },
  "IN": { order: 19, founded: "December 11, 1816" },
  "MO": { order: 24, founded: "August 10, 1821" },
  "NV": { order: 36, founded: "October 31, 1864" },
  "CA": { order: 31, founded: "September 9, 1850" },
  "MN": { order: 32, founded: "May 11, 1858" },
  "MA": { order: 6, founded: "February 6, 1788" },
  "LA": { order: 18, founded: "April 30, 1812" },
  "NJ": { order: 3, founded: "December 18, 1787" },
  "PA": { order: 2, founded: "December 12, 1787" },
  "WA": { order: 42, founded: "November 11, 1889" },
  "TN": { order: 16, founded: "June 1, 1796" },
  "IL": { order: 21, founded: "December 3, 1818" }
};

const teams = [
  { name: "Arizona Cardinals", division: "NFC West", conference: "NFC", founded: "March 28, 1898", nflJoined: "1920", city: "Glendale", state: "AZ", cityFounded: "October 10, 1910", cityCharter: "October 10, 1910", stadium: "State Farm Stadium", stadiumOpened: "August 1, 2006" },
  { name: "Atlanta Falcons", division: "NFC South", conference: "NFC", founded: "June 30, 1965", nflJoined: "1966", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", stadium: "Mercedes-Benz Stadium", stadiumOpened: "August 26, 2017" },
  { name: "Baltimore Ravens", division: "AFC North", conference: "AFC", founded: "February 9, 1996", nflJoined: "1996", city: "Baltimore", state: "MD", cityFounded: "August 8, 1729", cityCharter: "January 13, 1797", stadium: "M&T Bank Stadium", stadiumOpened: "September 6, 1998" },
  { name: "Buffalo Bills", division: "AFC East", conference: "AFC", founded: "October 28, 1959", nflJoined: "1960", city: "Buffalo", state: "NY", cityFounded: "1810", cityCharter: "April 20, 1832", stadium: "Highmark Stadium", stadiumOpened: "August 17, 1973" },
  { name: "Carolina Panthers", division: "NFC South", conference: "NFC", founded: "October 26, 1993", nflJoined: "1995", city: "Charlotte", state: "NC", cityFounded: "December 3, 1768", cityCharter: "December 3, 1768", stadium: "Bank of America Stadium", stadiumOpened: "September 1, 1996" },
  { name: "Chicago Bears", division: "NFC North", conference: "NFC", founded: "September 20, 1919", nflJoined: "1920", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "Soldier Field", stadiumOpened: "October 9, 1924" },
  { name: "Cincinnati Bengals", division: "AFC North", conference: "AFC", founded: "May 23, 1967", nflJoined: "1968", city: "Cincinnati", state: "OH", cityFounded: "December 1788", cityCharter: "March 1, 1819", stadium: "Paycor Stadium", stadiumOpened: "August 19, 2000" },
  { name: "Cleveland Browns", division: "AFC North", conference: "AFC", founded: "April 20, 1945", nflJoined: "1950", city: "Cleveland", state: "OH", cityFounded: "July 22, 1796", cityCharter: "January 1, 1914", stadium: "Huntington Bank Field", stadiumOpened: "September 12, 1999" },
  { name: "Dallas Cowboys", division: "NFC East", conference: "NFC", founded: "January 28, 1960", nflJoined: "1960", city: "Arlington", state: "TX", cityFounded: "1876", cityCharter: "1884", stadium: "AT&T Stadium", stadiumOpened: "May 27, 2009" },
  { name: "Denver Broncos", division: "AFC West", conference: "AFC", founded: "August 14, 1959", nflJoined: "1960", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 7, 1861", stadium: "Empower Field at Mile High", stadiumOpened: "September 10, 2001" },
  { name: "Detroit Lions", division: "NFC North", conference: "NFC", founded: "July 12, 1930", nflJoined: "1930", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "September 13, 1806", stadium: "Ford Field", stadiumOpened: "September 22, 2002" },
  { name: "Green Bay Packers", division: "NFC North", conference: "NFC", founded: "August 11, 1919", nflJoined: "1921", city: "Green Bay", state: "WI", cityFounded: "1854", cityCharter: "February 27, 1854", stadium: "Lambeau Field", stadiumOpened: "September 29, 1957" },
  { name: "Houston Texans", division: "AFC South", conference: "AFC", founded: "October 6, 1999", nflJoined: "2002", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "June 5, 1837", stadium: "NRG Stadium", stadiumOpened: "August 24, 2002" },
  { name: "Indianapolis Colts", division: "AFC South", conference: "AFC", founded: "January 23, 1953", nflJoined: "1953", city: "Indianapolis", state: "IN", cityFounded: "January 6, 1821", cityCharter: "March 30, 1847", stadium: "Lucas Oil Stadium", stadiumOpened: "August 16, 2008" },
  { name: "Jacksonville Jaguars", division: "AFC South", conference: "AFC", founded: "November 30, 1993", nflJoined: "1995", city: "Jacksonville", state: "FL", cityFounded: "June 15, 1822", cityCharter: "February 9, 1832", stadium: "EverBank Stadium", stadiumOpened: "August 18, 1995" },
  { name: "Kansas City Chiefs", division: "AFC West", conference: "AFC", founded: "August 14, 1959", nflJoined: "1960", city: "Kansas City", state: "MO", cityFounded: "June 3, 1850", cityCharter: "March 28, 1853", stadium: "GEHA Field at Arrowhead Stadium", stadiumOpened: "August 12, 1972" },
  { name: "Las Vegas Raiders", division: "AFC West", conference: "AFC", founded: "January 30, 1960", nflJoined: "1960", city: "Las Vegas", state: "NV", cityFounded: "May 15, 1905", cityCharter: "March 16, 1911", stadium: "Allegiant Stadium", stadiumOpened: "July 31, 2020" },
  { name: "Los Angeles Chargers", division: "AFC West", conference: "AFC", founded: "August 14, 1959", nflJoined: "1960", city: "Inglewood", state: "CA", cityFounded: "February 7, 1908", cityCharter: "February 7, 1908", stadium: "SoFi Stadium", stadiumOpened: "September 8, 2020" },
  { name: "Los Angeles Rams", division: "NFC West", conference: "NFC", founded: "February 12, 1937", nflJoined: "1937", city: "Inglewood", state: "CA", cityFounded: "February 7, 1908", cityCharter: "February 7, 1908", stadium: "SoFi Stadium", stadiumOpened: "September 8, 2020" },
  { name: "Miami Dolphins", division: "AFC East", conference: "AFC", founded: "August 16, 1965", nflJoined: "1966", city: "Miami Gardens", state: "FL", cityFounded: "May 13, 2003", cityCharter: "May 13, 2003", stadium: "Hard Rock Stadium", stadiumOpened: "August 16, 1987" },
  { name: "Minnesota Vikings", division: "NFC North", conference: "NFC", founded: "January 28, 1960", nflJoined: "1961", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "1872", stadium: "U.S. Bank Stadium", stadiumOpened: "July 22, 2016" },
  { name: "New England Patriots", division: "AFC East", conference: "AFC", founded: "November 22, 1959", nflJoined: "1960", city: "Foxborough", state: "MA", cityFounded: "June 10, 1778", cityCharter: "June 10, 1778", stadium: "Gillette Stadium", stadiumOpened: "May 11, 2002" },
  { name: "New Orleans Saints", division: "NFC South", conference: "NFC", founded: "November 1, 1966", nflJoined: "1967", city: "New Orleans", state: "LA", cityFounded: "Spring 1718", cityCharter: "March 7, 1805", stadium: "Caesars Superdome", stadiumOpened: "August 3, 1975" },
  { name: "New York Giants", division: "NFC East", conference: "NFC", founded: "August 1, 1925", nflJoined: "1925", city: "East Rutherford", state: "NJ", cityFounded: "March 29, 1894", cityCharter: "March 29, 1894", stadium: "MetLife Stadium", stadiumOpened: "April 10, 2010" },
  { name: "New York Jets", division: "AFC East", conference: "AFC", founded: "August 14, 1959", nflJoined: "1960", city: "East Rutherford", state: "NJ", cityFounded: "March 29, 1894", cityCharter: "March 29, 1894", stadium: "MetLife Stadium", stadiumOpened: "April 10, 2010" },
  { name: "Philadelphia Eagles", division: "NFC East", conference: "NFC", founded: "July 8, 1933", nflJoined: "1933", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 25, 1701", stadium: "Lincoln Financial Field", stadiumOpened: "August 3, 2003" },
  { name: "Pittsburgh Steelers", division: "AFC North", conference: "AFC", founded: "July 8, 1933", nflJoined: "1933", city: "Pittsburgh", state: "PA", cityFounded: "November 27, 1758", cityCharter: "March 18, 1816", stadium: "Acrisure Stadium", stadiumOpened: "August 18, 2001" },
  { name: "San Francisco 49ers", division: "NFC West", conference: "NFC", founded: "June 4, 1944", nflJoined: "1950", city: "Santa Clara", state: "CA", cityFounded: "January 12, 1777", cityCharter: "July 5, 1852", stadium: "Levi's Stadium", stadiumOpened: "July 17, 2014" },
  { name: "Seattle Seahawks", division: "NFC West", conference: "NFC", founded: "June 4, 1974", nflJoined: "1976", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "December 2, 1869", stadium: "Lumen Field", stadiumOpened: "July 20, 2002" },
  { name: "Tampa Bay Buccaneers", division: "NFC South", conference: "NFC", founded: "April 24, 1974", nflJoined: "1976", city: "Tampa", state: "FL", cityFounded: "January 18, 1849", cityCharter: "December 15, 1855", stadium: "Raymond James Stadium", stadiumOpened: "September 20, 1998" },
  { name: "Tennessee Titans", division: "AFC South", conference: "AFC", founded: "August 14, 1959", nflJoined: "1960", city: "Nashville", state: "TN", cityFounded: "December 24, 1779", cityCharter: "April 23, 1806", stadium: "Nissan Stadium", stadiumOpened: "September 12, 1999" },
  { name: "Washington Commanders", division: "NFC East", conference: "NFC", founded: "July 9, 1932", nflJoined: "1932", city: "Landover", state: "MD", cityFounded: "July 16, 1790 (D.C.)", cityCharter: "", stadium: "Commanders Field", stadiumOpened: "September 14, 1997" }
];

let filtered = [...teams];

function getOrdinal(n) {
  const s = n.toString();
  const last = s[s.length - 1];
  const secondLast = s[s.length - 2];
  if (secondLast === '1') return 'th';
  if (last === '1') return 'st';
  if (last === '2') return 'nd';
  if (last === '3') return 'rd';
  return 'th';
}

function getDayInfo(dateStr) {
  if (!dateStr) return { dayOfYear: '—', daysLeft: '—' };
  try {
    const date = new Date(dateStr);
    if (isNaN(date)) return { dayOfYear: '—', daysLeft: '—' };
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const isLeap = (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) || (date.getFullYear() % 400 === 0);
    const totalDays = isLeap ? 366 : 365;
    const daysLeft = totalDays - dayOfYear;
    return { dayOfYear, daysLeft };
  } catch (e) {
    return { dayOfYear: '—', daysLeft: '—' };
  }
}

function renderCards() {
  const container = document.getElementById('data-table');
  const grouped = {};
  
  filtered.forEach(team => {
    if (!grouped[team.conference]) grouped[team.conference] = {};
    if (!grouped[team.conference][team.division]) grouped[team.conference][team.division] = [];
    grouped[team.conference][team.division].push(team);
  });

  let html = '<div class="teams-container">';
  Object.keys(grouped).sort().forEach(conf => {
    html += '<div class="conference-section"><h2 class="conference-title">' + conf + '</h2>';
    Object.keys(grouped[conf]).sort().forEach(div => {
      html += '<div class="division-section"><h3 class="division-title">' + div + '</h3><div class="teams-grid">';
      grouped[conf][div].forEach(team => {
        const exact = team.founded !== team.nflJoined;
        const foundedClass = exact ? 'exact-founding' : 'nfl-founding';
        const foundedText = exact ? team.founded : 'NFL: ' + team.nflJoined;
        const stateInfo = stateData[team.state];
        const stateText = stateInfo ? team.state + ' • ' + stateInfo.order + getOrdinal(stateInfo.order) + ' State' : team.state;
        
        html += '<div class="team-card ' + foundedClass + '" onclick="showPopup(\'' + team.name + '\')">';
        html += '<div class="team-card-content">';
        html += '<h4 class="team-name">' + team.name + '</h4>';
        html += '<p class="team-location">' + team.city + ', ' + stateText + '</p>';
        html += '<p class="team-founded">' + foundedText + '</p>';
        html += '</div></div>';
      });
      html += '</div></div>';
    });
    html += '</div>';
  });
  html += '</div>';
  
  html += '<div id="team-modal" class="modal"><div class="modal-content">';
  html += '<span class="close" onclick="closePopup()">&times;</span><div id="modal-body"></div></div></div>';
  
  container.innerHTML = html;
}

function showPopup(teamName) {
  const team = teams.find(t => t.name === teamName);
  if (!team) return;
  
  const exact = team.founded !== team.nflJoined;
  const stateInfo = stateData[team.state];
  const teamInfo = getDayInfo(team.founded);
  const cityInfo = getDayInfo(team.cityFounded);
  const charterInfo = getDayInfo(team.cityCharter);
  const stadiumInfo = getDayInfo(team.stadiumOpened);
  const stateFoundedInfo = stateInfo ? getDayInfo(stateInfo.founded) : { dayOfYear: '—', daysLeft: '—' };
  
  let html = '<div class="popup-header"><h2>' + team.name + '</h2><p class="popup-division">' + team.division + '</p></div>';
  html += '<div class="popup-content">';
  
  html += '<div class="info-section"><h3>Team History</h3><div class="info-grid">';
  html += '<div class="info-item"><label>Founded:</label><span class="' + (exact ? 'exact-date' : 'nfl-date') + '">' + team.founded + '</span>';
  html += '<small>Day ' + teamInfo.dayOfYear + ' • ' + teamInfo.daysLeft + ' days left</small></div>';
  html += '<div class="info-item"><label>Joined NFL:</label><span>' + team.nflJoined + '</span></div>';
  html += '<div class="info-item"><label>Conference:</label><span>' + team.conference + '</span></div>';
  html += '<div class="info-item"><label>Division:</label><span>' + team.division + '</span></div></div></div>';
  
  html += '<div class="info-section"><h3>Location Details</h3><div class="info-grid">';
  html += '<div class="info-item"><label>City:</label><span>' + team.city + '</span></div>';
  html += '<div class="info-item"><label>State:</label><span>' + team.state + (stateInfo ? ' • ' + stateInfo.order + getOrdinal(stateInfo.order) + ' State' : '') + '</span></div>';
  html += '<div class="info-item"><label>City Founded:</label><span>' + (team.cityFounded || 'Not available') + '</span>';
  if (team.cityFounded) html += '<small>Day ' + cityInfo.dayOfYear + ' • ' + cityInfo.daysLeft + ' days left</small>';
  html += '</div>';
  html += '<div class="info-item"><label>City Chartered:</label><span>' + (team.cityCharter || 'Not available') + '</span>';
  if (team.cityCharter) html += '<small>Day ' + charterInfo.dayOfYear + ' • ' + charterInfo.daysLeft + ' days left</small>';
  html += '</div>';
  if (stateInfo) {
    html += '<div class="info-item"><label>State Founded:</label><span>' + stateInfo.founded + '</span>';
    html += '<small>Day ' + stateFoundedInfo.dayOfYear + ' • ' + stateFoundedInfo.daysLeft + ' days left</small></div>';
  }
  html += '</div></div>';
  
  html += '<div class="info-section"><h3>Stadium Information</h3><div class="info-grid">';
  html += '<div class="info-item"><label>Stadium:</label><span>' + team.stadium + '</span></div>';
  html += '<div class="info-item"><label>Stadium Opened:</label><span>' + team.stadiumOpened + '</span>';
  html += '<small>Day ' + stadiumInfo.dayOfYear + ' • ' + stadiumInfo.daysLeft + ' days left</small></div></div></div></div>';
  
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('team-modal').style.display = 'block';
}

function closePopup() {
  document.getElementById('team-modal').style.display = 'none';
}

function initFilters() {
  const divisions = [...new Set(teams.map(t => t.division))].sort();
  const select = document.getElementById('division-filter');
  if (select) {
    divisions.forEach(div => {
      const option = document.createElement('option');
      option.value = div;
      option.textContent = div;
      select.appendChild(option);
    });
    
    document.getElementById('search').addEventListener('input', function() {
      const term = this.value.toLowerCase();
      filtered = teams.filter(t => 
        t.name.toLowerCase().includes(term) || 
        t.city.toLowerCase().includes(term) || 
        t.state.toLowerCase().includes(term) || 
        t.stadium.toLowerCase().includes(term)
      );
      renderCards();
    });
    
    document.getElementById('conference-filter').addEventListener('change', function() {
      if (this.value) filtered = teams.filter(t => t.conference === this.value);
      else filtered = [...teams];
      renderCards();
    });
    
    select.addEventListener('change', function() {
      if (this.value) filtered = teams.filter(t => t.division === this.value);
      else filtered = [...teams];
      renderCards();
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initFilters();
  renderCards();
});

window.onclick = function(event) {
  const modal = document.getElementById('team-modal');
  if (event.target === modal) modal.style.display = 'none';
}
