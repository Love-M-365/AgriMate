
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



document.querySelectorAll('.faq-question').forEach(bn => {
  bn.addEventListener('click', () => {
      const answer = bn.nextElementSibling;
      
      // Toggle the display of the answer
      answer.classList.toggle('active');
      
      // Toggle the rotation of the arrow
      bn.classList.toggle('active');
  });
});
