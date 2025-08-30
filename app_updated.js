/*
 * Multi-Sport Team Database & Analysis Tools
 * 
 * Features:
 * - Comprehensive team data for NFL, NBA, MLB, NHL, WNBA, MLS, College Football & Basketball
 * - Interactive filtering and search capabilities
 * - Gematria calculator with multiple cipher systems
 * - Numerology analysis tools
 * - State and city founding date information
 * 
 * Last Updated: August 30, 2025
 */

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
        {
            name: "Arizona Cardinals",
            division: "NFC West",
            conference: "NFC",
            founded: "March 28, 1898",
            leagueJoined: "1920",
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
            leagueJoined: "1966",
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
            leagueJoined: "1996",
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
            leagueJoined: "1960",
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
            leagueJoined: "1995",
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
            founded: "September 20, 1919",
            leagueJoined: "1920",
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
            leagueJoined: "1968",
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
            leagueJoined: "1950",
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
            leagueJoined: "1960",
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
            leagueJoined: "1960",
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
            leagueJoined: "1930",
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
            leagueJoined: "1921",
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
            leagueJoined: "2002",
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
            leagueJoined: "1953",
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
            leagueJoined: "1995",
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
            leagueJoined: "1960",
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
            leagueJoined: "1960",
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
            leagueJoined: "1960",
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
            leagueJoined: "1937",
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
            leagueJoined: "1966",
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
            leagueJoined: "1961",
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
            leagueJoined: "1960",
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
            leagueJoined: "1967",
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
            leagueJoined: "1925",
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
            leagueJoined: "1960",
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
            leagueJoined: "1933",
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
            leagueJoined: "1933",
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
            leagueJoined: "1950",
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
            leagueJoined: "1976",
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
            leagueJoined: "1976",
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
            leagueJoined: "1960",
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
            leagueJoined: "1932",
            city: "Landover",
            state: "MD",
            cityFounded: "July 16, 1790 (D.C.)",
            cityCharter: "",
            stadium: "Commanders Field",
            stadiumOpened: "September 14, 1997"
        }
    ],
    nba: [
        {
            name: "Atlanta Hawks",
            division: "Southeast",
            conference: "Eastern",
            founded: "June 6, 1946",
            leagueJoined: "1949",
            city: "Atlanta",
            state: "GA",
            cityFounded: "1837",
            cityCharter: "December 29, 1847",
            arena: "State Farm Arena",
            arenaOpened: "September 2, 1999"
        },
        {
            name: "Boston Celtics",
            division: "Atlantic",
            conference: "Eastern",
            founded: "June 6, 1946",
            leagueJoined: "1946",
            city: "Boston",
            state: "MA",
            cityFounded: "September 17, 1630",
            cityCharter: "March 19, 1822",
            arena: "TD Garden",
            arenaOpened: "September 30, 1995"
        },
        {
            name: "Brooklyn Nets",
            division: "Atlantic",
            conference: "Eastern",
            founded: "February 2, 1967",
            leagueJoined: "1976",
            city: "Brooklyn",
            state: "NY",
            cityFounded: "1636",
            cityCharter: "April 4, 1834",
            arena: "Barclays Center",
            arenaOpened: "September 21, 2012"
        },
        {
            name: "Charlotte Hornets",
            division: "Southeast",
            conference: "Eastern",
            founded: "April 22, 1988",
            leagueJoined: "1988",
            city: "Charlotte",
            state: "NC",
            cityFounded: "December 3, 1768",
            cityCharter: "December 3, 1768",
            arena: "Spectrum Center",
            arenaOpened: "August 11, 2005"
        },
        {
            name: "Chicago Bulls",
            division: "Central",
            conference: "Eastern",
            founded: "January 16, 1966",
            leagueJoined: "1966",
            city: "Chicago",
            state: "IL",
            cityFounded: "March 4, 1837",
            cityCharter: "March 4, 1837",
            arena: "United Center",
            arenaOpened: "August 18, 1994"
        },
        {
            name: "Cleveland Cavaliers",
            division: "Central",
            conference: "Eastern",
            founded: "February 8, 1970",
            leagueJoined: "1970",
            city: "Cleveland",
            state: "OH",
            cityFounded: "July 22, 1796",
            cityCharter: "January 1, 1914",
            arena: "Rocket Mortgage FieldHouse",
            arenaOpened: "October 17, 1994"
        },
        {
            name: "Dallas Mavericks",
            division: "Southwest",
            conference: "Western",
            founded: "May 1, 1980",
            leagueJoined: "1980",
            city: "Dallas",
            state: "TX",
            cityFounded: "1841",
            cityCharter: "February 2, 1856",
            arena: "American Airlines Center",
            arenaOpened: "July 17, 2001"
        },
        {
            name: "Denver Nuggets",
            division: "Northwest",
            conference: "Western",
            founded: "February 2, 1967",
            leagueJoined: "1976",
            city: "Denver",
            state: "CO",
            cityFounded: "November 22, 1858",
            cityCharter: "November 7, 1861",
            arena: "Ball Arena",
            arenaOpened: "October 1, 1999"
        },
        {
            name: "Detroit Pistons",
            division: "Central",
            conference: "Eastern",
            founded: "1941",
            leagueJoined: "1949",
            city: "Detroit",
            state: "MI",
            cityFounded: "July 24, 1701",
            cityCharter: "September 13, 1806",
            arena: "Little Caesars Arena",
            arenaOpened: "September 5, 2017"
        },
        {
            name: "Golden State Warriors",
            division: "Pacific",
            conference: "Western",
            founded: "June 6, 1946",
            leagueJoined: "1946",
            city: "San Francisco",
            state: "CA",
            cityFounded: "January 30, 1847",
            cityCharter: "February 4, 1850",
            arena: "Chase Center",
            arenaOpened: "September 6, 2019"
        },
        {
            name: "Houston Rockets",
            division: "Southwest",
            conference: "Western",
            founded: "February 2, 1967",
            leagueJoined: "1967",
            city: "Houston",
            state: "TX",
            cityFounded: "August 30, 1836",
            cityCharter: "June 5, 1837",
            arena: "Toyota Center",
            arenaOpened: "September 29, 2003"
        },
        {
            name: "Indiana Pacers",
            division: "Central",
            conference: "Eastern",
            founded: "February 2, 1967",
            leagueJoined: "1976",
            city: "Indianapolis",
            state: "IN",
            cityFounded: "January 6, 1821",
            cityCharter: "March 30, 1847",
            arena: "Gainbridge Fieldhouse",
            arenaOpened: "November 6, 1999"
        },
        {
            name: "LA Clippers",
            division: "Pacific",
            conference: "Western",
            founded: "August 6, 1970",
            leagueJoined: "1970",
            city: "Los Angeles",
            state: "CA",
            cityFounded: "September 4, 1781",
            cityCharter: "May 23, 1835",
            arena: "Crypto.com Arena",
            arenaOpened: "October 17, 1999"
        },
        {
            name: "Los Angeles Lakers",
            division: "Pacific",
            conference: "Western",
            founded: "1946",
            leagueJoined: "1948",
            city: "Los Angeles",
            state: "CA",
            cityFounded: "September 4, 1781",
            cityCharter: "May 23, 1835",
            arena: "Crypto.com Arena",
            arenaOpened: "October 17, 1999"
        },
        {
            name: "Memphis Grizzlies",
            division: "Southwest",
            conference: "Western",
            founded: "April 27, 1995",
            leagueJoined: "1995",
            city: "Memphis",
            state: "TN",
            cityFounded: "May 22, 1819",
            cityCharter: "December 19, 1826",
            arena: "FedExForum",
            arenaOpened: "September 6, 2004"
        },
        {
            name: "Miami Heat",
            division: "Southeast",
            conference: "Eastern",
            founded: "April 22, 1987",
            leagueJoined: "1988",
            city: "Miami",
            state: "FL",
            cityFounded: "July 28, 1896",
            cityCharter: "July 28, 1896",
            arena: "Kaseya Center",
            arenaOpened: "December 31, 1999"
        },
        {
            name: "Milwaukee Bucks",
            division: "Central",
            conference: "Eastern",
            founded: "March 4, 1968",
            leagueJoined: "1968",
            city: "Milwaukee",
            state: "WI",
            cityFounded: "1846",
            cityCharter: "January 31, 1846",
            arena: "Fiserv Forum",
            arenaOpened: "August 26, 2018"
        },
        {
            name: "Minnesota Timberwolves",
            division: "Northwest",
            conference: "Western",
            founded: "April 22, 1987",
            leagueJoined: "1989",
            city: "Minneapolis",
            state: "MN",
            cityFounded: "1872",
            cityCharter: "1872",
            arena: "Target Center",
            arenaOpened: "October 13, 1990"
        },
        {
            name: "New Orleans Pelicans",
            division: "Southwest",
            conference: "Western",
            founded: "May 22, 1988",
            leagueJoined: "1988",
            city: "New Orleans",
            state: "LA",
            cityFounded: "Spring 1718",
            cityCharter: "March 7, 1805",
            arena: "Smoothie King Center",
            arenaOpened: "October 1, 1999"
        },
        {
            name: "New York Knicks",
            division: "Atlantic",
            conference: "Eastern",
            founded: "June 6, 1946",
            leagueJoined: "1946",
            city: "New York",
            state: "NY",
            cityFounded: "1624",
            cityCharter: "1653",
            arena: "Madison Square Garden",
            arenaOpened: "February 11, 1968"
        },
        {
            name: "Oklahoma City Thunder",
            division: "Northwest",
            conference: "Western",
            founded: "February 2, 1967",
            leagueJoined: "1967",
            city: "Oklahoma City",
            state: "OK",
            cityFounded: "April 22, 1889",
            cityCharter: "April 22, 1889",
            arena: "Paycom Center",
            arenaOpened: "June 8, 2002"
        },
        {
            name: "Orlando Magic",
            division: "Southeast",
            conference: "Eastern",
            founded: "April 22, 1987",
            leagueJoined: "1989",
            city: "Orlando",
            state: "FL",
            cityFounded: "February 4, 1875",
            cityCharter: "July 31, 1875",
            arena: "Kia Center",
            arenaOpened: "January 17, 1989"
        },
        {
            name: "Philadelphia 76ers",
            division: "Atlantic",
            conference: "Eastern",
            founded: "June 6, 1946",
            leagueJoined: "1949",
            city: "Philadelphia",
            state: "PA",
            cityFounded: "1682",
            cityCharter: "October 25, 1701",
            arena: "Wells Fargo Center",
            arenaOpened: "August 31, 1996"
        },
        {
            name: "Phoenix Suns",
            division: "Pacific",
            conference: "Western",
            founded: "February 6, 1968",
            leagueJoined: "1968",
            city: "Phoenix",
            state: "AZ",
            cityFounded: "May 4, 1868",
            cityCharter: "February 25, 1881",
            arena: "Footprint Center",
            arenaOpened: "June 1, 1992"
        },
        {
            name: "Portland Trail Blazers",
            division: "Northwest",
            conference: "Western",
            founded: "February 6, 1970",
            leagueJoined: "1970",
            city: "Portland",
            state: "OR",
            cityFounded: "1843",
            cityCharter: "February 8, 1851",
            arena: "Moda Center",
            arenaOpened: "October 12, 1995"
        },
        {
            name: "Sacramento Kings",
            division: "Pacific",
            conference: "Western",
            founded: "1945",
            leagueJoined: "1948",
            city: "Sacramento",
            state: "CA",
            cityFounded: "1848",
            cityCharter: "February 27, 1850",
            arena: "Golden 1 Center",
            arenaOpened: "September 30, 2016"
        },
        {
            name: "San Antonio Spurs",
            division: "Southwest",
            conference: "Western",
            founded: "February 2, 1967",
            leagueJoined: "1976",
            city: "San Antonio",
            state: "TX",
            cityFounded: "May 1, 1718",
            cityCharter: "June 5, 1837",
            arena: "Frost Bank Center",
            arenaOpened: "October 18, 2002"
        },
        {
            name: "Toronto Raptors",
            division: "Atlantic",
            conference: "Eastern",
            founded: "November 4, 1993",
            leagueJoined: "1995",
            city: "Toronto",
            state: "ON",
            cityFounded: "August 27, 1793",
            cityCharter: "March 6, 1834",
            arena: "Scotiabank Arena",
            arenaOpened: "February 20, 1999"
        },
        {
            name: "Utah Jazz",
            division: "Northwest",
            conference: "Western",
            founded: "June 7, 1974",
            leagueJoined: "1974",
            city: "Salt Lake City",
            state: "UT",
            cityFounded: "July 24, 1847",
            cityCharter: "January 6, 1851",
            arena: "Delta Center",
            arenaOpened: "October 4, 1991"
        },
        {
            name: "Washington Wizards",
            division: "Southeast",
            conference: "Eastern",
            founded: "February 8, 1961",
            leagueJoined: "1961",
            city: "Washington",
            state: "DC",
            cityFounded: "July 16, 1790",
            cityCharter: "",
            arena: "Capital One Arena",
            arenaOpened: "December 2, 1997"
        }
    ],
    mlb: [
        {
            name: "Arizona Diamondbacks",
            division: "NL West",
            conference: "National League",
            founded: "March 9, 1995",
            leagueJoined: "1998",
            city: "Phoenix",
            state: "AZ",
            cityFounded: "May 4, 1868",
            cityCharter: "February 25, 1881",
            stadium: "Chase Field",
            stadiumOpened: "March 31, 1998"
        },
        {
            name: "Atlanta Braves",
            division: "NL East",
            conference: "National League",
            founded: "January 20, 1871",
            leagueJoined: "1876",
            city: "Atlanta",
            state: "GA",
            cityFounded: "1837",
            cityCharter: "December 29, 1847",
            stadium: "Truist Park",
            stadiumOpened: "March 31, 2017"
        },
        {
            name: "Baltimore Orioles",
            division: "AL East",
            conference: "American League",
            founded: "1901",
            leagueJoined: "1901",
            city: "Baltimore",
            state: "MD",
            cityFounded: "August 8, 1729",
            cityCharter: "January 13, 1797",
            stadium: "Oriole Park at Camden Yards",
            stadiumOpened: "April 6, 1992"
        },
        {
            name: "Boston Red Sox",
            division: "AL East",
            conference: "American League",
            founded: "January 28, 1901",
            leagueJoined: "1901",
            city: "Boston",
            state: "MA",
            cityFounded: "September 17, 1630",
            cityCharter: "March 19, 1822",
            stadium: "Fenway Park",
            stadiumOpened: "April 20, 1912"
        },
        {
            name: "Chicago Cubs",
            division: "NL Central",
            conference: "National League",
            founded: "1870",
            leagueJoined: "1876",
            city: "Chicago",
            state: "IL",
            cityFounded: "March 4, 1837",
            cityCharter: "March 4, 1837",
            stadium: "Wrigley Field",
            stadiumOpened: "April 23, 1914"
        },
        {
            name: "Chicago White Sox",
            division: "AL Central",
            conference: "American League",
            founded: "March 21, 1900",
            leagueJoined: "1901",
            city: "Chicago",
            state: "IL",
            cityFounded: "March 4, 1837",
            cityCharter: "March 4, 1837",
            stadium: "Guaranteed Rate Field",
            stadiumOpened: "April 18, 1991"
        },
        {
            name: "Cincinnati Reds",
            division: "NL Central",
            conference: "National League",
            founded: "1881",
            leagueJoined: "1890",
            city: "Cincinnati",
            state: "OH",
            cityFounded: "December 1788",
            cityCharter: "March 1, 1819",
            stadium: "Great American Ball Park",
            stadiumOpened: "March 31, 2003"
        },
        {
            name: "Cleveland Guardians",
            division: "AL Central",
            conference: "American League",
            founded: "January 28, 1901",
            leagueJoined: "1901",
            city: "Cleveland",
            state: "OH",
            cityFounded: "July 22, 1796",
            cityCharter: "January 1, 1914",
            stadium: "Progressive Field",
            stadiumOpened: "April 4, 1994"
        },
        {
            name: "Colorado Rockies",
            division: "NL West",
            conference: "National League",
            founded: "July 5, 1991",
            leagueJoined: "1993",
            city: "Denver",
            state: "CO",
            cityFounded: "November 22, 1858",
            cityCharter: "November 7, 1861",
            stadium: "Coors Field",
            stadiumOpened: "April 26, 1995"
        },
        {
            name: "Detroit Tigers",
            division: "AL Central",
            conference: "American League",
            founded: "April 28, 1901",
            leagueJoined: "1901",
            city: "Detroit",
            state: "MI",
            cityFounded: "July 24, 1701",
            cityCharter: "September 13, 1806",
            stadium: "Comerica Park",
            stadiumOpened: "April 11, 2000"
        },
        {
            name: "Houston Astros",
            division: "AL West",
            conference: "American League",
            founded: "October 17, 1960",
            leagueJoined: "1962",
            city: "Houston",
            state: "TX",
            cityFounded: "August 30, 1836",
            cityCharter: "June 5, 1837",
            stadium: "Minute Maid Park",
            stadiumOpened: "March 30, 2000"
        },
        {
            name: "Kansas City Royals",
            division: "AL Central",
            conference: "American League",
            founded: "January 11, 1968",
            leagueJoined: "1969",
            city: "Kansas City",
            state: "MO",
            cityFounded: "June 3, 1850",
            cityCharter: "March 28, 1853",
            stadium: "Kauffman Stadium",
            stadiumOpened: "April 10, 1973"
        },
        {
            name: "Los Angeles Angels",
            division: "AL West",
            conference: "American League",
            founded: "September 6, 1960",
            leagueJoined: "1961",
            city: "Anaheim",
            state: "CA",
            cityFounded: "August 1, 1857",
            cityCharter: "February 10, 1876",
            stadium: "Angel Stadium",
            stadiumOpened: "April 19, 1966"
        },
        {
            name: "Los Angeles Dodgers",
            division: "NL West",
            conference: "National League",
            founded: "April 9, 1883",
            leagueJoined: "1890",
            city: "Los Angeles",
            state: "CA",
            cityFounded: "September 4, 1781",
            cityCharter: "May 23, 1835",
            stadium: "Dodger Stadium",
            stadiumOpened: "April 10, 1962"
        },
        {
            name: "Miami Marlins",
            division: "NL East",
            conference: "National League",
            founded: "July 5, 1991",
            leagueJoined: "1993",
            city: "Miami",
            state: "FL",
            cityFounded: "July 28, 1896",
            cityCharter: "July 28, 1896",
            stadium: "loanDepot park",
            stadiumOpened: "April 4, 2012"
        },
        {
            name: "Milwaukee Brewers",
            division: "NL Central",
            conference: "National League",
            founded: "March 30, 1969",
            leagueJoined: "1970",
            city: "Milwaukee",
            state: "WI",
            cityFounded: "1846",
            cityCharter: "January 31, 1846",
            stadium: "American Family Field",
            stadiumOpened: "April 7, 2001"
        },
        {
            name: "Minnesota Twins",
            division: "AL Central",
            conference: "American League",
            founded: "November 17, 1900",
            leagueJoined: "1901",
            city: "Minneapolis",
            state: "MN",
            cityFounded: "1872",
            cityCharter: "1872",
            stadium: "Target Field",
            stadiumOpened: "April 12, 2010"
        },
        {
            name: "New York Mets",
            division: "NL East",
            conference: "National League",
            founded: "October 17, 1960",
            leagueJoined: "1962",
            city: "New York",
            state: "NY",
            cityFounded: "1624",
            cityCharter: "1653",
            stadium: "Citi Field",
            stadiumOpened: "April 13, 2009"
        },
        {
            name: "New York Yankees",
            division: "AL East",
            conference: "American League",
            founded: "March 12, 1903",
            leagueJoined: "1903",
            city: "New York",
            state: "NY",
            cityFounded: "1624",
            cityCharter: "1653",
            stadium: "Yankee Stadium",
            stadiumOpened: "April 16, 2009"
        },
        {
            name: "Oakland Athletics",
            division: "AL West",
            conference: "American League",
            founded: "1901",
            leagueJoined: "1901",
            city: "Oakland",
            state: "CA",
            cityFounded: "May 4, 1852",
            cityCharter: "May 4, 1852",
            stadium: "Oakland Coliseum",
            stadiumOpened: "September 18, 1966"
        },
        {
            name: "Philadelphia Phillies",
            division: "NL East",
            conference: "National League",
            founded: "May 1, 1883",
            leagueJoined: "1883",
            city: "Philadelphia",
            state: "PA",
            cityFounded: "1682",
            cityCharter: "October 25, 1701",
            stadium: "Citizens Bank Park",
            stadiumOpened: "April 12, 2004"
        },
        {
            name: "Pittsburgh Pirates",
            division: "NL Central",
            conference: "National League",
            founded: "October 15, 1881",
            leagueJoined: "1887",
            city: "Pittsburgh",
            state: "PA",
            cityFounded: "November 27, 1758",
            cityCharter: "March 18, 1816",
            stadium: "PNC Park",
            stadiumOpened: "March 31, 2001"
        },
        {
            name: "San Diego Padres",
            division: "NL West",
            conference: "National League",
            founded: "January 16, 1969",
            leagueJoined: "1969",
            city: "San Diego",
            state: "CA",
            cityFounded: "July 16, 1769",
            cityCharter: "March 27, 1850",
            stadium: "Petco Park",
            stadiumOpened: "April 8, 2004"
        },
        {
            name: "San Francisco Giants",
            division: "NL West",
            conference: "National League",
            founded: "January 28, 1883",
            leagueJoined: "1883",
            city: "San Francisco",
            state: "CA",
            cityFounded: "January 30, 1847",
            cityCharter: "February 4, 1850",
            stadium: "Oracle Park",
            stadiumOpened: "April 11, 2000"
        },
        {
            name: "Seattle Mariners",
            division: "AL West",
            conference: "American League",
            founded: "October 27, 1976",
            leagueJoined: "1977",
            city: "Seattle",
            state: "WA",
            cityFounded: "May 23, 1853",
            cityCharter: "December 2, 1869",
            stadium: "T-Mobile Park",
            stadiumOpened: "July 15, 1999"
        },
        {
            name: "St. Louis Cardinals",
            division: "NL Central",
            conference: "National League",
            founded: "March 15, 1882",
            leagueJoined: "1892",
            city: "St. Louis",
            state: "MO",
            cityFounded: "February 14, 1764",
            cityCharter: "April 9, 1822",
            stadium: "Busch Stadium",
            stadiumOpened: "April 10, 2006"
        },
        {
            name: "Tampa Bay Rays",
            division: "AL East",
            conference: "American League",
            founded: "March 9, 1995",
            leagueJoined: "1998",
            city: "St. Petersburg",
            state: "FL",
            cityFounded: "February 29, 1888",
            cityCharter: "February 29, 1892",
            stadium: "Tropicana Field",
            stadiumOpened: "March 3, 1990"
        },
        {
            name: "Texas Rangers",
            division: "AL West",
            conference: "American League",
            founded: "October 26, 1960",
            leagueJoined: "1972",
            city: "Arlington",
            state: "TX",
            cityFounded: "1876",
            cityCharter: "1884",
            stadium: "Globe Life Field",
            stadiumOpened: "March 11, 2020"
        },
        {
            name: "Toronto Blue Jays",
            division: "AL East",
            conference: "American League",
            founded: "March 26, 1976",
            leagueJoined: "1977",
            city: "Toronto",
            state: "ON",
            cityFounded: "August 27, 1793",
            cityCharter: "March 6, 1834",
            stadium: "Rogers Centre",
            stadiumOpened: "June 3, 1989"
        },
        {
            name: "Washington Nationals",
            division: "NL East",
            conference: "National League",
            founded: "May 27, 1969",
            leagueJoined: "2005",
            city: "Washington",
            state: "DC",
            cityFounded: "July 16, 1790",
            cityCharter: "",
            stadium: "Nationals Park",
            stadiumOpened: "March 30, 2008"
        }
    ],
    nhl: [
        {
            name: "Anaheim Ducks",
            division: "Pacific",
            conference: "Western",
            founded: "June 15, 1993",
            leagueJoined: "1993",
            city: "Anaheim",
            state: "CA",
            cityFounded: "August 1, 1857",
            cityCharter: "February 10, 1876",
            arena: "Honda Center",
            arenaOpened: "June 17, 1993"
        },
        {
            name: "Boston Bruins",
            division: "Atlantic",
            conference: "Eastern",
            founded: "November 1, 1924",
            leagueJoined: "1924",
            city: "Boston",
            state: "MA",
            cityFounded: "September 17, 1630",
            cityCharter: "March 19, 1822",
            arena: "TD Garden",
            arenaOpened: "September 30, 1995"
        },
        {
            name: "Buffalo Sabres",
            division: "Atlantic",
            conference: "Eastern",
            founded: "May 22, 1970",
            leagueJoined: "1970",
            city: "Buffalo",
            state: "NY",
            cityFounded: "1810",
            cityCharter: "April 20, 1832",
            arena: "KeyBank Center",
            arenaOpened: "September 21, 1996"
        },
        {
            name: "Calgary Flames",
            division: "Pacific",
            conference: "Western",
            founded: "June 6, 1972",
            leagueJoined: "1972",
            city: "Calgary",
            state: "AB",
            cityFounded: "1875",
            cityCharter: "1894",
            arena: "Scotiabank Saddledome",
            arenaOpened: "October 15, 1983"
        },
        {
            name: "Carolina Hurricanes",
            division: "Metropolitan",
            conference: "Eastern",
            founded: "June 22, 1971",
            leagueJoined: "1979",
            city: "Raleigh",
            state: "NC",
            cityFounded: "1792",
            cityCharter: "December 31, 1792",
            arena: "PNC Arena",
            arenaOpened: "October 29, 1999"
        },
        {
            name: "Chicago Blackhawks",
            division: "Central",
            conference: "Western",
            founded: "September 25, 1926",
            leagueJoined: "1926",
            city: "Chicago",
            state: "IL",
            cityFounded: "March 4, 1837",
            cityCharter: "March 4, 1837",
            arena: "United Center",
            arenaOpened: "August 18, 1994"
        },
        {
            name: "Colorado Avalanche",
            division: "Central",
            conference: "Western",
            founded: "June 22, 1972",
            leagueJoined: "1979",
            city: "Denver",
            state: "CO",
            cityFounded: "November 22, 1858",
            cityCharter: "November 7, 1861",
            arena: "Ball Arena",
            arenaOpened: "October 1, 1999"
        },
        {
            name: "Columbus Blue Jackets",
            division: "Metropolitan",
            conference: "Eastern",
            founded: "June 25, 1997",
            leagueJoined: "2000",
            city: "Columbus",
            state: "OH",
            cityFounded: "February 14, 1812",
            cityCharter: "March 3, 1834",
            arena: "Nationwide Arena",
            arenaOpened: "September 9, 2000"
        },
        {
            name: "Dallas Stars",
            division: "Central",
            conference: "Western",
            founded: "June 5, 1967",
            leagueJoined: "1967",
            city: "Dallas",
            state: "TX",
            cityFounded: "1841",
            cityCharter: "February 2, 1856",
            arena: "American Airlines Center",
            arenaOpened: "July 17, 2001"
        },
        {
            name: "Detroit Red Wings",
            division: "Atlantic",
            conference: "Eastern",
            founded: "September 25, 1926",
            leagueJoined: "1926",
            city: "Detroit",
            state: "MI",
            cityFounded: "July 24, 1701",
            cityCharter: "September 13, 1806",
            arena: "Little Caesars Arena",
            arenaOpened: "September 5, 2017"
        },
        {
            name: "Edmonton Oilers",
            division: "Pacific",
            conference: "Western",
            founded: "November 1, 1971",
            leagueJoined: "1979",
            city: "Edmonton",
            state: "AB",
            cityFounded: "1795",
            cityCharter: "1904",
            arena: "Rogers Place",
            arenaOpened: "September 8, 2016"
        },
        {
            name: "Florida Panthers",
            division: "Atlantic",
            conference: "Eastern",
            founded: "December 10, 1992",
            leagueJoined: "1993",
            city: "Sunrise",
            state: "FL",
            cityFounded: "1961",
            cityCharter: "September 1, 1961",
            arena: "Amerant Bank Arena",
            arenaOpened: "October 9, 1998"
        },
        {
            name: "Los Angeles Kings",
            division: "Pacific",
            conference: "Western",
            founded: "February 9, 1966",
            leagueJoined: "1967",
            city: "Los Angeles",
            state: "CA",
            cityFounded: "September 4, 1781",
            cityCharter: "May 23, 1835",
            arena: "Crypto.com Arena",
            arenaOpened: "October 17, 1999"
        },
        {
            name: "Minnesota Wild",
            division: "Central",
            conference: "Western",
            founded: "June 25, 1997",
            leagueJoined: "2000",
            city: "St. Paul",
            state: "MN",
            cityFounded: "1840",
            cityCharter: "March 4, 1854",
            arena: "Xcel Energy Center",
            arenaOpened: "September 29, 2000"
        },
        {
            name: "Montreal Canadiens",
            division: "Atlantic",
            conference: "Eastern",
            founded: "November 26, 1917",
            leagueJoined: "1917",
            city: "Montreal",
            state: "QC",
            cityFounded: "May 17, 1642",
            cityCharter: "May 19, 1832",
            arena: "Bell Centre",
            arenaOpened: "March 16, 1996"
        },
        {
            name: "Nashville Predators",
            division: "Central",
            conference: "Western",
            founded: "June 25, 1997",
            leagueJoined: "1998",
            city: "Nashville",
            state: "TN",
            cityFounded: "December 24, 1779",
            cityCharter: "April 23, 1806",
            arena: "Bridgestone Arena",
            arenaOpened: "December 18, 1996"
        },
        {
            name: "New Jersey Devils",
            division: "Metropolitan",
            conference: "Eastern",
            founded: "June 11, 1974",
            leagueJoined: "1974",
            city: "Newark",
            state: "NJ",
            cityFounded: "1666",
            cityCharter: "April 11, 1836",
            arena: "Prudential Center",
            arenaOpened: "October 25, 2007"
        },
        {
            name: "New York Islanders",
            division: "Metropolitan",
            conference: "Eastern",
            founded: "November 8, 1971",
            leagueJoined: "1972",
            city: "Elmont",
            state: "NY",
            cityFounded: "1650",
            cityCharter: "1910",
            arena: "UBS Arena",
            arenaOpened: "November 20, 2021"
        },
        {
            name: "New York Rangers",
            division: "Metropolitan",
            conference: "Eastern",
            founded: "September 25, 1926",
            leagueJoined: "1926",
            city: "New York",
            state: "NY",
            cityFounded: "1624",
            cityCharter: "1653",
            arena: "Madison Square Garden",
            arenaOpened: "February 11, 1968"
        },
        {
            name: "Ottawa Senators",
            division: "Atlantic",
            conference: "Eastern",
            founded: "November 26, 1917",
            leagueJoined: "1992",
            city: "Ottawa",
            state: "ON",
            cityFounded: "September 26, 1826",
            cityCharter: "1855",
            arena: "Canadian Tire Centre",
            arenaOpened: "January 15, 1996"
        },
        {
            name: "Philadelphia Flyers",
            division: "Metropolitan",
            conference: "Eastern",
            founded: "February 8, 1966",
            leagueJoined: "1967",
            city: "Philadelphia",
            state: "PA",
            cityFounded: "1682",
            cityCharter: "October 25, 1701",
            arena: "Wells Fargo Center",
            arenaOpened: "August 31, 1996"
        },
        {
            name: "Pittsburgh Penguins",
            division: "Metropolitan",
            conference: "Eastern",
            founded: "February 8, 1966",
            leagueJoined: "1967",
            city: "Pittsburgh",
            state: "PA",
            cityFounded: "November 27, 1758",
            cityCharter: "March 18, 1816",
            arena: "PPG Paints Arena",
            arenaOpened: "August 18, 2010"
        },
        {
            name: "San Jose Sharks",
            division: "Pacific",
            conference: "Western",
            founded: "December 7, 1990",
            leagueJoined: "1991",
            city: "San Jose",
            state: "CA",
            cityFounded: "November 29, 1777",
            cityCharter: "March 27, 1850",
            arena: "SAP Center",
            arenaOpened: "September 7, 1993"
        },
        {
            name: "Seattle Kraken",
            division: "Pacific",
            conference: "Western",
            founded: "December 4, 2018",
            leagueJoined: "2021",
            city: "Seattle",
            state: "WA",
            cityFounded: "May 23, 1853",
            cityCharter: "December 2, 1869",
            arena: "Climate Pledge Arena",
            arenaOpened: "October 22, 1962"
        },
        {
            name: "St. Louis Blues",
            division: "Central",
            conference: "Western",
            founded: "February 8, 1966",
            leagueJoined: "1967",
            city: "St. Louis",
            state: "MO",
            cityFounded: "February 14, 1764",
            cityCharter: "April 9, 1822",
            arena: "Enterprise Center",
            arenaOpened: "October 10, 1994"
        },
        {
            name: "Tampa Bay Lightning",
            division: "Atlantic",
            conference: "Eastern",
            founded: "December 16, 1991",
            leagueJoined: "1992",
            city: "Tampa",
            state: "FL",
            cityFounded: "January 18, 1849",
            cityCharter: "December 15, 1855",
            arena: "Amalie Arena",
            arenaOpened: "October 20, 1996"
        },
        {
            name: "Toronto Maple Leafs",
            division: "Atlantic",
            conference: "Eastern",
            founded: "November 26, 1917",
            leagueJoined: "1917",
            city: "Toronto",
            state: "ON",
            cityFounded: "August 27, 1793",
            cityCharter: "March 6, 1834",
            arena: "Scotiabank Arena",
            arenaOpened: "February 20, 1999"
        },
        {
            name: "Utah Hockey Club",
            division: "Central",
            conference: "Western",
            founded: "June 22, 1996",
            leagueJoined: "1996",
            city: "Salt Lake City",
            state: "UT",
            cityFounded: "July 24, 1847",
            cityCharter: "January 6, 1851",
            arena: "Delta Center",
            arenaOpened: "October 4, 1991"
        },
        {
            name: "Vancouver Canucks",
            division: "Pacific",
            conference: "Western",
            founded: "May 22, 1970",
            leagueJoined: "1970",
            city: "Vancouver",
            state: "BC",
            cityFounded: "April 6, 1886",
            cityCharter: "April 6, 1886",
            arena: "Rogers Arena",
            arenaOpened: "September 21, 1995"
        },
        {
            name: "Vegas Golden Knights",
            division: "Pacific",
            conference: "Western",
            founded: "June 22, 2016",
            leagueJoined: "2017",
            city: "Las Vegas",
            state: "NV",
            cityFounded: "May 15, 1905",
            cityCharter: "March 16, 1911",
            arena: "T-Mobile Arena",
            arenaOpened: "April 6, 2016"
        },
        {
            name: "Washington Capitals",
            division: "Metropolitan",
            conference: "Eastern",
            founded: "June 8, 1972",
            leagueJoined: "1974",
            city: "Washington",
            state: "DC",
            cityFounded: "July 16, 1790",
            cityCharter: "",
            arena: "Capital One Arena",
            arenaOpened: "December 2, 1997"
        },
        {
            name: "Winnipeg Jets",
            division: "Central",
            conference: "Western",
            founded: "June 22, 1971",
            leagueJoined: "2011",
            city: "Winnipeg",
            state: "MB",
            cityFounded: "November 8, 1873",
            cityCharter: "November 8, 1873",
            arena: "Canada Life Centre",
            arenaOpened: "November 15, 2004"
        }
    ],
    wnba: [
        {
            name: "Atlanta Dream",
            division: "",
            conference: "Eastern",
            founded: "October 16, 2007",
            leagueJoined: "2008",
            city: "Atlanta",
            state: "GA",
            cityFounded: "1837",
            cityCharter: "December 29, 1847",
            arena: "Gateway Center Arena",
            arenaOpened: "May 12, 2021"
        },
        {
            name: "Chicago Sky",
            division: "",
            conference: "Eastern",
            founded: "February 22, 2006",
            leagueJoined: "2006",
            city: "Chicago",
            state: "IL",
            cityFounded: "March 4, 1837",
            cityCharter: "March 4, 1837",
            arena: "Wintrust Arena",
            arenaOpened: "October 6, 2017"
        },
        {
            name: "Connecticut Sun",
            division: "",
            conference: "Eastern",
            founded: "April 24, 1998",
            leagueJoined: "1999",
            city: "Uncasville",
            state: "CT",
            cityFounded: "1841",
            cityCharter: "1893",
            arena: "Mohegan Sun Arena",
            arenaOpened: "October 21, 2001"
        },
        {
            name: "Dallas Wings",
            division: "",
            conference: "Western",
            founded: "February 15, 1998",
            leagueJoined: "1999",
            city: "Dallas",
            state: "TX",
            cityFounded: "1841",
            cityCharter: "February 2, 1856",
            arena: "College Park Center",
            arenaOpened: "September 30, 2012"
        },
        {
            name: "Golden State Valkyries",
            division: "",
            conference: "Western",
            founded: "October 5, 2023",
            leagueJoined: "2025",
            city: "San Francisco",
            state: "CA",
            cityFounded: "January 30, 1847",
            cityCharter: "February 4, 1850",
            arena: "Chase Center",
            arenaOpened: "September 6, 2019"
        },
        {
            name: "Indiana Fever",
            division: "",
            conference: "Eastern",
            founded: "October 21, 1998",
            leagueJoined: "1999",
            city: "Indianapolis",
            state: "IN",
            cityFounded: "January 6, 1821",
            cityCharter: "March 30, 1847",
            arena: "Gainbridge Fieldhouse",
            arenaOpened: "November 6, 1999"
        },
        {
            name: "Las Vegas Aces",
            division: "",
            conference: "Western",
            founded: "February 15, 1998",
            leagueJoined: "1999",
            city: "Las Vegas",
            state: "NV",
            cityFounded: "May 15, 1905",
            cityCharter: "March 16, 1911",
            arena: "Michelob ULTRA Arena",
            arenaOpened: "April 6, 2016"
        },
        {
            name: "Minnesota Lynx",
            division: "",
            conference: "Western",
            founded: "April 24, 1998",
            leagueJoined: "1999",
            city: "Minneapolis",
            state: "MN",
            cityFounded: "1872",
            cityCharter: "1872",
            arena: "Target Center",
            arenaOpened: "October 13, 1990"
        },
        {
            name: "New York Liberty",
            division: "",
            conference: "Eastern",
            founded: "January 22, 1997",
            leagueJoined: "1997",
            city: "Brooklyn",
            state: "NY",
            cityFounded: "1636",
            cityCharter: "April 4, 1834",
            arena: "Barclays Center",
            arenaOpened: "September 21, 2012"
        },
        {
            name: "Phoenix Mercury",
            division: "",
            conference: "Western",
            founded: "January 15, 1997",
            leagueJoined: "1997",
            city: "Phoenix",
            state: "AZ",
            cityFounded: "May 4, 1868",
            cityCharter: "February 25, 1881",
            arena: "Footprint Center",
            arenaOpened: "June 1, 1992"
        },
        {
            name: "Seattle Storm",
            division: "",
            conference: "Western",
            founded: "April 20, 1999",
            leagueJoined: "2000",
            city: "Seattle",
            state: "WA",
            cityFounded: "May 23, 1853",
            cityCharter: "December 2, 1869",
            arena: "Climate Pledge Arena",
            arenaOpened: "October 22, 1962"
        },
        {
            name: "Washington Mystics",
            division: "",
            conference: "Eastern",
            founded: "April 20, 1998",
            leagueJoined: "1999",
            city: "Washington",
            state: "DC",
            cityFounded: "July 16, 1790",
            cityCharter: "",
            arena: "Entertainment & Sports Arena",
            arenaOpened: "September 22, 2018"
        }
    ],
    mls: [
        {
            name: "Atlanta United FC",
            division: "Eastern",
            conference: "Eastern",
            founded: "April 16, 2014",
            leagueJoined: "2017",
            city: "Atlanta",
            state: "GA",
            cityFounded: "1837",
            cityCharter: "December 29, 1847",
            stadium: "Mercedes-Benz Stadium",
            stadiumOpened: "August 26, 2017"
        },
        {
            name: "Austin FC",
            division: "Western",
            conference: "Western",
            founded: "January 15, 2019",
            leagueJoined: "2021",
            city: "Austin",
            state: "TX",
            cityFounded: "December 27, 1839",
            cityCharter: "December 27, 1839",
            stadium: "Q2 Stadium",
            stadiumOpened: "June 19, 2021"
        },
        {
            name: "Charlotte FC",
            division: "Eastern",
            conference: "Eastern",
            founded: "December 17, 2019",
            leagueJoined: "2022",
            city: "Charlotte",
            state: "NC",
            cityFounded: "December 3, 1768",
            cityCharter: "December 3, 1768",
            stadium: "Bank of America Stadium",
            stadiumOpened: "September 1, 1996"
        },
        {
            name: "Chicago Fire FC",
            division: "Eastern",
            conference: "Eastern",
            founded: "October 8, 1997",
            leagueJoined: "1998",
            city: "Chicago",
            state: "IL",
            cityFounded: "March 4, 1837",
            cityCharter: "March 4, 1837",
            stadium: "SeatGeek Stadium",
            stadiumOpened: "June 11, 2006"
        },
        {
            name: "FC Cincinnati",
            division: "Eastern",
            conference: "Eastern",
            founded: "August 12, 2015",
            leagueJoined: "2019",
            city: "Cincinnati",
            state: "OH",
            cityFounded: "December 1788",
            cityCharter: "March 1, 1819",
            stadium: "TQL Stadium",
            stadiumOpened: "May 1, 2021"
        },
        {
            name: "Colorado Rapids",
            division: "Western",
            conference: "Western",
            founded: "June 15, 1995",
            leagueJoined: "1996",
            city: "Commerce City",
            state: "CO",
            cityFounded: "1952",
            cityCharter: "1952",
            stadium: "Dick's Sporting Goods Park",
            stadiumOpened: "April 7, 2007"
        },
        {
            name: "Columbus Crew",
            division: "Eastern",
            conference: "Eastern",
            founded: "June 15, 1994",
            leagueJoined: "1996",
            city: "Columbus",
            state: "OH",
            cityFounded: "February 14, 1812",
            cityCharter: "March 3, 1834",
            stadium: "Field",
            stadiumOpened: "July 3, 2021"
        },
        {
            name: "D.C. United",
            division: "Eastern",
            conference: "Eastern",
            founded: "June 15, 1994",
            leagueJoined: "1996",
            city: "Washington",
            state: "DC",
            cityFounded: "July 16, 1790",
            cityCharter: "",
            stadium: "Audi Field",
            stadiumOpened: "July 14, 2018"
        },
        {
            name: "FC Dallas",
            division: "Western",
            conference: "Western",
            founded: "June 15, 1995",
            leagueJoined: "1996",
            city: "Frisco",
            state: "TX",
            cityFounded: "1902",
            cityCharter: "1987",
            stadium: "Toyota Stadium",
            stadiumOpened: "August 6, 2005"
        },
        {
            name: "Houston Dynamo FC",
            division: "Western",
            conference: "Western",
            founded: "December 15, 2005",
            leagueJoined: "2006",
            city: "Houston",
            state: "TX",
            cityFounded: "August 30, 1836",
            cityCharter: "June 5, 1837",
            stadium: "Shell Energy Stadium",
            stadiumOpened: "May 12, 2012"
        },
        {
            name: "Inter Miami CF",
            division: "Eastern",
            conference: "Eastern",
            founded: "January 29, 2018",
            leagueJoined: "2020",
            city: "Fort Lauderdale",
            state: "FL",
            cityFounded: "March 27, 1911",
            cityCharter: "March 27, 1911",
            stadium: "DRV PNK Stadium",
            stadiumOpened: "April 18, 2020"
        },
        {
            name: "LA Galaxy",
            division: "Western",
            conference: "Western",
            founded: "June 15, 1994",
            leagueJoined: "1996",
            city: "Carson",
            state: "CA",
            cityFounded: "February 20, 1968",
            cityCharter: "February 20, 1968",
            stadium: "Dignity Health Sports Park",
            stadiumOpened: "June 1, 2003"
        },
        {
            name: "Los Angeles FC",
            division: "Western",
            conference: "Western",
            founded: "October 30, 2014",
            leagueJoined: "2018",
            city: "Los Angeles",
            state: "CA",
            cityFounded: "September 4, 1781",
            cityCharter: "May 23, 1835",
            stadium: "BMO Stadium",
            stadiumOpened: "April 29, 2018"
        },
        {
            name: "Minnesota United FC",
            division: "Western",
            conference: "Western",
            founded: "March 25, 2015",
            leagueJoined: "2017",
            city: "St. Paul",
            state: "MN",
            cityFounded: "1840",
            cityCharter: "March 4, 1854",
            stadium: "Allianz Field",
            stadiumOpened: "April 13, 2019"
        },
        {
            name: "CF Montréal",
            division: "Eastern",
            conference: "Eastern",
            founded: "May 7, 2010",
            leagueJoined: "2012",
            city: "Montreal",
            state: "QC",
            cityFounded: "May 17, 1642",
            cityCharter: "May 19, 1832",
            stadium: "Stade Saputo",
            stadiumOpened: "May 17, 2008"
        },
        {
            name: "Nashville SC",
            division: "Eastern",
            conference: "Eastern",
            founded: "February 7, 2017",
            leagueJoined: "2020",
            city: "Nashville",
            state: "TN",
            cityFounded: "December 24, 1779",
            cityCharter: "April 23, 1806",
            stadium: "GEODIS Park",
            stadiumOpened: "May 1, 2022"
        },
        {
            name: "New England Revolution",
            division: "Eastern",
            conference: "Eastern",
            founded: "June 15, 1994",
            leagueJoined: "1996",
            city: "Foxborough",
            state: "MA",
            cityFounded: "June 10, 1778",
            cityCharter: "June 10, 1778",
            stadium: "Gillette Stadium",
            stadiumOpened: "May 11, 2002"
        },
        {
            name: "New York City FC",
            division: "Eastern",
            conference: "Eastern",
            founded: "May 21, 2013",
            leagueJoined: "2015",
            city: "New York",
            state: "NY",
            cityFounded: "1624",
            cityCharter: "1653",
            stadium: "Yankee Stadium",
            stadiumOpened: "April 16, 2009"
        },
        {
            name: "New York Red Bulls",
            division: "Eastern",
            conference: "Eastern",
            founded: "October 24, 1994",
            leagueJoined: "1996",
            city: "Harrison",
            state: "NJ",
            cityFounded: "1840",
            cityCharter: "April 8, 1869",
            stadium: "Red Bull Arena",
            stadiumOpened: "March 20, 2010"
        },
        {
            name: "Orlando City SC",
            division: "Eastern",
            conference: "Eastern",
            founded: "November 19, 2013",
            leagueJoined: "2015",
            city: "Orlando",
            state: "FL",
            cityFounded: "February 4, 1875",
            cityCharter: "July 31, 1875",
            stadium: "Exploria Stadium",
            stadiumOpened: "February 24, 2017"
        },
        {
            name: "Philadelphia Union",
            division: "Eastern",
            conference: "Eastern",
            founded: "February 28, 2008",
            leagueJoined: "2010",
            city: "Chester",
            state: "PA",
            cityFounded: "1682",
            cityCharter: "February 14, 1701",
            stadium: "Subaru Park",
            stadiumOpened: "June 27, 2010"
        },
        {
            name: "Portland Timbers",
            division: "Western",
            conference: "Western",
            founded: "March 27, 2009",
            leagueJoined: "2011",
            city: "Portland",
            state: "OR",
            cityFounded: "1843",
            cityCharter: "February 8, 1851",
            stadium: "Providence Park",
            stadiumOpened: "September 25, 1926"
        },
        {
            name: "Real Salt Lake",
            division: "Western",
            conference: "Western",
            founded: "April 7, 2004",
            leagueJoined: "2005",
            city: "Sandy",
            state: "UT",
            cityFounded: "September 19, 1871",
            cityCharter: "September 19, 1893",
            stadium: "America First Field",
            stadiumOpened: "October 9, 2008"
        },
        {
            name: "San Jose Earthquakes",
            division: "Western",
            conference: "Western",
            founded: "June 15, 1994",
            leagueJoined: "1996",
            city: "San Jose",
            state: "CA",
            cityFounded: "November 29, 1777",
            cityCharter: "March 27, 1850",
            stadium: "PayPal Park",
            stadiumOpened: "May 22, 2015"
        },
        {
            name: "Seattle Sounders FC",
            division: "Western",
            conference: "Western",
            founded: "November 13, 2007",
            leagueJoined: "2009",
            city: "Seattle",
            state: "WA",
            cityFounded: "May 23, 1853",
            cityCharter: "December 2, 1869",
            stadium: "Lumen Field",
            stadiumOpened: "July 20, 2002"
        },
        {
            name: "Sporting Kansas City",
            division: "Western",
            conference: "Western",
            founded: "June 15, 1995",
            leagueJoined: "1996",
            city: "Kansas City",
            state: "KS",
            cityFounded: "1838",
            cityCharter: "March 22, 1859",
            stadium: "Children's Mercy Park",
            stadiumOpened: "June 9, 2011"
        },
        {
            name: "St. Louis City SC",
            division: "Western",
            conference: "Western",
            founded: "August 20, 2019",
            leagueJoined: "2023",
            city: "St. Louis",
            state: "MO",
            cityFounded: "February 14, 1764",
            cityCharter: "April 9, 1822",
            stadium: "CITYPARK",
            stadiumOpened: "February 25, 2023"
        },
        {
            name: "Toronto FC",
            division: "Eastern",
            conference: "Eastern",
            founded: "May 11, 2005",
            leagueJoined: "2007",
            city: "Toronto",
            state: "ON",
            cityFounded: "August 27, 1793",
            cityCharter: "March 6, 1834",
            stadium: "BMO Field",
            stadiumOpened: "April 28, 2007"
        },
        {
            name: "Vancouver Whitecaps FC",
            division: "Western",
            conference: "Western",
            founded: "March 18, 2009",
            leagueJoined: "2011",
            city: "Vancouver",
            state: "BC",
            cityFounded: "April 6, 1886",
            cityCharter: "April 6, 1886",
            stadium: "BC Place",
            stadiumOpened: "June 19, 1983"
        }
    ],
    "college-football": [],
    "college-basketball": []
};

