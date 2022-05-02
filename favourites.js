var bookMarkArr = JSON.parse(localStorage.getItem("favourites"));
// 3
displayData(bookMarkArr);

function displayData(data) {
  data.forEach(function (elem, index) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.personteamA;

    var td2 = document.createElement("td");
    td2.innerText = elem.personteamB;

    var td3 = document.createElement("td");
    td3.innerText = elem.personDate;
    var td4 = document.createElement("td");
    td4.innerText = elem.personDate;
    var td5 = document.createElement("td");
    td5.innerText = elem.personDate;
    var td6 = document.createElement("td");
        td6.innerText = "Delete";
        td6.setAttribute("class", "deleteText");
        td6.addEventListener("click", function () {
          deleteItem(elem, index);
        });
    tr.append(td1, td2, td3,td4,td5,td6);

    document.querySelector("tbody").append(tr);
  });
}

function deleteItem(elem, index) {
  bookMarkArr.splice(index, 1);
  localStorage.setItem("favourites", JSON.stringify(bookMarkArr));
  window.location.reload();
  
}