// async function getData(url){
//     data = await fetch(url, { mode: 'no-cors' })
//     jsondata = await data.json()
//     console.log(jsondata)
// }
// getData("https://api.covid19api.com/summary")

names = {}
namevalue = []
function saveTheData(){
    
    console.log("save")
    let name = document.getElementsByTagName("input")[0].value
    namevalue.push(name)
    console.log(name)
    console.log(namevalue)
    names.name = namevalue
    namesinstring = JSON.stringify(names)
    localStorage.setItem("name", namesinstring)
    
}
function showTheDetails(){
    window.open('showdetail.html', '_blank')
    
}

var savebtn = document.getElementById("savebtn")
console.log(savebtn)
savebtn.addEventListener("click", saveTheData)

var showbtn = document.getElementById("showbtn")
console.log(showbtn)
showbtn.addEventListener("click", showTheDetails)