// Sport configurations for different leagues
const sportConfig = {
    nfl: {
        title: 'NFL Teams',
        venueLabel: 'Stadium',
        conferenceLabel: 'Conference',
        divisionLabel: 'Division',
        leagueJoinedLabel: 'Joined NFL'
    },
    nba: {
        title: 'NBA Teams',
        venueLabel: 'Arena',
        conferenceLabel: 'Conference',
        divisionLabel: 'Division',
        leagueJoinedLabel: 'Joined NBA'
    },
    mlb: {
        title: 'MLB Teams',
        venueLabel: 'Stadium',
        conferenceLabel: 'League',
        divisionLabel: 'Division',
        leagueJoinedLabel: 'Joined MLB'
    },
    nhl: {
        title: 'NHL Teams',
        venueLabel: 'Arena',
        conferenceLabel: 'Conference',
        divisionLabel: 'Division',
        leagueJoinedLabel: 'Joined NHL'
    },
    wnba: {
        title: 'WNBA Teams',
        venueLabel: 'Arena',
        conferenceLabel: 'Conference',
        divisionLabel: 'Division',
        leagueJoinedLabel: 'Joined WNBA'
    },
    mls: {
        title: 'MLS Teams',
        venueLabel: 'Stadium',
        conferenceLabel: 'Conference',
        divisionLabel: 'Division',
        leagueJoinedLabel: 'Joined MLS'
    },
    'college-football': {
        title: 'College Football (D1)',
        venueLabel: 'Stadium',
        conferenceLabel: 'Conference',
        divisionLabel: 'Division',
        leagueJoinedLabel: 'Joined Conference'
    },
    'college-basketball': {
        title: 'College Basketball (D1)',
        venueLabel: 'Arena',
        conferenceLabel: 'Conference',
        divisionLabel: 'Division',
        leagueJoinedLabel: 'Joined Conference'
    }
};

