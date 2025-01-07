
  function toggleExpand(element) {
    element.classList.toggle('expanded');
    element.classList.toggle('collapsed');
}



  // The city for which you want to fetch the weather
  const city = "Delhi";

  // Function to fetch weather data
  async function fetchWeather() {
      try {
          const response = await fetch(`https://wttr.in/${city}?format=%C|%t|%I`);
          const data = await response.text();

          // Extract description, temperature, and icon code from the response
          const [description, temperature, iconUrl] = data.split("|");

          // Update the widget with fetched data
          document.querySelector("#weather h2").textContent = city;
          document.querySelector(".temperature").textContent = temperature;
          document.querySelector(".description").textContent = description;

          // Show the weather icon
         
      } catch (error) {
          console.error("Error fetching weather data:", error);
          document.querySelector("#weather h2").textContent = "Unable to load weather data";
      }
  }

  // Fetch weather data when the page loads
  fetchWeather();



const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed");
});



