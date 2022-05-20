$(document).ready(function(){
    let first=document.querySelector("#wrapper")
    axios.get(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=2aab87a0-d819-11ec-82c4-ab18a7eadcb2&season_id=1243&league_id=281&date_from=2021-02-17&date_to=2021-02-25`)
.then(function(response){
    console.log(response.data.data[0]);
    
    response.data.data.forEach(element => {
            
        first.innerHTML+=` <div id="first" class="first">

        <span>${element.home_team.short_code}</span>
        <img src="${element.home_team.logo}" alt="">
        
        <span>${element.stats.ft_score}</span>
        <img src="${element.away_team.logo}" alt="">
        <span>${element.away_team.short_code}</span>
        </div>`
        
    });
})
})