// Current state variables
let currentSport = 'nfl';
let filtered = [...sportsData.nfl];

/**
 * Utility Functions
 */
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

/**
 * Navigation Functions
 */
function switchSport(sportKey) {
    currentSport = sportKey;

    // Handle special tool modes
    if (sportKey === 'gematria') {
        showGematriaCalculator();
        return;
    }
    if (sportKey === 'numerology') {
        showNumerologyTools();
        return;
    }

    // Show/hide appropriate sections
    document.getElementById('controls-section').style.display = 'block';
    document.getElementById('data-table').style.display = 'block';
    document.getElementById('gematria-calculator').style.display = 'none';
    document.getElementById('numerology-tools').style.display = 'none';

    // Hide division dropdown for college sports
    const divisionFilterGroup = document.getElementById('division-filter-group');
    if (sportKey === "college-football" || sportKey === "college-basketball") {
        divisionFilterGroup.style.display = 'none';
    } else {
        divisionFilterGroup.style.display = 'block';
    }

    // Handle empty datasets
    if (!sportsData[sportKey] || sportsData[sportKey].length === 0) {
        showComingSoon(sportKey);
        return;
    }

    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-sport="${sportKey}"]`).classList.add('active');

    // Update UI labels based on sport configuration
    const config = sportConfig[sportKey];
    document.getElementById('conference-label').textContent = config.conferenceLabel;
    document.getElementById('division-label').textContent = config.divisionLabel;
    document.getElementById('search-title').textContent = `Search & Filter - ${config.title}`;

    // Initialize data and render
    filtered = [...sportsData[sportKey]];
    initFilters();
    renderCards();
}

function showComingSoon(sportKey) {
    const config = sportConfig[sportKey];
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = `
        <tr>
            <td colspan="100%" style="text-align: center; padding: 60px; font-size: 18px; color: #666;">
                <h3>${config.title} - Coming Soon!</h3>
                <p>We're working on adding comprehensive data for this sport.</p>
                <p>Check back soon for updates!</p>
            </td>
        </tr>
    `;
}

/**
 * Filter and Search Functions
 */
function initFilters() {
    if (!sportsData[currentSport] || sportsData[currentSport].length === 0) return;

    const data = sportsData[currentSport];
    
    // Initialize conference filter
    const conferenceFilter = document.getElementById('conference-filter');
    const uniqueConferences = [...new Set(data.map(team => team.conference))].sort();
    conferenceFilter.innerHTML = '<option value="">All</option>' + 
        uniqueConferences.map(conf => `<option value="${conf}">${conf}</option>`).join('');

    // Initialize division filter (only for non-college sports)
    const divisionFilter = document.getElementById('division-filter');
    if (currentSport !== "college-football" && currentSport !== "college-basketball") {
        const uniqueDivisions = [...new Set(data.map(team => team.division))].filter(div => div).sort();
        divisionFilter.innerHTML = '<option value="">All</option>' + 
            uniqueDivisions.map(div => `<option value="${div}">${div}</option>`).join('');
    }

    // Clear search input
    document.getElementById('search-input').value = '';
}

function applyFilters() {
    if (!sportsData[currentSport]) return;

    let result = [...sportsData[currentSport]];
    
    // Apply search filter
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        result = result.filter(team => 
            team.name.toLowerCase().includes(searchTerm) ||
            team.city.toLowerCase().includes(searchTerm) ||
            team.state.toLowerCase().includes(searchTerm)
        );
    }

    // Apply conference filter
    const conferenceFilter = document.getElementById('conference-filter').value;
    if (conferenceFilter) {
        result = result.filter(team => team.conference === conferenceFilter);
    }

    // Apply division filter (only for non-college sports)
    if (currentSport !== "college-football" && currentSport !== "college-basketball") {
        const divisionFilter = document.getElementById('division-filter').value;
        if (divisionFilter) {
            result = result.filter(team => team.division === divisionFilter);
        }
    }

    filtered = result;
    renderCards();
}

/**
 * Rendering Functions
 */
function renderCards() {
    const tableBody = document.querySelector('#data-table tbody');
    
    if (!filtered || filtered.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="100%" style="text-align: center; padding: 40px; color: #666;">
                    No teams found matching your criteria.
                </td>
            </tr>
        `;
        return;
    }

    const config = sportConfig[currentSport];
    tableBody.innerHTML = filtered.map(team => {
        const stateInfo = stateData[team.state] || {};
        const stateText = stateInfo.order ? 
            `${team.state} (${stateInfo.order}${getOrdinal(stateInfo.order)} State)` : 
            team.state;

        const foundedText = team.founded || '—';
        const venueField = config.venueLabel.toLowerCase().replace(' ', '');
        const venue = team[venueField] || team.stadium || team.arena || '—';
        const venueOpened = team[venueField + 'Opened'] || team.stadiumOpened || team.arenaOpened || '—';

        return `
            <tr onclick="showTeamPopup('${team.name.replace(/'/g, "\\'")}')" style="cursor: pointer;">
                <td><strong>${team.name}</strong></td>
                <td>${team.city}, ${stateText}</td>
                <td>${foundedText}</td>
                <td>${team.conference}</td>
                <td>${team.division || '—'}</td>
                <td>${venue}</td>
            </tr>
        `;
    }).join('');
}

