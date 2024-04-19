const players = {
    CSK: [  "MS Dhoni (wk)",
    "Ruturaj Gaikwad(c)",
    "Devon Conway",	
    "Deepak Chahar",
    "Tushar Deshpande",
    "Maheesh Theekshana",	
    "Simranjeet Singh",
    "Matheesha Pathirana",	
    "Prashant Solanki",
    "Mitchell Santner",
    "Rajvardhan Hangargekar",	
    "Ravindra Jadeja",
    "Moeen Ali",
    "Shivam Dube",
    "Ajinkya Rahane",
    "Nishant Sindhu",
    "Shaik Rasheed",
    "Ajay Mandal",
    "Mukesh Choudhary",
    "Rachin Ravindra",
    "Shardul Thakur",
    "Daryl Mitchell",
    "Sameer Rizvi",
    "Mustafizur Rahman",
    "Avanish Rao Aravelly"],
    DC: ["Rishabh Pant",
    "Abhishek Porel",
    "Prithvi Shaw",	
    "David Warner",
    "Yash Dhull",
    "Anrich Nortje",	
    "Khaleel Ahmed",
    "Praveen Dubey",	
    "Kuldeep Yadav",
    "Axar Patel",
    "Mitchell Marsh",	
    "Lalit Yadav",
    "Vicky Ostwal",
    "Ishant Sharma",
    "Mukesh Kumar",
    "Tristan Stubbs",
    "Ricky Bhui",
    "Kumar Kushagra",
    "Rasikh Dar",
    "Jhye Richardson",
    "Sumit Kumar",
    "Shai Hope",
    "Swastik Chikara",
    "Jake Fraser-McGurk",
    "Avanish Rao Aravelly"],
    GT: ["Shubman Gill(C)",
    "Sai Sudarshan",
    "Abhinav Manohar",	
    "David Miller",
    "Kane Williamson",
    "Matthew Wade (wk)",	
    "Matthew Wade (wk)",
    "Rashid Khan",	
    "Darshan Nalkande",
    "R Sai Kishore",
    "Noor Ahmad",	
    "Vijay Shankar",
    "Jayant Yadav",
    "Rahul Tewatia",
    "Joshua Little",
    "Mohit Sharma",
    "Azmatullah Omarzai",
    "Umesh Yadav",
    "Shahrukh Khan",
    "Sushant Mishra",
    "Kartik Tyagi",
    "Manav Suthar",
    "Spencer Johnson",
    "B R Sharath",
    "Sandeep Warrier"],
    MI: ["Rohit Sharma",
    "Suryakumar Yadav",
    "Tilak Varma",	
    "Dewald Brevis",
    "Ishan Kishan (wk)	",
    "AKumar Kartikeya Singh",	
    "Jasprit Bumrah",
    "Arjun Tendulkar",	
    "Tim David",
    "Akash Madhwal",
    "Luke Wood",	
    "Piyush Chawla",
    "Shams Mulani",
    "Nehal Wadhera",
    "Vishnu Vinod",
    "Romario Shepherd",
    "Hardik Pandya(C)",
    "Gerald Coetzee",
    "Kwena Maphaka",
    "Shreyas Gopal",
    "Nuwan Thushara",
    "Naman Dhir",
    "Anshul Kamboj",
    "Mohammad Nabi",
    "Shivalik Sharma"],
    KKR: ["Shreyas Iyer(c)",
    "Nitish Rana",
    "Rinku Singh",	
    "Varun Chakravarty",
    "Andre Russell",
    "Venkatesh Iyer",	
    "Sunil Narine",
    "Anukul Roy",	
    "Rahmanullah Gurbaz",
    "Harshit Rana",
    "Vaibhav Arora",	
    "Suyash Sharma",
    "Phil Salt",
    "KS Bharat",
    "Chetan Sakaria",
    "Mitchell Starc",
    "Angkrish Raghuvanshi",
    "Ramandeep Singh",
    "Sherfane Rutherford",
    "Manish Pandey",
    "Allah Ghazanfar",
    "Sakib Hussain",
    "Dushmantha Chameera"],
    SRH: ["Aiden Markram",
    "Rahul Tripathi",
    "Glenn Phillips (wk)",	
    "Umran Malik",
    "Fazal Haq Farooqi",
    "T Natarajan",	
    "Bhuvneshwar Kumar",
    "Abdul Samad",	
    "Marco Jansen",
    "Abhishek Sharma",
    "Washington Sundar",	
    "Mayank Agarwal",
    "Heinrich Klaasen",
    "Mayank Markande",
    "Sanvir Singh",
    "Upendra Yadav",
    "Shahbaz Ahamad",
    "Nitish Kumar Reddy",
    "Anmolpreet Singh",
    "Travis Head",
    "Wanindu Hasaranga",
    "Pat Cummins(c)",
    "Jaydev Unadkat",
    "Akash Singh",
    "Jhathavedh Subramanyan"],
    PBKS: ["Shikhar Dhawan(C)",
    "Prabhsimran Singh (wk)",
    "Jitesh Sharma (wk)",	
    "Jonny Bairstow",
    "Arshdeep Singh",
    "Nathan Ellis",	
    "Harpreet Brar",
    "Rahul Chahar",	
    "Kagiso Rabada",
    "Liam Livingstone",
    "Rishi Dhawan",	
    "Atharva Taide",
    "Sam Curran",
    "Sikandar Raza",
    "Harpreet Bhatia",
    "Vidwath Kaverappa",
    "Shivam Singh",
    "Harshal Patel",
    "Chris Woakes",
    "Ashutosh Sharma",
    "Vishwanath Pratap Singh",
    "Tanay Thayagarajann",
    "Shashank Singh",
    "Prince Choudhary",
    "Rilee Rossouw"],
    LSG: ["KL Rahul (c&wk)", "Quinton de Kock (wk)","Ravi Bishnoi",	"Mohsin Khan", "Marcus Stoinis", "Kyle Mayers",	"Ayush Badoni","Deepak Hooda",	 "Krunal Pandya", "Nicholas Pooran","Yash Thakur",	 "Amit Mishra", "Prerak Mankad","Naveen-ul-Haq", "Yudhvir Singh", "Devdutt Padikkal", "Krishnappa Gowthan","Mayank Yadav","Shivam Mavi","Arshin Kulkarni","M. Siddharth","Ashton Turner","David Willey","Arshad Khan","Shamar Joseph"],
    RCB: ["Virat Kohli","Suyash Prabhudessai","Faf du Plessis(C)",	"Vyshak Vijay Kumar","Anuj Rawat (wk)","Dinesh Karthik (wk)",	"Mohammed Siraj","Karn Sharma",	 "Akash Deep","Glenn Maxwell","Mahipal Lomror",	"Himanshu Sharma","Manoj Bhandage","Rajan Kumar","Rajat Patidar","Will Jacks","Mayank Dagar", "Reece Topley","Cameron Green", "Alzarri Joseph", "Yash Dayal", "Tom Curran","Saurav Chauhan","Lockie Ferguson","Swapnil Singh"  ],
    RR: ["Yashasvi Jaiswal","Shimron Hetmyer","Sanju Samson (c&wk)",	"Jos Buttler (wk)","Dhruv Jurel (wk)","Navdeep Saini",	"Kuldeep Sen","Yuzvendra Chahal",	 "Trent Boult","Riyan Parag","Ravichandran Ashwin",	"Donovan Ferreira","Kunal Rathore", "Tanush Kotian","Sandeep Sharma","Avesh Khan","Keshav Maharaj","Rovman Powell","Shubham Dubey", "Tom Kohler-Cadmore", "Abid Mushtaq","Nandre Burger"]
  };
  
  // Function to create player dropdowns based on selected team
  function createPlayerDropdowns(team, playerDropdownsId, impactPlayerSelectId) {
    const playerDropdowns = document.getElementById(playerDropdownsId);
    playerDropdowns.innerHTML = ""; // Clear previous content
  
    // Array to keep track of selected players
    const selectedPlayers = [];
  
    for (let i = 1; i <= 11; i++) {
      const select = document.createElement("select");
      select.className = "playerSelect";
      const defaultOption = document.createElement("option");
      defaultOption.value = `Player ${i}`;
      defaultOption.textContent = `Player ${i}`;
      select.appendChild(defaultOption);
  
      players[team].forEach(player => {
        const option = document.createElement("option");
        option.value = player;
        option.textContent = player;
        select.appendChild(option);
      });
  
      // Add change event listener to each dropdown
      select.addEventListener("change", function(event) {
        const selectedPlayer = event.target.value;
        selectedPlayers.push(selectedPlayer);
  
        // Disable selected player in all subsequent dropdowns
        Array.from(playerDropdowns.querySelectorAll("select")).forEach(dropdown => {
          Array.from(dropdown.querySelectorAll("option")).forEach(option => {
            if (selectedPlayers.includes(option.value)) {
              option.disabled = true;
            } else {
              option.disabled = false;
            }
          });
        });
  
        // Disable selected player in impact player dropdown
        Array.from(document.getElementById(impactPlayerSelectId).querySelectorAll("option")).forEach(option => {
          if (selectedPlayers.includes(option.value)) {
            option.disabled = true;
          } else {
            option.disabled = false;
          }
        });
      });
  
      playerDropdowns.appendChild(select);
    }
  }
  
  // Function to create impact player dropdown for the selected team
  function createImpactPlayerDropdown(team, impactPlayerSelectId) {
    const impactPlayerSelect = document.getElementById(impactPlayerSelectId);
    impactPlayerSelect.innerHTML = ""; // Clear previous content
  
    players[team].forEach(player => {
      const option = document.createElement("option");
      option.value = player;
      option.textContent = player;
      impactPlayerSelect.appendChild(option);
    });
  }
  
  // Event listener for when team is selected
  document.getElementById("teamSelect1").addEventListener("change", function() {
    const selectedTeam = this.value;
    createPlayerDropdowns(selectedTeam, "playerDropdowns1", "impactPlayerSelect1");
    createImpactPlayerDropdown(selectedTeam, "impactPlayerSelect1");
  });
  
  // Event listener for when team is selected
  document.getElementById("teamSelect2").addEventListener("change", function() {
    const selectedTeam = this.value;
    createPlayerDropdowns(selectedTeam, "playerDropdowns2", "impactPlayerSelect2");
    createImpactPlayerDropdown(selectedTeam, "impactPlayerSelect2");
  });
  
  // Initialize player dropdowns and impact player dropdown with default selected team
  const defaultTeam = document.getElementById("teamSelect1").value;
  createPlayerDropdowns(defaultTeam, "playerDropdowns1", "impactPlayerSelect1");
  createImpactPlayerDropdown(defaultTeam, "impactPlayerSelect1");
  
  // Initialize player dropdowns and impact player dropdown with default selected team
  const defaultTeam2 = document.getElementById("teamSelect2").value;
  createPlayerDropdowns(defaultTeam2, "playerDropdowns2", "impactPlayerSelect2");
  createImpactPlayerDropdown(defaultTeam2, "impactPlayerSelect2");


  const scrapButton = document.getElementById('scrapButton');
                const scrapMessage = document.getElementById('scrapMessage');
        
                scrapButton.addEventListener('click', () => {
                    scrapMessage.textContent = 'Scraping in progress...';
                    // Implement scraping functionality here
                    // For example, using Cheerio or Puppeteer
        
                    // After scraping, update the scrapMessage
                    setTimeout(() => {
                        scrapMessage.textContent = 'Scraping completed!';
                    }, 2000);
                });