(function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Function to update current time in UTC
  function updateCurrentTime() {
    const now = new Date();
    const options = {
      timeZone: "UTC",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedTime = now.toLocaleTimeString("en-US", options);
    document.getElementById("currentTimeUTC").textContent = formattedTime + " UTC";
  }

  // Function to update current day of the week
  function updateCurrentDay() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    document.getElementById("currentDay").textContent = dayOfWeek;
  }

  // Update time and day immediately on page load
  updateCurrentTime();
  updateCurrentDay();

  // Update time and day every second to keep them current
  setInterval(updateCurrentTime, 1000);
  setInterval(updateCurrentDay, 1000);

  // Get current year
  const currentYear = new Date().getFullYear();

  // Insert current year into the span element
  document.getElementById("currentYear").textContent = currentYear;
})();
