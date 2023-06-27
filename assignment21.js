var tb = document.createElement("table")
tb.id = "table"
document.body.appendChild(tb)
var thead = document.createElement("tr")
thead.id = "headings"
var thead1 = document.createElement("th")
thead1.innerHTML = "id"
var thead2 = document.createElement("th")
thead2.innerHTML = "name"
var thead3 = document.createElement("th")
thead3.innerHTML = "phone"
var thead4 = document.createElement("th")
thead4.innerHTML = "email"
tb.appendChild(thead)
thead.appendChild(thead1)
thead.appendChild(thead2)
thead.appendChild(thead3)
thead.appendChild(thead4)
function displayData(result){
    
    

    for (let i = 0; i < result.length; i++){
    var newrow = document.createElement("tr")
    newrow.id = "row2"
    var newrow1 = document.createElement("td")
    newrow1.innerHTML = result[i].id
    var newrow2 = document.createElement("td")
    newrow2.innerHTML = result[i].name
    var newrow3 = document.createElement("td")
    newrow3.innerHTML = result[i].phone
    var newrow4 = document.createElement("td")
    newrow4.innerHTML = result[i].email
    tb.appendChild(newrow)
    newrow.appendChild(newrow1)
    newrow.appendChild(newrow2)
    newrow.appendChild(newrow3)
    newrow.appendChild(newrow4)}
    // document.write(result[i].id + "&emsp;&emsp;&emsp;&emsp;" +  result[i].name  + "&emsp;&emsp;&emsp;&emsp;" + result[i].phone + "&emsp;&emsp;&emsp;&emsp;"  +   result[i].email + "<br>" )
    
};
function getData(url){

    data = fetch(url)
    .then((data) => { return result = data.json()})   
    .then((result)=> {
        console.log(result)
        displayData(result)
        })
    .catch((err) => console.log(err))
}




getData("https://jsonplaceholder.typicode.com/users")