function showTeamPopup(teamName) {
    const team = filtered.find(t => t.name === teamName);
    if (!team) return;

    const config = sportConfig[currentSport];
    const stateInfo = stateData[team.state] || {};
    const stateText = stateInfo.order ? 
        `${team.state} (${stateInfo.order}${getOrdinal(stateInfo.order)} State)` : 
        team.state;

    const foundedText = team.founded || '—';
    const venueField = config.venueLabel.toLowerCase().replace(' ', '');
    const venue = team[venueField] || team.stadium || team.arena || '—';
    const venueOpened = team[venueField + 'Opened'] || team.stadiumOpened || team.arenaOpened || '—';

    // Calculate date information for various dates
    const teamFoundedInfo = getDayInfo(team.founded);
    const cityFoundedInfo = getDayInfo(team.cityFounded);
    const stateFoundedInfo = getDayInfo(stateInfo.founded);
    const venueOpenedInfo = getDayInfo(venueOpened);

    const popupContent = `
        <div class="popup-header">
            <h2>${team.name}</h2>
            <button onclick="closePopup()" class="close-btn">&times;</button>
        </div>
        <div class="popup-body">
            <div class="info-grid">
                <div class="info-item">
                    <strong>Location:</strong>
                    <span>${team.city}, ${stateText}</span>
                </div>
                <div class="info-item">
                    <strong>Team Founded:</strong>
                    <span>${foundedText}${teamFoundedInfo.dayOfYear !== '—' ? ` (Day ${teamFoundedInfo.dayOfYear})` : ''}</span>
                </div>
                <div class="info-item">
                    <strong>${config.conferenceLabel}:</strong>
                    <span>${team.conference}</span>
                </div>
                <div class="info-item">
                    <strong>${config.divisionLabel}:</strong>
                    <span>${team.division || '—'}</span>
                </div>
                <div class="info-item">
                    <strong>${config.leagueJoinedLabel}:</strong>
                    <span>${team.leagueJoined || '—'}</span>
                </div>
                <div class="info-item">
                    <strong>${config.venueLabel}:</strong>
                    <span>${venue}</span>
                </div>
                <div class="info-item">
                    <strong>${config.venueLabel} Opened:</strong>
                    <span>${venueOpened}${venueOpenedInfo.dayOfYear !== '—' ? ` (Day ${venueOpenedInfo.dayOfYear})` : ''}</span>
                </div>
                <div class="info-item">
                    <strong>City Founded:</strong>
                    <span>${team.cityFounded || '—'}${cityFoundedInfo.dayOfYear !== '—' ? ` (Day ${cityFoundedInfo.dayOfYear})` : ''}</span>
                </div>
                <div class="info-item">
                    <strong>City Charter:</strong>
                    <span>${team.cityCharter || '—'}</span>
                </div>
                <div class="info-item">
                    <strong>State Founded:</strong>
                    <span>${stateInfo.founded || '—'}${stateFoundedInfo.dayOfYear !== '—' ? ` (Day ${stateFoundedInfo.dayOfYear})` : ''}</span>
                </div>
            </div>
        </div>
    `;

    const popup = document.getElementById('team-popup');
    popup.innerHTML = popupContent;
    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('team-popup').style.display = 'none';
}

