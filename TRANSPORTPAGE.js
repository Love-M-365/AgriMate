
  function toggleExpand(element) {
    element.classList.toggle('expanded');
    element.classList.toggle('collapsed');
}


function sortTable(columnIndex) {
  const table = document.getElementById("coldStorageTable");
  let switching = true;
  let direction = "asc";

  while (switching) {
      switching = false;
      const rows = table.rows;

      for (let i = 1; i < rows.length - 1; i++) {
          let shouldSwitch = false;
          const x = rows[i].getElementsByTagName("TD")[columnIndex];
          const y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

          if (direction === "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
          } else if (direction === "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
          }
      }

      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
      } else {
          if (direction === "asc") {
              direction = "desc";
              switching = true;
          }
      }
  }
}

// Distance calculation
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
}

// Geolocation API to display distances
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;

      document.querySelectorAll(".distance").forEach((distanceElement) => {
          const lat = parseFloat(distanceElement.getAttribute("data-lat"));
          const lon = parseFloat(distanceElement.getAttribute("data-lng"));
          const distance = calculateDistance(userLat, userLon, lat, lon);
          distanceElement.textContent = `${distance} km`;
      });
  });
} else {
  alert("Geolocation is not supported by this browser.");
}

// Function to show selected centers

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


function bookNow(button) {
  button.textContent = "Booked";
  button.style.backgroundColor = "gray";
  button.disabled = true;
}




