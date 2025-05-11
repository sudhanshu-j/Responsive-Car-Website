/*=============== SHOW MENU ===============*/

// Get DOM elements for menu, toggle (hamburger icon), and close (X icon)
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// If the toggle button exists, add an event listener to show the menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu"); // Adds class to make nav visible
  });
}

// If the close button exists, add an event listener to hide the menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu"); // Removes the visible class
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

// Get all navigation links (inside mobile nav)
const navLink = document.querySelectorAll(".nav-link");

// Function to remove the menu when a nav link is clicked
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu"); // Hide menu after click
};

// Add the function to each nav link
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

// Function to change header background on scroll
const scrollHeader = () => {
  const header = document.getElementById("header");

  // If the user scrolls down 50px or more, add class to header
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

// Call scrollHeader on scroll event
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER HOME ===============*/

// Initialize Swiper for the homepage car slider
const swiperHome = new Swiper(".home-swiper", {
  pagination: {
    el: ".swiper-pagination", // Target pagination element
    clickable: true, // Make bullets clickable
    renderBullet: (index, className) => {
      // Custom bullet rendering with leading zero (e.g., 01, 02)
      return (
        '<span class="' +
        className +
        '">' +
        String(index + 1).padStart(2, "0") +
        "</span>"
      );
    },
  },

  // Autoplay configuration: switch slide every 5 seconds
  autoplay: {
    delay: 5000,
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// Get all sections with an id (used for dynamic nav highlight)
const sections = document.querySelectorAll("section[id]");

// Function to update nav link highlighting on scroll
const scrollActive = () => {
  const scrollDown = window.scrollY; // Current scroll position

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight; // Height of current section
    const sectionTop = current.offsetTop - 58; // Position of section from top minus offset
    const sectionId = current.getAttribute("id"); // Get section's ID

    // Get matching nav link using the section's ID
    const sectionsClass = document.querySelector(
      ".nav-menu a[href*=" + sectionId + "]"
    );

    // Add 'active-link' if section is in view
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

// Call scrollActive when scrolling
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/

// Function to show scroll-up button when scrolled down enough
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  // Show if scroll position is past 350px
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

// Trigger scrollUp function on scroll
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/

// Initialize ScrollReveal with basic settings
const sr = ScrollReveal({
  origin: "top", // Animate from top
  distance: "60px", // Distance to travel
  duration: 2000, // Animation duration in ms
  delay: 200, // Initial delay before starting
  reset: true, // Re-run animation every time section enters view
});

// Animate elements in the home section
sr.reveal(`.home-bg`, { scale: 1.1, opacity: 1 }); // Zoom-in background
sr.reveal(`.home-swiper`, { origin: "right", distance: "300px", delay: 800 });
sr.reveal(`.home-data`, { origin: "bottom", distance: "120px", delay: 1600 });
sr.reveal(`.swiper-pagination-bullet`, {
  origin: "top",
  delay: 1800,
  opacity: 0,
});
sr.reveal(`.home-button`, { origin: "top", delay: 2200 });

// About and contact section animations
sr.reveal(`.about-data, .contact-content`, { origin: "left" });
sr.reveal(`.about-video, .contact-image`, { origin: "right" });

// Models cards animation - sequentially
sr.reveal(`.models-card`, { interval: 100 });

// Info section elements
sr.reveal(`.info-image`, { distance: "120px" });
sr.reveal(`.info-number`, { origin: "bottom", distance: "80px", delay: 800 });
sr.reveal(`.info-group`, { interval: 100, delay: 1300 });

// Footer reveal
sr.reveal(`.footer-container`);