/**
 * Gematria Calculator Implementation
 */

// Complete cipher definitions based on Gematrinator.com
const allCiphers = {
    'Ordinal': {
        color: '#90EE90',
        enabled: true,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26}
    },
    'Reduction': {
        color: '#4169E1',
        enabled: true,
        values: {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9, 'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8}
    },
    'Reverse': {
        color: '#90EE90',
        enabled: true,
        values: {'A': 26, 'B': 25, 'C': 24, 'D': 23, 'E': 22, 'F': 21, 'G': 20, 'H': 19, 'I': 18, 'J': 17, 'K': 16, 'L': 15, 'M': 14, 'N': 13, 'O': 12, 'P': 11, 'Q': 10, 'R': 9, 'S': 8, 'T': 7, 'U': 6, 'V': 5, 'W': 4, 'X': 3, 'Y': 2, 'Z': 1}
    },
    'Reverse Reduction': {
        color: '#20B2AA',
        enabled: true,
        values: {'A': 8, 'B': 7, 'C': 6, 'D': 5, 'E': 4, 'F': 3, 'G': 2, 'H': 1, 'I': 9, 'J': 8, 'K': 7, 'L': 6, 'M': 5, 'N': 4, 'O': 3, 'P': 2, 'Q': 1, 'R': 9, 'S': 8, 'T': 7, 'U': 6, 'V': 5, 'W': 4, 'X': 3, 'Y': 2, 'Z': 1}
    }
};

