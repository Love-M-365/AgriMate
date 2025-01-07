
  function toggleExpand(element) {
    element.classList.toggle('expanded');
    element.classList.toggle('collapsed');
}



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




document.getElementById('state').addEventListener('change', function() {
  let state = this.value;
  let citySelect = document.getElementById('city');
  citySelect.innerHTML = ''; // Clear previous options

  // Example cities based on the state
  let cities = {
      "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
      "Punjab": ["Amritsar", "Ludhiana", "Chandigarh"],
      "Haryana": ["Gurgaon", "Faridabad", "Karnal"],
      "Delhi": ["Delhi"],
      "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"]
  };

  if (cities[state]) {
      let defaultOption = document.createElement('option');
      defaultOption.value = "";
      defaultOption.innerText = "Select City";
      citySelect.appendChild(defaultOption);

      cities[state].forEach(function(city) {
          let option = document.createElement('option');
          option.value = city;
          option.innerText = city;
          citySelect.appendChild(option);
      });
    }
});


const pricesData = {
  wheat: { today: "₹2000", yesterday: "₹1950", lastWeek: "₹1900" },
  rice: { today: "₹3000", yesterday: "₹2900", lastWeek: "₹2850" },
  corn: { today: "₹1500", yesterday: "₹1480", lastWeek: "₹1450" },
  barley: { today: "₹2200", yesterday: "₹2150", lastWeek: "₹2100" },
  soybean: { today: "₹4200", yesterday: "₹4150", lastWeek: "₹4100" },
  sugarcane: { today: "₹3500", yesterday: "₹3450", lastWeek: "₹3400" },
  cotton: { today: "₹5200", yesterday: "₹5150", lastWeek: "₹5100" },
  potato: { today: "₹1200", yesterday: "₹1150", lastWeek: "₹1100" },
  apple: { today: "₹7000", yesterday: "₹6950", lastWeek: "₹6900" },
  banana: { today: "₹400", yesterday: "₹380", lastWeek: "₹350" },
  orange: { today: "₹1500", yesterday: "₹1450", lastWeek: "₹1400" },
  grapes: { today: "₹2000", yesterday: "₹1950", lastWeek: "₹1900" },
  mango: { today: "₹5000", yesterday: "₹4950", lastWeek: "₹4900" }
};

document.getElementById('state').addEventListener('change', function() {
  let state = this.value;
  let citySelect = document.getElementById('city');
  citySelect.innerHTML = ''; // Clear previous options

  // Example cities based on the state
  let cities = {
      "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
      "Punjab": ["Amritsar", "Ludhiana", "Chandigarh"],
      "Haryana": ["Gurgaon", "Faridabad", "Karnal"],
      "Delhi": ["Delhi"],
      "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"]
  };

  if (cities[state]) {
      let defaultOption = document.createElement('option');
      defaultOption.value = "";
      defaultOption.innerText = "Select City";
      citySelect.appendChild(defaultOption);

      cities[state].forEach(function(city) {
          let option = document.createElement('option');
          option.value = city;
          option.innerText = city;
          citySelect.appendChild(option);
      });
    }
});


document.getElementById('state').addEventListener('change', function() {
  let state = this.value;
  let citySelect = document.getElementById('city');
  citySelect.innerHTML = ''; // Clear previous options

  // Example cities based on the state
  let cities = {
      "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
      "Punjab": ["Amritsar", "Ludhiana", "Chandigarh"],
      "Haryana": ["Gurgaon", "Faridabad", "Karnal"],
      "Delhi": ["Delhi"],
      "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"]
  };

  if (cities[state]) {
      let defaultOption = document.createElement('option');
      defaultOption.value = "";
      defaultOption.innerText = "Select City";
      citySelect.appendChild(defaultOption);

      cities[state].forEach(function(city) {
          let option = document.createElement('option');
          option.value = city;
          option.innerText = city;
          citySelect.appendChild(option);
      });
    }
});


function updatePrices() {
  const selectedCrop = document.getElementById("cropSelect").value;
  const todayPrice = document.getElementById("todayPrice");
  const yesterdayPrice = document.getElementById("yesterdayPrice");
  const lastWeekPrice = document.getElementById("lastWeekPrice");

  if (selectedCrop && pricesData[selectedCrop]) {
      todayPrice.textContent = pricesData[selectedCrop].today;
      yesterdayPrice.textContent = pricesData[selectedCrop].yesterday;
      lastWeekPrice.textContent = pricesData[selectedCrop].lastWeek;
  } else {
      todayPrice.textContent = "-";
      yesterdayPrice.textContent = "-";
      lastWeekPrice.textContent = "-";
    }
}