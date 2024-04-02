window.addEventListener('DOMContentLoaded', () =>{

    //Class for the team objects, only used for practice
    class Team{
        constructor(nname, ccoach, sstadium, ccity, wwins, llosses, tties){
            this.teamName = nname;
            this.coachName = ccoach;
            this.stadium = sstadium;
            this.city = ccity;
            this.wins = wwins;
            this.losses = llosses;
            this.ties = tties;
        }
        
        //Getters
        getTeamName(){
            return this.teamName
        }
        getCoachName(){
            return this.coachName
        }
        getStadiumName(){
            return this.stadium
        }
        getCity(){
            return this.city
        }
        getWins(){
            return this.wins
        }
        getLosses(){
            return this.losses
        }
        getTies(){
            return this.ties
        }

    }

    const teamsArr = [];
    teamsArr.push(new Team("Comets", "Jared Fleming", "Activity Center", "Richardson", 54, 19, 0));
    teamsArr.push(new Team("Thunder", "Mark Daigneault", "Paycom Center", "Oklahoma City", 48, 26, 0));
    teamsArr.push(new Team("Lakers", "Darwin Hame", "Crypto Arena", "Los Angeles", 43, 27, 2));
    teamsArr.push(new Team("Warriors", "Steve Kerr", "Chase Center", "San Francisco", 28, 35, 0));
    
    

    //These run when the team pages is open
    if (window.location.href == "http://127.0.0.1:5500/team-page.html"){
        
        //This takes each team object, creates an html card for it and then displays it on the team page
        const teamPageContainer = document.querySelector(".teams-page-container")
        for(let i = 0; i < teamsArr.length; i++){
            //container for the teams
            let teamInfoCard = document.createElement("div");
            teamInfoCard.className = "team-info-card"

            //heading for team name
            let teamName = document.createElement("h3")
            teamName.style.cssText="font-size: 30px; margin: 0; margin-top: 20px"
            teamName.textContent = teamsArr[i].getTeamName()
            
            //Coach name
            let coachName = document.createElement("p")
            coachName.style.margin = "10px";
            coachName.textContent = "Head Coach: " + teamsArr[i].getCoachName()

            //Stadium
            let stadiumName = document.createElement("p")
            stadiumName.style.margin =  "10px";
            stadiumName.textContent = "Stadium: " + teamsArr[i].getStadiumName()
            
            //City
            let city = document.createElement("p")
            city.style.margin =  "10px";
            city.textContent = "City: " + teamsArr[i].getCity()

            //Record
            let record = document.createElement("p")
            record.style.margin =  "10px";
            if(teamsArr[i].getTies() == 0){
                record.textContent = "Record: " + teamsArr[i].getWins() + " - " + teamsArr[i].getLosses() 
            }
            else{
                record.textContent = "Record: " + teamsArr[i].getWins() + " - " + teamsArr[i].getLosses() + " - " +  teamsArr[i].getTies()
            }

            teamInfoCard.appendChild(teamName)
            teamInfoCard.appendChild(coachName)
            teamInfoCard.appendChild(stadiumName)
            teamInfoCard.appendChild(city)
            teamInfoCard.appendChild(record)
            teamPageContainer.appendChild(teamInfoCard)
        }
    }



})