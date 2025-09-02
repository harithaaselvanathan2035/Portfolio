//home
var  sidenav = document.querySelector(".side-navbar")

function shownav(){
  sidenav.style.left="0"
}

function closenav(){
   sidenav.style.left="-60%"
}
//projects page
const cards = document.querySelector(".cards");
const cardItems = document.querySelectorAll(".cards > div");

let index = 0;
const totalCards = cardItems.length;

function updateSlider() {
    if (window.innerWidth > 700) {
        // Horizontal slider for large screens
        const cardWidth = 400 + 30 + 70; // card width + margins
        cards.style.transform = `translateX(${-index * cardWidth}px)`;
    } else {
        // Vertical slider for small screens
        const cardHeight = cardItems[index].offsetHeight + 20; // card height + margin
        cards.style.transform = `translateY(${-index * cardHeight}px)`;
    }

    // Remove previous active
    cardItems.forEach(card => card.classList.remove("active"));

    // Add active class to current card
    cardItems[index].classList.add("active");
}

// Optional: auto slider for mobile (vertical)
setInterval(() => {
    index = (index + 1) % totalCards;
    updateSlider();
}, 3000); // change every 3 seconds

// Call initially
updateSlider();

// Update on window resize
window.addEventListener("resize", updateSlider);

//contact page

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(this.action, {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  })
  .then(response => {
    if (response.ok) {
      alert("Form submitted successfully!");
      this.reset();
    } else {
      alert("There was an issue submitting the form.");
    }
  })
  .catch(err => alert("Error: " + err));
});
