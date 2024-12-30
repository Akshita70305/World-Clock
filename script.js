function updateTime() {
  //los-angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    losAngelesTimeElement = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngelesTimeElement.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngelesTimeElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDate = parisElement.querySelector(".date");
    let parisTime = parisElement.querySelector(".time");
    parisTimeElement = moment().tz("Europe/Paris");
    parisDate.innerHTML = parisTimeElement.format("MMMM Do YYYY");
    parisTime.innerHTML = parisTimeElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#block");
  cityElement.innerHTML = `         
        <div class="block1">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", updateCity);
