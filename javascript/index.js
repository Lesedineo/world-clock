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

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city-time">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd DD MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
      </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
