var jobArr = JSON.parse(localStorage.getItem("schedule"));
    displayData(jobArr);
    function handleFilter() {
        var selected = document.getElementById("filterVenue").value;
        console.log(selected);
        var filteredList = jobArr.filter(function (elem) {
          return elem.personVenue == selected;
        });
        console.log(filteredList);
        displayData(filteredList);
      }
var bookMarkArr = JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach(function (elem) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.personmatch;

    var td2 = document.createElement("td");
    td2.innerText = elem.personteamA;
    var td3 = document.createElement("td");
    td3.innerText = elem.personteamB;
    var td4 = document.createElement("td");
    td4.innerText = elem.personDate;
    var td5 = document.createElement("td");
    td5.innerText = elem.personVenue;

    var td6 = document.createElement("td");
    td6.innerText = "favourites";
    td6.style.color = "green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", function () {
      //writing logic here
      bookMarkFun(elem);
    });

    tr.append(td1, td2, td3,td4,td5,td6);

    document.querySelector("tbody").append(tr);
  });
}

function bookMarkFun(elem) {
  console.log(elem);
  bookMarkArr.push(elem);
  localStorage.setItem("favourites", JSON.stringify(bookMarkArr));
}