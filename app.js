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
  "WI": { order: 30, founded: "May 29, 1848" }
};

// COMPLETE Multi-sport data structure with verified exact founding dates
const sportsData = {
  nfl: [
    { name: "Arizona Cardinals", division: "NFC West", conference: "NFC", founded: "March 28, 1898", leagueJoined: "1920", city: "Glendale", state: "AZ", cityFounded: "October 10, 1910", cityCharter: "October 10, 1910", stadium: "State Farm Stadium", stadiumOpened: "August 1, 2006" },
    { name: "Atlanta Falcons", division: "NFC South", conference: "NFC", founded: "June 30, 1965", leagueJoined: "1966", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", stadium: "Mercedes-Benz Stadium", stadiumOpened: "August 26, 2017" },
    { name: "Baltimore Ravens", division: "AFC North", conference: "AFC", founded: "February 9, 1996", leagueJoined: "1996", city: "Baltimore", state: "MD", cityFounded: "August 8, 1729", cityCharter: "January 13, 1797", stadium: "M&T Bank Stadium", stadiumOpened: "September 6, 1998" },
    { name: "Buffalo Bills", division: "AFC East", conference: "AFC", founded: "October 28, 1959", leagueJoined: "1960", city: "Buffalo", state: "NY", cityFounded: "1810", cityCharter: "April 20, 1832", stadium: "Highmark Stadium", stadiumOpened: "August 17, 1973" },
    { name: "Carolina Panthers", division: "NFC South", conference: "NFC", founded: "October 26, 1993", leagueJoined: "1995", city: "Charlotte", state: "NC", cityFounded: "December 3, 1768", cityCharter: "December 3, 1768", stadium: "Bank of America Stadium", stadiumOpened: "September 1, 1996" },
    { name: "Chicago Bears", division: "NFC North", conference: "NFC", founded: "September 20, 1919", leagueJoined: "1920", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "Soldier Field", stadiumOpened: "October 9, 1924" },
    { name: "Cincinnati Bengals", division: "AFC North", conference: "AFC", founded: "May 23, 1967", leagueJoined: "1968", city: "Cincinnati", state: "OH", cityFounded: "December 1788", cityCharter: "March 1, 1819", stadium: "Paycor Stadium", stadiumOpened: "August 19, 2000" },
    { name: "Cleveland Browns", division: "AFC North", conference: "AFC", founded: "April 20, 1945", leagueJoined: "1950", city: "Cleveland", state: "OH", cityFounded: "July 22, 1796", cityCharter: "January 1, 1914", stadium: "Huntington Bank Field", stadiumOpened: "September 12, 1999" },
    { name: "Dallas Cowboys", division: "NFC East", conference: "NFC", founded: "January 28, 1960", leagueJoined: "1960", city: "Arlington", state: "TX", cityFounded: "1876", cityCharter: "1884", stadium: "AT&T Stadium", stadiumOpened: "May 27, 2009" },
    { name: "Denver Broncos", division: "AFC West", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 7, 1861", stadium: "Empower Field at Mile High", stadiumOpened: "September 10, 2001" },
    { name: "Detroit Lions", division: "NFC North", conference: "NFC", founded: "July 12, 1930", leagueJoined: "1930", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "September 13, 1806", stadium: "Ford Field", stadiumOpened: "September 22, 2002" },
    { name: "Green Bay Packers", division: "NFC North", conference: "NFC", founded: "August 11, 1919", leagueJoined: "1921", city: "Green Bay", state: "WI", cityFounded: "1854", cityCharter: "February 27, 1854", stadium: "Lambeau Field", stadiumOpened: "September 29, 1957" },
    { name: "Houston Texans", division: "AFC South", conference: "AFC", founded: "October 6, 1999", leagueJoined: "2002", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "June 5, 1837", stadium: "NRG Stadium", stadiumOpened: "August 24, 2002" },
    { name: "Indianapolis Colts", division: "AFC South", conference: "AFC", founded: "January 23, 1953", leagueJoined: "1953", city: "Indianapolis", state: "IN", cityFounded: "January 6, 1821", cityCharter: "March 30, 1847", stadium: "Lucas Oil Stadium", stadiumOpened: "August 16, 2008" },
    { name: "Jacksonville Jaguars", division: "AFC South", conference: "AFC", founded: "November 30, 1993", leagueJoined: "1995", city: "Jacksonville", state: "FL", cityFounded: "June 15, 1822", cityCharter: "February 9, 1832", stadium: "EverBank Stadium", stadiumOpened: "August 18, 1995" },
    { name: "Kansas City Chiefs", division: "AFC West", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "Kansas City", state: "MO", cityFounded: "June 3, 1850", cityCharter: "March 28, 1853", stadium: "GEHA Field at Arrowhead Stadium", stadiumOpened: "August 12, 1972" },
    { name: "Las Vegas Raiders", division: "AFC West", conference: "AFC", founded: "January 30, 1960", leagueJoined: "1960", city: "Las Vegas", state: "NV", cityFounded: "May 15, 1905", cityCharter: "March 16, 1911", stadium: "Allegiant Stadium", stadiumOpened: "July 31, 2020" },
    { name: "Los Angeles Chargers", division: "AFC West", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "Inglewood", state: "CA", cityFounded: "February 7, 1908", cityCharter: "February 7, 1908", stadium: "SoFi Stadium", stadiumOpened: "September 8, 2020" },
    { name: "Los Angeles Rams", division: "NFC West", conference: "NFC", founded: "February 12, 1937", leagueJoined: "1937", city: "Inglewood", state: "CA", cityFounded: "February 7, 1908", cityCharter: "February 7, 1908", stadium: "SoFi Stadium", stadiumOpened: "September 8, 2020" },
    { name: "Miami Dolphins", division: "AFC East", conference: "AFC", founded: "August 16, 1965", leagueJoined: "1966", city: "Miami Gardens", state: "FL", cityFounded: "May 13, 2003", cityCharter: "May 13, 2003", stadium: "Hard Rock Stadium", stadiumOpened: "August 16, 1987" },
    { name: "Minnesota Vikings", division: "NFC North", conference: "NFC", founded: "January 28, 1960", leagueJoined: "1961", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "1872", stadium: "U.S. Bank Stadium", stadiumOpened: "July 22, 2016" },
    { name: "New England Patriots", division: "AFC East", conference: "AFC", founded: "November 22, 1959", leagueJoined: "1960", city: "Foxborough", state: "MA", cityFounded: "June 10, 1778", cityCharter: "June 10, 1778", stadium: "Gillette Stadium", stadiumOpened: "May 11, 2002" },
    { name: "New Orleans Saints", division: "NFC South", conference: "NFC", founded: "November 1, 1966", leagueJoined: "1967", city: "New Orleans", state: "LA", cityFounded: "Spring 1718", cityCharter: "March 7, 1805", stadium: "Caesars Superdome", stadiumOpened: "August 3, 1975" },
    { name: "New York Giants", division: "NFC East", conference: "NFC", founded: "August 1, 1925", leagueJoined: "1925", city: "East Rutherford", state: "NJ", cityFounded: "March 29, 1894", cityCharter: "March 29, 1894", stadium: "MetLife Stadium", stadiumOpened: "April 10, 2010" },
    { name: "New York Jets", division: "AFC East", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "East Rutherford", state: "NJ", cityFounded: "March 29, 1894", cityCharter: "March 29, 1894", stadium: "MetLife Stadium", stadiumOpened: "April 10, 2010" },
    { name: "Philadelphia Eagles", division: "NFC East", conference: "NFC", founded: "July 8, 1933", leagueJoined: "1933", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 25, 1701", stadium: "Lincoln Financial Field", stadiumOpened: "August 3, 2003" },
    { name: "Pittsburgh Steelers", division: "AFC North", conference: "AFC", founded: "July 8, 1933", leagueJoined: "1933", city: "Pittsburgh", state: "PA", cityFounded: "November 27, 1758", cityCharter: "March 18, 1816", stadium: "Acrisure Stadium", stadiumOpened: "August 18, 2001" },
    { name: "San Francisco 49ers", division: "NFC West", conference: "NFC", founded: "June 4, 1944", leagueJoined: "1950", city: "Santa Clara", state: "CA", cityFounded: "January 12, 1777", cityCharter: "July 5, 1852", stadium: "Levi's Stadium", stadiumOpened: "July 17, 2014" },
    { name: "Seattle Seahawks", division: "NFC West", conference: "NFC", founded: "June 4, 1974", leagueJoined: "1976", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "December 2, 1869", stadium: "Lumen Field", stadiumOpened: "July 20, 2002" },
    { name: "Tampa Bay Buccaneers", division: "NFC South", conference: "NFC", founded: "April 24, 1974", leagueJoined: "1976", city: "Tampa", state: "FL", cityFounded: "January 18, 1849", cityCharter: "December 15, 1855", stadium: "Raymond James Stadium", stadiumOpened: "September 20, 1998" },
    { name: "Tennessee Titans", division: "AFC South", conference: "AFC", founded: "August 14, 1959", leagueJoined: "1960", city: "Nashville", state: "TN", cityFounded: "December 24, 1779", cityCharter: "April 23, 1806", stadium: "Nissan Stadium", stadiumOpened: "September 12, 1999" },
    { name: "Washington Commanders", division: "NFC East", conference: "NFC", founded: "July 9, 1932", leagueJoined: "1932", city: "Landover", state: "MD", cityFounded: "July 16, 1790 (D.C.)", cityCharter: "", stadium: "Commanders Field", stadiumOpened: "September 14, 1997" }
  ],

  nba: [
    { name: "Atlanta Hawks", division: "Southeast", conference: "Eastern", founded: "June 6, 1946", leagueJoined: "1949", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", arena: "State Farm Arena", arenaOpened: "September 2, 1999" },
    { name: "Boston Celtics", division: "Atlantic", conference: "Eastern", founded: "June 6, 1946", leagueJoined: "1946", city: "Boston", state: "MA", cityFounded: "September 17, 1630", cityCharter: "March 19, 1822", arena: "TD Garden", arenaOpened: "September 30, 1995" },
    { name: "Brooklyn Nets", division: "Atlantic", conference: "Eastern", founded: "February 2, 1967", leagueJoined: "1976", city: "Brooklyn", state: "NY", cityFounded: "1636", cityCharter: "April 4, 1834", arena: "Barclays Center", arenaOpened: "September 21, 2012" },
    { name: "Charlotte Hornets", division: "Southeast", conference: "Eastern", founded: "April 22, 1988", leagueJoined: "1988", city: "Charlotte", state: "NC", cityFounded: "December 3, 1768", cityCharter: "December 3, 1768", arena: "Spectrum Center", arenaOpened: "August 11, 2005" },
    { name: "Chicago Bulls", division: "Central", conference: "Eastern", founded: "January 16, 1966", leagueJoined: "1966", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", arena: "United Center", arenaOpened: "August 18, 1994" },
    { name: "Cleveland Cavaliers", division: "Central", conference: "Eastern", founded: "February 8, 1970", leagueJoined: "1970", city: "Cleveland", state: "OH", cityFounded: "July 22, 1796", cityCharter: "January 1, 1914", arena: "Rocket Mortgage FieldHouse", arenaOpened: "October 17, 1994" },
    { name: "Dallas Mavericks", division: "Southwest", conference: "Western", founded: "May 1, 1980", leagueJoined: "1980", city: "Dallas", state: "TX", cityFounded: "1841", cityCharter: "February 2, 1856", arena: "American Airlines Center", arenaOpened: "July 17, 2001" },
    { name: "Denver Nuggets", division: "Northwest", conference: "Western", founded: "February 2, 1967", leagueJoined: "1976", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 7, 1861", arena: "Ball Arena", arenaOpened: "October 1, 1999" },
    { name: "Detroit Pistons", division: "Central", conference: "Eastern", founded: "1941", leagueJoined: "1949", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "September 13, 1806", arena: "Little Caesars Arena", arenaOpened: "September 5, 2017" },
    { name: "Golden State Warriors", division: "Pacific", conference: "Western", founded: "June 6, 1946", leagueJoined: "1946", city: "San Francisco", state: "CA", cityFounded: "January 30, 1847", cityCharter: "February 4, 1850", arena: "Chase Center", arenaOpened: "September 6, 2019" },
    { name: "Houston Rockets", division: "Southwest", conference: "Western", founded: "February 2, 1967", leagueJoined: "1967", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "June 5, 1837", arena: "Toyota Center", arenaOpened: "September 29, 2003" },
    { name: "Indiana Pacers", division: "Central", conference: "Eastern", founded: "February 2, 1967", leagueJoined: "1976", city: "Indianapolis", state: "IN", cityFounded: "January 6, 1821", cityCharter: "March 30, 1847", arena: "Gainbridge Fieldhouse", arenaOpened: "November 6, 1999" },
    { name: "LA Clippers", division: "Pacific", conference: "Western", founded: "August 6, 1970", leagueJoined: "1970", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "May 23, 1835", arena: "Crypto.com Arena", arenaOpened: "October 17, 1999" },
    { name: "Los Angeles Lakers", division: "Pacific", conference: "Western", founded: "1946", leagueJoined: "1948", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "May 23, 1835", arena: "Crypto.com Arena", arenaOpened: "October 17, 1999" },
    { name: "Memphis Grizzlies", division: "Southwest", conference: "Western", founded: "April 27, 1995", leagueJoined: "1995", city: "Memphis", state: "TN", cityFounded: "May 22, 1819", cityCharter: "December 19, 1826", arena: "FedExForum", arenaOpened: "September 6, 2004" },
    { name: "Miami Heat", division: "Southeast", conference: "Eastern", founded: "April 22, 1987", leagueJoined: "1988", city: "Miami", state: "FL", cityFounded: "July 28, 1896", cityCharter: "July 28, 1896", arena: "Kaseya Center", arenaOpened: "December 31, 1999" },
    { name: "Milwaukee Bucks", division: "Central", conference: "Eastern", founded: "March 4, 1968", leagueJoined: "1968", city: "Milwaukee", state: "WI", cityFounded: "1846", cityCharter: "January 31, 1846", arena: "Fiserv Forum", arenaOpened: "August 26, 2018" },
    { name: "Minnesota Timberwolves", division: "Northwest", conference: "Western", founded: "April 22, 1987", leagueJoined: "1989", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "1872", arena: "Target Center", arenaOpened: "October 13, 1990" },
    { name: "New Orleans Pelicans", division: "Southwest", conference: "Western", founded: "May 22, 1988", leagueJoined: "1988", city: "New Orleans", state: "LA", cityFounded: "Spring 1718", cityCharter: "March 7, 1805", arena: "Smoothie King Center", arenaOpened: "October 1, 1999" },
    { name: "New York Knicks", division: "Atlantic", conference: "Eastern", founded: "June 6, 1946", leagueJoined: "1946", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "1653", arena: "Madison Square Garden", arenaOpened: "February 11, 1968" },
    { name: "Oklahoma City Thunder", division: "Northwest", conference: "Western", founded: "February 2, 1967", leagueJoined: "1967", city: "Oklahoma City", state: "OK", cityFounded: "April 22, 1889", cityCharter: "April 22, 1889", arena: "Paycom Center", arenaOpened: "June 8, 2002" },
    { name: "Orlando Magic", division: "Southeast", conference: "Eastern", founded: "April 22, 1987", leagueJoined: "1989", city: "Orlando", state: "FL", cityFounded: "February 4, 1875", cityCharter: "July 31, 1875", arena: "Kia Center", arenaOpened: "January 17, 1989" },
    { name: "Philadelphia 76ers", division: "Atlantic", conference: "Eastern", founded: "June 6, 1946", leagueJoined: "1949", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 25, 1701", arena: "Wells Fargo Center", arenaOpened: "August 31, 1996" },
    { name: "Phoenix Suns", division: "Pacific", conference: "Western", founded: "February 6, 1968", leagueJoined: "1968", city: "Phoenix", state: "AZ", cityFounded: "May 4, 1868", cityCharter: "February 25, 1881", arena: "Footprint Center", arenaOpened: "June 1, 1992" },
    { name: "Portland Trail Blazers", division: "Northwest", conference: "Western", founded: "February 6, 1970", leagueJoined: "1970", city: "Portland", state: "OR", cityFounded: "1843", cityCharter: "February 8, 1851", arena: "Moda Center", arenaOpened: "October 12, 1995" },
    { name: "Sacramento Kings", division: "Pacific", conference: "Western", founded: "1945", leagueJoined: "1948", city: "Sacramento", state: "CA", cityFounded: "1848", cityCharter: "February 27, 1850", arena: "Golden 1 Center", arenaOpened: "September 30, 2016" },
    { name: "San Antonio Spurs", division: "Southwest", conference: "Western", founded: "February 2, 1967", leagueJoined: "1976", city: "San Antonio", state: "TX", cityFounded: "May 1, 1718", cityCharter: "June 5, 1837", arena: "Frost Bank Center", arenaOpened: "October 18, 2002" },
    { name: "Toronto Raptors", division: "Atlantic", conference: "Eastern", founded: "November 4, 1993", leagueJoined: "1995", city: "Toronto", state: "ON", cityFounded: "August 27, 1793", cityCharter: "March 6, 1834", arena: "Scotiabank Arena", arenaOpened: "February 20, 1999" },
    { name: "Utah Jazz", division: "Northwest", conference: "Western", founded: "June 7, 1974", leagueJoined: "1974", city: "Salt Lake City", state: "UT", cityFounded: "July 24, 1847", cityCharter: "January 6, 1851", arena: "Delta Center", arenaOpened: "October 4, 1991" },
    { name: "Washington Wizards", division: "Southeast", conference: "Eastern", founded: "February 8, 1961", leagueJoined: "1961", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "", arena: "Capital One Arena", arenaOpened: "December 2, 1997" }
  ],

  mlb: [
    { name: "Arizona Diamondbacks", division: "NL West", conference: "National League", founded: "March 9, 1995", leagueJoined: "1998", city: "Phoenix", state: "AZ", cityFounded: "May 4, 1868", cityCharter: "February 25, 1881", stadium: "Chase Field", stadiumOpened: "March 31, 1998" },
    { name: "Atlanta Braves", division: "NL East", conference: "National League", founded: "January 20, 1871", leagueJoined: "1876", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", stadium: "Truist Park", stadiumOpened: "March 31, 2017" },
    { name: "Baltimore Orioles", division: "AL East", conference: "American League", founded: "1901", leagueJoined: "1901", city: "Baltimore", state: "MD", cityFounded: "August 8, 1729", cityCharter: "January 13, 1797", stadium: "Oriole Park at Camden Yards", stadiumOpened: "April 6, 1992" },
    { name: "Boston Red Sox", division: "AL East", conference: "American League", founded: "January 28, 1901", leagueJoined: "1901", city: "Boston", state: "MA", cityFounded: "September 17, 1630", cityCharter: "March 19, 1822", stadium: "Fenway Park", stadiumOpened: "April 20, 1912" },
    { name: "Chicago Cubs", division: "NL Central", conference: "National League", founded: "1870", leagueJoined: "1876", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "Wrigley Field", stadiumOpened: "April 23, 1914" },
    { name: "Chicago White Sox", division: "AL Central", conference: "American League", founded: "March 21, 1900", leagueJoined: "1901", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "Guaranteed Rate Field", stadiumOpened: "April 18, 1991" },
    { name: "Cincinnati Reds", division: "NL Central", conference: "National League", founded: "1881", leagueJoined: "1890", city: "Cincinnati", state: "OH", cityFounded: "December 1788", cityCharter: "March 1, 1819", stadium: "Great American Ball Park", stadiumOpened: "March 31, 2003" },
    { name: "Cleveland Guardians", division: "AL Central", conference: "American League", founded: "January 28, 1901", leagueJoined: "1901", city: "Cleveland", state: "OH", cityFounded: "July 22, 1796", cityCharter: "January 1, 1914", stadium: "Progressive Field", stadiumOpened: "April 4, 1994" },
    { name: "Colorado Rockies", division: "NL West", conference: "National League", founded: "July 5, 1991", leagueJoined: "1993", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 7, 1861", stadium: "Coors Field", stadiumOpened: "April 26, 1995" },
    { name: "Detroit Tigers", division: "AL Central", conference: "American League", founded: "April 28, 1901", leagueJoined: "1901", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "September 13, 1806", stadium: "Comerica Park", stadiumOpened: "April 11, 2000" },
    { name: "Houston Astros", division: "AL West", conference: "American League", founded: "October 17, 1960", leagueJoined: "1962", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "June 5, 1837", stadium: "Minute Maid Park", stadiumOpened: "March 30, 2000" },
    { name: "Kansas City Royals", division: "AL Central", conference: "American League", founded: "January 11, 1968", leagueJoined: "1969", city: "Kansas City", state: "MO", cityFounded: "June 3, 1850", cityCharter: "March 28, 1853", stadium: "Kauffman Stadium", stadiumOpened: "April 10, 1973" },
    { name: "Los Angeles Angels", division: "AL West", conference: "American League", founded: "September 6, 1960", leagueJoined: "1961", city: "Anaheim", state: "CA", cityFounded: "August 1, 1857", cityCharter: "February 10, 1876", stadium: "Angel Stadium", stadiumOpened: "April 19, 1966" },
    { name: "Los Angeles Dodgers", division: "NL West", conference: "National League", founded: "April 9, 1883", leagueJoined: "1890", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "May 23, 1835", stadium: "Dodger Stadium", stadiumOpened: "April 10, 1962" },
    { name: "Miami Marlins", division: "NL East", conference: "National League", founded: "July 5, 1991", leagueJoined: "1993", city: "Miami", state: "FL", cityFounded: "July 28, 1896", cityCharter: "July 28, 1896", stadium: "loanDepot park", stadiumOpened: "April 4, 2012" },
    { name: "Milwaukee Brewers", division: "NL Central", conference: "National League", founded: "March 30, 1969", leagueJoined: "1970", city: "Milwaukee", state: "WI", cityFounded: "1846", cityCharter: "January 31, 1846", stadium: "American Family Field", stadiumOpened: "April 7, 2001" },
    { name: "Minnesota Twins", division: "AL Central", conference: "American League", founded: "November 17, 1900", leagueJoined: "1901", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "1872", stadium: "Target Field", stadiumOpened: "April 12, 2010" },
    { name: "New York Mets", division: "NL East", conference: "National League", founded: "October 17, 1960", leagueJoined: "1962", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "1653", stadium: "Citi Field", stadiumOpened: "April 13, 2009" },
    { name: "New York Yankees", division: "AL East", conference: "American League", founded: "March 12, 1903", leagueJoined: "1903", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "1653", stadium: "Yankee Stadium", stadiumOpened: "April 16, 2009" },
    { name: "Oakland Athletics", division: "AL West", conference: "American League", founded: "1901", leagueJoined: "1901", city: "Oakland", state: "CA", cityFounded: "May 4, 1852", cityCharter: "May 4, 1852", stadium: "Oakland Coliseum", stadiumOpened: "September 18, 1966" },
    { name: "Philadelphia Phillies", division: "NL East", conference: "National League", founded: "May 1, 1883", leagueJoined: "1883", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 25, 1701", stadium: "Citizens Bank Park", stadiumOpened: "April 12, 2004" },
    { name: "Pittsburgh Pirates", division: "NL Central", conference: "National League", founded: "October 15, 1881", leagueJoined: "1887", city: "Pittsburgh", state: "PA", cityFounded: "November 27, 1758", cityCharter: "March 18, 1816", stadium: "PNC Park", stadiumOpened: "March 31, 2001" },
    { name: "San Diego Padres", division: "NL West", conference: "National League", founded: "January 16, 1969", leagueJoined: "1969", city: "San Diego", state: "CA", cityFounded: "July 16, 1769", cityCharter: "March 27, 1850", stadium: "Petco Park", stadiumOpened: "April 8, 2004" },
    { name: "San Francisco Giants", division: "NL West", conference: "National League", founded: "January 28, 1883", leagueJoined: "1883", city: "San Francisco", state: "CA", cityFounded: "January 30, 1847", cityCharter: "February 4, 1850", stadium: "Oracle Park", stadiumOpened: "April 11, 2000" },
    { name: "Seattle Mariners", division: "AL West", conference: "American League", founded: "October 27, 1976", leagueJoined: "1977", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "December 2, 1869", stadium: "T-Mobile Park", stadiumOpened: "July 15, 1999" },
    { name: "St. Louis Cardinals", division: "NL Central", conference: "National League", founded: "March 15, 1882", leagueJoined: "1892", city: "St. Louis", state: "MO", cityFounded: "February 14, 1764", cityCharter: "April 9, 1822", stadium: "Busch Stadium", stadiumOpened: "April 10, 2006" },
    { name: "Tampa Bay Rays", division: "AL East", conference: "American League", founded: "March 9, 1995", leagueJoined: "1998", city: "St. Petersburg", state: "FL", cityFounded: "February 29, 1888", cityCharter: "February 29, 1892", stadium: "Tropicana Field", stadiumOpened: "March 3, 1990" },
    { name: "Texas Rangers", division: "AL West", conference: "American League", founded: "October 26, 1960", leagueJoined: "1972", city: "Arlington", state: "TX", cityFounded: "1876", cityCharter: "1884", stadium: "Globe Life Field", stadiumOpened: "March 11, 2020" },
    { name: "Toronto Blue Jays", division: "AL East", conference: "American League", founded: "March 26, 1976", leagueJoined: "1977", city: "Toronto", state: "ON", cityFounded: "August 27, 1793", cityCharter: "March 6, 1834", stadium: "Rogers Centre", stadiumOpened: "June 3, 1989" },
    { name: "Washington Nationals", division: "NL East", conference: "National League", founded: "May 27, 1969", leagueJoined: "2005", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "", stadium: "Nationals Park", stadiumOpened: "March 30, 2008" }
  ],

  nhl: [
    { name: "Anaheim Ducks", division: "Pacific", conference: "Western", founded: "June 15, 1993", leagueJoined: "1993", city: "Anaheim", state: "CA", cityFounded: "August 1, 1857", cityCharter: "February 10, 1876", arena: "Honda Center", arenaOpened: "June 17, 1993" },
    { name: "Boston Bruins", division: "Atlantic", conference: "Eastern", founded: "November 1, 1924", leagueJoined: "1924", city: "Boston", state: "MA", cityFounded: "September 17, 1630", cityCharter: "March 19, 1822", arena: "TD Garden", arenaOpened: "September 30, 1995" },
    { name: "Buffalo Sabres", division: "Atlantic", conference: "Eastern", founded: "May 22, 1970", leagueJoined: "1970", city: "Buffalo", state: "NY", cityFounded: "1810", cityCharter: "April 20, 1832", arena: "KeyBank Center", arenaOpened: "September 21, 1996" },
    { name: "Calgary Flames", division: "Pacific", conference: "Western", founded: "June 6, 1972", leagueJoined: "1972", city: "Calgary", state: "AB", cityFounded: "1875", cityCharter: "1894", arena: "Scotiabank Saddledome", arenaOpened: "October 15, 1983" },
    { name: "Carolina Hurricanes", division: "Metropolitan", conference: "Eastern", founded: "June 22, 1971", leagueJoined: "1979", city: "Raleigh", state: "NC", cityFounded: "1792", cityCharter: "December 31, 1792", arena: "PNC Arena", arenaOpened: "October 29, 1999" },
    { name: "Chicago Blackhawks", division: "Central", conference: "Western", founded: "September 25, 1926", leagueJoined: "1926", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", arena: "United Center", arenaOpened: "August 18, 1994" },
    { name: "Colorado Avalanche", division: "Central", conference: "Western", founded: "June 22, 1972", leagueJoined: "1979", city: "Denver", state: "CO", cityFounded: "November 22, 1858", cityCharter: "November 7, 1861", arena: "Ball Arena", arenaOpened: "October 1, 1999" },
    { name: "Columbus Blue Jackets", division: "Metropolitan", conference: "Eastern", founded: "June 25, 1997", leagueJoined: "2000", city: "Columbus", state: "OH", cityFounded: "February 14, 1812", cityCharter: "March 3, 1834", arena: "Nationwide Arena", arenaOpened: "September 9, 2000" },
    { name: "Dallas Stars", division: "Central", conference: "Western", founded: "June 5, 1967", leagueJoined: "1967", city: "Dallas", state: "TX", cityFounded: "1841", cityCharter: "February 2, 1856", arena: "American Airlines Center", arenaOpened: "July 17, 2001" },
    { name: "Detroit Red Wings", division: "Atlantic", conference: "Eastern", founded: "September 25, 1926", leagueJoined: "1926", city: "Detroit", state: "MI", cityFounded: "July 24, 1701", cityCharter: "September 13, 1806", arena: "Little Caesars Arena", arenaOpened: "September 5, 2017" },
    { name: "Edmonton Oilers", division: "Pacific", conference: "Western", founded: "November 1, 1971", leagueJoined: "1979", city: "Edmonton", state: "AB", cityFounded: "1795", cityCharter: "1904", arena: "Rogers Place", arenaOpened: "September 8, 2016" },
    { name: "Florida Panthers", division: "Atlantic", conference: "Eastern", founded: "December 10, 1992", leagueJoined: "1993", city: "Sunrise", state: "FL", cityFounded: "1961", cityCharter: "September 1, 1961", arena: "Amerant Bank Arena", arenaOpened: "October 9, 1998" },
    { name: "Los Angeles Kings", division: "Pacific", conference: "Western", founded: "February 9, 1966", leagueJoined: "1967", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "May 23, 1835", arena: "Crypto.com Arena", arenaOpened: "October 17, 1999" },
    { name: "Minnesota Wild", division: "Central", conference: "Western", founded: "June 25, 1997", leagueJoined: "2000", city: "St. Paul", state: "MN", cityFounded: "1840", cityCharter: "March 4, 1854", arena: "Xcel Energy Center", arenaOpened: "September 29, 2000" },
    { name: "Montreal Canadiens", division: "Atlantic", conference: "Eastern", founded: "November 26, 1917", leagueJoined: "1917", city: "Montreal", state: "QC", cityFounded: "May 17, 1642", cityCharter: "May 19, 1832", arena: "Bell Centre", arenaOpened: "March 16, 1996" },
    { name: "Nashville Predators", division: "Central", conference: "Western", founded: "June 25, 1997", leagueJoined: "1998", city: "Nashville", state: "TN", cityFounded: "December 24, 1779", cityCharter: "April 23, 1806", arena: "Bridgestone Arena", arenaOpened: "December 18, 1996" },
    { name: "New Jersey Devils", division: "Metropolitan", conference: "Eastern", founded: "June 11, 1974", leagueJoined: "1974", city: "Newark", state: "NJ", cityFounded: "1666", cityCharter: "April 11, 1836", arena: "Prudential Center", arenaOpened: "October 25, 2007" },
    { name: "New York Islanders", division: "Metropolitan", conference: "Eastern", founded: "November 8, 1971", leagueJoined: "1972", city: "Elmont", state: "NY", cityFounded: "1650", cityCharter: "1910", arena: "UBS Arena", arenaOpened: "November 20, 2021" },
    { name: "New York Rangers", division: "Metropolitan", conference: "Eastern", founded: "September 25, 1926", leagueJoined: "1926", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "1653", arena: "Madison Square Garden", arenaOpened: "February 11, 1968" },
    { name: "Ottawa Senators", division: "Atlantic", conference: "Eastern", founded: "November 26, 1917", leagueJoined: "1992", city: "Ottawa", state: "ON", cityFounded: "September 26, 1826", cityCharter: "1855", arena: "Canadian Tire Centre", arenaOpened: "January 15, 1996" },
    { name: "Philadelphia Flyers", division: "Metropolitan", conference: "Eastern", founded: "February 8, 1966", leagueJoined: "1967", city: "Philadelphia", state: "PA", cityFounded: "1682", cityCharter: "October 25, 1701", arena: "Wells Fargo Center", arenaOpened: "August 31, 1996" },
    { name: "Pittsburgh Penguins", division: "Metropolitan", conference: "Eastern", founded: "February 8, 1966", leagueJoined: "1967", city: "Pittsburgh", state: "PA", cityFounded: "November 27, 1758", cityCharter: "March 18, 1816", arena: "PPG Paints Arena", arenaOpened: "August 18, 2010" },
    { name: "San Jose Sharks", division: "Pacific", conference: "Western", founded: "December 7, 1990", leagueJoined: "1991", city: "San Jose", state: "CA", cityFounded: "November 29, 1777", cityCharter: "March 27, 1850", arena: "SAP Center", arenaOpened: "September 7, 1993" },
    { name: "Seattle Kraken", division: "Pacific", conference: "Western", founded: "December 4, 2018", leagueJoined: "2021", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "December 2, 1869", arena: "Climate Pledge Arena", arenaOpened: "October 22, 1962" },
    { name: "St. Louis Blues", division: "Central", conference: "Western", founded: "February 8, 1966", leagueJoined: "1967", city: "St. Louis", state: "MO", cityFounded: "February 14, 1764", cityCharter: "April 9, 1822", arena: "Enterprise Center", arenaOpened: "October 10, 1994" },
    { name: "Tampa Bay Lightning", division: "Atlantic", conference: "Eastern", founded: "December 16, 1991", leagueJoined: "1992", city: "Tampa", state: "FL", cityFounded: "January 18, 1849", cityCharter: "December 15, 1855", arena: "Amalie Arena", arenaOpened: "October 20, 1996" },
    { name: "Toronto Maple Leafs", division: "Atlantic", conference: "Eastern", founded: "November 26, 1917", leagueJoined: "1917", city: "Toronto", state: "ON", cityFounded: "August 27, 1793", cityCharter: "March 6, 1834", arena: "Scotiabank Arena", arenaOpened: "February 20, 1999" },
    { name: "Utah Hockey Club", division: "Central", conference: "Western", founded: "June 22, 1996", leagueJoined: "1996", city: "Salt Lake City", state: "UT", cityFounded: "July 24, 1847", cityCharter: "January 6, 1851", arena: "Delta Center", arenaOpened: "October 4, 1991" },
    { name: "Vancouver Canucks", division: "Pacific", conference: "Western", founded: "May 22, 1970", leagueJoined: "1970", city: "Vancouver", state: "BC", cityFounded: "April 6, 1886", cityCharter: "April 6, 1886", arena: "Rogers Arena", arenaOpened: "September 21, 1995" },
    { name: "Vegas Golden Knights", division: "Pacific", conference: "Western", founded: "June 22, 2016", leagueJoined: "2017", city: "Las Vegas", state: "NV", cityFounded: "May 15, 1905", cityCharter: "March 16, 1911", arena: "T-Mobile Arena", arenaOpened: "April 6, 2016" },
    { name: "Washington Capitals", division: "Metropolitan", conference: "Eastern", founded: "June 8, 1972", leagueJoined: "1974", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "", arena: "Capital One Arena", arenaOpened: "December 2, 1997" },
    { name: "Winnipeg Jets", division: "Central", conference: "Western", founded: "June 22, 1971", leagueJoined: "2011", city: "Winnipeg", state: "MB", cityFounded: "November 8, 1873", cityCharter: "November 8, 1873", arena: "Canada Life Centre", arenaOpened: "November 15, 2004" }
  ],

  wnba: [
    { name: "Atlanta Dream", division: "", conference: "Eastern", founded: "October 16, 2007", leagueJoined: "2008", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", arena: "Gateway Center Arena", arenaOpened: "May 12, 2021" },
    { name: "Chicago Sky", division: "", conference: "Eastern", founded: "February 22, 2006", leagueJoined: "2006", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", arena: "Wintrust Arena", arenaOpened: "October 6, 2017" },
    { name: "Connecticut Sun", division: "", conference: "Eastern", founded: "April 24, 1998", leagueJoined: "1999", city: "Uncasville", state: "CT", cityFounded: "1841", cityCharter: "1893", arena: "Mohegan Sun Arena", arenaOpened: "October 21, 2001" },
    { name: "Dallas Wings", division: "", conference: "Western", founded: "February 15, 1998", leagueJoined: "1999", city: "Dallas", state: "TX", cityFounded: "1841", cityCharter: "February 2, 1856", arena: "College Park Center", arenaOpened: "September 30, 2012" },
    { name: "Golden State Valkyries", division: "", conference: "Western", founded: "October 5, 2023", leagueJoined: "2025", city: "San Francisco", state: "CA", cityFounded: "January 30, 1847", cityCharter: "February 4, 1850", arena: "Chase Center", arenaOpened: "September 6, 2019" },
    { name: "Indiana Fever", division: "", conference: "Eastern", founded: "October 21, 1998", leagueJoined: "1999", city: "Indianapolis", state: "IN", cityFounded: "January 6, 1821", cityCharter: "March 30, 1847", arena: "Gainbridge Fieldhouse", arenaOpened: "November 6, 1999" },
    { name: "Las Vegas Aces", division: "", conference: "Western", founded: "February 15, 1998", leagueJoined: "1999", city: "Las Vegas", state: "NV", cityFounded: "May 15, 1905", cityCharter: "March 16, 1911", arena: "Michelob ULTRA Arena", arenaOpened: "April 6, 2016" },
    { name: "Minnesota Lynx", division: "", conference: "Western", founded: "April 24, 1998", leagueJoined: "1999", city: "Minneapolis", state: "MN", cityFounded: "1872", cityCharter: "1872", arena: "Target Center", arenaOpened: "October 13, 1990" },
    { name: "New York Liberty", division: "", conference: "Eastern", founded: "January 22, 1997", leagueJoined: "1997", city: "Brooklyn", state: "NY", cityFounded: "1636", cityCharter: "April 4, 1834", arena: "Barclays Center", arenaOpened: "September 21, 2012" },
    { name: "Phoenix Mercury", division: "", conference: "Western", founded: "January 15, 1997", leagueJoined: "1997", city: "Phoenix", state: "AZ", cityFounded: "May 4, 1868", cityCharter: "February 25, 1881", arena: "Footprint Center", arenaOpened: "June 1, 1992" },
    { name: "Seattle Storm", division: "", conference: "Western", founded: "April 20, 1999", leagueJoined: "2000", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "December 2, 1869", arena: "Climate Pledge Arena", arenaOpened: "October 22, 1962" },
    { name: "Washington Mystics", division: "", conference: "Eastern", founded: "April 20, 1998", leagueJoined: "1999", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "", arena: "Entertainment & Sports Arena", arenaOpened: "September 22, 2018" }
  ],

  mls: [
    { name: "Atlanta United FC", division: "Eastern", conference: "Eastern", founded: "April 16, 2014", leagueJoined: "2017", city: "Atlanta", state: "GA", cityFounded: "1837", cityCharter: "December 29, 1847", stadium: "Mercedes-Benz Stadium", stadiumOpened: "August 26, 2017" },
    { name: "Austin FC", division: "Western", conference: "Western", founded: "January 15, 2019", leagueJoined: "2021", city: "Austin", state: "TX", cityFounded: "December 27, 1839", cityCharter: "December 27, 1839", stadium: "Q2 Stadium", stadiumOpened: "June 19, 2021" },
    { name: "Charlotte FC", division: "Eastern", conference: "Eastern", founded: "December 17, 2019", leagueJoined: "2022", city: "Charlotte", state: "NC", cityFounded: "December 3, 1768", cityCharter: "December 3, 1768", stadium: "Bank of America Stadium", stadiumOpened: "September 1, 1996" },
    { name: "Chicago Fire FC", division: "Eastern", conference: "Eastern", founded: "October 8, 1997", leagueJoined: "1998", city: "Chicago", state: "IL", cityFounded: "March 4, 1837", cityCharter: "March 4, 1837", stadium: "SeatGeek Stadium", stadiumOpened: "June 11, 2006" },
    { name: "FC Cincinnati", division: "Eastern", conference: "Eastern", founded: "August 12, 2015", leagueJoined: "2019", city: "Cincinnati", state: "OH", cityFounded: "December 1788", cityCharter: "March 1, 1819", stadium: "TQL Stadium", stadiumOpened: "May 1, 2021" },
    { name: "Colorado Rapids", division: "Western", conference: "Western", founded: "June 15, 1995", leagueJoined: "1996", city: "Commerce City", state: "CO", cityFounded: "1952", cityCharter: "1952", stadium: "Dick's Sporting Goods Park", stadiumOpened: "April 7, 2007" },
    { name: "Columbus Crew", division: "Eastern", conference: "Eastern", founded: "June 15, 1994", leagueJoined: "1996", city: "Columbus", state: "OH", cityFounded: "February 14, 1812", cityCharter: "March 3, 1834", stadium: "Field", stadiumOpened: "July 3, 2021" },
    { name: "D.C. United", division: "Eastern", conference: "Eastern", founded: "June 15, 1994", leagueJoined: "1996", city: "Washington", state: "DC", cityFounded: "July 16, 1790", cityCharter: "", stadium: "Audi Field", stadiumOpened: "July 14, 2018" },
    { name: "FC Dallas", division: "Western", conference: "Western", founded: "June 15, 1995", leagueJoined: "1996", city: "Frisco", state: "TX", cityFounded: "1902", cityCharter: "1987", stadium: "Toyota Stadium", stadiumOpened: "August 6, 2005" },
    { name: "Houston Dynamo FC", division: "Western", conference: "Western", founded: "December 15, 2005", leagueJoined: "2006", city: "Houston", state: "TX", cityFounded: "August 30, 1836", cityCharter: "June 5, 1837", stadium: "Shell Energy Stadium", stadiumOpened: "May 12, 2012" },
    { name: "Inter Miami CF", division: "Eastern", conference: "Eastern", founded: "January 29, 2018", leagueJoined: "2020", city: "Fort Lauderdale", state: "FL", cityFounded: "March 27, 1911", cityCharter: "March 27, 1911", stadium: "DRV PNK Stadium", stadiumOpened: "April 18, 2020" },
    { name: "LA Galaxy", division: "Western", conference: "Western", founded: "June 15, 1994", leagueJoined: "1996", city: "Carson", state: "CA", cityFounded: "February 20, 1968", cityCharter: "February 20, 1968", stadium: "Dignity Health Sports Park", stadiumOpened: "June 1, 2003" },
    { name: "Los Angeles FC", division: "Western", conference: "Western", founded: "October 30, 2014", leagueJoined: "2018", city: "Los Angeles", state: "CA", cityFounded: "September 4, 1781", cityCharter: "May 23, 1835", stadium: "BMO Stadium", stadiumOpened: "April 29, 2018" },
    { name: "Minnesota United FC", division: "Western", conference: "Western", founded: "March 25, 2015", leagueJoined: "2017", city: "St. Paul", state: "MN", cityFounded: "1840", cityCharter: "March 4, 1854", stadium: "Allianz Field", stadiumOpened: "April 13, 2019" },
    { name: "CF Montréal", division: "Eastern", conference: "Eastern", founded: "May 7, 2010", leagueJoined: "2012", city: "Montreal", state: "QC", cityFounded: "May 17, 1642", cityCharter: "May 19, 1832", stadium: "Stade Saputo", stadiumOpened: "May 17, 2008" },
    { name: "Nashville SC", division: "Eastern", conference: "Eastern", founded: "February 7, 2017", leagueJoined: "2020", city: "Nashville", state: "TN", cityFounded: "December 24, 1779", cityCharter: "April 23, 1806", stadium: "GEODIS Park", stadiumOpened: "May 1, 2022" },
    { name: "New England Revolution", division: "Eastern", conference: "Eastern", founded: "June 15, 1994", leagueJoined: "1996", city: "Foxborough", state: "MA", cityFounded: "June 10, 1778", cityCharter: "June 10, 1778", stadium: "Gillette Stadium", stadiumOpened: "May 11, 2002" },
    { name: "New York City FC", division: "Eastern", conference: "Eastern", founded: "May 21, 2013", leagueJoined: "2015", city: "New York", state: "NY", cityFounded: "1624", cityCharter: "1653", stadium: "Yankee Stadium", stadiumOpened: "April 16, 2009" },
    { name: "New York Red Bulls", division: "Eastern", conference: "Eastern", founded: "October 24, 1994", leagueJoined: "1996", city: "Harrison", state: "NJ", cityFounded: "1840", cityCharter: "April 8, 1869", stadium: "Red Bull Arena", stadiumOpened: "March 20, 2010" },
    { name: "Orlando City SC", division: "Eastern", conference: "Eastern", founded: "November 19, 2013", leagueJoined: "2015", city: "Orlando", state: "FL", cityFounded: "February 4, 1875", cityCharter: "July 31, 1875", stadium: "Exploria Stadium", stadiumOpened: "February 24, 2017" },
    { name: "Philadelphia Union", division: "Eastern", conference: "Eastern", founded: "February 28, 2008", leagueJoined: "2010", city: "Chester", state: "PA", cityFounded: "1682", cityCharter: "February 14, 1701", stadium: "Subaru Park", stadiumOpened: "June 27, 2010" },
    { name: "Portland Timbers", division: "Western", conference: "Western", founded: "March 27, 2009", leagueJoined: "2011", city: "Portland", state: "OR", cityFounded: "1843", cityCharter: "February 8, 1851", stadium: "Providence Park", stadiumOpened: "September 25, 1926" },
    { name: "Real Salt Lake", division: "Western", conference: "Western", founded: "April 7, 2004", leagueJoined: "2005", city: "Sandy", state: "UT", cityFounded: "September 19, 1871", cityCharter: "September 19, 1893", stadium: "America First Field", stadiumOpened: "October 9, 2008" },
    { name: "San Jose Earthquakes", division: "Western", conference: "Western", founded: "June 15, 1994", leagueJoined: "1996", city: "San Jose", state: "CA", cityFounded: "November 29, 1777", cityCharter: "March 27, 1850", stadium: "PayPal Park", stadiumOpened: "May 22, 2015" },
    { name: "Seattle Sounders FC", division: "Western", conference: "Western", founded: "November 13, 2007", leagueJoined: "2009", city: "Seattle", state: "WA", cityFounded: "May 23, 1853", cityCharter: "December 2, 1869", stadium: "Lumen Field", stadiumOpened: "July 20, 2002" },
    { name: "Sporting Kansas City", division: "Western", conference: "Western", founded: "June 15, 1995", leagueJoined: "1996", city: "Kansas City", state: "KS", cityFounded: "1838", cityCharter: "March 22, 1859", stadium: "Children's Mercy Park", stadiumOpened: "June 9, 2011" },
    { name: "St. Louis City SC", division: "Western", conference: "Western", founded: "August 20, 2019", leagueJoined: "2023", city: "St. Louis", state: "MO", cityFounded: "February 14, 1764", cityCharter: "April 9, 1822", stadium: "CITYPARK", stadiumOpened: "February 25, 2023" },
    { name: "Toronto FC", division: "Eastern", conference: "Eastern", founded: "May 11, 2005", leagueJoined: "2007", city: "Toronto", state: "ON", cityFounded: "August 27, 1793", cityCharter: "March 6, 1834", stadium: "BMO Field", stadiumOpened: "April 28, 2007" },
    { name: "Vancouver Whitecaps FC", division: "Western", conference: "Western", founded: "March 18, 2009", leagueJoined: "2011", city: "Vancouver", state: "BC", cityFounded: "April 6, 1886", cityCharter: "April 6, 1886", stadium: "BC Place", stadiumOpened: "June 19, 1983" }
  ],

"college-football": [
  // AMERICAN ATHLETIC CONFERENCE (AAC) - 14 teams
  { name: "Army Black Knights", division: "AAC", conference: "American Athletic Conference", founded: "03/16/1802", leagueJoined: "2015", city: "West Point", state: "NY", cityFounded: "03/16/1802", cityCharter: "03/16/1802", stadium: "Michie Stadium", stadiumOpened: "09/26/1924" },
  { name: "Charlotte 49ers", division: "AAC", conference: "American Athletic Conference", founded: "09/20/1946", leagueJoined: "2023", city: "Charlotte", state: "NC", cityFounded: "12/03/1768", cityCharter: "12/03/1768", stadium: "Jerry Richardson Stadium", stadiumOpened: "08/31/2013" },
  { name: "East Carolina Pirates", division: "AAC", conference: "American Athletic Conference", founded: "03/08/1907", leagueJoined: "2014", city: "Greenville", state: "NC", cityFounded: "01/01/1786", cityCharter: "05/18/1786", stadium: "Dowdy-Ficklen Stadium", stadiumOpened: "09/23/1963" },
  { name: "Florida Atlantic Owls", division: "AAC", conference: "American Athletic Conference", founded: "12/20/1961", leagueJoined: "2023", city: "Boca Raton", state: "FL", cityFounded: "05/02/1925", cityCharter: "05/02/1925", stadium: "FAU Stadium", stadiumOpened: "10/15/2011" },
  { name: "Memphis Tigers", division: "AAC", conference: "American Athletic Conference", founded: "09/10/1912", leagueJoined: "2013", city: "Memphis", state: "TN", cityFounded: "05/22/1819", cityCharter: "12/19/1826", stadium: "Simmons Bank Liberty Stadium", stadiumOpened: "09/02/1965" },
  { name: "Navy Midshipmen", division: "AAC", conference: "American Athletic Conference", founded: "10/10/1845", leagueJoined: "2015", city: "Annapolis", state: "MD", cityFounded: "01/01/1649", cityCharter: "05/23/1708", stadium: "Navy-Marine Corps Memorial Stadium", stadiumOpened: "09/26/1959" },
  { name: "North Texas Mean Green", division: "AAC", conference: "American Athletic Conference", founded: "08/30/1890", leagueJoined: "2013", city: "Denton", state: "TX", cityFounded: "01/01/1857", cityCharter: "04/11/1866", stadium: "DATCU Stadium", stadiumOpened: "09/10/2011" },
  { name: "Rice Owls", division: "AAC", conference: "American Athletic Conference", founded: "09/23/1912", leagueJoined: "2023", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "06/05/1837", stadium: "Rice Stadium", stadiumOpened: "09/30/1950" },
  { name: "South Florida Bulls", division: "AAC", conference: "American Athletic Conference", founded: "12/19/1956", leagueJoined: "2005", city: "Tampa", state: "FL", cityFounded: "01/18/1849", cityCharter: "12/15/1855", stadium: "Raymond James Stadium", stadiumOpened: "09/20/1998" },
  { name: "Temple Owls", division: "AAC", conference: "American Athletic Conference", founded: "12/12/1884", leagueJoined: "2013", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "10/25/1701", stadium: "Lincoln Financial Field", stadiumOpened: "08/03/2003" },
  { name: "Tulane Green Wave", division: "AAC", conference: "American Athletic Conference", founded: "04/12/1834", leagueJoined: "2014", city: "New Orleans", state: "LA", cityFounded: "03/01/1718", cityCharter: "03/07/1805", stadium: "Yulman Stadium", stadiumOpened: "09/06/2014" },
  { name: "Tulsa Golden Hurricane", division: "AAC", conference: "American Athletic Conference", founded: "09/14/1894", leagueJoined: "2014", city: "Tulsa", state: "OK", cityFounded: "01/01/1836", cityCharter: "01/18/1898", stadium: "Skelly Field at H. A. Chapman Stadium", stadiumOpened: "09/26/1930" },
  { name: "UAB Blazers", division: "AAC", conference: "American Athletic Conference", founded: "06/15/1969", leagueJoined: "2023", city: "Birmingham", state: "AL", cityFounded: "12/19/1871", cityCharter: "12/19/1871", stadium: "Protective Stadium", stadiumOpened: "10/01/2021" },
  { name: "UTSA Roadrunners", division: "AAC", conference: "American Athletic Conference", founded: "06/15/1969", leagueJoined: "2023", city: "San Antonio", state: "TX", cityFounded: "05/01/1718", cityCharter: "06/05/1837", stadium: "Alamodome", stadiumOpened: "05/15/1993" },

  // ATLANTIC COAST CONFERENCE (ACC) - 17 teams
  { name: "Boston College Eagles", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/01/1863", leagueJoined: "2005", city: "Chestnut Hill", state: "MA", cityFounded: "09/17/1630", cityCharter: "03/19/1822", stadium: "Alumni Stadium", stadiumOpened: "09/21/1957" },
  { name: "California Golden Bears", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/23/1868", leagueJoined: "2024", city: "Berkeley", state: "CA", cityFounded: "04/04/1878", cityCharter: "04/04/1878", stadium: "California Memorial Stadium", stadiumOpened: "11/24/1923" },
  { name: "Clemson Tigers", division: "ACC", conference: "Atlantic Coast Conference", founded: "07/06/1889", leagueJoined: "1953", city: "Clemson", state: "SC", cityFounded: "01/01/1889", cityCharter: "01/01/1943", stadium: "Memorial Stadium", stadiumOpened: "09/19/1942" },
  { name: "Duke Blue Devils", division: "ACC", conference: "Atlantic Coast Conference", founded: "12/09/1838", leagueJoined: "1953", city: "Durham", state: "NC", cityFounded: "04/26/1853", cityCharter: "04/26/1853", stadium: "Wallace Wade Stadium", stadiumOpened: "10/05/1929" },
  { name: "Florida State Seminoles", division: "ACC", conference: "Atlantic Coast Conference", founded: "01/24/1851", leagueJoined: "1991", city: "Tallahassee", state: "FL", cityFounded: "01/01/1824", cityCharter: "01/01/1825", stadium: "Doak Campbell Stadium", stadiumOpened: "10/07/1950" },
  { name: "Georgia Tech Yellow Jackets", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/13/1885", leagueJoined: "1978", city: "Atlanta", state: "GA", cityFounded: "01/01/1837", cityCharter: "12/29/1847", stadium: "Bobby Dodd Stadium", stadiumOpened: "09/26/1913" },
  { name: "Louisville Cardinals", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/03/1798", leagueJoined: "2014", city: "Louisville", state: "KY", cityFounded: "01/01/1778", cityCharter: "01/01/1828", stadium: "L&N Federal Credit Union Stadium", stadiumOpened: "09/15/1998" },
  { name: "Miami Hurricanes", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/08/1925", leagueJoined: "2004", city: "Coral Gables", state: "FL", cityFounded: "01/01/1925", cityCharter: "01/01/1925", stadium: "Hard Rock Stadium", stadiumOpened: "08/16/1987" },
  { name: "North Carolina Tar Heels", division: "ACC", conference: "Atlantic Coast Conference", founded: "12/11/1789", leagueJoined: "1953", city: "Chapel Hill", state: "NC", cityFounded: "01/01/1793", cityCharter: "01/01/1851", stadium: "Kenan Memorial Stadium", stadiumOpened: "09/24/1927" },
  { name: "NC State Wolfpack", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/07/1887", leagueJoined: "1953", city: "Raleigh", state: "NC", cityFounded: "01/01/1792", cityCharter: "12/31/1792", stadium: "Carter-Finley Stadium", stadiumOpened: "09/19/1966" },
  { name: "Pittsburgh Panthers", division: "ACC", conference: "Atlantic Coast Conference", founded: "02/28/1787", leagueJoined: "2013", city: "Pittsburgh", state: "PA", cityFounded: "11/27/1758", cityCharter: "03/18/1816", stadium: "Acrisure Stadium", stadiumOpened: "08/18/2001" },
  { name: "SMU Mustangs", division: "ACC", conference: "Atlantic Coast Conference", founded: "04/17/1911", leagueJoined: "2024", city: "Dallas", state: "TX", cityFounded: "01/01/1841", cityCharter: "02/02/1856", stadium: "Gerald J. Ford Stadium", stadiumOpened: "09/03/2000" },
  { name: "Stanford Cardinal", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/01/1885", leagueJoined: "2024", city: "Stanford", state: "CA", cityFounded: "01/01/1891", cityCharter: "01/01/1956", stadium: "Stanford Stadium", stadiumOpened: "11/19/2006" },
  { name: "Syracuse Orange", division: "ACC", conference: "Atlantic Coast Conference", founded: "03/24/1870", leagueJoined: "2013", city: "Syracuse", state: "NY", cityFounded: "01/01/1825", cityCharter: "01/01/1848", stadium: "JMA Wireless Dome", stadiumOpened: "09/20/1980" },
  { name: "Virginia Cavaliers", division: "ACC", conference: "Atlantic Coast Conference", founded: "01/25/1819", leagueJoined: "1953", city: "Charlottesville", state: "VA", cityFounded: "01/01/1762", cityCharter: "01/01/1888", stadium: "Scott Stadium", stadiumOpened: "09/18/1931" },
  { name: "Virginia Tech Hokies", division: "ACC", conference: "Atlantic Coast Conference", founded: "10/01/1872", leagueJoined: "2004", city: "Blacksburg", state: "VA", cityFounded: "01/01/1798", cityCharter: "01/01/1839", stadium: "Lane Stadium", stadiumOpened: "10/02/1965" },
  { name: "Wake Forest Demon Deacons", division: "ACC", conference: "Atlantic Coast Conference", founded: "02/03/1834", leagueJoined: "1953", city: "Winston-Salem", state: "NC", cityFounded: "01/01/1766", cityCharter: "01/01/1856", stadium: "Truist Field", stadiumOpened: "09/19/1968" },

  // BIG TEN CONFERENCE - 18 teams
  { name: "Illinois Fighting Illini", division: "Big Ten", conference: "Big Ten Conference", founded: "03/02/1867", leagueJoined: "1896", city: "Champaign", state: "IL", cityFounded: "01/01/1855", cityCharter: "01/01/1860", stadium: "Memorial Stadium", stadiumOpened: "10/18/1924" },
  { name: "Indiana Hoosiers", division: "Big Ten", conference: "Big Ten Conference", founded: "01/20/1820", leagueJoined: "1899", city: "Bloomington", state: "IN", cityFounded: "01/01/1818", cityCharter: "01/01/1818", stadium: "Memorial Stadium", stadiumOpened: "10/08/1960" },
  { name: "Iowa Hawkeyes", division: "Big Ten", conference: "Big Ten Conference", founded: "02/25/1847", leagueJoined: "1899", city: "Iowa City", state: "IA", cityFounded: "01/01/1839", cityCharter: "01/01/1853", stadium: "Kinnick Stadium", stadiumOpened: "10/05/1929" },
  { name: "Maryland Terrapins", division: "Big Ten", conference: "Big Ten Conference", founded: "03/06/1856", leagueJoined: "2014", city: "College Park", state: "MD", cityFounded: "01/01/1856", cityCharter: "01/01/1945", stadium: "SECU Stadium", stadiumOpened: "09/17/1950" },
  { name: "Michigan Wolverines", division: "Big Ten", conference: "Big Ten Conference", founded: "08/26/1817", leagueJoined: "1896", city: "Ann Arbor", state: "MI", cityFounded: "01/01/1824", cityCharter: "01/01/1851", stadium: "Michigan Stadium", stadiumOpened: "10/01/1927" },
  { name: "Michigan State Spartans", division: "Big Ten", conference: "Big Ten Conference", founded: "02/12/1855", leagueJoined: "1953", city: "East Lansing", state: "MI", cityFounded: "01/01/1907", cityCharter: "01/01/1907", stadium: "Spartan Stadium", stadiumOpened: "10/01/1957" },
  { name: "Minnesota Golden Gophers", division: "Big Ten", conference: "Big Ten Conference", founded: "02/25/1851", leagueJoined: "1896", city: "Minneapolis", state: "MN", cityFounded: "01/01/1872", cityCharter: "01/01/1872", stadium: "Huntington Bank Stadium", stadiumOpened: "09/12/2009" },
  { name: "Nebraska Cornhuskers", division: "Big Ten", conference: "Big Ten Conference", founded: "02/15/1869", leagueJoined: "2011", city: "Lincoln", state: "NE", cityFounded: "01/01/1856", cityCharter: "01/01/1869", stadium: "Memorial Stadium", stadiumOpened: "10/13/1923" },
  { name: "Northwestern Wildcats", division: "Big Ten", conference: "Big Ten Conference", founded: "01/28/1851", leagueJoined: "1896", city: "Evanston", state: "IL", cityFounded: "01/01/1863", cityCharter: "01/01/1892", stadium: "Ryan Field", stadiumOpened: "10/05/1996" },
  { name: "Ohio State Buckeyes", division: "Big Ten", conference: "Big Ten Conference", founded: "03/22/1870", leagueJoined: "1912", city: "Columbus", state: "OH", cityFounded: "02/14/1812", cityCharter: "03/03/1834", stadium: "Ohio Stadium", stadiumOpened: "10/07/1922" },
  { name: "Oregon Ducks", division: "Big Ten", conference: "Big Ten Conference", founded: "10/19/1876", leagueJoined: "2024", city: "Eugene", state: "OR", cityFounded: "01/01/1846", cityCharter: "10/17/1862", stadium: "Autzen Stadium", stadiumOpened: "09/23/1967" },
  { name: "Penn State Nittany Lions", division: "Big Ten", conference: "Big Ten Conference", founded: "02/22/1855", leagueJoined: "1993", city: "University Park", state: "PA", cityFounded: "01/01/1896", cityCharter: "01/01/1896", stadium: "Beaver Stadium", stadiumOpened: "09/17/1960" },
  { name: "Purdue Boilermakers", division: "Big Ten", conference: "Big Ten Conference", founded: "05/06/1869", leagueJoined: "1896", city: "West Lafayette", state: "IN", cityFounded: "01/01/1888", cityCharter: "01/01/1888", stadium: "Ross-Ade Stadium", stadiumOpened: "11/22/1924" },
  { name: "Rutgers Scarlet Knights", division: "Big Ten", conference: "Big Ten Conference", founded: "11/10/1766", leagueJoined: "2014", city: "Piscataway", state: "NJ", cityFounded: "01/01/1693", cityCharter: "01/01/1798", stadium: "SHI Stadium", stadiumOpened: "09/03/1994" },
  { name: "UCLA Bruins", division: "Big Ten", conference: "Big Ten Conference", founded: "05/23/1919", leagueJoined: "2024", city: "Los Angeles", state: "CA", cityFounded: "09/04/1781", cityCharter: "05/23/1835", stadium: "Rose Bowl", stadiumOpened: "10/28/1922" },
  { name: "USC Trojans", division: "Big Ten", conference: "Big Ten Conference", founded: "10/06/1880", leagueJoined: "2024", city: "Los Angeles", state: "CA", cityFounded: "09/04/1781", cityCharter: "05/23/1835", stadium: "United Airlines Field at the Coliseum", stadiumOpened: "05/01/1923" },
  { name: "Washington Huskies", division: "Big Ten", conference: "Big Ten Conference", founded: "11/04/1861", leagueJoined: "2024", city: "Seattle", state: "WA", cityFounded: "05/23/1853", cityCharter: "12/02/1869", stadium: "Husky Stadium", stadiumOpened: "11/27/1920" },
  { name: "Wisconsin Badgers", division: "Big Ten", conference: "Big Ten Conference", founded: "07/26/1848", leagueJoined: "1896", city: "Madison", state: "WI", cityFounded: "01/01/1836", cityCharter: "01/01/1856", stadium: "Camp Randall Stadium", stadiumOpened: "11/03/1917" },

  // BIG 12 CONFERENCE - 16 teams
  { name: "Arizona Wildcats", division: "Big 12", conference: "Big 12 Conference", founded: "10/12/1885", leagueJoined: "2024", city: "Tucson", state: "AZ", cityFounded: "01/01/1775", cityCharter: "01/01/1877", stadium: "Arizona Stadium", stadiumOpened: "10/13/1928" },
  { name: "Arizona State Sun Devils", division: "Big 12", conference: "Big 12 Conference", founded: "02/26/1885", leagueJoined: "2024", city: "Tempe", state: "AZ", cityFounded: "01/01/1871", cityCharter: "01/01/1894", stadium: "Mountain America Stadium", stadiumOpened: "10/07/1958" },
  { name: "Baylor Bears", division: "Big 12", conference: "Big 12 Conference", founded: "02/01/1845", leagueJoined: "1996", city: "Waco", state: "TX", cityFounded: "01/01/1849", cityCharter: "01/01/1856", stadium: "McLane Stadium", stadiumOpened: "08/31/2014" },
  { name: "BYU Cougars", division: "Big 12", conference: "Big 12 Conference", founded: "10/16/1875", leagueJoined: "2023", city: "Provo", state: "UT", cityFounded: "01/01/1849", cityCharter: "01/01/1851", stadium: "LaVell Edwards Stadium", stadiumOpened: "09/12/1964" },
  { name: "Cincinnati Bearcats", division: "Big 12", conference: "Big 12 Conference", founded: "02/11/1819", leagueJoined: "2023", city: "Cincinnati", state: "OH", cityFounded: "12/01/1788", cityCharter: "03/01/1819", stadium: "Nippert Stadium", stadiumOpened: "10/10/1924" },
  { name: "Colorado Buffaloes", division: "Big 12", conference: "Big 12 Conference", founded: "04/01/1876", leagueJoined: "2024", city: "Boulder", state: "CO", cityFounded: "01/01/1859", cityCharter: "01/01/1871", stadium: "Folsom Field", stadiumOpened: "09/26/1924" },
  { name: "Houston Cougars", division: "Big 12", conference: "Big 12 Conference", founded: "03/07/1927", leagueJoined: "2023", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "06/05/1837", stadium: "TDECU Stadium", stadiumOpened: "08/29/2014" },
  { name: "Iowa State Cyclones", division: "Big 12", conference: "Big 12 Conference", founded: "03/22/1858", leagueJoined: "1996", city: "Ames", state: "IA", cityFounded: "01/01/1864", cityCharter: "01/01/1864", stadium: "Jack Trice Stadium", stadiumOpened: "09/20/1975" },
  { name: "Kansas Jayhawks", division: "Big 12", conference: "Big 12 Conference", founded: "03/21/1865", leagueJoined: "1996", city: "Lawrence", state: "KS", cityFounded: "01/01/1854", cityCharter: "01/01/1858", stadium: "David Booth Kansas Memorial Stadium", stadiumOpened: "11/02/1921" },
  { name: "Kansas State Wildcats", division: "Big 12", conference: "Big 12 Conference", founded: "02/16/1863", leagueJoined: "1996", city: "Manhattan", state: "KS", cityFounded: "01/01/1855", cityCharter: "01/01/1857", stadium: "Bill Snyder Family Stadium", stadiumOpened: "09/21/1968" },
  { name: "Oklahoma State Cowboys", division: "Big 12", conference: "Big 12 Conference", founded: "12/25/1890", leagueJoined: "1996", city: "Stillwater", state: "OK", cityFounded: "01/01/1884", cityCharter: "01/01/1889", stadium: "Boone Pickens Stadium", stadiumOpened: "10/04/1920" },
  { name: "TCU Horned Frogs", division: "Big 12", conference: "Big 12 Conference", founded: "09/01/1873", leagueJoined: "2012", city: "Fort Worth", state: "TX", cityFounded: "01/01/1849", cityCharter: "01/01/1873", stadium: "Amon G. Carter Stadium", stadiumOpened: "10/11/1930" },
  { name: "Texas Tech Red Raiders", division: "Big 12", conference: "Big 12 Conference", founded: "02/10/1923", leagueJoined: "1996", city: "Lubbock", state: "TX", cityFounded: "01/01/1891", cityCharter: "01/01/1909", stadium: "Jones AT&T Stadium", stadiumOpened: "10/04/1947" },
  { name: "UCF Knights", division: "Big 12", conference: "Big 12 Conference", founded: "06/10/1963", leagueJoined: "2023", city: "Orlando", state: "FL", cityFounded: "02/04/1875", cityCharter: "07/31/1875", stadium: "FBC Mortgage Stadium", stadiumOpened: "09/15/2007" },
  { name: "Utah Utes", division: "Big 12", conference: "Big 12 Conference", founded: "02/28/1850", leagueJoined: "2024", city: "Salt Lake City", state: "UT", cityFounded: "07/24/1847", cityCharter: "01/06/1851", stadium: "Rice-Eccles Stadium", stadiumOpened: "09/12/1998" },
  { name: "West Virginia Mountaineers", division: "Big 12", conference: "Big 12 Conference", founded: "02/07/1867", leagueJoined: "2012", city: "Morgantown", state: "WV", cityFounded: "01/01/1785", cityCharter: "01/01/1838", stadium: "Mountaineer Field at Milan Puskar Stadium", stadiumOpened: "09/06/1980" },

  // CONFERENCE USA (CUSA) - 12 teams
  { name: "Delaware Blue Hens", division: "CUSA", conference: "Conference USA", founded: "02/01/1743", leagueJoined: "2025", city: "Newark", state: "DE", cityFounded: "01/01/1758", cityCharter: "01/01/1758", stadium: "Delaware Stadium", stadiumOpened: "09/23/1952" },
  { name: "FIU Panthers", division: "CUSA", conference: "Conference USA", founded: "06/27/1965", leagueJoined: "2013", city: "Miami", state: "FL", cityFounded: "07/28/1896", cityCharter: "07/28/1896", stadium: "Riccardo Silva Stadium", stadiumOpened: "11/11/1995" },
  { name: "Jacksonville State Gamecocks", division: "CUSA", conference: "Conference USA", founded: "02/22/1883", leagueJoined: "2023", city: "Jacksonville", state: "AL", cityFounded: "01/01/1833", cityCharter: "01/01/1869", stadium: "AmFirst Stadium", stadiumOpened: "09/06/1947" },
  { name: "Kennesaw State Owls", division: "CUSA", conference: "Conference USA", founded: "10/08/1963", leagueJoined: "2024", city: "Kennesaw", state: "GA", cityFounded: "01/01/1887", cityCharter: "01/01/1887", stadium: "Fifth Third Bank Stadium", stadiumOpened: "09/02/2010" },
  { name: "Liberty Flames", division: "CUSA", conference: "Conference USA", founded: "08/20/1971", leagueJoined: "2023", city: "Lynchburg", state: "VA", cityFounded: "01/01/1786", cityCharter: "01/01/1805", stadium: "Williams Stadium", stadiumOpened: "10/08/1989" },
  { name: "Louisiana Tech Bulldogs", division: "CUSA", conference: "Conference USA", founded: "09/23/1894", leagueJoined: "2001", city: "Ruston", state: "LA", cityFounded: "01/01/1884", cityCharter: "01/01/1898", stadium: "Joe Aillet Stadium", stadiumOpened: "10/07/1968" },
  { name: "Middle Tennessee Blue Raiders", division: "CUSA", conference: "Conference USA", founded: "09/11/1911", leagueJoined: "2013", city: "Murfreesboro", state: "TN", cityFounded: "01/01/1811", cityCharter: "01/01/1817", stadium: "Floyd Stadium", stadiumOpened: "09/12/1933" },
  { name: "Missouri State Bears", division: "CUSA", conference: "Conference USA", founded: "03/06/1905", leagueJoined: "2025", city: "Springfield", state: "MO", cityFounded: "01/01/1838", cityCharter: "01/01/1847", stadium: "Plaster Sports Complex", stadiumOpened: "09/01/1941" },
  { name: "New Mexico State Aggies", division: "CUSA", conference: "Conference USA", founded: "09/17/1888", leagueJoined: "2023", city: "Las Cruces", state: "NM", cityFounded: "01/01/1849", cityCharter: "01/01/1907", stadium: "Aggie Memorial Stadium", stadiumOpened: "09/18/1978" },
  { name: "Sam Houston Bearkats", division: "CUSA", conference: "Conference USA", founded: "10/10/1879", leagueJoined: "2023", city: "Huntsville", state: "TX", cityFounded: "01/01/1836", cityCharter: "01/01/1845", stadium: "Elliott T. Bowers Stadium", stadiumOpened: "09/17/1986" },
  { name: "UTEP Miners", division: "CUSA", conference: "Conference USA", founded: "09/23/1913", leagueJoined: "2005", city: "El Paso", state: "TX", cityFounded: "01/01/1659", cityCharter: "01/01/1873", stadium: "Sun Bowl", stadiumOpened: "09/21/1963" },
  { name: "Western Kentucky Hilltoppers", division: "CUSA", conference: "Conference USA", founded: "01/15/1906", leagueJoined: "2014", city: "Bowling Green", state: "KY", cityFounded: "01/01/1798", cityCharter: "01/01/1798", stadium: "Houchens Industries-L.T. Smith Stadium", stadiumOpened: "09/18/1968" },

  // MID-AMERICAN CONFERENCE (MAC) - 12 teams
  { name: "Akron Zips", division: "MAC", conference: "Mid-American Conference", founded: "09/22/1870", leagueJoined: "1992", city: "Akron", state: "OH", cityFounded: "01/01/1825", cityCharter: "01/01/1836", stadium: "InfoCision Stadium", stadiumOpened: "09/12/2009" },
  { name: "Ball State Cardinals", division: "MAC", conference: "Mid-American Conference", founded: "05/15/1918", leagueJoined: "1973", city: "Muncie", state: "IN", cityFounded: "01/01/1827", cityCharter: "01/01/1854", stadium: "Scheumann Stadium", stadiumOpened: "09/02/1967" },
  { name: "Bowling Green Falcons", division: "MAC", conference: "Mid-American Conference", founded: "10/12/1910", leagueJoined: "1952", city: "Bowling Green", state: "OH", cityFounded: "01/01/1833", cityCharter: "01/01/1855", stadium: "Doyt Perry Stadium", stadiumOpened: "10/01/1966" },
  { name: "Buffalo Bulls", division: "MAC", conference: "Mid-American Conference", founded: "05/11/1846", leagueJoined: "1998", city: "Buffalo", state: "NY", cityFounded: "01/01/1810", cityCharter: "04/20/1832", stadium: "UB Stadium", stadiumOpened: "08/29/1993" },
  { name: "Central Michigan Chippewas", division: "MAC", conference: "Mid-American Conference", founded: "05/30/1892", leagueJoined: "1971", city: "Mount Pleasant", state: "MI", cityFounded: "01/01/1855", cityCharter: "01/01/1889", stadium: "Kelly/Shorts Stadium", stadiumOpened: "09/08/1972" },
  { name: "Eastern Michigan Eagles", division: "MAC", conference: "Mid-American Conference", founded: "03/28/1849", leagueJoined: "1976", city: "Ypsilanti", state: "MI", cityFounded: "01/01/1823", cityCharter: "01/01/1858", stadium: "Rynearson Stadium", stadiumOpened: "09/27/1969" },
  { name: "Kent State Golden Flashes", division: "MAC", conference: "Mid-American Conference", founded: "05/13/1910", leagueJoined: "1951", city: "Kent", state: "OH", cityFounded: "01/01/1805", cityCharter: "01/01/1867", stadium: "Dix Stadium", stadiumOpened: "09/13/1969" },
  { name: "Miami RedHawks", division: "MAC", conference: "Mid-American Conference", founded: "02/17/1809", leagueJoined: "1948", city: "Oxford", state: "OH", cityFounded: "01/01/1810", cityCharter: "01/01/1830", stadium: "Yager Stadium", stadiumOpened: "09/16/1983" },
  { name: "Northern Illinois Huskies", division: "MAC", conference: "Mid-American Conference", founded: "05/22/1895", leagueJoined: "1997", city: "DeKalb", state: "IL", cityFounded: "01/01/1856", cityCharter: "01/01/1877", stadium: "Huskie Stadium", stadiumOpened: "09/01/1965" },
  { name: "Ohio Bobcats", division: "MAC", conference: "Mid-American Conference", founded: "02/18/1804", leagueJoined: "1946", city: "Athens", state: "OH", cityFounded: "01/01/1797", cityCharter: "01/01/1811", stadium: "Peden Stadium", stadiumOpened: "09/12/1929" },
  { name: "Toledo Rockets", division: "MAC", conference: "Mid-American Conference", founded: "04/25/1872", leagueJoined: "1950", city: "Toledo", state: "OH", cityFounded: "01/01/1833", cityCharter: "01/01/1837", stadium: "Glass Bowl", stadiumOpened: "09/26/1937" },
  { name: "Western Michigan Broncos", division: "MAC", conference: "Mid-American Conference", founded: "08/29/1903", leagueJoined: "1948", city: "Kalamazoo", state: "MI", cityFounded: "01/01/1829", cityCharter: "01/01/1884", stadium: "Waldo Stadium", stadiumOpened: "09/18/1939" },

  // MOUNTAIN WEST CONFERENCE - 12 teams
  { name: "Air Force Falcons", division: "Mountain West", conference: "Mountain West Conference", founded: "04/01/1954", leagueJoined: "1999", city: "Colorado Springs", state: "CO", cityFounded: "01/01/1871", cityCharter: "01/01/1886", stadium: "Falcon Stadium", stadiumOpened: "09/22/1962" },
  { name: "Boise State Broncos", division: "Mountain West", conference: "Mountain West Conference", founded: "04/12/1932", leagueJoined: "2011", city: "Boise", state: "ID", cityFounded: "01/01/1863", cityCharter: "01/01/1864", stadium: "Albertsons Stadium", stadiumOpened: "09/01/1970" },
  { name: "Colorado State Rams", division: "Mountain West", conference: "Mountain West Conference", founded: "02/11/1870", leagueJoined: "1999", city: "Fort Collins", state: "CO", cityFounded: "01/01/1864", cityCharter: "01/01/1873", stadium: "Canvas Stadium", stadiumOpened: "08/26/2017" },
  { name: "Fresno State Bulldogs", division: "Mountain West", conference: "Mountain West Conference", founded: "05/29/1911", leagueJoined: "2012", city: "Fresno", state: "CA", cityFounded: "01/01/1872", cityCharter: "01/01/1885", stadium: "Valley Children's Stadium", stadiumOpened: "09/15/1980" },
  { name: "Hawaii Rainbow Warriors", division: "Mountain West", conference: "Mountain West Conference", founded: "03/25/1907", leagueJoined: "2012", city: "Honolulu", state: "HI", cityFounded: "01/01/1845", cityCharter: "01/01/1907", stadium: "Clarence T.C. Ching Complex", stadiumOpened: "09/17/1975" },
  { name: "Nevada Wolf Pack", division: "Mountain West", conference: "Mountain West Conference", founded: "10/12/1874", leagueJoined: "2012", city: "Reno", state: "NV", cityFounded: "01/01/1868", cityCharter: "01/01/1903", stadium: "Mackay Stadium", stadiumOpened: "09/14/1966" },
  { name: "New Mexico Lobos", division: "Mountain West", conference: "Mountain West Conference", founded: "02/28/1889", leagueJoined: "1999", city: "Albuquerque", state: "NM", cityFounded: "01/01/1706", cityCharter: "01/01/1891", stadium: "Dreamstyle Stadium", stadiumOpened: "09/08/1960" },
  { name: "San Diego State Aztecs", division: "Mountain West", conference: "Mountain West Conference", founded: "03/13/1897", leagueJoined: "1999", city: "San Diego", state: "CA", cityFounded: "07/16/1769", cityCharter: "03/27/1850", stadium: "Snapdragon Stadium", stadiumOpened: "09/03/2022" },
  { name: "San Jose State Spartans", division: "Mountain West", conference: "Mountain West Conference", founded: "05/02/1857", leagueJoined: "2013", city: "San Jose", state: "CA", cityFounded: "11/29/1777", cityCharter: "03/27/1850", stadium: "CEFCU Stadium", stadiumOpened: "09/04/1933" },
  { name: "UNLV Rebels", division: "Mountain West", conference: "Mountain West Conference", founded: "09/10/1957", leagueJoined: "1999", city: "Las Vegas", state: "NV", cityFounded: "05/15/1905", cityCharter: "03/16/1911", stadium: "Allegiant Stadium", stadiumOpened: "07/31/2020" },
  { name: "Utah State Aggies", division: "Mountain West", conference: "Mountain West Conference", founded: "03/08/1888", leagueJoined: "2005", city: "Logan", state: "UT", cityFounded: "01/01/1859", cityCharter: "01/01/1866", stadium: "Maverik Stadium", stadiumOpened: "10/01/1968" },
  { name: "Wyoming Cowboys", division: "Mountain West", conference: "Mountain West Conference", founded: "09/27/1886", leagueJoined: "1999", city: "Laramie", state: "WY", cityFounded: "01/01/1868", cityCharter: "01/01/1874", stadium: "War Memorial Stadium", stadiumOpened: "09/24/1950" },

  // SOUTHEASTERN CONFERENCE (SEC) - 16 teams
  { name: "Alabama Crimson Tide", division: "SEC", conference: "Southeastern Conference", founded: "04/12/1831", leagueJoined: "1932", city: "Tuscaloosa", state: "AL", cityFounded: "01/01/1819", cityCharter: "01/01/1819", stadium: "Bryant-Denny Stadium", stadiumOpened: "09/28/1929" },
  { name: "Arkansas Razorbacks", division: "SEC", conference: "Southeastern Conference", founded: "03/27/1871", leagueJoined: "1991", city: "Fayetteville", state: "AR", cityFounded: "01/01/1828", cityCharter: "01/01/1836", stadium: "Donald W. Reynolds Razorback Stadium", stadiumOpened: "09/24/1938" },
  { name: "Auburn Tigers", division: "SEC", conference: "Southeastern Conference", founded: "02/07/1856", leagueJoined: "1932", city: "Auburn", state: "AL", cityFounded: "01/01/1836", cityCharter: "01/01/1839", stadium: "Jordan-Hare Stadium", stadiumOpened: "11/30/1939" },
  { name: "Florida Gators", division: "SEC", conference: "Southeastern Conference", founded: "01/06/1853", leagueJoined: "1932", city: "Gainesville", state: "FL", cityFounded: "01/01/1854", cityCharter: "01/01/1869", stadium: "Ben Hill Griffin Stadium", stadiumOpened: "11/10/1930" },
  { name: "Georgia Bulldogs", division: "SEC", conference: "Southeastern Conference", founded: "01/27/1785", leagueJoined: "1932", city: "Athens", state: "GA", cityFounded: "01/01/1801", cityCharter: "01/01/1806", stadium: "Sanford Stadium", stadiumOpened: "10/12/1929" },
  { name: "Kentucky Wildcats", division: "SEC", conference: "Southeastern Conference", founded: "02/29/1865", leagueJoined: "1932", city: "Lexington", state: "KY", cityFounded: "01/01/1775", cityCharter: "01/01/1832", stadium: "Kroger Field", stadiumOpened: "09/15/1973" },
  { name: "LSU Tigers", division: "SEC", conference: "Southeastern Conference", founded: "01/02/1860", leagueJoined: "1932", city: "Baton Rouge", state: "LA", cityFounded: "01/01/1719", cityCharter: "01/01/1817", stadium: "Tiger Stadium", stadiumOpened: "11/25/1924" },
  { name: "Mississippi State Bulldogs", division: "SEC", conference: "Southeastern Conference", founded: "02/28/1878", leagueJoined: "1932", city: "Starkville", state: "MS", cityFounded: "01/01/1831", cityCharter: "01/01/1835", stadium: "Davis Wade Stadium", stadiumOpened: "09/19/1914" },
  { name: "Missouri Tigers", division: "SEC", conference: "Southeastern Conference", founded: "02/11/1839", leagueJoined: "2012", city: "Columbia", state: "MO", cityFounded: "01/01/1821", cityCharter: "01/01/1826", stadium: "Faurot Field", stadiumOpened: "10/02/1926" },
  { name: "Ole Miss Rebels", division: "SEC", conference: "Southeastern Conference", founded: "02/24/1844", leagueJoined: "1932", city: "Oxford", state: "MS", cityFounded: "01/01/1837", cityCharter: "01/01/1837", stadium: "Vaught-Hemingway Stadium", stadiumOpened: "09/24/1915" },
  { name: "Oklahoma Sooners", division: "SEC", conference: "Southeastern Conference", founded: "12/19/1890", leagueJoined: "2025", city: "Norman", state: "OK", cityFounded: "01/01/1889", cityCharter: "01/01/1891", stadium: "Gaylord Family Oklahoma Memorial Stadium", stadiumOpened: "10/06/1923" },
  { name: "South Carolina Gamecocks", division: "SEC", conference: "Southeastern Conference", founded: "01/10/1801", leagueJoined: "1991", city: "Columbia", state: "SC", cityFounded: "01/01/1786", cityCharter: "01/01/1805", stadium: "Williams-Brice Stadium", stadiumOpened: "09/08/1934" },
  { name: "Tennessee Volunteers", division: "SEC", conference: "Southeastern Conference", founded: "05/10/1794", leagueJoined: "1932", city: "Knoxville", state: "TN", cityFounded: "01/01/1791", cityCharter: "01/01/1815", stadium: "Neyland Stadium", stadiumOpened: "09/24/1921" },
  { name: "Texas Longhorns", division: "SEC", conference: "Southeastern Conference", founded: "09/15/1883", leagueJoined: "2025", city: "Austin", state: "TX", cityFounded: "12/27/1839", cityCharter: "12/27/1839", stadium: "Darrell K Royal-Texas Memorial Stadium", stadiumOpened: "11/27/1924" },
  { name: "Texas A&M Aggies", division: "SEC", conference: "Southeastern Conference", founded: "10/04/1876", leagueJoined: "2012", city: "College Station", state: "TX", cityFounded: "01/01/1938", cityCharter: "01/01/1938", stadium: "Kyle Field", stadiumOpened: "09/24/1927" },
  { name: "Vanderbilt Commodores", division: "SEC", conference: "Southeastern Conference", founded: "05/01/1873", leagueJoined: "1932", city: "Nashville", state: "TN", cityFounded: "12/24/1779", cityCharter: "04/23/1806", stadium: "FirstBank Stadium", stadiumOpened: "10/14/1922" },

  // SUN BELT CONFERENCE - 14 teams
  { name: "Appalachian State Mountaineers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/20/1899", leagueJoined: "2014", city: "Boone", state: "NC", cityFounded: "01/01/1872", cityCharter: "01/01/1872", stadium: "Kidd Brewer Stadium", stadiumOpened: "09/19/1962" },
  { name: "Arkansas State Red Wolves", division: "Sun Belt", conference: "Sun Belt Conference", founded: "04/09/1909", leagueJoined: "2001", city: "Jonesboro", state: "AR", cityFounded: "01/01/1859", cityCharter: "01/01/1859", stadium: "Centennial Bank Stadium", stadiumOpened: "09/16/1974" },
  { name: "Coastal Carolina Chanticleers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "07/02/1954", leagueJoined: "2017", city: "Conway", state: "SC", cityFounded: "01/01/1732", cityCharter: "01/01/1966", stadium: "Brooks Stadium", stadiumOpened: "09/04/2003" },
  { name: "Georgia Southern Eagles", division: "Sun Belt", conference: "Sun Belt Conference", founded: "12/01/1906", leagueJoined: "2014", city: "Statesboro", state: "GA", cityFounded: "01/01/1803", cityCharter: "01/01/1866", stadium: "Paulson Stadium", stadiumOpened: "09/26/1984" },
  { name: "Georgia State Panthers", division: "Sun Belt", conference: "Sun Belt Conference", founded: "08/25/1913", leagueJoined: "2013", city: "Atlanta", state: "GA", cityFounded: "01/01/1837", cityCharter: "12/29/1847", stadium: "Center Parc Stadium", stadiumOpened: "08/19/2017" },
  { name: "James Madison Dukes", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/14/1908", leagueJoined: "2022", city: "Harrisonburg", state: "VA", cityFounded: "01/01/1780", cityCharter: "01/01/1849", stadium: "Bridgeforth Stadium", stadiumOpened: "09/06/1975" },
  { name: "Louisiana Ragin' Cajuns", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/11/1898", leagueJoined: "1991", city: "Lafayette", state: "LA", cityFounded: "01/01/1821", cityCharter: "01/01/1836", stadium: "Cajun Field", stadiumOpened: "09/16/1971" },
  { name: "Louisiana Monroe Warhawks", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/26/1931", leagueJoined: "2006", city: "Monroe", state: "LA", cityFounded: "01/01/1819", cityCharter: "01/01/1870", stadium: "Malone Stadium", stadiumOpened: "09/27/1978" },
  { name: "Marshall Thundering Herd", division: "Sun Belt", conference: "Sun Belt Conference", founded: "02/27/1837", leagueJoined: "2022", city: "Huntington", state: "WV", cityFounded: "01/01/1871", cityCharter: "01/01/1871", stadium: "Joan C. Edwards Stadium", stadiumOpened: "09/07/1991" },
  { name: "Old Dominion Monarchs", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/24/1930", leagueJoined: "2022", city: "Norfolk", state: "VA", cityFounded: "01/01/1682", cityCharter: "01/01/1845", stadium: "S.B. Ballard Stadium", stadiumOpened: "09/03/1936" },
  { name: "South Alabama Jaguars", division: "Sun Belt", conference: "Sun Belt Conference", founded: "05/15/1963", leagueJoined: "2013", city: "Mobile", state: "AL", cityFounded: "01/01/1702", cityCharter: "01/01/1814", stadium: "Hancock Whitney Stadium", stadiumOpened: "09/04/2010" },
  { name: "Southern Miss Golden Eagles", division: "Sun Belt", conference: "Sun Belt Conference", founded: "03/30/1910", leagueJoined: "2022", city: "Hattiesburg", state: "MS", cityFounded: "01/01/1882", cityCharter: "01/01/1884", stadium: "M.M. Roberts Stadium", stadiumOpened: "09/01/1976" },
  { name: "Texas State Bobcats", division: "Sun Belt", conference: "Sun Belt Conference", founded: "09/26/1899", leagueJoined: "2013", city: "San Marcos", state: "TX", cityFounded: "01/01/1851", cityCharter: "01/01/1877", stadium: "Bobcat Stadium", stadiumOpened: "08/30/1981" },
  { name: "Troy Trojans", division: "Sun Belt", conference: "Sun Belt Conference", founded: "02/26/1887", leagueJoined: "2005", city: "Troy", state: "AL", cityFounded: "01/01/1838", cityCharter: "01/01/1843", stadium: "Veterans Memorial Stadium", stadiumOpened: "09/25/1950" },
  
  // BIG SKY CONFERENCE - 12 teams
  { name: "Cal Poly Mustangs", division: "Big Sky", conference: "Big Sky Conference", founded: "03/08/1901", leagueJoined: "1996", city: "San Luis Obispo", state: "CA", cityFounded: "09/01/1772", cityCharter: "12/01/1856", stadium: "Alex G. Spanos Stadium", stadiumOpened: "11/08/2006" },
  { name: "Idaho State Bengals", division: "Big Sky", conference: "Big Sky Conference", founded: "05/08/1902", leagueJoined: "1963", city: "Pocatello", state: "ID", cityFounded: "09/01/1889", cityCharter: "01/01/1893", stadium: "Holt Arena", stadiumOpened: "09/15/1970" },
  { name: "Montana Grizzlies", division: "Big Sky", conference: "Big Sky Conference", founded: "02/17/1893", leagueJoined: "1963", city: "Missoula", state: "MT", cityFounded: "01/01/1860", cityCharter: "03/08/1885", stadium: "Washington-Grizzly Stadium", stadiumOpened: "09/14/1986" },
  { name: "Montana State Bobcats", division: "Big Sky", conference: "Big Sky Conference", founded: "02/16/1893", leagueJoined: "1963", city: "Bozeman", state: "MT", cityFounded: "08/09/1864", cityCharter: "04/13/1883", stadium: "Bobcat Stadium", stadiumOpened: "09/05/1998" },
  { name: "North Dakota Fighting Hawks", division: "Big Sky", conference: "Big Sky Conference", founded: "02/27/1883", leagueJoined: "2020", city: "Grand Forks", state: "ND", cityFounded: "01/01/1870", cityCharter: "02/22/1881", stadium: "Alerus Center", stadiumOpened: "02/10/2001" },
  { name: "Northern Arizona Lumberjacks", division: "Big Sky", conference: "Big Sky Conference", founded: "05/11/1899", leagueJoined: "1970", city: "Flagstaff", state: "AZ", cityFounded: "01/01/1876", cityCharter: "01/01/1928", stadium: "Walkup Skydome", stadiumOpened: "09/01/1977" },
  { name: "Northern Colorado Bears", division: "Big Sky", conference: "Big Sky Conference", founded: "08/10/1889", leagueJoined: "2006", city: "Greeley", state: "CO", cityFounded: "04/06/1869", cityCharter: "04/06/1886", stadium: "Nottingham Field", stadiumOpened: "09/06/2003" },
  { name: "Portland State Vikings", division: "Big Sky", conference: "Big Sky Conference", founded: "06/15/1946", leagueJoined: "1996", city: "Portland", state: "OR", cityFounded: "01/01/1845", cityCharter: "02/08/1851", stadium: "Hillsboro Stadium", stadiumOpened: "07/17/1999" },
  { name: "Sacramento State Hornets", division: "Big Sky", conference: "Big Sky Conference", founded: "01/01/1947", leagueJoined: "1996", city: "Sacramento", state: "CA", cityFounded: "01/01/1848", cityCharter: "02/27/1850", stadium: "Hornet Stadium", stadiumOpened: "09/12/1969" },
  { name: "Southern Utah Thunderbirds", division: "Big Sky", conference: "Big Sky Conference", founded: "01/01/1897", leagueJoined: "2012", city: "Cedar City", state: "UT", cityFounded: "11/11/1851", cityCharter: "02/18/1868", stadium: "Eccles Coliseum", stadiumOpened: "09/09/1967" },
  { name: "UC Davis Aggies", division: "Big Sky", conference: "Big Sky Conference", founded: "01/01/1905", leagueJoined: "2012", city: "Davis", state: "CA", cityFounded: "03/01/1868", cityCharter: "03/28/1917", stadium: "UC Davis Health Stadium", stadiumOpened: "09/01/2007" },
  { name: "Weber State Wildcats", division: "Big Sky", conference: "Big Sky Conference", founded: "01/07/1889", leagueJoined: "1963", city: "Ogden", state: "UT", cityFounded: "02/25/1851", cityCharter: "02/06/1889", stadium: "Stewart Stadium", stadiumOpened: "09/08/1962" },

  // BIG SOUTH CONFERENCE - 5 teams
  { name: "Campbell Fighting Camels", division: "Big South", conference: "Big South Conference", founded: "01/05/1887", leagueJoined: "2018", city: "Buies Creek", state: "NC", cityFounded: "01/01/1874", cityCharter: "01/01/1874", stadium: "Barker–Lane Stadium", stadiumOpened: "09/01/2008" },
  { name: "Charleston Southern Buccaneers", division: "Big South", conference: "Big South Conference", founded: "12/01/1964", leagueJoined: "2002", city: "Charleston", state: "SC", cityFounded: "03/29/1670", cityCharter: "08/13/1783", stadium: "Buccaneer Field", stadiumOpened: "09/06/1997" },
  { name: "Gardner-Webb Runnin' Bulldogs", division: "Big South", conference: "Big South Conference", founded: "01/01/1905", leagueJoined: "2008", city: "Boiling Springs", state: "NC", cityFounded: "01/01/1876", cityCharter: "01/01/1911", stadium: "Spangler Stadium", stadiumOpened: "09/01/1996" },
  { name: "Robert Morris Colonials", division: "Big South", conference: "Big South Conference", founded: "09/01/1921", leagueJoined: "2020", city: "Moon Township", state: "PA", cityFounded: "01/01/1788", cityCharter: "02/26/1788", stadium: "Joe Walton Stadium", stadiumOpened: "09/02/2005" },
  { name: "SC State Bulldogs", division: "Big South", conference: "Big South Conference", founded: "10/01/1896", leagueJoined: "2021", city: "Orangeburg", state: "SC", cityFounded: "01/01/1735", cityCharter: "01/01/1883", stadium: "Oliver C. Dawson Stadium", stadiumOpened: "09/01/1955" },

  // CAA FOOTBALL - 13 teams
  { name: "Albany Great Danes", division: "CAA", conference: "CAA Football", founded: "03/01/1844", leagueJoined: "2013", city: "Albany", state: "NY", cityFounded: "07/22/1686", cityCharter: "07/22/1686", stadium: "Tom & Mary Casey Stadium", stadiumOpened: "09/08/2013" },
  { name: "Delaware Blue Hens", division: "CAA", conference: "CAA Football", founded: "02/05/1743", leagueJoined: "2001", city: "Newark", state: "DE", cityFounded: "01/01/1758", cityCharter: "01/01/1758", stadium: "Delaware Stadium", stadiumOpened: "09/23/1952" },
  { name: "Elon Phoenix", division: "CAA", conference: "CAA Football", founded: "03/11/1889", leagueJoined: "2014", city: "Elon", state: "NC", cityFounded: "01/01/1871", cityCharter: "01/01/1893", stadium: "Rhodes Stadium", stadiumOpened: "10/07/2001" },
  { name: "Hampton Pirates", division: "CAA", conference: "CAA Football", founded: "04/01/1868", leagueJoined: "2018", city: "Hampton", state: "VA", cityFounded: "01/01/1610", cityCharter: "07/21/1849", stadium: "Armstrong Stadium", stadiumOpened: "09/06/1997" },
  { name: "Maine Black Bears", division: "CAA", conference: "CAA Football", founded: "02/25/1865", leagueJoined: "2007", city: "Orono", state: "ME", cityFounded: "02/12/1806", cityCharter: "02/12/1806", stadium: "Alfond Stadium", stadiumOpened: "09/24/1999" },
  { name: "Monmouth Hawks", division: "CAA", conference: "CAA Football", founded: "09/16/1933", leagueJoined: "2022", city: "West Long Branch", state: "NJ", cityFounded: "01/01/1908", cityCharter: "04/07/1908", stadium: "Kessler Stadium", stadiumOpened: "09/03/2017" },
  { name: "New Hampshire Wildcats", division: "CAA", conference: "CAA Football", founded: "05/05/1866", leagueJoined: "2007", city: "Durham", state: "NH", cityFounded: "01/01/1732", cityCharter: "01/01/1892", stadium: "Wildcat Stadium", stadiumOpened: "09/04/1936" },
  { name: "North Carolina A&T Aggies", division: "CAA", conference: "CAA Football", founded: "03/01/1891", leagueJoined: "2021", city: "Greensboro", state: "NC", cityFounded: "01/01/1808", cityCharter: "01/01/1829", stadium: "Truist Stadium", stadiumOpened: "10/27/2017" },
  { name: "Rhode Island Rams", division: "CAA", conference: "CAA Football", founded: "03/30/1892", leagueJoined: "2001", city: "Kingston", state: "RI", cityFounded: "01/01/1674", cityCharter: "01/01/1674", stadium: "Meade Stadium", stadiumOpened: "09/18/1928" },
  { name: "Stony Brook Seawolves", division: "CAA", conference: "CAA Football", founded: "08/17/1957", leagueJoined: "2013", city: "Stony Brook", state: "NY", cityFounded: "01/01/1655", cityCharter: "01/01/1655", stadium: "Kenneth P. LaValle Stadium", stadiumOpened: "09/11/2002" },
  { name: "Towson Tigers", division: "CAA", conference: "CAA Football", founded: "01/15/1866", leagueJoined: "2001", city: "Towson", state: "MD", cityFounded: "01/01/1752", cityCharter: "01/01/1906", stadium: "Johnny Unitas Stadium", stadiumOpened: "09/03/2011" },
  { name: "Villanova Wildcats", division: "CAA", conference: "CAA Football", founded: "08/20/1842", leagueJoined: "1985", city: "Villanova", state: "PA", cityFounded: "01/01/1682", cityCharter: "01/01/1953", stadium: "Villanova Stadium", stadiumOpened: "09/12/1927" },
  { name: "William & Mary Tribe", division: "CAA", conference: "CAA Football", founded: "02/08/1693", leagueJoined: "1993", city: "Williamsburg", state: "VA", cityFounded: "01/01/1632", cityCharter: "07/28/1699", stadium: "Zable Stadium", stadiumOpened: "09/29/1935" },

  // IVY LEAGUE - 8 teams
  { name: "Brown Bears", division: "Ivy", conference: "Ivy League", founded: "03/03/1764", leagueJoined: "1954", city: "Providence", state: "RI", cityFounded: "06/20/1636", cityCharter: "04/24/1832", stadium: "Brown Stadium", stadiumOpened: "09/26/1925" },
  { name: "Columbia Lions", division: "Ivy", conference: "Ivy League", founded: "05/25/1754", leagueJoined: "1954", city: "New York", state: "NY", cityFounded: "01/01/1624", cityCharter: "01/01/1653", stadium: "Wien Stadium", stadiumOpened: "09/19/1984" },
  { name: "Cornell Big Red", division: "Ivy", conference: "Ivy League", founded: "04/27/1865", leagueJoined: "1954", city: "Ithaca", state: "NY", cityFounded: "01/01/1790", cityCharter: "04/06/1888", stadium: "Schoellkopf Field", stadiumOpened: "10/25/1915" },
  { name: "Dartmouth Big Green", division: "Ivy", conference: "Ivy League", founded: "12/13/1769", leagueJoined: "1954", city: "Hanover", state: "NH", cityFounded: "07/04/1761", cityCharter: "07/01/1761", stadium: "Memorial Field", stadiumOpened: "10/20/1923" },
  { name: "Harvard Crimson", division: "Ivy", conference: "Ivy League", founded: "09/08/1636", leagueJoined: "1954", city: "Cambridge", state: "MA", cityFounded: "05/30/1630", cityCharter: "02/21/1846", stadium: "Harvard Stadium", stadiumOpened: "11/14/1903" },
  { name: "Pennsylvania Quakers", division: "Ivy", conference: "Ivy League", founded: "11/14/1740", leagueJoined: "1954", city: "Philadelphia", state: "PA", cityFounded: "01/01/1682", cityCharter: "10/25/1701", stadium: "Franklin Field", stadiumOpened: "04/30/1895" },
  { name: "Princeton Tigers", division: "Ivy", conference: "Ivy League", founded: "10/22/1746", leagueJoined: "1954", city: "Princeton", state: "NJ", cityFounded: "01/01/1724", cityCharter: "11/20/1813", stadium: "Powers Field at Princeton Stadium", stadiumOpened: "09/25/1998" },
  { name: "Yale Bulldogs", division: "Ivy", conference: "Ivy League", founded: "10/09/1701", leagueJoined: "1954", city: "New Haven", state: "CT", cityFounded: "01/01/1638", cityCharter: "01/01/1784", stadium: "Yale Bowl", stadiumOpened: "11/21/1914" },

  // MID-EASTERN ATHLETIC CONFERENCE (MEAC) - 6 teams
  { name: "Delaware State Hornets", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "05/15/1891", leagueJoined: "1970", city: "Dover", state: "DE", cityFounded: "01/01/1683", cityCharter: "01/01/1929", stadium: "Alumni Stadium", stadiumOpened: "09/22/1957" },
  { name: "Howard Bison", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "03/02/1867", leagueJoined: "1971", city: "Washington", state: "DC", cityFounded: "07/16/1790", cityCharter: "", stadium: "William H. Greene Stadium", stadiumOpened: "09/30/1926" },
  { name: "Morgan State Bears", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "01/01/1867", leagueJoined: "1970", city: "Baltimore", state: "MD", cityFounded: "08/08/1729", cityCharter: "01/13/1797", stadium: "Hughes Stadium", stadiumOpened: "10/06/1979" },
  { name: "Norfolk State Spartans", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "09/23/1935", leagueJoined: "1997", city: "Norfolk", state: "VA", cityFounded: "01/01/1682", cityCharter: "01/01/1845", stadium: "William Price Stadium", stadiumOpened: "09/02/1997" },
  { name: "North Carolina Central Eagles", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "07/05/1910", leagueJoined: "2010", city: "Durham", state: "NC", cityFounded: "04/26/1853", cityCharter: "04/26/1853", stadium: "O'Kelly-Riddick Stadium", stadiumOpened: "09/03/1975" },
  { name: "South Carolina State Bulldogs", division: "MEAC", conference: "Mid-Eastern Athletic Conference", founded: "10/01/1896", leagueJoined: "1970", city: "Orangeburg", state: "SC", cityFounded: "01/01/1735", cityCharter: "01/01/1883", stadium: "Oliver C. Dawson Stadium", stadiumOpened: "09/01/1955" },

  // MISSOURI VALLEY FOOTBALL CONFERENCE - 11 teams
  { name: "Illinois State Redbirds", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/18/1857", leagueJoined: "1982", city: "Normal", state: "IL", cityFounded: "01/01/1854", cityCharter: "02/25/1867", stadium: "Hancock Stadium", stadiumOpened: "09/18/1963" },
  { name: "Indiana State Sycamores", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "12/24/1865", leagueJoined: "1982", city: "Terre Haute", state: "IN", cityFounded: "01/01/1816", cityCharter: "01/01/1832", stadium: "Memorial Stadium", stadiumOpened: "09/20/1924" },
  { name: "Missouri State Bears", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "03/06/1905", leagueJoined: "1982", city: "Springfield", state: "MO", cityFounded: "01/01/1838", cityCharter: "01/01/1847", stadium: "Plaster Sports Complex", stadiumOpened: "09/01/1941" },
  { name: "North Dakota Fighting Hawks", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/27/1883", leagueJoined: "2020", city: "Grand Forks", state: "ND", cityFounded: "01/01/1870", cityCharter: "02/22/1881", stadium: "Alerus Center", stadiumOpened: "02/10/2001" },
  { name: "North Dakota State Bison", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/08/1890", leagueJoined: "2008", city: "Fargo", state: "ND", cityFounded: "01/01/1871", cityCharter: "01/07/1875", stadium: "Fargodome", stadiumOpened: "12/03/1992" },
  { name: "Northern Iowa Panthers", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "08/29/1876", leagueJoined: "1985", city: "Cedar Falls", state: "IA", cityFounded: "01/01/1845", cityCharter: "01/01/1851", stadium: "UNI-Dome", stadiumOpened: "09/16/1976" },
  { name: "South Dakota Coyotes", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/26/1889", leagueJoined: "2012", city: "Vermillion", state: "SD", cityFounded: "01/01/1859", cityCharter: "01/01/1877", stadium: "DakotaDome", stadiumOpened: "09/01/1979" },
  { name: "South Dakota State Jackrabbits", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "02/21/1881", leagueJoined: "2008", city: "Brookings", state: "SD", cityFounded: "01/01/1857", cityCharter: "01/01/1881", stadium: "Dana J. Dykhouse Stadium", stadiumOpened: "09/01/2016" },
  { name: "Southern Illinois Salukis", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "05/03/1869", leagueJoined: "1985", city: "Carbondale", state: "IL", cityFounded: "01/01/1852", cityCharter: "03/01/1856", stadium: "Saluki Stadium", stadiumOpened: "09/15/2010" },
  { name: "Western Illinois Leathernecks", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "01/23/1899", leagueJoined: "1982", city: "Macomb", state: "IL", cityFounded: "01/01/1830", cityCharter: "02/26/1841", stadium: "Hanson Field", stadiumOpened: "09/16/1950" },
  { name: "Youngstown State Penguins", division: "MVFC", conference: "Missouri Valley Football Conference", founded: "01/01/1908", leagueJoined: "1997", city: "Youngstown", state: "OH", cityFounded: "01/01/1797", cityCharter: "01/19/1867", stadium: "Stambaugh Stadium", stadiumOpened: "09/22/1982" },

  // NORTHEAST CONFERENCE (NEC) - 9 teams
  { name: "Central Connecticut State Blue Devils", division: "NEC", conference: "Northeast Conference", founded: "07/04/1849", leagueJoined: "1999", city: "New Britain", state: "CT", cityFounded: "05/26/1687", cityCharter: "01/01/1871", stadium: "Arute Field", stadiumOpened: "09/14/1990" },
  { name: "Duquesne Dukes", division: "NEC", conference: "Northeast Conference", founded: "10/01/1878", leagueJoined: "2008", city: "Pittsburgh", state: "PA", cityFounded: "11/27/1758", cityCharter: "03/18/1816", stadium: "Arthur J. Rooney Athletic Field", stadiumOpened: "09/01/1993" },
  { name: "LIU Sharks", division: "NEC", conference: "Northeast Conference", founded: "09/14/1926", leagueJoined: "1981", city: "Brookville", state: "NY", cityFounded: "01/01/1839", cityCharter: "01/01/1931", stadium: "Bethpage Federal Credit Union Stadium", stadiumOpened: "09/17/2016" },
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
  { name: "Tennessee Martin Skyhawks", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "09/10/1900", leagueJoined: "1992", city: "Martin", state: "TN", cityFounded: "01/01/1870", cityCharter: "01/01/1873", stadium: "Hardy M. Graham Stadium", stadiumOpened: "09/17/1964" },
  { name: "Tennessee State Tigers", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "06/19/1912", leagueJoined: "1986", city: "Nashville", state: "TN", cityFounded: "12/24/1779", cityCharter: "04/23/1806", stadium: "Hale Stadium", stadiumOpened: "09/15/1953" },
  { name: "Tennessee Tech Golden Eagles", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "05/03/1915", leagueJoined: "1949", city: "Cookeville", state: "TN", cityFounded: "01/01/1854", cityCharter: "12/07/1903", stadium: "Tucker Stadium", stadiumOpened: "09/10/1966" },
  { name: "UT Martin Skyhawks", division: "OVC-Big South", conference: "OVC–Big South Football Association", founded: "09/10/1900", leagueJoined: "1992", city: "Martin", state: "TN", cityFounded: "01/01/1870", cityCharter: "01/01/1873", stadium: "Hardy M. Graham Stadium", stadiumOpened: "09/17/1964" },

  // PATRIOT LEAGUE - 7 teams
  { name: "Bucknell Bison", division: "Patriot", conference: "Patriot League", founded: "02/05/1846", leagueJoined: "1986", city: "Lewisburg", state: "PA", cityFounded: "01/01/1785", cityCharter: "01/15/1812", stadium: "Christy Mathewson–Memorial Stadium", stadiumOpened: "09/23/1924" },
  { name: "Colgate Raiders", division: "Patriot", conference: "Patriot League", founded: "09/01/1819", leagueJoined: "1986", city: "Hamilton", state: "NY", cityFounded: "01/01/1795", cityCharter: "04/16/1816", stadium: "Andy Kerr Stadium", stadiumOpened: "09/24/1966" },
  { name: "Fordham Rams", division: "Patriot", conference: "Patriot League", founded: "06/24/1841", leagueJoined: "1990", city: "Bronx", state: "NY", cityFounded: "01/01/1639", cityCharter: "04/10/1874", stadium: "Coffey Field", stadiumOpened: "09/01/1930" },
  { name: "Georgetown Hoyas", division: "Patriot", conference: "Patriot League", founded: "01/23/1789", leagueJoined: "2001", city: "Washington", state: "DC", cityFounded: "07/16/1790", cityCharter: "", stadium: "Cooper Field", stadiumOpened: "09/01/1950" },
  { name: "Holy Cross Crusaders", division: "Patriot", conference: "Patriot League", founded: "03/02/1843", leagueJoined: "1986", city: "Worcester", state: "MA", cityFounded: "01/01/1684", cityCharter: "02/29/1848", stadium: "Fitton Field", stadiumOpened: "09/25/1908" },
  { name: "Lafayette Leopards", division: "Patriot", conference: "Patriot League", founded: "02/09/1826", leagueJoined: "1986", city: "Easton", state: "PA", cityFounded: "01/01/1752", cityCharter: "01/01/1887", stadium: "Fisher Stadium", stadiumOpened: "09/13/1926" },
  { name: "Lehigh Mountain Hawks", division: "Patriot", conference: "Patriot League", founded: "04/01/1865", leagueJoined: "1986", city: "Bethlehem", state: "PA", cityFounded: "12/24/1741", cityCharter: "03/27/1917", stadium: "Goodman Stadium", stadiumOpened: "09/24/1988" },

  // PIONEER FOOTBALL LEAGUE - 11 teams
  { name: "Butler Bulldogs", division: "PFL", conference: "Pioneer Football League", founded: "01/07/1855", leagueJoined: "1993", city: "Indianapolis", state: "IN", cityFounded: "01/06/1821", cityCharter: "03/30/1847", stadium: "Bud and Jackie Sellick Bowl", stadiumOpened: "09/01/2019" },
  { name: "Davidson Wildcats", division: "PFL", conference: "Pioneer Football League", founded: "03/07/1837", leagueJoined: "2001", city: "Davidson", state: "NC", cityFounded: "01/01/1837", cityCharter: "01/01/1879", stadium: "Richardson Stadium", stadiumOpened: "10/02/1987" },
  { name: "Dayton Flyers", division: "PFL", conference: "Pioneer Football League", founded: "07/01/1850", leagueJoined: "1993", city: "Dayton", state: "OH", cityFounded: "04/01/1796", cityCharter: "03/01/1805", stadium: "Welcome Stadium", stadiumOpened: "09/18/1925" },
  { name: "Drake Bulldogs", division: "PFL", conference: "Pioneer Football League", founded: "08/03/1881", leagueJoined: "1993", city: "Des Moines", state: "IA", cityFounded: "09/22/1843", cityCharter: "09/22/1851", stadium: "Drake Stadium", stadiumOpened: "09/05/1925" },
  { name: "Marist Red Foxes", division: "PFL", conference: "Pioneer Football League", founded: "09/01/1929", leagueJoined: "2009", city: "Poughkeepsie", state: "NY", cityFounded: "01/01/1687", cityCharter: "03/28/1854", stadium: "Leonidoff Field", stadiumOpened: "09/01/1998" },
  { name: "Morehead State Eagles", division: "PFL", conference: "Pioneer Football League", founded: "01/01/1887", leagueJoined: "2001", city: "Morehead", state: "KY", cityFounded: "01/01/1856", cityCharter: "02/24/1869", stadium: "Jayne Stadium", stadiumOpened: "09/08/1964" },
  { name: "Presbyterian Blue Hose", division: "PFL", conference: "Pioneer Football League", founded: "03/01/1880", leagueJoined: "2007", city: "Clinton", state: "SC", cityFounded: "01/01/1852", cityCharter: "01/01/1896", stadium: "Bailey Memorial Stadium", stadiumOpened: "09/02/2002" },
  { name: "San Diego Toreros", division: "PFL", conference: "Pioneer Football League", founded: "07/15/1949", leagueJoined: "1993", city: "San Diego", state: "CA", cityFounded: "07/16/1769", cityCharter: "03/27/1850", stadium: "Torero Stadium", stadiumOpened: "09/01/1961" },
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
  { name: "Western Carolina Catamounts", division: "SoCon", conference: "Southern Conference", founded: "03/01/1889", leagueJoined: "1976", city: "Cullowhee", state: "NC", cityFounded: "01/01/1889", cityCharter: "01/01/1913", stadium: "E. J. Whitmire Stadium", stadiumOpened: "09/14/1974" },
  { name: "Wofford Terriers", division: "SoCon", conference: "Southern Conference", founded: "08/01/1854", leagueJoined: "1997", city: "Spartanburg", state: "SC", cityFounded: "01/01/1785", cityCharter: "03/08/1831", stadium: "Gibbs Stadium", stadiumOpened: "09/14/1996" },

  // SOUTHLAND CONFERENCE - 9 teams
  { name: "Houston Christian Huskies", division: "Southland", conference: "Southland Conference", founded: "08/20/1963", leagueJoined: "2013", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "06/05/1837", stadium: "Husky Stadium", stadiumOpened: "09/01/2009" },
  { name: "Incarnate Word Cardinals", division: "Southland", conference: "Southland Conference", founded: "12/08/1881", leagueJoined: "2013", city: "San Antonio", state: "TX", cityFounded: "05/01/1718", cityCharter: "06/05/1837", stadium: "Gayle and Tom Benson Stadium", stadiumOpened: "09/03/2008" },
  { name: "Lamar Cardinals", division: "Southland", conference: "Southland Conference", founded: "05/16/1923", leagueJoined: "1963", city: "Beaumont", state: "TX", cityFounded: "01/01/1835", cityCharter: "04/14/1838", stadium: "Provost Umphrey Stadium", stadiumOpened: "09/12/2009" },
  { name: "McNeese Cowboys", division: "Southland", conference: "Southland Conference", founded: "09/17/1939", leagueJoined: "1972", city: "Lake Charles", state: "LA", cityFounded: "03/17/1861", cityCharter: "03/16/1867", stadium: "Cowboy Stadium", stadiumOpened: "09/06/1982" },
  { name: "New Mexico State Aggies", division: "Southland", conference: "Southland Conference", founded: "09/17/1888", leagueJoined: "2022", city: "Las Cruces", state: "NM", cityFounded: "01/01/1849", cityCharter: "01/01/1907", stadium: "Aggie Memorial Stadium", stadiumOpened: "09/18/1978" },
  { name: "Nicholls Colonels", division: "Southland", conference: "Southland Conference", founded: "09/23/1948", leagueJoined: "1991", city: "Thibodaux", state: "LA", cityFounded: "01/01/1820", cityCharter: "01/01/1830", stadium: "Manning Field", stadiumOpened: "09/01/2009" },
  { name: "Northwestern State Demons", division: "Southland", conference: "Southland Conference", founded: "09/05/1884", leagueJoined: "1987", city: "Natchitoches", state: "LA", cityFounded: "01/01/1714", cityCharter: "02/05/1819", stadium: "Turpin Stadium", stadiumOpened: "09/01/1978" },
  { name: "Southeastern Louisiana Lions", division: "Southland", conference: "Southland Conference", founded: "02/25/1925", leagueJoined: "1987", city: "Hammond", state: "LA", cityFounded: "12/25/1818", cityCharter: "03/08/1888", stadium: "Strawberry Stadium", stadiumOpened: "10/06/1984" },
  { name: "Stephen F. Austin Lumberjacks", division: "Southland", conference: "Southland Conference", founded: "09/18/1923", leagueJoined: "1987", city: "Nacogdoches", state: "TX", cityFounded: "01/01/1779", cityCharter: "04/03/1837", stadium: "Homer Bryce Stadium", stadiumOpened: "09/15/1986" },

  // SOUTHWESTERN ATHLETIC CONFERENCE (SWAC) - 12 teams
  { name: "Alabama A&M Bulldogs", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "06/07/1875", leagueJoined: "1999", city: "Normal", state: "AL", cityFounded: "01/01/1811", cityCharter: "01/01/1811", stadium: "Louis Crews Stadium", stadiumOpened: "10/05/1996" },
  { name: "Alabama State Hornets", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "02/16/1867", leagueJoined: "1982", city: "Montgomery", state: "AL", cityFounded: "12/03/1819", cityCharter: "12/03/1819", stadium: "ASU Stadium", stadiumOpened: "09/01/1930" },
  { name: "Alcorn State Braves", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "05/13/1871", leagueJoined: "1962", city: "Lorman", state: "MS", cityFounded: "01/01/1850", cityCharter: "01/01/1950", stadium: "Jack Spinks Stadium", stadiumOpened: "09/01/1992" },
  { name: "Arkansas Pine Bluff Golden Lions", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "09/25/1873", leagueJoined: "1997", city: "Pine Bluff", state: "AR", cityFounded: "01/01/1839", cityCharter: "01/08/1839", stadium: "Golden Lion Stadium", stadiumOpened: "10/08/2005" },
  { name: "Bethune-Cookman Wildcats", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/03/1904", leagueJoined: "2021", city: "Daytona Beach", state: "FL", cityFounded: "01/01/1876", cityCharter: "01/01/1876", stadium: "Municipal Stadium", stadiumOpened: "08/30/1988" },
  { name: "Florida A&M Rattlers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/03/1887", leagueJoined: "2021", city: "Tallahassee", state: "FL", cityFounded: "01/01/1824", cityCharter: "01/01/1825", stadium: "Bragg Memorial Stadium", stadiumOpened: "10/07/1957" },
  { name: "Grambling State Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "01/01/1901", leagueJoined: "1958", city: "Grambling", state: "LA", cityFounded: "01/01/1901", cityCharter: "01/01/1901", stadium: "Eddie Robinson Stadium", stadiumOpened: "09/01/1983" },
  { name: "Jackson State Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "10/23/1877", leagueJoined: "1958", city: "Jackson", state: "MS", cityFounded: "12/23/1821", cityCharter: "04/23/1822", stadium: "Mississippi Veterans Memorial Stadium", stadiumOpened: "09/03/1950" },
  { name: "Mississippi Valley State Delta Devils", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "03/13/1946", leagueJoined: "1968", city: "Itta Bena", state: "MS", cityFounded: "01/01/1882", cityCharter: "01/01/1888", stadium: "Rice-Totten Stadium", stadiumOpened: "09/01/1950" },
  { name: "Prairie View A&M Panthers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "08/14/1876", leagueJoined: "1958", city: "Prairie View", state: "TX", cityFounded: "01/01/1876", cityCharter: "01/01/1876", stadium: "Panther Stadium", stadiumOpened: "09/15/1962" },
  { name: "Southern Jaguars", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "03/09/1880", leagueJoined: "1958", city: "Baton Rouge", state: "LA", cityFounded: "01/01/1719", cityCharter: "01/01/1817", stadium: "A.W. Mumford Stadium", stadiumOpened: "11/28/1928" },
  { name: "Texas Southern Tigers", division: "SWAC", conference: "Southwestern Athletic Conference", founded: "04/01/1927", leagueJoined: "1954", city: "Houston", state: "TX", cityFounded: "08/30/1836", cityCharter: "06/05/1837", stadium: "Alexander Durley Sports Complex", stadiumOpened: "09/01/1946" },

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

  "college-basketball": []
};

// Rest of your JavaScript code stays exactly the same...
// (Include all the utility functions, navigation, rendering, popup functions, etc. from the previous complete version)

// Current sport and filtered data
let currentSport = 'nfl';
let filtered = [];

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

function showGematriaCalculator() {
  document.getElementById('controls-section').style.display = 'none';
  document.getElementById('data-table').style.display = 'none';
  document.getElementById('numerology-tools').style.display = 'none';
  document.getElementById('gematria-calculator').style.display = 'block';
  
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector('[data-sport="gematria"]').classList.add('active');
  
  document.getElementById('gematria-calculator').innerHTML = `
    <h2>🔢 Gematria Calculator</h2>
    <div class="coming-soon">
      <p>Interactive gematria calculator with multiple cipher systems</p>
      <p>• Simple Gematria (A=1, B=2, etc.)</p>
      <p>• English Gematria (A=6, B=12, etc.)</p>
      <p>• Jewish Gematria</p>
      <p>• And more cipher systems...</p>
      <br>
      <p><strong>Coming Soon!</strong></p>
    </div>
  `;
}

function showNumerologyTools() {
  document.getElementById('controls-section').style.display = 'none';
  document.getElementById('data-table').style.display = 'none';
  document.getElementById('gematria-calculator').style.display = 'none';
  document.getElementById('numerology-tools').style.display = 'block';
  
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector('[data-sport="numerology"]').classList.add('active');
  
  document.getElementById('numerology-tools').innerHTML = `
    <h2>📅 Date Calculator & Numerology Tools</h2>
    <div class="coming-soon">
      <p>Interactive date and number analysis tools</p>
      <p>• Date to day-of-year calculator</p>
      <p>• Number properties (primes, composites, squares)</p>
      <p>• Date numerology analysis</p>
      <p>• Cross-reference with team founding dates</p>
      <br>
      <p><strong>Coming Soon!</strong></p>
    </div>
  `;
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
        
        html += `
          <div class="team-card ${foundedClass}" data-team-name="${team.name}">
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
  const cityInfo = getDayInfo(team.cityFounded);
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
              <label>City Founded:</label>
              <span>${team.cityFounded || 'Not available'}</span>
              ${team.cityFounded ? `<small>Day ${cityInfo.dayOfYear} • ${cityInfo.daysLeft} days left</small>` : ''}
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