// Cipher groups for toggle buttons
const cipherGroups = {
    "Select Base": ["Ordinal", "Reduction", "Reverse", "Reverse Reduction"],
    "Select All": Object.keys(allCiphers),
    "Clear All": []
};

let currentCipherIndex = 0;
const cipherNames = Object.keys(allCiphers);

function showGematriaCalculator() {
    document.getElementById('controls-section').style.display = 'none';
    document.getElementById('data-table').style.display = 'none';
    document.getElementById('numerology-tools').style.display = 'none';
    document.getElementById('gematria-calculator').style.display = 'block';

    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-sport="gematria"]').classList.add('active');

    document.getElementById('gematria-calculator').innerHTML = `
        <div class="gematria-container">
            <h2>Gematria Calculator</h2>
            
            <div class="input-section">
                <input type="text" id="gematria-input" placeholder="Enter text to calculate..." 
                       oninput="calculateGematria()" style="width: 100%; padding: 12px; font-size: 16px; margin-bottom: 20px;">
            </div>

            <div class="cipher-controls">
                <div class="cipher-buttons">
                    ${Object.keys(cipherGroups).map(group => 
                        `<button onclick="toggleCipherGroup('${group}')">${group}</button>`
                    ).join('')}
                </div>
            </div>

            <div class="cipher-toggles">
                ${Object.keys(allCiphers).map(cipher => `
                    <label class="cipher-toggle">
                        <input type="checkbox" id="cipher-${cipher.replace(/\s+/g, '-')}" 
                               ${allCiphers[cipher].enabled ? 'checked' : ''} 
                               onchange="calculateGematria()">
                        <span style="background-color: ${allCiphers[cipher].color};">${cipher}</span>
                    </label>
                `).join('')}
            </div>

            <div id="gematria-results" class="results-section"></div>
        </div>
    `;
}

