function updateTime() {
  //los-angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  losAngelesTimeElement = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesTimeElement.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesTimeElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //paris
  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  parisTimeElement = moment().tz("Europe/Paris");
  parisDate.innerHTML = parisTimeElement.format("MMMM Do YYYY");
  parisTime.innerHTML = parisTimeElement.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
