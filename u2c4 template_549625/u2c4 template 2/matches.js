// write js code here corresponding to matches.html

var matchArr = JSON.parse(localStorage.getItem("schedule"))

displayData(matchArr)

function displayData(matchArr){

matchArr.forEach(function(elem){

    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText=elem.matchNumber
    var td2 = document.createElement("td")
    td2.innerText=elem.matchA
    var td3 = document.createElement("td")
    td3.innerText=elem.matchB 
    var td4 = document.createElement("td")
    td4.innerText = elem.matchDate
    var td5 = document.createElement("td")
    td5.innerText = elem.matchVenue
    var td6 = document.createElement("td")
    td6.innerText = "Add as Favourites"
    td6.style.color="green"
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
        gotofav(elem)
    })

    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
})


}

var favArr = JSON.parse(localStorage.getItem("favourites")) || []

function gotofav(elem){

    favArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favArr))

}

