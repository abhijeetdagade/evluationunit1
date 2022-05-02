
document.querySelector("#masaiForm").addEventListener("submit", jobSubmit);
    var jobArr = JSON.parse(localStorage.getItem("schedule")) || [];

    function jobSubmit() {
      event.preventDefault();

      // formId.inputId.value

      var jobObj = {
        personmatch: document.querySelector("#matchNum").value,
       personteamA: masaiForm.teamA.value,
       personteamB: masaiForm.teamB.value,
       personDate: masaiForm.date.value,
       personVenue: masaiForm.venue.value,
      };
      jobArr.push(jobObj);
      console.log(jobArr);
      localStorage.setItem("schedule", JSON.stringify(jobArr));
      // redirect to applied jobs
      window.location.href = "matches.html";
    }