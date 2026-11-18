function updateClock() {
  const now = new Date();
  let hours24 = now.getHours();
  const meridiem = hours24 >= 12 ? "PM" : "AM";
  const hours12 = (hours24 % 12 || 12).toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours12}:${minutes}:${seconds} ${meridiem}`;
  document.getElementById("clock").textContent = time;

  const date = now.toLocaleDateString("en-IN", {year:"numeric", month:"short", day:"numeric"});
  document.getElementById("date").textContent = date;

  let greeting;
  if (hours24 >= 5 && hours24 < 12) {
    greeting = "Good Morning!";
  } else if (hours24 >= 12 && hours24 < 17) {
    greeting = "Good Afternoon!";
  } else if (hours24 >= 17 && hours24 < 22) {
    greeting = "Good Evening!";
  } else {
    greeting = "Good Night!";
  }
  document.getElementById("greeting").textContent = greeting;
}
updateClock();
setInterval(updateClock, 1000);
