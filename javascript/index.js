function updateTime() {
  let newYorkElement = document.querySelector("#newYork");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTime = moment();
  newYorkDateElement.innerHTML = moment().format("dddd DD MMMM YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]A[</small>]");

  let londonElement = document.querySelector("#london");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonDateElement = londonElement.querySelector(".date");
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd DD MMMM YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
