// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFunction)
var matchArr = JSON.parse(localStorage.getItem("schedule")) || []

function myFunction(){
event.preventDefault()

var matchObj = {
    matchNumber:document.querySelector("#matchNum").value,
    matchA:document.querySelector("#teamA").value,
    matchB:document.querySelector("#teamB").value,
    matchDate: document.querySelector("#date").value,
    matchVenue:document.querySelector("#venue").value
  }
matchArr.push(matchObj)
console.log(matchArr)
localStorage.setItem("schedule",JSON.stringify(matchArr))

document.querySelector("#matchNum").value = ""
document.querySelector("#teamA").value = ""
    document.querySelector("#teamB").value = ""
     document.querySelector("#date").value = ""
    document.querySelector("#venue").value= ""
}

