// NFL Teams Database Application
class NFLDatabase {
    constructor() {
        this.teams = [];
        this.filteredTeams = [];
        this.currentSort = { column: null, direction: 'asc' };
        this.currentTab = 'all-teams';
        this.hiddenColumns = new Set();
        
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.renderAllTeamsTable();
        this.renderDivisions();
        this.renderTimeline();
        this.renderStatesAndCities();
    }

    loadData() {
        // NFL Teams data with founding and joining dates
        this.teams = [
            {
                "name": "Arizona Cardinals",
                "division": "NFC West",
                "conference": "NFC", 
                "teamFounded": "1898",
                "teamFoundedExact": "1898 (as Morgan Athletic Club)",
                "nflJoiningDate": "1920 (NFL charter member)",
                "hasExactFoundingDate": true,
                "city": "Glendale",
                "cityFounded": "",
                "state": "Arizona", 
                "stateStatehood": "February 14, 1912",
                "stadium": "State Farm Stadium",
                "stadiumOpened": "2006",
                "stadiumOpenedExact": "August 1, 2006",
                "dataCompleteness": 85
            },
            {
                "name": "Atlanta Falcons", 
                "division": "NFC South",
                "conference": "NFC",
                "teamFounded": "1965",
                "teamFoundedExact": "June 30, 1965", 
                "nflJoiningDate": "1966 (began NFL play)",
                "hasExactFoundingDate": true,
                "city": "Atlanta",
                "cityFounded": "",
                "state": "Georgia",
                "stateStatehood": "January 2, 1788",
                "stadium": "Mercedes-Benz Stadium",
                "stadiumOpened": "2017",
                "stadiumOpenedExact": "",
                "dataCompleteness": 70
            },
            {
                "name": "Baltimore Ravens",
                "division": "AFC North", 
                "conference": "AFC",
                "teamFounded": "1996",
                "teamFoundedExact": "March 29, 1996",
                "nflJoiningDate": "1996 (expansion team)",
                "hasExactFoundingDate": true,
                "city": "Baltimore", 
                "cityFounded": "",
                "state": "Maryland",
                "stateStatehood": "April 28, 1788", 
                "stadium": "M&T Bank Stadium",
                "stadiumOpened": "1998",
                "stadiumOpenedExact": "",
                "dataCompleteness": 70
            },
            {
                "name": "Buffalo Bills",
                "division": "AFC East",
                "conference": "AFC", 
                "teamFounded": "1960",
                "teamFoundedExact": "",
                "nflJoiningDate": "1970 (AFL-NFL merger)",
                "hasExactFoundingDate": false,
                "city": "Buffalo",
                "cityFounded": "1803",
                "state": "New York",
                "stateStatehood": "July 26, 1788",
                "stadium": "Highmark Stadium", 
                "stadiumOpened": "1973",
                "stadiumOpenedExact": "",
                "dataCompleteness": 60
            },
            {
                "name": "Carolina Panthers",
                "division": "NFC South",
                "conference": "NFC",
                "teamFounded": "1995", 
                "teamFoundedExact": "",
                "nflJoiningDate": "October 26, 1993 (franchise awarded)",
                "hasExactFoundingDate": false,
                "city": "Charlotte",
                "cityFounded": "",
                "state": "North Carolina",
                "stateStatehood": "November 21, 1789",
                "stadium": "Bank of America Stadium",
                "stadiumOpened": "1996",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Chicago Bears",
                "division": "NFC North",
                "conference": "NFC",
                "teamFounded": "1919",
                "teamFoundedExact": "September 20, 1919",
                "nflJoiningDate": "1920 (NFL charter member)",
                "hasExactFoundingDate": true,
                "city": "Chicago",
                "cityFounded": "March 4, 1837", 
                "state": "Illinois",
                "stateStatehood": "December 3, 1818",
                "stadium": "Soldier Field",
                "stadiumOpened": "1924", 
                "stadiumOpenedExact": "",
                "dataCompleteness": 90
            },
            {
                "name": "Cincinnati Bengals",
                "division": "AFC North",
                "conference": "AFC",
                "teamFounded": "1968",
                "teamFoundedExact": "",
                "nflJoiningDate": "1970 (AFL-NFL merger)",
                "hasExactFoundingDate": false,
                "city": "Cincinnati", 
                "cityFounded": "",
                "state": "Ohio",
                "stateStatehood": "March 1, 1803",
                "stadium": "Paycor Stadium",
                "stadiumOpened": "2000",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Cleveland Browns", 
                "division": "AFC North",
                "conference": "AFC",
                "teamFounded": "1946",
                "teamFoundedExact": "",
                "nflJoiningDate": "December 9, 1949 (AAFC merger)",
                "hasExactFoundingDate": false,
                "city": "Cleveland",
                "cityFounded": "July 22, 1796",
                "state": "Ohio",
                "stateStatehood": "March 1, 1803",
                "stadium": "Huntington Bank Field", 
                "stadiumOpened": "1999",
                "stadiumOpenedExact": "",
                "dataCompleteness": 60
            },
            {
                "name": "Dallas Cowboys",
                "division": "NFC East", 
                "conference": "NFC",
                "teamFounded": "1960",
                "teamFoundedExact": "January 28, 1960",
                "nflJoiningDate": "1960 (expansion team)",
                "hasExactFoundingDate": true,
                "city": "Arlington",
                "cityFounded": "",
                "state": "Texas",
                "stateStatehood": "December 29, 1845",
                "stadium": "AT&T Stadium",
                "stadiumOpened": "2009",
                "stadiumOpenedExact": "September 20, 2009",
                "dataCompleteness": 85
            },
            {
                "name": "Denver Broncos",
                "division": "AFC West",
                "conference": "AFC", 
                "teamFounded": "1960",
                "teamFoundedExact": "",
                "nflJoiningDate": "1970 (AFL-NFL merger)",
                "hasExactFoundingDate": false,
                "city": "Denver",
                "cityFounded": "",
                "state": "Colorado",
                "stateStatehood": "August 1, 1876",
                "stadium": "Empower Field at Mile High",
                "stadiumOpened": "2001",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Detroit Lions",
                "division": "NFC North", 
                "conference": "NFC",
                "teamFounded": "1930",
                "teamFoundedExact": "",
                "nflJoiningDate": "July 12, 1930 (as Portsmouth Spartans)",
                "hasExactFoundingDate": false,
                "city": "Detroit",
                "cityFounded": "July 24, 1701",
                "state": "Michigan",
                "stateStatehood": "January 26, 1837", 
                "stadium": "Ford Field",
                "stadiumOpened": "2002",
                "stadiumOpenedExact": "",
                "dataCompleteness": 60
            },
            {
                "name": "Green Bay Packers",
                "division": "NFC North",
                "conference": "NFC",
                "teamFounded": "1919",
                "teamFoundedExact": "August 11, 1919",
                "nflJoiningDate": "1921 (joined NFL)",
                "hasExactFoundingDate": true,
                "city": "Green Bay",
                "cityFounded": "",
                "state": "Wisconsin", 
                "stateStatehood": "May 29, 1848",
                "stadium": "Lambeau Field",
                "stadiumOpened": "1957",
                "stadiumOpenedExact": "",
                "dataCompleteness": 70
            },
            {
                "name": "Houston Texans",
                "division": "AFC South",
                "conference": "AFC",
                "teamFounded": "1999",
                "teamFoundedExact": "October 6, 1999",
                "nflJoiningDate": "2002 (began NFL play)",
                "hasExactFoundingDate": true,
                "city": "Houston",
                "cityFounded": "",
                "state": "Texas",
                "stateStatehood": "December 29, 1845",
                "stadium": "NRG Stadium",
                "stadiumOpened": "2002", 
                "stadiumOpenedExact": "",
                "dataCompleteness": 70
            },
            {
                "name": "Indianapolis Colts",
                "division": "AFC South", 
                "conference": "AFC",
                "teamFounded": "1953",
                "teamFoundedExact": "",
                "nflJoiningDate": "January 23, 1953 (as Baltimore Colts)",
                "hasExactFoundingDate": false,
                "city": "Indianapolis",
                "cityFounded": "",
                "state": "Indiana",
                "stateStatehood": "December 11, 1816",
                "stadium": "Lucas Oil Stadium",
                "stadiumOpened": "2008",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Jacksonville Jaguars",
                "division": "AFC South",
                "conference": "AFC",
                "teamFounded": "1995",
                "teamFoundedExact": "",
                "nflJoiningDate": "November 30, 1993 (franchise awarded)",
                "hasExactFoundingDate": false,
                "city": "Jacksonville", 
                "cityFounded": "",
                "state": "Florida",
                "stateStatehood": "March 3, 1845",
                "stadium": "EverBank Stadium",
                "stadiumOpened": "1995",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Kansas City Chiefs", 
                "division": "AFC West",
                "conference": "AFC",
                "teamFounded": "1960",
                "teamFoundedExact": "",
                "nflJoiningDate": "1970 (AFL-NFL merger, as Dallas Texans)",
                "hasExactFoundingDate": false,
                "city": "Kansas City",
                "cityFounded": "",
                "state": "Missouri",
                "stateStatehood": "August 10, 1821",
                "stadium": "Arrowhead Stadium",
                "stadiumOpened": "1972",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Las Vegas Raiders",
                "division": "AFC West", 
                "conference": "AFC",
                "teamFounded": "1960",
                "teamFoundedExact": "",
                "nflJoiningDate": "1970 (AFL-NFL merger)",
                "hasExactFoundingDate": false,
                "city": "Las Vegas",
                "cityFounded": "",
                "state": "Nevada",
                "stateStatehood": "October 31, 1864",
                "stadium": "Allegiant Stadium",
                "stadiumOpened": "2020",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Los Angeles Chargers",
                "division": "AFC West",
                "conference": "AFC",
                "teamFounded": "1960", 
                "teamFoundedExact": "",
                "nflJoiningDate": "1970 (AFL-NFL merger)",
                "hasExactFoundingDate": false,
                "city": "Inglewood",
                "cityFounded": "",
                "state": "California",
                "stateStatehood": "September 9, 1850",
                "stadium": "SoFi Stadium",
                "stadiumOpened": "2020",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Los Angeles Rams",
                "division": "NFC West",
                "conference": "NFC", 
                "teamFounded": "1937",
                "teamFoundedExact": "",
                "nflJoiningDate": "1937 (as Cleveland Rams)",
                "hasExactFoundingDate": false,
                "city": "Inglewood",
                "cityFounded": "",
                "state": "California",
                "stateStatehood": "September 9, 1850",
                "stadium": "SoFi Stadium",
                "stadiumOpened": "2020",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Miami Dolphins",
                "division": "AFC East",
                "conference": "AFC",
                "teamFounded": "1965",
                "teamFoundedExact": "June 7, 1965 (AFL approved expansion)",
                "nflJoiningDate": "1970 (AFL-NFL merger)",
                "hasExactFoundingDate": true,
                "city": "Miami Gardens",
                "cityFounded": "",
                "state": "Florida", 
                "stateStatehood": "March 3, 1845",
                "stadium": "Hard Rock Stadium",
                "stadiumOpened": "1987",
                "stadiumOpenedExact": "",
                "dataCompleteness": 70
            },
            {
                "name": "Minnesota Vikings",
                "division": "NFC North",
                "conference": "NFC",
                "teamFounded": "1961",
                "teamFoundedExact": "",
                "nflJoiningDate": "January 28, 1960 (franchise granted)",
                "hasExactFoundingDate": false,
                "city": "Minneapolis",
                "cityFounded": "",
                "state": "Minnesota",
                "stateStatehood": "May 11, 1858",
                "stadium": "U.S. Bank Stadium", 
                "stadiumOpened": "2016",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "New England Patriots",
                "division": "AFC East",
                "conference": "AFC",
                "teamFounded": "1960",
                "teamFoundedExact": "",
                "nflJoiningDate": "1970 (AFL-NFL merger, as Boston Patriots)",
                "hasExactFoundingDate": false,
                "city": "Foxborough",
                "cityFounded": "",
                "state": "Massachusetts",
                "stateStatehood": "February 6, 1788",
                "stadium": "Gillette Stadium",
                "stadiumOpened": "2002",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "New Orleans Saints",
                "division": "NFC South",
                "conference": "NFC", 
                "teamFounded": "1966",
                "teamFoundedExact": "November 1, 1966",
                "nflJoiningDate": "1967 (began NFL play)",
                "hasExactFoundingDate": true,
                "city": "New Orleans",
                "cityFounded": "",
                "state": "Louisiana",
                "stateStatehood": "April 30, 1812",
                "stadium": "Caesars Superdome",
                "stadiumOpened": "1975",
                "stadiumOpenedExact": "",
                "dataCompleteness": 70
            },
            {
                "name": "New York Giants",
                "division": "NFC East", 
                "conference": "NFC",
                "teamFounded": "1925",
                "teamFoundedExact": "August 1, 1925",
                "nflJoiningDate": "1925 (expansion team)",
                "hasExactFoundingDate": true,
                "city": "East Rutherford",
                "cityFounded": "",
                "state": "New Jersey",
                "stateStatehood": "December 18, 1787",
                "stadium": "MetLife Stadium",
                "stadiumOpened": "2010",
                "stadiumOpenedExact": "September 12, 2010",
                "dataCompleteness": 85
            },
            {
                "name": "New York Jets",
                "division": "AFC East",
                "conference": "AFC",
                "teamFounded": "1959",
                "teamFoundedExact": "August 14, 1959 (as Titans of New York)",
                "nflJoiningDate": "1970 (AFL-NFL merger)", 
                "hasExactFoundingDate": true,
                "city": "East Rutherford", 
                "cityFounded": "",
                "state": "New Jersey",
                "stateStatehood": "December 18, 1787",
                "stadium": "MetLife Stadium",
                "stadiumOpened": "2010",
                "stadiumOpenedExact": "September 12, 2010",
                "dataCompleteness": 85
            },
            {
                "name": "Philadelphia Eagles",
                "division": "NFC East",
                "conference": "NFC",
                "teamFounded": "1933",
                "teamFoundedExact": "July 8, 1933",
                "nflJoiningDate": "1933 (expansion team)",
                "hasExactFoundingDate": true,
                "city": "Philadelphia",
                "cityFounded": "1682",
                "state": "Pennsylvania",
                "stateStatehood": "December 12, 1787",
                "stadium": "Lincoln Financial Field", 
                "stadiumOpened": "2003",
                "stadiumOpenedExact": "",
                "dataCompleteness": 90
            },
            {
                "name": "Pittsburgh Steelers",
                "division": "AFC North",
                "conference": "AFC",
                "teamFounded": "1933",
                "teamFoundedExact": "July 8, 1933",
                "nflJoiningDate": "1933 (expansion team)",
                "hasExactFoundingDate": true,
                "city": "Pittsburgh",
                "cityFounded": "1758",
                "state": "Pennsylvania",
                "stateStatehood": "December 12, 1787",
                "stadium": "Acrisure Stadium",
                "stadiumOpened": "2001",
                "stadiumOpenedExact": "",
                "dataCompleteness": 90
            },
            {
                "name": "San Francisco 49ers", 
                "division": "NFC West",
                "conference": "NFC",
                "teamFounded": "1946",
                "teamFoundedExact": "",
                "nflJoiningDate": "December 9, 1949 (AAFC merger)",
                "hasExactFoundingDate": false,
                "city": "Santa Clara",
                "cityFounded": "",
                "state": "California",
                "stateStatehood": "September 9, 1850",
                "stadium": "Levi's Stadium",
                "stadiumOpened": "2014",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Seattle Seahawks",
                "division": "NFC West",
                "conference": "NFC",
                "teamFounded": "1976",
                "teamFoundedExact": "",
                "nflJoiningDate": "June 4, 1974 (franchise awarded)",
                "hasExactFoundingDate": false,
                "city": "Seattle",
                "cityFounded": "",
                "state": "Washington",
                "stateStatehood": "November 11, 1889",
                "stadium": "Lumen Field",
                "stadiumOpened": "2002", 
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Tampa Bay Buccaneers",
                "division": "NFC South",
                "conference": "NFC",
                "teamFounded": "1976",
                "teamFoundedExact": "",
                "nflJoiningDate": "April 24, 1974 (franchise awarded)",
                "hasExactFoundingDate": false,
                "city": "Tampa",
                "cityFounded": "",
                "state": "Florida",
                "stateStatehood": "March 3, 1845",
                "stadium": "Raymond James Stadium",
                "stadiumOpened": "1998",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            },
            {
                "name": "Tennessee Titans", 
                "division": "AFC South",
                "conference": "AFC",
                "teamFounded": "1960",
                "teamFoundedExact": "",
                "nflJoiningDate": "1970 (AFL-NFL merger, as Houston Oilers)",
                "hasExactFoundingDate": false,
                "city": "Nashville",
                "cityFounded": "December 24, 1779",
                "state": "Tennessee",
                "stateStatehood": "June 1, 1796",
                "stadium": "Nissan Stadium",
                "stadiumOpened": "1999",
                "stadiumOpenedExact": "",
                "dataCompleteness": 60
            },
            {
                "name": "Washington Commanders",
                "division": "NFC East", 
                "conference": "NFC",
                "teamFounded": "1932",
                "teamFoundedExact": "",
                "nflJoiningDate": "July 9, 1932 (as Boston Braves)",
                "hasExactFoundingDate": false,
                "city": "Landover",
                "cityFounded": "",
                "state": "Maryland",
                "stateStatehood": "April 28, 1788",
                "stadium": "Northwest Stadium",
                "stadiumOpened": "1997",
                "stadiumOpenedExact": "",
                "dataCompleteness": 50
            }
        ];

        this.filteredTeams = [...this.teams];
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Filters
        document.getElementById('conferenceFilter').addEventListener('change', () => {
            this.applyFilters();
        });

        document.getElementById('divisionFilter').addEventListener('change', () => {
            this.applyFilters();
        });

        document.getElementById('dateTypeFilter').addEventListener('change', () => {
            this.applyFilters();
        });

        // Table sorting
        document.querySelectorAll('#teamsTable th[data-sort]').forEach(th => {
            th.addEventListener('click', (e) => {
                this.sortTable(e.target.dataset.sort);
            });
        });

        // Column toggles
        document.querySelectorAll('.column-toggles input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.toggleColumn(e.target.dataset.column, e.target.checked);
            });
        });

        // Export functionality
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportData();
        });

        // Modal
        document.getElementById('modalClose').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('teamModal').addEventListener('click', (e) => {
            if (e.target.id === 'teamModal') {
                this.closeModal();
            }
        });
    }

    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');

        this.currentTab = tabName;
    }

    handleSearch(query) {
        const searchTerm = query.toLowerCase().trim();
        
        this.filteredTeams = this.teams.filter(team => {
            return team.name.toLowerCase().includes(searchTerm) ||
                   team.city.toLowerCase().includes(searchTerm) ||
                   team.state.toLowerCase().includes(searchTerm) ||
                   team.division.toLowerCase().includes(searchTerm);
        });

        this.applyFilters(false);
    }

    applyFilters(resetSearch = true) {
        if (resetSearch) {
            this.filteredTeams = [...this.teams];
        }

        const conference = document.getElementById('conferenceFilter').value;
        const division = document.getElementById('divisionFilter').value;
        const dateType = document.getElementById('dateTypeFilter').value;

        this.filteredTeams = this.filteredTeams.filter(team => {
            let matches = true;

            if (conference && team.conference !== conference) {
                matches = false;
            }

            if (division && team.division !== division) {
                matches = false;
            }

            if (dateType === 'exact' && !team.hasExactFoundingDate) {
                matches = false;
            }

            if (dateType === 'joining' && team.hasExactFoundingDate) {
                matches = false;
            }

            return matches;
        });

        this.renderAllTeamsTable();
    }

    sortTable(column) {
        let direction = 'asc';
        
        if (this.currentSort.column === column && this.currentSort.direction === 'asc') {
            direction = 'desc';
        }

        this.currentSort = { column, direction };

        this.filteredTeams.sort((a, b) => {
            let aVal = a[column];
            let bVal = b[column];

            // Special handling for team founded dates
            if (column === 'teamFounded') {
                aVal = parseInt(a.teamFounded);
                bVal = parseInt(b.teamFounded);
            }

            // Special handling for data completeness
            if (column === 'dataCompleteness') {
                aVal = parseInt(a.dataCompleteness);
                bVal = parseInt(b.dataCompleteness);
            }

            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (direction === 'asc') {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });

        this.updateSortIndicators(column, direction);
        this.renderAllTeamsTable();
    }

    updateSortIndicators(column, direction) {
        document.querySelectorAll('#teamsTable th').forEach(th => {
            th.classList.remove('sorted-asc', 'sorted-desc');
        });

        const targetTh = document.querySelector(`#teamsTable th[data-sort="${column}"]`);
        if (targetTh) {
            targetTh.classList.add(`sorted-${direction}`);
        }
    }

    toggleColumn(column, visible) {
        if (visible) {
            this.hiddenColumns.delete(column);
        } else {
            this.hiddenColumns.add(column);
        }

        document.querySelectorAll(`.column-${column}`).forEach(element => {
            if (visible) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });
    }

    renderAllTeamsTable() {
        const tbody = document.getElementById('teamsTableBody');
        tbody.innerHTML = '';

        this.filteredTeams.forEach(team => {
            const row = document.createElement('tr');
            
            const dateDisplay = team.hasExactFoundingDate ? 
                (team.teamFoundedExact || team.teamFounded) : 
                team.teamFounded;
            
            const dateDetail = team.hasExactFoundingDate ? 
                `NFL: ${team.nflJoiningDate}` : 
                `NFL: ${team.nflJoiningDate}`;

            row.innerHTML = `
                <td>
                    <span class="team-name" data-team-name="${team.name}">${team.name}</span>
                </td>
                <td class="column-division">${team.division}</td>
                <td>
                    <div class="date-info">
                        <div class="date-primary">
                            <span class="date-indicator ${team.hasExactFoundingDate ? 'exact' : 'joining'}"></span>
                            ${dateDisplay}
                        </div>
                        <div class="date-secondary">${dateDetail}</div>
                    </div>
                </td>
                <td class="column-city">${team.city}</td>
                <td class="column-state">${team.state}</td>
                <td class="column-stadium">${team.stadium} (${team.stadiumOpened})</td>
                <td>
                    <div class="data-score">
                        <span>${team.dataCompleteness}%</span>
                        <div class="score-bar">
                            <div class="score-fill ${this.getScoreClass(team.dataCompleteness)}" 
                                 style="width: ${team.dataCompleteness}%"></div>
                        </div>
                    </div>
                </td>
            `;
            
            // Add click handler for team name
            const teamNameElement = row.querySelector('.team-name');
            teamNameElement.addEventListener('click', () => {
                this.showTeamModal(team.name);
            });
            
            tbody.appendChild(row);
        });
    }

    getScoreClass(score) {
        if (score >= 80) return 'high';
        if (score >= 60) return 'medium';
        return 'low';
    }

    renderDivisions() {
        const container = document.getElementById('divisionsGrid');
        const divisions = {};

        // Group teams by division
        this.teams.forEach(team => {
            if (!divisions[team.division]) {
                divisions[team.division] = [];
            }
            divisions[team.division].push(team);
        });

        container.innerHTML = '';

        Object.keys(divisions).sort().forEach(division => {
            const divisionCard = document.createElement('div');
            divisionCard.className = 'division-card';
            
            const teamsList = divisions[division]
                .map(team => `<li data-team-name="${team.name}">${team.name}</li>`)
                .join('');

            divisionCard.innerHTML = `
                <div class="division-header">${division}</div>
                <ul class="division-teams">
                    ${teamsList}
                </ul>
            `;

            // Add click handlers for team names in divisions
            divisionCard.querySelectorAll('li[data-team-name]').forEach(li => {
                li.addEventListener('click', () => {
                    this.showTeamModal(li.dataset.teamName);
                });
            });
            
            container.appendChild(divisionCard);
        });
    }

    renderTimeline() {
        const container = document.getElementById('timelineContainer');
        
        // Create timeline items from both founding and joining dates
        const timelineItems = [];
        
        this.teams.forEach(team => {
            const year = parseInt(team.teamFounded);
            const detail = team.hasExactFoundingDate ? 
                `Founded: ${team.teamFoundedExact || team.teamFounded}` : 
                `NFL Entry: ${team.nflJoiningDate}`;
            
            timelineItems.push({
                year: year,
                team: team.name,
                detail: detail,
                type: team.hasExactFoundingDate ? 'founding' : 'joining'
            });
        });

        // Sort by year
        timelineItems.sort((a, b) => a.year - b.year);

        container.innerHTML = '';

        timelineItems.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.dataset.teamName = item.team;
            
            timelineItem.innerHTML = `
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-info">
                    <div class="timeline-team">${item.team}</div>
                    <div class="timeline-detail">${item.detail}</div>
                </div>
            `;

            timelineItem.addEventListener('click', () => {
                this.showTeamModal(item.team);
            });
            
            container.appendChild(timelineItem);
        });
    }

    renderStatesAndCities() {
        const container = document.getElementById('statesContainer');
        const states = {};

        // Group teams by state
        this.teams.forEach(team => {
            if (!states[team.state]) {
                states[team.state] = [];
            }
            states[team.state].push(team);
        });

        container.innerHTML = '';

        Object.keys(states).sort().forEach(state => {
            const stateCard = document.createElement('div');
            stateCard.className = 'state-card';
            
            const teamsList = states[state]
                .map(team => `<li data-team-name="${team.name}">${team.name} (${team.city})</li>`)
                .join('');

            stateCard.innerHTML = `
                <div class="state-header">${state}</div>
                <ul class="state-teams">
                    ${teamsList}
                </ul>
            `;

            // Add click handlers for team names in states
            stateCard.querySelectorAll('li[data-team-name]').forEach(li => {
                li.addEventListener('click', () => {
                    this.showTeamModal(li.dataset.teamName);
                });
            });
            
            container.appendChild(stateCard);
        });
    }

    showTeamModal(teamName) {
        const team = this.teams.find(t => t.name === teamName);
        if (!team) return;

        const modal = document.getElementById('teamModal');
        const modalBody = document.getElementById('modalBody');

        modalBody.innerHTML = `
            <div class="modal-team-name">${team.name}</div>
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <div class="modal-info-label">Division</div>
                    <div class="modal-info-value">${team.division}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Founded</div>
                    <div class="modal-info-value">${team.teamFoundedExact || team.teamFounded}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">NFL Entry</div>
                    <div class="modal-info-value">${team.nflJoiningDate}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Location</div>
                    <div class="modal-info-value">${team.city}, ${team.state}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Stadium</div>
                    <div class="modal-info-value">${team.stadium}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Stadium Opened</div>
                    <div class="modal-info-value">${team.stadiumOpenedExact || team.stadiumOpened}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">State Statehood</div>
                    <div class="modal-info-value">${team.stateStatehood}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Data Completeness</div>
                    <div class="modal-info-value">${team.dataCompleteness}%</div>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('teamModal').classList.add('hidden');
    }

    exportData() {
        const csvContent = this.generateCSV();
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'nfl_teams_database.csv');
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    generateCSV() {
        const headers = [
            'Team Name', 'Division', 'Conference', 'Founded', 'Founded Exact', 
            'NFL Joining Date', 'Has Exact Founding Date', 'City', 'State', 
            'Stadium', 'Stadium Opened', 'Data Completeness'
        ];

        const rows = this.filteredTeams.map(team => [
            team.name,
            team.division,
            team.conference,
            team.teamFounded,
            team.teamFoundedExact,
            team.nflJoiningDate,
            team.hasExactFoundingDate,
            team.city,
            team.state,
            team.stadium,
            team.stadiumOpened,
            team.dataCompleteness
        ]);

        return [headers, ...rows]
            .map(row => row.map(field => `"${field}"`).join(','))
            .join('\n');
    }
}

// Initialize the application
const app = new NFLDatabase();