function toggleCipherGroup(groupName) {
    const ciphersToEnable = cipherGroups[groupName];
    
    Object.keys(allCiphers).forEach(cipher => {
        const checkbox = document.getElementById(`cipher-${cipher.replace(/\s+/g, '-')}`);
        if (checkbox) {
            checkbox.checked = ciphersToEnable.includes(cipher);
            allCiphers[cipher].enabled = ciphersToEnable.includes(cipher);
        }
    });
    
    calculateGematria();
}

function calculateGematria() {
    const input = document.getElementById('gematria-input');
    const resultsDiv = document.getElementById('gematria-results');
    
    if (!input || !resultsDiv) return;
    
    const text = input.value.toUpperCase();
    
    if (!text.trim()) {
        resultsDiv.innerHTML = '<p class="placeholder">Enter text above to see gematria calculations...</p>';
        return;
    }

    let results = '';
    
    Object.keys(allCiphers).forEach(cipherName => {
        const cipher = allCiphers[cipherName];
        const checkbox = document.getElementById(`cipher-${cipherName.replace(/\s+/g, '-')}`);
        
        if (checkbox && checkbox.checked) {
            const value = calculateCipherValue(text, cipher.values);
            results += `
                <div class="cipher-result" style="border-left: 4px solid ${cipher.color};">
                    <span class="cipher-name">${cipherName}</span>
                    <span class="cipher-value">${value}</span>
                </div>
            `;
        }
    });

    resultsDiv.innerHTML = results || '<p>No ciphers selected.</p>';
}

