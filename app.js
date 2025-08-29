const nflTeams = [
  {
    team: "Arizona Cardinals",
    division: "NFC West",
    founded: "September 17, 1920",
    city: "Glendale, AZ",
    cityFounded: "October 10, 1910",
    cityCharter: "October 10, 1910",
    stadium: "State Farm Stadium",
    stadiumOpened: "August 1, 2006"
  },
  {
    team: "Atlanta Falcons",
    division: "NFC South",
    founded: "June 30, 1965",
    city: "Atlanta, GA",
    cityFounded: "1837",
    cityCharter: "December 29, 1847",
    stadium: "Mercedes-Benz Stadium",
    stadiumOpened: "August 26, 2017"
  },
  {
    team: "Baltimore Ravens",
    division: "AFC North",
    founded: "February 9, 1996",
    city: "Baltimore, MD",
    cityFounded: "August 8, 1729",
    cityCharter: "January 13, 1797",
    stadium: "M&T Bank Stadium",
    stadiumOpened: "September 6, 1998"
  },
  {
    team: "Buffalo Bills",
    division: "AFC East",
    founded: "October 28, 1959",
    city: "Buffalo, NY",
    cityFounded: "1810",
    cityCharter: "April 20, 1832",
    stadium: "Highmark Stadium",
    stadiumOpened: "August 17, 1973"
  },
  {
    team: "Carolina Panthers",
    division: "NFC South",
    founded: "October 26, 1993",
    city: "Charlotte, NC",
    cityFounded: "December 3, 1768",
    cityCharter: "December 3, 1768",
    stadium: "Bank of America Stadium",
    stadiumOpened: "September 1, 1996"
  },
  {
    team: "Chicago Bears",
    division: "NFC North",
    founded: "September 17, 1920",
    city: "Chicago, IL",
    cityFounded: "March 4, 1837",
    cityCharter: "March 4, 1837",
    stadium: "Soldier Field",
    stadiumOpened: "October 9, 1924"
  },
  {
    team: "Cincinnati Bengals",
    division: "AFC North",
    founded: "May 23, 1967",
    city: "Cincinnati, OH",
    cityFounded: "December 1788",
    cityCharter: "March 1, 1819",
    stadium: "Paycor Stadium",
    stadiumOpened: "August 19, 2000"
  },
  {
    team: "Cleveland Browns",
    division: "AFC North",
    founded: "April 20, 1945",
    city: "Cleveland, OH",
    cityFounded: "July 22, 1796",
    cityCharter: "January 1, 1914",
    stadium: "Huntington Bank Field",
    stadiumOpened: "September 12, 1999"
  },
  {
    team: "Dallas Cowboys",
    division: "NFC East",
    founded: "January 28, 1960",
    city: "Arlington, TX",
    cityFounded: "1876",
    cityCharter: "1884",
    stadium: "AT&T Stadium",
    stadiumOpened: "May 27, 2009"
  },
  {
    team: "Denver Broncos",
    division: "AFC West",
    founded: "August 14, 1959",
    city: "Denver, CO",
    cityFounded: "November 22, 1858",
    cityCharter: "November 7, 1861",
    stadium: "Empower Field at Mile High",
    stadiumOpened: "September 10, 2001"
  },
  {
    team: "Detroit Lions",
    division: "NFC North",
    founded: "July 12, 1930",
    city: "Detroit, MI",
    cityFounded: "July 24, 1701",
    cityCharter: "September 13, 1806",
    stadium: "Ford Field",
    stadiumOpened: "September 22, 2002"
  },
  {
    team: "Green Bay Packers",
    division: "NFC North",
    founded: "August 11, 1919",
    city: "Green Bay, WI",
    cityFounded: "1854",
    cityCharter: "February 27, 1854",
    stadium: "Lambeau Field",
    stadiumOpened: "September 29, 1957"
  },
  {
    team: "Houston Texans",
    division: "AFC South",
    founded: "October 6, 1999",
    city: "Houston, TX",
    cityFounded: "August 30, 1836",
    cityCharter: "June 5, 1837",
    stadium: "NRG Stadium",
    stadiumOpened: "August 24, 2002"
  },
  {
    team: "Indianapolis Colts",
    division: "AFC South",
    founded: "January 23, 1953",
    city: "Indianapolis, IN",
    cityFounded: "January 6, 1821",
    cityCharter: "March 30, 1847",
    stadium: "Lucas Oil Stadium",
    stadiumOpened: "August 16, 2008"
  },
  {
    team: "Jacksonville Jaguars",
    division: "AFC South",
    founded: "November 30, 1993",
    city: "Jacksonville, FL",
    cityFounded: "June 15, 1822",
    cityCharter: "February 9, 1832",
    stadium: "EverBank Stadium",
    stadiumOpened: "August 18, 1995"
  },
  {
    team: "Kansas City Chiefs",
    division: "AFC West",
    founded: "August 14, 1959",
    city: "Kansas City, MO",
    cityFounded: "June 3, 1850",
    cityCharter: "March 28, 1853",
    stadium: "GEHA Field at Arrowhead Stadium",
    stadiumOpened: "August 12, 1972"
  },
  {
    team: "Las Vegas Raiders",
    division: "AFC West",
    founded: "January 30, 1960",
    city: "Las Vegas, NV",
    cityFounded: "May 15, 1905",
    cityCharter: "March 16, 1911",
    stadium: "Allegiant Stadium",
    stadiumOpened: "July 31, 2020"
  },
  {
    team: "Los Angeles Chargers",
    division: "AFC West",
    founded: "August 14, 1959",
    city: "Inglewood, CA",
    cityFounded: "February 7, 1908",
    cityCharter: "February 7, 1908",
    stadium: "SoFi Stadium",
    stadiumOpened: "September 8, 2020"
  },
  {
    team: "Los Angeles Rams",
    division: "NFC West",
    founded: "February 12, 1937",
    city: "Inglewood, CA",
    cityFounded: "February 7, 1908",
    cityCharter: "February 7, 1908",
    stadium: "SoFi Stadium",
    stadiumOpened: "September 8, 2020"
  },
  {
    team: "Miami Dolphins",
    division: "AFC East",
    founded: "August 16, 1965",
    city: "Miami Gardens, FL",
    cityFounded: "May 13, 2003",
    cityCharter: "May 13, 2003",
    stadium: "Hard Rock Stadium",
    stadiumOpened: "August 16, 1987"
  },
  {
    team: "Minnesota Vikings",
    division: "NFC North",
    founded: "January 28, 1960",
    city: "Minneapolis, MN",
    cityFounded: "1872",
    cityCharter: "1872",
    stadium: "U.S. Bank Stadium",
    stadiumOpened: "July 22, 2016"
  },
  {
    team: "New England Patriots",
    division: "AFC East",
    founded: "November 22, 1959",
    city: "Foxborough, MA",
    cityFounded: "June 10, 1778",
    cityCharter: "June 10, 1778",
    stadium: "Gillette Stadium",
    stadiumOpened: "May 11, 2002"
  },
  {
    team: "New Orleans Saints",
    division: "NFC South",
    founded: "November 1, 1966",
    city: "New Orleans, LA",
    cityFounded: "Spring 1718",
    cityCharter: "March 7, 1805",
    stadium: "Caesars Superdome",
    stadiumOpened: "August 3, 1975"
  },
  {
    team: "New York Giants",
    division: "NFC East",
    founded: "August 1, 1925",
    city: "East Rutherford, NJ",
    cityFounded: "March 29, 1894",
    cityCharter: "March 29, 1894",
    stadium: "MetLife Stadium",
    stadiumOpened: "April 10, 2010"
  },
  {
    team: "New York Jets",
    division: "AFC East",
    founded: "August 14, 1959",
    city: "East Rutherford, NJ",
    cityFounded: "March 29, 1894",
    cityCharter: "March 29, 1894",
    stadium: "MetLife Stadium",
    stadiumOpened: "April 10, 2010"
  },
  {
    team: "Philadelphia Eagles",
    division: "NFC East",
    founded: "July 8, 1933",
    city: "Philadelphia, PA",
    cityFounded: "1682",
    cityCharter: "October 25, 1701",
    stadium: "Lincoln Financial Field",
    stadiumOpened: "August 3, 2003"
  },
  {
    team: "Pittsburgh Steelers",
    division: "AFC North",
    founded: "July 8, 1933",
    city: "Pittsburgh, PA",
    cityFounded: "November 27, 1758",
    cityCharter: "March 18, 1816",
    stadium: "Acrisure Stadium",
    stadiumOpened: "August 18, 2001"
  },
  {
    team: "San Francisco 49ers",
    division: "NFC West",
    founded: "June 4, 1944",
    city: "Santa Clara, CA",
    cityFounded: "January 12, 1777",
    cityCharter: "July 5, 1852",
    stadium: "Levi's Stadium",
    stadiumOpened: "July 17, 2014"
  },
  {
    team: "Seattle Seahawks",
    division: "NFC West",
    founded: "June 4, 1974",
    city: "Seattle, WA",
    cityFounded: "May 23, 1853",
    cityCharter: "December 2, 1869",
    stadium: "Lumen Field",
    stadiumOpened: "July 20, 2002"
  },
  {
    team: "Tampa Bay Buccaneers",
    division: "NFC South",
    founded: "April 24, 1974",
    city: "Tampa, FL",
    cityFounded: "January 18, 1849",
    cityCharter: "December 15, 1855",
    stadium: "Raymond James Stadium",
    stadiumOpened: "September 20, 1998"
  },
  {
    team: "Tennessee Titans",
    division: "AFC South",
    founded: "August 14, 1959",
    city: "Nashville, TN",
    cityFounded: "December 24, 1779",
    cityCharter: "April 23, 1806",
    stadium: "Nissan Stadium",
    stadiumOpened: "September 12, 1999"
  },
  {
    team: "Washington Commanders",
    division: "NFC East",
    founded: "July 9, 1932",
    city: "Landover, MD",
    cityFounded: "",
    cityCharter: "",
    stadium: "Commanders Field",
    stadiumOpened: "September 14, 1997"
  }
];

function renderTable() {
  let html = `<table>
    <tr>
      <th>Team</th>
      <th>Division</th>
      <th>Team Founded</th>
      <th>City</th>
      <th>City Founded</th>
      <th>City Chartered/Incorporated</th>
      <th>Stadium</th>
      <th>Stadium Opened</th>
    </tr>
  `;

  nflTeams.forEach(team => {
    html += `<tr>
      <td>${team.team}</td>
      <td>${team.division}</td>
      <td class="founded">${team.founded}</td>
      <td>${team.city}</td>
      <td class="founded">${team.cityFounded ? team.cityFounded : "-"}</td>
      <td class="charter">${team.cityCharter ? team.cityCharter : "-"}</td>
      <td>${team.stadium}</td>
      <td>${team.stadiumOpened}</td>
    </tr>`;
  });

  html += "</table>";
  document.getElementById("teamTable").innerHTML = html;
}

renderTable();

// Initialize the application
const app = new NFLDatabase();
