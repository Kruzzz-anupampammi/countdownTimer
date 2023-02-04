const countDown = () => {
  const openingDate = new Date("March 1, 2023 00:00:00").getTime();
  const dateToday = new Date().getTime();

  const dateOfOpening = openingDate - dateToday;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  var timeDays = Math.floor(dateOfOpening / days);
  var timeHours = Math.floor((dateOfOpening % days) / hours);
  var timeMinutes = Math.floor((dateOfOpening % hours) / minutes);
  var timeSeconds = Math.floor((dateOfOpening % minutes) / seconds);
  //   console.log(timeDays, timeHours, timeMinutes, timeSeconds);

  timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  document.getElementById("days").innerHTML = timeDays;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("seconds").innerHTML = timeSeconds;
};

setInterval(countDown, 1000);