function calculateCipherValue(text, values) {
    return text.split('').reduce((sum, char) => {
        return sum + (values[char] || 0);
    }, 0);
}

/**
 * Numerology Tools Implementation
 */
function showNumerologyTools() {
    document.getElementById('controls-section').style.display = 'none';
    document.getElementById('data-table').style.display = 'none';
    document.getElementById('gematria-calculator').style.display = 'none';
    document.getElementById('numerology-tools').style.display = 'block';

    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-sport="numerology"]').classList.add('active');

    document.getElementById('numerology-tools').innerHTML = `
        <div class="numerology-container">
            <h2>Numerology Analysis Tools</h2>
            
            <div class="tool-section">
                <h3>Date to Day-of-Year Calculator</h3>
                <input type="date" id="date-input" onchange="calculateDayOfYear()">
                <div id="date-results" class="results-box"></div>
            </div>

            <div class="tool-section">
                <h3>Number Properties</h3>
                <input type="number" id="number-input" placeholder="Enter a number..." oninput="analyzeNumber()">
                <div id="number-results" class="results-box"></div>
            </div>

            <div class="tool-section">
                <h3>Team Founding Date Analysis</h3>
                <select id="team-select" onchange="analyzeTeamDates()">
                    <option value="">Select a team...</option>
                </select>
                <div id="team-date-results" class="results-box"></div>
            </div>
        </div>
    `;

    // Populate team selector
    populateTeamSelector();
}

function populateTeamSelector() {
    const teamSelect = document.getElementById('team-select');
    if (!teamSelect) return;

    let allTeams = [];
    Object.keys(sportsData).forEach(sport => {
        if (sportsData[sport] && Array.isArray(sportsData[sport])) {
            sportsData[sport].forEach(team => {
                allTeams.push({ name: team.name, sport: sport.toUpperCase(), data: team });
            });
        }
    });

    allTeams.sort((a, b) => a.name.localeCompare(b.name));

    teamSelect.innerHTML = '<option value="">Select a team...</option>' +
        allTeams.map((team, index) => 
            `<option value="${index}">${team.name} (${team.sport})</option>`
        ).join('');

    // Store teams data for reference
    window.numerologyTeams = allTeams;
}

function calculateDayOfYear() {
    const dateInput = document.getElementById('date-input');
    const resultsDiv = document.getElementById('date-results');
    
    if (!dateInput.value) {
        resultsDiv.innerHTML = '';
        return;
    }

    const date = new Date(dateInput.value);
    const dayInfo = getDayInfo(dateInput.value);

    resultsDiv.innerHTML = `
        <h4>Date Analysis: ${date.toDateString()}</h4>
        <p><strong>Day of Year:</strong> ${dayInfo.dayOfYear}</p>
        <p><strong>Days Remaining:</strong> ${dayInfo.daysLeft}</p>
        <p><strong>Leap Year:</strong> ${isLeapYear(date.getFullYear()) ? 'Yes' : 'No'}</p>
    `;
}

function analyzeNumber() {
    const numberInput = document.getElementById('number-input');
    const resultsDiv = document.getElementById('number-results');
    
    const num = parseInt(numberInput.value);
    
    if (!num || isNaN(num)) {
        resultsDiv.innerHTML = '';
        return;
    }

    const properties = analyzeNumberProperties(num);
    
    resultsDiv.innerHTML = `
        <h4>Number Analysis: ${num}</h4>
        <p><strong>Prime:</strong> ${properties.isPrime ? 'Yes' : 'No'}</p>
        <p><strong>Perfect Square:</strong> ${properties.isPerfectSquare ? 'Yes' : 'No'}</p>
        <p><strong>Sum of Digits:</strong> ${properties.digitSum}</p>
        <p><strong>Digital Root:</strong> ${properties.digitalRoot}</p>
        ${properties.factors.length > 0 ? `<p><strong>Factors:</strong> ${properties.factors.join(', ')}</p>` : ''}
    `;
}

function analyzeTeamDates() {
    const teamSelect = document.getElementById('team-select');
    const resultsDiv = document.getElementById('team-date-results');
    
    if (!teamSelect.value || !window.numerologyTeams) {
        resultsDiv.innerHTML = '';
        return;
    }

    const team = window.numerologyTeams[parseInt(teamSelect.value)];
    const teamData = team.data;

    const foundedInfo = getDayInfo(teamData.founded);
    const cityInfo = getDayInfo(teamData.cityFounded);
    
    resultsDiv.innerHTML = `
        <h4>${team.name} Date Analysis</h4>
        <div class="date-analysis">
            <div>
                <strong>Team Founded:</strong> ${teamData.founded || 'Unknown'}
                ${foundedInfo.dayOfYear !== '—' ? `<br>Day of Year: ${foundedInfo.dayOfYear}` : ''}
            </div>
            <div>
                <strong>City Founded:</strong> ${teamData.cityFounded || 'Unknown'}
                ${cityInfo.dayOfYear !== '—' ? `<br>Day of Year: ${cityInfo.dayOfYear}` : ''}
            </div>
            <div>
                <strong>Location:</strong> ${teamData.city}, ${teamData.state}
            </div>
        </div>
    `;
}

function analyzeNumberProperties(num) {
    const isPrime = (n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const isPerfectSquare = (n) => {
        const sqrt = Math.sqrt(n);
        return sqrt === Math.floor(sqrt);
    };

    const getFactors = (n) => {
        const factors = [];
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) factors.push(i);
        }
        return factors;
    };

    const getDigitSum = (n) => {
        return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    const getDigitalRoot = (n) => {
        while (n >= 10) {
            n = getDigitSum(n);
        }
        return n;
    };

    return {
        isPrime: isPrime(num),
        isPerfectSquare: isPerfectSquare(num),
        factors: getFactors(num),
        digitSum: getDigitSum(num),
        digitalRoot: getDigitalRoot(num)
    };
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Event Listeners and Initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize default sport
    switchSport('nfl');

    // Add event listeners for search and filters
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    const conferenceFilter = document.getElementById('conference-filter');
    if (conferenceFilter) {
        conferenceFilter.addEventListener('change', applyFilters);
    }

    const divisionFilter = document.getElementById('division-filter');
    if (divisionFilter) {
        divisionFilter.addEventListener('change', applyFilters);
    }

    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('team-popup');
        if (e.target === popup) {
            closePopup();
        }
    });

    // Keyboard navigation for popup
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
});