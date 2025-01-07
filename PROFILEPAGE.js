
var map = L.map('map').setView([28.6139, 77.2090], 14); // Centered on New Delhi

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define coordinates for the polygon (replace with actual farm coordinates)
var farmCoordinates = [
  [28.6145, 77.2050],
  [28.6155, 77.2070],
  [28.6135, 77.2095],
  [28.6125, 77.2075]
];

// Create a polygon to highlight the farm area
var farmArea = L.polygon(farmCoordinates, {
  color: 'green',
  fillColor: '#4CAF50',
  fillOpacity: 0.5,
  weight: 2
}).addTo(map);

// Add popup to the polygon
farmArea.bindPopup("<b>Farm Area</b><br>New Delhi, India");




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


function togglePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

// Close the popup if clicked outside
window.onclick = function(event) {
  var popup = document.getElementById("popup");
  if (event.target !== popup && !popup.contains(event.target) && event.target !== document.querySelector(".notification-icon")) {
      popup.style.display = "none";
  }
};


