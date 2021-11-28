let requestURL = "https://brezus.github.io/time-frontend-mentor-challenge/data.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "text";
request.send();

request.onload = function () {
  const jeremysReportText = request.response;
  const jeremysReport = JSON.parse(jeremysReportText);
  let timeLine = document.querySelector(".timeline");
  let timeFrame = "";
  let timePeriod = "last week - ";
  let activity = document.querySelectorAll('.activity')

  let currentTime = document.querySelectorAll(".currentTime");
  let previousTime = document.querySelectorAll(".previous-time");
  for (let i = 0; i < currentTime.length; i++) {
    console.log('fired
    // this for loop uses strings from the datajson file to populate the html
    activity[i].innerHTML = jeremysReport[i].title;
    currentTime[i].innerHTML =
      jeremysReport[i].timeframes.daily.current + "hrs";
    previousTime[i].innerHTML =
      "yesterday - " + jeremysReport[i].timeframes.daily.previous + "hrs";
  }
  timeLine.addEventListener("click", function (e) {
    event.preventDefault();
    if (e.target.innerHTML === "Daily") {
      timeFrame = "daily";
      timePeriod = "yesterday - ";
    } else if (e.target.innerHTML === "Weekly") {
      timeFrame = "weekly";
      timePeriod = "last week - ";
    } else {
      timeFrame = "monthly";
      timePeriod = "last month - ";
    }
  });
  timeLine.addEventListener("click", updateInfo);

  function updateInfo() {
    let j = 0;
    for (let i = 0; i < currentTime.length; i++) {
      currentTime[i].innerHTML =
        jeremysReport[j].timeframes[timeFrame].current + "hrs";
      previousTime[i].innerHTML =
        timePeriod + jeremysReport[j].timeframes[timeFrame].previous + "hrs";
      j += 1;
    }
  }
};
console.log('working')
