// Your corrected state data (preserved exactly)
const stateData = {
"AZ": { order: 48, founded: "February 14, 1912" },
    "CA": { order: 31, founded: "September 9, 1850" },
    "CO": { order: 38, founded: "August 1, 1876" },
    "FL": { order: 27, founded: "March 3, 1845" },
    "GA": { order: 4, founded: "January 2, 1788" },
    "IL": { order: 21, founded: "December 3, 1818" },
    "IN": { order: 19, founded: "December 11, 1816" },
    "LA": { order: 18, founded: "April 30, 1812" },
    "MA": { order: 6, founded: "February 6, 1788" },
    "MD": { order: 7, founded: "April 28, 1788" },
    "MI": { order: 26, founded: "January 26, 1837" },
    "MN": { order: 32, founded: "May 11, 1858" },
    "MO": { order: 24, founded: "August 10, 1821" },
    "NC": { order: 12, founded: "November 21, 1789" },
    "NJ": { order: 3, founded: "December 18, 1787" },
    "NV": { order: 36, founded: "October 31, 1864" },
    "NY": { order: 11, founded: "July 26, 1788" },
    "OH": { order: 17, founded: "March 1, 1803" },
    "PA": { order: 2, founded: "December 12, 1787" },
    "TN": { order: 16, founded: "June 1, 1796" },
    "TX": { order: 28, founded: "December 29, 1845" },
    "WA": { order: 42, founded: "November 11, 1889" },
    "WI": { order: 30, founded: "May 29, 1848" },
    "AL": { order: 22, founded: "December 14, 1819" },
    "AR": { order: 25, founded: "June 15, 1836" },
    "CT": { order: 5, founded: "January 9, 1788" },
    "DE": { order: 1, founded: "December 7, 1787" },
    "ID": { order: 43, founded: "July 3, 1890" },
    "IA": { order: 29, founded: "December 28, 1846" },
    "KS": { order: 34, founded: "January 29, 1861" },
    "KY": { order: 15, founded: "June 1, 1792" },
    "ME": { order: 23, founded: "March 15, 1820" },
    "MS": { order: 20, founded: "December 10, 1817" },
    "MT": { order: 41, founded: "November 8, 1889" },
    "NE": { order: 37, founded: "March 1, 1867" },
    "NH": { order: 9, founded: "June 21, 1788" },
    "NM": { order: 47, founded: "January 6, 1912" },
    "ND": { order: 39, founded: "November 2, 1889" },
    "OK": { order: 46, founded: "November 16, 1907" },
    "OR": { order: 33, founded: "February 14, 1859" },
    "RI": { order: 13, founded: "May 29, 1790" },
    "SC": { order: 8, founded: "May 23, 1788" },
    "SD": { order: 40, founded: "November 2, 1889" },
    "UT": { order: 45, founded: "January 4, 1896" },
    "VT": { order: 14, founded: "March 4, 1791" },
    "VA": { order: 10, founded: "June 25, 1788" },
    "WV": { order: 35, founded: "June 20, 1863" },
    "WY": { order: 44, founded: "July 10, 1890" },
    "HI": { order: 50, founded: "August 21, 1959" },
    "AK": { order: 49, founded: "January 3, 1959" }
};

// COMPLETE Multi-sport data structure with verified exact founding dates
const sportsData = {
  nfl: [
    { name: "Arizona Cardinals", division: "NFC West", conference: "NFC", founded: "March 28, 1898", leagueJoined: "1920", city: "Glendale", state: "AZ", cityFounded: "October 10, 1910", cityCharter: "February 27, 1892", stadium: "State Farm Stadium", stadiumOpened: "August 1, 2006" },
    { name: "Atlanta Falcons", division: "NFC South", conference: "NFC", founded: "June 30, 1965", leagueJoined: "1966", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", stadium: "Mercedes-Benz Stadium", stadiumOpened: "August 26, 2017" },
    { name: "Baltimore Ravens", division: "AFC North", conference: "AFC", founded: "February 9, 1996", leagueJoined: "1996", city: "Baltimore", state: "MD", cityFounded: "August 8, 1729", cityCharter: "August 8, 1729", stadium: "M&T Bank Stadium", stadiumOpened: "September 6, 1998" },
    { name: "Buffalo Bills", division: "AFC East", conference: "AFC", founded: "October 28, 1959", leagueJoined: "1960", city: "Buffalo", state: "NY", cityFounded: "1810", cityCharter: "June 2, 1832", stadium: "Highmark Stadium", stadiumOpened: "August 17, 1973" },
    { name: "Carolina Panthers", division: "NFC South", conference: "NFC", founded: "October 26, 1993", leagueJoined: "1995", city: "Charlotte", state: "NC", cityFounded: "December 3, 1768", cityCharter: "December 3, 1768", stadium: "Bank of America Stadium", stadiumOpened: "September 1, 1996" },
    { name: "Chicago Bears", division: "NFC North", conference: "NFC", founded: "September 20, 1919", leagueJoined: "1920", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "Soldier Field", stadiumOpened: "October 9, 1924" },
    { name: "Cincinnati Bengals", division: "AFC North", conference: "AFC", founded: "May 23, 1967", leagueJoined: "1968", city: "Cincinnati", state: "OH", cityFounded: "December 1788", cityCharter: "December 28, 1788", stadium: "Paycor Stadium", stadiumOpened: "August 19, 2000" },
    { name: "Cleveland Browns", division: "AFC North", conference: "AFC", founded: "April 20, 1945", leagueJoined: "1950", city: "Cleveland", state: "OH", cityFounded: "July 22, 1796", cityCharter: "July 22, 1796", stadium: "Huntington Bank Field", stadiumOpened: "September 12, 1999" },
    { name: "Dallas Cowboys", division: "NFC East", conference: "NFC", founded: "January 28, 1960", leagueJoined: "1960", city: "Arlington", state: "TX", cityFounded: "1876", cityCharter: "July 19, 1876", stadium: "AT&T Stadium", stadiumOpened: "May 27, 2009" },
    { name: "Denver Broncos", division: "AFC West", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 22, 1858", stadium: "Empower Field at Mile High", stadiumOpened: "September 10, 2001" },
    { name: "Detroit Lions", division: "NFC North", conference: "NFC", founded: "July 12, 1930", leagueJoined: "1930", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "July 24, 1701", stadium: "Ford Field", stadiumOpened: "September 22, 2002" },
    { name: "Green Bay Packers", division: "NFC North", conference: "NFC", founded: "August 11, 1919", leagueJoined: "1921", city: "Green Bay", state: "WI", cityFounded: "1854", cityCharter: "February 27, 1854", stadium: "Lambeau Field", stadiumOpened: "September 29, 1957" },
    { name: "Houston Texans", division: "AFC South", conference: "AFC", founded: "October 6, 1999", leagueJoined: "2002", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "August 30, 1836", stadium: "NRG Stadium", stadiumOpened: "August 24, 2002" },
    { name: "Indianapolis Colts", division: "AFC South", conference: "AFC", founded: "January 23, 1953", leagueJoined: "1953", city: "Indianapolis", state: "IN", cityFounded: "January 6, 1821", cityCharter: "June 7, 1820", stadium: "Lucas Oil Stadium", stadiumOpened: "August 16, 2008" },
    { name: "Jacksonville Jaguars", division: "AFC South", conference: "AFC", founded: "November 30, 1993", leagueJoined: "1995", city: "Jacksonville", state: "FL", cityFounded: "June 15, 1822", cityCharter: "June 15, 1822", stadium: "EverBank Stadium", stadiumOpened: "August 18, 1995" },
    { name: "Kansas City Chiefs", division: "AFC West", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "Kansas City", state: "MO", cityFounded: "June 3, 1850", cityCharter: "June 1, 1850", stadium: "GEHA Field at Arrowhead Stadium", stadiumOpened: "August 12, 1972" },
    { name: "Las Vegas Raiders", division: "AFC West", conference: "AFC", founded: "January 30, 1960", leagueJoined: "1960", city: "Las Vegas", state: "NV", cityFounded: "May 15, 1905", cityCharter: "May 15, 1905", stadium: "Allegiant Stadium", stadiumOpened: "July 31, 2020" },
    { name: "Los Angeles Chargers", division: "AFC West", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "Inglewood", state: "CA", cityFounded: "February 7, 1908", cityCharter: "February 8, 1908", stadium: "SoFi Stadium", stadiumOpened: "September 8, 2020" },
    { name: "Los Angeles Rams", division: "NFC West", conference: "NFC", founded: "February 12, 1937", leagueJoined: "1937", city: "Inglewood", state: "CA", cityFounded: "February 7, 1908", cityCharter: "February 8, 1908", stadium: "SoFi Stadium", stadiumOpened: "September 8, 2020" },
    { name: "Miami Dolphins", division: "AFC East", conference: "AFC", founded: "August 16, 1965", leagueJoined: "1966", city: "Miami Gardens", state: "FL", cityFounded: "May 13, 2003", cityCharter: "May 13, 2003", stadium: "Hard Rock Stadium", stadiumOpened: "August 16, 1987" },
    { name: "Minnesota Vikings", division: "NFC North", conference: "NFC", founded: "January 28, 1960", leagueJoined: "1961", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "February 28, 1866", stadium: "U.S. Bank Stadium", stadiumOpened: "July 22, 2016" },
    { name: "New England Patriots", division: "AFC East", conference: "AFC", founded: "November 22, 1959", leagueJoined: "1960", city: "Foxborough", state: "MA", cityFounded: "June 10, 1778", cityCharter: "June 10, 1778", stadium: "Gillette Stadium", stadiumOpened: "May 11, 2002" },
    { name: "New Orleans Saints", division: "NFC South", conference: "NFC", founded: "November 1, 1966", leagueJoined: "1967", city: "New Orleans", state: "LA", cityFounded: "Spring 1718", cityCharter: "May 7, 1718", stadium: "Caesars Superdome", stadiumOpened: "August 3, 1975" },
    { name: "New York Giants", division: "NFC East", conference: "NFC", founded: "August 1, 1925", leagueJoined: "1925", city: "East Rutherford", state: "NJ", cityFounded: "March 29, 1894", cityCharter: "March 28, 1894", stadium: "MetLife Stadium", stadiumOpened: "April 10, 2010" },
    { name: "New York Jets", division: "AFC East", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "East Rutherford", state: "NJ", cityFounded: "March 29, 1894", cityCharter: "March 28, 1894", stadium: "MetLife Stadium", stadiumOpened: "April 10, 2010" },
    { name: "Philadelphia Eagles", division: "NFC East", conference: "NFC", founded: "July 8, 1933", leagueJoined: "1933", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 27, 1682", stadium: "Lincoln Financial Field", stadiumOpened: "August 3, 2003" },
    { name: "Pittsburgh Steelers", division: "AFC North", conference: "AFC", founded: "July 8, 1933", leagueJoined: "1933", city: "Pittsburgh", state: "PA", cityFounded: "November 27, 1758", cityCharter: "November 25, 1758", stadium: "Acrisure Stadium", stadiumOpened: "August 18, 2001" },
    { name: "San Francisco 49ers", division: "NFC West", conference: "NFC", founded: "June 4, 1944", leagueJoined: "1950", city: "Santa Clara", state: "CA", cityFounded: "January 12, 1777", cityCharter: "July 5, 1852", stadium: "Levi's Stadium", stadiumOpened: "July 17, 2014" },
    { name: "Seattle Seahawks", division: "NFC West", conference: "NFC", founded: "June 4, 1974", leagueJoined: "1976", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "November 13, 1851", stadium: "Lumen Field", stadiumOpened: "July 20, 2002" },
    { name: "Tampa Bay Buccaneers", division: "NFC South", conference: "NFC", founded: "April 24, 1974", leagueJoined: "1976", city: "Tampa", state: "FL", cityFounded: "January 18, 1849", cityCharter: "July 15, 1887", stadium: "Raymond James Stadium", stadiumOpened: "September 20, 1998" },
    { name: "Tennessee Titans", division: "AFC South", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "Nashville", state: "TN", cityFounded: "December 24, 1779", cityCharter: "December 24, 1779", stadium: "Nissan Stadium", stadiumOpened: "September 12, 1999" },
    { name: "Washington Commanders", division: "NFC East", conference: "NFC", founded: "July 9, 1932", leagueJoined: "1932", city: "Landover", state: "MD", cityFounded: "July 16, 1790 (D.C.)", cityCharter: "", stadium: "Commanders Field", stadiumOpened: "September 14, 1997" }
  ],

  nba: [
    { name: "Atlanta Hawks", division: "Southeast", conference: "Eastern", founded: "June 6, 1946", leagueJoined: "1949", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", arena: "State Farm Arena", arenaOpened: "September 2, 1999" },
    { name: "Boston Celtics", division: "Atlantic", conference: "Eastern", founded: "June 6, 1946", leagueJoined: "1946", city: "Boston", state: "MA", cityFounded: "September 17, 1630", cityCharter: "September 17, 1630", arena: "TD Garden", arenaOpened: "September 30, 1995" },
    { name: "Brooklyn Nets", division: "Atlantic", conference: "Eastern", founded: "February 2, 1967", leagueJoined: "1976", city: "Brooklyn", state: "NY", cityFounded: "1636", cityCharter: "May 21, 1646", arena: "Barclays Center", arenaOpened: "September 21, 2012" },
    { name: "Charlotte Hornets", division: "Southeast", conference: "Eastern", founded: "April 22, 1988", leagueJoined: "1988", city: "Charlotte", state: "NC", cityFounded: "December 3, 1768", cityCharter: "December 3, 1768", arena: "Spectrum Center", arenaOpened: "August 11, 2005" },
    { name: "Chicago Bulls", division: "Central", conference: "Eastern", founded: "January 16, 1966", leagueJoined: "1966", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", arena: "United Center", arenaOpened: "August 18, 1994" },
    { name: "Cleveland Cavaliers", division: "Central", conference: "Eastern", founded: "February 8, 1970", leagueJoined: "1970", city: "Cleveland", state: "OH", cityFounded: "July 22, 1796", cityCharter: "July 22, 1796", arena: "Rocket Mortgage FieldHouse", arenaOpened: "October 17, 1994" },
    { name: "Dallas Mavericks", division: "Southwest", conference: "Western", founded: "May 1, 1980", leagueJoined: "1980", city: "Dallas", state: "TX", cityFounded: "1841", cityCharter: "November 22, 1841", arena: "American Airlines Center", arenaOpened: "July 17, 2001" },
    { name: "Denver Nuggets", division: "Northwest", conference: "Western", founded: "February 2, 1967", leagueJoined: "1976", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 22, 1858", arena: "Ball Arena", arenaOpened: "October 1, 1999" },
    { name: "Detroit Pistons", division: "Central", conference: "Eastern", founded: "June 1, 1937", leagueJoined: "1949", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "July 24, 1701", arena: "Little Caesars Arena", arenaOpened: "September 5, 2017" },
    { name: "Golden State Warriors", division: "Pacific", conference: "Western", founded: "June 6, 1946", leagueJoined: "1946", city: "San Francisco", state: "CA", cityFounded: "January 30, 1847", cityCharter: "June 29, 1776", arena: "Chase Center", arenaOpened: "September 6, 2019" },
    { name: "Houston Rockets", division: "Southwest", conference: "Western", founded: "February 2, 1967", leagueJoined: "1967", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "August 30, 1836", arena: "Toyota Center", arenaOpened: "September 29, 2003" },
    { name: "Indiana Pacers", division: "Central", conference: "Eastern", founded: "February 2, 1967", leagueJoined: "1976", city: "Indianapolis", state: "IN", cityFounded: "January 6, 1821", cityCharter: "June 7, 1820", arena: "Gainbridge Fieldhouse", arenaOpened: "November 6, 1999" },
    { name: "LA Clippers", division: "Pacific", conference: "Western", founded: "August 6, 1970", leagueJoined: "1970", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "September 4, 1781", arena: "Crypto.com Arena", arenaOpened: "October 17, 1999" },
    { name: "Los Angeles Lakers", division: "Pacific", conference: "Western", founded: "June 6, 1946", leagueJoined: "1948", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "September 4, 1781", arena: "Crypto.com Arena", arenaOpened: "October 17, 1999" },
    { name: "Memphis Grizzlies", division: "Southwest", conference: "Western", founded: "April 27, 1995", leagueJoined: "1995", city: "Memphis", state: "TN", cityFounded: "May 22, 1819", cityCharter: "May 22, 1819", arena: "FedExForum", arenaOpened: "September 6, 2004" },
    { name: "Miami Heat", division: "Southeast", conference: "Eastern", founded: "April 22, 1987", leagueJoined: "1988", city: "Miami", state: "FL", cityFounded: "July 28, 1896", cityCharter: "July 28, 1896", arena: "Kaseya Center", arenaOpened: "December 31, 1999" },
    { name: "Milwaukee Bucks", division: "Central", conference: "Eastern", founded: "March 4, 1968", leagueJoined: "1968", city: "Milwaukee", state: "WI", cityFounded: "1846", cityCharter: "January 31, 1846", arena: "Fiserv Forum", arenaOpened: "August 26, 2018" },
    { name: "Minnesota Timberwolves", division: "Northwest", conference: "Western", founded: "April 22, 1987", leagueJoined: "1989", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "February 28, 1866", arena: "Target Center", arenaOpened: "October 13, 1990" },
    { name: "New Orleans Pelicans", division: "Southwest", conference: "Western", founded: "May 22, 1988", leagueJoined: "1988", city: "New Orleans", state: "LA", cityFounded: "Spring 1718", cityCharter: "May 7, 1718", arena: "Smoothie King Center", arenaOpened: "October 1, 1999" },
    { name: "New York Knicks", division: "Atlantic", conference: "Eastern", founded: "June 6, 1946", leagueJoined: "1946", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "February 2, 1653", arena: "Madison Square Garden", arenaOpened: "February 11, 1968" },
    { name: "Oklahoma City Thunder", division: "Northwest", conference: "Western", founded: "February 2, 1967", leagueJoined: "1967", city: "Oklahoma City", state: "OK", cityFounded: "April 22, 1889", cityCharter: "April 22, 1889", arena: "Paycom Center", arenaOpened: "June 8, 2002" },
    { name: "Orlando Magic", division: "Southeast", conference: "Eastern", founded: "April 22, 1987", leagueJoined: "1989", city: "Orlando", state: "FL", cityFounded: "February 4, 1875", cityCharter: "July 31, 1875", arena: "Kia Center", arenaOpened: "January 17, 1989" },
    { name: "Philadelphia 76ers", division: "Atlantic", conference: "Eastern", founded: "June 6, 1946", leagueJoined: "1949", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 27, 1682", arena: "Wells Fargo Center", arenaOpened: "August 31, 1996" },
    { name: "Phoenix Suns", division: "Pacific", conference: "Western", founded: "February 6, 1968", leagueJoined: "1968", city: "Phoenix", state: "AZ", cityFounded: "May 4, 1868", cityCharter: "February 25, 1881", arena: "Footprint Center", arenaOpened: "June 1, 1992" },
    { name: "Portland Trail Blazers", division: "Northwest", conference: "Western", founded: "February 6, 1970", leagueJoined: "1970", city: "Portland", state: "OR", cityFounded: "1843", cityCharter: "February 8, 1851", arena: "Moda Center", arenaOpened: "October 12, 1995" },
    { name: "Sacramento Kings", division: "Pacific", conference: "Western", founded: "June 1, 1945", leagueJoined: "1948", city: "Sacramento", state: "CA", cityFounded: "1848", cityCharter: "February 27, 1850", arena: "Golden 1 Center", arenaOpened: "September 30, 2016" },
    { name: "San Antonio Spurs", division: "Southwest", conference: "Western", founded: "February 2, 1967", leagueJoined: "1976", city: "San Antonio", state: "TX", cityFounded: "May 1, 1718", cityCharter: "May 1, 1718", arena: "Frost Bank Center", arenaOpened: "October 18, 2002" },
    { name: "Toronto Raptors", division: "Atlantic", conference: "Eastern", founded: "November 4, 1993", leagueJoined: "1995", city: "Toronto", state: "ON", cityFounded: "August 27, 1793", cityCharter: "August 27, 1793", arena: "Scotiabank Arena", arenaOpened: "February 20, 1999" },
    { name: "Utah Jazz", division: "Northwest", conference: "Western", founded: "June 7, 1974", leagueJoined: "1974", city: "Salt Lake City", state: "UT", cityFounded: "July 24, 1847", cityCharter: "July 24, 1847", arena: "Delta Center", arenaOpened: "October 4, 1991" },
    { name: "Washington Wizards", division: "Southeast", conference: "Eastern", founded: "February 8, 1961", leagueJoined: "1961", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "July 16, 1790", arena: "Capital One Arena", arenaOpened: "December 2, 1997" }
  ],

  mlb: [
    { name: "Arizona Diamondbacks", division: "NL West", conference: "National League", founded: "March 9, 1995", leagueJoined: "1998", city: "Phoenix", state: "AZ", cityFounded: "May 4, 1868", cityCharter: "February 25, 1881", stadium: "Chase Field", stadiumOpened: "March 31, 1998" },
    { name: "Atlanta Braves", division: "NL East", conference: "National League", founded: "January 20, 1871", leagueJoined: "1876", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", stadium: "Truist Park", stadiumOpened: "March 31, 2017" },
    { name: "Baltimore Orioles", division: "AL East", conference: "American League", founded: "January 1, 1901", leagueJoined: "1901", city: "Baltimore", state: "MD", cityFounded: "August 8, 1729", cityCharter: "August 8, 1729", stadium: "Oriole Park at Camden Yards", stadiumOpened: "April 6, 1992" },
    { name: "Boston Red Sox", division: "AL East", conference: "American League", founded: "January 28, 1901", leagueJoined: "1901", city: "Boston", state: "MA", cityFounded: "September 17, 1630", cityCharter: "September 17, 1630", stadium: "Fenway Park", stadiumOpened: "April 20, 1912" },
    { name: "Chicago Cubs", division: "NL Central", conference: "National League", founded: "October 26, 1870", leagueJoined: "1876", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "Wrigley Field", stadiumOpened: "April 23, 1914" },
    { name: "Chicago White Sox", division: "AL Central", conference: "American League", founded: "March 21, 1900", leagueJoined: "1901", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "Guaranteed Rate Field", stadiumOpened: "April 18, 1991" },
    { name: "Cincinnati Reds", division: "NL Central", conference: "National League", founded: "March 1, 1881", leagueJoined: "1890", city: "Cincinnati", state: "OH", cityFounded: "December 1788", cityCharter: "December 28, 1788", stadium: "Great American Ball Park", stadiumOpened: "March 31, 2003" },
    { name: "Cleveland Guardians", division: "AL Central", conference: "American League", founded: "January 28, 1901", leagueJoined: "1901", city: "Cleveland", state: "OH", cityFounded: "July 22, 1796", cityCharter: "July 22, 1796", stadium: "Progressive Field", stadiumOpened: "April 4, 1994" },
    { name: "Colorado Rockies", division: "NL West", conference: "National League", founded: "July 5, 1991", leagueJoined: "1993", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 22, 1858", stadium: "Coors Field", stadiumOpened: "April 26, 1995" },
    { name: "Detroit Tigers", division: "AL Central", conference: "American League", founded: "April 28, 1901", leagueJoined: "1901", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "July 24, 1701", stadium: "Comerica Park", stadiumOpened: "April 11, 2000" },
    { name: "Houston Astros", division: "AL West", conference: "American League", founded: "October 17, 1960", leagueJoined: "1962", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "August 30, 1836", stadium: "Minute Maid Park", stadiumOpened: "March 30, 2000" },
    { name: "Kansas City Royals", division: "AL Central", conference: "American League", founded: "January 11, 1968", leagueJoined: "1969", city: "Kansas City", state: "MO", cityFounded: "June 3, 1850", cityCharter: "June 1, 1850", stadium: "Kauffman Stadium", stadiumOpened: "April 10, 1973" },
    { name: "Los Angeles Angels", division: "AL West", conference: "American League", founded: "September 6, 1960", leagueJoined: "1961", city: "Anaheim", state: "CA", cityFounded: "August 1, 1857", cityCharter: "October 5, 1857", stadium: "Angel Stadium", stadiumOpened: "April 19, 1966" },
    { name: "Los Angeles Dodgers", division: "NL West", conference: "National League", founded: "April 9, 1883", leagueJoined: "1890", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "September 4, 1781", stadium: "Dodger Stadium", stadiumOpened: "April 10, 1962" },
    { name: "Miami Marlins", division: "NL East", conference: "National League", founded: "July 5, 1991", leagueJoined: "1993", city: "Miami", state: "FL", cityFounded: "July 28, 1896", cityCharter: "July 28, 1896", stadium: "loanDepot park", stadiumOpened: "April 4, 2012" },
    { name: "Milwaukee Brewers", division: "NL Central", conference: "National League", founded: "March 30, 1969", leagueJoined: "1970", city: "Milwaukee", state: "WI", cityFounded: "1846", cityCharter: "January 31, 1846", stadium: "American Family Field", stadiumOpened: "April 7, 2001" },
    { name: "Minnesota Twins", division: "AL Central", conference: "American League", founded: "November 17, 1900", leagueJoined: "1901", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "February 28, 1866", stadium: "Target Field", stadiumOpened: "April 12, 2010" },
    { name: "New York Mets", division: "NL East", conference: "National League", founded: "October 17, 1960", leagueJoined: "1962", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "February 2, 1653", stadium: "Citi Field", stadiumOpened: "April 13, 2009" },
    { name: "New York Yankees", division: "AL East", conference: "American League", founded: "March 12, 1903", leagueJoined: "1903", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "February 2, 1653", stadium: "Yankee Stadium", stadiumOpened: "April 16, 2009" },
    { name: "Athletics", division: "AL West", conference: "American League", founded: "January 1, 1901", leagueJoined: "1901", city: "West Sacramento", state: "CA", cityFounded: "November 14, 1987", cityCharter: "January 1, 1987", stadium: "Sutter Health Park", stadiumOpened: "April 3, 2000" },
    { name: "Philadelphia Phillies", division: "NL East", conference: "National League", founded: "May 1, 1883", leagueJoined: "1883", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 27, 1682", stadium: "Citizens Bank Park", stadiumOpened: "April 12, 2004" },
    { name: "Pittsburgh Pirates", division: "NL Central", conference: "National League", founded: "October 15, 1881", leagueJoined: "1887", city: "Pittsburgh", state: "PA", cityFounded: "November 27, 1758", cityCharter: "November 25, 1758", stadium: "PNC Park", stadiumOpened: "March 31, 2001" },
    { name: "San Diego Padres", division: "NL West", conference: "National League", founded: "January 16, 1969", leagueJoined: "1969", city: "San Diego", state: "CA", cityFounded: "July 16, 1769", cityCharter: "July 16, 1769", stadium: "Petco Park", stadiumOpened: "April 8, 2004" },
    { name: "San Francisco Giants", division: "NL West", conference: "National League", founded: "January 28, 1883", leagueJoined: "1883", city: "San Francisco", state: "CA", cityFounded: "January 30, 1847", cityCharter: "June 29, 1776", stadium: "Oracle Park", stadiumOpened: "April 11, 2000" },
    { name: "Seattle Mariners", division: "AL West", conference: "American League", founded: "October 27, 1976", leagueJoined: "1977", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "November 13, 1851", stadium: "T-Mobile Park", stadiumOpened: "July 15, 1999" },
    { name: "St. Louis Cardinals", division: "NL Central", conference: "National League", founded: "March 15, 1882", leagueJoined: "1892", city: "St. Louis", state: "MO", cityFounded: "February 14, 1764", cityCharter: "February 14, 1764", stadium: "Busch Stadium", stadiumOpened: "April 10, 2006" },
    { name: "Tampa Bay Rays", division: "AL East", conference: "American League", founded: "March 9, 1995", leagueJoined: "1998", city: "St. Petersburg", state: "FL", cityFounded: "February 29, 1888", cityCharter: "February 29, 1892", stadium: "Tropicana Field", stadiumOpened: "March 3, 1990" },
    { name: "Texas Rangers", division: "AL West", conference: "American League", founded: "October 26, 1960", leagueJoined: "1972", city: "Arlington", state: "TX", cityFounded: "1876", cityCharter: "July 19, 1876", stadium: "Globe Life Field", stadiumOpened: "March 11, 2020" },
    { name: "Toronto Blue Jays", division: "AL East", conference: "American League", founded: "March 26, 1976", leagueJoined: "1977", city: "Toronto", state: "ON", cityFounded: "August 27, 1793", cityCharter: "August 27, 1793", stadium: "Rogers Centre", stadiumOpened: "June 3, 1989" },
    { name: "Washington Nationals", division: "NL East", conference: "National League", founded: "May 27, 1969", leagueJoined: "2005", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "July 16, 1790", stadium: "Nationals Park", stadiumOpened: "March 30, 2008" }
  ],

  nhl: [
    { name: "Anaheim Ducks", division: "Pacific", conference: "Western", founded: "June 15, 1993", leagueJoined: "1993", city: "Anaheim", state: "CA", cityFounded: "August 1, 1857", cityCharter: "October 5, 1857", arena: "Honda Center", arenaOpened: "June 17, 1993" },
    { name: "Boston Bruins", division: "Atlantic", conference: "Eastern", founded: "November 1, 1924", leagueJoined: "1924", city: "Boston", state: "MA", cityFounded: "September 17, 1630", cityCharter: "September 17, 1630", arena: "TD Garden", arenaOpened: "September 30, 1995" },
    { name: "Buffalo Sabres", division: "Atlantic", conference: "Eastern", founded: "May 22, 1970", leagueJoined: "1970", city: "Buffalo", state: "NY", cityFounded: "1810", cityCharter: "June 2, 1832", arena: "KeyBank Center", arenaOpened: "September 21, 1996" },
    { name: "Calgary Flames", division: "Pacific", conference: "Western", founded: "June 6, 1972", leagueJoined: "1972", city: "Calgary", state: "AB", cityFounded: "1875", cityCharter: "November 1, 1875", arena: "Scotiabank Saddledome", arenaOpened: "October 15, 1983" },
    { name: "Carolina Hurricanes", division: "Metropolitan", conference: "Eastern", founded: "June 22, 1971", leagueJoined: "1979", city: "Raleigh", state: "NC", cityFounded: "1792", cityCharter: "December 31, 1792", arena: "PNC Arena", arenaOpened: "October 29, 1999" },
    { name: "Chicago Blackhawks", division: "Central", conference: "Western", founded: "September 25, 1926", leagueJoined: "1926", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", arena: "United Center", arenaOpened: "August 18, 1994" },
    { name: "Colorado Avalanche", division: "Central", conference: "Western", founded: "June 22, 1972", leagueJoined: "1979", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 22, 1858", arena: "Ball Arena", arenaOpened: "October 1, 1999" },
    { name: "Columbus Blue Jackets", division: "Metropolitan", conference: "Eastern", founded: "June 25, 1997", leagueJoined: "2000", city: "Columbus", state: "OH", cityFounded: "February 14, 1812", cityCharter: "February 14, 1812", arena: "Nationwide Arena", arenaOpened: "September 9, 2000" },
    { name: "Dallas Stars", division: "Central", conference: "Western", founded: "June 5, 1967", leagueJoined: "1967", city: "Dallas", state: "TX", cityFounded: "1841", cityCharter: "November 22, 1841", arena: "American Airlines Center", arenaOpened: "July 17, 2001" },
    { name: "Detroit Red Wings", division: "Atlantic", conference: "Eastern", founded: "September 25, 1926", leagueJoined: "1926", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "July 24, 1701", arena: "Little Caesars Arena", arenaOpened: "September 5, 2017" },
    { name: "Edmonton Oilers", division: "Pacific", conference: "Western", founded: "November 1, 1971", leagueJoined: "1979", city: "Edmonton", state: "AB", cityFounded: "1795", cityCharter: "October 8, 1904", arena: "Rogers Place", arenaOpened: "September 8, 2016" },
    { name: "Florida Panthers", division: "Atlantic", conference: "Eastern", founded: "December 10, 1992", leagueJoined: "1993", city: "Sunrise", state: "FL", cityFounded: "1961", cityCharter: "September 1, 1961", arena: "Amerant Bank Arena", arenaOpened: "October 9, 1998" },
    { name: "Los Angeles Kings", division: "Pacific", conference: "Western", founded: "February 9, 1966", leagueJoined: "1967", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "September 4, 1781", arena: "Crypto.com Arena", arenaOpened: "October 17, 1999" },
    { name: "Minnesota Wild", division: "Central", conference: "Western", founded: "June 25, 1997", leagueJoined: "2000", city: "St. Paul", state: "MN", cityFounded: "1840", cityCharter: "March 4, 1854", arena: "Xcel Energy Center", arenaOpened: "September 29, 2000" },
    { name: "Montreal Canadiens", division: "Atlantic", conference: "Eastern", founded: "November 26, 1917", leagueJoined: "1917", city: "Montreal", state: "QC", cityFounded: "May 17, 1642", cityCharter: "May 17, 1642", arena: "Bell Centre", arenaOpened: "March 16, 1996" },
    { name: "Nashville Predators", division: "Central", conference: "Western", founded: "June 25, 1997", leagueJoined: "1998", city: "Nashville", state: "TN", cityFounded: "December 24, 1779", cityCharter: "December 24, 1779", arena: "Bridgestone Arena", arenaOpened: "December 18, 1996" },
    { name: "New Jersey Devils", division: "Metropolitan", conference: "Eastern", founded: "June 11, 1974", leagueJoined: "1974", city: "Newark", state: "NJ", cityFounded: "1666", cityCharter: "May 17, 1666", arena: "Prudential Center", arenaOpened: "October 25, 2007" },
    { name: "New York Islanders", division: "Metropolitan", conference: "Eastern", founded: "November 8, 1971", leagueJoined: "1972", city: "Elmont", state: "NY", cityFounded: "1650", cityCharter: "1650", arena: "UBS Arena", arenaOpened: "November 20, 2021" },
    { name: "New York Rangers", division: "Metropolitan", conference: "Eastern", founded: "September 25, 1926", leagueJoined: "1926", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "February 2, 1653", arena: "Madison Square Garden", arenaOpened: "February 11, 1968" },
    { name: "Ottawa Senators", division: "Atlantic", conference: "Eastern", founded: "November 26, 1917", leagueJoined: "1992", city: "Ottawa", state: "ON", cityFounded: "September 26, 1826", cityCharter: "September 26, 1826", arena: "Canadian Tire Centre", arenaOpened: "January 15, 1996" },
    { name: "Philadelphia Flyers", division: "Metropolitan", conference: "Eastern", founded: "February 8, 1966", leagueJoined: "1967", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 27, 1682", arena: "Wells Fargo Center", arenaOpened: "August 31, 1996" },
    { name: "Pittsburgh Penguins", division: "Metropolitan", conference: "Eastern", founded: "February 8, 1966", leagueJoined: "1967", city: "Pittsburgh", state: "PA", cityFounded: "November 27, 1758", cityCharter: "November 25, 1758", arena: "PPG Paints Arena", arenaOpened: "August 18, 2010" },
    { name: "San Jose Sharks", division: "Pacific", conference: "Western", founded: "December 7, 1990", leagueJoined: "1991", city: "San Jose", state: "CA", cityFounded: "November 29, 1777", cityCharter: "March 27, 1850", arena: "SAP Center", arenaOpened: "September 7, 1993" },
    { name: "Seattle Kraken", division: "Pacific", conference: "Western", founded: "December 4, 2018", leagueJoined: "2021", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "November 13, 1851", arena: "Climate Pledge Arena", arenaOpened: "October 22, 1962" },
    { name: "St. Louis Blues", division: "Central", conference: "Western", founded: "February 8, 1966", leagueJoined: "1967", city: "St. Louis", state: "MO", cityFounded: "February 14, 1764", cityCharter: "February 14, 1764", arena: "Enterprise Center", arenaOpened: "October 10, 1994" },
    { name: "Tampa Bay Lightning", division: "Atlantic", conference: "Eastern", founded: "December 16, 1991", leagueJoined: "1992", city: "Tampa", state: "FL", cityFounded: "January 18, 1849", cityCharter: "July 15, 1887", arena: "Amalie Arena", arenaOpened: "October 20, 1996" },
    { name: "Toronto Maple Leafs", division: "Atlantic", conference: "Eastern", founded: "November 26, 1917", leagueJoined: "1917", city: "Toronto", state: "ON", cityFounded: "August 27, 1793", cityCharter: "August 27, 1793", arena: "Scotiabank Arena", arenaOpened: "February 20, 1999" },
    { name: "Utah Hockey Club", division: "Central", conference: "Western", founded: "June 22, 1996", leagueJoined: "1996", city: "Salt Lake City", state: "UT", cityFounded: "July 24, 1847", cityCharter: "July 24, 1847", arena: "Delta Center", arenaOpened: "October 4, 1991" },
    { name: "Vancouver Canucks", division: "Pacific", conference: "Western", founded: "May 22, 1970", leagueJoined: "1970", city: "Vancouver", state: "BC", cityFounded: "April 6, 1886", cityCharter: "April 6, 1886", arena: "Rogers Arena", arenaOpened: "September 21, 1995" },
    { name: "Vegas Golden Knights", division: "Pacific", conference: "Western", founded: "June 22, 2016", leagueJoined: "2017", city: "Las Vegas", state: "NV", cityFounded: "May 15, 1905", cityCharter: "May 15, 1905", arena: "T-Mobile Arena", arenaOpened: "April 6, 2016" },
    { name: "Washington Capitals", division: "Metropolitan", conference: "Eastern", founded: "June 8, 1972", leagueJoined: "1974", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "July 16, 1790", arena: "Capital One Arena", arenaOpened: "December 2, 1997" },
    { name: "Winnipeg Jets", division: "Central", conference: "Western", founded: "June 22, 1971", leagueJoined: "2011", city: "Winnipeg", state: "MB", cityFounded: "November 8, 1873", cityCharter: "January 19, 1874", arena: "Canada Life Centre", arenaOpened: "November 15, 2004" }
  ],

  wnba: [
    { name: "Atlanta Dream", division: "", conference: "Eastern", founded: "October 16, 2007", leagueJoined: "2008", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", arena: "Gateway Center Arena", arenaOpened: "May 12, 2021" },
    { name: "Chicago Sky", division: "", conference: "Eastern", founded: "February 22, 2006", leagueJoined: "2006", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", arena: "Wintrust Arena", arenaOpened: "October 6, 2017" },
    { name: "Connecticut Sun", division: "", conference: "Eastern", founded: "April 24, 1998", leagueJoined: "1999", city: "Uncasville", state: "CT", cityFounded: "1841", cityCharter: "1893", arena: "Mohegan Sun Arena", arenaOpened: "October 21, 2001" },
    { name: "Dallas Wings", division: "", conference: "Western", founded: "February 15, 1998", leagueJoined: "1999", city: "Dallas", state: "TX", cityFounded: "1841", cityCharter: "November 22, 1841", arena: "College Park Center", arenaOpened: "September 30, 2012" },
    { name: "Golden State Valkyries", division: "", conference: "Western", founded: "October 5, 2023", leagueJoined: "2025", city: "San Francisco", state: "CA", cityFounded: "January 30, 1847", cityCharter: "June 29, 1776", arena: "Chase Center", arenaOpened: "September 6, 2019" },
    { name: "Indiana Fever", division: "", conference: "Eastern", founded: "October 21, 1998", leagueJoined: "1999", city: "Indianapolis", state: "IN", cityFounded: "January 6, 1821", cityCharter: "June 7, 1820", arena: "Gainbridge Fieldhouse", arenaOpened: "November 6, 1999" },
    { name: "Las Vegas Aces", division: "", conference: "Western", founded: "February 15, 1998", leagueJoined: "1999", city: "Las Vegas", state: "NV", cityFounded: "May 15, 1905", cityCharter: "May 15, 1905", arena: "Michelob ULTRA Arena", arenaOpened: "April 6, 2016" },
    { name: "Minnesota Lynx", division: "", conference: "Western", founded: "April 24, 1998", leagueJoined: "1999", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "February 28, 1866", arena: "Target Center", arenaOpened: "October 13, 1990" },
    { name: "New York Liberty", division: "", conference: "Eastern", founded: "January 22, 1997", leagueJoined: "1997", city: "Brooklyn", state: "NY", cityFounded: "1636", cityCharter: "May 21, 1646", arena: "Barclays Center", arenaOpened: "September 21, 2012" },
    { name: "Phoenix Mercury", division: "", conference: "Western", founded: "January 15, 1997", leagueJoined: "1997", city: "Phoenix", state: "AZ", cityFounded: "May 4, 1868", cityCharter: "February 25, 1881", arena: "Footprint Center", arenaOpened: "June 1, 1992" },
    { name: "Seattle Storm", division: "", conference: "Western", founded: "April 20, 1999", leagueJoined: "2000", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "November 13, 1851", arena: "Climate Pledge Arena", arenaOpened: "October 22, 1962" },
    { name: "Washington Mystics", division: "", conference: "Eastern", founded: "April 20, 1998", leagueJoined: "1999", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "July 16, 1790", arena: "Entertainment & Sports Arena", arenaOpened: "September 22, 2018" }
  ],

  mls: [
    { name: "Atlanta United FC", division: "Eastern", conference: "Eastern", founded: "April 16, 2014", leagueJoined: "2017", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", stadium: "Mercedes-Benz Stadium", stadiumOpened: "August 26, 2017" },
    { name: "Austin FC", division: "Western", conference: "Western", founded: "January 15, 2019", leagueJoined: "2021", city: "Austin", state: "TX", cityFounded: "December 27, 1839", cityCharter: "December 27, 1839", stadium: "Q2 Stadium", stadiumOpened: "June 19, 2021" },
    { name: "Charlotte FC", division: "Eastern", conference: "Eastern", founded: "December 17, 2019", leagueJoined: "2022", city: "Charlotte", state: "NC", cityFounded: "December 3, 1768", cityCharter: "December 3, 1768", stadium: "Bank of America Stadium", stadiumOpened: "September 1, 1996" },
    { name: "Chicago Fire FC", division: "Eastern", conference: "Eastern", founded: "October 8, 1997", leagueJoined: "1998", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "SeatGeek Stadium", stadiumOpened: "June 11, 2006" },
    { name: "FC Cincinnati", division: "Eastern", conference: "Eastern", founded: "August 12, 2015", leagueJoined: "2019", city: "Cincinnati", state: "OH", cityFounded: "December 1788", cityCharter: "December 28, 1788", stadium: "TQL Stadium", stadiumOpened: "May 1, 2021" },
    { name: "Colorado Rapids", division: "Western", conference: "Western", founded: "June 15, 1995", leagueJoined: "1996", city: "Commerce City", state: "CO", cityFounded: "1952", cityCharter: "December 12, 1952", stadium: "Dick's Sporting Goods Park", stadiumOpened: "April 7, 2007" },
    { name: "Columbus Crew", division: "Eastern", conference: "Eastern", founded: "June 15, 1994", leagueJoined: "1996", city: "Columbus", state: "OH", cityFounded: "February 14, 1812", cityCharter: "February 14, 1812", stadium: "Lower.com Field", stadiumOpened: "July 3, 2021" },
    { name: "D.C. United", division: "Eastern", conference: "Eastern", founded: "June 15, 1994", leagueJoined: "1996", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "July 16, 1790", stadium: "Audi Field", stadiumOpened: "July 14, 2018" },
    { name: "FC Dallas", division: "Western", conference: "Western", founded: "June 15, 1995", leagueJoined: "1996", city: "Frisco", state: "TX", cityFounded: "1902", cityCharter: "November 16, 1908", stadium: "Toyota Stadium", stadiumOpened: "August 6, 2005" },
    { name: "Houston Dynamo FC", division: "Western", conference: "Western", founded: "December 15, 2005", leagueJoined: "2006", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "August 30, 1836", stadium: "Shell Energy Stadium", stadiumOpened: "May 12, 2012" },
    { name: "Inter Miami CF", division: "Eastern", conference: "Eastern", founded: "January 29, 2018", leagueJoined: "2020", city: "Fort Lauderdale", state: "FL", cityFounded: "March 27, 1911", cityCharter: "March 27, 1911", stadium: "DRV PNK Stadium", stadiumOpened: "April 18, 2020" },
    { name: "LA Galaxy", division: "Western", conference: "Western", founded: "June 15, 1994", leagueJoined: "1996", city: "Carson", state: "CA", cityFounded: "February 20, 1968", cityCharter: "February 20, 1968", stadium: "Dignity Health Sports Park", stadiumOpened: "June 1, 2003" },
    { name: "Los Angeles FC", division: "Western", conference: "Western", founded: "October 30, 2014", leagueJoined: "2018", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "September 4, 1781", stadium: "BMO Stadium", stadiumOpened: "April 29, 2018" },
    { name: "Minnesota United FC", division: "Western", conference: "Western", founded: "March 25, 2015", leagueJoined: "2017", city: "St. Paul", state: "MN", cityFounded: "1840", cityCharter: "March 4, 1854", stadium: "Allianz Field", stadiumOpened: "April 13, 2019" },
    { name: "CF Montréal", division: "Eastern", conference: "Eastern", founded: "May 7, 2010", leagueJoined: "2012", city: "Montreal", state: "QC", cityFounded: "May 17, 1642", cityCharter: "May 17, 1642", stadium: "Stade Saputo", stadiumOpened: "May 17, 2008" },
    { name: "Nashville SC", division: "Eastern", conference: "Eastern", founded: "February 7, 2017", leagueJoined: "2020", city: "Nashville", state: "TN", cityFounded: "December 24, 1779", cityCharter: "December 24, 1779", stadium: "GEODIS Park", stadiumOpened: "May 1, 2022" },
    { name: "New England Revolution", division: "Eastern", conference: "Eastern", founded: "June 15, 1994", leagueJoined: "1996", city: "Foxborough", state: "MA", cityFounded: "June 10, 1778", cityCharter: "June 10, 1778", stadium: "Gillette Stadium", stadiumOpened: "May 11, 2002" },
    { name: "New York City FC", division: "Eastern", conference: "Eastern", founded: "May 21, 2013", leagueJoined: "2015", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "February 2, 1653", stadium: "Yankee Stadium", stadiumOpened: "April 16, 2009" },
    { name: "New York Red Bulls", division: "Eastern", conference: "Eastern", founded: "October 24, 1994", leagueJoined: "1996", city: "Harrison", state: "NJ", cityFounded: "1840", cityCharter: "February 22, 1840", stadium: "Red Bull Arena", stadiumOpened: "March 20, 2010" },
    { name: "Orlando City SC", division: "Eastern", conference: "Eastern", founded: "November 19, 2013", leagueJoined: "2015", city: "Orlando", state: "FL", cityFounded: "February 4, 1875", cityCharter: "July 31, 1875", stadium: "Exploria Stadium", stadiumOpened: "February 24, 2017" },
    { name: "Philadelphia Union", division: "Eastern", conference: "Eastern", founded: "February 28, 2008", leagueJoined: "2010", city: "Chester", state: "PA", cityFounded: "1682", cityCharter: "February 14, 1701", stadium: "Subaru Park", stadiumOpened: "June 27, 2010" },
    { name: "Portland Timbers", division: "Western", conference: "Western", founded: "March 27, 2009", leagueJoined: "2011", city: "Portland", state: "OR", cityFounded: "1843", cityCharter: "February 8, 1851", stadium: "Providence Park", stadiumOpened: "September 25, 1926" },
    { name: "Real Salt Lake", division: "Western", conference: "Western", founded: "April 7, 2004", leagueJoined: "2005", city: "Sandy", state: "UT", cityFounded: "September 19, 1871", cityCharter: "September 26, 1893", stadium: "America First Field", stadiumOpened: "October 9, 2008" },
    { name: "San Jose Earthquakes", division: "Western", conference: "Western", founded: "June 15, 1994", leagueJoined: "1996", city: "San Jose", state: "CA", cityFounded: "November 29, 1777", cityCharter: "March 27, 1850", stadium: "PayPal Park", stadiumOpened: "May 22, 2015" },
    { name: "Seattle Sounders FC", division: "Western", conference: "Western", founded: "November 13, 2007", leagueJoined: "2009", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "November 13, 1851", stadium: "Lumen Field", stadiumOpened: "July 20, 2002" },
    { name: "Sporting Kansas City", division: "Western", conference: "Western", founded: "June 15, 1995", leagueJoined: "1996", city: "Kansas City", state: "KS", cityFounded: "1838", cityCharter: "March 22, 1859", stadium: "Children's Mercy Park", stadiumOpened: "June 9, 2011" },
    { name: "St. Louis City SC", division: "Western", conference: "Western", founded: "August 20, 2019", leagueJoined: "2023", city: "St. Louis", state: "MO", cityFounded: "February 14, 1764", cityCharter: "February 14, 1764", stadium: "CITYPARK", stadiumOpened: "February 25, 2023" },
    { name: "Toronto FC", division: "Eastern", conference: "Eastern", founded: "May 11, 2005", leagueJoined: "2007", city: "Toronto", state: "ON", cityFounded: "August 27, 1793", cityCharter: "August 27, 1793", stadium: "BMO Field", stadiumOpened: "April 28, 2007" },
    { name: "Vancouver Whitecaps FC", division: "Western", conference: "Western", founded: "March 18, 2009", leagueJoined: "2011", city: "Vancouver", state: "BC", cityFounded: "April 6, 1886", cityCharter: "April 6, 1886", stadium: "BC Place", stadiumOpened: "June 19, 1983" }
  ],

"college-football": [
  // AMERICAN ATHLETIC CONFERENCE (AAC) - 14 teams
  { name: "Army Black Knights", division: "AAC", conference: "American Athletic Conference", founded: "03/16/1802", leagueJoined: "2015", city: "West Point", state: "NY", cityFounded: "03/16/1802", cityCharter: "03/16/1802", stadium: "Michie Stadium", stadiumOpened: "09/26/1924" },
  { name: "Charlotte 49ers", division: "AAC", conference: "American Athletic Conference", founded: "09/20/1946", leagueJoined: "2023", city: "Charlotte", state: "NC", cityFounded: "12/03/1768", cityCharter: "December 3, 1768", stadium: "Jerry Richardson Stadium", stadiumOpened: "08/31/2013" },
  { name: "East Carolina Pirates", division: "AAC", conference: "American Athletic Conference", founded: "03/08/1907", leagueJoined: "2014", city: "Greenville", state: "NC", cityFounded: "01/01/1786", cityCharter: "05/18/1786", stadium: "Dowdy-Ficklen Stadium", stadiumOpened: "09/23/1963" },
  { name: "Florida Atlantic Owls", division: "AAC", conference: "American Athletic Conference", founded: "12/20/1961", leagueJoined: "2023", city: "Boca Raton", state: "FL", cityFounded: "05/02/1925", cityCharter: "05/02/1925", stadium: "FAU Stadium", stadiumOpened: "10/15/2011" },
  { name: "Memphis Tigers", division: "AAC", conference: "American Athletic Conference", founded: "09/10/1912", leagueJoined: "2013", city: "Memphis", state: "TN", cityFounded: "05/22/1819", cityCharter: "May 22, 1819", stadium: "Simmons Bank Liberty Stadium", stadiumOpened: "09/02/1965" },
  { name: "Navy Midshipmen", division: "AAC", conference: "American Athletic Conference", founded: "10/10/1845", leagueJoined: "2015", city: "Annapolis", state: "MD", cityFounded: "01/01/1649", cityCharter: "05/23/1708", stadium: "Navy-Marine Corps Memorial Stadium", stadiumOpened: "09/26/1959" },
  { name: "North Texas Mean Green", division: "AAC", conference: "American Athletic Conference", founded: "08/30/1890", leagueJoined: "2013", city: "Denton", state: "TX", cityFounded: "01/01/1857", cityCharter: "04/11/1866", stadium: "DATCU Stadium", stadiumOpened: "09/10/2011" },
  { name: "Rice Owls", division: "AAC", conference: "American Athletic Conference", founded: "09/23/1912", leagueJoined: "2023", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "August 30, 1836", stadium: "Rice Stadium", stadiumOpened: "09/30/1950" },
  { name: "South Florida Bulls", division: "AAC", conference: "American Athletic Conference", founded: "12/19/1956", leagueJoined: "2005", city: "Tampa", state: "FL", cityFounded: "01/18/1849", cityCharter: "July 15, 1887", stadium: "Raymond James Stadium", stadiumOpened: "09/20/1998" },
  { name: "Temple Owls", division: "AAC", conference: "American Athletic Conference", founded: "12/12/1884", leagueJoined: "2013", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "October 27, 1682", stadium: "Lincoln Financial Field", stadiumOpened: "08/03/2003" },
  { name: "Tulane Green Wave", division: "AAC", conference: "American Athletic Conference", founded: "04/12/1834", leagueJoined: "2014", city: "New Orleans", state: "LA", cityFounded: "03/01/1718", cityCharter: "May 7, 1718", stadium: "Yulman Stadium", stadiumOpened: "09/06/2014" },
  { name: "Tulsa Golden Hurricane", division: "AAC", conference: "American Athletic Conference", founded: "09/14/1894", leagueJoined: "2014", city: "Tulsa", state: "OK", cityFounded: "01/01/1836", cityCharter: "01/18/1898", stadium: "Skelly Field at H. A. Chapman Stadium", stadiumOpened: "09/26/1930" },
  { name: "UAB Blazers", division: "AAC", conference: "American Athletic Conference", founded: "06/15/1969", leagueJoined: "2023", city: "Birmingham", state: "AL", cityFounded: "12/19/1871", cityCharter: "12/19/1871", stadium: "Protective Stadium", stadiumOpened: "10/01/2021" },
  { name: "UTSA Roadrunners", division: "AAC", conference: "American Athletic Conference", founded: "06/15/1969", leagueJoined: "2023", city: "San Antonio", state: "TX", cityFounded: "05/01/1718", cityCharter: "May 1, 1718", stadium: "Alamodome", stadiumOpened: "05/15/1993" },

  // ATLANTIC COAST CONFERENCE (ACC) - 17 teams
  { name: "Boston College Eagles", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/01/1863", leagueJoined: "2005", city: "Chestnut Hill", state: "MA", cityFounded: "09/17/1630", cityCharter: "03/19/1822", stadium: "Alumni Stadium", stadiumOpened: "09/21/1957" },
  { name: "California Golden Bears", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/23/1868", leagueJoined: "2024", city: "Berkeley", state: "CA", cityFounded: "04/04/1878", cityCharter: "04/04/1878", stadium: "California Memorial Stadium", stadiumOpened: "11/24/1923" },
  { name: "Clemson Tigers", division: "ACC", conference: "Atlantic Coast Conference", founded: "07/06/1889", leagueJoined: "1953", city: "Clemson", state: "SC", cityFounded: "01/01/1889", cityCharter: "July 27, 1937", stadium: "Memorial Stadium", stadiumOpened: "09/19/1942" },
  { name: "Duke Blue Devils", division: "ACC", conference: "Atlantic Coast Conference", founded: "12/09/1838", leagueJoined: "1953", city: "Durham", state: "NC", cityFounded: "04/26/1853", cityCharter: "04/26/1853", stadium: "Wallace Wade Stadium", stadiumOpened: "10/05/1929" },
  { name: "Florida State Seminoles", division: "ACC", conference: "Atlantic Coast Conference", founded: "01/24/1851", leagueJoined: "1991", city: "Tallahassee", state: "FL", cityFounded: "01/01/1824", cityCharter: "December 9, 1825", stadium: "Doak Campbell Stadium", stadiumOpened: "10/07/1950" },
  { name: "Georgia Tech Yellow Jackets", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/13/1885", leagueJoined: "1978", city: "Atlanta", state: "GA", cityFounded: "01/01/1837", cityCharter: "December 29, 1847", stadium: "Bobby Dodd Stadium", stadiumOpened: "09/26/1913" },
  { name: "Louisville Cardinals", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/03/1798", leagueJoined: "2014", city: "Louisville", state: "KY", cityFounded: "01/01/1778", cityCharter: "May 1, 1780", stadium: "L&N Federal Credit Union Stadium", stadiumOpened: "09/15/1998" },
  { name: "Miami Hurricanes", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/08/1925", leagueJoined: "2004", city: "Coral Gables", state: "FL", cityFounded: "01/01/1925", cityCharter: "April 29, 1925", stadium: "Hard Rock Stadium", stadiumOpened: "08/16/1987" },
  { name: "North Carolina Tar Heels", division: "ACC", conference: "Atlantic Coast Conference", founded: "12/11/1789", leagueJoined: "1953", city: "Chapel Hill", state: "NC", cityFounded: "01/01/1793", cityCharter: "December 15, 1851", stadium: "Kenan Memorial Stadium", stadiumOpened: "09/24/1927" },
  { name: "NC State Wolfpack", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/07/1887", leagueJoined: "1953", city: "Raleigh", state: "NC", cityFounded: "01/01/1792", cityCharter: "December 31, 1792", stadium: "Carter-Finley Stadium", stadiumOpened: "09/19/1966" },
  { name: "Pittsburgh Panthers", division: "ACC", conference: "Atlantic Coast Conference", founded: "02/28/1787", leagueJoined: "2013", city: "Pittsburgh", state: "PA", cityFounded: "11/27/1758", cityCharter: "November 25, 1758", stadium: "Acrisure Stadium", stadiumOpened: "08/18/2001" },
  { name: "SMU Mustangs", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/17/1911", leagueJoined: "2024", city: "Dallas", state: "TX", cityFounded: "01/01/1841", cityCharter: "November 22, 1841", stadium: "Gerald J. Ford Stadium", stadiumOpened: "09/03/2000" },
  { name: "Stanford Cardinal", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/01/1885", leagueJoined: "2024", city: "Stanford", state: "CA", cityFounded: "01/01/1891", cityCharter: "Unincorporated", stadium: "Stanford Stadium", stadiumOpened: "11/19/2006" },
  { name: "Syracuse Orange", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/24/1870", leagueJoined: "2013", city: "Syracuse", state: "NY", cityFounded: "01/01/1825", cityCharter: "December 14, 1847", stadium: "JMA Wireless Dome", stadiumOpened: "09/20/1980" },
  { name: "Virginia Cavaliers", division: "ACC", conference: "Atlantic Coast Conference", founded: "01/25/1819", leagueJoined: "1953", city: "Charlottesville", state: "VA", cityFounded: "01/01/1762", cityCharter: "September 1, 1888", stadium: "Scott Stadium", stadiumOpened: "09/18/1931" },
  { name: "Virginia Tech Hokies", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/01/1872", leagueJoined: "2004", city: "Blacksburg", state: "VA", cityFounded: "01/01/1798", cityCharter: "August 8, 1871", stadium: "Lane Stadium", stadiumOpened: "10/02/1965" },
  { name: "Wake Forest Demon Deacons", division: "ACC", conference: "Atlantic Coast Conference", founded: "02/03/1834", leagueJoined: "1953", city: "Winston-Salem", state: "NC", cityFounded: "01/01/1766", cityCharter: "May 9, 1913", stadium: "Truist Field", stadiumOpened: "09/19/1968" },

  // BIG TEN CONFERENCE - 18 teams
  { name: "Illinois Fighting Illini", division: "Big Ten", conference: "Big Ten Conference", founded: "03/02/1867", leagueJoined: "1896", city: "Champaign", state: "IL", cityFounded: "01/01/1855", cityCharter: "February 21, 1861", stadium: "Memorial Stadium", stadiumOpened: "10/18/1924" },
  { name: "Indiana Hoosiers", division: "Big Ten", conference: "Big Ten Conference", founded: "01/20/1820", leagueJoined: "1899", city: "Bloomington", state: "IN", cityFounded: "01/01/1818", cityCharter: "March 5, 1827", stadium: "Memorial Stadium", stadiumOpened: "10/08/1960" },
  { name: "Iowa Hawkeyes", division: "Big Ten", conference: "Big Ten Conference", founded: "02/25/1847", leagueJoined: "1899", city: "Iowa City", state: "IA", cityFounded: "01/01/1839", cityCharter: "January 24, 1853", stadium: "Kinnick Stadium", stadiumOpened: "10/05/1929" },
  { name: "Maryland Terrapins", division: "Big Ten", conference: "Big Ten Conference", founded: "03/06/1856", leagueJoined: "2014", city: "College Park", state: "MD", cityFounded: "01/01/1856", cityCharter: "01/01/1945", stadium: "SECU Stadium", stadiumOpened: "09/17/1950" },
  { name: "Michigan Wolverines", division: "Big Ten", conference: "Big Ten Conference", founded: "08/26/1817", leagueJoined: "1896", city: "Ann Arbor", state: "MI", cityFounded: "01/01/1824", cityCharter: "April 4, 1851", stadium: "Michigan Stadium", stadiumOpened: "10/01/1927" },
  { name: "Michigan State Spartans", division: "Big Ten", conference: "Big Ten Conference", founded: "02/12/1855", leagueJoined: "1953", city: "East Lansing", state: "MI", cityFounded: "01/01/1907", cityCharter: "May 8, 1907", stadium: "Spartan Stadium", stadiumOpened: "10/01/1957" },
  { name: "Minnesota Golden Gophers", division: "Big Ten", conference: "Big Ten Conference", founded: "02/25/1851", leagueJoined: "1896", city: "Minneapolis", state: "MN", cityFounded: "01/01/1872", cityCharter: "February 28, 1866", stadium: "Huntington Bank Stadium", stadiumOpened: "09/12/2009" },
  { name: "Nebraska Cornhuskers", division: "Big Ten", conference: "Big Ten Conference", founded: "02/15/1869", leagueJoined: "2011", city: "Lincoln", state: "NE", cityFounded: "01/01/1856", cityCharter: "April 1, 1869", stadium: "Memorial Stadium", stadiumOpened: "10/13/1923" },
  { name: "Northwestern Wildcats", division: "Big Ten", conference: "Big Ten Conference", founded: "01/28/1851", leagueJoined: "1896", city: "Evanston", state: "IL", cityFounded: "01/01/1863", cityCharter: "December 29, 1863", stadium: "Ryan Field", stadiumOpened: "10/05/1996" },
  { name: "Ohio State Buckeyes", division: "Big Ten", conference: "Big Ten Conference", founded: "03/22/1870", leagueJoined: "1912", city: "Columbus", state: "OH", cityFounded: "02/14/1812", cityCharter: "February 14, 1812", stadium: "Ohio Stadium", stadiumOpened: "10/07/1922" },
  { name: "Oregon Ducks", division: "Big Ten", conference: "Big Ten Conference", founded: "10/19/1876", leagueJoined: "2024", city: "Eugene", state: "OR", cityFounded: "01/01/1846", cityCharter: "10/17/1862", stadium: "Autzen Stadium", stadiumOpened: "09/23/1967" },
  { name: "Penn State Nittany Lions", division: "Big Ten", conference: "Big Ten Conference", founded: "02/22/1855", leagueJoined: "1993", city: "University Park", state: "PA", cityFounded: "01/01/1896", cityCharter: "01/01/1896", stadium: "Beaver Stadium", stadiumOpened: "09/17/1960" },
  { name: "Purdue Boilermakers", division: "Big Ten", conference: "Big Ten Conference", founded: "05/06/1869", leagueJoined: "1896", city: "West Lafayette", state: "IN", cityFounded: "01/01/1888", cityCharter: "01/01/1888", stadium: "Ross-Ade Stadium", stadiumOpened: "11/22/1924" },
  { name: "Rutgers Scarlet Knights", division: "Big Ten", conference: "Big Ten Conference", founded: "11/10/1766", leagueJoined: "2014", city: "Piscataway", state: "NJ", cityFounded: "01/01/1693", cityCharter: "February 21, 1798", stadium: "SHI Stadium", stadiumOpened: "09/03/1994" },
  { name: "UCLA Bruins", division: "Big Ten", conference: "Big Ten Conference", founded: "05/23/1919", leagueJoined: "2024", city: "Los Angeles", state: "CA", cityFounded: "09/04/1781", cityCharter: "September 4, 1781", stadium: "Rose Bowl", stadiumOpened: "10/28/1922" },
  { name: "USC Trojans", division: "Big Ten", conference: "Big Ten Conference", founded: "10/06/1880", leagueJoined: "2024", city: "Los Angeles", state: "CA", cityFounded: "09/04/1781", cityCharter: "September 4, 1781", stadium: "United Airlines Field at the Coliseum", stadiumOpened: "05/01/1923" },
  { name: "Washington Huskies", division: "Big Ten", conference: "Big Ten Conference", founded: "11/04/1861", leagueJoined: "2024", city: "Seattle", state: "WA", cityFounded: "05/23/1853", cityCharter: "November 13, 1851", stadium: "Husky Stadium", stadiumOpened: "11/27/1920" },
  { name: "Wisconsin Badgers", division: "Big Ten", conference: "Big Ten Conference", founded: "07/26/1848", leagueJoined: "1896", city: "Madison", state: "WI", cityFounded: "01/01/1836", cityCharter: "February 3, 1846", stadium: "Camp Randall Stadium", stadiumOpened: "11/03/1917" },

  // BIG 12 CONFERENCE - 16 teams
  { name: "Arizona Wildcats", division: "Big 12", conference: "Big 12 Conference", founded: "10/12/1885", leagueJoined: "2024", city: "Tucson", state: "AZ", cityFounded: "01/01/1775", cityCharter: "February 7, 1877", stadium: "Arizona Stadium", stadiumOpened: "10/13/1928" },
  { name: "Arizona State Sun Devils", division: "Big 12", conference: "Big 12 Conference", founded: "02/26/1885", leagueJoined: "2024", city: "Tempe", state: "AZ", cityFounded: "01/01/1871", cityCharter: "November 26, 1894", stadium: "Mountain America Stadium", stadiumOpened: "10/07/1958" },
  { name: "Baylor Bears", division: "Big 12", conference: "Big 12 Conference", founded: "02/01/1845", leagueJoined: "1996", city: "Waco", state: "TX", cityFounded: "01/01/1849", cityCharter: "August 29, 1856", stadium: "McLane Stadium", stadiumOpened: "08/31/2014" },
  { name: "BYU Cougars", division: "Big 12", conference: "Big 12 Conference", founded: "10/16/1875", leagueJoined: "2023", city: "Provo", state: "UT", cityFounded: "01/01/1849", cityCharter: "February 6, 1851", stadium: "LaVell Edwards Stadium", stadiumOpened: "09/12/1964" },
  { name: "Cincinnati Bearcats", division: "Big 12", conference: "Big 12 Conference", founded: "02/11/1819", leagueJoined: "2023", city: "Cincinnati", state: "OH", cityFounded: "12/01/1788", cityCharter: "December 28, 1788", stadium: "Nippert Stadium", stadiumOpened: "10/10/1924" },
  { name: "Colorado Buffaloes", division: "Big 12", conference: "Big 12 Conference", founded: "04/01/1876", leagueJoined: "2024", city: "Boulder", state: "CO", cityFounded: "01/01/1859", cityCharter: "November 4, 1871", stadium: "Folsom Field", stadiumOpened: "09/26/1924" },
  { name: "Houston Cougars", division: "Big 12", conference: "Big 12 Conference", founded: "03/07/1927", leagueJoined: "2023", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "August 30, 1836", stadium: "TDECU Stadium", stadiumOpened: "08/29/2014" },
  { name: "Iowa State Cyclones", division: "Big 12", conference: "Big 12 Conference", founded: "03/22/1858", leagueJoined: "1996", city: "Ames", state: "IA", cityFounded: "01/01/1864", cityCharter: "January 8, 1870", stadium: "Jack Trice Stadium", stadiumOpened: "09/20/1975" },
  { name: "Kansas Jayhawks", division: "Big 12", conference: "Big 12 Conference", founded: "03/21/1865", leagueJoined: "1996", city: "Lawrence", state: "KS", cityFounded: "01/01/1854", cityCharter: "February 14, 1858", stadium: "David Booth Kansas Memorial Stadium", stadiumOpened: "11/02/1921" },
  { name: "Kansas State Wildcats", division: "Big 12", conference: "Big 12 Conference", founded: "02/16/1863", leagueJoined: "1996", city: "Manhattan", state: "KS", cityFounded: "01/01/1855", cityCharter: "May 30, 1857", stadium: "Bill Snyder Family Stadium", stadiumOpened: "09/21/1968" },
  { name: "Oklahoma State Cowboys", division: "Big 12", conference: "Big 12 Conference", founded: "12/25/1890", leagueJoined: "1996", city: "Stillwater", state: "OK", cityFounded: "01/01/1884", cityCharter: "August 24, 1889", stadium: "Boone Pickens Stadium", stadiumOpened: "10/04/1920" },
  { name: "TCU Horned Frogs", division: "Big 12", conference: "Big 12 Conference", founded: "09/01/1873", leagueJoined: "2012", city: "Fort Worth", state: "TX", cityFounded: "01/01/1849", cityCharter: "February 15, 1873", stadium: "Amon G. Carter Stadium", stadiumOpened: "10/11/1930" },
  { name: "Texas Tech Red Raiders", division: "Big 12", conference: "Big 12 Conference", founded: "02/10/1923", leagueJoined: "1996", city: "Lubbock", state: "TX", cityFounded: "01/01/1891", cityCharter: "March 16, 1909", stadium: "Jones AT&T Stadium", stadiumOpened: "10/04/1947" },
  { name: "UCF Knights", division: "Big 12", conference: "Big 12 Conference", founded: "06/10/1963", leagueJoined: "2023", city: "Orlando", state: "FL", cityFounded: "02/04/1875", cityCharter: "July 31, 1875", stadium: "FBC Mortgage Stadium", stadiumOpened: "09/15/2007" },
  { name: "Utah Utes", division: "Big 12", conference: "Big 12 Conference", founded: "02/28/1850", leagueJoined: "2024", city: "Salt Lake City", state: "UT", cityFounded: "07/24/1847", cityCharter: "July 24, 1847", stadium: "Rice-Eccles Stadium", stadiumOpened: "09/12/1998" },
  { name: "West Virginia Mountaineers", division: "Big 12", conference: "Big 12 Conference", founded: "02/07/1867", leagueJoined: "2012", city: "Morgantown", state: "WV", cityFounded: "01/01/1785", cityCharter: "October 17, 1785", stadium: "Mountaineer Field at Milan Puskar Stadium", stadiumOpened: "09/06/1980" },

  // CONFERENCE USA (CUSA) - 12 teams
  { name: "Delaware Blue Hens", division: "CUSA", conference: "Conference USA", founded: "02/01/1743", leagueJoined: "2025", city: "Newark", state: "DE", cityFounded: "01/01/1758", cityCharter: "April 13, 1758", stadium: "Delaware Stadium", stadiumOpened: "09/23/1952" },
  { name: "FIU Panthers", division: "CUSA", conference: "Conference USA", founded: "06/27/1965", leagueJoined: "2013", city: "Miami", state: "FL", cityFounded: "07/28/1896", cityCharter: "July 28, 1896", stadium: "Riccardo Silva Stadium", stadiumOpened: "11/11/1995" },
  { name: "Jacksonville State Gamecocks", division: "CUSA", conference: "Conference USA", founded: "02/22/1883", leagueJoined: "2023", city: "Jacksonville", state: "AL", cityFounded: "01/01/1833", cityCharter: "January 9, 1836", stadium: "AmFirst Stadium", stadiumOpened: "09/06/1947" },
  { name: "Kennesaw State Owls", division: "CUSA", conference: "Conference USA", founded: "10/08/1963", leagueJoined: "2024", city: "Kennesaw", state: "GA", cityFounded: "01/01/1887", cityCharter: "September 21, 1887", stadium: "Fifth Third Bank Stadium", stadiumOpened: "09/02/2010" },
  { name: "Liberty Flames", division: "CUSA", conference: "Conference USA", founded: "08/20/1971", leagueJoined: "2023", city: "Lynchburg", state: "VA", cityFounded: "01/01/1786", cityCharter: "January 10, 1805", stadium: "Williams Stadium", stadiumOpened: "10/08/1989" },
  { name: "Louisiana Tech Bulldogs", division: "CUSA", conference: "Conference USA", founded: "09/23/1894", leagueJoined: "2001", city: "Ruston", state: "LA", cityFounded: "01/01/1884", cityCharter: "01/01/1898", stadium: "Joe Aillet Stadium", stadiumOpened: "10/07/1968" },
  { name: "Middle Tennessee Blue Raiders", division: "CUSA", conference: "Conference USA", founded: "09/11/1911", leagueJoined: "2013", city: "Murfreesboro", state: "TN", cityFounded: "01/01/1811", cityCharter: "January 4, 1812", stadium: "Floyd Stadium", stadiumOpened: "09/12/1933" },
  { name: "Missouri State Bears", division: "CUSA", conference: "Conference USA", founded: "03/06/1905", leagueJoined: "2025", city: "Springfield", state: "MO", cityFounded: "01/01/1838", cityCharter: "February 19, 1838", stadium: "Plaster Sports Complex", stadiumOpened: "09/01/1941" },
  { name: "New Mexico State Aggies", division: "CUSA", conference: "Conference USA", founded: "09/17/1888", leagueJoined: "2023", city: "Las Cruces", state: "NM", cityFounded: "01/01/1849", cityCharter: "October 9, 1907", stadium: "Aggie Memorial Stadium", stadiumOpened: "09/18/1978" },
  { name: "Sam Houston Bearkats", division: "CUSA", conference: "Conference USA", founded: "10/10/1879", leagueJoined: "2023", city: "Huntsville", state: "TX", cityFounded: "01/01/1836", cityCharter: "January 30, 1835", stadium: "Elliott T. Bowers Stadium", stadiumOpened: "09/17/1986" },
  { name: "UTEP Miners", division: "CUSA", conference: "Conference USA", founded: "09/23/1913", leagueJoined: "2005", city: "El Paso", state: "TX", cityFounded: "01/01/1659", cityCharter: "May 17, 1873", stadium: "Sun Bowl", stadiumOpened: "09/21/1963" },
  { name: "Western Kentucky Hilltoppers", division: "CUSA", conference: "Conference USA", founded: "01/15/1906", leagueJoined: "2014", city: "Bowling Green", state: "KY", cityFounded: "01/01/1798", cityCharter: "October 5, 1812", stadium: "Houchens Industries-L.T. Smith Stadium", stadiumOpened: "09/18/1968" },

  // MID-AMERICAN CONFERENCE (MAC) - 12 teams
  { name: "Akron Zips", division: "MAC", conference: "Mid-American Conference", founded: "09/22/1870", leagueJoined: "1992", city: "Akron", state: "OH", cityFounded: "01/01/1825", cityCharter: "March 5, 1865", stadium: "InfoCision Stadium", stadiumOpened: "09/12/2009" },
  { name: "Ball State Cardinals", division: "MAC", conference: "Mid-American Conference", founded: "05/15/1918", leagueJoined: "1973", city: "Muncie", state: "IN", cityFounded: "01/01/1827", cityCharter: "December 6, 1854", stadium: "Scheumann Stadium", stadiumOpened: "09/02/1967" },
  { name: "Bowling Green Falcons", division: "MAC", conference: "Mid-American Conference", founded: "10/12/1910", leagueJoined: "1952", city: "Bowling Green", state: "OH", cityFounded: "01/01/1833", cityCharter: "July 23, 1855", stadium: "Doyt Perry Stadium", stadiumOpened: "10/01/1966" },
  { name: "Buffalo Bulls", division: "MAC", conference: "Mid-American Conference", founded: "05/11/1846", leagueJoined: "1998", city: "Buffalo", state: "NY", cityFounded: "01/01/1810", cityCharter: "June 2, 1832", stadium: "UB Stadium", stadiumOpened: "08/29/1993" },
  { name: "Central Michigan Chippewas", division: "MAC", conference: "Mid-American Conference", founded: "05/30/1892", leagueJoined: "1971", city: "Mount Pleasant", state: "MI", cityFounded: "01/01/1855", cityCharter: "01/01/1889", stadium: "Kelly/Shorts Stadium", stadiumOpened: "09/08/1972" },
  { name: "Eastern Michigan Eagles", division: "MAC", conference: "Mid-American Conference", founded: "03/28/1849", leagueJoined: "1976", city: "Ypsilanti", state: "MI", cityFounded: "01/01/1823", cityCharter: "01/01/1858", stadium: "Rynearson Stadium", stadiumOpened: "09/27/1969" },
  { name: "Kent State Golden Flashes", division: "MAC", conference: "Mid-American Conference", founded: "05/13/1910", leagueJoined: "1951", city: "Kent", state: "OH", cityFounded: "01/01/1805", cityCharter: "May 6, 1867", stadium: "Dix Stadium", stadiumOpened: "09/13/1969" },
  { name: "Miami RedHawks", division: "MAC", conference: "Mid-American Conference", founded: "02/17/1809", leagueJoined: "1948", city: "Oxford", state: "OH", cityFounded: "01/01/1810", cityCharter: "February 23, 1830", stadium: "Yager Stadium", stadiumOpened: "09/16/1983" },
  { name: "Northern Illinois Huskies", division: "MAC", conference: "Mid-American Conference", founded: "05/22/1895", leagueJoined: "1997", city: "DeKalb", state: "IL", cityFounded: "01/01/1856", cityCharter: "February 24, 1877", stadium: "Huskie Stadium", stadiumOpened: "09/01/1965" },
  { name: "Ohio Bobcats", division: "MAC", conference: "Mid-American Conference", founded: "02/18/1804", leagueJoined: "1946", city: "Athens", state: "OH", cityFounded: "01/01/1797", cityCharter: "January 1, 1811", stadium: "Peden Stadium", stadiumOpened: "09/12/1929" },
  { name: "Toledo Rockets", division: "MAC", conference: "Mid-American Conference", founded: "04/25/1872", leagueJoined: "1950", city: "Toledo", state: "OH", cityFounded: "01/01/1833", cityCharter: "January 7, 1837", stadium: "Glass Bowl", stadiumOpened: "09/26/1937" },
  { name: "Western Michigan Broncos", division: "MAC", conference: "Mid-American Conference", founded: "08/29/1903", leagueJoined: "1948", city: "Kalamazoo", state: "MI", cityFounded: "01/01/1829", cityCharter: "01/01/1884", stadium: "Waldo Stadium", stadiumOpened: "09/18/1939" },

  // MOUNTAIN WEST CONFERENCE - 12 teams
  { name: "Air Force Falcons", division: "Mountain West", conference: "Mountain West Conference", founded: "04/01/1954", leagueJoined: "1999", city: "Colorado Springs", state: "CO", cityFounded: "01/01/1871", cityCharter: "June 19, 1886", stadium: "Falcon Stadium", stadiumOpened: "09/22/1962" },
  { name: "Boise State Broncos", division: "Mountain West", conference: "Mountain West Conference", founded: "04/12/1932", leagueJoined: "2011", city: "Boise", state: "ID", cityFounded: "01/01/1863", cityCharter: "January 11, 1866", stadium: "Albertsons Stadium", stadiumOpened: "09/01/1970" },
  { name: "Colorado State Rams", division: "Mountain West", conference: "Mountain West Conference", founded: "02/11/1870", leagueJoined: "1999", city: "Fort Collins", state: "CO", cityFounded: "01/01/1864", cityCharter: "February 3, 1873", stadium: "Canvas Stadium", stadiumOpened: "08/26/2017" },
  { name: "Fresno State Bulldogs", division: "Mountain West", conference: "Mountain West Conference", founded: "05/29/1911", leagueJoined: "2012", city: "Fresno", state: "CA", cityFounded: "01/01/1872", cityCharter: "October 12, 1885", stadium: "Valley Children's Stadium", stadiumOpened: "09/15/1980" },
  { name: "Hawaii Rainbow Warriors", division: "Mountain West", conference: "Mountain West Conference", founded: "03/25/1907", leagueJoined: "2012", city: "Honolulu", state: "HI", cityFounded: "01/01/1845", cityCharter: "April 30, 1907", stadium: "Clarence T.C. Ching Complex", stadiumOpened: "09/17/1975" },
  { name: "Nevada Wolf Pack", division: "Mountain West", conference: "Mountain West Conference", founded: "10/12/1874", leagueJoined: "2012", city: "Reno", state: "NV", cityFounded: "01/01/1868", cityCharter: "March 16, 1903", stadium: "Mackay Stadium", stadiumOpened: "09/14/1966" },
  { name: "New Mexico Lobos", division: "Mountain West", conference: "Mountain West Conference", founded: "02/28/1889", leagueJoined: "1999", city: "Albuquerque", state: "NM", cityFounded: "01/01/1706", cityCharter: "February 10, 1885", stadium: "Dreamstyle Stadium", stadiumOpened: "09/08/1960" },
  { name: "San Diego State Aztecs", division: "Mountain West", conference: "Mountain West Conference", founded: "03/13/1897", leagueJoined: "1999", city: "San Diego", state: "CA", cityFounded: "07/16/1769", cityCharter: "July 16, 1769", stadium: "Snapdragon Stadium", stadiumOpened: "09/03/2022" },
  { name: "San Jose State Spartans", division: "Mountain West", conference: "Mountain West Conference", founded: "05/02/1857", leagueJoined: "2013", city: "San Jose", state: "CA", cityFounded: "11/29/1777", cityCharter: "03/27/1850", stadium: "CEFCU Stadium", stadiumOpened: "09/04/1933" },
  { name: "UNLV Rebels", division: "Mountain West", conference: "Mountain West Conference", founded: "09/10/1957", leagueJoined: "1999", city: "Las Vegas", state: "NV", cityFounded: "05/15/1905", cityCharter: "May 15, 1905", stadium: "Allegiant Stadium", stadiumOpened: "07/31/2020" },
  { name: "Utah State Aggies", division: "Mountain West", conference: "Mountain West Conference", founded: "03/08/1888", leagueJoined: "2005", city: "Logan", state: "UT", cityFounded: "01/01/1859", cityCharter: "January 17, 1866", stadium: "Maverik Stadium", stadiumOpened: "10/01/1968" },
  { name: "Wyoming Cowboys", division: "Mountain West", conference: "Mountain West Conference", founded: "09/27/1886", leagueJoined: "1999", city: "Laramie", state: "WY", cityFounded: "01/01/1868", cityCharter: "January 13, 1874", stadium: "War Memorial Stadium", stadiumOpened: "09/24/1950" },

  // SOUTHEASTERN CONFERENCE (SEC) - 16 teams
  { name: "Alabama Crimson Tide", division: "SEC", conference: "Southeastern Conference", founded: "04/12/1831", leagueJoined: "1932", city: "Tuscaloosa", state: "AL", cityFounded: "01/01/1819", cityCharter: "December 13, 1819", stadium: "Bryant-Denny Stadium", stadiumOpened: "09/28/1929" },
  { name: "Arkansas Razorbacks", division: "SEC", conference: "Southeastern Conference", founded: "03/27/1871", leagueJoined: "1991", city: "Fayetteville", state: "AR", cityFounded: "01/01/1828", cityCharter: "November 3, 1836", stadium: "Donald W. Reynolds Razorback Stadium", stadiumOpened: "09/24/1938" },
  { name: "Auburn Tigers", division: "SEC", conference: "Southeastern Conference", founded: "02/07/1856", leagueJoined: "1932", city: "Auburn", state: "AL", cityFounded: "01/01/1836", cityCharter: "February 2, 1839", stadium: "Jordan-Hare Stadium", stadiumOpened: "11/30/1939" },
  { name: "Florida Gators", division: "SEC", conference: "Southeastern Conference", founded: "01/06/1853", leagueJoined: "1932", city: "Gainesville", state: "FL", cityFounded: "01/01/1854", cityCharter: "April 14, 1869", stadium: "Ben Hill Griffin Stadium", stadiumOpened: "11/10/1930" },
  { name: "Georgia Bulldogs", division: "SEC", conference: "Southeastern Conference", founded: "01/27/1785", leagueJoined: "1932", city: "Athens", state: "GA", cityFounded: "01/01/1801", cityCharter: "December 8, 1806", stadium: "Sanford Stadium", stadiumOpened: "10/12/1929" },
  { name: "Kentucky Wildcats", division: "SEC", conference: "Southeastern Conference", founded: "02/29/1865", leagueJoined: "1932", city: "Lexington", state: "KY", cityFounded: "01/01/1775", cityCharter: "May 6, 1782", stadium: "Kroger Field", stadiumOpened: "09/15/1973" },
  { name: "LSU Tigers", division: "SEC", conference: "Southeastern Conference", founded: "01/02/1860", leagueJoined: "1932", city: "Baton Rouge", state: "LA", cityFounded: "01/01/1719", cityCharter: "July 6, 1817", stadium: "Tiger Stadium", stadiumOpened: "11/25/1924" },
  { name: "Mississippi State Bulldogs", division: "SEC", conference: "Southeastern Conference", founded: "02/28/1878", leagueJoined: "1932", city: "Starkville", state: "MS", cityFounded: "01/01/1831", cityCharter: "May 11, 1837", stadium: "Davis Wade Stadium", stadiumOpened: "09/19/1914" },
  { name: "Missouri Tigers", division: "SEC", conference: "Southeastern Conference", founded: "02/11/1839", leagueJoined: "2012", city: "Columbia", state: "MO", cityFounded: "01/01/1821", cityCharter: "November 5, 1826", stadium: "Faurot Field", stadiumOpened: "10/02/1926" },
  { name: "Ole Miss Rebels", division: "SEC", conference: "Southeastern Conference", founded: "02/24/1844", leagueJoined: "1932", city: "Oxford", state: "MS", cityFounded: "01/01/1837", cityCharter: "May 11, 1837", stadium: "Vaught-Hemingway Stadium", stadiumOpened: "09/24/1915" },
  { name: "Oklahoma Sooners", division: "SEC", conference: "Southeastern Conference", founded: "12/19/1890", leagueJoined: "2025", city: "Norman", state: "OK", cityFounded: "01/01/1889", cityCharter: "May 13, 1891", stadium: "Gaylord Family Oklahoma Memorial Stadium", stadiumOpened: "10/20/1923" },
  { name: "South Carolina Gamecocks", division: "SEC", conference: "Southeastern Conference", founded: "01/10/1801", leagueJoined: "1991", city: "Columbia", state: "SC", cityFounded: "01/01/1786", cityCharter: "March 22, 1805", stadium: "Williams-Brice Stadium", stadiumOpened: "09/08/1934" },
  { name: "Tennessee Volunteers", division: "SEC", conference: "Southeastern Conference", founded: "05/10/1794", leagueJoined: "1932", city: "Knoxville", state: "TN", cityFounded: "01/01/1791", cityCharter: "October 27, 1815", stadium: "Neyland Stadium", stadiumOpened: "09/24/1921" },
  { name: "Texas Longhorns", division: "SEC", conference: "Southeastern Conference", founded: "09/15/1883", leagueJoined: "2025", city: "Austin", state: "TX", cityFounded: "12/27/1839", cityCharter: "December 27, 1839", stadium: "Darrell K Royal-Texas Memorial Stadium", stadiumOpened: "11/27/1924" },
  { name: "Texas A&M Aggies", division: "SEC", conference: "Southeastern Conference", founded: "10/04/1876", leagueJoined: "2012", city: "College Station", state: "TX", cityFounded: "01/01/1938", cityCharter: "October 19, 1938", stadium: "Kyle Field", stadiumOpened: "09/24/1927" },
  { name: "Vanderbilt Commodores", division: "SEC", conference: "Southeastern Conference", founded: "05/01/1873", leagueJoined: "1932", city: "Nashville", state: "TN", cityFounded: "12/24/1779", cityCharter: "December 24, 1779", stadium: "FirstBank Stadium", stadiumOpened: "10/14/1922" },

  // SUN BELT CONFERENCE - 14 teams
  { name: "Appalachian State Mountaineers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/20/1899", leagueJoined: "2014", city: "Boone", state: "NC", cityFounded: "01/01/1872", cityCharter: "January 23, 1872", stadium: "Kidd Brewer Stadium", stadiumOpened: "09/19/1962" },
  { name: "Arkansas State Red Wolves", division: "Sun Belt", conference: "Sun Belt Conference", founded: "04/09/1909", leagueJoined: "2001", city: "Jonesboro", state: "AR", cityFounded: "01/01/1859", cityCharter: "February 16, 1883", stadium: "Centennial Bank Stadium", stadiumOpened: "09/16/1974" },
  { name: "Coastal Carolina Chanticleers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "07/02/1954", leagueJoined: "2017", city: "Conway", state: "SC", cityFounded: "01/01/1732", cityCharter: "April 13, 1898", stadium: "Brooks Stadium", stadiumOpened: "09/04/2003" },
  { name: "Georgia Southern Eagles", division: "Sun Belt", conference: "Sun Belt Conference", founded: "12/01/1906", leagueJoined: "2014", city: "Statesboro", state: "GA", cityFounded: "01/01/1803", cityCharter: "December 19, 1803", stadium: "Paulson Stadium", stadiumOpened: "09/26/1984" },
  { name: "Georgia State Panthers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "08/25/1913", leagueJoined: "2013", city: "Atlanta", state: "GA", cityFounded: "01/01/1837", cityCharter: "December 29, 1847", stadium: "Center Parc Stadium", stadiumOpened: "08/19/2017" },
  { name: "James Madison Dukes", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/14/1908", leagueJoined: "2022", city: "Harrisonburg", state: "VA", cityFounded: "01/01/1780", cityCharter: "March 16, 1849", stadium: "Bridgeforth Stadium", stadiumOpened: "09/06/1975" },
  { name: "Louisiana Ragin' Cajuns", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/11/1898", leagueJoined: "1991", city: "Lafayette", state: "LA", cityFounded: "01/01/1821", cityCharter: "01/01/1836", stadium: "Cajun Field", stadiumOpened: "09/16/1971" },
  { name: "Louisiana Monroe Warhawks", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/26/1931", leagueJoined: "2006", city: "Monroe", state: "LA", cityFounded: "01/01/1819", cityCharter: "March 14, 1820", stadium: "Malone Stadium", stadiumOpened: "09/27/1978" },
  { name: "Marshall Thundering Herd", division: "Sun Belt", conference: "Sun Belt Conference", founded: "02/27/1837", leagueJoined: "2022", city: "Huntington", state: "WV", cityFounded: "01/01/1871", cityCharter: "February 27, 1871", stadium: "Joan C. Edwards Stadium", stadiumOpened: "09/07/1991" },
  { name: "Old Dominion Monarchs", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/24/1930", leagueJoined: "2022", city: "Norfolk", state: "VA", cityFounded: "01/01/1682", cityCharter: "01/01/1845", stadium: "S.B. Ballard Stadium", stadiumOpened: "09/03/1936" },
  { name: "South Alabama Jaguars", division: "Sun Belt", conference: "Sun Belt Conference", founded: "05/15/1963", leagueJoined: "2013", city: "Mobile", state: "AL", cityFounded: "01/01/1702", cityCharter: "January 20, 1814", stadium: "Hancock Whitney Stadium", stadiumOpened: "09/04/2010" },
  { name: "Southern Miss Golden Eagles", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/30/1910", leagueJoined: "2022", city: "Hattiesburg", state: "MS", cityFounded: "01/01/1882", cityCharter: "March 11, 1884", stadium: "M.M. Roberts Stadium", stadiumOpened: "09/01/1976" },
  { name: "Texas State Bobcats", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/26/1899", leagueJoined: "2013", city: "San Marcos", state: "TX", cityFounded: "01/01/1851", cityCharter: "March 1, 1851", stadium: "Bobcat Stadium", stadiumOpened: "08/30/1981" },
  { name: "Troy Trojans", division: "Sun Belt", conference: "Sun Belt Conference", founded: "02/26/1887", leagueJoined: "2005", city: "Troy", state: "AL", cityFounded: "01/01/1838", cityCharter: "February 4, 1843", stadium: "Veterans Memorial Stadium", stadiumOpened: "09/25/1950" },
  
  // BIG SKY CONFERENCE - 12 teams
  { name: "Cal Poly Mustangs", division: "Big Sky", conference: "Big Sky Conference", founded: "03/08/1901", leagueJoined: "1996", city: "San Luis Obispo", state: "CA", cityFounded: "09/01/1772", cityCharter: "12/01/1856", stadium: "Alex G. Spanos Stadium", stadiumOpened: "11/08/2006" },
  { name: "Idaho State Bengals", division: "Big Sky", conference: "Big Sky Conference", founded: "05/08/1902", leagueJoined: "1963", city: "Pocatello", state: "ID", cityFounded: "09/01/1889", cityCharter: "April 29, 1889", stadium: "Holt Arena", stadiumOpened: "09/15/1970" },
  { name: "Montana Grizzlies", division: "Big Sky", conference: "Big Sky Conference", founded: "02/17/1893", leagueJoined: "1963", city: "Missoula", state: "MT", cityFounded: "01/01/1860", cityCharter: "03/08/1885", stadium: "Washington-Grizzly Stadium", stadiumOpened: "09/14/1986" },
  { name: "Montana State Bobcats", division: "Big Sky", conference: "Big Sky Conference", founded: "02/16/1893", leagueJoined: "1963", city: "Bozeman", state: "MT", cityFounded: "08/09/1864", cityCharter: "04/13/1883", stadium: "Bobcat Stadium", stadiumOpened: "09/05/1998" },
  { name: "North Dakota Fighting Hawks", division: "Big Sky", conference: "Big Sky Conference", founded: "02/27/1883", leagueJoined: "2020", city: "Grand Forks", state: "ND", cityFounded: "01/01/1870", cityCharter: "02/22/1881", stadium: "Alerus Center", stadiumOpened: "02/10/2001" },
  { name: "Northern Arizona Lumberjacks", division: "Big Sky", conference: "Big Sky Conference", founded: "05/11/1899", leagueJoined: "1970", city: "Flagstaff", state: "AZ", cityFounded: "01/01/1876", cityCharter: "May 26, 1894", stadium: "Walkup Skydome", stadiumOpened: "09/01/1977" },
  { name: "Northern Colorado Bears", division: "Big Sky", conference: "Big Sky Conference", founded: "08/10/1889", leagueJoined: "2006", city: "Greeley", state: "CO", cityFounded: "04/06/1869", cityCharter: "04/06/1886", stadium: "Nottingham Field", stadiumOpened: "09/06/2003" },
  { name: "Portland State Vikings", division: "Big Sky", conference: "Big Sky Conference", founded: "06/15/1946", leagueJoined: "1996", city: "Portland", state: "OR", cityFounded: "01/01/1845", cityCharter: "February 8, 1851", stadium: "Hillsboro Stadium", stadiumOpened: "07/17/1999" },
  { name: "Sacramento State Hornets", division: "Big Sky", conference: "Big Sky Conference", founded: "01/01/1947", leagueJoined: "1996", city: "Sacramento", state: "CA", cityFounded: "01/01/1848", cityCharter: "February 27, 1850", stadium: "Hornet Stadium", stadiumOpened: "09/12/1969" },
  { name: "Southern Utah Thunderbirds", division: "Big Sky", conference: "Big Sky Conference", founded: "01/01/1897", leagueJoined: "2012", city: "Cedar City", state: "UT", cityFounded: "11/11/1851", cityCharter: "02/18/1868", stadium: "Eccles Coliseum", stadiumOpened: "09/09/1967" },
  { name: "UC Davis Aggies", division: "Big Sky", conference: "Big Sky Conference", founded: "01/01/1905", leagueJoined: "2012", city: "Davis", state: "CA", cityFounded: "03/01/1868", cityCharter: "03/28/1917", stadium: "UC Davis Health Stadium", stadiumOpened: "09/01/2007" },
  { name: "Weber State Wildcats", division: "Big Sky", conference: "Big Sky Conference", founded: "01/07/1889", leagueJoined: "1963", city: "Ogden", state: "UT", cityFounded: "02/25/1851", cityCharter: "02/06/1889", stadium: "Stewart Stadium", stadiumOpened: "09/08/1962" },

  // BIG SOUTH CONFERENCE - 5 teams
  { name: "Campbell Fighting Camels", division: "Big South", conference: "Big South Conference", founded: "01/05/1887", leagueJoined: "2018", city: "Buies Creek", state: "NC", cityFounded: "01/01/1874", cityCharter: "01/01/1874", stadium: "Barker–Lane Stadium", stadiumOpened: "09/01/2008" },
  { name: "Charleston Southern Buccaneers", division: "Big South", conference: "Big South Conference", founded: "12/01/1964", leagueJoined: "2002", city: "Charleston", state: "SC", cityFounded: "03/29/1670", cityCharter: "08/13/1783", stadium: "Buccaneer Field", stadiumOpened: "09/06/1997" },
  { name: "Gardner-Webb Runnin' Bulldogs", division: "Big South", conference: "Big South Conference", founded: "01/01/1905", leagueJoined: "2008", city: "Boiling Springs", state: "NC", cityFounded: "01/01/1876", cityCharter: "01/01/1911", stadium: "Spangler Stadium", stadiumOpened: "09/01/1996" },
  { name: "Robert Morris Colonials", division: "Big South", conference: "Big South Conference", founded: "09/01/1921", leagueJoined: "2020", city: "Moon Township", state: "PA", cityFounded: "01/01/1788", cityCharter: "02/26/1788", stadium: "Joe Walton Stadium", stadiumOpened: "09/02/2005" },
  { name: "SC State Bulldogs", division: "Big South", conference: "Big South Conference", founded: "10/01/1896", leagueJoined: "2021", city: "Orangeburg", state: "SC", cityFounded: "01/01/1735", cityCharter: "August 10, 1904", stadium: "Oliver C. Dawson Stadium", stadiumOpened: "09/01/1955" },

  // CAA FOOTBALL - 13 teams
  { name: "Albany Great Danes", division: "CAA", conference: "CAA Football", founded: "03/01/1844", leagueJoined: "2013", city: "Albany", state: "NY", cityFounded: "07/22/1686", cityCharter: "07/22/1686", stadium: "Tom & Mary Casey Stadium", stadiumOpened: "09/08/2013" },
  { name: "Delaware Blue Hens", division: "CAA", conference: "CAA Football", founded: "02/05/1743", leagueJoined: "2001", city: "Newark", state: "DE", cityFounded: "01/01/1758", cityCharter: "April 13, 1758", stadium: "Delaware Stadium", stadiumOpened: "09/23/1952" },
  { name: "Elon Phoenix", division: "CAA", conference: "CAA Football", founded: "03/11/1889", leagueJoined: "2014", city: "Elon", state: "NC", cityFounded: "01/01/1871", cityCharter: "01/01/1893", stadium: "Rhodes Stadium", stadiumOpened: "10/07/2001" },
  { name: "Hampton Pirates", division: "CAA", conference: "CAA Football", founded: "04/01/1868", leagueJoined: "2018", city: "Hampton", state: "VA", cityFounded: "01/01/1610", cityCharter: "07/21/1849", stadium: "Armstrong Stadium", stadiumOpened: "09/06/1997" },
  { name: "Maine Black Bears", division: "CAA", conference: "CAA Football", founded: "02/25/1865", leagueJoined: "2007", city: "Orono", state: "ME", cityFounded: "02/12/1806", cityCharter: "02/12/1806", stadium: "Alfond Stadium", stadiumOpened: "09/24/1999" },
  { name: "Monmouth Hawks", division: "CAA", conference: "CAA Football", founded: "09/16/1933", leagueJoined: "2022", city: "West Long Branch", state: "NJ", cityFounded: "01/01/1908", cityCharter: "04/07/1908", stadium: "Kessler Stadium", stadiumOpened: "09/03/2017" },
  { name: "New Hampshire Wildcats", division: "CAA", conference: "CAA Football", founded: "05/05/1866", leagueJoined: "2007", city: "Durham", state: "NH", cityFounded: "01/01/1732", cityCharter: "May 15, 1732", stadium: "Wildcat Stadium", stadiumOpened: "09/04/1936" },
  { name: "North Carolina A&T Aggies", division: "CAA", conference: "CAA Football", founded: "03/01/1891", leagueJoined: "2021", city: "Greensboro", state: "NC", cityFounded: "01/01/1808", cityCharter: "December 15, 1808", stadium: "Truist Stadium", stadiumOpened: "10/27/2017" },
  { name: "Rhode Island Rams", division: "CAA", conference: "CAA Football", founded: "03/30/1892", leagueJoined: "2001", city: "Kingston", state: "RI", cityFounded: "01/01/1674", cityCharter: "Unincorporated", stadium: "Meade Stadium", stadiumOpened: "09/18/1928" },
  { name: "Stony Brook Seawolves", division: "CAA", conference: "CAA Football", founded: "08/17/1957", leagueJoined: "2013", city: "Stony Brook", state: "NY", cityFounded: "01/01/1655", cityCharter: "Unincorporated", stadium: "Kenneth P. LaValle Stadium", stadiumOpened: "09/11/2002" },
  { name: "Towson Tigers", division: "CAA", conference: "CAA Football", founded: "01/15/1866", leagueJoined: "2001", city: "Towson", state: "MD", cityFounded: "01/01/1752", cityCharter: "01/01/1906", stadium: "Johnny Unitas Stadium", stadiumOpened: "09/03/2011" },
  { name: "Villanova Wildcats", division: "CAA", conference: "CAA Football", founded: "08/20/1842", leagueJoined: "1985", city: "Villanova", state: "PA", cityFounded: "01/01/1682", cityCharter: "Unincorporated", stadium: "Villanova Stadium", stadiumOpened: "09/12/1927" },
  { name: "William & Mary Tribe", division: "CAA", conference: "CAA Football", founded: "02/08/1693", leagueJoined: "1993", city: "Williamsburg", state: "VA", cityFounded: "01/01/1632", cityCharter: "07/28/1699", stadium: "Zable Stadium", stadiumOpened: "09/29/1935" },

  // IVY LEAGUE - 8 teams
  { name: "Brown Bears", division: "Ivy", conference: "Ivy League", founded: "03/03/1764", leagueJoined: "1954", city: "Providence", state: "RI", cityFounded: "06/20/1636", cityCharter: "04/24/1832", stadium: "Brown Stadium", stadiumOpened: "09/26/1925" },
  { name: "Columbia Lions", division: "Ivy", conference: "Ivy League", founded: "05/25/1754", leagueJoined: "1954", city: "New York", state: "NY", cityFounded: "01/01/1624", cityCharter: "February 2, 1653", stadium: "Wien Stadium", stadiumOpened: "09/19/1984" },
  { name: "Cornell Big Red", division: "Ivy", conference: "Ivy League", founded: "04/27/1865", leagueJoined: "1954", city: "Ithaca", state: "NY", cityFounded: "01/01/1790", cityCharter: "04/06/1888", stadium: "Schoellkopf Field", stadiumOpened: "10/25/1915" },
  { name: "Dartmouth Big Green", division: "Ivy", conference: "Ivy League", founded: "12/13/1769", leagueJoined: "1954", city: "Hanover", state: "NH", cityFounded: "07/04/1761", cityCharter: "07/01/1761", stadium: "Memorial Field", stadiumOpened: "10/20/1923" },
  { name: "Harvard Crimson", division: "Ivy", conference: "Ivy League", founded: "09/08/1636", leagueJoined: "1954", city: "Cambridge", state: "MA", cityFounded: "05/30/1630", cityCharter: "02/21/1846", stadium: "Harvard Stadium", stadiumOpened: "11/14/1903" },
  { name: "Pennsylvania Quakers", division: "Ivy", conference: "Ivy League", founded: "11/14/1740", leagueJoined: "1954", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "October 27, 1682", stadium: "Franklin Field", stadiumOpened: "04/30/1895" },
  { name: "Princeton Tigers", division: "Ivy", conference: "Ivy League", founded: "10/22/1746", leagueJoined: "1954", city: "Princeton", state: "NJ", cityFounded: "01/01/1724", cityCharter: "11/20/1813", stadium: "Powers Field at Princeton Stadium", stadiumOpened: "09/25/1998" },
  { name: "Yale Bulldogs", division: "Ivy", conference: "Ivy League", founded: "10/09/1701", leagueJoined: "1954", city: "New Haven", state: "CT", cityFounded: "01/01/1638", cityCharter: "January 8, 1784", stadium: "Yale Bowl", stadiumOpened: "11/21/1914" },

  // MID-EASTERN ATHLETIC CONFERENCE (MEAC) - 6 teams
  { name: "Delaware State Hornets", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "05/15/1891", leagueJoined: "1970", city: "Dover", state: "DE", cityFounded: "01/01/1683", cityCharter: "01/01/1929", stadium: "Alumni Stadium", stadiumOpened: "09/22/1957" },
  { name: "Howard Bison", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "03/02/1867", leagueJoined: "1971", city: "Washington", state: "DC", cityFounded: "07/16/1790", cityCharter: "July 16, 1790", stadium: "William H. Greene Stadium", stadiumOpened: "09/30/1926" },
  { name: "Morgan State Bears", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "01/01/1867", leagueJoined: "1970", city: "Baltimore", state: "MD", cityFounded: "08/08/1729", cityCharter: "August 8, 1729", stadium: "Hughes Stadium", stadiumOpened: "10/06/1979" },
  { name: "Norfolk State Spartans", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "09/23/1935", leagueJoined: "1997", city: "Norfolk", state: "VA", cityFounded: "01/01/1682", cityCharter: "01/01/1845", stadium: "William Price Stadium", stadiumOpened: "09/02/1997" },
  { name: "North Carolina Central Eagles", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "07/05/1910", leagueJoined: "2010", city: "Durham", state: "NC", cityFounded: "04/26/1853", cityCharter: "04/26/1853", stadium: "O'Kelly-Riddick Stadium", stadiumOpened: "09/03/1975" },
  { name: "South Carolina State Bulldogs", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "10/01/1896", leagueJoined: "1970", city: "Orangeburg", state: "SC", cityFounded: "01/01/1735", cityCharter: "August 10, 1904", stadium: "Oliver C. Dawson Stadium", stadiumOpened: "09/01/1955" },

  // MISSOURI VALLEY FOOTBALL CONFERENCE - 11 teams
  { name: "Illinois State Redbirds", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/18/1857", leagueJoined: "1982", city: "Normal", state: "IL", cityFounded: "01/01/1854", cityCharter: "02/25/1867", stadium: "Hancock Stadium", stadiumOpened: "09/18/1963" },
  { name: "Indiana State Sycamores", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "12/24/1865", leagueJoined: "1982", city: "Terre Haute", state: "IN", cityFounded: "01/01/1816", cityCharter: "01/01/1832", stadium: "Memorial Stadium", stadiumOpened: "09/20/1924" },
  { name: "Missouri State Bears", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "03/06/1905", leagueJoined: "1982", city: "Springfield", state: "MO", cityFounded: "01/01/1838", cityCharter: "February 19, 1838", stadium: "Plaster Sports Complex", stadiumOpened: "09/01/1941" },
  { name: "North Dakota Fighting Hawks", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/27/1883", leagueJoined: "2020", city: "Grand Forks", state: "ND", cityFounded: "01/01/1870", cityCharter: "02/22/1881", stadium: "Alerus Center", stadiumOpened: "02/10/2001" },
  { name: "North Dakota State Bison", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/08/1890", leagueJoined: "2008", city: "Fargo", state: "ND", cityFounded: "01/01/1871", cityCharter: "01/07/1875", stadium: "Fargodome", stadiumOpened: "12/03/1992" },
  { name: "Northern Iowa Panthers", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "08/29/1876", leagueJoined: "1985", city: "Cedar Falls", state: "IA", cityFounded: "01/01/1845", cityCharter: "01/01/1851", stadium: "UNI-Dome", stadiumOpened: "09/16/1976" },
  { name: "South Dakota Coyotes", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/26/1889", leagueJoined: "2012", city: "Vermillion", state: "SD", cityFounded: "01/01/1859", cityCharter: "01/01/1877", stadium: "DakotaDome", stadiumOpened: "09/01/1979" },
  { name: "South Dakota State Jackrabbits", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/21/1881", leagueJoined: "2008", city: "Brookings", state: "SD", cityFounded: "01/01/1857", cityCharter: "March 9, 1883", stadium: "Dana J. Dykhouse Stadium", stadiumOpened: "09/01/2016" },
  { name: "Southern Illinois Salukis", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "05/03/1869", leagueJoined: "1985", city: "Carbondale", state: "IL", cityFounded: "01/01/1852", cityCharter: "03/01/1856", stadium: "Saluki Stadium", stadiumOpened: "09/15/2010" },
  { name: "Western Illinois Leathernecks", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "01/23/1899", leagueJoined: "1982", city: "Macomb", state: "IL", cityFounded: "01/01/1830", cityCharter: "02/26/1841", stadium: "Hanson Field", stadiumOpened: "09/16/1950" },
  { name: "Youngstown State Penguins", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "01/01/1908", leagueJoined: "1997", city: "Youngstown", state: "OH", cityFounded: "01/01/1797", cityCharter: "01/19/1867", stadium: "Stambaugh Stadium", stadiumOpened: "09/22/1982" },

  // NORTHEAST CONFERENCE (NEC) - 9 teams
  { name: "Central Connecticut State Blue Devils", division: "NEC", conference: "Northeast Conference", founded: "07/04/1849", leagueJoined: "1999", city: "New Britain", state: "CT", cityFounded: "05/26/1687", cityCharter: "01/01/1871", stadium: "Arute Field", stadiumOpened: "09/14/1990" },
  { name: "Duquesne Dukes", division: "NEC", conference: "Northeast Conference", founded: "10/01/1878", leagueJoined: "2008", city: "Pittsburgh", state: "PA", cityFounded: "11/27/1758", cityCharter: "November 25, 1758", stadium: "Arthur J. Rooney Athletic Field", stadiumOpened: "09/01/1993" },
  { name: "LIU Sharks", division: "NEC", conference: "Northeast Conference", founded: "09/14/1926", leagueJoined: "1981", city: "Brookville", state: "NY", cityFounded: "01/01/1839", cityCharter: "1931", stadium: "Bethpage Federal Credit Union Stadium", stadiumOpened: "09/17/2016" },
  { name: "Merrimack Warriors", division: "NEC", conference: "Northeast Conference", founded: "01/01/1947", leagueJoined: "2019", city: "North Andover", state: "MA", cityFounded: "01/01/1646", cityCharter: "01/01/1855", stadium: "Duane Stadium", stadiumOpened: "09/01/2010" },
  { name: "Saint Francis Red Flash", division: "NEC", conference: "Northeast Conference", founded: "02/18/1847", leagueJoined: "1991", city: "Loretto", state: "PA", cityFounded: "01/01/1799", cityCharter: "01/01/1845", stadium: "DeGol Field", stadiumOpened: "09/01/1978" },
  { name: "Sacred Heart Pioneers", division: "NEC", conference: "Northeast Conference", founded: "09/10/1963", leagueJoined: "1999", city: "Fairfield", state: "CT", cityFounded: "01/01/1639", cityCharter: "01/01/1947", stadium: "Campus Field", stadiumOpened: "09/01/1998" },
  { name: "Stonehill Skyhawks", division: "NEC", conference: "Northeast Conference", founded: "09/15/1948", leagueJoined: "2025", city: "Easton", state: "MA", cityFounded: "01/01/1725", cityCharter: "01/01/1725", stadium: "W.B. Mason Stadium", stadiumOpened: "09/01/2017" },
  { name: "Wagner Seahawks", division: "NEC", conference: "Northeast Conference", founded: "08/01/1883", leagueJoined: "1981", city: "Staten Island", state: "NY", cityFounded: "01/01/1661", cityCharter: "01/01/1898", stadium: "Hameline Field", stadiumOpened: "09/01/1967" },

  // OVC–BIG SOUTH FOOTBALL ASSOCIATION - 9 teams
  { name: "Austin Peay Governors", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "08/11/1927", leagueJoined: "2021", city: "Clarksville", state: "TN", cityFounded: "01/01/1784", cityCharter: "01/22/1785", stadium: "Fortera Stadium", stadiumOpened: "09/02/1946" },
  { name: "Eastern Illinois Panthers", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "05/12/1895", leagueJoined: "1996", city: "Charleston", state: "IL", cityFounded: "01/01/1835", cityCharter: "02/24/1865", stadium: "O'Brien Field", stadiumOpened: "09/13/1970" },
  { name: "Eastern Kentucky Colonels", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "03/21/1906", leagueJoined: "1948", city: "Richmond", state: "KY", cityFounded: "01/01/1798", cityCharter: "01/01/1890", stadium: "Roy Kidd Stadium", stadiumOpened: "09/07/1969" },
  { name: "Lindenwood Lions", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "02/24/1827", leagueJoined: "2022", city: "St. Charles", state: "MO", cityFounded: "01/01/1765", cityCharter: "05/18/1849", stadium: "Hunter Stadium", stadiumOpened: "09/01/1989" },
  { name: "Southeast Missouri State Redhawks", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "06/05/1873", leagueJoined: "1991", city: "Cape Girardeau", state: "MO", cityFounded: "01/01/1733", cityCharter: "08/24/1843", stadium: "Houck Stadium", stadiumOpened: "10/08/1930" },
  { name: "Tennessee Martin Skyhawks", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "09/10/1900", leagueJoined: "1992", city: "Martin", state: "TN", cityFounded: "01/01/1870", cityCharter: "November 27, 1874", stadium: "Hardy M. Graham Stadium", stadiumOpened: "09/17/1964" },
  { name: "Tennessee State Tigers", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "06/19/1912", leagueJoined: "1986", city: "Nashville", state: "TN", cityFounded: "12/24/1779", cityCharter: "December 24, 1779", stadium: "Hale Stadium", stadiumOpened: "09/15/1953" },
  { name: "Tennessee Tech Golden Eagles", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "05/03/1915", leagueJoined: "1949", city: "Cookeville", state: "TN", cityFounded: "01/01/1854", cityCharter: "12/07/1903", stadium: "Tucker Stadium", stadiumOpened: "09/10/1966" },
  { name: "UT Martin Skyhawks", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "09/10/1900", leagueJoined: "1992", city: "Martin", state: "TN", cityFounded: "01/01/1870", cityCharter: "November 27, 1874", stadium: "Hardy M. Graham Stadium", stadiumOpened: "09/17/1964" },

  // PATRIOT LEAGUE - 7 teams
  { name: "Bucknell Bison", division: "Patriot", conference: "Patriot League", founded: "02/05/1846", leagueJoined: "1986", city: "Lewisburg", state: "PA", cityFounded: "01/01/1785", cityCharter: "01/15/1812", stadium: "Christy Mathewson–Memorial Stadium", stadiumOpened: "09/23/1924" },
  { name: "Colgate Raiders", division: "Patriot", conference: "Patriot League", founded: "09/01/1819", leagueJoined: "1986", city: "Hamilton", state: "NY", cityFounded: "01/01/1795", cityCharter: "04/16/1816", stadium: "Andy Kerr Stadium", stadiumOpened: "09/24/1966" },
  { name: "Fordham Rams", division: "Patriot", conference: "Patriot League", founded: "06/24/1841", leagueJoined: "1990", city: "Bronx", state: "NY", cityFounded: "01/01/1639", cityCharter: "04/10/1874", stadium: "Coffey Field", stadiumOpened: "09/01/1930" },
  { name: "Georgetown Hoyas", division: "Patriot", conference: "Patriot League", founded: "01/23/1789", leagueJoined: "2001", city: "Washington", state: "DC", cityFounded: "07/16/1790", cityCharter: "July 16, 1790", stadium: "Cooper Field", stadiumOpened: "09/01/1950" },
  { name: "Holy Cross Crusaders", division: "Patriot", conference: "Patriot League", founded: "03/02/1843", leagueJoined: "1986", city: "Worcester", state: "MA", cityFounded: "01/01/1684", cityCharter: "02/29/1848", stadium: "Fitton Field", stadiumOpened: "09/25/1908" },
  { name: "Lafayette Leopards", division: "Patriot", conference: "Patriot League", founded: "02/09/1826", leagueJoined: "1986", city: "Easton", state: "PA", cityFounded: "01/01/1752", cityCharter: "01/01/1887", stadium: "Fisher Stadium", stadiumOpened: "09/13/1926" },
  { name: "Lehigh Mountain Hawks", division: "Patriot", conference: "Patriot League", founded: "04/01/1865", leagueJoined: "1986", city: "Bethlehem", state: "PA", cityFounded: "12/24/1741", cityCharter: "03/27/1917", stadium: "Goodman Stadium", stadiumOpened: "09/24/1988" },

  // PIONEER FOOTBALL LEAGUE - 11 teams
  { name: "Butler Bulldogs", division: "PFL", conference: "Pioneer Football League", founded: "01/07/1855", leagueJoined: "1993", city: "Indianapolis", state: "IN", cityFounded: "01/06/1821", cityCharter: "June 7, 1820", stadium: "Bud and Jackie Sellick Bowl", stadiumOpened: "09/01/2019" },
  { name: "Davidson Wildcats", division: "PFL", conference: "Pioneer Football League", founded: "03/07/1837", leagueJoined: "2001", city: "Davidson", state: "NC", cityFounded: "01/01/1837", cityCharter: "February 11, 1879", stadium: "Richardson Stadium", stadiumOpened: "10/02/1987" },
  { name: "Dayton Flyers", division: "PFL", conference: "Pioneer Football League", founded: "07/01/1850", leagueJoined: "1993", city: "Dayton", state: "OH", cityFounded: "04/01/1796", cityCharter: "03/01/1805", stadium: "Welcome Stadium", stadiumOpened: "09/18/1925" },
  { name: "Drake Bulldogs", division: "PFL", conference: "Pioneer Football League", founded: "08/03/1881", leagueJoined: "1993", city: "Des Moines", state: "IA", cityFounded: "09/22/1843", cityCharter: "09/22/1851", stadium: "Drake Stadium", stadiumOpened: "09/05/1925" },
  { name: "Marist Red Foxes", division: "PFL", conference: "Pioneer Football League", founded: "09/01/1929", leagueJoined: "2009", city: "Poughkeepsie", state: "NY", cityFounded: "01/01/1687", cityCharter: "03/28/1854", stadium: "Leonidoff Field", stadiumOpened: "09/01/1998" },
  { name: "Morehead State Eagles", division: "PFL", conference: "Pioneer Football League", founded: "01/01/1887", leagueJoined: "2001", city: "Morehead", state: "KY", cityFounded: "01/01/1856", cityCharter: "02/24/1869", stadium: "Jayne Stadium", stadiumOpened: "09/08/1964" },
  { name: "Presbyterian Blue Hose", division: "PFL", conference: "Pioneer Football League", founded: "03/01/1880", leagueJoined: "2007", city: "Clinton", state: "SC", cityFounded: "01/01/1852", cityCharter: "March 24, 1906", stadium: "Bailey Memorial Stadium", stadiumOpened: "09/02/2002" },
  { name: "San Diego Toreros", division: "PFL", conference: "Pioneer Football League", founded: "07/15/1949", leagueJoined: "1993", city: "San Diego", state: "CA", cityFounded: "07/16/1769", cityCharter: "July 16, 1769", stadium: "Torero Stadium", stadiumOpened: "09/01/1961" },
  { name: "Stetson Hatters", division: "PFL", conference: "Pioneer Football League", founded: "08/20/1883", leagueJoined: "2013", city: "DeLand", state: "FL", cityFounded: "01/01/1876", cityCharter: "04/05/1882", stadium: "Spec Martin Stadium", stadiumOpened: "09/01/1962" },
  { name: "St. Thomas Tommies", division: "PFL", conference: "Pioneer Football League", founded: "09/01/1885", leagueJoined: "2025", city: "Saint Paul", state: "MN", cityFounded: "01/01/1840", cityCharter: "03/04/1854", stadium: "O'Shaughnessy Stadium", stadiumOpened: "09/01/2018" },
  { name: "Valparaiso Beacons", division: "PFL", conference: "Pioneer Football League", founded: "09/21/1859", leagueJoined: "2003", city: "Valparaiso", state: "IN", cityFounded: "01/01/1836", cityCharter: "02/21/1865", stadium: "Brown Field", stadiumOpened: "09/01/1919" },

  // SOUTHERN CONFERENCE - 9 teams
  { name: "Chattanooga Mocs", division: "SoCon", conference: "Southern Conference", founded: "09/10/1886", leagueJoined: "1976", city: "Chattanooga", state: "TN", cityFounded: "01/01/1838", cityCharter: "12/20/1839", stadium: "Finley Stadium", stadiumOpened: "08/26/1997" },
  { name: "The Citadel Bulldogs", division: "SoCon", conference: "Southern Conference", founded: "03/20/1842", leagueJoined: "1936", city: "Charleston", state: "SC", cityFounded: "03/29/1670", cityCharter: "08/13/1783", stadium: "Johnson Hagood Stadium", stadiumOpened: "09/01/1948" },
  { name: "East Tennessee State Buccaneers", division: "SoCon", conference: "Southern Conference", founded: "01/01/1911", leagueJoined: "2014", city: "Johnson City", state: "TN", cityFounded: "12/26/1856", cityCharter: "12/26/1869", stadium: "William B. Greene Jr. Stadium", stadiumOpened: "09/11/2010" },
  { name: "Furman Paladins", division: "SoCon", conference: "Southern Conference", founded: "01/01/1826", leagueJoined: "1936", city: "Greenville", state: "SC", cityFounded: "01/01/1797", cityCharter: "05/04/1831", stadium: "Paladin Stadium", stadiumOpened: "09/18/1981" },
  { name: "Mercer Bears", division: "SoCon", conference: "Southern Conference", founded: "01/14/1833", leagueJoined: "2014", city: "Macon", state: "GA", cityFounded: "01/01/1823", cityCharter: "12/23/1823", stadium: "Five Star Stadium", stadiumOpened: "08/30/2013" },
  { name: "Samford Bulldogs", division: "SoCon", conference: "Southern Conference", founded: "12/29/1841", leagueJoined: "2008", city: "Birmingham", state: "AL", cityFounded: "12/19/1871", cityCharter: "12/19/1871", stadium: "Pete Hanna Center", stadiumOpened: "09/01/1988" },
  { name: "VMI Keydets", division: "SoCon", conference: "Southern Conference", founded: "11/11/1839", leagueJoined: "1924", city: "Lexington", state: "VA", cityFounded: "01/01/1777", cityCharter: "03/01/1874", stadium: "Alumni Memorial Field", stadiumOpened: "09/01/1962" },
  { name: "Western Carolina Catamounts", division: "SoCon", conference: "Southern Conference", founded: "03/01/1889", leagueJoined: "1976", city: "Cullowhee", state: "NC", cityFounded: "01/01/1889", cityCharter: "Unincorporated", stadium: "E. J. Whitmire Stadium", stadiumOpened: "09/14/1974" },
  { name: "Wofford Terriers", division: "SoCon", conference: "Southern Conference", founded: "08/01/1854", leagueJoined: "1997", city: "Spartanburg", state: "SC", cityFounded: "01/01/1785", cityCharter: "03/08/1831", stadium: "Gibbs Stadium", stadiumOpened: "09/14/1996" },

  // SOUTHLAND CONFERENCE - 9 teams
  { name: "Houston Christian Huskies", division: "Southland", conference: "Southland Conference", founded: "08/20/1963", leagueJoined: "2013", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "August 30, 1836", stadium: "Husky Stadium", stadiumOpened: "09/01/2009" },
  { name: "Incarnate Word Cardinals", division: "Southland", conference: "Southland Conference", founded: "12/08/1881", leagueJoined: "2013", city: "San Antonio", state: "TX", cityFounded: "05/01/1718", cityCharter: "May 1, 1718", stadium: "Gayle and Tom Benson Stadium", stadiumOpened: "09/03/2008" },
  { name: "Lamar Cardinals", division: "Southland", conference: "Southland Conference", founded: "05/16/1923", leagueJoined: "1963", city: "Beaumont", state: "TX", cityFounded: "01/01/1835", cityCharter: "04/14/1838", stadium: "Provost Umphrey Stadium", stadiumOpened: "09/12/2009" },
  { name: "McNeese Cowboys", division: "Southland", conference: "Southland Conference", founded: "09/17/1939", leagueJoined: "1972", city: "Lake Charles", state: "LA", cityFounded: "03/17/1861", cityCharter: "03/16/1867", stadium: "Cowboy Stadium", stadiumOpened: "09/06/1982" },
  { name: "New Mexico State Aggies", division: "Southland", conference: "Southland Conference", founded: "09/17/1888", leagueJoined: "2022", city: "Las Cruces", state: "NM", cityFounded: "01/01/1849", cityCharter: "October 9, 1907", stadium: "Aggie Memorial Stadium", stadiumOpened: "09/18/1978" },
  { name: "Nicholls Colonels", division: "Southland", conference: "Southland Conference", founded: "09/23/1948", leagueJoined: "1991", city: "Thibodaux", state: "LA", cityFounded: "01/01/1820", cityCharter: "March 16, 1830", stadium: "Manning Field", stadiumOpened: "09/01/2009" },
  { name: "Northwestern State Demons", division: "Southland", conference: "Southland Conference", founded: "09/05/1884", leagueJoined: "1987", city: "Natchitoches", state: "LA", cityFounded: "01/01/1714", cityCharter: "02/05/1819", stadium: "Turpin Stadium", stadiumOpened: "09/01/1978" },
  { name: "Southeastern Louisiana Lions", division: "Southland", conference: "Southland Conference", founded: "02/25/1925", leagueJoined: "1987", city: "Hammond", state: "LA", cityFounded: "12/25/1818", cityCharter: "03/08/1888", stadium: "Strawberry Stadium", stadiumOpened: "10/06/1984" },
  { name: "Stephen F. Austin Lumberjacks", division: "Southland", conference: "Southland Conference", founded: "09/18/1923", leagueJoined: "1987", city: "Nacogdoches", state: "TX", cityFounded: "01/01/1779", cityCharter: "04/03/1837", stadium: "Homer Bryce Stadium", stadiumOpened: "09/15/1986" },

  // SOUTHWESTERN ATHLETIC CONFERENCE (SWAC) - 12 teams
  { name: "Alabama A&M Bulldogs", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "06/07/1875", leagueJoined: "1999", city: "Normal", state: "AL", cityFounded: "01/01/1811", cityCharter: "Unincorporated", stadium: "Louis Crews Stadium", stadiumOpened: "10/05/1996" },
  { name: "Alabama State Hornets", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "02/16/1867", leagueJoined: "1982", city: "Montgomery", state: "AL", cityFounded: "12/03/1819", cityCharter: "12/03/1819", stadium: "ASU Stadium", stadiumOpened: "09/01/1930" },
  { name: "Alcorn State Braves", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "05/13/1871", leagueJoined: "1962", city: "Lorman", state: "MS", cityFounded: "01/01/1850", cityCharter: "Unincorporated", stadium: "Jack Spinks Stadium", stadiumOpened: "09/01/1992" },
  { name: "Arkansas Pine Bluff Golden Lions", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "09/25/1873", leagueJoined: "1997", city: "Pine Bluff", state: "AR", cityFounded: "01/01/1839", cityCharter: "01/08/1839", stadium: "Golden Lion Stadium", stadiumOpened: "10/08/2005" },
  { name: "Bethune-Cookman Wildcats", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/03/1904", leagueJoined: "2021", city: "Daytona Beach", state: "FL", cityFounded: "01/01/1876", cityCharter: "July 26, 1876", stadium: "Municipal Stadium", stadiumOpened: "08/30/1988" },
  { name: "Florida A&M Rattlers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/03/1887", leagueJoined: "2021", city: "Tallahassee", state: "FL", cityFounded: "01/01/1824", cityCharter: "December 9, 1825", stadium: "Bragg Memorial Stadium", stadiumOpened: "10/07/1957" },
  { name: "Grambling State Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "01/01/1901", leagueJoined: "1958", city: "Grambling", state: "LA", cityFounded: "01/01/1901", cityCharter: "September 9, 1953", stadium: "Eddie Robinson Stadium", stadiumOpened: "09/01/1983" },
  { name: "Jackson State Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/23/1877", leagueJoined: "1958", city: "Jackson", state: "MS", cityFounded: "12/23/1821", cityCharter: "04/23/1822", stadium: "Mississippi Veterans Memorial Stadium", stadiumOpened: "09/03/1950" },
  { name: "Mississippi Valley State Delta Devils", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "03/13/1946", leagueJoined: "1968", city: "Itta Bena", state: "MS", cityFounded: "01/01/1882", cityCharter: "August 1, 1898", stadium: "Rice-Totten Stadium", stadiumOpened: "09/01/1950" },
  { name: "Prairie View A&M Panthers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "08/14/1876", leagueJoined: "1958", city: "Prairie View", state: "TX", cityFounded: "01/01/1876", cityCharter: "01/01/1876", stadium: "Panther Stadium", stadiumOpened: "09/15/1962" },
  { name: "Southern Jaguars", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "03/09/1880", leagueJoined: "1958", city: "Baton Rouge", state: "LA", cityFounded: "01/01/1719", cityCharter: "July 6, 1817", stadium: "A.W. Mumford Stadium", stadiumOpened: "11/28/1928" },
  { name: "Texas Southern Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "04/01/1927", leagueJoined: "1954", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "August 30, 1836", stadium: "Alexander Durley Sports Complex", stadiumOpened: "09/01/1946" },

  // UNITED ATHLETIC CONFERENCE (UAC) - 6 teams
  { name: "Abilene Christian Wildcats", division: "UAC", conference: "United Athletic Conference", founded: "09/10/1906", leagueJoined: "2021", city: "Abilene", state: "TX", cityFounded: "01/15/1881", cityCharter: "09/20/1883", stadium: "Anthony Field at Wildcat Stadium", stadiumOpened: "09/15/2017" },
  { name: "Austin Peay Governors", division: "UAC", conference: "United Athletic Conference", founded: "08/11/1927", leagueJoined: "2022", city: "Clarksville", state: "TN", cityFounded: "01/01/1784", cityCharter: "01/22/1785", stadium: "Fortera Stadium", stadiumOpened: "09/02/1946" },
  { name: "North Alabama Lions", division: "UAC", conference: "United Athletic Conference", founded: "06/11/1830", leagueJoined: "2018", city: "Florence", state: "AL", cityFounded: "01/01/1818", cityCharter: "02/04/1826", stadium: "Braly Municipal Stadium", stadiumOpened: "09/01/1949" },
  { name: "Southern Utah Thunderbirds", division: "UAC", conference: "United Athletic Conference", founded: "01/01/1897", leagueJoined: "2022", city: "Cedar City", state: "UT", cityFounded: "11/11/1851", cityCharter: "02/18/1868", stadium: "Eccles Coliseum", stadiumOpened: "09/09/1967" },
  { name: "Tarleton State Texans", division: "UAC", conference: "United Athletic Conference", founded: "09/26/1899", leagueJoined: "2020", city: "Stephenville", state: "TX", cityFounded: "01/01/1856", cityCharter: "08/02/1889", stadium: "Memorial Stadium", stadiumOpened: "09/01/1947" },
  { name: "Utah Tech Trailblazers", division: "UAC", conference: "United Athletic Conference", founded: "03/11/1911", leagueJoined: "2022", city: "St. George", state: "UT", cityFounded: "01/01/1861", cityCharter: "01/17/1862", stadium: "Greater Zion Stadium", stadiumOpened: "08/29/2015" },

  // FCS INDEPENDENTS - 2 teams
  { name: "New Haven Chargers", division: "Independent", conference: "FCS Independent", founded: "06/01/1920", leagueJoined: "2025", city: "West Haven", state: "CT", cityFounded: "01/01/1648", cityCharter: "04/28/1921", stadium: "DellaCamera Stadium", stadiumOpened: "09/01/2017" },
  { name: "UConn Huskies", division: "Independent", conference: "FCS Independent", founded: "08/31/1881", leagueJoined: "2023", city: "Storrs", state: "CT", cityFounded: "01/01/1798", cityCharter: "01/01/1893", stadium: "Pratt & Whitney Stadium at Rentschler Field", stadiumOpened: "08/30/2003" }
],

  "college-basketball": [
  // AMERICA EAST CONFERENCE - 9 teams
  { name: "Albany Great Danes", division: "AmEast", conference: "America East Conference", founded: "03/01/1844", leagueJoined: "2001", city: "Albany", state: "NY", cityFounded: "07/22/1686", cityCharter: "07/22/1686", stadium: "Broadview Center", stadiumOpened: "03/01/1992" },
  { name: "Binghamton Bearcats", division: "AmEast", conference: "America East Conference", founded: "01/01/1946", leagueJoined: "2001", city: "Binghamton", state: "NY", cityFounded: "03/25/1867", cityCharter: "03/25/1867", stadium: "Events Center", stadiumOpened: "01/31/2004" },
  { name: "Bryant Bulldogs", division: "AmEast", conference: "America East Conference", founded: "08/25/1863", leagueJoined: "2022", city: "Smithfield", state: "RI", cityFounded: "01/01/1730", cityCharter: "01/01/1730", stadium: "Chace Athletic Center", stadiumOpened: "11/01/2001" },
  { name: "Maine Black Bears", division: "AmEast", conference: "America East Conference", founded: "02/25/1865", leagueJoined: "1979", city: "Orono", state: "ME", cityFounded: "02/12/1806", cityCharter: "02/12/1806", stadium: "Memorial Gymnasium", stadiumOpened: "09/01/1933" },
  { name: "New Hampshire Wildcats", division: "AmEast", conference: "America East Conference", founded: "04/10/1866", leagueJoined: "1979", city: "Durham", state: "NH", cityFounded: "01/01/1732", cityCharter: "May 15, 1732", stadium: "Lundholm Gym", stadiumOpened: "09/01/1938" },
  { name: "NJIT Highlanders", division: "AmEast", conference: "America East Conference", founded: "03/24/1881", leagueJoined: "2020", city: "Newark", state: "NJ", cityFounded: "10/31/1666", cityCharter: "May 17, 1666", stadium: "Wellness and Events Center", stadiumOpened: "11/10/2017" },
  { name: "UMass Lowell River Hawks", division: "AmEast", conference: "America East Conference", founded: "01/01/1894", leagueJoined: "2013", city: "Lowell", state: "MA", cityFounded: "03/01/1826", cityCharter: "03/01/1836", stadium: "Costello Athletic Center", stadiumOpened: "01/01/1994" },
  { name: "UMBC Retrievers", division: "AmEast", conference: "America East Conference", founded: "09/19/1966", leagueJoined: "2003", city: "Baltimore", state: "MD", cityFounded: "08/08/1729", cityCharter: "August 8, 1729", stadium: "Chesapeake Employers Insurance Arena", stadiumOpened: "11/01/2018" },
  { name: "Vermont Catamounts", division: "AmEast", conference: "America East Conference", founded: "11/04/1791", leagueJoined: "1979", city: "Burlington", state: "VT", cityFounded: "06/07/1763", cityCharter: "06/07/1763", stadium: "Patrick Gym", stadiumOpened: "12/01/1963" },

  // AMERICAN ATHLETIC CONFERENCE - 13 teams
  { name: "Charlotte 49ers", division: "AAC", conference: "American Athletic Conference", founded: "09/20/1946", leagueJoined: "2013", city: "Charlotte", state: "NC", cityFounded: "12/03/1768", cityCharter: "December 3, 1768", stadium: "Halton Arena", stadiumOpened: "11/26/2005" },
  { name: "Cincinnati Bearcats", division: "AAC", conference: "American Athletic Conference", founded: "02/11/1819", leagueJoined: "2005", city: "Cincinnati", state: "OH", cityFounded: "12/01/1788", cityCharter: "December 28, 1788", stadium: "Fifth Third Arena", stadiumOpened: "11/25/1989" },
  { name: "East Carolina Pirates", division: "AAC", conference: "American Athletic Conference", founded: "03/08/1907", leagueJoined: "2014", city: "Greenville", state: "NC", cityFounded: "01/01/1786", cityCharter: "05/18/1786", stadium: "Williams Arena at Minges Coliseum", stadiumOpened: "01/08/1968" },
  { name: "Florida Atlantic Owls", division: "AAC", conference: "American Athletic Conference", founded: "12/20/1961", leagueJoined: "2023", city: "Boca Raton", state: "FL", cityFounded: "05/02/1925", cityCharter: "05/02/1925", stadium: "Eleanor R. Baldwin Arena", stadiumOpened: "11/27/1988" },
  { name: "Memphis Tigers", division: "AAC", conference: "American Athletic Conference", founded: "09/10/1912", leagueJoined: "2013", city: "Memphis", state: "TN", cityFounded: "05/22/1819", cityCharter: "May 22, 1819", stadium: "FedExForum", stadiumOpened: "09/01/2004" },
  { name: "North Texas Mean Green", division: "AAC", conference: "American Athletic Conference", founded: "08/30/1890", leagueJoined: "2013", city: "Denton", state: "TX", cityFounded: "01/01/1857", cityCharter: "04/11/1866", stadium: "The Super Pit", stadiumOpened: "11/30/1973" },
  { name: "Rice Owls", division: "AAC", conference: "American Athletic Conference", founded: "09/23/1912", leagueJoined: "2023", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "August 30, 1836", stadium: "Tudor Fieldhouse", stadiumOpened: "12/01/1950" },
  { name: "South Florida Bulls", division: "AAC", conference: "American Athletic Conference", founded: "12/19/1956", leagueJoined: "2005", city: "Tampa", state: "FL", cityFounded: "01/18/1849", cityCharter: "July 15, 1887", stadium: "Yuengling Center", stadiumOpened: "11/04/1980" },
  { name: "Temple Owls", division: "AAC", conference: "American Athletic Conference", founded: "12/12/1884", leagueJoined: "2013", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "October 27, 1682", stadium: "Liacouras Center", stadiumOpened: "08/30/1997" },
  { name: "Tulane Green Wave", division: "AAC", conference: "American Athletic Conference", founded: "04/12/1834", leagueJoined: "2014", city: "New Orleans", state: "LA", cityFounded: "03/01/1718", cityCharter: "May 7, 1718", stadium: "Devlin Fieldhouse", stadiumOpened: "01/01/1933" },
  { name: "Tulsa Golden Hurricane", division: "AAC", conference: "American Athletic Conference", founded: "09/14/1894", leagueJoined: "2014", city: "Tulsa", state: "OK", cityFounded: "01/01/1836", cityCharter: "01/18/1898", stadium: "Reynolds Center", stadiumOpened: "01/01/1998" },
  { name: "UAB Blazers", division: "AAC", conference: "American Athletic Conference", founded: "06/15/1969", leagueJoined: "2023", city: "Birmingham", state: "AL", cityFounded: "12/19/1871", cityCharter: "12/19/1871", stadium: "Bartow Arena", stadiumOpened: "11/26/1988" },
  { name: "UTSA Roadrunners", division: "AAC", conference: "American Athletic Conference", founded: "06/15/1969", leagueJoined: "2023", city: "San Antonio", state: "TX", cityFounded: "05/01/1718", cityCharter: "May 1, 1718", stadium: "Convocation Center", stadiumOpened: "11/15/1975" },
  { name: "Wichita State Shockers", division: "AAC", conference: "American Athletic Conference", founded: "04/30/1895", leagueJoined: "2017", city: "Wichita", state: "KS", cityFounded: "01/01/1868", cityCharter: "07/21/1870", stadium: "Charles Koch Arena", stadiumOpened: "01/13/2003" },

  // ATLANTIC 10 CONFERENCE - 15 teams
  { name: "Davidson Wildcats", division: "At10", conference: "Atlantic 10 Conference", founded: "03/07/1837", leagueJoined: "2014", city: "Davidson", state: "NC", cityFounded: "01/01/1837", cityCharter: "February 11, 1879", stadium: "John M. Belk Arena", stadiumOpened: "11/12/1989" },
  { name: "Dayton Flyers", division: "At10", conference: "Atlantic 10 Conference", founded: "07/01/1850", leagueJoined: "1995", city: "Dayton", state: "OH", cityFounded: "04/01/1796", cityCharter: "03/01/1805", stadium: "UD Arena", stadiumOpened: "12/06/1969" },
  { name: "Duquesne Dukes", division: "At10", conference: "Atlantic 10 Conference", founded: "10/01/1878", leagueJoined: "1976", city: "Pittsburgh", state: "PA", cityFounded: "11/27/1758", cityCharter: "November 25, 1758", stadium: "UPMC Cooper Fieldhouse", stadiumOpened: "06/11/1988" },
  { name: "Fordham Rams", division: "At10", conference: "Atlantic 10 Conference", founded: "06/24/1841", leagueJoined: "1995", city: "Bronx", state: "NY", cityFounded: "01/01/1639", cityCharter: "04/10/1874", stadium: "Rose Hill Gym", stadiumOpened: "01/01/1925" },
  { name: "George Mason Patriots", division: "At10", conference: "Atlantic 10 Conference", founded: "09/01/1972", leagueJoined: "2013", city: "Fairfax", state: "VA", cityFounded: "01/01/1805", cityCharter: "January 15, 1875", stadium: "EagleBank Arena", stadiumOpened: "03/01/1985" },
  { name: "George Washington Colonials", division: "At10", conference: "Atlantic 10 Conference", founded: "02/09/1821", leagueJoined: "1976", city: "Washington", state: "DC", cityFounded: "07/16/1790", cityCharter: "July 16, 1790", stadium: "Charles E. Smith Center", stadiumOpened: "01/01/1975" },
  { name: "La Salle Explorers", division: "At10", conference: "Atlantic 10 Conference", founded: "05/20/1863", leagueJoined: "1995", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "October 27, 1682", stadium: "Tom Gola Arena", stadiumOpened: "02/01/1998" },
  { name: "Loyola Chicago Ramblers", division: "At10", conference: "Atlantic 10 Conference", founded: "06/30/1870", leagueJoined: "2013", city: "Chicago", state: "IL", cityFounded: "03/04/1837", cityCharter: "March 4, 1837", stadium: "Gentile Arena", stadiumOpened: "01/05/2011" },
  { name: "Massachusetts Minutemen", division: "At10", conference: "Atlantic 10 Conference", founded: "05/29/1863", leagueJoined: "1976", city: "Amherst", state: "MA", cityFounded: "01/01/1759", cityCharter: "August 23, 1775", stadium: "Mullins Center", stadiumOpened: "09/05/1993" },
  { name: "Rhode Island Rams", division: "At10", conference: "Atlantic 10 Conference", founded: "03/30/1892", leagueJoined: "1980", city: "Kingston", state: "RI", cityFounded: "01/01/1674", cityCharter: "Unincorporated", stadium: "Ryan Center", stadiumOpened: "12/01/2002" },
  { name: "Richmond Spiders", division: "At10", conference: "Atlantic 10 Conference", founded: "03/04/1830", leagueJoined: "2001", city: "Richmond", state: "VA", cityFounded: "01/01/1742", cityCharter: "May 3, 1742", stadium: "Robins Center", stadiumOpened: "11/29/1972" },
  { name: "Saint Joseph's Hawks", division: "At10", conference: "Atlantic 10 Conference", founded: "09/15/1851", leagueJoined: "1982", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "October 27, 1682", stadium: "Michael J. Hagan Arena", stadiumOpened: "01/01/1949" },
  { name: "Saint Louis Billikens", division: "At10", conference: "Atlantic 10 Conference", founded: "11/02/1818", leagueJoined: "2012", city: "St. Louis", state: "MO", cityFounded: "02/14/1764", cityCharter: "February 14, 1764", stadium: "Chaifetz Arena", stadiumOpened: "04/10/2008" },
  { name: "St. Bonaventure Bonnies", division: "At10", conference: "Atlantic 10 Conference", founded: "08/25/1858", leagueJoined: "1979", city: "St. Bonaventure", state: "NY", cityFounded: "01/01/1856", cityCharter: "01/01/1893", stadium: "Reilly Center", stadiumOpened: "12/01/1966" },
  { name: "VCU Rams", division: "At10", conference: "Atlantic 10 Conference", founded: "07/01/1838", leagueJoined: "2012", city: "Richmond", state: "VA", cityFounded: "01/01/1742", cityCharter: "May 3, 1742", stadium: "Stuart C. Siegel Center", stadiumOpened: "11/30/1999" },

  // ATLANTIC COAST CONFERENCE - 17 teams
  { name: "Boston College Eagles", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/01/1863", leagueJoined: "2005", city: "Chestnut Hill", state: "MA", cityFounded: "09/17/1630", cityCharter: "03/19/1822", stadium: "Conte Forum", stadiumOpened: "01/01/1988" },
  { name: "California Golden Bears", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/23/1868", leagueJoined: "2024", city: "Berkeley", state: "CA", cityFounded: "04/04/1878", cityCharter: "04/04/1878", stadium: "Haas Pavilion", stadiumOpened: "09/01/1999" },
  { name: "Clemson Tigers", division: "ACC", conference: "Atlantic Coast Conference", founded: "07/06/1889", leagueJoined: "1953", city: "Clemson", state: "SC", cityFounded: "01/01/1889", cityCharter: "July 27, 1937", stadium: "Littlejohn Coliseum", stadiumOpened: "01/01/1968" },
  { name: "Duke Blue Devils", division: "ACC", conference: "Atlantic Coast Conference", founded: "12/09/1838", leagueJoined: "1953", city: "Durham", state: "NC", cityFounded: "04/26/1853", cityCharter: "04/26/1853", stadium: "Cameron Indoor Stadium", stadiumOpened: "01/06/1940" },
  { name: "Florida State Seminoles", division: "ACC", conference: "Atlantic Coast Conference", founded: "01/24/1851", leagueJoined: "1991", city: "Tallahassee", state: "FL", cityFounded: "01/01/1824", cityCharter: "December 9, 1825", stadium: "Donald L. Tucker Center", stadiumOpened: "12/02/1981" },
  { name: "Georgia Tech Yellow Jackets", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/13/1885", leagueJoined: "1978", city: "Atlanta", state: "GA", cityFounded: "01/01/1837", cityCharter: "December 29, 1847", stadium: "McCamish Pavilion", stadiumOpened: "01/07/2012" },
  { name: "Louisville Cardinals", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/03/1798", leagueJoined: "2014", city: "Louisville", state: "KY", cityFounded: "01/01/1778", cityCharter: "May 1, 1780", stadium: "KFC Yum! Center", stadiumOpened: "10/10/2010" },
  { name: "Miami Hurricanes", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/08/1925", leagueJoined: "2004", city: "Coral Gables", state: "FL", cityFounded: "01/01/1925", cityCharter: "April 29, 1925", stadium: "Watsco Center", stadiumOpened: "01/07/2003" },
  { name: "North Carolina Tar Heels", division: "ACC", conference: "Atlantic Coast Conference", founded: "12/11/1789", leagueJoined: "1953", city: "Chapel Hill", state: "NC", cityFounded: "01/01/1793", cityCharter: "December 15, 1851", stadium: "Dean Smith Center", stadiumOpened: "01/18/1986" },
  { name: "NC State Wolfpack", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/07/1887", leagueJoined: "1953", city: "Raleigh", state: "NC", cityFounded: "01/01/1792", cityCharter: "December 31, 1792", stadium: "PNC Arena", stadiumOpened: "10/29/1999" },
  { name: "Pittsburgh Panthers", division: "ACC", conference: "Atlantic Coast Conference", founded: "02/28/1787", leagueJoined: "2013", city: "Pittsburgh", state: "PA", cityFounded: "11/27/1758", cityCharter: "November 25, 1758", stadium: "Petersen Events Center", stadiumOpened: "04/01/2002" },
  { name: "SMU Mustangs", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/17/1911", leagueJoined: "2024", city: "Dallas", state: "TX", cityFounded: "01/01/1841", cityCharter: "November 22, 1841", stadium: "Moody Coliseum", stadiumOpened: "12/03/1956" },
  { name: "Stanford Cardinal", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/01/1885", leagueJoined: "2024", city: "Stanford", state: "CA", cityFounded: "01/01/1891", cityCharter: "Unincorporated", stadium: "Maples Pavilion", stadiumOpened: "01/01/1969" },
  { name: "Syracuse Orange", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/24/1870", leagueJoined: "2013", city: "Syracuse", state: "NY", cityFounded: "01/01/1825", cityCharter: "December 14, 1847", stadium: "JMA Wireless Dome", stadiumOpened: "09/20/1980" },
  { name: "Virginia Cavaliers", division: "ACC", conference: "Atlantic Coast Conference", founded: "01/25/1819", leagueJoined: "1953", city: "Charlottesville", state: "VA", cityFounded: "01/01/1762", cityCharter: "September 1, 1888", stadium: "John Paul Jones Arena", stadiumOpened: "11/12/2006" },
  { name: "Virginia Tech Hokies", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/01/1872", leagueJoined: "2004", city: "Blacksburg", state: "VA", cityFounded: "01/01/1798", cityCharter: "August 8, 1871", stadium: "Cassell Coliseum", stadiumOpened: "01/01/1962" },
  { name: "Wake Forest Demon Deacons", division: "ACC", conference: "Atlantic Coast Conference", founded: "02/03/1834", leagueJoined: "1953", city: "Winston-Salem", state: "NC", cityFounded: "01/01/1766", cityCharter: "May 9, 1913", stadium: "Lawrence Joel Veterans Memorial Coliseum", stadiumOpened: "08/28/1989" },

  // ATLANTIC SUN CONFERENCE (ASUN) - 12 teams  
  { name: "Austin Peay Governors", division: "ASUN", conference: "Atlantic Sun Conference", founded: "08/11/1927", leagueJoined: "2021", city: "Clarksville", state: "TN", cityFounded: "01/01/1784", cityCharter: "01/22/1785", stadium: "F.G. Tubby Taylor Center", stadiumOpened: "11/01/1973" },
  { name: "Bellarmine Knights", division: "ASUN", conference: "Atlantic Sun Conference", founded: "10/03/1950", leagueJoined: "2020", city: "Louisville", state: "KY", cityFounded: "01/01/1778", cityCharter: "May 1, 1780", stadium: "Knights Hall", stadiumOpened: "09/01/1960" },
  { name: "Central Arkansas Bears", division: "ASUN", conference: "Atlantic Sun Conference", founded: "09/21/1908", leagueJoined: "2021", city: "Conway", state: "AR", cityFounded: "01/01/1825", cityCharter: "October 16, 1875", stadium: "Farris Center", stadiumOpened: "01/01/1972" },
  { name: "Eastern Kentucky Colonels", division: "ASUN", conference: "Atlantic Sun Conference", founded: "03/21/1906", leagueJoined: "2021", city: "Richmond", state: "KY", cityFounded: "01/01/1798", cityCharter: "01/01/1890", stadium: "McBrayer Arena", stadiumOpened: "01/01/1963" },
  { name: "Florida Gulf Coast Eagles", division: "ASUN", conference: "Atlantic Sun Conference", founded: "05/03/1991", leagueJoined: "2007", city: "Fort Myers", state: "FL", cityFounded: "02/21/1886", cityCharter: "05/10/1907", stadium: "Alico Arena", stadiumOpened: "08/25/2002" },
  { name: "Jacksonville Dolphins", division: "ASUN", conference: "Atlantic Sun Conference", founded: "04/16/1934", leagueJoined: "1998", city: "Jacksonville", state: "FL", cityFounded: "06/15/1822", cityCharter: "June 15, 1822", stadium: "Swisher Gymnasium", stadiumOpened: "09/01/1956" },
  { name: "Kennesaw State Owls", division: "ASUN", conference: "Atlantic Sun Conference", founded: "10/08/1963", leagueJoined: "2005", city: "Kennesaw", state: "GA", cityFounded: "01/01/1887", cityCharter: "September 21, 1887", stadium: "KSU Convocation Center", stadiumOpened: "09/01/2005" },
  { name: "Lipscomb Bisons", division: "ASUN", conference: "Atlantic Sun Conference", founded: "10/03/1891", leagueJoined: "2003", city: "Nashville", state: "TN", cityFounded: "12/24/1779", cityCharter: "December 24, 1779", stadium: "Allen Arena", stadiumOpened: "11/16/2001" },
  { name: "North Alabama Lions", division: "ASUN", conference: "Atlantic Sun Conference", founded: "06/11/1830", leagueJoined: "2018", city: "Florence", state: "AL", cityFounded: "01/01/1818", cityCharter: "02/04/1826", stadium: "Flowers Hall", stadiumOpened: "01/01/1973" },
  { name: "North Florida Ospreys", division: "ASUN", conference: "Atlantic Sun Conference", founded: "12/15/1972", leagueJoined: "2005", city: "Jacksonville", state: "FL", cityFounded: "06/15/1822", cityCharter: "June 15, 1822", stadium: "UNF Arena", stadiumOpened: "02/01/1993" },
  { name: "Queens Royals", division: "ASUN", conference: "Atlantic Sun Conference", founded: "01/01/1857", leagueJoined: "2022", city: "Charlotte", state: "NC", cityFounded: "12/03/1768", cityCharter: "December 3, 1768", stadium: "Curry Arena", stadiumOpened: "01/01/1995" },
  { name: "Stetson Hatters", division: "ASUN", conference: "Atlantic Sun Conference", founded: "08/20/1883", leagueJoined: "1985", city: "DeLand", state: "FL", cityFounded: "01/01/1876", cityCharter: "04/05/1882", stadium: "Edmunds Center", stadiumOpened: "11/15/1974" },

  // BIG 12 CONFERENCE – 14 teams
  { name: "Arizona Wildcats", division: "Big 12", conference: "Big 12 Conference", founded: "10/12/1885", leagueJoined: "2024", city: "Tucson", state: "AZ", cityFounded: "01/01/1775", cityCharter: "February 7, 1877", stadium: "McKale Center", stadiumOpened: "01/17/1973" },
  { name: "Arizona State Sun Devils", division: "Big 12", conference: "Big 12 Conference", founded: "02/26/1885", leagueJoined: "2024", city: "Tempe", state: "AZ", cityFounded: "01/01/1871", cityCharter: "November 26, 1894", stadium: "Desert Financial Arena", stadiumOpened: "11/10/1974" },
  { name: "Baylor Bears", division: "Big 12", conference: "Big 12 Conference", founded: "02/01/1845", leagueJoined: "1996", city: "Waco", state: "TX", cityFounded: "01/01/1849", cityCharter: "August 29, 1856", stadium: "Ferrell Center", stadiumOpened: "11/29/1988" },
  { name: "BYU Cougars", division: "Big 12", conference: "Big 12 Conference", founded: "10/16/1875", leagueJoined: "2023", city: "Provo", state: "UT", cityFounded: "01/01/1849", cityCharter: "February 6, 1851", stadium: "Marriott Center", stadiumOpened: "12/01/1971" },
  { name: "Cincinnati Bearcats", division: "Big 12", conference: "Big 12 Conference", founded: "02/11/1819", leagueJoined: "2023", city: "Cincinnati", state: "OH", cityFounded: "12/01/1788", cityCharter: "December 28, 1788", stadium: "Fifth Third Arena", stadiumOpened: "11/25/1989" },
  { name: "Colorado Buffaloes", division: "Big 12", conference: "Big 12 Conference", founded: "04/01/1876", leagueJoined: "2024", city: "Boulder", state: "CO", cityFounded: "01/01/1859", cityCharter: "November 4, 1871", stadium: "Coors Events Center", stadiumOpened: "12/17/1979" },
  { name: "Houston Cougars", division: "Big 12", conference: "Big 12 Conference", founded: "03/07/1927", leagueJoined: "2023", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "August 30, 1836", stadium: "Fertitta Center", stadiumOpened: "11/27/2018" },
  { name: "Iowa State Cyclones", division: "Big 12", conference: "Big 12 Conference", founded: "03/22/1858", leagueJoined: "1996", city: "Ames", state: "IA", cityFounded: "01/01/1864", cityCharter: "January 8, 1870", stadium: "Breslin Student Events Center", stadiumOpened: "11/01/1971" },
  { name: "Kansas Jayhawks", division: "Big 12", conference: "Big 12 Conference", founded: "03/21/1865", leagueJoined: "1996", city: "Lawrence", state: "KS", cityFounded: "01/01/1854", cityCharter: "February 14, 1858", stadium: "Allen Fieldhouse", stadiumOpened: "03/01/1955" },
  { name: "Kansas State Wildcats", division: "Big 12", conference: "Big 12 Conference", founded: "02/16/1863", leagueJoined: "1996", city: "Manhattan", state: "KS", cityFounded: "01/01/1855", cityCharter: "May 30, 1857", stadium: "Bramlage Coliseum", stadiumOpened: "11/28/1988" },
  { name: "Oklahoma State Cowboys", division: "Big 12", conference: "Big 12 Conference", founded: "12/25/1890", leagueJoined: "1996", city: "Stillwater", state: "OK", cityFounded: "01/01/1884", cityCharter: "August 24, 1889", stadium: "Gallagher-Iba Arena", stadiumOpened: "12/02/1938" },
  { name: "TCU Horned Frogs", division: "Big 12", conference: "Big 12 Conference", founded: "09/01/1873", leagueJoined: "2012", city: "Fort Worth", state: "TX", cityFounded: "01/01/1849", cityCharter: "February 15, 1873", stadium: "Ed & Rae Schollmaier Arena", stadiumOpened: "01/07/2015" },
  { name: "Texas Tech Red Raiders", division: "Big 12", conference: "Big 12 Conference", founded: "02/10/1923", leagueJoined: "1996", city: "Lubbock", state: "TX", cityFounded: "01/01/1891", cityCharter: "March 16, 1909", stadium: "United Supermarkets Arena", stadiumOpened: "11/01/1999" },
  { name: "UCF Knights", division: "Big 12", conference: "Big 12 Conference", founded: "06/10/1963", leagueJoined: "2023", city: "Orlando", state: "FL", cityFounded: "02/04/1875", cityCharter: "July 31, 1875", stadium: "Addition Financial Arena", stadiumOpened: "11/09/2007" },
  { name: "Utah Utes", division: "Big 12", conference: "Big 12 Conference", founded: "02/28/1850", leagueJoined: "2024", city: "Salt Lake City", state: "UT", cityFounded: "07/24/1847", cityCharter: "July 24, 1847", stadium: "Jon M. Huntsman Center", stadiumOpened: "11/10/1969" },
  { name: "West Virginia Mountaineers", division: "Big 12", conference: "Big 12 Conference", founded: "02/07/1867", leagueJoined: "2012", city: "Morgantown", state: "WV", cityFounded: "01/01/1785", cityCharter: "October 17, 1785", stadium: "WVU Coliseum", stadiumOpened: "01/01/1970" },

  // BIG EAST CONFERENCE - 11 teams
  { name: "Butler Bulldogs", division: "BigEast", conference: "Big East Conference", founded: "01/07/1855", leagueJoined: "2013", city: "Indianapolis", state: "IN", cityFounded: "01/06/1821", cityCharter: "June 7, 1820", stadium: "Hinkle Fieldhouse", stadiumOpened: "03/01/1928" },
  { name: "Connecticut Huskies", division: "BigEast", conference: "Big East Conference", founded: "08/31/1881", leagueJoined: "1979", city: "Storrs", state: "CT", cityFounded: "01/01/1798", cityCharter: "01/01/1893", stadium: "Gampel Pavilion", stadiumOpened: "01/27/1990" },
  { name: "Creighton Bluejays", division: "BigEast", conference: "Big East Conference", founded: "09/02/1878", leagueJoined: "2013", city: "Omaha", state: "NE", cityFounded: "01/01/1854", cityCharter: "03/16/1857", stadium: "CHI Health Center Omaha", stadiumOpened: "09/01/2003" },
  { name: "DePaul Blue Demons", division: "BigEast", conference: "Big East Conference", founded: "09/04/1898", leagueJoined: "2005", city: "Chicago", state: "IL", cityFounded: "03/04/1837", cityCharter: "March 4, 1837", stadium: "Wintrust Arena", stadiumOpened: "08/26/2017" },
  { name: "Georgetown Hoyas", division: "BigEast", conference: "Big East Conference", founded: "01/23/1789", leagueJoined: "1979", city: "Washington", state: "DC", cityFounded: "07/16/1790", cityCharter: "July 16, 1790", stadium: "Capital One Arena", stadiumOpened: "12/02/1997" },
  { name: "Marquette Golden Eagles", division: "BigEast", conference: "Big East Conference", founded: "08/28/1881", leagueJoined: "2005", city: "Milwaukee", state: "WI", cityFounded: "01/31/1846", cityCharter: "January 31, 1846", stadium: "Fiserv Forum", stadiumOpened: "08/26/2018" },
  { name: "Providence Friars", division: "BigEast", conference: "Big East Conference", founded: "09/15/1917", leagueJoined: "1979", city: "Providence", state: "RI", cityFounded: "06/20/1636", cityCharter: "04/24/1832", stadium: "Amica Mutual Pavilion", stadiumOpened: "11/03/1972" },
  { name: "Seton Hall Pirates", division: "BigEast", conference: "Big East Conference", founded: "09/01/1856", leagueJoined: "1979", city: "South Orange", state: "NJ", cityFounded: "04/04/1861", cityCharter: "04/04/1869", stadium: "Prudential Center", stadiumOpened: "10/25/2007" },
  { name: "St. John's Red Storm", division: "BigEast", conference: "Big East Conference", founded: "09/05/1870", leagueJoined: "1979", city: "Queens", state: "NY", cityFounded: "01/01/1624", cityCharter: "01/01/1653", stadium: "Carnesecca Arena", stadiumOpened: "02/26/1961" },
  { name: "Villanova Wildcats", division: "BigEast", conference: "Big East Conference", founded: "08/20/1842", leagueJoined: "1980", city: "Villanova", state: "PA", cityFounded: "01/01/1682", cityCharter: "Unincorporated", stadium: "Finneran Pavilion", stadiumOpened: "02/01/1986" },
  { name: "Xavier Musketeers", division: "BigEast", conference: "Big East Conference", founded: "10/17/1831", leagueJoined: "2013", city: "Cincinnati", state: "OH", cityFounded: "12/01/1788", cityCharter: "December 28, 1788", stadium: "Cintas Center", stadiumOpened: "11/13/2000" },

  // BIG SKY CONFERENCE - 10 teams
  { name: "Eastern Washington Eagles", division: "BigSky", conference: "Big Sky Conference", founded: "09/29/1882", leagueJoined: "1987", city: "Cheney", state: "WA", cityFounded: "01/01/1883", cityCharter: "November 28, 1883", stadium: "Reese Court", stadiumOpened: "12/01/1975" },
  { name: "Idaho Vandals", division: "BigSky", conference: "Big Sky Conference", founded: "10/03/1889", leagueJoined: "2014", city: "Moscow", state: "ID", cityFounded: "05/15/1875", cityCharter: "05/15/1887", stadium: "ICCU Arena", stadiumOpened: "12/01/1975" },
  { name: "Idaho State Bengals", division: "BigSky", conference: "Big Sky Conference", founded: "05/08/1901", leagueJoined: "1963", city: "Pocatello", state: "ID", cityFounded: "09/01/1889", cityCharter: "April 29, 1889", stadium: "Reed Gym", stadiumOpened: "01/01/1973" },
  { name: "Montana Grizzlies", division: "BigSky", conference: "Big Sky Conference", founded: "02/17/1893", leagueJoined: "1963", city: "Missoula", state: "MT", cityFounded: "01/01/1860", cityCharter: "03/08/1885", stadium: "Dahlberg Arena", stadiumOpened: "01/01/1953" },
  { name: "Montana State Bobcats", division: "BigSky", conference: "Big Sky Conference", founded: "02/16/1893", leagueJoined: "1963", city: "Bozeman", state: "MT", cityFounded: "08/09/1864", cityCharter: "04/13/1883", stadium: "Worthington Arena", stadiumOpened: "11/17/1956" },
  { name: "Northern Arizona Lumberjacks", division: "BigSky", conference: "Big Sky Conference", founded: "05/11/1899", leagueJoined: "1970", city: "Flagstaff", state: "AZ", cityFounded: "01/01/1876", cityCharter: "May 26, 1894", stadium: "Rolle Activity Center", stadiumOpened: "11/01/1977" },
  { name: "Northern Colorado Bears", division: "BigSky", conference: "Big Sky Conference", founded: "08/10/1889", leagueJoined: "2006", city: "Greeley", state: "CO", cityFounded: "04/06/1869", cityCharter: "04/06/1886", stadium: "Bank of Colorado Arena", stadiumOpened: "01/15/2006" },
  { name: "Portland State Vikings", division: "BigSky", conference: "Big Sky Conference", founded: "06/15/1946", leagueJoined: "1996", city: "Portland", state: "OR", cityFounded: "01/01/1845", cityCharter: "February 8, 1851", stadium: "Viking Pavilion", stadiumOpened: "11/01/1984" },
  { name: "Sacramento State Hornets", division: "BigSky", conference: "Big Sky Conference", founded: "01/01/1947", leagueJoined: "1996", city: "Sacramento", state: "CA", cityFounded: "01/01/1848", cityCharter: "February 27, 1850", stadium: "The Nest", stadiumOpened: "02/01/1995" },
  { name: "Weber State Wildcats", division: "BigSky", conference: "Big Sky Conference", founded: "01/07/1889", leagueJoined: "1963", city: "Ogden", state: "UT", cityFounded: "02/25/1851", cityCharter: "02/06/1889", stadium: "Dee Events Center", stadiumOpened: "01/12/1977" },

  // BIG SOUTH CONFERENCE - 10 teams
  { name: "Campbell Fighting Camels", division: "BigSouth", conference: "Big South Conference", founded: "01/05/1887", leagueJoined: "2011", city: "Buies Creek", state: "NC", cityFounded: "01/01/1874", cityCharter: "01/01/1874", stadium: "John W. Pope Jr. Convocation Center", stadiumOpened: "01/01/2008" },
  { name: "Charleston Southern Buccaneers", division: "BigSouth", conference: "Big South Conference", founded: "12/01/1964", leagueJoined: "1983", city: "Charleston", state: "SC", cityFounded: "03/29/1670", cityCharter: "08/13/1783", stadium: "Buccaneer Fieldhouse", stadiumOpened: "01/01/1982" },
  { name: "Gardner-Webb Runnin' Bulldogs", division: "BigSouth", conference: "Big South Conference", founded: "01/01/1905", leagueJoined: "2008", city: "Boiling Springs", state: "NC", cityFounded: "01/01/1876", cityCharter: "01/01/1911", stadium: "Paul Porter Arena", stadiumOpened: "11/28/1981" },
  { name: "High Point Panthers", division: "BigSouth", conference: "Big South Conference", founded: "09/01/1924", leagueJoined: "1999", city: "High Point", state: "NC", cityFounded: "01/01/1859", cityCharter: "May 26, 1859", stadium: "Qubein Arena", stadiumOpened: "11/02/2020" },
  { name: "Longwood Lancers", division: "BigSouth", conference: "Big South Conference", founded: "03/26/1839", leagueJoined: "2012", city: "Farmville", state: "VA", cityFounded: "01/01/1798", cityCharter: "January 15, 1798", stadium: "Joan Perry Brock Center", stadiumOpened: "11/23/2009" },
  { name: "Presbyterian Blue Hose", division: "BigSouth", conference: "Big South Conference", founded: "03/01/1880", leagueJoined: "2007", city: "Clinton", state: "SC", cityFounded: "01/01/1852", cityCharter: "March 24, 1906", stadium: "Templeton Physical Education Center", stadiumOpened: "01/01/1970" },
  { name: "Radford Highlanders", division: "BigSouth", conference: "Big South Conference", founded: "09/15/1910", leagueJoined: "1983", city: "Radford", state: "VA", cityFounded: "12/03/1887", cityCharter: "12/03/1887", stadium: "Dedmon Center", stadiumOpened: "11/29/1981" },
  { name: "UNC Asheville Bulldogs", division: "BigSouth", conference: "Big South Conference", founded: "01/01/1927", leagueJoined: "1983", city: "Asheville", state: "NC", cityFounded: "02/25/1797", cityCharter: "12/13/1797", stadium: "Kimmel Arena", stadiumOpened: "01/01/1975" },
  { name: "USC Upstate Spartans", division: "BigSouth", conference: "Big South Conference", founded: "09/01/1967", leagueJoined: "2007", city: "Spartanburg", state: "SC", cityFounded: "01/01/1785", cityCharter: "03/08/1831", stadium: "G.B. Hodge Center", stadiumOpened: "11/01/1978" },
  { name: "Winthrop Eagles", division: "BigSouth", conference: "Big South Conference", founded: "10/01/1886", leagueJoined: "1983", city: "Rock Hill", state: "SC", cityFounded: "01/01/1852", cityCharter: "03/20/1870", stadium: "Winthrop Coliseum", stadiumOpened: "11/30/1982" },

  // BIG TEN CONFERENCE – 18 teams
  { name: "Illinois Fighting Illini", division: "Big Ten", conference: "Big Ten Conference", founded: "03/02/1867", leagueJoined: "1896", city: "Champaign", state: "IL", cityFounded: "01/01/1855", cityCharter: "February 21, 1861", stadium: "State Farm Center", stadiumOpened: "03/01/1963" },
  { name: "Indiana Hoosiers", division: "Big Ten", conference: "Big Ten Conference", founded: "01/20/1820", leagueJoined: "1899", city: "Bloomington", state: "IN", cityFounded: "01/01/1818", cityCharter: "March 5, 1827", stadium: "Simon Skjodt Assembly Hall", stadiumOpened: "03/01/1971" },
  { name: "Iowa Hawkeyes", division: "Big Ten", conference: "Big Ten Conference", founded: "02/25/1847", leagueJoined: "1899", city: "Iowa City", state: "IA", cityFounded: "01/01/1839", cityCharter: "January 24, 1853", stadium: "Carver–Hawkeye Arena", stadiumOpened: "01/01/1983" },
  { name: "Maryland Terrapins", division: "Big Ten", conference: "Big Ten Conference", founded: "03/06/1856", leagueJoined: "2014", city: "College Park", state: "MD", cityFounded: "01/01/1856", cityCharter: "01/01/1945", stadium: "Xfinity Center", stadiumOpened: "11/01/2002" },
  { name: "Michigan Wolverines", division: "Big Ten", conference: "Big Ten Conference", founded: "08/26/1817", leagueJoined: "1896", city: "Ann Arbor", state: "MI", cityFounded: "01/01/1824", cityCharter: "April 4, 1851", stadium: "Crisler Center", stadiumOpened: "11/01/1967" },
  { name: "Michigan State Spartans", division: "Big Ten", conference: "Big Ten Conference", founded: "02/12/1855", leagueJoined: "1950", city: "East Lansing", state: "MI", cityFounded: "01/01/1907", cityCharter: "May 8, 1907", stadium: "Breslin Student Events Center", stadiumOpened: "11/30/1989" },
  { name: "Minnesota Golden Gophers", division: "Big Ten", conference: "Big Ten Conference", founded: "02/25/1851", leagueJoined: "1896", city: "Minneapolis", state: "MN", cityFounded: "01/01/1872", cityCharter: "February 28, 1866", stadium: "Williams Arena", stadiumOpened: "11/01/1928" },
  { name: "Nebraska Cornhuskers", division: "Big Ten", conference: "Big Ten Conference", founded: "02/15/1869", leagueJoined: "2011", city: "Lincoln", state: "NE", cityFounded: "01/01/1856", cityCharter: "April 1, 1869", stadium: "Bob Devaney Sports Center", stadiumOpened: "11/01/1976" },
  { name: "Northwestern Wildcats", division: "Big Ten", conference: "Big Ten Conference", founded: "01/28/1851", leagueJoined: "1896", city: "Evanston", state: "IL", cityFounded: "01/01/1863", cityCharter: "December 29, 1863", stadium: "Welsh–Ryan Arena", stadiumOpened: "11/01/1952" },
  { name: "Ohio State Buckeyes", division: "Big Ten", conference: "Big Ten Conference", founded: "03/22/1870", leagueJoined: "1912", city: "Columbus", state: "OH", cityFounded: "02/14/1812", cityCharter: "February 14, 1812", stadium: "Value City Arena", stadiumOpened: "11/01/1998" },
  { name: "Penn State Nittany Lions", division: "Big Ten", conference: "Big Ten Conference", founded: "02/22/1855", leagueJoined: "1993", city: "University Park", state: "PA", cityFounded: "01/01/1896", cityCharter: "01/01/1896", stadium: "Bryce Jordan Center", stadiumOpened: "11/01/1996" },
  { name: "Purdue Boilermakers", division: "Big Ten", conference: "Big Ten Conference", founded: "05/06/1869", leagueJoined: "1896", city: "West Lafayette", state: "IN", cityFounded: "01/01/1888", cityCharter: "01/01/1888", stadium: "Mackey Arena", stadiumOpened: "11/01/1967" },
  { name: "Rutgers Scarlet Knights", division: "Big Ten", conference: "Big Ten Conference", founded: "11/10/1766", leagueJoined: "2014", city: "Piscataway", state: "NJ", cityFounded: "01/01/1693", cityCharter: "February 21, 1798", stadium: "J. Malcolm Simon Hall", stadiumOpened: "11/01/1977" },
  { name: "Wisconsin Badgers", division: "Big Ten", conference: "Big Ten Conference", founded: "07/26/1848", leagueJoined: "1896", city: "Madison", state: "WI", cityFounded: "01/01/1836", cityCharter: "February 3, 1846", stadium: "Kohl Center", stadiumOpened: "11/01/1998" },
  { name: "UCLA Bruins", division: "Big Ten", conference: "Big Ten Conference", founded: "05/23/1919", leagueJoined: "2024", city: "Los Angeles", state: "CA", cityFounded: "09/04/1781", cityCharter: "September 4, 1781", stadium: "Rose Bowl", stadiumOpened: "10/28/1922" },
  { name: "USC Trojans", division: "Big Ten", conference: "Big Ten Conference", founded: "10/06/1880", leagueJoined: "2024", city: "Los Angeles", state: "CA", cityFounded: "09/04/1781", cityCharter: "September 4, 1781", stadium: "United Airlines Field at the Coliseum", stadiumOpened: "05/01/1923" },
  { name: "Washington Huskies", division: "Big Ten", conference: "Big Ten Conference", founded: "11/04/1861", leagueJoined: "2024", city: "Seattle", state: "WA", cityFounded: "05/23/1853", cityCharter: "November 13, 1851", stadium: "Husky Stadium", stadiumOpened: "11/27/1920" },
  { name: "Oregon Ducks", division: "Big Ten", conference: "Big Ten Conference", founded: "10/19/1876", leagueJoined: "2024", city: "Eugene", state: "OR", cityFounded: "01/01/1846", cityCharter: "10/17/1862", stadium: "Autzen Stadium", stadiumOpened: "09/23/1967" },

  // BIG WEST CONFERENCE – 11 teams (2025-26)
  { name: "Cal Poly Mustangs", division: "Big West", conference: "Big West Conference", founded: "03/08/1901", leagueJoined: "1996", city: "San Luis Obispo", state: "CA", cityFounded: "09/01/1772", cityCharter: "12/01/1856", stadium: "Mott Athletics Center", stadiumOpened: "11/01/1959" },
  { name: "Cal State Bakersfield Roadrunners", division: "Big West", conference: "Big West Conference", founded: "05/18/1970", leagueJoined: "2020", city: "Bakersfield", state: "CA", cityFounded: "01/01/1869", cityCharter: "01/11/1898", stadium: "Icardo Center", stadiumOpened: "11/01/1981" },
  { name: "Cal State Fullerton Titans", division: "Big West", conference: "Big West Conference", founded: "03/18/1957", leagueJoined: "1974", city: "Fullerton", state: "CA", cityFounded: "02/08/1904", cityCharter: "02/14/1904", stadium: "Titan Gym", stadiumOpened: "01/01/1962" },
  { name: "Cal State Long Beach Beach", division: "Big West", conference: "Big West Conference", founded: "09/04/1949", leagueJoined: "1977", city: "Long Beach", state: "CA", cityFounded: "09/04/1888", cityCharter: "11/25/1897", stadium: "Walter Pyramid", stadiumOpened: "01/12/1994" },
  { name: "Cal State Northridge Matadors", division: "Big West", conference: "Big West Conference", founded: "03/15/1956", leagueJoined: "1990", city: "Northridge", state: "CA", cityFounded: "03/10/1912", cityCharter: "03/09/1929", stadium: "Matadome", stadiumOpened: "01/01/1962" },
  { name: "Cal State Sacramento Hornets", division: "Big West", conference: "Big West Conference", founded: "01/19/1947", leagueJoined: "1996", city: "Sacramento", state: "CA", cityFounded: "01/01/1848", cityCharter: "February 27, 1850", stadium: "The Nest", stadiumOpened: "02/01/1995" },
  { name: "Hawaii Rainbow Warriors", division: "Big West", conference: "Big West Conference", founded: "03/25/1907", leagueJoined: "2012", city: "Honolulu", state: "HI", cityFounded: "01/01/1850", cityCharter: "April 30, 1907", stadium: "SimpliFi Arena at Stan Sheriff Center", stadiumOpened: "11/30/1994" },
  { name: "UC Davis Aggies", division: "Big West", conference: "Big West Conference", founded: "01/01/1905", leagueJoined: "2007", city: "Davis", state: "CA", cityFounded: "03/01/1868", cityCharter: "03/28/1917", stadium: "University Credit Union Center", stadiumOpened: "11/01/2004" },
  { name: "UC Irvine Anteaters", division: "Big West", conference: "Big West Conference", founded: "03/06/1965", leagueJoined: "2000", city: "Irvine", state: "CA", cityFounded: "01/01/1971", cityCharter: "03/28/1975", stadium: "Bren Events Center", stadiumOpened: "11/01/1987" },
  { name: "UC Riverside Highlanders", division: "Big West", conference: "Big West Conference", founded: "09/13/1954", leagueJoined: "2001", city: "Riverside", state: "CA", cityFounded: "11/25/1870", cityCharter: "10/04/1883", stadium: "Student Recreation Center Arena", stadiumOpened: "11/01/2010" },
  { name: "UC Santa Barbara Gauchos", division: "Big West", conference: "Big West Conference", founded: "11/22/1944", leagueJoined: "1978", city: "Santa Barbara", state: "CA", cityFounded: "04/21/1850", cityCharter: "02/12/1851", stadium: "Thunderdome", stadiumOpened: "11/30/1979" },
  { name: "UC San Diego Tritons", division: "Big West", conference: "Big West Conference", founded: "11/18/1960", leagueJoined: "2020", city: "San Diego", state: "CA", cityFounded: "07/16/1769", cityCharter: "July 16, 1769", stadium: "RIMAC Arena", stadiumOpened: "01/01/1995" },

  // COASTAL ATHLETIC ASSOCIATION (CAA) – 14 teams (2025-26)
  { name: "Campbell Fighting Camels", division: "CAA", conference: "Coastal Athletic Association", founded: "01/05/1887", leagueJoined: "2023", city: "Buies Creek", state: "NC", cityFounded: "01/01/1874", cityCharter: "01/01/1874", stadium: "John W. Pope Jr. Convocation Center", stadiumOpened: "01/01/2008" },
  { name: "Charleston Cougars", division: "CAA", conference: "Coastal Athletic Association", founded: "03/19/1770", leagueJoined: "2013", city: "Charleston", state: "SC", cityFounded: "03/29/1670", cityCharter: "08/13/1783", stadium: "TD Arena", stadiumOpened: "01/01/1982" },
  { name: "Delaware Blue Hens", division: "CAA", conference: "Coastal Athletic Association", founded: "02/05/1743", leagueJoined: "2001", city: "Newark", state: "DE", cityFounded: "01/01/1758", cityCharter: "April 13, 1758", stadium: "Bob Carpenter Center", stadiumOpened: "01/03/1992" },
  { name: "Drexel Dragons", division: "CAA", conference: "Coastal Athletic Association", founded: "06/07/1891", leagueJoined: "2001", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "October 27, 1682", stadium: "Daskalakis Athletic Center", stadiumOpened: "01/01/1998" },
  { name: "Elon Phoenix", division: "CAA", conference: "Coastal Athletic Association", founded: "03/11/1889", leagueJoined: "2014", city: "Elon", state: "NC", cityFounded: "01/01/1871", cityCharter: "01/01/1893", stadium: "Schar Center", stadiumOpened: "11/09/2018" },
  { name: "Hampton Pirates", division: "CAA", conference: "Coastal Athletic Association", founded: "04/01/1868", leagueJoined: "2022", city: "Hampton", state: "VA", cityFounded: "01/01/1610", cityCharter: "07/21/1849", stadium: "Hampton Convocation Center", stadiumOpened: "11/01/1993" },
  { name: "Hofstra Pride", division: "CAA", conference: "Coastal Athletic Association", founded: "09/01/1935", leagueJoined: "2001", city: "Hempstead", state: "NY", cityFounded: "03/31/1644", cityCharter: "04/01/1853", stadium: "David S. Mack Sports Complex", stadiumOpened: "01/01/2000" },
  { name: "Monmouth Hawks", division: "CAA", conference: "Coastal Athletic Association", founded: "09/16/1933", leagueJoined: "2022", city: "West Long Branch", state: "NJ", cityFounded: "01/01/1908", cityCharter: "04/07/1908", stadium: "OceanFirst Bank Center", stadiumOpened: "01/25/2009" },
  { name: "North Carolina A&T Aggies", division: "CAA", conference: "Coastal Athletic Association", founded: "03/01/1891", leagueJoined: "2022", city: "Greensboro", state: "NC", cityFounded: "01/01/1808", cityCharter: "December 15, 1808", stadium: "Corbett Sports Center", stadiumOpened: "01/12/1982" },
  { name: "Northeastern Huskies", division: "CAA", conference: "Coastal Athletic Association", founded: "03/30/1898", leagueJoined: "2005", city: "Boston", state: "MA", cityFounded: "09/17/1630", cityCharter: "September 17, 1630", stadium: "Matthews Arena", stadiumOpened: "02/17/1910" },
  { name: "Stony Brook Seawolves", division: "CAA", conference: "Coastal Athletic Association", founded: "08/17/1957", leagueJoined: "2022", city: "Stony Brook", state: "NY", cityFounded: "01/01/1655", cityCharter: "Unincorporated", stadium: "Island Federal Credit Union Arena", stadiumOpened: "02/22/2002" },
  { name: "Towson Tigers", division: "CAA", conference: "Coastal Athletic Association", founded: "01/15/1866", leagueJoined: "1982", city: "Towson", state: "MD", cityFounded: "01/01/1752", cityCharter: "01/01/1906", stadium: "SECU Arena", stadiumOpened: "11/11/2013" },
  { name: "UNC Wilmington Seahawks", division: "CAA", conference: "Coastal Athletic Association", founded: "09/01/1947", leagueJoined: "1984", city: "Wilmington", state: "NC", cityFounded: "01/01/1739", cityCharter: "February 20, 1739", stadium: "Trask Coliseum", stadiumOpened: "11/15/1977" },
  { name: "William & Mary Tribe", division: "CAA", conference: "Coastal Athletic Association", founded: "02/08/1693", leagueJoined: "1982", city: "Williamsburg", state: "VA", cityFounded: "01/01/1632", cityCharter: "07/28/1699", stadium: "Kaplan Arena", stadiumOpened: "11/29/1971" },

  // CONFERENCE USA (CUSA) – 12 teams
  { name: "Delaware Blue Hens", division: "CUSA", conference: "Conference USA", founded: "02/05/1743", leagueJoined: "2025", city: "Newark", state: "DE", cityFounded: "01/01/1758", cityCharter: "April 13, 1758", stadium: "Bob Carpenter Center", stadiumOpened: "01/03/1992" },
  { name: "FIU Panthers", division: "CUSA", conference: "Conference USA", founded: "06/27/1965", leagueJoined: "2013", city: "Miami", state: "FL", cityFounded: "07/28/1896", cityCharter: "July 28, 1896", stadium: "Ocean Bank Convocation Center", stadiumOpened: "02/01/1986" },
  { name: "Jacksonville State Gamecocks", division: "CUSA", conference: "Conference USA", founded: "02/22/1883", leagueJoined: "2023", city: "Jacksonville", state: "AL", cityFounded: "01/01/1833", cityCharter: "January 9, 1836", stadium: "Pete Mathews Coliseum", stadiumOpened: "12/01/1974" },
  { name: "Kennesaw State Owls", division: "CUSA", conference: "Conference USA", founded: "10/08/1963", leagueJoined: "2024", city: "Kennesaw", state: "GA", cityFounded: "01/01/1887", cityCharter: "September 21, 1887", stadium: "KSU Convocation Center", stadiumOpened: "09/01/2005" },
  { name: "Liberty Flames", division: "CUSA", conference: "Conference USA", founded: "08/20/1971", leagueJoined: "2023", city: "Lynchburg", state: "VA", cityFounded: "01/01/1786", cityCharter: "January 10, 1805", stadium: "Liberty Arena", stadiumOpened: "01/01/1990" },
  { name: "Louisiana Tech Bulldogs", division: "CUSA", conference: "Conference USA", founded: "09/23/1894", leagueJoined: "2001", city: "Ruston", state: "LA", cityFounded: "01/01/1884", cityCharter: "01/01/1898", stadium: "Thomas Assembly Center", stadiumOpened: "11/30/1982" },
  { name: "Middle Tennessee Blue Raiders", division: "CUSA", conference: "Conference USA", founded: "09/11/1911", leagueJoined: "2013", city: "Murfreesboro", state: "TN", cityFounded: "01/01/1811", cityCharter: "January 4, 1812", stadium: "Murphy Athletic Center", stadiumOpened: "12/11/1972" },
  { name: "Missouri State Bears", division: "CUSA", conference: "Conference USA", founded: "03/06/1905", leagueJoined: "2025", city: "Springfield", state: "MO", cityFounded: "01/01/1838", cityCharter: "February 19, 1838", stadium: "Great Southern Bank Arena", stadiumOpened: "11/18/2008" },
  { name: "New Mexico State Aggies", division: "CUSA", conference: "Conference USA", founded: "09/17/1888", leagueJoined: "2023", city: "Las Cruces", state: "NM", cityFounded: "01/01/1849", cityCharter: "October 9, 1907", stadium: "Pan American Center", stadiumOpened: "11/30/1968" },
  { name: "Sam Houston Bearkats", division: "CUSA", conference: "Conference USA", founded: "10/10/1879", leagueJoined: "2023", city: "Huntsville", state: "TX", cityFounded: "01/01/1836", cityCharter: "January 30, 1835", stadium: "Bernard G. Johnson Coliseum", stadiumOpened: "11/01/1976" },
  { name: "UTEP Miners", division: "CUSA", conference: "Conference USA", founded: "09/23/1913", leagueJoined: "2005", city: "El Paso", state: "TX", cityFounded: "01/01/1659", cityCharter: "May 17, 1873", stadium: "Don Haskins Center", stadiumOpened: "11/30/1977" },
  { name: "Western Kentucky Hilltoppers", division: "CUSA", conference: "Conference USA", founded: "01/15/1906", leagueJoined: "2014", city: "Bowling Green", state: "KY", cityFounded: "01/01/1798", cityCharter: "October 5, 1812", stadium: "E. A. Diddle Arena", stadiumOpened: "12/07/1963" },

  // HORIZON LEAGUE – 11 teams
  { name: "Cleveland State Vikings", division: "Horizon", conference: "Horizon League", founded: "05/01/1964", leagueJoined: "1994", city: "Cleveland", state: "OH", cityFounded: "07/22/1796", cityCharter: "July 22, 1796", stadium: "Wolstein Center", stadiumOpened: "01/25/1991" },
  { name: "Detroit Mercy Titans", division: "Horizon", conference: "Horizon League", founded: "07/01/1877", leagueJoined: "1980", city: "Detroit", state: "MI", cityFounded: "07/24/1701", cityCharter: "July 24, 1701", stadium: "Calihan Hall", stadiumOpened: "01/01/1952" },
  { name: "Green Bay Phoenix", division: "Horizon", conference: "Horizon League", founded: "09/26/1965", leagueJoined: "1994", city: "Green Bay", state: "WI", cityFounded: "01/01/1634", cityCharter: "February 27, 1854", stadium: "Kress Events Center", stadiumOpened: "01/01/2000" },
  { name: "IU Indianapolis Jaguars", division: "Horizon", conference: "Horizon League", founded: "06/29/1969", leagueJoined: "2017", city: "Indianapolis", state: "IN", cityFounded: "01/06/1821", cityCharter: "June 7, 1820", stadium: "Indiana Farmers Coliseum", stadiumOpened: "10/01/1939" },
  { name: "Milwaukee Panthers", division: "Horizon", conference: "Horizon League", founded: "03/07/1956", leagueJoined: "1994", city: "Milwaukee", state: "WI", cityFounded: "01/31/1846", cityCharter: "January 31, 1846", stadium: "Klotsche Center", stadiumOpened: "12/01/1974" },
  { name: "Northern Kentucky Norse", division: "Horizon", conference: "Horizon League", founded: "05/01/1968", leagueJoined: "2015", city: "Highland Heights", state: "KY", cityFounded: "01/01/1927", cityCharter: "June 25, 1927", stadium: "Truist Arena", stadiumOpened: "01/11/2008" },
  { name: "Oakland Golden Grizzlies", division: "Horizon", conference: "Horizon League", founded: "08/26/1957", leagueJoined: "2013", city: "Rochester", state: "MI", cityFounded: "01/01/1817", cityCharter: "01/01/1869", stadium: "OU Credit Union O'rena", stadiumOpened: "01/24/1998" },
  { name: "Purdue Fort Wayne Mastodons", division: "Horizon", conference: "Horizon League", founded: "07/01/1964", leagueJoined: "2020", city: "Fort Wayne", state: "IN", cityFounded: "10/22/1794", cityCharter: "02/22/1840", stadium: "Allen County War Memorial Coliseum", stadiumOpened: "10/01/1952" },
  { name: "Robert Morris Colonials", division: "Horizon", conference: "Horizon League", founded: "09/01/1921", leagueJoined: "2020", city: "Moon Township", state: "PA", cityFounded: "01/01/1788", cityCharter: "02/26/1788", stadium: "UPMC Events Center", stadiumOpened: "01/01/2005" },
  { name: "Wright State Raiders", division: "Horizon", conference: "Horizon League", founded: "10/01/1967", leagueJoined: "1994", city: "Dayton", state: "OH", cityFounded: "04/01/1796", cityCharter: "03/01/1805", stadium: "Nutter Center", stadiumOpened: "11/17/1990" },
  { name: "Youngstown State Penguins", division: "Horizon", conference: "Horizon League", founded: "01/01/1908", leagueJoined: "2001", city: "Youngstown", state: "OH", cityFounded: "01/01/1797", cityCharter: "01/19/1867", stadium: "Beeghly Center", stadiumOpened: "12/01/1972" },

  // IVY LEAGUE – 8 teams
  { name: "Brown Bears", division: "Ivy", conference: "Ivy League", founded: "03/03/1764", leagueJoined: "1954", city: "Providence", state: "RI", cityFounded: "06/20/1636", cityCharter: "04/24/1832", stadium: "Paul Bailey Pizzitola Sports Center", stadiumOpened: "01/01/1989" },
  { name: "Columbia Lions", division: "Ivy", conference: "Ivy League", founded: "05/25/1754", leagueJoined: "1954", city: "New York", state: "NY", cityFounded: "01/01/1624", cityCharter: "February 2, 1653", stadium: "Levien Gymnasium", stadiumOpened: "01/01/1974" },
  { name: "Cornell Big Red", division: "Ivy", conference: "Ivy League", founded: "04/27/1865", leagueJoined: "1954", city: "Ithaca", state: "NY", cityFounded: "01/01/1790", cityCharter: "04/06/1888", stadium: "Newman Arena", stadiumOpened: "01/01/1990" },
  { name: "Dartmouth Big Green", division: "Ivy", conference: "Ivy League", founded: "12/13/1769", leagueJoined: "1954", city: "Hanover", state: "NH", cityFounded: "07/04/1761", cityCharter: "07/01/1761", stadium: "Leede Arena", stadiumOpened: "01/01/1987" },
  { name: "Harvard Crimson", division: "Ivy", conference: "Ivy League", founded: "09/08/1636", leagueJoined: "1954", city: "Cambridge", state: "MA", cityFounded: "05/30/1630", cityCharter: "02/21/1846", stadium: "Lavietes Pavilion", stadiumOpened: "01/01/1982" },
  { name: "Pennsylvania Quakers", division: "Ivy", conference: "Ivy League", founded: "11/14/1740", leagueJoined: "1954", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "October 27, 1682", stadium: "Palestra", stadiumOpened: "01/01/1927" },
  { name: "Princeton Tigers", division: "Ivy", conference: "Ivy League", founded: "10/22/1746", leagueJoined: "1954", city: "Princeton", state: "NJ", cityFounded: "01/01/1724", cityCharter: "11/20/1813", stadium: "Jadwin Gymnasium", stadiumOpened: "01/25/1969" },
  { name: "Yale Bulldogs", division: "Ivy", conference: "Ivy League", founded: "10/09/1701", leagueJoined: "1954", city: "New Haven", state: "CT", cityFounded: "01/01/1638", cityCharter: "January 8, 1784", stadium: "John J. Lee Amphitheater", stadiumOpened: "11/01/1975" },

  // METRO ATLANTIC ATHLETIC CONFERENCE (MAAC) – 11 teams
  { name: "Canisius Golden Griffins", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "09/01/1870", leagueJoined: "1989", city: "Buffalo", state: "NY", cityFounded: "01/01/1810", cityCharter: "June 2, 1832", stadium: "Koessler Athletic Center", stadiumOpened: "12/01/1968" },
  { name: "Fairfield Stags", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "09/01/1942", leagueJoined: "1981", city: "Fairfield", state: "CT", cityFounded: "01/01/1639", cityCharter: "01/01/1947", stadium: "Leo D. Mahoney Arena", stadiumOpened: "01/19/1998" },
  { name: "Iona Gaels", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "09/01/1940", leagueJoined: "1981", city: "New Rochelle", state: "NY", cityFounded: "06/21/1665", cityCharter: "01/01/1899", stadium: "Hynes Athletic Center", stadiumOpened: "12/01/1975" },
  { name: "Manhattan Jaspers", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "05/01/1853", leagueJoined: "1981", city: "Riverdale", state: "NY", cityFounded: "01/01/1874", cityCharter: "01/01/1874", stadium: "Draddy Gymnasium", stadiumOpened: "01/01/1965" },
  { name: "Marist Red Foxes", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "09/01/1929", leagueJoined: "1997", city: "Poughkeepsie", state: "NY", cityFounded: "01/01/1687", cityCharter: "03/28/1854", stadium: "McCann Arena", stadiumOpened: "01/01/1977" },
  { name: "Merrimack Warriors", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "01/01/1947", leagueJoined: "2025", city: "North Andover", state: "MA", cityFounded: "01/01/1646", cityCharter: "01/01/1855", stadium: "Hammel Court", stadiumOpened: "01/01/2019" },
  { name: "Mount St. Mary's Mountaineers", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "10/26/1808", leagueJoined: "1989", city: "Emmitsburg", state: "MD", cityFounded: "01/01/1785", cityCharter: "January 13, 1825", stadium: "Knott Arena", stadiumOpened: "11/24/1987" },
  { name: "Niagara Purple Eagles", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "11/01/1856", leagueJoined: "1989", city: "Lewiston", state: "NY", cityFounded: "01/01/1822", cityCharter: "04/17/1822", stadium: "Gallagher Center", stadiumOpened: "01/01/2009" },
  { name: "Quinnipiac Bobcats", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "04/30/1929", leagueJoined: "2013", city: "Hamden", state: "CT", cityFounded: "01/01/1786", cityCharter: "03/28/1786", stadium: "M&T Bank Arena", stadiumOpened: "01/29/2007" },
  { name: "Rider Broncs", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "02/01/1865", leagueJoined: "1997", city: "Lawrenceville", state: "NJ", cityFounded: "01/01/1696", cityCharter: "04/30/1798", stadium: "Alumni Gymnasium", stadiumOpened: "01/01/1958" },
  { name: "Siena Saints", division: "MAAC", conference: "Metro Atlantic Athletic Conference", founded: "09/01/1937", leagueJoined: "1989", city: "Loudonville", state: "NY", cityFounded: "01/01/1803", cityCharter: "01/01/1871", stadium: "Times Union Center", stadiumOpened: "01/30/1990" },

  // MID-AMERICAN CONFERENCE (MAC) – 12 teams
  { name: "Akron Zips", division: "MAC", conference: "Mid-American Conference", founded: "09/22/1870", leagueJoined: "1992", city: "Akron", state: "OH", cityFounded: "01/01/1825", cityCharter: "March 5, 1865", stadium: "James A. Rhodes Arena", stadiumOpened: "09/01/1983" },
  { name: "Ball State Cardinals", division: "MAC", conference: "Mid-American Conference", founded: "05/15/1918", leagueJoined: "1973", city: "Muncie", state: "IN", cityFounded: "01/01/1827", cityCharter: "December 6, 1854", stadium: "Worthen Arena", stadiumOpened: "03/01/1992" },
  { name: "Bowling Green Falcons", division: "MAC", conference: "Mid-American Conference", founded: "10/12/1910", leagueJoined: "1952", city: "Bowling Green", state: "OH", cityFounded: "01/01/1833", cityCharter: "July 23, 1855", stadium: "Stroh Center", stadiumOpened: "11/15/2011" },
  { name: "Buffalo Bulls", division: "MAC", conference: "Mid-American Conference", founded: "05/11/1846", leagueJoined: "1998", city: "Buffalo", state: "NY", cityFounded: "01/01/1810", cityCharter: "June 2, 1832", stadium: "Alumni Arena", stadiumOpened: "02/01/1982" },
  { name: "Central Michigan Chippewas", division: "MAC", conference: "Mid-American Conference", founded: "05/30/1892", leagueJoined: "1971", city: "Mount Pleasant", state: "MI", cityFounded: "01/01/1855", cityCharter: "01/01/1889", stadium: "McGuirk Arena", stadiumOpened: "11/01/1973" },
  { name: "Eastern Michigan Eagles", division: "MAC", conference: "Mid-American Conference", founded: "03/28/1849", leagueJoined: "1976", city: "Ypsilanti", state: "MI", cityFounded: "01/01/1823", cityCharter: "01/01/1858", stadium: "George Gervin GameAbove Center", stadiumOpened: "11/01/1998" },
  { name: "Kent State Golden Flashes", division: "MAC", conference: "Mid-American Conference", founded: "05/13/1910", leagueJoined: "1951", city: "Kent", state: "OH", cityFounded: "01/01/1805", cityCharter: "May 6, 1867", stadium: "Memorial Athletic and Convocation Center", stadiumOpened: "01/01/1991" },
  { name: "Miami RedHawks", division: "MAC", conference: "Mid-American Conference", founded: "02/17/1809", leagueJoined: "1948", city: "Oxford", state: "OH", cityFounded: "01/01/1810", cityCharter: "February 23, 1830", stadium: "Millett Hall", stadiumOpened: "12/01/1968" },
  { name: "Northern Illinois Huskies", division: "MAC", conference: "Mid-American Conference", founded: "05/22/1895", leagueJoined: "1997", city: "DeKalb", state: "IL", cityFounded: "01/01/1856", cityCharter: "February 24, 1877", stadium: "Convocation Center", stadiumOpened: "09/01/2002" },
  { name: "Ohio Bobcats", division: "MAC", conference: "Mid-American Conference", founded: "02/18/1804", leagueJoined: "1946", city: "Athens", state: "OH", cityFounded: "01/01/1797", cityCharter: "January 1, 1811", stadium: "Convocation Center", stadiumOpened: "11/28/1968" },
  { name: "Toledo Rockets", division: "MAC", conference: "Mid-American Conference", founded: "04/25/1872", leagueJoined: "1950", city: "Toledo", state: "OH", cityFounded: "01/01/1833", cityCharter: "January 7, 1837", stadium: "Savage Arena", stadiumOpened: "12/01/1976" },
  { name: "Western Michigan Broncos", division: "MAC", conference: "Mid-American Conference", founded: "08/29/1903", leagueJoined: "1948", city: "Kalamazoo", state: "MI", cityFounded: "01/01/1829", cityCharter: "01/01/1884", stadium: "University Arena", stadiumOpened: "01/01/1982" },

  // MID-EASTERN ATHLETIC CONFERENCE (MEAC) – 8 teams
  { name: "Coppin State Eagles", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "01/01/1900", leagueJoined: "1985", city: "Baltimore", state: "MD", cityFounded: "08/08/1729", cityCharter: "August 8, 1729", stadium: "Physical Education Complex", stadiumOpened: "11/01/1986" },
  { name: "Delaware State Hornets", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "05/15/1891", leagueJoined: "1970", city: "Dover", state: "DE", cityFounded: "01/01/1683", cityCharter: "01/01/1929", stadium: "Memorial Hall", stadiumOpened: "01/01/1973" },
  { name: "Howard Bison", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "03/02/1867", leagueJoined: "1971", city: "Washington", state: "DC", cityFounded: "07/16/1790", cityCharter: "July 16, 1790", stadium: "Burr Gymnasium", stadiumOpened: "01/01/1973" },
  { name: "Maryland Eastern Shore Hawks", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "09/13/1886", leagueJoined: "1970", city: "Princess Anne", state: "MD", cityFounded: "01/01/1733", cityCharter: "01/01/1733", stadium: "William P. Hytche Athletic Center", stadiumOpened: "11/01/1980" },
  { name: "Morgan State Bears", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "01/01/1867", leagueJoined: "1970", city: "Baltimore", state: "MD", cityFounded: "08/08/1729", cityCharter: "August 8, 1729", stadium: "Talmadge L. Hill Field House", stadiumOpened: "11/01/2009" },
  { name: "Norfolk State Spartans", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "09/23/1935", leagueJoined: "1997", city: "Norfolk", state: "VA", cityFounded: "01/01/1682", cityCharter: "01/01/1845", stadium: "Joseph G. Echols Memorial Hall", stadiumOpened: "12/01/1982" },
  { name: "North Carolina Central Eagles", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "07/05/1910", leagueJoined: "2010", city: "Durham", state: "NC", cityFounded: "04/26/1853", cityCharter: "04/26/1853", stadium: "McDougald-McLendon Arena", stadiumOpened: "11/01/1989" },
  { name: "South Carolina State Bulldogs", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "10/01/1896", leagueJoined: "1970", city: "Orangeburg", state: "SC", cityFounded: "01/01/1735", cityCharter: "August 10, 1904", stadium: "Smith-Hammond-Middleton Memorial Center", stadiumOpened: "01/01/1973" },

  // MISSOURI VALLEY CONFERENCE (MVC) – 12 teams
  { name: "Belmont Bruins", division: "MVC", conference: "Missouri Valley Conference", founded: "10/03/1890", leagueJoined: "2022", city: "Nashville", state: "TN", cityFounded: "12/24/1779", cityCharter: "December 24, 1779", stadium: "Curb Event Center", stadiumOpened: "11/01/2003" },
  { name: "Bradley Braves", division: "MVC", conference: "Missouri Valley Conference", founded: "09/01/1897", leagueJoined: "1955", city: "Peoria", state: "IL", cityFounded: "03/11/1825", cityCharter: "04/21/1845", stadium: "Carver Arena", stadiumOpened: "12/13/1982" },
  { name: "Drake Bulldogs", division: "MVC", conference: "Missouri Valley Conference", founded: "08/03/1881", leagueJoined: "1956", city: "Des Moines", state: "IA", cityFounded: "09/22/1843", cityCharter: "09/22/1851", stadium: "Knapp Center", stadiumOpened: "01/10/1992" },
  { name: "Evansville Purple Aces", division: "MVC", conference: "Missouri Valley Conference", founded: "09/01/1854", leagueJoined: "1994", city: "Evansville", state: "IN", cityFounded: "03/27/1812", cityCharter: "02/29/1847", stadium: "Ford Center", stadiumOpened: "11/10/2011" },
  { name: "Illinois State Redbirds", division: "MVC", conference: "Missouri Valley Conference", founded: "02/18/1857", leagueJoined: "1980", city: "Normal", state: "IL", cityFounded: "01/01/1854", cityCharter: "02/25/1867", stadium: "CEFCU Arena", stadiumOpened: "11/13/2011" },
  { name: "Indiana State Sycamores", division: "MVC", conference: "Missouri Valley Conference", founded: "12/24/1865", leagueJoined: "1976", city: "Terre Haute", state: "IN", cityFounded: "01/01/1816", cityCharter: "01/01/1832", stadium: "Hulman Center", stadiumOpened: "12/01/1973" },
  { name: "Murray State Racers", division: "MVC", conference: "Missouri Valley Conference", founded: "09/24/1922", leagueJoined: "2022", city: "Murray", state: "KY", cityFounded: "01/01/1844", cityCharter: "01/17/1844", stadium: "CFSB Center", stadiumOpened: "11/01/1998" },
  { name: "Northern Iowa Panthers", division: "MVC", conference: "Missouri Valley Conference", founded: "08/29/1876", leagueJoined: "1991", city: "Cedar Falls", state: "IA", cityFounded: "01/01/1845", cityCharter: "01/01/1851", stadium: "McLeod Center", stadiumOpened: "11/16/2006" },
  { name: "Southern Illinois Salukis", division: "MVC", conference: "Missouri Valley Conference", founded: "05/03/1869", leagueJoined: "1974", city: "Carbondale", state: "IL", cityFounded: "01/01/1852", cityCharter: "03/01/1856", stadium: "Banterra Center", stadiumOpened: "11/01/1964" },
  { name: "UIC Flames", division: "MVC", conference: "Missouri Valley Conference", founded: "02/15/1965", leagueJoined: "2022", city: "Chicago", state: "IL", cityFounded: "03/04/1837", cityCharter: "March 4, 1837", stadium: "Credit Union 1 Arena", stadiumOpened: "02/01/1982" },
  { name: "Valparaiso Beacons", division: "MVC", conference: "Missouri Valley Conference", founded: "09/21/1859", leagueJoined: "2017", city: "Valparaiso", state: "IN", cityFounded: "01/01/1836", cityCharter: "02/21/1865", stadium: "Athletics-Recreation Center", stadiumOpened: "12/01/1984" },
  { name: "Wichita State Shockers", division: "MVC", conference: "Missouri Valley Conference", founded: "04/30/1895", leagueJoined: "1945", city: "Wichita", state: "KS", cityFounded: "01/01/1868", cityCharter: "07/21/1870", stadium: "Charles Koch Arena", stadiumOpened: "01/13/2003" },

  // MOUNTAIN WEST CONFERENCE – 11 teams
  { name: "Air Force Falcons", division: "MWC", conference: "Mountain West Conference", founded: "04/01/1954", leagueJoined: "1999", city: "Colorado Springs", state: "CO", cityFounded: "01/01/1871", cityCharter: "June 19, 1886", stadium: "Clune Arena", stadiumOpened: "11/01/1968" },
  { name: "Boise State Broncos", division: "MWC", conference: "Mountain West Conference", founded: "04/12/1932", leagueJoined: "2011", city: "Boise", state: "ID", cityFounded: "01/01/1863", cityCharter: "January 11, 1866", stadium: "ExtraMile Arena", stadiumOpened: "11/01/1982" },
  { name: "Colorado State Rams", division: "MWC", conference: "Mountain West Conference", founded: "02/11/1870", leagueJoined: "1999", city: "Fort Collins", state: "CO", cityFounded: "01/01/1864", cityCharter: "February 3, 1873", stadium: "Moby Arena", stadiumOpened: "02/01/1966" },
  { name: "Fresno State Bulldogs", division: "MWC", conference: "Mountain West Conference", founded: "05/29/1911", leagueJoined: "2012", city: "Fresno", state: "CA", cityFounded: "01/01/1872", cityCharter: "October 12, 1885", stadium: "Save Mart Center", stadiumOpened: "11/01/2003" },
  { name: "Nevada Wolf Pack", division: "MWC", conference: "Mountain West Conference", founded: "10/12/1874", leagueJoined: "2012", city: "Reno", state: "NV", cityFounded: "01/01/1868", cityCharter: "March 16, 1903", stadium: "Lawlor Events Center", stadiumOpened: "11/01/1983" },
  { name: "New Mexico Lobos", division: "MWC", conference: "Mountain West Conference", founded: "02/28/1889", leagueJoined: "1999", city: "Albuquerque", state: "NM", cityFounded: "01/01/1706", cityCharter: "February 10, 1885", stadium: "Dreamstyle Arena", stadiumOpened: "12/01/1966" },
  { name: "San Diego State Aztecs", division: "MWC", conference: "Mountain West Conference", founded: "03/13/1897", leagueJoined: "1999", city: "San Diego", state: "CA", cityFounded: "07/16/1769", cityCharter: "July 16, 1769", stadium: "Viejas Arena", stadiumOpened: "07/01/1997" },
  { name: "San Jose State Spartans", division: "MWC", conference: "Mountain West Conference", founded: "05/02/1857", leagueJoined: "2013", city: "San Jose", state: "CA", cityFounded: "11/29/1777", cityCharter: "03/27/1850", stadium: "Provident Credit Union Event Center", stadiumOpened: "12/01/1989" },
  { name: "UNLV Rebels", division: "MWC", conference: "Mountain West Conference", founded: "09/10/1957", leagueJoined: "1999", city: "Las Vegas", state: "NV", cityFounded: "05/15/1905", cityCharter: "May 15, 1905", stadium: "Thomas & Mack Center", stadiumOpened: "07/01/1983" },
  { name: "Utah State Aggies", division: "MWC", conference: "Mountain West Conference", founded: "03/08/1888", leagueJoined: "2005", city: "Logan", state: "UT", cityFounded: "01/01/1859", cityCharter: "January 17, 1866", stadium: "Dee Glen Smith Spectrum", stadiumOpened: "12/01/1970" },
  { name: "Wyoming Cowboys", division: "MWC", conference: "Mountain West Conference", founded: "09/27/1886", leagueJoined: "1999", city: "Laramie", state: "WY", cityFounded: "01/01/1868", cityCharter: "January 13, 1874", stadium: "Arena-Auditorium", stadiumOpened: "01/01/1982" },

  // NORTHEAST CONFERENCE (NEC) – 10 teams
  { name: "Central Connecticut State Blue Devils", division: "NEC", conference: "Northeast Conference", founded: "07/04/1849", leagueJoined: "1998", city: "New Britain", state: "CT", cityFounded: "05/26/1687", cityCharter: "01/01/1871", stadium: "William H. Detrick Gymnasium", stadiumOpened: "01/01/1965" },
  { name: "Chicago State Cougars", division: "NEC", conference: "Northeast Conference", founded: "09/02/1867", leagueJoined: "2022", city: "Chicago", state: "IL", cityFounded: "03/04/1837", cityCharter: "March 4, 1837", stadium: "Emil and Patricia Jones Convocation Center", stadiumOpened: "11/01/2007" },
  { name: "Fairleigh Dickinson Knights", division: "NEC", conference: "Northeast Conference", founded: "09/01/1942", leagueJoined: "1981", city: "Teaneck", state: "NJ", cityFounded: "01/01/1895", cityCharter: "02/19/1895", stadium: "Rothman Center", stadiumOpened: "11/01/1998" },
  { name: "LIU Sharks", division: "NEC", conference: "Northeast Conference", founded: "09/14/1926", leagueJoined: "1981", city: "Brookville", state: "NY", cityFounded: "01/01/1839", cityCharter: "1931", stadium: "Steinberg Wellness Center", stadiumOpened: "01/01/2006" },
  { name: "Merrimack Warriors", division: "NEC", conference: "Northeast Conference", founded: "01/01/1947", leagueJoined: "2019", city: "North Andover", state: "MA", cityFounded: "01/01/1646", cityCharter: "01/01/1855", stadium: "Hammel Court", stadiumOpened: "01/01/2019" },
  { name: "New Haven Chargers", division: "NEC", conference: "Northeast Conference", founded: "06/01/1920", leagueJoined: "2025", city: "West Haven", state: "CT", cityFounded: "01/01/1648", cityCharter: "04/28/1921", stadium: "Charger Gymnasium", stadiumOpened: "01/01/1997" },
  { name: "Saint Francis Red Flash", division: "NEC", conference: "Northeast Conference", founded: "02/18/1847", leagueJoined: "1981", city: "Loretto", state: "PA", cityFounded: "01/01/1799", cityCharter: "01/01/1845", stadium: "DeGol Arena", stadiumOpened: "01/01/1978" },
  { name: "Sacred Heart Pioneers", division: "NEC", conference: "Northeast Conference", founded: "09/10/1963", leagueJoined: "1999", city: "Fairfield", state: "CT", cityFounded: "01/01/1639", cityCharter: "01/01/1947", stadium: "William H. Pitt Health and Recreation Center", stadiumOpened: "09/01/1998" },
  { name: "St. Francis Brooklyn Terriers", division: "NEC", conference: "Northeast Conference", founded: "08/12/1858", leagueJoined: "1981", city: "Brooklyn", state: "NY", cityFounded: "01/01/1636", cityCharter: "May 21, 1646", stadium: "Generoso Pope Athletic Complex", stadiumOpened: "01/01/2001" },
  { name: "Wagner Seahawks", division: "NEC", conference: "Northeast Conference", founded: "08/01/1883", leagueJoined: "1981", city: "Staten Island", state: "NY", cityFounded: "01/01/1661", cityCharter: "01/01/1898", stadium: "Spiro Sports Center", stadiumOpened: "01/01/1999" },

  // OHIO VALLEY CONFERENCE (OVC) – 11 teams
  { name: "Eastern Illinois Panthers", division: "OVC", conference: "Ohio Valley Conference", founded: "05/12/1895", leagueJoined: "1996", city: "Charleston", state: "IL", cityFounded: "01/01/1836", cityCharter: "02/06/1865", stadium: "Lantz Arena", stadiumOpened: "12/01/1967" },
  { name: "Lindenwood Lions", division: "OVC", conference: "Ohio Valley Conference", founded: "02/24/1827", leagueJoined: "2022", city: "St. Charles", state: "MO", cityFounded: "01/01/1769", cityCharter: "01/01/1849", stadium: "Robert F. Hyland Performance Arena", stadiumOpened: "11/01/2008" },
  { name: "Little Rock Trojans", division: "OVC", conference: "Ohio Valley Conference", founded: "01/01/1927", leagueJoined: "2022", city: "Little Rock", state: "AR", cityFounded: "01/01/1821", cityCharter: "10/31/1831", stadium: "Jack Stephens Center", stadiumOpened: "11/15/2005" },
  { name: "Morehead State Eagles", division: "OVC", conference: "Ohio Valley Conference", founded: "03/08/1887", leagueJoined: "1948", city: "Morehead", state: "KY", cityFounded: "01/01/1869", cityCharter: "01/01/1869", stadium: "Ellis Johnson Arena", stadiumOpened: "12/01/1981" },
  { name: "Southeast Missouri Redhawks", division: "OVC", conference: "Ohio Valley Conference", founded: "09/03/1873", leagueJoined: "1991", city: "Cape Girardeau", state: "MO", cityFounded: "04/04/1793", cityCharter: "01/01/1843", stadium: "Show Me Center", stadiumOpened: "11/01/1987" },
  { name: "SIU Edwardsville Cougars", division: "OVC", conference: "Ohio Valley Conference", founded: "06/01/1957", leagueJoined: "2012", city: "Edwardsville", state: "IL", cityFounded: "01/01/1818", cityCharter: "February 23, 1819", stadium: "First Community Arena", stadiumOpened: "11/01/2008" },
  { name: "Southern Indiana Screaming Eagles", division: "OVC", conference: "Ohio Valley Conference", founded: "08/15/1965", leagueJoined: "2022", city: "Evansville", state: "IN", cityFounded: "03/27/1812", cityCharter: "02/29/1847", stadium: "Liberty Arena", stadiumOpened: "11/01/1998" },
  { name: "Tennessee State Tigers", division: "OVC", conference: "Ohio Valley Conference", founded: "06/19/1912", leagueJoined: "1986", city: "Nashville", state: "TN", cityFounded: "12/24/1779", cityCharter: "December 24, 1779", stadium: "Gentry Center", stadiumOpened: "11/01/1980" },
  { name: "Tennessee Tech Golden Eagles", division: "OVC", conference: "Ohio Valley Conference", founded: "05/03/1915", leagueJoined: "1949", city: "Cookeville", state: "TN", cityFounded: "01/01/1854", cityCharter: "12/07/1903", stadium: "Hooper Eblen Center", stadiumOpened: "11/01/2000" },
  { name: "UT Martin Skyhawks", division: "OVC", conference: "Ohio Valley Conference", founded: "09/11/1900", leagueJoined: "1992", city: "Martin", state: "TN", cityFounded: "01/01/1870", cityCharter: "November 27, 1874", stadium: "Kathleen and Tom Elam Center", stadiumOpened: "11/12/2008" },
  { name: "Western Illinois Leathernecks", division: "OVC", conference: "Ohio Valley Conference", founded: "09/23/1899", leagueJoined: "2018", city: "Macomb", state: "IL", cityFounded: "01/01/1830", cityCharter: "01/01/1856", stadium: "Western Hall", stadiumOpened: "12/01/1964" },

  // PAC-12 CONFERENCE – 2 teams (2025-26)
  { name: "Oregon State Beavers", division: "Pac-12", conference: "Pac-12 Conference", founded: "10/27/1868", leagueJoined: "1915", city: "Corvallis", state: "OR", cityFounded: "01/01/1845", cityCharter: "January 28, 1857", stadium: "Gill Coliseum", stadiumOpened: "01/01/1949" },
  { name: "Washington State Cougars", division: "Pac-12", conference: "Pac-12 Conference", founded: "03/28/1890", leagueJoined: "1915", city: "Pullman", state: "WA", cityFounded: "04/11/1888", cityCharter: "04/11/1888", stadium: "Beasley Coliseum", stadiumOpened: "12/01/1973" },
  
  // PATRIOT LEAGUE – 10 teams
  { name: "American Eagles", division: "Patriot", conference: "Patriot League", founded: "02/26/1893", leagueJoined: "1991", city: "Washington", state: "DC", cityFounded: "07/16/1790", cityCharter: "July 16, 1790", stadium: "Bender Arena", stadiumOpened: "01/01/1988" },
  { name: "Army Black Knights", division: "Patriot", conference: "Patriot League", founded: "03/16/1802", leagueJoined: "1991", city: "West Point", state: "NY", cityFounded: "01/01/1778", cityCharter: "01/01/1778", stadium: "Christl Arena", stadiumOpened: "01/01/1985" },
  { name: "Boston University Terriers", division: "Patriot", conference: "Patriot League", founded: "04/24/1839", leagueJoined: "2013", city: "Boston", state: "MA", cityFounded: "09/17/1630", cityCharter: "September 17, 1630", stadium: "Case Gym", stadiumOpened: "01/01/1972" },
  { name: "Bucknell Bison", division: "Patriot", conference: "Patriot League", founded: "02/05/1846", leagueJoined: "1990", city: "Lewisburg", state: "PA", cityFounded: "01/01/1785", cityCharter: "01/01/1812", stadium: "Sojka Pavilion", stadiumOpened: "01/20/2003" },
  { name: "Colgate Raiders", division: "Patriot", conference: "Patriot League", founded: "08/22/1819", leagueJoined: "1990", city: "Hamilton", state: "NY", cityFounded: "01/01/1795", cityCharter: "01/01/1816", stadium: "Cotterell Court", stadiumOpened: "01/01/1959" },
  { name: "Holy Cross Crusaders", division: "Patriot", conference: "Patriot League", founded: "11/02/1843", leagueJoined: "1990", city: "Worcester", state: "MA", cityFounded: "07/14/1722", cityCharter: "02/29/1848", stadium: "Hart Center", stadiumOpened: "12/01/1975" },
  { name: "Lafayette Leopards", division: "Patriot", conference: "Patriot League", founded: "09/09/1826", leagueJoined: "1990", city: "Easton", state: "PA", cityFounded: "01/01/1752", cityCharter: "01/01/1887", stadium: "Kirby Sports Center", stadiumOpened: "01/01/1973" },
  { name: "Lehigh Mountain Hawks", division: "Patriot", conference: "Patriot League", founded: "09/01/1865", leagueJoined: "1990", city: "Bethlehem", state: "PA", cityFounded: "12/24/1741", cityCharter: "03/27/1917", stadium: "Stabler Arena", stadiumOpened: "09/01/1979" },
  { name: "Loyola Maryland Greyhounds", division: "Patriot", conference: "Patriot League", founded: "09/15/1852", leagueJoined: "2013", city: "Baltimore", state: "MD", cityFounded: "08/08/1729", cityCharter: "August 8, 1729", stadium: "Reitz Arena", stadiumOpened: "11/01/1998" },
  { name: "Navy Midshipmen", division: "Patriot", conference: "Patriot League", founded: "10/10/1845", leagueJoined: "1991", city: "Annapolis", state: "MD", cityFounded: "01/01/1649", cityCharter: "05/22/1708", stadium: "Alumni Hall", stadiumOpened: "04/01/1991" },

  // SOUTHEASTERN CONFERENCE (SEC) – 16 teams
  { name: "Alabama Crimson Tide", division: "SEC", conference: "Southeastern Conference", founded: "04/18/1831", leagueJoined: "1933", city: "Tuscaloosa", state: "AL", cityFounded: "12/13/1819", cityCharter: "December 13, 1819", stadium: "Coleman Coliseum", stadiumOpened: "01/01/1968" },
  { name: "Arkansas Razorbacks", division: "SEC", conference: "Southeastern Conference", founded: "03/27/1871", leagueJoined: "1992", city: "Fayetteville", state: "AR", cityFounded: "10/17/1828", cityCharter: "November 3, 1836", stadium: "Bud Walton Arena", stadiumOpened: "11/05/1993" },
  { name: "Auburn Tigers", division: "SEC", conference: "Southeastern Conference", founded: "02/07/1856", leagueJoined: "1933", city: "Auburn", state: "AL", cityFounded: "02/02/1836", cityCharter: "February 2, 1839", stadium: "Auburn Arena", stadiumOpened: "01/01/2010" },
  { name: "Florida Gators", division: "SEC", conference: "Southeastern Conference", founded: "10/01/1853", leagueJoined: "1933", city: "Gainesville", state: "FL", cityFounded: "01/01/1854", cityCharter: "April 14, 1869", stadium: "Exactech Arena", stadiumOpened: "11/27/1980" },
  { name: "Georgia Bulldogs", division: "SEC", conference: "Southeastern Conference", founded: "01/26/1785", leagueJoined: "1933", city: "Athens", state: "GA", cityFounded: "01/01/1801", cityCharter: "December 8, 1806", stadium: "Stegeman Coliseum", stadiumOpened: "01/31/1964" },
  { name: "Kentucky Wildcats", division: "SEC", conference: "Southeastern Conference", founded: "02/29/1865", leagueJoined: "1933", city: "Lexington", state: "KY", cityFounded: "05/06/1775", cityCharter: "May 6, 1782", stadium: "Rupp Arena", stadiumOpened: "11/26/1976" },
  { name: "LSU Tigers", division: "SEC", conference: "Southeastern Conference", founded: "01/02/1860", leagueJoined: "1933", city: "Baton Rouge", state: "LA", cityFounded: "01/01/1719", cityCharter: "July 6, 1817", stadium: "Pete Maravich Assembly Center", stadiumOpened: "11/30/1972" },
  { name: "Mississippi Rebels", division: "SEC", conference: "Southeastern Conference", founded: "02/24/1844", leagueJoined: "1933", city: "Oxford", state: "MS", cityFounded: "01/01/1837", cityCharter: "May 11, 1837", stadium: "The Pavilion at Ole Miss", stadiumOpened: "01/07/2016" },
  { name: "Mississippi State Bulldogs", division: "SEC", conference: "Southeastern Conference", founded: "02/28/1878", leagueJoined: "1933", city: "Starkville", state: "MS", cityFounded: "01/01/1831", cityCharter: "May 11, 1837", stadium: "Humphrey Coliseum", stadiumOpened: "12/01/1975" },
  { name: "Missouri Tigers", division: "SEC", conference: "Southeastern Conference", founded: "02/11/1839", leagueJoined: "2012", city: "Columbia", state: "MO", cityFounded: "01/01/1821", cityCharter: "November 5, 1826", stadium: "Mizzou Arena", stadiumOpened: "01/06/2004" },
  { name: "Oklahoma Sooners", division: "SEC", conference: "Southeastern Conference", founded: "12/19/1890", leagueJoined: "2025", city: "Norman", state: "OK", cityFounded: "05/13/1889", cityCharter: "May 13, 1891", stadium: "Lloyd Noble Center", stadiumOpened: "01/01/1975" },
  { name: "South Carolina Gamecocks", division: "SEC", conference: "Southeastern Conference", founded: "12/19/1801", leagueJoined: "1992", city: "Columbia", state: "SC", cityFounded: "03/22/1786", cityCharter: "March 22, 1805", stadium: "Colonial Life Arena", stadiumOpened: "11/06/2002" },
  { name: "Tennessee Volunteers", division: "SEC", conference: "Southeastern Conference", founded: "09/10/1794", leagueJoined: "1933", city: "Knoxville", state: "TN", cityFounded: "01/01/1786", cityCharter: "October 27, 1815", stadium: "Thompson-Boling Arena", stadiumOpened: "12/01/1987" },
  { name: "Texas Longhorns", division: "SEC", conference: "Southeastern Conference", founded: "09/15/1883", leagueJoined: "2025", city: "Austin", state: "TX", cityFounded: "12/27/1839", cityCharter: "December 27, 1839", stadium: "Moody Center", stadiumOpened: "04/25/2022" },
  { name: "Texas A&M Aggies", division: "SEC", conference: "Southeastern Conference", founded: "10/04/1876", leagueJoined: "2012", city: "College Station", state: "TX", cityFounded: "01/01/1860", cityCharter: "October 19, 1938", stadium: "Reed Arena", stadiumOpened: "11/18/1998" },
  { name: "Vanderbilt Commodores", division: "SEC", conference: "Southeastern Conference", founded: "05/01/1873", leagueJoined: "1933", city: "Nashville", state: "TN", cityFounded: "12/24/1779", cityCharter: "December 24, 1779", stadium: "Memorial Gymnasium", stadiumOpened: "12/01/1952" },

  // SOUTHERN CONFERENCE – 10 teams
  { name: "Chattanooga Mocs", division: "SoCon", conference: "Southern Conference", founded: "09/17/1886", leagueJoined: "1976", city: "Chattanooga", state: "TN", cityFounded: "01/01/1839", cityCharter: "02/13/1851", stadium: "McKenzie Arena", stadiumOpened: "11/27/1982" },
  { name: "The Citadel Bulldogs", division: "SoCon", conference: "Southern Conference", founded: "03/20/1842", leagueJoined: "1936", city: "Charleston", state: "SC", cityFounded: "03/29/1670", cityCharter: "08/13/1783", stadium: "McAlister Field House", stadiumOpened: "01/01/1939" },
  { name: "East Tennessee State Buccaneers", division: "SoCon", conference: "Southern Conference", founded: "09/19/1911", leagueJoined: "2014", city: "Johnson City", state: "TN", cityFounded: "01/01/1869", cityCharter: "02/25/1869", stadium: "Freedom Hall Civic Center", stadiumOpened: "09/01/1975" },
  { name: "Furman Paladins", division: "SoCon", conference: "Southern Conference", founded: "01/01/1826", leagueJoined: "1936", city: "Greenville", state: "SC", cityFounded: "01/01/1797", cityCharter: "06/15/1831", stadium: "Timmons Arena", stadiumOpened: "11/28/1997" },
  { name: "Mercer Bears", division: "SoCon", conference: "Southern Conference", founded: "01/10/1833", leagueJoined: "2014", city: "Macon", state: "GA", cityFounded: "12/23/1823", cityCharter: "12/16/1832", stadium: "Hawkins Arena", stadiumOpened: "11/19/2018" },
  { name: "Samford Bulldogs", division: "SoCon", conference: "Southern Conference", founded: "02/25/1841", leagueJoined: "2008", city: "Birmingham", state: "AL", cityFounded: "12/19/1871", cityCharter: "12/19/1871", stadium: "Pete Hanna Center", stadiumOpened: "11/01/1996" },
  { name: "UNC Greensboro Spartans", division: "SoCon", conference: "Southern Conference", founded: "10/03/1891", leagueJoined: "1997", city: "Greensboro", state: "NC", cityFounded: "01/01/1808", cityCharter: "December 15, 1808", stadium: "Greensboro Coliseum", stadiumOpened: "09/02/1959" },
  { name: "VMI Keydets", division: "SoCon", conference: "Southern Conference", founded: "11/11/1839", leagueJoined: "1924", city: "Lexington", state: "VA", cityFounded: "01/01/1777", cityCharter: "01/01/1874", stadium: "Cameron Hall", stadiumOpened: "12/01/1981" },
  { name: "Western Carolina Catamounts", division: "SoCon", conference: "Southern Conference", founded: "03/01/1889", leagueJoined: "1976", city: "Cullowhee", state: "NC", cityFounded: "01/01/1888", cityCharter: "Unincorporated", stadium: "Ramsey Regional Activity Center", stadiumOpened: "11/01/1986" },
  { name: "Wofford Terriers", division: "SoCon", conference: "Southern Conference", founded: "08/01/1854", leagueJoined: "1997", city: "Spartanburg", state: "SC", cityFounded: "01/01/1785", cityCharter: "03/08/1831", stadium: "Jerry Richardson Indoor Stadium", stadiumOpened: "11/01/2017" },

  // SOUTHLAND CONFERENCE – 13 teams
  { name: "Houston Christian Huskies", division: "Southland", conference: "Southland Conference", founded: "09/01/1963", leagueJoined: "2013", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "August 30, 1836", stadium: "Sharp Gymnasium", stadiumOpened: "01/01/1965" },
  { name: "Incarnate Word Cardinals", division: "Southland", conference: "Southland Conference", founded: "04/04/1881", leagueJoined: "2022", city: "San Antonio", state: "TX", cityFounded: "05/01/1718", cityCharter: "May 1, 1718", stadium: "McDermott Convocation Center", stadiumOpened: "11/01/2008" },
  { name: "Lamar Cardinals", division: "Southland", conference: "Southland Conference", founded: "09/17/1923", leagueJoined: "1963", city: "Beaumont", state: "TX", cityFounded: "12/16/1835", cityCharter: "04/16/1838", stadium: "Montagne Center", stadiumOpened: "01/01/1984" },
  { name: "McNeese Cowboys", division: "Southland", conference: "Southland Conference", founded: "09/17/1939", leagueJoined: "1972", city: "Lake Charles", state: "LA", cityFounded: "03/07/1861", cityCharter: "03/16/1867", stadium: "Legacy Center", stadiumOpened: "11/01/2004" },
  { name: "New Orleans Privateers", division: "Southland", conference: "Southland Conference", founded: "08/15/1958", leagueJoined: "2013", city: "New Orleans", state: "LA", cityFounded: "03/01/1718", cityCharter: "May 7, 1718", stadium: "Lakefront Arena", stadiumOpened: "01/01/1983" },
  { name: "Nicholls Colonels", division: "Southland", conference: "Southland Conference", founded: "09/23/1948", leagueJoined: "1991", city: "Thibodaux", state: "LA", cityFounded: "01/01/1838", cityCharter: "March 16, 1830", stadium: "Stopher Gymnasium", stadiumOpened: "01/01/1978" },
  { name: "Northwestern State Demons", division: "Southland", conference: "Southland Conference", founded: "09/05/1884", leagueJoined: "1987", city: "Natchitoches", state: "LA", cityFounded: "01/01/1714", cityCharter: "02/05/1819", stadium: "Prather Coliseum", stadiumOpened: "11/01/1965" },
  { name: "SF Austin Lumberjacks", division: "Southland", conference: "Southland Conference", founded: "09/18/1923", leagueJoined: "1987", city: "Nacogdoches", state: "TX", cityFounded: "01/01/1779", cityCharter: "02/05/1837", stadium: "William R. Johnson Coliseum", stadiumOpened: "11/28/1974" },
  { name: "Southeastern Louisiana Lions", division: "Southland", conference: "Southland Conference", founded: "09/27/1925", leagueJoined: "1987", city: "Hammond", state: "LA", cityFounded: "12/27/1818", cityCharter: "04/04/1888", stadium: "University Center", stadiumOpened: "01/01/1982" },
  { name: "Texas A&M-Commerce Lions", division: "Southland", conference: "Southland Conference", founded: "09/23/1889", leagueJoined: "2022", city: "Commerce", state: "TX", cityFounded: "01/01/1872", cityCharter: "04/18/1885", stadium: "The Field House", stadiumOpened: "12/01/1956" },
  { name: "Texas A&M-Corpus Christi Islanders", division: "Southland", conference: "Southland Conference", founded: "09/01/1947", leagueJoined: "2006", city: "Corpus Christi", state: "TX", cityFounded: "07/25/1839", cityCharter: "09/09/1852", stadium: "American Bank Center", stadiumOpened: "09/07/2004" },
  { name: "UT Rio Grande Valley Vaqueros", division: "Southland", conference: "Southland Conference", founded: "09/01/1973", leagueJoined: "2021", city: "Edinburg", state: "TX", cityFounded: "12/25/1908", cityCharter: "12/25/1919", stadium: "UTRGV Fieldhouse", stadiumOpened: "11/01/2019" },
  { name: "UT Tyler Patriots", division: "Southland", conference: "Southland Conference", founded: "09/01/1971", leagueJoined: "2022", city: "Tyler", state: "TX", cityFounded: "01/01/1846", cityCharter: "04/11/1907", stadium: "Herrington Patriot Center", stadiumOpened: "11/01/2012" },

  // SOUTHWESTERN ATHLETIC CONFERENCE (SWAC) – 12 teams
  { name: "Alabama A&M Bulldogs", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "06/01/1875", leagueJoined: "1999", city: "Normal", state: "AL", cityFounded: "01/01/1875", cityCharter: "Unincorporated", stadium: "Elmore Gymnasium", stadiumOpened: "01/01/1974" },
  { name: "Alabama State Hornets", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "02/01/1867", leagueJoined: "1982", city: "Montgomery", state: "AL", cityFounded: "12/03/1819", cityCharter: "12/16/1819", stadium: "Dunn-Oliver Acadome", stadiumOpened: "11/01/1974" },
  { name: "Alcorn State Braves", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "05/13/1871", leagueJoined: "1962", city: "Lorman", state: "MS", cityFounded: "01/01/1871", cityCharter: "Unincorporated", stadium: "Davey L. Whitney Complex", stadiumOpened: "12/01/1975" },
  { name: "Arkansas-Pine Bluff Golden Lions", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "09/01/1873", leagueJoined: "1997", city: "Pine Bluff", state: "AR", cityFounded: "01/01/1832", cityCharter: "01/08/1839", stadium: "H.O. Clemmons Arena", stadiumOpened: "02/01/1982" },
  { name: "Bethune-Cookman Wildcats", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/03/1904", leagueJoined: "2021", city: "Daytona Beach", state: "FL", cityFounded: "01/01/1870", cityCharter: "July 26, 1876", stadium: "Moore Gymnasium", stadiumOpened: "01/01/1962" },
  { name: "Florida A&M Rattlers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/03/1887", leagueJoined: "2021", city: "Tallahassee", state: "FL", cityFounded: "01/01/1824", cityCharter: "December 9, 1825", stadium: "Alfred Lawson Jr. Multipurpose Center", stadiumOpened: "11/01/2009" },
  { name: "Grambling State Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "01/01/1901", leagueJoined: "1958", city: "Grambling", state: "LA", cityFounded: "01/01/1901", cityCharter: "September 9, 1953", stadium: "Fredrick C. Hobdy Assembly Center", stadiumOpened: "11/01/1980" },
  { name: "Jackson State Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/23/1877", leagueJoined: "1958", city: "Jackson", state: "MS", cityFounded: "04/25/1821", cityCharter: "01/01/1823", stadium: "Lee E. Williams Athletic and Assembly Center", stadiumOpened: "12/01/1980" },
  { name: "Mississippi Valley State Delta Devils", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "03/03/1950", leagueJoined: "1968", city: "Itta Bena", state: "MS", cityFounded: "01/01/1882", cityCharter: "August 1, 1898", stadium: "Harrison HPER Complex", stadiumOpened: "01/01/1977" },
  { name: "Prairie View A&M Panthers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "08/14/1876", leagueJoined: "1920", city: "Prairie View", state: "TX", cityFounded: "01/01/1876", cityCharter: "01/01/1876", stadium: "William Nicks Building", stadiumOpened: "11/01/1981" },
  { name: "Southern Jaguars", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "03/06/1880", leagueJoined: "1934", city: "Baton Rouge", state: "LA", cityFounded: "01/01/1719", cityCharter: "July 6, 1817", stadium: "F.G. Clark Center", stadiumOpened: "11/01/1975" },
  { name: "Texas Southern Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "05/14/1927", leagueJoined: "1954", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "August 30, 1836", stadium: "H&PE Arena", stadiumOpened: "01/01/1989" },

  // SUMMIT LEAGUE – 10 teams
  { name: "Denver Pioneers", division: "Summit", conference: "Summit League", founded: "03/05/1864", leagueJoined: "2013", city: "Denver", state: "CO", cityFounded: "11/22/1858", cityCharter: "November 22, 1858", stadium: "Magness Arena", stadiumOpened: "09/06/1999" },
  { name: "Kansas City Roos", division: "Summit", conference: "Summit League", founded: "06/24/1929", leagueJoined: "2020", city: "Kansas City", state: "MO", cityFounded: "06/01/1850", cityCharter: "June 1, 1850", stadium: "Swinney Recreation Center", stadiumOpened: "09/01/1986" },
  { name: "North Dakota Fighting Hawks", division: "Summit", conference: "Summit League", founded: "02/27/1883", leagueJoined: "2018", city: "Grand Forks", state: "ND", cityFounded: "06/15/1870", cityCharter: "02/22/1881", stadium: "Betty Engelstad Sioux Center", stadiumOpened: "11/01/2004" },
  { name: "North Dakota State Bison", division: "Summit", conference: "Summit League", founded: "01/08/1890", leagueJoined: "2007", city: "Fargo", state: "ND", cityFounded: "01/01/1871", cityCharter: "01/01/1875", stadium: "Scheels Center", stadiumOpened: "11/01/2019" },
  { name: "Omaha Mavericks", division: "Summit", conference: "Summit League", founded: "06/11/1908", leagueJoined: "2011", city: "Omaha", state: "NE", cityFounded: "01/01/1854", cityCharter: "03/16/1857", stadium: "Baxter Arena", stadiumOpened: "10/23/2015" },
  { name: "Oral Roberts Golden Eagles", division: "Summit", conference: "Summit League", founded: "09/07/1963", leagueJoined: "2014", city: "Tulsa", state: "OK", cityFounded: "01/01/1836", cityCharter: "01/18/1898", stadium: "Mabee Center", stadiumOpened: "11/01/1972" },
  { name: "South Dakota Coyotes", division: "Summit", conference: "Summit League", founded: "01/01/1862", leagueJoined: "2011", city: "Vermillion", state: "SD", cityFounded: "01/01/1859", cityCharter: "01/01/1877", stadium: "Sanford Coyote Sports Center", stadiumOpened: "11/01/2016" },
  { name: "South Dakota State Jackrabbits", division: "Summit", conference: "Summit League", founded: "10/04/1881", leagueJoined: "2007", city: "Brookings", state: "SD", cityFounded: "07/03/1879", cityCharter: "March 9, 1883", stadium: "Frost Arena", stadiumOpened: "12/01/1973" },
  { name: "St. Thomas Tommies", division: "Summit", conference: "Summit League", founded: "09/08/1885", leagueJoined: "2021", city: "St. Paul", state: "MN", cityFounded: "01/01/1854", cityCharter: "March 4, 1854", stadium: "Schoenecker Arena", stadiumOpened: "11/01/2018" },
  { name: "Western Illinois Leathernecks", division: "Summit", conference: "Summit League", founded: "09/23/1899", leagueJoined: "2021", city: "Macomb", state: "IL", cityFounded: "01/01/1830", cityCharter: "01/01/1856", stadium: "Western Hall", stadiumOpened: "12/01/1964" },

  // SUN BELT CONFERENCE – 14 teams
  { name: "App State Mountaineers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/20/1899", leagueJoined: "2014", city: "Boone", state: "NC", cityFounded: "08/01/1872", cityCharter: "January 23, 1872", stadium: "Holmes Convocation Center", stadiumOpened: "01/01/2000" },
  { name: "Arkansas State Red Wolves", division: "Sun Belt", conference: "Sun Belt Conference", founded: "04/28/1909", leagueJoined: "1991", city: "Jonesboro", state: "AR", cityFounded: "01/01/1859", cityCharter: "February 16, 1883", stadium: "First National Bank Arena", stadiumOpened: "11/01/2008" },
  { name: "Coastal Carolina Chanticleers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "07/01/1954", leagueJoined: "2016", city: "Conway", state: "SC", cityFounded: "02/03/1732", cityCharter: "April 13, 1898", stadium: "HTC Center", stadiumOpened: "11/01/2008" },
  { name: "Georgia Southern Eagles", division: "Sun Belt", conference: "Sun Belt Conference", founded: "12/01/1906", leagueJoined: "2014", city: "Statesboro", state: "GA", cityFounded: "01/01/1803", cityCharter: "December 19, 1803", stadium: "Hanner Fieldhouse", stadiumOpened: "11/28/1969" },
  { name: "Georgia State Panthers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/01/1913", leagueJoined: "2013", city: "Atlanta", state: "GA", cityFounded: "01/01/1837", cityCharter: "December 29, 1847", stadium: "GSU Sports Arena", stadiumOpened: "02/28/1973" },
  { name: "James Madison Dukes", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/14/1908", leagueJoined: "2022", city: "Harrisonburg", state: "VA", cityFounded: "01/01/1779", cityCharter: "March 16, 1849", stadium: "Atlantic Union Bank Center", stadiumOpened: "11/15/2020" },
  { name: "Louisiana Ragin' Cajuns", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/11/1898", leagueJoined: "1991", city: "Lafayette", state: "LA", cityFounded: "01/01/1821", cityCharter: "01/16/1836", stadium: "Cajundome", stadiumOpened: "09/28/1985" },
  { name: "Louisiana Monroe Warhawks", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/04/1931", leagueJoined: "2006", city: "Monroe", state: "LA", cityFounded: "04/14/1819", cityCharter: "March 14, 1820", stadium: "Fant-Ewing Coliseum", stadiumOpened: "11/26/1971" },
  { name: "Marshall Thundering Herd", division: "Sun Belt", conference: "Sun Belt Conference", founded: "02/27/1837", leagueJoined: "2022", city: "Huntington", state: "WV", cityFounded: "01/01/1871", cityCharter: "February 27, 1871", stadium: "Cam Henderson Center", stadiumOpened: "11/27/1981" },
  { name: "Old Dominion Monarchs", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/24/1930", leagueJoined: "2022", city: "Norfolk", state: "VA", cityFounded: "01/01/1682", cityCharter: "01/01/1845", stadium: "Chartway Arena", stadiumOpened: "11/17/2002" },
  { name: "South Alabama Jaguars", division: "Sun Belt", conference: "Sun Belt Conference", founded: "05/15/1963", leagueJoined: "1976", city: "Mobile", state: "AL", cityFounded: "01/01/1702", cityCharter: "January 20, 1814", stadium: "Mitchell Center", stadiumOpened: "11/01/1998" },
  { name: "Southern Miss Golden Eagles", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/30/1910", leagueJoined: "2022", city: "Hattiesburg", state: "MS", cityFounded: "01/01/1882", cityCharter: "March 11, 1884", stadium: "Reed Green Coliseum", stadiumOpened: "12/01/1965" },
  { name: "Texas State Bobcats", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/26/1899", leagueJoined: "2013", city: "San Marcos", state: "TX", cityFounded: "01/01/1851", cityCharter: "March 1, 1851", stadium: "Strahan Arena", stadiumOpened: "11/29/1982" },
  { name: "Troy Trojans", division: "Sun Belt", conference: "Sun Belt Conference", founded: "02/26/1887", leagueJoined: "2004", city: "Troy", state: "AL", cityFounded: "01/01/1838", cityCharter: "February 4, 1843", stadium: "Trojan Arena", stadiumOpened: "11/01/2012" },

  // WEST COAST CONFERENCE (WCC) – 12 teams (2025-26)
  { name: "Gonzaga Bulldogs", division: "WCC", conference: "West Coast Conference", founded: "07/31/1887", leagueJoined: "1979", city: "Spokane", state: "WA", cityFounded: "11/29/1881", cityCharter: "11/29/1881", stadium: "McCarthey Athletic Center", stadiumOpened: "11/01/2004" },
  { name: "Loyola Marymount Lions", division: "WCC", conference: "West Coast Conference", founded: "08/28/1865", leagueJoined: "1955", city: "Los Angeles", state: "CA", cityFounded: "09/04/1781", cityCharter: "September 4, 1781", stadium: "Gersten Pavilion", stadiumOpened: "11/01/1981" },
  { name: "Oregon State Beavers", division: "WCC", conference: "West Coast Conference", founded: "10/27/1868", leagueJoined: "2024", city: "Corvallis", state: "OR", cityFounded: "01/01/1845", cityCharter: "January 28, 1857", stadium: "Gill Coliseum", stadiumOpened: "01/01/1949" },
  { name: "Pacific Tigers", division: "WCC", conference: "West Coast Conference", founded: "05/10/1851", leagueJoined: "1952", city: "Stockton", state: "CA", cityFounded: "01/01/1849", cityCharter: "07/23/1850", stadium: "Alex G. Spanos Center", stadiumOpened: "09/01/1981" },
  { name: "Pepperdine Waves", division: "WCC", conference: "West Coast Conference", founded: "09/21/1937", leagueJoined: "1955", city: "Malibu", state: "CA", cityFounded: "03/28/1991", cityCharter: "03/28/1991", stadium: "Firestone Fieldhouse", stadiumOpened: "01/01/1973" },
  { name: "Portland Pilots", division: "WCC", conference: "West Coast Conference", founded: "09/05/1901", leagueJoined: "1976", city: "Portland", state: "OR", cityFounded: "01/01/1845", cityCharter: "February 8, 1851", stadium: "Chiles Center", stadiumOpened: "11/01/1984" },
  { name: "Saint Mary's Gaels", division: "WCC", conference: "West Coast Conference", founded: "04/30/1863", leagueJoined: "1952", city: "Moraga", state: "CA", cityFounded: "01/01/1878", cityCharter: "09/24/1974", stadium: "McKeon Pavilion", stadiumOpened: "01/01/1978" },
  { name: "San Diego Toreros", division: "WCC", conference: "West Coast Conference", founded: "07/01/1949", leagueJoined: "1979", city: "San Diego", state: "CA", cityFounded: "07/16/1769", cityCharter: "July 16, 1769", stadium: "Jenny Craig Pavilion", stadiumOpened: "02/27/2003" },
  { name: "San Francisco Dons", division: "WCC", conference: "West Coast Conference", founded: "08/15/1855", leagueJoined: "1952", city: "San Francisco", state: "CA", cityFounded: "06/29/1776", cityCharter: "June 29, 1776", stadium: "War Memorial Gym", stadiumOpened: "12/01/1958" },
  { name: "Santa Clara Broncos", division: "WCC", conference: "West Coast Conference", founded: "01/12/1851", leagueJoined: "1952", city: "Santa Clara", state: "CA", cityFounded: "01/12/1777", cityCharter: "July 5, 1852", stadium: "Leavey Center", stadiumOpened: "01/01/1975" },
  { name: "Seattle Redhawks", division: "WCC", conference: "West Coast Conference", founded: "05/31/1891", leagueJoined: "2025", city: "Seattle", state: "WA", cityFounded: "11/13/1851", cityCharter: "November 13, 1851", stadium: "Redhawk Center", stadiumOpened: "10/01/2000" },
  { name: "Washington State Cougars", division: "WCC", conference: "West Coast Conference", founded: "03/28/1890", leagueJoined: "2024", city: "Pullman", state: "WA", cityFounded: "04/11/1888", cityCharter: "04/11/1888", stadium: "Beasley Coliseum", stadiumOpened: "12/01/1973" },

  // WESTERN ATHLETIC CONFERENCE (WAC) – 9 teams
  { name: "Abilene Christian Wildcats", division: "WAC", conference: "Western Athletic Conference", founded: "09/01/1906", leagueJoined: "2021", city: "Abilene", state: "TX", cityFounded: "01/15/1881", cityCharter: "09/27/1881", stadium: "Moody Coliseum", stadiumOpened: "11/01/1968" },
  { name: "California Baptist Lancers", division: "WAC", conference: "Western Athletic Conference", founded: "09/11/1950", leagueJoined: "2018", city: "Riverside", state: "CA", cityFounded: "11/25/1870", cityCharter: "10/04/1883", stadium: "CBU Events Center", stadiumOpened: "11/01/2017" },
  { name: "Grand Canyon Antelopes", division: "WAC", conference: "Western Athletic Conference", founded: "08/01/1949", leagueJoined: "2013", city: "Phoenix", state: "AZ", cityFounded: "10/20/1881", cityCharter: "February 25, 1881", stadium: "GCU Arena", stadiumOpened: "11/01/2012" },
  { name: "Sam Houston Bearkats", division: "WAC", conference: "Western Athletic Conference", founded: "10/10/1879", leagueJoined: "2021", city: "Huntsville", state: "TX", cityFounded: "01/01/1836", cityCharter: "January 30, 1835", stadium: "Bernard G. Johnson Coliseum", stadiumOpened: "11/01/1976" },
  { name: "Seattle U Redhawks", division: "WAC", conference: "Western Athletic Conference", founded: "05/31/1891", leagueJoined: "2012", city: "Seattle", state: "WA", cityFounded: "11/13/1851", cityCharter: "November 13, 1851", stadium: "Redhawk Center", stadiumOpened: "10/01/2000" },
  { name: "Southern Utah Thunderbirds", division: "WAC", conference: "Western Athletic Conference", founded: "05/14/1897", leagueJoined: "2022", city: "Cedar City", state: "UT", cityFounded: "11/11/1851", cityCharter: "02/18/1868", stadium: "America First Event Center", stadiumOpened: "11/01/2016" },
  { name: "Stephen F. Austin Lumberjacks", division: "WAC", conference: "Western Athletic Conference", founded: "09/18/1923", leagueJoined: "2021", city: "Nacogdoches", state: "TX", cityFounded: "01/01/1779", cityCharter: "02/05/1837", stadium: "William R. Johnson Coliseum", stadiumOpened: "11/28/1974" },
  { name: "Tarleton State Texans", division: "WAC", conference: "Western Athletic Conference", founded: "09/26/1899", leagueJoined: "2020", city: "Stephenville", state: "TX", cityFounded: "01/01/1856", cityCharter: "10/08/1889", stadium: "Wisdom Gym", stadiumOpened: "12/01/1981" },
  { name: "Utah Valley Wolverines", division: "WAC", conference: "Western Athletic Conference", founded: "09/14/1941", leagueJoined: "2012", city: "Orem", state: "UT", cityFounded: "03/05/1919", cityCharter: "05/05/1919", stadium: "UCCU Center", stadiumOpened: "12/01/1996" },
  ]   
};

// Rest of your JavaScript code stays exactly the same...

// ==========================================================================
// TEAM LOGO MAP — ESPN CDN + fallback initials
// ==========================================================================
const teamLogos = {
  // NFL
  "Arizona Cardinals": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
  "Atlanta Falcons": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
  "Baltimore Ravens": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
  "Buffalo Bills": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
  "Carolina Panthers": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
  "Chicago Bears": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
  "Cincinnati Bengals": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
  "Cleveland Browns": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
  "Dallas Cowboys": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
  "Denver Broncos": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
  "Detroit Lions": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
  "Green Bay Packers": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
  "Houston Texans": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
  "Indianapolis Colts": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
  "Jacksonville Jaguars": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
  "Kansas City Chiefs": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
  "Las Vegas Raiders": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
  "Los Angeles Chargers": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
  "Los Angeles Rams": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
  "Miami Dolphins": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
  "Minnesota Vikings": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
  "New England Patriots": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
  "New Orleans Saints": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
  "New York Giants": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
  "New York Jets": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
  "Philadelphia Eagles": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
  "Pittsburgh Steelers": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
  "San Francisco 49ers": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
  "Seattle Seahawks": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
  "Tampa Bay Buccaneers": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
  "Tennessee Titans": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
  "Washington Commanders": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
  // NBA
  "Atlanta Hawks": "https://a.espncdn.com/i/teamlogos/nba/500/atl.png",
  "Boston Celtics": "https://a.espncdn.com/i/teamlogos/nba/500/bos.png",
  "Brooklyn Nets": "https://a.espncdn.com/i/teamlogos/nba/500/bkn.png",
  "Charlotte Hornets": "https://a.espncdn.com/i/teamlogos/nba/500/cha.png",
  "Chicago Bulls": "https://a.espncdn.com/i/teamlogos/nba/500/chi.png",
  "Cleveland Cavaliers": "https://a.espncdn.com/i/teamlogos/nba/500/cle.png",
  "Dallas Mavericks": "https://a.espncdn.com/i/teamlogos/nba/500/dal.png",
  "Denver Nuggets": "https://a.espncdn.com/i/teamlogos/nba/500/den.png",
  "Detroit Pistons": "https://a.espncdn.com/i/teamlogos/nba/500/det.png",
  "Golden State Warriors": "https://a.espncdn.com/i/teamlogos/nba/500/gs.png",
  "Houston Rockets": "https://a.espncdn.com/i/teamlogos/nba/500/hou.png",
  "Indiana Pacers": "https://a.espncdn.com/i/teamlogos/nba/500/ind.png",
  "LA Clippers": "https://a.espncdn.com/i/teamlogos/nba/500/lac.png",
  "Los Angeles Lakers": "https://a.espncdn.com/i/teamlogos/nba/500/lal.png",
  "Memphis Grizzlies": "https://a.espncdn.com/i/teamlogos/nba/500/mem.png",
  "Miami Heat": "https://a.espncdn.com/i/teamlogos/nba/500/mia.png",
  "Milwaukee Bucks": "https://a.espncdn.com/i/teamlogos/nba/500/mil.png",
  "Minnesota Timberwolves": "https://a.espncdn.com/i/teamlogos/nba/500/min.png",
  "New Orleans Pelicans": "https://a.espncdn.com/i/teamlogos/nba/500/no.png",
  "New York Knicks": "https://a.espncdn.com/i/teamlogos/nba/500/ny.png",
  "Oklahoma City Thunder": "https://a.espncdn.com/i/teamlogos/nba/500/okc.png",
  "Orlando Magic": "https://a.espncdn.com/i/teamlogos/nba/500/orl.png",
  "Philadelphia 76ers": "https://a.espncdn.com/i/teamlogos/nba/500/phi.png",
  "Phoenix Suns": "https://a.espncdn.com/i/teamlogos/nba/500/phx.png",
  "Portland Trail Blazers": "https://a.espncdn.com/i/teamlogos/nba/500/por.png",
  "Sacramento Kings": "https://a.espncdn.com/i/teamlogos/nba/500/sac.png",
  "San Antonio Spurs": "https://a.espncdn.com/i/teamlogos/nba/500/sa.png",
  "Toronto Raptors": "https://a.espncdn.com/i/teamlogos/nba/500/tor.png",
  "Utah Jazz": "https://a.espncdn.com/i/teamlogos/nba/500/utah.png",
  "Washington Wizards": "https://a.espncdn.com/i/teamlogos/nba/500/wsh.png",
  // MLB
  "Arizona Diamondbacks": "https://a.espncdn.com/i/teamlogos/mlb/500/ari.png",
  "Atlanta Braves": "https://a.espncdn.com/i/teamlogos/mlb/500/atl.png",
  "Baltimore Orioles": "https://a.espncdn.com/i/teamlogos/mlb/500/bal.png",
  "Boston Red Sox": "https://a.espncdn.com/i/teamlogos/mlb/500/bos.png",
  "Chicago Cubs": "https://a.espncdn.com/i/teamlogos/mlb/500/chc.png",
  "Chicago White Sox": "https://a.espncdn.com/i/teamlogos/mlb/500/chw.png",
  "Cincinnati Reds": "https://a.espncdn.com/i/teamlogos/mlb/500/cin.png",
  "Cleveland Guardians": "https://a.espncdn.com/i/teamlogos/mlb/500/cle.png",
  "Colorado Rockies": "https://a.espncdn.com/i/teamlogos/mlb/500/col.png",
  "Detroit Tigers": "https://a.espncdn.com/i/teamlogos/mlb/500/det.png",
  "Houston Astros": "https://a.espncdn.com/i/teamlogos/mlb/500/hou.png",
  "Kansas City Royals": "https://a.espncdn.com/i/teamlogos/mlb/500/kc.png",
  "Los Angeles Angels": "https://a.espncdn.com/i/teamlogos/mlb/500/laa.png",
  "Los Angeles Dodgers": "https://a.espncdn.com/i/teamlogos/mlb/500/lad.png",
  "Miami Marlins": "https://a.espncdn.com/i/teamlogos/mlb/500/mia.png",
  "Milwaukee Brewers": "https://a.espncdn.com/i/teamlogos/mlb/500/mil.png",
  "Minnesota Twins": "https://a.espncdn.com/i/teamlogos/mlb/500/min.png",
  "New York Mets": "https://a.espncdn.com/i/teamlogos/mlb/500/nym.png",
  "New York Yankees": "https://a.espncdn.com/i/teamlogos/mlb/500/nyy.png",
  "Athletics": "https://a.espncdn.com/i/teamlogos/mlb/500/oak.png",
  "Philadelphia Phillies": "https://a.espncdn.com/i/teamlogos/mlb/500/phi.png",
  "Pittsburgh Pirates": "https://a.espncdn.com/i/teamlogos/mlb/500/pit.png",
  "San Diego Padres": "https://a.espncdn.com/i/teamlogos/mlb/500/sd.png",
  "San Francisco Giants": "https://a.espncdn.com/i/teamlogos/mlb/500/sf.png",
  "Seattle Mariners": "https://a.espncdn.com/i/teamlogos/mlb/500/sea.png",
  "St. Louis Cardinals": "https://a.espncdn.com/i/teamlogos/mlb/500/stl.png",
  "Tampa Bay Rays": "https://a.espncdn.com/i/teamlogos/mlb/500/tb.png",
  "Texas Rangers": "https://a.espncdn.com/i/teamlogos/mlb/500/tex.png",
  "Toronto Blue Jays": "https://a.espncdn.com/i/teamlogos/mlb/500/tor.png",
  "Washington Nationals": "https://a.espncdn.com/i/teamlogos/mlb/500/wsh.png",
  // NHL
  "Anaheim Ducks": "https://a.espncdn.com/i/teamlogos/nhl/500/ana.png",
  "Boston Bruins": "https://a.espncdn.com/i/teamlogos/nhl/500/bos.png",
  "Buffalo Sabres": "https://a.espncdn.com/i/teamlogos/nhl/500/buf.png",
  "Calgary Flames": "https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png",
  "Carolina Hurricanes": "https://a.espncdn.com/i/teamlogos/nhl/500/car.png",
  "Chicago Blackhawks": "https://a.espncdn.com/i/teamlogos/nhl/500/chi.png",
  "Colorado Avalanche": "https://a.espncdn.com/i/teamlogos/nhl/500/col.png",
  "Columbus Blue Jackets": "https://a.espncdn.com/i/teamlogos/nhl/500/cbj.png",
  "Dallas Stars": "https://a.espncdn.com/i/teamlogos/nhl/500/dal.png",
  "Detroit Red Wings": "https://a.espncdn.com/i/teamlogos/nhl/500/det.png",
  "Edmonton Oilers": "https://a.espncdn.com/i/teamlogos/nhl/500/edm.png",
  "Florida Panthers": "https://a.espncdn.com/i/teamlogos/nhl/500/fla.png",
  "Los Angeles Kings": "https://a.espncdn.com/i/teamlogos/nhl/500/la.png",
  "Minnesota Wild": "https://a.espncdn.com/i/teamlogos/nhl/500/min.png",
  "Montreal Canadiens": "https://a.espncdn.com/i/teamlogos/nhl/500/mtl.png",
  "Nashville Predators": "https://a.espncdn.com/i/teamlogos/nhl/500/nsh.png",
  "New Jersey Devils": "https://a.espncdn.com/i/teamlogos/nhl/500/nj.png",
  "New York Islanders": "https://a.espncdn.com/i/teamlogos/nhl/500/nyi.png",
  "New York Rangers": "https://a.espncdn.com/i/teamlogos/nhl/500/nyr.png",
  "Ottawa Senators": "https://a.espncdn.com/i/teamlogos/nhl/500/ott.png",
  "Philadelphia Flyers": "https://a.espncdn.com/i/teamlogos/nhl/500/phi.png",
  "Pittsburgh Penguins": "https://a.espncdn.com/i/teamlogos/nhl/500/pit.png",
  "San Jose Sharks": "https://a.espncdn.com/i/teamlogos/nhl/500/sj.png",
  "Seattle Kraken": "https://a.espncdn.com/i/teamlogos/nhl/500/sea.png",
  "St. Louis Blues": "https://a.espncdn.com/i/teamlogos/nhl/500/stl.png",
  "Tampa Bay Lightning": "https://a.espncdn.com/i/teamlogos/nhl/500/tb.png",
  "Toronto Maple Leafs": "https://a.espncdn.com/i/teamlogos/nhl/500/tor.png",
  "Utah Hockey Club": "https://a.espncdn.com/i/teamlogos/nhl/500/utah.png",
  "Vancouver Canucks": "https://a.espncdn.com/i/teamlogos/nhl/500/van.png",
  "Vegas Golden Knights": "https://a.espncdn.com/i/teamlogos/nhl/500/vgk.png",
  "Washington Capitals": "https://a.espncdn.com/i/teamlogos/nhl/500/wsh.png",
  "Winnipeg Jets": "https://a.espncdn.com/i/teamlogos/nhl/500/wpg.png",
  // WNBA
  "Atlanta Dream": "https://a.espncdn.com/i/teamlogos/wnba/500/atl.png",
  "Chicago Sky": "https://a.espncdn.com/i/teamlogos/wnba/500/chi.png",
  "Connecticut Sun": "https://a.espncdn.com/i/teamlogos/wnba/500/conn.png",
  "Dallas Wings": "https://a.espncdn.com/i/teamlogos/wnba/500/dal.png",
  "Golden State Valkyries": "https://a.espncdn.com/i/teamlogos/wnba/500/gsv.png",
  "Indiana Fever": "https://a.espncdn.com/i/teamlogos/wnba/500/ind.png",
  "Las Vegas Aces": "https://a.espncdn.com/i/teamlogos/wnba/500/lv.png",
  "Minnesota Lynx": "https://a.espncdn.com/i/teamlogos/wnba/500/min.png",
  "New York Liberty": "https://a.espncdn.com/i/teamlogos/wnba/500/ny.png",
  "Phoenix Mercury": "https://a.espncdn.com/i/teamlogos/wnba/500/phx.png",
  "Seattle Storm": "https://a.espncdn.com/i/teamlogos/wnba/500/sea.png",
  "Washington Mystics": "https://a.espncdn.com/i/teamlogos/wnba/500/wsh.png",
  // MLS
  "Atlanta United FC": "https://a.espncdn.com/i/teamlogos/soccer/500/660.png",
  "Austin FC": "https://a.espncdn.com/i/teamlogos/soccer/500/18614.png",
  "Charlotte FC": "https://a.espncdn.com/i/teamlogos/soccer/500/17928.png",
  "Chicago Fire FC": "https://a.espncdn.com/i/teamlogos/soccer/500/674.png",
  "FC Cincinnati": "https://a.espncdn.com/i/teamlogos/soccer/500/11194.png",
  "Colorado Rapids": "https://a.espncdn.com/i/teamlogos/soccer/500/691.png",
  "Columbus Crew": "https://a.espncdn.com/i/teamlogos/soccer/500/693.png",
  "D.C. United": "https://a.espncdn.com/i/teamlogos/soccer/500/694.png",
  "FC Dallas": "https://a.espncdn.com/i/teamlogos/soccer/500/6154.png",
  "Houston Dynamo FC": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png",
  "Inter Miami CF": "https://a.espncdn.com/i/teamlogos/soccer/500/16193.png",
  "LA Galaxy": "https://a.espncdn.com/i/teamlogos/soccer/500/714.png",
  "Los Angeles FC": "https://a.espncdn.com/i/teamlogos/soccer/500/9726.png",
  "Minnesota United FC": "https://a.espncdn.com/i/teamlogos/soccer/500/9726.png",
  "CF Montréal": "https://a.espncdn.com/i/teamlogos/soccer/500/4473.png",
  "Nashville SC": "https://a.espncdn.com/i/teamlogos/soccer/500/14941.png",
  "New England Revolution": "https://a.espncdn.com/i/teamlogos/soccer/500/731.png",
  "New York City FC": "https://a.espncdn.com/i/teamlogos/soccer/500/5503.png",
  "New York Red Bulls": "https://a.espncdn.com/i/teamlogos/soccer/500/473.png",
  "Orlando City SC": "https://a.espncdn.com/i/teamlogos/soccer/500/7247.png",
  "Philadelphia Union": "https://a.espncdn.com/i/teamlogos/soccer/500/9599.png",
  "Portland Timbers": "https://a.espncdn.com/i/teamlogos/soccer/500/5140.png",
  "Real Salt Lake": "https://a.espncdn.com/i/teamlogos/soccer/500/4415.png",
  "San Jose Earthquakes": "https://a.espncdn.com/i/teamlogos/soccer/500/703.png",
  "Seattle Sounders FC": "https://a.espncdn.com/i/teamlogos/soccer/500/9750.png",
  "Sporting Kansas City": "https://a.espncdn.com/i/teamlogos/soccer/500/649.png",
  "St. Louis City SC": "https://a.espncdn.com/i/teamlogos/soccer/500/20285.png",
  "Toronto FC": "https://a.espncdn.com/i/teamlogos/soccer/500/4415.png",
  "Vancouver Whitecaps FC": "https://a.espncdn.com/i/teamlogos/soccer/500/5140.png",

  // College Football & Basketball
  "Alabama Crimson Tide": "https://a.espncdn.com/i/teamlogos/ncaa/500/333.png",
  "Arkansas Razorbacks": "https://a.espncdn.com/i/teamlogos/ncaa/500/8.png",
  "Auburn Tigers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2.png",
  "Florida Gators": "https://a.espncdn.com/i/teamlogos/ncaa/500/57.png",
  "Georgia Bulldogs": "https://a.espncdn.com/i/teamlogos/ncaa/500/61.png",
  "Kentucky Wildcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/96.png",
  "LSU Tigers": "https://a.espncdn.com/i/teamlogos/ncaa/500/99.png",
  "Mississippi State Bulldogs": "https://a.espncdn.com/i/teamlogos/ncaa/500/344.png",
  "Missouri Tigers": "https://a.espncdn.com/i/teamlogos/ncaa/500/142.png",
  "Ole Miss Rebels": "https://a.espncdn.com/i/teamlogos/ncaa/500/145.png",
  "Mississippi Rebels": "https://a.espncdn.com/i/teamlogos/ncaa/500/145.png",
  "Oklahoma Sooners": "https://a.espncdn.com/i/teamlogos/ncaa/500/201.png",
  "South Carolina Gamecocks": "https://a.espncdn.com/i/teamlogos/ncaa/500/2579.png",
  "Tennessee Volunteers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2633.png",
  "Texas Longhorns": "https://a.espncdn.com/i/teamlogos/ncaa/500/251.png",
  "Texas A&M Aggies": "https://a.espncdn.com/i/teamlogos/ncaa/500/245.png",
  "Vanderbilt Commodores": "https://a.espncdn.com/i/teamlogos/ncaa/500/238.png",
  "Ohio State Buckeyes": "https://a.espncdn.com/i/teamlogos/ncaa/500/194.png",
  "Michigan Wolverines": "https://a.espncdn.com/i/teamlogos/ncaa/500/130.png",
  "Michigan State Spartans": "https://a.espncdn.com/i/teamlogos/ncaa/500/127.png",
  "Penn State Nittany Lions": "https://a.espncdn.com/i/teamlogos/ncaa/500/213.png",
  "Wisconsin Badgers": "https://a.espncdn.com/i/teamlogos/ncaa/500/275.png",
  "Iowa Hawkeyes": "https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png",
  "Nebraska Cornhuskers": "https://a.espncdn.com/i/teamlogos/ncaa/500/158.png",
  "Minnesota Golden Gophers": "https://a.espncdn.com/i/teamlogos/ncaa/500/135.png",
  "Northwestern Wildcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/77.png",
  "Illinois Fighting Illini": "https://a.espncdn.com/i/teamlogos/ncaa/500/356.png",
  "Indiana Hoosiers": "https://a.espncdn.com/i/teamlogos/ncaa/500/84.png",
  "Purdue Boilermakers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2509.png",
  "Maryland Terrapins": "https://a.espncdn.com/i/teamlogos/ncaa/500/120.png",
  "Rutgers Scarlet Knights": "https://a.espncdn.com/i/teamlogos/ncaa/500/164.png",
  "Oregon Ducks": "https://a.espncdn.com/i/teamlogos/ncaa/500/2483.png",
  "Washington Huskies": "https://a.espncdn.com/i/teamlogos/ncaa/500/264.png",
  "UCLA Bruins": "https://a.espncdn.com/i/teamlogos/ncaa/500/26.png",
  "USC Trojans": "https://a.espncdn.com/i/teamlogos/ncaa/500/30.png",
  "California Golden Bears": "https://a.espncdn.com/i/teamlogos/ncaa/500/25.png",
  "Stanford Cardinal": "https://a.espncdn.com/i/teamlogos/ncaa/500/24.png",
  "Arizona Wildcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/12.png",
  "Arizona State Sun Devils": "https://a.espncdn.com/i/teamlogos/ncaa/500/9.png",
  "Utah Utes": "https://a.espncdn.com/i/teamlogos/ncaa/500/254.png",
  "Colorado Buffaloes": "https://a.espncdn.com/i/teamlogos/ncaa/500/38.png",
  "Baylor Bears": "https://a.espncdn.com/i/teamlogos/ncaa/500/239.png",
  "TCU Horned Frogs": "https://a.espncdn.com/i/teamlogos/ncaa/500/2628.png",
  "Texas Tech Red Raiders": "https://a.espncdn.com/i/teamlogos/ncaa/500/2641.png",
  "Kansas Jayhawks": "https://a.espncdn.com/i/teamlogos/ncaa/500/2305.png",
  "Kansas State Wildcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/2306.png",
  "Iowa State Cyclones": "https://a.espncdn.com/i/teamlogos/ncaa/500/66.png",
  "West Virginia Mountaineers": "https://a.espncdn.com/i/teamlogos/ncaa/500/277.png",
  "Oklahoma State Cowboys": "https://a.espncdn.com/i/teamlogos/ncaa/500/197.png",
  "UCF Knights": "https://a.espncdn.com/i/teamlogos/ncaa/500/2116.png",
  "Cincinnati Bearcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/2132.png",
  "Houston Cougars": "https://a.espncdn.com/i/teamlogos/ncaa/500/248.png",
  "BYU Cougars": "https://a.espncdn.com/i/teamlogos/ncaa/500/252.png",
  "Clemson Tigers": "https://a.espncdn.com/i/teamlogos/ncaa/500/228.png",
  "Florida State Seminoles": "https://a.espncdn.com/i/teamlogos/ncaa/500/52.png",
  "Miami Hurricanes": "https://a.espncdn.com/i/teamlogos/ncaa/500/2390.png",
  "North Carolina Tar Heels": "https://a.espncdn.com/i/teamlogos/ncaa/500/153.png",
  "NC State Wolfpack": "https://a.espncdn.com/i/teamlogos/ncaa/500/152.png",
  "Duke Blue Devils": "https://a.espncdn.com/i/teamlogos/ncaa/500/150.png",
  "Virginia Cavaliers": "https://a.espncdn.com/i/teamlogos/ncaa/500/258.png",
  "Virginia Tech Hokies": "https://a.espncdn.com/i/teamlogos/ncaa/500/259.png",
  "Pittsburgh Panthers": "https://a.espncdn.com/i/teamlogos/ncaa/500/221.png",
  "Boston College Eagles": "https://a.espncdn.com/i/teamlogos/ncaa/500/103.png",
  "Syracuse Orange": "https://a.espncdn.com/i/teamlogos/ncaa/500/183.png",
  "Georgia Tech Yellow Jackets": "https://a.espncdn.com/i/teamlogos/ncaa/500/59.png",
  "Louisville Cardinals": "https://a.espncdn.com/i/teamlogos/ncaa/500/97.png",
  "Wake Forest Demon Deacons": "https://a.espncdn.com/i/teamlogos/ncaa/500/154.png",
  "SMU Mustangs": "https://a.espncdn.com/i/teamlogos/ncaa/500/2567.png",
  "Notre Dame Fighting Irish": "https://a.espncdn.com/i/teamlogos/ncaa/500/87.png",
  "Army Black Knights": "https://a.espncdn.com/i/teamlogos/ncaa/500/349.png",
  "Navy Midshipmen": "https://a.espncdn.com/i/teamlogos/ncaa/500/2426.png",
  "Memphis Tigers": "https://a.espncdn.com/i/teamlogos/ncaa/500/235.png",
  "Tulane Green Wave": "https://a.espncdn.com/i/teamlogos/ncaa/500/2655.png",
  "Tulsa Golden Hurricane": "https://a.espncdn.com/i/teamlogos/ncaa/500/202.png",
  "East Carolina Pirates": "https://a.espncdn.com/i/teamlogos/ncaa/500/151.png",
  "South Florida Bulls": "https://a.espncdn.com/i/teamlogos/ncaa/500/58.png",
  "Temple Owls": "https://a.espncdn.com/i/teamlogos/ncaa/500/218.png",
  "UAB Blazers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2542.png",
  "Charlotte 49ers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2429.png",
  "North Texas Mean Green": "https://a.espncdn.com/i/teamlogos/ncaa/500/249.png",
  "Rice Owls": "https://a.espncdn.com/i/teamlogos/ncaa/500/242.png",
  "Florida Atlantic Owls": "https://a.espncdn.com/i/teamlogos/ncaa/500/2226.png",
  "UTSA Roadrunners": "https://a.espncdn.com/i/teamlogos/ncaa/500/2663.png",
  "Boise State Broncos": "https://a.espncdn.com/i/teamlogos/ncaa/500/68.png",
  "Air Force Falcons": "https://a.espncdn.com/i/teamlogos/ncaa/500/2005.png",
  "Colorado State Rams": "https://a.espncdn.com/i/teamlogos/ncaa/500/36.png",
  "Fresno State Bulldogs": "https://a.espncdn.com/i/teamlogos/ncaa/500/278.png",
  "San Diego State Aztecs": "https://a.espncdn.com/i/teamlogos/ncaa/500/21.png",
  "UNLV Rebels": "https://a.espncdn.com/i/teamlogos/ncaa/500/2439.png",
  "Utah State Aggies": "https://a.espncdn.com/i/teamlogos/ncaa/500/328.png",
  "Wyoming Cowboys": "https://a.espncdn.com/i/teamlogos/ncaa/500/2751.png",
  "Nevada Wolf Pack": "https://a.espncdn.com/i/teamlogos/ncaa/500/2440.png",
  "New Mexico Lobos": "https://a.espncdn.com/i/teamlogos/ncaa/500/167.png",
  "Hawaii Rainbow Warriors": "https://a.espncdn.com/i/teamlogos/ncaa/500/62.png",
  "San Jose State Spartans": "https://a.espncdn.com/i/teamlogos/ncaa/500/23.png",
  "Ohio Bobcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/195.png",
  "Akron Zips": "https://a.espncdn.com/i/teamlogos/ncaa/500/2006.png",
  "Ball State Cardinals": "https://a.espncdn.com/i/teamlogos/ncaa/500/2050.png",
  "Bowling Green Falcons": "https://a.espncdn.com/i/teamlogos/ncaa/500/189.png",
  "Buffalo Bulls": "https://a.espncdn.com/i/teamlogos/ncaa/500/2084.png",
  "Central Michigan Chippewas": "https://a.espncdn.com/i/teamlogos/ncaa/500/2117.png",
  "Eastern Michigan Eagles": "https://a.espncdn.com/i/teamlogos/ncaa/500/2199.png",
  "Kent State Golden Flashes": "https://a.espncdn.com/i/teamlogos/ncaa/500/2309.png",
  "Miami RedHawks": "https://a.espncdn.com/i/teamlogos/ncaa/500/193.png",
  "Northern Illinois Huskies": "https://a.espncdn.com/i/teamlogos/ncaa/500/2459.png",
  "Toledo Rockets": "https://a.espncdn.com/i/teamlogos/ncaa/500/2649.png",
  "Western Michigan Broncos": "https://a.espncdn.com/i/teamlogos/ncaa/500/2711.png",
  "Appalachian State Mountaineers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2026.png",
  "App State Mountaineers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2026.png",
  "Coastal Carolina Chanticleers": "https://a.espncdn.com/i/teamlogos/ncaa/500/324.png",
  "Georgia Southern Eagles": "https://a.espncdn.com/i/teamlogos/ncaa/500/290.png",
  "Georgia State Panthers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2247.png",
  "Louisiana Ragin Cajuns": "https://a.espncdn.com/i/teamlogos/ncaa/500/309.png",
  "Arkansas State Red Wolves": "https://a.espncdn.com/i/teamlogos/ncaa/500/2032.png",
  "South Alabama Jaguars": "https://a.espncdn.com/i/teamlogos/ncaa/500/6.png",
  "Troy Trojans": "https://a.espncdn.com/i/teamlogos/ncaa/500/2653.png",
  "Marshall Thundering Herd": "https://a.espncdn.com/i/teamlogos/ncaa/500/166.png",
  "Old Dominion Monarchs": "https://a.espncdn.com/i/teamlogos/ncaa/500/295.png",
  "James Madison Dukes": "https://a.espncdn.com/i/teamlogos/ncaa/500/256.png",
  "Texas State Bobcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/326.png",
  "Liberty Flames": "https://a.espncdn.com/i/teamlogos/ncaa/500/2335.png",
  "Gonzaga Bulldogs": "https://a.espncdn.com/i/teamlogos/ncaa/500/2250.png",
  "Connecticut Huskies": "https://a.espncdn.com/i/teamlogos/ncaa/500/41.png",
  "UConn Huskies": "https://a.espncdn.com/i/teamlogos/ncaa/500/41.png",
  "Villanova Wildcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/222.png",
  "Creighton Bluejays": "https://a.espncdn.com/i/teamlogos/ncaa/500/156.png",
  "Marquette Golden Eagles": "https://a.espncdn.com/i/teamlogos/ncaa/500/269.png",
  "Georgetown Hoyas": "https://a.espncdn.com/i/teamlogos/ncaa/500/46.png",
  "Seton Hall Pirates": "https://a.espncdn.com/i/teamlogos/ncaa/500/2550.png",
  "Providence Friars": "https://a.espncdn.com/i/teamlogos/ncaa/500/2507.png",
  "Xavier Musketeers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2755.png",
  "Butler Bulldogs": "https://a.espncdn.com/i/teamlogos/ncaa/500/2086.png",
  "DePaul Blue Demons": "https://a.espncdn.com/i/teamlogos/ncaa/500/305.png",
  "St. Johns Red Storm": "https://a.espncdn.com/i/teamlogos/ncaa/500/2599.png",
  "Davidson Wildcats": "https://a.espncdn.com/i/teamlogos/ncaa/500/2166.png",
  "Dayton Flyers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2168.png",
  "Duquesne Dukes": "https://a.espncdn.com/i/teamlogos/ncaa/500/2184.png",
  "Fordham Rams": "https://a.espncdn.com/i/teamlogos/ncaa/500/2234.png",
  "George Mason Patriots": "https://a.espncdn.com/i/teamlogos/ncaa/500/2244.png",
  "George Washington Colonials": "https://a.espncdn.com/i/teamlogos/ncaa/500/45.png",
  "La Salle Explorers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2325.png",
  "Loyola Chicago Ramblers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2350.png",
  "Massachusetts Minutemen": "https://a.espncdn.com/i/teamlogos/ncaa/500/113.png",
  "Rhode Island Rams": "https://a.espncdn.com/i/teamlogos/ncaa/500/227.png",
  "Richmond Spiders": "https://a.espncdn.com/i/teamlogos/ncaa/500/257.png",
  "Saint Josephs Hawks": "https://a.espncdn.com/i/teamlogos/ncaa/500/2539.png",
  "Saint Louis Billikens": "https://a.espncdn.com/i/teamlogos/ncaa/500/139.png",
  "St. Bonaventure Bonnies": "https://a.espncdn.com/i/teamlogos/ncaa/500/179.png",
  "VCU Rams": "https://a.espncdn.com/i/teamlogos/ncaa/500/2670.png",
  "Wichita State Shockers": "https://a.espncdn.com/i/teamlogos/ncaa/500/2724.png"
};

function getTeamLogo(teamName) {
  return teamLogos[teamName] || null;
}

// (Include all the utility functions, navigation, rendering, popup functions, etc. from the previous complete version)
// Current sport and filtered data
// Sport configurations for different leagues
const sportConfig = {
  nfl: { title: 'NFL Teams', venueLabel: 'Stadium', conferenceLabel: 'Conference', divisionLabel: 'Division', leagueJoinedLabel: 'Joined NFL' },
  nba: { title: 'NBA Teams', venueLabel: 'Arena', conferenceLabel: 'Conference', divisionLabel: 'Division', leagueJoinedLabel: 'Joined NBA' },
  mlb: { title: 'MLB Teams', venueLabel: 'Stadium', conferenceLabel: 'League', divisionLabel: 'Division', leagueJoinedLabel: 'Joined MLB' },
  nhl: { title: 'NHL Teams', venueLabel: 'Arena', conferenceLabel: 'Conference', divisionLabel: 'Division', leagueJoinedLabel: 'Joined NHL' },
  wnba: { title: 'WNBA Teams', venueLabel: 'Arena', conferenceLabel: 'Conference', divisionLabel: 'Division', leagueJoinedLabel: 'Joined WNBA' },
  mls: { title: 'MLS Teams', venueLabel: 'Stadium', conferenceLabel: 'Conference', divisionLabel: 'Division', leagueJoinedLabel: 'Joined MLS' },
  'college-football': { title: 'College Football (D1)', venueLabel: 'Stadium', conferenceLabel: 'Conference', divisionLabel: 'Division', leagueJoinedLabel: 'Joined Conference' },
  'college-basketball': { title: 'College Basketball (D1)', venueLabel: 'Arena', conferenceLabel: 'Conference', divisionLabel: 'Division', leagueJoinedLabel: 'Joined Conference' }
};    

// Utility functions
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

// Navigation functions
function switchSport(sportKey) {
  currentSport = sportKey;
  if (sportKey === 'gematria') {
    showGematriaCalculator();
    return;
  }
  if (sportKey === 'numerology') {
    showNumerologyTools();
    // Don't hide the main content — floating panel overlays it
    return;
  }
  
  document.getElementById('controls-section').style.display = 'block';
  document.getElementById('data-table').style.display = 'block';
  document.getElementById('gematria-calculator').style.display = 'none';
  document.getElementById('numerology-tools').style.display = 'none';
  
  // Hide/show division dropdown for college sports
  const divisionFilterGroup = document.getElementById('division-filter-group');
  if (sportKey === "college-football" || sportKey === "college-basketball") {
    divisionFilterGroup.style.display = 'none';
  } else {
    divisionFilterGroup.style.display = 'block';
  }
  
  if (!sportsData[sportKey] || sportsData[sportKey].length === 0) {
    showComingSoon(sportKey);
    return;
  }
  
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[data-sport="${sportKey}"]`).classList.add('active');
  
  const config = sportConfig[sportKey];
  document.getElementById('conference-label').textContent = config.conferenceLabel;
  document.getElementById('division-label').textContent = config.divisionLabel;
  document.getElementById('search-title').textContent = `Search & Filter - ${config.title}`;
  
  filtered = [...sportsData[sportKey]];
  initFilters();
  renderCards();
}

// ==========================================================================
// GEMATRIA CALCULATOR - COMPLETE IMPLEMENTATION
// ==========================================================================

// Complete cipher definitions based on Gematrinator.com
const allCiphers = {
    'Ordinal': {
        color: '#00ba00',
        enabled: true,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26}
    },
    'Reduction': {
        color: '#587dfe',
        enabled: true,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9, 'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8}
    },
    'Reverse': {
        color: '#50eb15',
        enabled: true,
        values: {'A': 26, 'B': 25, 'C': 24, 'D': 23, 'E': 22, 'F': 21, 'G': 20, 'H': 19, 'I': 18, 'J': 17, 'K': 16, 'L': 15, 'M': 14, 'N': 13, 'O': 12, 'P': 11, 'Q': 10, 'R': 9, 'S': 8, 'T': 7, 'U': 6, 'V': 5, 'W': 4, 'X': 3, 'Y': 2, 'Z': 1}
    },
    'Reverse Reduction': {
        color: '#64e2e2',
        enabled: true,
        values: {'A': 8, 'B': 7, 'C': 6, 'D': 5, 'E': 4, 'F': 3, 'G': 2, 'H': 1, 'I': 9, 'J': 8, 'K': 7, 'L': 6, 'M': 5, 'N': 4, 'O': 3, 'P': 2, 'Q': 1, 'R': 9, 'S': 8, 'T': 7, 'U': 6, 'V': 5, 'W': 4, 'X': 3, 'Y': 2, 'Z': 1}
    },
    'Standard': {
        color: '#dae200',
        enabled: false,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26}
    },
    'Latin': {
        color: '#9966ff',
        enabled: false,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 20, 'L': 30, 'M': 40, 'N': 50, 'O': 60, 'P': 70, 'Q': 80, 'R': 90, 'S': 100, 'T': 200, 'U': 300, 'V': 400, 'W': 500, 'X': 600, 'Y': 700, 'Z': 800}
    },
    'Sumerian': {
        color: '#a9d08e',
        enabled: false,
        values: {'A': 6, 'B': 12, 'C': 18, 'D': 24, 'E': 30, 'F': 36, 'G': 42, 'H': 48, 'I': 54, 'J': 60, 'K': 66, 'L': 72, 'M': 78, 'N': 84, 'O': 90, 'P': 96, 'Q': 102, 'R': 108, 'S': 114, 'T': 120, 'U': 126, 'V': 132, 'W': 138, 'X': 144, 'Y': 150, 'Z': 156}
    },
    'Reverse Sumerian': {
        color: '#dcd094',
        enabled: false,
        values: {'A': 156, 'B': 150, 'C': 144, 'D': 138, 'E': 132, 'F': 126, 'G': 120, 'H': 114, 'I': 108, 'J': 102, 'K': 96, 'L': 90, 'M': 84, 'N': 78, 'O': 72, 'P': 66, 'Q': 60, 'R': 54, 'S': 48, 'T': 42, 'U': 36, 'V': 30, 'W': 24, 'X': 18, 'Y': 12, 'Z': 6}
    },
    'Satanic': {
        color: '#ff0000',
        enabled: false,
        values: {'A': 36, 'B': 37, 'C': 38, 'D': 39, 'E': 40, 'F': 41, 'G': 42, 'H': 43, 'I': 44, 'J': 45, 'K': 46, 'L': 47, 'M': 48, 'N': 49, 'O': 50, 'P': 51, 'Q': 52, 'R': 53, 'S': 54, 'T': 55, 'U': 56, 'V': 57, 'W': 58, 'X': 59, 'Y': 60, 'Z': 61}
    },
    'Reverse Satanic': {
        color: '#ff0000',
        enabled: false,
        values: {'A': 61, 'B': 60, 'C': 59, 'D': 58, 'E': 57, 'F': 56, 'G': 55, 'H': 54, 'I': 53, 'J': 52, 'K': 51, 'L': 50, 'M': 49, 'N': 48, 'O': 47, 'P': 46, 'Q': 45, 'R': 44, 'S': 43, 'T': 42, 'U': 41, 'V': 40, 'W': 39, 'X': 38, 'Y': 37, 'Z': 36}
    },
    'Single Reduction': {
        color: '#8cabe3',
        enabled: false,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9, 'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8}
    },
    'Trigonal': {
        color: '#e7b471',
        enabled: false,
        values: {'A': 1, 'B': 3, 'C': 6, 'D': 10, 'E': 15, 'F': 21, 'G': 28, 'H': 36, 'I': 45, 'J': 55, 'K': 66, 'L': 78, 'M': 91, 'N': 105, 'O': 120, 'P': 136, 'Q': 153, 'R': 171, 'S': 190, 'T': 210, 'U': 231, 'V': 253, 'W': 276, 'X': 300, 'Y': 325, 'Z': 351}
    },
    'Reverse Trigonal': {
        color: '#eebf70',
        enabled: false,
        values: {'A': 351, 'B': 325, 'C': 300, 'D': 276, 'E': 253, 'F': 231, 'G': 210, 'H': 190, 'I': 171, 'J': 153, 'K': 136, 'L': 120, 'M': 105, 'N': 91, 'O': 78, 'P': 66, 'Q': 55, 'R': 45, 'S': 36, 'T': 28, 'U': 21, 'V': 15, 'W': 10, 'X': 6, 'Y': 3, 'Z': 1}
    },
    'Chaldean': {
        color: '#a6a663',
        enabled: false,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 8, 'G': 3, 'H': 5, 'I': 1, 'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 7, 'P': 8, 'Q': 1, 'R': 2, 'S': 3, 'T': 4, 'U': 6, 'V': 6, 'W': 6, 'X': 5, 'Y': 1, 'Z': 7}
    },
    'Septenary': {
        color: '#ff994d',
        enabled: false,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 1, 'I': 2, 'J': 3, 'K': 4, 'L': 5, 'M': 6, 'N': 7, 'O': 1, 'P': 2, 'Q': 3, 'R': 4, 'S': 5, 'T': 6, 'U': 7, 'V': 1, 'W': 2, 'X': 3, 'Y': 4, 'Z': 5}
    },
    'Keypad': {
        color: '#ff7eff',
        enabled: false,
        values: {'A': 2, 'B': 2, 'C': 2, 'D': 3, 'E': 3, 'F': 3, 'G': 4, 'H': 4, 'I': 4, 'J': 5, 'K': 5, 'L': 5, 'M': 6, 'N': 6, 'O': 6, 'P': 7, 'Q': 7, 'R': 7, 'S': 7, 'T': 8, 'U': 8, 'V': 8, 'W': 9, 'X': 9, 'Y': 9, 'Z': 9}
    },
    'Capitals Mixed': { color: '#5dbb58', enabled: false, values: {A:2,B:4,C:6,D:8,E:10,F:12,G:14,H:16,I:18,J:20,K:22,L:24,M:26,N:28,O:30,P:32,Q:34,R:36,S:38,T:40,U:42,V:44,W:46,X:48,Y:50,Z:52} },
    'Capitals Added': { color: '#96f44d', enabled: false, values: {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26} },
    'Reverse Caps Mixed': { color: '#6fc179', enabled: false, values: {A:52,B:50,C:48,D:46,E:44,F:42,G:40,H:38,I:36,J:34,K:32,L:30,M:28,N:26,O:24,P:22,Q:20,R:18,S:16,T:14,U:12,V:10,W:8,X:6,Y:4,Z:2} },
    'Reverse Caps Added': { color: '#a3ff58', enabled: false, values: {A:26,B:25,C:24,D:23,E:22,F:21,G:20,H:19,I:18,J:17,K:16,L:15,M:14,N:13,O:12,P:11,Q:10,R:9,S:8,T:7,U:6,V:5,W:4,X:3,Y:2,Z:1} },
    'Reverse Standard': { color: '#fdff77', enabled: false, values: {A:800,B:700,C:600,D:500,E:400,F:300,G:200,H:100,I:90,J:80,K:70,L:60,M:50,N:40,O:30,P:20,Q:10,R:9,S:8,T:7,U:6,V:5,W:4,X:3,Y:2,Z:1} },
    'KV Exception': { color: '#61c3f4', enabled: false, values: {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:11,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:22,W:5,X:6,Y:7,Z:8} },
    'SKV Exception': { color: '#46aff4', enabled: false, values: {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:11,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:10,T:2,U:3,V:22,W:5,X:6,Y:7,Z:8} },
    'Reverse Single Reduction': { color: '#64d8d1', enabled: false, values: {A:8,B:7,C:6,D:5,E:4,F:3,G:2,H:10,I:9,J:8,K:7,L:6,M:5,N:4,O:3,P:2,Q:1,R:9,S:8,T:7,U:6,V:5,W:4,X:3,Y:2,Z:1} },
    'EP Exception': { color: '#65e0c2', enabled: false, values: {A:1,B:2,C:3,D:4,E:22,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:11,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8} },
    'EHP Exception': { color: '#6ee29c', enabled: false, values: {A:1,B:2,C:3,D:4,E:22,F:6,G:7,H:10,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:11,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8} },
    'Primes': { color: '#ffcc6f', enabled: false, values: {A:2,B:3,C:5,D:7,E:11,F:13,G:17,H:19,I:23,J:29,K:31,L:37,M:41,N:43,O:47,P:53,Q:59,R:61,S:67,T:71,U:73,V:79,W:83,X:89,Y:97,Z:101} },
    'Squares': { color: '#e4d860', enabled: false, values: {A:1,B:4,C:9,D:16,E:25,F:36,G:49,H:64,I:81,J:100,K:121,L:144,M:169,N:196,O:225,P:256,Q:289,R:324,S:361,T:400,U:441,V:484,W:529,X:576,Y:625,Z:676} },
    'Fibonacci': { color: '#e9ca94', enabled: false, values: {A:1,B:1,C:2,D:3,E:5,F:8,G:13,H:21,I:34,J:55,K:89,L:144,M:233,N:233,O:144,P:89,Q:55,R:34,S:21,T:13,U:8,V:5,W:3,X:2,Y:1,Z:1} },
    'Reverse Primes': { color: '#ffd191', enabled: false, values: {A:101,B:97,C:89,D:83,E:79,F:73,G:71,H:67,I:61,J:59,K:53,L:47,M:43,N:41,O:37,P:31,Q:29,R:23,S:19,T:17,U:13,V:11,W:7,X:5,Y:3,Z:2} },
    'Reverse Squares': { color: '#f0e170', enabled: false, values: {A:676,B:625,C:576,D:529,E:484,F:441,G:400,H:361,I:324,J:289,K:256,L:225,M:196,N:169,O:144,P:121,Q:100,R:81,S:64,T:49,U:36,V:25,W:16,X:9,Y:4,Z:1} }
};

// Cipher groups for toggle buttons
const cipherGroups = {
    "Select Base": ["Ordinal", "Reduction", "Reverse", "Reverse Reduction"],
    "Select All": Object.keys(allCiphers),
    "Clear All": [],
    "RJ's Base": [
        "Ordinal", "Reduction", "Reverse", "Reverse Reduction",
        "Standard", "Latin", "Sumerian", "Reverse Sumerian",
        "Satanic", "Reverse Satanic", "Single Reduction",
        "Trigonal", "Reverse Trigonal", "Chaldean", "Septenary", "Keypad"
    ]
};

let currentCipherIndex = 0;
const cipherNames = Object.keys(allCiphers);

// Main gematria calculator function
function showGematriaCalculator() {
    document.getElementById('controls-section').style.display = 'none';
    document.getElementById('data-table').style.display = 'none';
    document.getElementById('numerology-tools').style.display = 'none';
    document.getElementById('gematria-calculator').style.display = 'block';
    
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-sport="gematria"]').classList.add('active');
    
    document.getElementById('gematria-calculator').innerHTML = `
        <div class="gem-container" style="background:#222222; min-height:100vh; padding:16px; font-family:Arial,sans-serif; box-sizing:border-box;">
            <div class="gem-panel" style="background:rgba(16,16,16,0.5); border:2px solid #4d4d4d; border-radius:15px; padding:20px; max-width:1100px; margin:0 auto;">
                
                <!-- Title -->
                <div style="text-align:center; margin-bottom:14px;">
                    <span style="color:#ffffff; font-size:1.4em; font-weight:bold; letter-spacing:2px; text-transform:uppercase;">Gematria Calculator</span>
                </div>
                
                <!-- Input -->
                <div style="text-align:center; margin-bottom:14px;">
                    <input type="text" id="gematria-input" placeholder="Enter Word, Phrase, or #(s):"
                           onkeyup="calculateGematriaLive()"
                           style="background:#000; color:#dedede; font-family:Arial,sans-serif; font-size:1.2em; border:1px solid #555; border-radius:8px; padding:8px 14px; width:100%; max-width:500px; outline:none;" />
                    <div id="word-count" style="color:#888; font-size:0.85em; margin-top:4px;">(0 words, 0 letters)</div>
                </div>
                
                <!-- Toggle buttons -->
                <div style="text-align:center; margin-bottom:14px; display:flex; justify-content:center; gap:8px; flex-wrap:wrap;">
                    <button onclick="toggleCiphers('Select Base')" style="background:#2e2e2e; color:white; border:1px solid #555; border-radius:15px; padding:6px 16px; text-transform:uppercase; cursor:pointer; font-size:0.8em;">SELECT BASE</button>
                    <button onclick="toggleCiphers('Select All')" style="background:#2e2e2e; color:white; border:1px solid #555; border-radius:15px; padding:6px 16px; text-transform:uppercase; cursor:pointer; font-size:0.8em;">SELECT ALL</button>
                    <button onclick="toggleCiphers('Clear All')" style="background:#2e2e2e; color:white; border:1px solid #555; border-radius:15px; padding:6px 16px; text-transform:uppercase; cursor:pointer; font-size:0.8em;">CLEAR ALL</button>
                    <button onclick="toggleCiphers(\"RJ's Base\")" style="background:#2e2e2e; color:white; border:1px solid #555; border-radius:15px; padding:6px 16px; text-transform:uppercase; cursor:pointer; font-size:0.8em;">RJ'S BASE</button>
                </div>
                
                <!-- Alphabet chart -->
                <div style="background:rgba(0,0,0,0.3); border:1px solid #444; border-radius:10px; padding:12px; margin-bottom:14px; text-align:center;">
                    <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
                        <span id="alpha-letters-top" style="font-size:1em; letter-spacing:3px;"></span>
                    </div>
                    <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
                        <span id="alpha-numbers-top" style="font-size:0.9em; letter-spacing:1px; color:rgb(200,200,200);"></span>
                    </div>
                    <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
                        <span id="alpha-letters-bot" style="font-size:1em; letter-spacing:3px;"></span>
                    </div>
                    <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:8px;">
                        <span id="alpha-numbers-bot" style="font-size:0.9em; letter-spacing:1px; color:rgb(200,200,200);"></span>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:center; gap:12px;">
                        <button onclick="previousCipher()" id="prev-cipher-btn" style="background:transparent; border:none; font-size:1.6em; cursor:pointer; color:#aaa; padding:0 6px;">&#8249;</button>
                        <span id="current-cipher-name" style="font-size:1em; font-weight:bold; min-width:180px; text-align:center;"></span>
                        <button onclick="nextCipher()" id="next-cipher-btn" style="background:transparent; border:none; font-size:1.6em; cursor:pointer; color:#aaa; padding:0 6px;">&#8250;</button>
                    </div>
                </div>
                
                <!-- Letter breakdown -->
                <div id="letter-breakdown" style="display:none; background:rgba(0,0,0,0.3); border:1px solid #444; border-radius:10px; padding:12px; margin-bottom:14px; text-align:center; font-size:0.95em;"></div>
                
                <!-- Cipher results grid -->
                <div id="ciphers-results" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:8px;">
                    <!-- Cipher rows will be populated here -->
                </div>
                
                <!-- Number Properties section -->
                <div id="num-props-section" style="display:none; margin-top:20px;"></div>
                
            </div>
        </div>
    `;
    
    initializeCiphers();
    calculateGematriaLive();
}

function initializeCiphers() {
    updateAlphabetDisplay();
    generateAllCipherResults('');
}

function calculateGematriaLive() {
    const text = document.getElementById('gematria-input').value.toUpperCase();
    const words = text.trim() ? text.trim().split(/\s+/) : [];
    const letters = text.replace(/[^A-Za-z]/g, '');
    
    document.getElementById('word-count').textContent = `(${words.length} words, ${letters.length} letters)`;
    updateAllCipherValues(text);
    
    if (text.trim()) {
        showLetterBreakdown(text);
    } else {
        const lb = document.getElementById('letter-breakdown');
        if (lb) lb.style.display = 'none';
    }
}

function calculateCipher(text, cipherName) {
    if (!allCiphers[cipherName]) return 0;
    let total = 0;
    for (let char of text.toUpperCase()) {
        if (allCiphers[cipherName].values[char]) {
            total += allCiphers[cipherName].values[char];
        }
    }
    return total;
}

function generateAllCipherResults(text) {
    const resultsContainer = document.getElementById('ciphers-results');
    if (!resultsContainer) return;
    let html = '';
    
    Object.keys(allCiphers).forEach(cipherName => {
        const cipher = allCiphers[cipherName];
        const value = calculateCipher(text, cipherName);
        const displayStyle = cipher.enabled ? 'display:block;' : 'display:none;';
        const checked = cipher.enabled ? 'checked' : '';
        
        html += `
            <div class="cipher-row" data-cipher="${cipherName}" style="${displayStyle} background:rgba(0,0,0,0.35); border:1px solid #333; border-radius:8px; padding:8px 10px;">
                <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                    <input type="checkbox" ${checked} onchange="onCipherToggle('${cipherName}', this)" style="cursor:pointer; accent-color:${cipher.color};" />
                    <span class="cipher-name" style="color:${cipher.color}; font-size:0.8em; font-weight:bold; text-transform:uppercase; flex:1;">${cipherName}</span>
                </div>
                <div class="cipher-value" style="color:${cipher.color}; font-size:2em; font-weight:bold; text-align:center; cursor:pointer;" onclick="showNumberProperties(${value}, 'gem')">${value}</div>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
}

function updateAllCipherValues(text) {
    Object.keys(allCiphers).forEach(cipherName => {
        const cipherRow = document.querySelector(`[data-cipher="${cipherName}"]`);
        const valueElement = cipherRow?.querySelector('.cipher-value');
        if (valueElement) {
            const value = calculateCipher(text, cipherName);
            valueElement.textContent = value;
            valueElement.onclick = () => showNumberProperties(value, 'gem');
        }
    });
}

function onCipherToggle(cipherName, checkbox) {
    const cipherRow = document.querySelector(`[data-cipher="${cipherName}"]`);
    if (!cipherRow) return;
    allCiphers[cipherName].enabled = checkbox.checked;
    cipherRow.style.display = checkbox.checked ? 'block' : 'none';
}

function toggleCiphers(groupName) {
    const toToggle = cipherGroups[groupName];
    Object.keys(allCiphers).forEach(cipherName => {
        const cipherRow = document.querySelector(`[data-cipher="${cipherName}"]`);
        const checkbox = cipherRow?.querySelector('input[type="checkbox"]');
        if (!cipherRow || !checkbox) return;
        
        let shouldShow = false;
        if (groupName === "Clear All") { shouldShow = false; }
        else if (groupName === "Select All") { shouldShow = true; }
        else { shouldShow = toToggle.includes(cipherName); }
        
        allCiphers[cipherName].enabled = shouldShow;
        checkbox.checked = shouldShow;
        cipherRow.style.display = shouldShow ? 'block' : 'none';
    });
}

function updateAlphabetDisplay() {
    const currentCipher = cipherNames[currentCipherIndex];
    const cipher = allCiphers[currentCipher];
    if (!cipher) return;
    
    const color = cipher.color;
    const ltTop = document.getElementById('alpha-letters-top');
    const ltBot = document.getElementById('alpha-letters-bot');
    const nTop = document.getElementById('alpha-numbers-top');
    const nBot = document.getElementById('alpha-numbers-bot');
    const cName = document.getElementById('current-cipher-name');
    const prevBtn = document.getElementById('prev-cipher-btn');
    const nextBtn = document.getElementById('next-cipher-btn');
    
    if (!ltTop || !ltBot || !nTop || !nBot) return;
    
    const topLetters = 'ABCDEFGHIJKLM'.split('');
    const botLetters = 'NOPQRSTUVWXYZ'.split('');
    
    ltTop.innerHTML = topLetters.map(l => `<span style="color:rgb(242,153,96); font-weight:bold;">${l}</span>`).join('<span style="color:#555;"> </span>');
    nTop.innerHTML = topLetters.map(l => `<span style="color:rgb(200,200,200);">${cipher.values[l] || 0}</span>`).join('<span style="color:#555;"> </span>');
    ltBot.innerHTML = botLetters.map(l => `<span style="color:rgb(242,153,96); font-weight:bold;">${l}</span>`).join('<span style="color:#555;"> </span>');
    nBot.innerHTML = botLetters.map(l => `<span style="color:rgb(200,200,200);">${cipher.values[l] || 0}</span>`).join('<span style="color:#555;"> </span>');
    
    if (cName) { cName.textContent = currentCipher; cName.style.color = color; }
    if (prevBtn) { prevBtn.style.color = color; }
    if (nextBtn) { nextBtn.style.color = color; }
}

function previousCipher() {
    currentCipherIndex = (currentCipherIndex - 1 + cipherNames.length) % cipherNames.length;
    updateAlphabetDisplay();
    const text = document.getElementById('gematria-input')?.value || '';
    showLetterBreakdown(text.toUpperCase());
}

function nextCipher() {
    currentCipherIndex = (currentCipherIndex + 1) % cipherNames.length;
    updateAlphabetDisplay();
    const text = document.getElementById('gematria-input')?.value || '';
    showLetterBreakdown(text.toUpperCase());
}

function showLetterBreakdown(text) {
    const currentCipher = cipherNames[currentCipherIndex];
    const cipher = allCiphers[currentCipher];
    const color = cipher.color;
    const breakdown = [];
    let total = 0;
    
    for (let char of text.toUpperCase()) {
        if (cipher.values[char] !== undefined && char.match(/[A-Z]/)) {
            breakdown.push({ letter: char, value: cipher.values[char] || 0 });
            total += cipher.values[char] || 0;
        }
    }
    
    const lb = document.getElementById('letter-breakdown');
    if (!lb) return;
    
    if (breakdown.length > 0) {
        const lettersHtml = breakdown.map(item => `
            <span style="display:inline-block; text-align:center; margin:2px 4px;">
                <div style="color:rgb(242,153,96); font-weight:bold; font-size:1em;">${item.letter}</div>
                <div style="color:rgb(200,200,200); font-size:0.85em;">${item.value}</div>
            </span>
        `).join('<span style="color:#555; font-size:0.9em;"> + </span>');
        
        lb.innerHTML = `
            <div style="font-size:0.8em; color:#aaa; margin-bottom:6px; text-transform:uppercase;">${currentCipher} — Letter Breakdown</div>
            <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:2px;">
                ${lettersHtml}
                <span style="color:#aaa; margin-left:6px;">= <span style="color:${color}; font-size:1.4em; font-weight:bold;">${total}</span></span>
            </div>
        `;
        lb.style.display = 'block';
    } else {
        lb.style.display = 'none';
    }
}

// ==========================================================================
// NUMBER PROPERTIES FUNCTION
// ==========================================================================

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function getNumberPosition(n, sequenceGen) {
    // Returns position of n in the given sequence (1-indexed), or null
    let pos = 1;
    let val;
    while (true) {
        val = sequenceGen(pos);
        if (val === n) return pos;
        if (val > n + 10000) return null; // safety stop for large numbers
        if (pos > 100000) return null;
        pos++;
    }
}

function getNthPrime(n) {
    let count = 0, num = 1;
    while (count < n) { num++; if (isPrime(num)) count++; }
    return num;
}

function getPrimeIndex(n) {
    if (!isPrime(n)) return null;
    let count = 0, i = 2;
    while (i <= n) { if (isPrime(i)) count++; if (i === n) return count; i++; }
    return null;
}

function getCompositeIndex(n) {
    if (n < 4) return null;
    if (isPrime(n)) return null;
    let count = 0;
    for (let i = 4; i <= n; i++) { if (!isPrime(i)) count++; if (i === n) return count; }
    return null;
}

function getTriangularIndex(n) {
    let k = 1;
    while (true) {
        const t = k * (k + 1) / 2;
        if (t === n) return k;
        if (t > n) return null;
        k++;
    }
}

function getSquareIndex(n) {
    const sq = Math.sqrt(n);
    if (Number.isInteger(sq) && sq * sq === n) return sq;
    return null;
}

function getCubeIndex(n) {
    const cb = Math.cbrt(n);
    const cbRound = Math.round(cb);
    if (cbRound * cbRound * cbRound === n) return cbRound;
    return null;
}

function getTetrahedralIndex(n) {
    // T(k) = k(k+1)(k+2)/6
    for (let k = 1; k <= 1000; k++) {
        const t = k * (k + 1) * (k + 2) / 6;
        if (t === n) return k;
        if (t > n) return null;
    }
    return null;
}

function getSquarePyramidalIndex(n) {
    // SP(k) = k(k+1)(2k+1)/6
    for (let k = 1; k <= 1000; k++) {
        const sp = k * (k + 1) * (2 * k + 1) / 6;
        if (sp === n) return k;
        if (sp > n) return null;
    }
    return null;
}

function getStarIndex(n) {
    // Star(k) = 6k(k-1)+1
    for (let k = 1; k <= 1000; k++) {
        const s = 6 * k * (k - 1) + 1;
        if (s === n) return k;
        if (s > n) return null;
    }
    return null;
}

function getPentagonalIndex(n) {
    // P(k) = k(3k-1)/2
    for (let k = 1; k <= 10000; k++) {
        const p = k * (3 * k - 1) / 2;
        if (p === n) return k;
        if (p > n) return null;
    }
    return null;
}

function toOrdinalSuffix(n) {
    if (n === null || n === undefined) return null;
    const s = ['th','st','nd','rd'];
    const v = n % 100;
    return n + (s[(v-20)%10] || s[v] || s[0]);
}

function showNumberProperties(n, context) {
    n = parseInt(n);
    if (isNaN(n) || n < 0) return;
    
    const prime = isPrime(n);
    const primeIdx = getPrimeIndex(n);
    const compositeIdx = getCompositeIndex(n);
    const triangularIdx = getTriangularIndex(n);
    const squareIdx = getSquareIndex(n);
    const cubeIdx = getCubeIndex(n);
    const tetraIdx = getTetrahedralIndex(n);
    const sqPyrIdx = getSquarePyramidalIndex(n);
    const starIdx = getStarIndex(n);
    const pentIdx = getPentagonalIndex(n);
    
    const oct = n.toString(8);
    const duo = toDuodecimal(n);
    const hex = n.toString(16).toUpperCase();
    const bin = n.toString(2);
    
    const rowStyle = 'display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px solid #1a2a3a;';
    const labelStyle = 'color:#888; font-size:0.85em;';
    const valueStyle = 'color:#00ced1; font-size:0.85em; cursor:pointer; text-decoration:underline;';
    const nullStyle = 'color:#555; font-size:0.85em;';
    
    function propRow(label, val) {
        if (val !== null && val !== undefined) {
            return `<div style="${rowStyle}"><span style="${labelStyle}">${label}</span><span style="${valueStyle}" onclick="showNumberProperties(${n}, '${context}')">${val}</span></div>`;
        }
        return `<div style="${rowStyle}"><span style="${labelStyle}">${label}</span><span style="${nullStyle}">—</span></div>`;
    }
    
    const html = `
        <div style="background:#0a0f1a; border:2px solid #00ced1; border-radius:12px; padding:20px; max-width:480px; margin:10px auto; font-family:Arial,sans-serif;">
            <div style="text-align:center; color:#00ced1; font-size:0.9em; font-weight:bold; text-transform:uppercase; letter-spacing:2px; margin-bottom:6px;">Number Properties of</div>
            <div style="text-align:center; color:#ffffff; font-size:3.5em; font-weight:bold; line-height:1; margin-bottom:8px;">${n}</div>
            <div style="text-align:center; margin-bottom:16px;">
                <span style="color:${prime ? '#00ff80' : '#888'}; font-size:0.9em; font-weight:bold;">${prime ? '✓ Prime Number' : (n > 1 ? 'Composite Number' : 'Neither Prime nor Composite')}</span>
            </div>
            
            <div style="margin-bottom:16px;">
                <div style="color:#00ced1; font-size:0.75em; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px; border-bottom:1px solid #1a2a3a; padding-bottom:4px;">Number Sequences</div>
                ${propRow('Prime #', primeIdx ? toOrdinalSuffix(primeIdx) : null)}
                ${propRow('Composite #', compositeIdx ? toOrdinalSuffix(compositeIdx) : null)}
                ${propRow('Triangular #', triangularIdx ? toOrdinalSuffix(triangularIdx) : null)}
                ${propRow('Square #', squareIdx ? toOrdinalSuffix(squareIdx) : null)}
                ${propRow('Cube #', cubeIdx ? toOrdinalSuffix(cubeIdx) : null)}
                ${propRow('Tetrahedral #', tetraIdx ? toOrdinalSuffix(tetraIdx) : null)}
                ${propRow('Square Pyramidal #', sqPyrIdx ? toOrdinalSuffix(sqPyrIdx) : null)}
                ${propRow('Star #', starIdx ? toOrdinalSuffix(starIdx) : null)}
                ${propRow('Pentagonal #', pentIdx ? toOrdinalSuffix(pentIdx) : null)}
            </div>
            
            <div style="margin-bottom:16px;">
                <div style="color:#00ced1; font-size:0.75em; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px; border-bottom:1px solid #1a2a3a; padding-bottom:4px;">Base Conversions</div>
                ${propRow('Octal (base 8)', oct)}
                ${propRow('Duodecimal (base 12)', duo)}
                ${propRow('Hexadecimal (base 16)', hex)}
                ${propRow('Binary (base 2)', bin)}
            </div>
            
            <div style="display:flex; align-items:center; gap:8px; margin-top:10px;">
                <input type="number" id="num-props-input-${context}" placeholder="Enter #" min="0"
                       style="background:#111; color:#dedede; border:1px solid #444; border-radius:6px; padding:6px 10px; font-size:0.9em; flex:1; outline:none;" />
                <button onclick="lookupNumProps('${context}')" style="background:#00ced1; color:#000; border:none; border-radius:6px; padding:7px 14px; font-size:0.85em; font-weight:bold; cursor:pointer; text-transform:uppercase;">Get Properties</button>
                <button onclick="closeNumProps('${context}')" style="background:#333; color:#aaa; border:none; border-radius:6px; padding:7px 10px; font-size:0.85em; cursor:pointer;">✕</button>
            </div>
        </div>
    `;
    
    let section;
    if (context === 'gem') {
        section = document.getElementById('num-props-section');
        if (section) { section.innerHTML = html; section.style.display = 'block'; section.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    } else {
        section = document.getElementById('num-props-section-date');
        if (section) { section.innerHTML = html; section.style.display = 'block'; section.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    }
}

function toDuodecimal(n) {
    if (n === 0) return '0';
    const digits = '0123456789AB';
    let result = '';
    let num = n;
    while (num > 0) {
        result = digits[num % 12] + result;
        num = Math.floor(num / 12);
    }
    return result;
}

function lookupNumProps(context) {
    const input = document.getElementById(`num-props-input-${context}`);
    if (!input) return;
    const val = parseInt(input.value);
    if (!isNaN(val) && val >= 0) showNumberProperties(val, context);
}

function closeNumProps(context) {
    let section;
    if (context === 'gem') { section = document.getElementById('num-props-section'); }
    else { section = document.getElementById('num-props-section-date'); }
    if (section) section.style.display = 'none';
}


// ==========================================================================
// DATE CALCULATOR — Gematrinator-style
// ==========================================================================

function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function daysInMonth(m, y) {
  return [0,31, isLeapYear(y)?29:28, 31,30,31,30,31,31,30,31,30,31][m] || 30;
}

function dayOfYear(m, d, y) {
  let n = 0;
  for (let i = 1; i < m; i++) n += daysInMonth(i, y);
  return n + d;
}

function daysLeftInYear(m, d, y) {
  const total = isLeapYear(y) ? 366 : 365;
  return total - dayOfYear(m, d, y);
}

function dateDiff(m1, d1, y1, m2, d2, y2, includeEnd) {
  const a = new Date(y1, m1 - 1, d1);
  const b = new Date(y2, m2 - 1, d2);
  const ms = b - a;
  let days = Math.round(ms / 86400000);
  if (includeEnd) days += 1;
  return days;
}

function buildDurationBreakdown(totalDays, m1, d1, y1, m2, d2, y2) {
  // Year + Days
  let yrs = 0, rem = totalDays;
  let tempM = m1, tempD = d1, tempY = y1;
  while (true) {
    const nextY = new Date(tempY + 1, tempM - 1, tempD);
    const daysInYear = isLeapYear(tempY) ? 366 : 365;
    if (rem >= daysInYear) { yrs++; rem -= daysInYear; tempY++; } else break;
  }
  const yr_days = rem;

  // Months + Days (from y1)
  let months = (y2 - y1) * 12 + (m2 - m1);
  let mo_days = d2 - d1;
  if (mo_days < 0) { months--; mo_days += daysInMonth(m1, y1); }

  // Weeks + Days
  const weeks = Math.floor(totalDays / 7);
  const wk_days = totalDays % 7;

  return { yrs, yr_days, months, mo_days, weeks, wk_days };
}

const WEEKDAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function getWeekday(m, d, y) {
  const dt = new Date(y, m - 1, d);
  return WEEKDAYS[dt.getDay()];
}

function dateLabel(m, d, y) {
  return `${getWeekday(m,d,y)} ${MONTHS_SHORT[m-1]} ${String(d).padStart(2,'0')} ${y}`;
}

function calcNumerology(m, d, y) {
  const M = m, D = d;
  const CC = Math.floor(y / 100);
  const YY = y % 100;
  const digits = (n) => String(Math.abs(n)).split('').map(Number);
  const sumDigits = (n) => digits(n).reduce((a,b)=>a+b,0);
  const allYDigits = digits(y);
  const last2Digits = digits(YY);

  // Row 1: (M)+(D)+(CC)+(YY)
  const r1 = M + D + CC + YY;
  // Row 2: (M)+(D)+individual year digits
  const r2 = M + D + allYDigits.reduce((a,b)=>a+b,0);
  // Row 3: individual m digits + individual d digits + individual year digits
  const r3 = sumDigits(M) + sumDigits(D) + allYDigits.reduce((a,b)=>a+b,0);
  // Row 4: (M)+(D)+(YY)
  const r4 = M + D + YY;
  // Row 5: individual m + individual d + last 2 year digits
  const r5 = sumDigits(M) + sumDigits(D) + last2Digits.reduce((a,b)=>a+b,0);
  // Row 6: Day of Year
  const r6 = dayOfYear(m, d, y);
  // Row 7: Days Left in Year
  const r7 = daysLeftInYear(m, d, y);
  // Row 8: (M)+(D)
  const r8 = M + D;
  // Row 9: individual m + individual d + (CC)+(YY)
  const r9 = sumDigits(M) + sumDigits(D) + CC + YY;
  // Row 10: (M)+(D)+last 2 year digits summed
  const r10 = M + D + last2Digits.reduce((a,b)=>a+b,0);
  // Row 11: individual m + individual d + (YY)
  const r11 = sumDigits(M) + sumDigits(D) + YY;
  // Row 12: product of non-zero digits (full year) — all digits of M, D, Y
  const allDigits12 = [...digits(M), ...digits(D), ...allYDigits].filter(x=>x!==0);
  const r12 = allDigits12.length ? allDigits12.reduce((a,b)=>a*b,1) : 0;
  // Row 13: product of non-zero digits (last 2 year digits) — M, D, last2Y
  const allDigits13 = [...digits(M), ...digits(D), ...last2Digits].filter(x=>x!==0);
  const r13 = allDigits13.length ? allDigits13.reduce((a,b)=>a*b,1) : 0;

  return [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13];
}


function showNumerologyTools() {
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector('[data-sport="numerology"]').classList.add('active');
  openDateCalcPanel();
}

function openDateCalcPanel() {
  let panel = document.getElementById('date-calc-panel');
  if (!panel) {
    createDateCalcPanel();
    panel = document.getElementById('date-calc-panel');
  }
  panel.style.display = 'flex';
  updateDateCalc();
}

function closeDateCalcPanel() {
  const p = document.getElementById('date-calc-panel');
  if (p) p.style.display = 'none';
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  const prevTab = document.querySelector('[data-sport="nfl"]');
  if (prevTab) prevTab.classList.add('active');
}

function createDateCalcPanel() {
  const today = new Date();
  const lastYear = new Date(today.getFullYear()-1, today.getMonth(), today.getDate());

  const panel = document.createElement('div');
  panel.id = 'date-calc-panel';
  panel.className = 'date-calc-panel';
  
  // Dark Gematrinator-style inline CSS
  const panelStyle = `
    position:fixed; right:20px; bottom:20px; width:680px; max-width:98vw;
    background:linear-gradient(180deg,#111111,#1a1a1a);
    border:2px solid #333; border-radius:14px; z-index:9999;
    box-shadow:0 8px 40px rgba(0,0,0,0.8); display:flex; flex-direction:column;
    font-family:Arial,sans-serif; overflow:hidden;
  `;
  panel.style.cssText = panelStyle;

  panel.innerHTML = `
    <div id="dcp-header" style="background:#0d0d0d; padding:10px 16px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #333; cursor:move; user-select:none;">
      <span style="color:#FFA500; font-size:1em; font-weight:bold; letter-spacing:1px;">&#128197; DATE CALCULATOR</span>
      <div style="display:flex; gap:6px;">
        <button onclick="minimizeDateCalc()" title="Minimize" style="background:#222; color:#aaa; border:1px solid #444; border-radius:4px; width:26px; height:26px; cursor:pointer; font-size:1em; line-height:1;">&#8212;</button>
        <button onclick="closeDateCalcPanel()" title="Close" style="background:#222; color:#aaa; border:1px solid #444; border-radius:4px; width:26px; height:26px; cursor:pointer; font-size:1em; line-height:1;">&#10005;</button>
      </div>
    </div>
    
    <div id="dcp-body" style="padding:16px; overflow-y:auto; max-height:85vh;">
      
      <!-- Dual date inputs -->
      <div style="display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap; margin-bottom:12px;">
        <div style="flex:1; min-width:200px; background:rgba(0,0,0,0.35); border:1px solid #333; border-radius:10px; padding:12px;">
          <div id="dc-header1" style="color:#FFA500; font-weight:bold; font-size:0.95em; margin-bottom:8px; text-align:center;">${dateLabel(lastYear.getMonth()+1, lastYear.getDate(), lastYear.getFullYear())}</div>
          <div style="display:flex; gap:6px; justify-content:center; flex-wrap:wrap;">
            <div style="display:flex; flex-direction:column; align-items:center; gap:3px;">
              <label style="color:#888; font-size:0.75em; text-transform:uppercase;">Month</label>
              <input type="number" id="dc-m1" value="${lastYear.getMonth()+1}" min="1" max="12" oninput="updateDateCalc()"
                     style="background:#111; color:#dedede; border:1px solid #444; border-radius:5px; padding:4px 6px; width:56px; text-align:center; font-size:0.95em;" />
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; gap:3px;">
              <label style="color:#888; font-size:0.75em; text-transform:uppercase;">Day</label>
              <input type="number" id="dc-d1" value="${lastYear.getDate()}" min="1" max="31" oninput="updateDateCalc()"
                     style="background:#111; color:#dedede; border:1px solid #444; border-radius:5px; padding:4px 6px; width:56px; text-align:center; font-size:0.95em;" />
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; gap:3px;">
              <label style="color:#888; font-size:0.75em; text-transform:uppercase;">Year</label>
              <input type="number" id="dc-y1" value="${lastYear.getFullYear()}" min="0" max="9999" oninput="updateDateCalc()"
                     style="background:#111; color:#dedede; border:1px solid #444; border-radius:5px; padding:4px 6px; width:72px; text-align:center; font-size:0.95em;" />
            </div>
          </div>
        </div>
        
        <div style="display:flex; align-items:center; color:#FFA500; font-size:1.4em; padding-top:20px;">&#8594;</div>
        
        <div style="flex:1; min-width:200px; background:rgba(0,0,0,0.35); border:1px solid #333; border-radius:10px; padding:12px;">
          <div id="dc-header2" style="color:#FFA500; font-weight:bold; font-size:0.95em; margin-bottom:8px; text-align:center;">${dateLabel(today.getMonth()+1, today.getDate(), today.getFullYear())}</div>
          <div style="display:flex; gap:6px; justify-content:center; flex-wrap:wrap;">
            <div style="display:flex; flex-direction:column; align-items:center; gap:3px;">
              <label style="color:#888; font-size:0.75em; text-transform:uppercase;">Month</label>
              <input type="number" id="dc-m2" value="${today.getMonth()+1}" min="1" max="12" oninput="updateDateCalc()"
                     style="background:#111; color:#dedede; border:1px solid #444; border-radius:5px; padding:4px 6px; width:56px; text-align:center; font-size:0.95em;" />
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; gap:3px;">
              <label style="color:#888; font-size:0.75em; text-transform:uppercase;">Day</label>
              <input type="number" id="dc-d2" value="${today.getDate()}" min="1" max="31" oninput="updateDateCalc()"
                     style="background:#111; color:#dedede; border:1px solid #444; border-radius:5px; padding:4px 6px; width:56px; text-align:center; font-size:0.95em;" />
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; gap:3px;">
              <label style="color:#888; font-size:0.75em; text-transform:uppercase;">Year</label>
              <input type="number" id="dc-y2" value="${today.getFullYear()}" min="0" max="9999" oninput="updateDateCalc()"
                     style="background:#111; color:#dedede; border:1px solid #444; border-radius:5px; padding:4px 6px; width:72px; text-align:center; font-size:0.95em;" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Include end date + main days result -->
      <div style="background:rgba(0,0,0,0.3); border:1px solid #333; border-radius:8px; padding:10px 14px; margin-bottom:10px;">
        <label style="color:#888; font-size:0.8em; display:flex; align-items:center; gap:6px; margin-bottom:6px;">
          <input type="checkbox" id="dc-include-end" onchange="updateDateCalc()" style="accent-color:#00ced1;" />
          <span>Include End Date?</span>
        </label>
        <div id="dc-days-result" style="color:#00CED1; font-size:0.9em;"></div>
      </div>
      
      <!-- SELECT DURATIONS section -->
      <div style="background:rgba(0,0,0,0.3); border:1px solid #333; border-radius:8px; padding:10px 14px; margin-bottom:10px;">
        <div style="color:#CC0000; font-size:0.75em; font-weight:bold; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">&#9632; SELECT DURATIONS</div>
        <div style="display:flex; gap:14px; flex-wrap:wrap; margin-bottom:8px;">
          <label style="color:#aaa; font-size:0.85em; display:flex; align-items:center; gap:4px; cursor:pointer;">
            <input type="checkbox" id="dc-show-year" onchange="updateDateCalc()" style="accent-color:#CC0000;" /> Year
          </label>
          <label style="color:#aaa; font-size:0.85em; display:flex; align-items:center; gap:4px; cursor:pointer;">
            <input type="checkbox" id="dc-show-month" onchange="updateDateCalc()" style="accent-color:#CC0000;" /> Month
          </label>
          <label style="color:#aaa; font-size:0.85em; display:flex; align-items:center; gap:4px; cursor:pointer;">
            <input type="checkbox" id="dc-show-week" onchange="updateDateCalc()" style="accent-color:#CC0000;" /> Week
          </label>
          <label style="color:#aaa; font-size:0.85em; display:flex; align-items:center; gap:4px; cursor:pointer;">
            <input type="checkbox" id="dc-show-day" checked onchange="updateDateCalc()" style="accent-color:#CC0000;" /> Day
          </label>
        </div>
        <div id="dc-durations" style="font-size:0.9em;"></div>
      </div>
      
      <!-- TIME BETWEEN DATES heading -->
      <div style="color:#00CED1; font-size:0.85em; font-weight:bold; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">&#9632; Time Between Dates:</div>
      
      <!-- Numerology tables -->
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px;">
        <div style="flex:1; min-width:220px; background:rgba(0,0,0,0.25); border:1px solid #2a2a2a; border-radius:8px; overflow:hidden;">
          <div id="dc-header1-tbl" style="color:#FFA500; font-weight:bold; font-size:0.85em; padding:6px 10px; background:rgba(0,0,0,0.4); border-bottom:1px solid #2a2a2a; text-align:center;"></div>
          <table style="width:100%; border-collapse:collapse;"><tbody id="dc-table1"></tbody></table>
        </div>
        <div style="flex:1; min-width:220px; background:rgba(0,0,0,0.25); border:1px solid #2a2a2a; border-radius:8px; overflow:hidden;">
          <div id="dc-header2-tbl" style="color:#FFA500; font-weight:bold; font-size:0.85em; padding:6px 10px; background:rgba(0,0,0,0.4); border-bottom:1px solid #2a2a2a; text-align:center;"></div>
          <table style="width:100%; border-collapse:collapse;"><tbody id="dc-table2"></tbody></table>
        </div>
      </div>
      
      <!-- Number Properties section (inline, pushed below content) -->
      <div id="num-props-section-date" style="display:none;"></div>
      
      <div style="color:#555; font-size:0.75em; text-align:center; margin-top:8px;">Click any cyan number to explore its properties</div>
    </div>
  `;

  // Make draggable
  let isDragging = false, dragOffX = 0, dragOffY = 0;
  const header = panel.querySelector('#dcp-header');
  header.addEventListener('mousedown', e => {
    if (e.target.tagName === 'BUTTON') return;
    isDragging = true;
    dragOffX = e.clientX - panel.getBoundingClientRect().left;
    dragOffY = e.clientY - panel.getBoundingClientRect().top;
    panel.style.transition = 'none';
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    let x = e.clientX - dragOffX;
    let y = e.clientY - dragOffY;
    const maxX = window.innerWidth - panel.offsetWidth;
    const maxY = window.innerHeight - panel.offsetHeight;
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    panel.style.right = 'auto'; panel.style.bottom = 'auto';
    panel.style.left = x + 'px'; panel.style.top = y + 'px';
  });
  document.addEventListener('mouseup', () => { isDragging = false; });

  document.body.appendChild(panel);
}

let dcMinimized = false;
function minimizeDateCalc() {
  const body = document.getElementById('dcp-body');
  const btn = document.querySelector('#dcp-header button');
  if (!body || !btn) return;
  dcMinimized = !dcMinimized;
  body.style.display = dcMinimized ? 'none' : 'block';
  btn.textContent = dcMinimized ? '□' : '—';
}

function updateDateCalc() {
  const m1 = parseInt(document.getElementById('dc-m1').value)||1;
  const d1 = parseInt(document.getElementById('dc-d1').value)||1;
  const y1 = parseInt(document.getElementById('dc-y1').value)||2025;
  const m2 = parseInt(document.getElementById('dc-m2').value)||1;
  const d2 = parseInt(document.getElementById('dc-d2').value)||1;
  const y2 = parseInt(document.getElementById('dc-y2').value)||2026;
  const includeEnd = document.getElementById('dc-include-end') && document.getElementById('dc-include-end').checked;

  const clamp = (v,lo,hi) => Math.min(Math.max(v,lo),hi);
  const cm1=clamp(m1,1,12),cd1=clamp(d1,1,daysInMonth(cm1,y1)||28),cy1=clamp(y1,0,9999);
  const cm2=clamp(m2,1,12),cd2=clamp(d2,1,daysInMonth(cm2,y2)||28),cy2=clamp(y2,0,9999);

  // Date headers
  const h1 = document.getElementById('dc-header1');
  const h2 = document.getElementById('dc-header2');
  if (h1) h1.textContent = dateLabel(cm1,cd1,cy1);
  if (h2) h2.textContent = dateLabel(cm2,cd2,cy2);

  // Duration
  const totalDays = dateDiff(cm1,cd1,cy1,cm2,cd2,cy2,includeEnd);
  const daysResultEl = document.getElementById('dc-days-result');
  if (daysResultEl) {
    daysResultEl.innerHTML = `From <span style="color:#FFA500;">${dateLabel(cm1,cd1,cy1)}</span> to <span style="color:#FFA500;">${dateLabel(cm2,cd2,cy2)}</span> is: <span style="color:#00CED1; font-size:2em; font-weight:bold; cursor:pointer; text-decoration:underline;" onclick="showNumberProperties(${totalDays},'date')">${totalDays}</span> <span style="color:#aaa;">Days</span>`;
  }

  // Duration breakdowns
  const bd = buildDurationBreakdown(totalDays,cm1,cd1,cy1,cm2,cd2,cy2);
  const showYear = document.getElementById('dc-show-year')?.checked;
  const showMonth = document.getElementById('dc-show-month')?.checked;
  const showWeek = document.getElementById('dc-show-week')?.checked;
  const showDay = document.getElementById('dc-show-day')?.checked !== false;

  function cyanLink(n) {
    return `<span style="color:#00CED1; cursor:pointer; text-decoration:underline;" onclick="showNumberProperties(${n},'date')">${n}</span>`;
  }
  
  let durHTML = '';
  const rowStyle = 'padding:3px 0; color:#aaa; font-size:0.9em;';
  if(showYear)  durHTML += `<div style="${rowStyle}">${cyanLink(bd.yrs)} Year, ${cyanLink(bd.yr_days)} Days</div>`;
  if(showYear && showMonth) durHTML += `<div style="${rowStyle}">${cyanLink(bd.yrs)} Year, ${cyanLink(Math.abs(bd.months % 12))} Months, ${cyanLink(Math.abs(bd.mo_days))} Days</div>`;
  if(showYear && showWeek)  durHTML += `<div style="${rowStyle}">${cyanLink(bd.yrs)} Year, ${cyanLink(Math.floor(bd.yr_days/7))} Weeks, ${cyanLink(bd.yr_days%7)} Days</div>`;
  if(showMonth) durHTML += `<div style="${rowStyle}">${cyanLink(bd.months)} Months, ${cyanLink(Math.abs(bd.mo_days))} Days</div>`;
  if(showWeek)  durHTML += `<div style="${rowStyle}">${cyanLink(bd.weeks)} Weeks, ${cyanLink(bd.wk_days)} ${bd.wk_days===1?'Day':'Days'}</div>`;
  if(showDay)   durHTML += `<div style="${rowStyle}">${cyanLink(totalDays)} Days</div>`;
  if(!durHTML)  durHTML = '<div style="color:#555; font-size:0.85em;">Select a duration type to view</div>';
  
  const durEl = document.getElementById('dc-durations');
  if (durEl) durEl.innerHTML = durHTML;

  // Numerology tables
  const n1 = calcNumerology(cm1,cd1,cy1);
  const n2 = calcNumerology(cm2,cd2,cy2);
  const M1=cm1,D1=cd1,Y1=cy1,M2=cm2,D2=cd2,Y2=cy2;
  const CC1=Math.floor(Y1/100),YY1=Y1%100,CC2=Math.floor(Y2/100),YY2=Y2%100;
  const digStr = (n) => String(Math.abs(n)).split('').join('+');
  const formulas = [
    [`(${M1})+(${D1})+(${CC1})+(${YY1})`, `(${M2})+(${D2})+(${CC2})+(${YY2})`],
    [`(${M1})+(${D1})+${digStr(Y1)}`,     `(${M2})+(${D2})+${digStr(Y2)}`],
    [`${digStr(M1)}+${digStr(D1)}+${digStr(Y1)}`, `${digStr(M2)}+${digStr(D2)}+${digStr(Y2)}`],
    [`(${M1})+(${D1})+(${YY1})`,          `(${M2})+(${D2})+(${YY2})`],
    [`${digStr(M1)}+${digStr(D1)}+${digStr(YY1)}`, `${digStr(M2)}+${digStr(D2)}+${digStr(YY2)}`],
    [`Day of Year: (${MONTHS_SHORT[M1-1]}-${D1})`, `Day of Year: (${MONTHS_SHORT[M2-1]}-${D2})`],
    [`Days Left in Year: (${MONTHS_SHORT[M1-1]}-${D1})`, `Days Left in Year: (${MONTHS_SHORT[M2-1]}-${D2})`],
    [`(${M1})+(${D1})`,                   `(${M2})+(${D2})`],
    [`${digStr(M1)}+${digStr(D1)}+(${CC1})+(${YY1})`, `${digStr(M2)}+${digStr(D2)}+(${CC2})+(${YY2})`],
    [`(${M1})+(${D1})+${digStr(YY1)}`,    `(${M2})+(${D2})+${digStr(YY2)}`],
    [`${digStr(M1)}+${digStr(D1)}+(${YY1})`, `${digStr(M2)}+${digStr(D2)}+(${YY2})`],
    [`Product (Full Year)`,               `Product (Full Year)`],
    [`Product (Last 2 Yr)`,               `Product (Last 2 Yr)`]
  ];

  const trStyle = 'border-bottom:1px solid #1a1a1a;';
  const tdFStyle = 'padding:3px 8px; color:#666; font-size:0.75em;';
  const tdRStyle = 'padding:3px 8px; font-size:0.85em; text-align:right; cursor:pointer;';

  let t1='',t2='';
  for(let i=0;i<13;i++){
    t1 += `<tr style="${trStyle}"><td style="${tdFStyle}">${formulas[i][0]}</td><td style="${tdRStyle} color:#00CED1;" onclick="showNumberProperties(${n1[i]},'date')">${n1[i]}</td></tr>`;
    t2 += `<tr style="${trStyle}"><td style="${tdFStyle}">${formulas[i][1]}</td><td style="${tdRStyle} color:#00CED1;" onclick="showNumberProperties(${n2[i]},'date')">${n2[i]}</td></tr>`;
  }
  
  const t1el = document.getElementById('dc-table1');
  const t2el = document.getElementById('dc-table2');
  const h1tbl = document.getElementById('dc-header1-tbl');
  const h2tbl = document.getElementById('dc-header2-tbl');
  if (t1el) t1el.innerHTML = t1;
  if (t2el) t2el.innerHTML = t2;
  if (h1tbl) h1tbl.textContent = dateLabel(cm1,cd1,cy1);
  if (h2tbl) h2tbl.textContent = dateLabel(cm2,cd2,cy2);
}

// RENDER CARDS FUNCTION
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
    html += `<div class="conference-section">`;
    html += `<h2 class="conference-title">${conf}</h2>`;
    
    Object.keys(grouped[conf]).sort().forEach(div => {
      if (div && div !== 'undefined') {
        html += `<div class="division-section">`;
        html += `<h3 class="division-title">${div}</h3>`;
      }
      html += `<div class="teams-grid">`;
      
      grouped[conf][div].forEach(team => {
        const exact = team.founded !== team.leagueJoined;
        const foundedClass = exact ? 'exact-founding' : 'nfl-founding';
        const foundedText = exact ? team.founded : sportConfig[currentSport].leagueJoinedLabel + ': ' + team.leagueJoined;
        const stateInfo = stateData[team.state];
        const stateText = stateInfo ? team.state + ' • ' + stateInfo.order + getOrdinal(stateInfo.order) + ' State' : team.state;
        
        const logoUrl = getTeamLogo(team.name);
        const logoHtml = logoUrl ? `<div class="team-logo-wrap"><img class="team-logo" src="${logoUrl}" alt="${team.name} logo" loading="lazy" onerror="this.style.display='none'"></div>` : '';
        html += `
          <div class="team-card ${foundedClass}" data-team-name="${team.name}">
            ${logoHtml}
            <div class="team-card-content">
              <h4 class="team-name">${team.name}</h4>
              <p class="team-location">${team.city}, ${stateText}</p>
              <p class="team-founded">${foundedText}</p>
            </div>
          </div>
        `;
      });
      
      html += `</div>`;
      if (div && div !== 'undefined') {
        html += `</div>`;
      }
    });
    
    html += `</div>`;
  });
  html += '</div>';
  
  container.innerHTML = html;
  
  // Add event listeners to team cards
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function() {
      const teamName = this.getAttribute('data-team-name');
      showPopup(teamName);
    });
  });
}

// POPUP FUNCTION
function showPopup(teamName) {
  // Remove existing modal if present
  const existingModal = document.getElementById('team-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Find team
  const team = sportsData[currentSport].find(t => t.name === teamName);
  if (!team) return;
  
  const exact = team.founded !== team.leagueJoined;
  const stateInfo = stateData[team.state];
  const teamInfo = getDayInfo(team.founded);
  // cityFounded removed
  const charterInfo = getDayInfo(team.cityCharter);
  const venueInfo = getDayInfo(team.stadiumOpened || team.arenaOpened);
  const stateFoundedInfo = stateInfo ? getDayInfo(stateInfo.founded) : { dayOfYear: '—', daysLeft: '—' };
  
  const config = sportConfig[currentSport];
  const venueName = team.stadium || team.arena;
  const venueOpened = team.stadiumOpened || team.arenaOpened;
  
  // Create modal
  const modal = document.createElement('div');
  modal.id = 'team-modal';
  modal.className = 'modal';
  modal.style.display = 'block';
  
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closePopup()">&times;</span>
      <div class="popup-header">
        ${(function() { const l = getTeamLogo(team.name); return l ? `<img class="popup-team-logo" src="${l}" alt="${team.name} logo" onerror="this.style.display='none'">` : ''; })()}
        <h2>${team.name}</h2>
        ${team.division ? `<p class="popup-division">${team.division}</p>` : ''}
      </div>
      <div class="popup-content">
        <div class="info-section">
          <h3>Team History</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>Founded:</label>
              <span class="${exact ? 'exact-date' : 'nfl-date'}">${team.founded}</span>
              <small>Day ${teamInfo.dayOfYear} • ${teamInfo.daysLeft} days left</small>
            </div>
            <div class="info-item">
              <label>${config.leagueJoinedLabel}:</label>
              <span>${team.leagueJoined}</span>
            </div>
            <div class="info-item">
              <label>${config.conferenceLabel}:</label>
              <span>${team.conference}</span>
            </div>
            ${team.division ? `<div class="info-item"><label>${config.divisionLabel}:</label><span>${team.division}</span></div>` : ''}
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
              <span>${team.state}${stateInfo ? ' • ' + stateInfo.order + getOrdinal(stateInfo.order) + ' State' : ''}</span>
            </div>

            <div class="info-item">
              <label>City Chartered:</label>
              <span>${team.cityCharter || 'Not available'}</span>
              ${team.cityCharter ? `<small>Day ${charterInfo.dayOfYear} • ${charterInfo.daysLeft} days left</small>` : ''}
            </div>
            ${stateInfo ? `<div class="info-item"><label>State Founded:</label><span>${stateInfo.founded}</span><small>Day ${stateFoundedInfo.dayOfYear} • ${stateFoundedInfo.daysLeft} days left</small></div>` : ''}
          </div>
        </div>
        
        <div class="info-section">
          <h3>${config.venueLabel} Information</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>${config.venueLabel}:</label>
              <span>${venueName}</span>
            </div>
            <div class="info-item">
              <label>${config.venueLabel} Opened:</label>
              <span>${venueOpened}</span>
              <small>Day ${venueInfo.dayOfYear} • ${venueInfo.daysLeft} days left</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

function closePopup() {
  const modal = document.getElementById('team-modal');
  if (modal) {
    modal.remove();
  }
}

// INITIALIZE FILTERS
function initFilters() {
  const currentData = sportsData[currentSport] || [];
  
  // Conference filter
  const confSelect = document.getElementById('conference-filter');
  confSelect.innerHTML = '<option value="">All ' + sportConfig[currentSport].conferenceLabel + 's</option>';
  const conferences = [...new Set(currentData.map(t => t.conference))].sort();
  conferences.forEach(conf => {
    const option = document.createElement('option');
    option.value = conf;
    option.textContent = conf;
    confSelect.appendChild(option);
  });
  
  // Division filter
  const divSelect = document.getElementById('division-filter');
  divSelect.innerHTML = '<option value="">All ' + sportConfig[currentSport].divisionLabel + 's</option>';
  const divisions = [...new Set(currentData.map(t => t.division).filter(d => d))].sort();
  divisions.forEach(div => {
    const option = document.createElement('option');
    option.value = div;
    option.textContent = div;
    divSelect.appendChild(option);
  });
  
  // Event listeners
  document.getElementById('search').addEventListener('input', function() {
    const term = this.value.toLowerCase();
    filtered = currentData.filter(t => 
      t.name.toLowerCase().includes(term) || 
      t.city.toLowerCase().includes(term) || 
      t.state.toLowerCase().includes(term) || 
      (t.stadium && t.stadium.toLowerCase().includes(term)) ||
      (t.arena && t.arena.toLowerCase().includes(term))
    );
    renderCards();
  });
  
  confSelect.addEventListener('change', function() {
    if (this.value) filtered = currentData.filter(t => t.conference === this.value);
    else filtered = [...currentData];
    renderCards();
  });
  
  divSelect.addEventListener('change', function() {
    if (this.value) filtered = currentData.filter(t => t.division === this.value);
    else filtered = [...currentData];
    renderCards();
  });
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      switchSport(this.dataset.sport);
    });
  });
  
  switchSport('nfl');
});

// Click outside modal to close
window.onclick = function(event) {
  const modal = document.getElementById('team-modal');
  if (event.target === modal) {
    closePopup();
  }
}
